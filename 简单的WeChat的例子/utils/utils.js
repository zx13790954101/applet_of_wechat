// 查询事件列表的Base URL
const API_URL_L = "http://v.juhe.cn/todayOnhistory/queryEvent.php"
// 查询详细信息的Base URL
const API_URL_D = "http://v.juhe.cn/todayOnhistory/queryDetail.php"
// 申请API获得的KEY
const API_KEY = "YOUR API KEY"

// 获取事件列表
function fetchEvents(today) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: API_URL_L,
      data: {
        key: API_KEY,
        date: today
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: resolve,
      fail: reject
    })
  })
  return promise
}

function getEvents() {
  var tmpDate = new Date()
  var today = tmpDate.getMonth() + 1
  today = today + '/' + tmpDate.getDate()
  return fetchEvents(today)
    .then(function (res) {
      // console.log(res.data.result)
      return res.data.result
    })
    .catch(function (err) {
      console.log(err)
      return []
    })
}

// 获取详细信息
function fetchDetail(e_id) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: API_URL_D,
      data: {
        key: API_KEY,
        e_id: e_id
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: resolve,
      fail: reject
    })
  })
  return promise
}

function getDetail(e_id) {
  return fetchDetail(e_id)
    .then(function (res) {
      // console.log(res.data.result)
      return res.data.result
    })
    .catch(function (err) {
      console.log(err)
      return []
    })
}

module.exports = {
  getEvents: getEvents,
  getDetail: getDetail
}