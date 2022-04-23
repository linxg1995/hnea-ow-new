<!--
 * @Description: 默认布局 - 页脚
 * @Author: LXG
 * @Date: 2022-04-21
 * @LastEditors: LXG
 * @LastEditTime: 2022-04-21
-->
<template>
    <div class="py-2 footer">
        <p>
            <a
                href="http://beian.miit.gov.cn/"
                target="_blank"
            >琼ICP备2021001758号-2</a>
        </p>
        <p>COPYRIGHT © HN-ESPORTS. 海南省电子竞技运动协会</p>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
    display: grid;
    display: -moz-grid;
    display: -ms-grid;
    align-items: center;
    text-align: center;
    font-size: 0.8rem;
    color: #ffffff;
    background-color: #0a1823;
}
</style>
