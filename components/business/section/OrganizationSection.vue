<!--
 * @Description: 板块 组织架构
 * @Author: LXG
 * @Date: 2021-04-06
 * @LastEditTime: 2022-05-05
-->
<template>
    <div
        class="section-organization"
        :style="{'background-image':`url(${require('~/assets/image/section/sectionBg.png')})`}"
    >
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_zzjg.png" />
            </div>
            <div class="my-10 section-content">
                <img src="@/assets/image/section/zzjg_chart.png" />
                <p>特此声明（法律提醒）：以上人员均为海南省电子竞技运动协议认证人员，若有他人冒充本协会身份以海南省电子竞技协会名义进行商务谈判等商业行为，本协会有权保留追究其法律责任。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrganizationSection'
}
</script>

<style lang="scss" scoped>
.section-organization {
    background-size: 100% 100%;
}
.section-inner {
    overflow: hidden;
}
.section-title {
    text-align: center;

    img {
        display: inline-block;
        width: 27rem;
        max-width: 90vw;
    }
}
.section-content {
    text-align: center;

    img {
        display: inline-block;
        width: 56rem;
        max-width: 90vw;
    }
    p {
        margin-top: 1rem;
        line-height: 1.5;
        color: #368bfa;
    }
}
</style>
