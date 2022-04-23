<!--
 * @Description: 版块 业务内容
 * @Author: LXG
 * @Date: 2021-03-26
 * @LastEditTime: 2022-04-22
-->
<template>
    <section class="section-business">
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_business.png">
            </div>
            <div class="my-10 section-content">
                <div
                    v-for="item in contents"
                    :key="item.title"
                    class="proj-item"
                >
                    <div class="py-3 px-5 rounded-lg proj-inner">
                        <img :src="require('~/assets/icon/'+item.icon+'.png')" />
                        <div>
                            <h3>{{item.title}}</h3>
                            <p>{{item.descTop}}</p>
                            <p>{{item.descBottom}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'BusinessSection',
    data() {
        return {
            contents: [
                { title: '赛事IP', icon: 'saishiip', descTop: '赛事IP运营', descBottom: '打造精品项目' },
                { title: '电竞教育', icon: 'dianjingjiaoyu', descTop: '校企联合办学', descBottom: '电竞人才培养' },
                { title: '活动策划', icon: 'huodongcehua', descTop: '赛事策划筹备', descBottom: '项目执行落地' },
                { title: '场馆', icon: 'changguan', descTop: '电竞综合场馆', descBottom: '大型赛事场馆' },
                { title: '职业鉴定', icon: 'zhiyejianding', descTop: '电竞职业鉴定', descBottom: '行业就业推荐' },
                { title: '技能培训', icon: 'jinengpeixun', descTop: '电竞裁判培训', descBottom: '赛事实操培训' }
            ]
        }
    },
}
</script>

<style lang="scss">
.proj-item:hover .proj-inner {
    animation-name: rotate;
    animation-duration: 0.5s;
    animation-timing-function: linear;
}
@keyframes rotate {
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
    }
}
</style>

<style lang="scss" scoped>
.section-business {
    background-color: #ffffff;
    overflow: hidden;
}
.section-inner {
    overflow: hidden;
}
.section-title {
    text-align: center;

    img {
        display: inline-block;
        width: 24rem;
        max-width: 60vw;
    }
}
.section-content {
    display: -moz-grid;
    display: -ms-grid;
    display: grid;
    gap: 2.5vw 2.5vw;
    justify-content: center;
}
.proj-item {
    .proj-inner {
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: space-around;
        line-height: 1.5;
        color: #333333;
        background-color: rgba(#368bfa, 0.05);
        transform-style: preserve-3d;
    }

    img {
        width: 3rem;
    }
    h3 {
        line-height: 1.8;
        font-size: 1.3rem;
        font-weight: bold;
    }
    p {
        font-size: 0.8rem;
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
        grid-template-columns: repeat(3, 13rem);
    }
}

@media screen and (max-width: 767.98px) {
    .section-content {
        grid-template-columns: repeat(2, 1fr);
    }
    .proj-item {
        h3 {
            font-size: 1.1rem;
        }
    }
}
</style>
