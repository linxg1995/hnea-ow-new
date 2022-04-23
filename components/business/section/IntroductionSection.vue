<!--
 * @Description: 首页 - 协会简介
 * @Author: LXG
 * @Date: 2022-04-21
 * @LastEditors: LXG
 * @LastEditTime: 2022-04-22
-->
<template>
    <section class="section-introduction">
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_xhjj.png">
            </div>
            <div class="my-10 section-content">
                <img src="~/assets/image/logo@2x.png">
                <p>{{text}}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'IntroductionSection',
    filters: {},
    props: {},
    data() {
        return {
            text: `
            海南省电子竞技运动协会（Hainan E-sports Association ，简称HNEA）成立于2015年1月，经海南省民政厅批准成立，是由电子竞技运动爱好者及企事业单位自愿结成的行业性的全省的非营利性的社会组织，隶属于“海南省旅游和文化广电体育厅”管理的唯一全省性电子竞技运动行业协会，协会旨在团结电子竞技工作者、教练员、裁判员、运动员以及愿为海南省电子竞技运动发展出力的社会各界人士，广泛开展电子竞技活动，提高海南省电子竞技运动水平，加强本协会各会员之间的联系与交流，增进与各地区电子竞技协会、俱乐部和运动员之间的友谊，促进电子竞技运动在海南省健康有序发展。
            `.replace(/(\r|\n)/g, '')
        };
    },
    computed: {},
}
</script>

<style lang="scss" scoped>
.section-introduction {
    background-color: rgba(#368bfa, 0.04);
    overflow: hidden;
}
.section-inner {
    overflow: hidden;
}
.section-title {
    text-align: center;

    img {
        display: inline-block;
        width: 35rem;
        max-width: 90vw;
    }
}
.section-content {
    display: grid;
    display: -moz-grid;
    display: -ms-grid;
    align-items: center;
    justify-items: center;
    column-gap: 3vw;
    -moz-column-gap: 3vw;
    -webkit-column-gap: 3vw;
    line-height: 2;
    color: #333333;

    img {
        width: 17rem;
        max-width: 50vw;
    }
    p {
        text-indent: 2rem;
    }
}

@media screen and (min-width: 1024px) {
    .section-content {
        padding-right: 2.5rem;
        padding-left: 2.5rem;
    }
}

@media screen and (min-width: 768px) {
    .section-content {
        grid-template-columns: auto 1fr;
    }
}

@media screen and (max-width: 767.98px) {
    .section-content {
        row-gap: 1rem;
        font-size: 0.9rem;
    }
}
</style>
