import React from "react"
import onerIO from 'oner-io'
import {Modal} from 'antd'

export const context = onerIO.context({
  rest: true,
  header: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  // 如果设为 true, 需要服务端设置响应头 Access-Control-Allow-Origin 为具体的白名单
  withCredentials: false,
  mock: false,
  urlPrefix: '',
  // 添加额外参数后端会报错
  urlMark: false,
  urlStamp: true,
  willFetch: (vars, config) => {
    // config.header.aaaaa = '6666666666'
  },
  fit(response) {
    if (response.code === '300001006' || response.code === '300001005') {
      const errorMsg = response.message || response.errorMsg || '登录超时，请重新登录'
        if (!document.getElementById('login_timeout')) {
          Modal.confirm({
            title: <span id="login_timeout">{errorMsg}</span>,
            content: '',
            cancelText: '关闭',
            okText: '确定',
            onOk: () => {
              window.location.hash = '#/login'
              Modal.destroyAll()
            },
          })
        }
        throw new Error(errorMsg)
    } else if (response.success === false) {
      this.toReject({
        message: response.message,
        code: response.code,
      })
    } else {
      this.toResolve(response.content)
    }
  },
})

export default context
