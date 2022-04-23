<!--
 * @Description: Amap
 * @Author: LXG
 * @Date: 2021-04-04
 * @LastEditTime: 2022-04-22
-->
<template>
    <div id="container-amap"></div>
</template>

<script>
import amapApi from './index.js'

export default {
    name: 'Amap',
    data() {
        return {
            amapInst: null
        }
    },
    methods: {
        addMarker(beforeAdd) {
            amapApi.init().then((AMap) => {
                const option = beforeAdd(AMap)
                if (!option) { return; }

                // position: 点标记在地图上显示的位置
                const marker = new AMap.Marker(option)
                this.amapInst.add(marker)
            })
        }
    },
    mounted() {
        amapApi.init().then((AMap) => {
            this.amapInst = new AMap.Map('container-amap', {
                zoom: 16, // 级别
                center: [110.372781, 20.012859], // 中心点坐标
            })
            this.$emit('inited', this.amapInst)
        })
    },
}
</script>

<style lang="scss" scoped>
#container-amap {
    width: 100%;
    height: 100%;
}
</style>
