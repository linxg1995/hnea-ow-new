/*
 * @Description: hneaXhr(封装XMLHttpRequest)
 * @Author: LXG
 * @Date: 2021-04-07
 * @LastEditTime: 2022-04-24
 */

const DEFAULT_CONFIG = {}
DEFAULT_CONFIG.baseUrl = 'http://hnea.org.cn' // 上下文URL，缺省 无
// DEFAULT_CONFIG.baseUrl = '/api' // 上下文URL，缺省 无
DEFAULT_CONFIG.withCredentials = true // 携带cookie，缺省 false
DEFAULT_CONFIG.timeout = 1000 // 请求超时时间，缺省 0(不超时)

class HneaXhr {
    constructor() {
        this.xhr = new XMLHttpRequest()
        this.xhr.timeout = DEFAULT_CONFIG.timeout ?? 0
        this.xhr.withCredentials = DEFAULT_CONFIG.withCredentials ?? false

        this.xhr.onload = (e) => {
            this.onload(e)
        }
        this.xhr.onerror = (e) => {
            this.onerror(e)
        }
    }
}

/**
 * @description: get(form-data)
 * @param {String} url 请求地址(接口地址)
 * @param {Object} params 请求参数
 * @param {*} reqCfg 请求配置
 * @return {Promise}
 */
function getFormData(url = '', params = {}, reqCfg = {}) {
    return new Promise((resolve, reject) => {
        let hneaXhr = new HneaXhr()

        if (!(/^(http|https)/.test(url))) {
            url = DEFAULT_CONFIG.baseUrl + url
        }
        let query = Object.entries(params)
        if (query.length) {
            query = query.map(cv => cv.join('=')).join('&')
            url += (url.includes('?') ? `&${query}` : `?${query}`)
        }
        hneaXhr.xhr.open('GET', url)

        hneaXhr.xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=utf-8')

        let formData = new FormData()
        for (const [k, v] of Object.entries(params)) {
            formData.append(k, v)
        }

        hneaXhr.onload = function (e) {
            let res = JSON.parse(hneaXhr.xhr.responseText)
            resolve(res)
        }
        hneaXhr.onerror = function (e) {
            reject(e)
        }

        hneaXhr.xhr.send()
    })
}

export {
    DEFAULT_CONFIG,
    getFormData,
}
