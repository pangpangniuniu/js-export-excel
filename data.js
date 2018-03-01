/**
 * @authors xuli (xuli@ijovo.com)
 * @date    2018-02-24 15:25:34
 */

var dataList = {
  name: '',
  data: [{
    order: {
      address: '重庆市渝北区小白街1号',
      create_time: '2017-12-20 10:25:17',
      distribut_require: '上午',
      flPhone: '',
      order_id: '2773',
      sales_model: '货到付款',
      shipping_man: '小王',
      shipping_phone: '13112345678',
      total: '3801.92',
      user_name: '小张'
    },
    products: [{
      big_deliver_num: 0.2,
      buy_num: '0.20',
      is_shift: 1,
      price: '10元/斤',
      product_unit: '斤',
      remark: '',
      small_deliver_num: 0,
      spec: '散装',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '无',
      title: '熟切牛肉',
      total: '2.00'
    }, {
      big_deliver_num: 0.3,
      buy_num: '0.30',
      is_shift: 1,
      price: '15元/斤',
      product_unit: '斤',
      remark: '洗净才要，不然退货',
      small_deliver_num: 0,
      spec: '散装（斤）',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '切块',
      title: '猪排骨',
      total: '4.80'
    }, {
      big_deliver_num: 0.5,
      buy_num: '0.50',
      is_shift: 1,
      price: '50元/斤',
      product_unit: '斤',
      remark: '',
      small_deliver_num: 0,
      spec: '散装（斤）',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '切片',
      title: '牛排',
      total: '35.00'
    }, {
      big_deliver_num: 0.4,
      buy_num: '0.40',
      is_shift: 1,
      price: '60元/斤',
      product_unit: '斤',
      remark: '',
      small_deliver_num: 0,
      spec: '散装（斤）',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '无',
      title: '羊肉',
      total: '24.00'
    }, {
      big_deliver_num: 0.3,
      buy_num: '0.30',
      is_shift: 1,
      price: '10元/斤',
      product_unit: '斤',
      remark: '',
      small_deliver_num: 0,
      spec: '散装',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '无',
      title: '生牛肉',
      total: '3.00'
    }, {
      big_deliver_num: 0.4,
      buy_num: '0.40',
      is_shift: 1,
      price: '10元/斤',
      product_unit: '斤',
      remark: '',
      small_deliver_num: 0,
      spec: '散装',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '无',
      title: '生猪肉',
      total: '4.00'
    }, {
      big_deliver_num: 2,
      buy_num: '2.00',
      is_shift: 1,
      price: '10元/个',
      product_unit: '个',
      remark: '',
      small_deliver_num: 0,
      spec: '散装',
      spec_nums: '1.00',
      stock_unit: '个',
      tag: '无',
      title: '生鸡肉',
      total: '20.00'
    }, {
      big_deliver_num: 3,
      buy_num: '3.00',
      is_shift: 1,
      price: '20元/只',
      product_unit: '只',
      remark: '',
      small_deliver_num: 0,
      spec: '散装',
      spec_nums: '1.00',
      stock_unit: '只',
      tag: '无',
      title: '生鸭肉',
      total: '60.00'
    }, {
      big_deliver_num: 0.3,
      buy_num: '0.30',
      is_shift: 1,
      price: '30元/斤',
      product_unit: '斤',
      remark: '',
      small_deliver_num: 0,
      spec: '散装',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '无',
      title: '生羊肉',
      total: '9.00'
    }]
  }, {
    order: {
      address: '重庆市渝北区小白街2号',
      create_time: '2017-12-21 10:25:17',
      distribut_require: '下午',
      flPhone: '',
      order_id: '2774',
      sales_model: '货到付款',
      shipping_man: '小孙',
      shipping_phone: '13112345679',
      total: '3801.92',
      user_name: '小吴'
    },
    products: [{
      big_deliver_num: 0.2,
      buy_num: '0.20',
      is_shift: 1,
      price: '10元/斤',
      product_unit: '斤',
      remark: '',
      small_deliver_num: 0,
      spec: '散装',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '无',
      title: '熟切牛肉',
      total: '2.00'
    }, {
      big_deliver_num: 0.3,
      buy_num: '0.30',
      is_shift: 1,
      price: '15元/斤',
      product_unit: '斤',
      remark: '洗净才要，不然退货',
      small_deliver_num: 0,
      spec: '散装（斤）',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '切块',
      title: '猪排骨',
      total: '4.80'
    }, {
      big_deliver_num: 0.5,
      buy_num: '0.50',
      is_shift: 1,
      price: '50元/斤',
      product_unit: '斤',
      remark: '',
      small_deliver_num: 0,
      spec: '散装（斤）',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '切片',
      title: '牛排',
      total: '35.00'
    }, {
      big_deliver_num: 0.4,
      buy_num: '0.40',
      is_shift: 1,
      price: '60元/斤',
      product_unit: '斤',
      remark: '',
      small_deliver_num: 0,
      spec: '散装（斤）',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '无',
      title: '羊肉',
      total: '24.00'
    }, {
      big_deliver_num: 0.3,
      buy_num: '0.30',
      is_shift: 1,
      price: '10元/斤',
      product_unit: '斤',
      remark: '',
      small_deliver_num: 0,
      spec: '散装',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '无',
      title: '生牛肉',
      total: '3.00'
    }, {
      big_deliver_num: 0.4,
      buy_num: '0.40',
      is_shift: 1,
      price: '10元/斤',
      product_unit: '斤',
      remark: '',
      small_deliver_num: 0,
      spec: '散装',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '无',
      title: '生猪肉',
      total: '4.00'
    }, {
      big_deliver_num: 2,
      buy_num: '2.00',
      is_shift: 1,
      price: '10元/个',
      product_unit: '个',
      remark: '',
      small_deliver_num: 0,
      spec: '散装',
      spec_nums: '1.00',
      stock_unit: '个',
      tag: '无',
      title: '生鸡肉',
      total: '20.00'
    }, {
      big_deliver_num: 3,
      buy_num: '3.00',
      is_shift: 1,
      price: '20元/只',
      product_unit: '只',
      remark: '',
      small_deliver_num: 0,
      spec: '散装',
      spec_nums: '1.00',
      stock_unit: '只',
      tag: '无',
      title: '生鸭肉',
      total: '60.00'
    }, {
      big_deliver_num: 0.3,
      buy_num: '0.30',
      is_shift: 1,
      price: '30元/斤',
      product_unit: '斤',
      remark: '',
      small_deliver_num: 0,
      spec: '散装',
      spec_nums: '1.00',
      stock_unit: '斤',
      tag: '无',
      title: '生羊肉',
      total: '9.00'
    }]
  }]
}

