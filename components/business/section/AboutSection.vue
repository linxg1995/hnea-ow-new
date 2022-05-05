<!--
 * @Description: 板块 关于我们
 * @Author: LXG
 * @Date: 2021-04-06
 * @LastEditTime: 2022-05-05
-->
<template>
    <div
        class="section-about"
        :style="{'background-image':`url(${require('~/assets/image/section/sectionBg.png')})`}"
    >
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_gywm.png" />
            </div>
            <div class="section-content">
                <div
                    v-for="(item,index) in contents"
                    :key="index"
                    class="my-10 content-item"
                >
                    <h3>{{item.title}}</h3>
                    <p>{{item.label}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutSection',
    data() {
        return {
            contents: [
                { title: '协会背景', label: `隶属于“海南省旅游和文化广电体育厅”管理的指定全省性电子竞技运动行业协会。海南省电子竞技运动协会在海南省旅游和文化广电体育厅和海南省民政厅等相关职能部门的带领和指导下，团结各方电子竞技社会力量，加强联系和交流，结合海南国际电竞港专项政策“海六条”的发布，依托政府有关单位，竭力为海南省电子竞技运动的良好有序发展做出应有的贡献。` },
                { title: '政府&政策支持', label: `率属海南省旅游和文化广电体育厅管理的指定全省性电子竞技运动行业协会。` },
                { title: '官方赛事合作机构', label: `拥有行业内顶级赛事举办资源，涵盖腾讯、网易等游戏项目官方赛事指定合作方。` },
                { title: '电竞教育联合办学', label: `联合海南体职院校企合作，设立高端电竞教学实训孵化基地，培养全能电竞人才。` },
                { title: '汇集行业顶级资源', label: `汇集行业知名品牌合作，顶级执行资源，优质内容制作团队以及大型场馆等资源。` },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.section-about {
    background-size: 100% 100%;
}
.section-inner {
    overflow: hidden;
}
.section-title {
    text-align: center;

    img {
        display: inline-block;
        width: 16rem;
        max-width: 90vw;
    }
}
.section-content {
    margin-right: auto;
    margin-left: auto;

    h3 {
        position: relative;
        padding-left: 2rem;
        font-weight: bold;
        line-height: 3;
        color: #333333;

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            display: block;
            width: 1rem;
            height: 1rem;
            background-color: #5ea2fa;
            border-radius: 50%;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }
    }
    p {
        line-height: 1.5;
        text-indent: 2rem;
    }
}

@media screen and (min-width: 1024px) {
    .section-content {
        max-width: 1024px;
    }
}
</style>
