/*
 * @Description: amap api 2.0
 * @Author: LXG
 * @Date: 2021-04-04
 * @LastEditTime: 2022-04-22
 */

export default {
    /**
     * @description: 加载amap jsapi
     * @return {AMap}
     */
    init() {
        return new Promise((resolve, reject) => {
            if (window.AMap) {
                resolve(window.AMap)
            } else {
                window.loadAmap = function () {
                    console.log('loadAmap success')
                    resolve(window.AMap)
                }
                let script = document.createElement('script')
                script.type = 'text/javascript'
                script.src = 'https://webapi.amap.com/maps?v=2.0&key=bd8f52d01ec9b97763cbdba2532f9ed6&callback=loadAmap'
                script.async = 'async'
                script.onerror = reject
                document.head.appendChild(script)
            }
        })
    }
}