var qrCodes_g = [
  `iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAD8UlEQVR4Xu2b0a7DMAhD1///6E66bzeTemQZUrp5rzQEbDBJtx3neZ6vfMYgcISQMVz8BRJCZvERQobxEUJCyDQEhsWTGRJChiEwLBzskOM4toZM16I1Hvf5cfnRPWRcwEuBhJDmfnEBXsOjjhpXcOmQYZKsEkIVrDaQWsG0P/lTO0jNx/UvD3UCRE2AACS7DYA4k6rz+4g/HfJfsnYXXAhZEFA7cHyHqKeUtQJVQNTnCUDytz0/V7K2B1ys+SFk+YKSAHGHdjoEEIhkXX9jbh97uyWru4PIf3d+5aes7oAJMFfSyH93fiFEPPaGkM1DPx1iAk4SRacq9VCRDhF/t9cNWLf/x80QqvhuwLr9hxBRMh9HCFUw2e8eqrQ/xU921b99MaSAyE4Bd1co7U/xk131H0KKX1bSKZC+bwkhTyeEWtS1u/cEd70bP60v7xDa0LW7gLrr3fhpfQgBSVIPDQQ42UPItxFCjN9tVyucKvT2fOg79bsDpP1DCCG02R5CNgNO2/0cIWrCBCAdS2n9aqeZQPFTPNV2yk++qZNDslOCtD6EFP+DKoRcl1w6xPx+hAqMJPXjZSQde+n1sarRqiS5z1P86ttZypfiJYLkDqGKUDWeEnDtIWRBkCrCBZzWh5AQclkjVKAoWaSxJFFUoWSn/UlCVTvtR/lSx5I9hMDvwGiIU8UTAfIpy60Y6gCy0/5qB7j7pUMWBAhQ104FcDsh1LLVAdJ+akfIkgFvJtT9qUBkySKAQsj136pDiPhjbVeiCHCyp0NAw0gRHidZJGGUsKr57QCJM0WNv71DQohHCV4M3YqmCvbCf73Iv2p3Z4qbTwh5+k3drQB1PZ1S3A4miVU7hvKjVy3YIbRBtz2EdCMs+g8hImDdj4cQeJnXTQCdilzNd/1Tgbj44AypHpoUsAsYDWHXfwgxb8oEIBUcEUinJirA7Td1NSACIJI17E+RJElqAagE0/5ux8gzxN2wOiGSHJUgNT+SRHX/ELIgFkJMSUyHwI+TqUVpaKt22k+VFHretWO83T+2pqHZnqDYgW48tD6EhJDrGlAlya64ELKXECKM7O4xXPX/9ZJFgJA9hGz+C1kIgZ6sniEEONnTIcUdogLqEkTHeJoRZLdfnag35eoOCSHDb+rUAWQngtMhm+8RjyeENJHsVLGuJNL+LgEUv7y/+y5L3ZAAoBlD+6mvzykekqgQIh6ricAQsiBAFRbJAsDUilOfVyWLnlft1DHkjySO8JDvIeTQtbsJqx1HM0f1F0KG3fxDyK8R4kpQ1msI4AzR3OVpF4EQ4iJYvD6EFAPqugshLoLF60NIMaCuuxDiIli8PoQUA+q6ewPYLiM+Qn9mxgAAAABJRU5ErkJggg==`,
  `iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEFUlEQVR4Xu2b0Y6rMAxEL///0V3pvkGlHh2NQ8Pu9NXg2DP2OAF6vF6v17/+tkHgKCHbcPE/kBKyFx8lZDM+SkgJ2Q2BzeLpDCkhmyGwWTjYIcdx3BoyHYuu8aTXb5cfnUO2C/hSICVkcb+kAF/Do47aruDaIZtJsiWEKtg2kK1gWp/82Q6y+aT+9VAnQGwCBCDZYwDkTJrO7y3+dshZsu4uuBJyQcB24PYdYncp1wq0gNjrCUDyd3t+qWTdHvCw5peQywtKAiQd2u0QQKCS9fmNebztXS1ZqzuI/K/Ob3yXtTpgAiyVNPK/Or8SIre9JeTmod8OCQEniaJdld1UtEPkd3urAVvt/3EzhCp+NWCr/ZcQKZmPI4QqmOzfHqq0PsVPdus/PhhSQGSngFdXKK1P8ZPd+i8hww8raRdI71tKyNMJoRZN7ek5Ib0/jZ/uH+8QWjC1p4Cm96fx0/0lBCTJbhoIcLKXkN9GCDH+bbutcKrQr+dD79S/HSCtX0IIoZvtJeRmwGm5P0eITZgApG0p3X+100yg+CmeaTvlp0/q5JDslCDdX0KG/0FVQj6XXDskfD9CBUaS+vYwMt320uPl1RpOEkbx2aezlA9JLhGEHUILUMKUgK2waX8l5IJACTkD0g65FEja8aQosWTZAHHB4V2bBYDyIQmjmUXxkB07hBIgu02QArZ2K4k2XipAG28JgQ/z7CbCEqC3vdQBZLcVlyZEkjId7+0dQoBSQLbCUsAoHiJ8Ol6djz0Y6gVgiE9rfAkZ1uCU8BJSQk4qGHe8lax0ptj7SdNpJsQAScmleMiO2150EH75RxJVQogB+aiB3JWQm59llRBCYJgQt5y/enUH0UGSZp7NiHaB8QyxAdnrS4hFbPH1JWQxwNZ9CYFdlAXUXk/nhlTzU/9UIDbftxlFB8P0HGADTAGjIZz6LyHhSZkApIIjAmnXZAsSd1kUsF2QricAKlnhoxEigCqYJIj8W7uteBs/xaM7xAaMAUjCV3esza+ELP5qpYS0Q04iEkuWlRAa2mQnCaT7qQNIglI7xV9C4CBsCSbCSkgoiSUE/q9BFWYBpG219ffnOySdCSkh9qBKBfX4GVJCbpYU2sWVkBLyUXWoQH6dZNGQJU23Q5euJzsREL8PsYCkAFHCVtLIXzrk2yHyfUkJuZQcdVhqTzvy8R1iNTJNmNaLJWNxx1H88TmEFiA7SQjNCOoIWp8KhPxT/Hp9+5FDWoEEAEkWJZjGRwVA8cXrl5AzxY8jhCo0tdsKXA0gSZJdn/DRM4QcpvYSAqJHFZASkA5Nis8SPD3j7Exph8j/SBLBVGBUwEgIOah9FoESMotn7K2ExBDOOighs3jG3kpIDOGsgxIyi2fsrYTEEM46KCGzeMbefgB5wi8+XtSt2wAAAABJRU5ErkJggg==`
]