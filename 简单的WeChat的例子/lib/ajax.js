/**
 * url API
 * data 参数
 * success 成功cb
 * fail 失败cb
 */
function POST(url, data, success, fail) {
  wx.showLoading({
    title: '拼命加载中',
    success: function (res) {
      wx.request({
        url: url,
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        data: data,
        method: 'POST',
        success: function (res) {
          success(res);
          wx.hideLoading();
        },
        fail: res => {
          fail(res);
          wx.showToast({
            title: '网络连接失败',
            icon: 'loading',
            duration: 2000
          });
        }
      })
    }
  });
}

module.exports = {
  POST: POST
}