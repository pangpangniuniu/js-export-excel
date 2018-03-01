/**
 * @authors xuli (xuli@ijovo.com)
 * @date    2018-02-25 10:11:36
 */
var header_g, fileName_g, sheetsName_g, mainHtml_g, sheetHtml_g
// 导出函数
function exportExcel () {
  sheetsName_g = getSheetsName()
  fileName_g = getFileName()
  sheetHtml_g = getSheetXml()
  mainHtml_g = getMainXml()
  let XLSData = 'data:application/vnd.ms-excelbase64,' + window.btoa(window.unescape(encodeURIComponent(mainHtml_g)))
  download(XLSData)
}
function download (base64data) {
  let blob
  if (window.navigator.msSaveBlob) {
    blob = base64ToBlob(base64data)
    window.navigator.msSaveBlob(blob, '测试.xlsx')
    return false
  }
  let a = document.getElementById('download')
  if (window.URL.createObjectURL) {
    blob = base64ToBlob(base64data)
    a.href = window.URL.createObjectURL(blob)
    a.download = fileName_g
    document.getElementById('download').click()
    return
  }
  a.href = base64data
  a.download = fileName_g
  document.getElementById('download').click()
}
// 获取sheet名称
function getSheetsName () {
  let sheetsName = []
  dataList.data.forEach((item) => {
    sheetsName.push(item.order.order_id)
  })
  return sheetsName
}
// 获取文件名
function getFileName () {
  let fileName = ''
  let day = new Date().toLocaleDateString().split('/')
  if (parseInt(day[1]) < 10) {
    day[1] = '0' + day[1]
  }
  if (parseInt(day[2]) < 10) {
    day[2] = '0' + day[2]
  }
  let time = new Date().toTimeString().split(' ')[0].replace(':', '').replace(':', '')
  fileName = '送货单-' + day[1] + day[2] + time + '.xls'
  return fileName
}
// 创建文件流
function base64ToBlob (base64Data) {
  let arr = base64Data.split(',')
  let mime = arr[0].match(/:(.*?)/)[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8ClampedArray(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
// 获取所有xml代码
function getMainXml () {
  let mainHtml = ''
  let sheets = ''
  let printFormula = '' // 打印固定头部
  let codesXml = ''
  if (sheetsName_g.length > 0) {
    for (let i = 0; i < sheetsName_g.length; i++) {
      let name = sheetsName_g[i]
      let sheetItem = `
    <x:ExcelWorksheet>
     <x:Name>${name}</x:Name>
     <x:WorksheetSource HRef=3D"SongHuoDan/sheet${name}.xml"/>
    </x:ExcelWorksheet>`
      sheets += sheetItem
      printFormula += `
  <x:ExcelName>
   <x:Name>Print_Titles</x:Name>
   <x:SheetIndex>${i + 1}</x:SheetIndex>
   <x:Formula>=3D'${name}'!$1:$7</x:Formula>
  </x:ExcelName>
  <x:ExcelName>
   <x:Name>Print_Titles</x:Name>
   <x:SheetIndex>${i + 1}</x:SheetIndex>
   <x:Formula>=3D'${name}'!$1:7</x:Formula>
  </x:ExcelName>`

      let code = qrCodes_g[i] // 头部二维码
      let codeXml = `
------BOUNDARY_0008----
Content-Location: file:///C:/0E8D990C/SongHuoDan/code${name}.xml
Content-Transfer-Encoding: base64
Content-Type: image/jpeg

${code}`
      codesXml += codeXml
    }
  }
  mainHtml = `MIME-Version: 1.0
X-Document-Type: Workbook
Content-Type: multipart/related; boundary="----BOUNDARY_0008----"

------BOUNDARY_0008----
Content-Location: file:///C:/0E8D990C/SongHuoDan.xml
Content-Transfer-Encoding: quoted-printable
Content-Type: text/html; charset="us-ascii"

<html xmlns:o=3D"urn:schemas-microsoft-com:office:office"
xmlns:x=3D"urn:schemas-microsoft-com:office:excel"
xmlns=3D"http://www.w3.org/TR/REC-html40">

<head>
<xml>
 <o:DocumentProperties>
  <o:Author>ijovo</o:Author>
  <o:LastAuthor>ijovo</o:LastAuthor>
  <o:Company>ijovo</o:Company>
  <o:Version>1.0</o:Version>
 </o:DocumentProperties>
</xml>
<!--[if gte mso 9]>
<xml>
 <x:ExcelWorkbook>
  <x:ExcelWorksheets>${sheets}
  </x:ExcelWorksheets>
 </x:ExcelWorkbook>
 ${printFormula}
</xml>
<![endif]-->
</head>
</html>` + sheetHtml_g + `

${codesXml}

------BOUNDARY_0008------`
  return mainHtml
}
// 获取每个sheet的xml代码
function getSheetXml () {
  let sheetHtml = ''
  let sheets = ''
  for (let i = 0; i < dataList.data.length; i++) {
    let name = dataList.data[i].order.order_id
    // MIME要求格式必须顶格……所以这里排版比较乱……
    let sheetItem = `

------BOUNDARY_0008----
Content-Location: file:///C:/0E8D990C/SongHuoDan/sheet${name}.xml
Content-Transfer-Encoding: quoted-printable
Content-Type: text/html; charset="us-ascii"

<html 
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:x="urn:schemas-microsoft-com:office:excel"
  xmlns="http://www.w3.org/TR/REC-html40">
  <head>
    <xml>
      <x:WorksheetOptions>
        <x:ProtectContents>False</x:ProtectContents>
        <x:ProtectObjects>False</x:ProtectObjects>
        <x:ProtectScenarios>False</x:ProtectScenarios>
      </x:WorksheetOptions>
    </xml>
    <style>
      <!-- @page
        {mso-footer-data:"&C\\7B2C &P \\9875\\FF0C\\5171 &N \\9875";
        margin:0.748in 0.195in 0.748in 0.195in;
        mso-header-margin:0.51in;
        mso-footer-margin:0.51in;}
      -->
    </style>
  </head>
  <body>`
    let table = `
    <table border="1" width="100%" rull="all" style="border-collapse:collapse;font-family:宋体;font-size:12px;">`
    table += `
      <tr>
        <td colspan="12" height="26" style="border-bottom:1px solid #fff;border-right:1px solid #fff;"></td>
      </tr>
      <tr>
        <td colspan="11" height="110" style="text-align:center;font-size:28px;font-weight:bold;background:#fff;vertical-align:middle;border-left:1px solid #fff;border-right:1px solid #fff;">
          重庆农业科技发展有限公司<br style='mso-data-placement:same-cell;'/>送货单
        </td>
        <td style="border-right:1px solid #fff;">
          <img src=3D'code${dataList.data[i].order.order_id}.xml' />
        </td>
      </tr>
      <tr>
        <td colspan="5" style="font-size:13px;">客户：${dataList.data[i].order.user_name}</td>
        <td colspan="4" style="font-size:13px;">联系人：${dataList.data[i].order.shipping_man}</td>
        <td colspan="3" style="font-size:13px;">订单号：${dataList.data[i].order.order_id}</td>
      </tr>
      <tr>
        <td colspan="5" style="font-size:13px;">地址：${dataList.data[i].order.address}</td>
        <td colspan="4" style="font-size:13px;">固定电话：${dataList.data[i].order.flPhone}</td>
        <td colspan="3" style="font-size:13px;">手机：${dataList.data[i].order.shipping_phone}</td>
      </tr>
      <tr>
        <td colspan="5" style="font-size:13px;">下单日期：${dataList.data[i].order.create_time}</td>
        <td colspan="4" style="font-size:13px;">送货时间：${dataList.data[i].order.distribut_require}</td>
        <td colspan="3" style="font-size:13px;">结算方式：${dataList.data[i].order.sales_model}</td>
      </tr>
      <tr>
        <td colspan="12" height="5"></td>
      </tr>
      <tr>
        <td width="46" height="42" style="text-align:center;font-weight:bold;">序号</td>
        <td width="120" style="text-align:center;font-weight:bold;">产品名称</td>
        <td width="53" style="text-align:center;font-weight:bold;">规格</td>
        <td width="40" style="text-align:center;font-weight:bold;">单位</td>
        <td width="44" style="text-align:center;font-weight:bold;">订单量</td>
        <td width="72" style="text-align:center;font-weight:bold;">单价</td>
        <td width="56" style="text-align:center;font-weight:bold;">发货量1</td>
        <td width="56" style="text-align:center;font-weight:bold;">发货量2</td>
        <td width="54" style="text-align:center;font-weight:bold;">签收量</td>
        <td width="63" style="text-align:center;font-weight:bold;">退货量</td>
        <td width="95" style="text-align:center;font-weight:bold;">金额（元）</td>
        <td width="108" style="text-align:center;font-weight:bold;">备注</td>
      </tr>`
    if (dataList.data[i].products.length > 0) {
      for (let k = 0; k < dataList.data[i].products.length; k++) {
        let pro = dataList.data[i].products
        let receive = parseFloat(pro[k].big_deliver_num) + parseFloat(pro[k].small_deliver_num)
        let total = parseFloat(pro[k].price.split('/')[0].replace('元', '')) * receive
        let tr = `
      <tr>`
        tr += `
        <td min-height="20" style="text-align:center;font-size:13px;">${k + 1}</td>
        <td style="text-align:left;font-size:13px;">${pro[k].title}</td>
        <td style="text-align:center;font-size:13px;">${pro[k].spec}</td>
        <td style="text-align:center;font-size:13px;">${pro[k].product_unit}</td>
        <td style="text-align:center;font-size:13px;">${pro[k].buy_num}</td>
        <td style="text-align:center;font-size:13px;">${pro[k].price}</td>
        <td style="text-align:center;font-size:13px;">${pro[k].big_deliver_num}</td>
        <td style="text-align:center;font-size:13px;">${pro[k].small_deliver_num}</td>
        <td style="text-align:center;font-size:13px;">${receive}</td>
        <td style="text-align:center;font-size:13px;"></td>
        <td style="text-align:center;font-size:13px;">${total}</td>
        <td style="text-align:left;font-size:13px;">${pro[k].remark}</td>
      </tr>`
        table += tr
      }
    }
    table += `
      <tr>
        <td colspan="10" height="20" style="text-align:center;font-size:13px;font-weight:bold;">应 收：</td>
        <td style="text-align:center;font-size:13px;">${dataList.data[i].order.total}</td>
        <td></td>
      </tr>
      <tr>
        <td colspan="10" height="20" style="text-align:center;font-size:13px;font-weight:bold;">实 收：</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="6" height="80" style="font-size:13px;vertical-align:middle;">
          公司地址：重庆市江津区双福国际农贸市场22A-004
          <br style='mso-data-placement:same-cell;'/>
          联系电话：13996198545
          <br style='mso-data-placement:same-cell;'/>
          备注：商品数量和计量单位按实际发货为准
        </td>
        <td colspan="4" style="font-size:13px;vertical-align:middle;">
          送货人：
          <br style='mso-data-placement:same-cell;'/>
          <br style='mso-data-placement:same-cell;'/>
          日 期 ：
        </td>
        <td colspan="2" style="font-size:13px;vertical-align:middle;">
          签收人：
        </td>
      </tr>
    </table>`
    sheetItem += table + `
  </body>
</html>`
    sheets += sheetItem
  }
  sheetHtml = sheets
  return sheetHtml
}