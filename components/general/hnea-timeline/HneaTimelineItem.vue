<!--
 * @Description: hnea-ui - TimelineItem
 * @Author: LXG
 * @Date: 2021-04-09
 * @LastEditTime: 2022-05-05
-->
<template>
    <div class="hnea-timeline-item">
        <div class="timeline-item-point"></div>
        <div class="timeline-item-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HneaTimelineItem',
}
</script>

<style lang="scss" scoped>
.hnea-timeline-item {
    position: relative;
    padding: 10px 0 20px 20px;
    border-left: 2px dashed #368bfa;
    margin-left: 10px;
}
.timeline-item-point {
    position: absolute;
    top: 20px;
    left: 0;
    width: 14px;
    height: 14px;
    background-color: #368bfa;
    border-radius: 50%;
    -webkit-transform: translateX(calc(-50% - 1px));
    -moz-transform: translateX(calc(-50% - 1px));
    -o-transform: translateX(calc(-50% - 1px));
    -ms-transform: translateX(calc(-50% - 1px));
    transform: translateX(calc(-50% - 1px));

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 7px;
        height: 7px;
        background-color: #ffffff;
        border-radius: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
}
</style>
