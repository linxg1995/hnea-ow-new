<!--
 * @Description: 版块 教学特色
 * @Author: LXG
 * @Date: 2021-04-24
 * @LastEditTime: 2022-05-09
-->
<template>
    <section class="section-features">
        <div
            class="sf-cards"
            :style="{'background-image':`url(${require('~/assets/image/section/sectionBg.png')})`}"
        >
            <div class="sm:container mx-auto px-4 section-inner">
                <div class="my-10 section-title">
                    <img src="~/assets/image/section/section_features.png">
                </div>
                <div class="my-10 section-content">
                    <div
                        v-for="(item,index) in grids"
                        :key="index"
                        class="grid-item"
                    >
                        <div class="rounded-lg grid__inner">
                            <img :src="require('~/assets/icon/'+item.icon+'.png')" />
                            <h3 class="grid-title">
                                <p>{{item.title1}}</p>
                                <p>{{item.title2}}</p>
                            </h3>
                            <p class="grid-text">
                                {{item.desc}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sf-imgs">
            <div class="sm:container mx-auto px-4 my-10  imgs-inner">
                <div
                    v-for="(item,index) in imgContent"
                    :key="index"
                    class="img-item"
                >
                    <img
                        v-lazy-src="{src:item.img}"
                        class="rounded-lg"
                    />
                    <p>{{item.label}}</p>
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
            grids: [
                { icon: 'xiangzi', title1: '稳定的就业保障', title2: '百分之百就业实习渠道', desc: '学生学有所成后输出至行业头部企业/公司实习，真正解决学生与家长的后顾之忧。' },
                { icon: 'laoshi', title1: '师资团队资历丰富', title2: '全面培养电竞教育人才', desc: '拥有强大师资，师资团队来自行业各技术顶尖导师专业化培养电竞综合运营人才和选手。' },
                { icon: 'renzheng', title1: '国家级认证电子竞技', title2: '职业技能培训与鉴定', desc: '定期开展国家级电子竞技运营师、电子竞技三员证等级认证考试，具备行业权威资格认证考核。' },
                { icon: 'qizi', title1: '专业的实践平台', title2: '联动行业大厂开展活动', desc: '结合腾讯、网易等IP厂商开展赛事、营销活动，为学生提供前沿技术学习实践机会。' },
                { icon: 'jiangbei', title1: '大型电竞赛事参与机会', title2: '在校积累赛事经验', desc: '学生有机会参与亚太联合腾讯共同打造的赛事Ip执行当中，拓宽对电竞赛事的视野与认知。 ' },
                { icon: 'tv', title1: '行业大咖线下电竞公开课', title2: '前沿干货学习分享', desc: '邀请行业头部俱乐部、官方内容团队、游戏项目组大咖线下分享职业经验，分析行业趋势。' },
            ],
            imgContent: [
                { img: require('~/assets/image/features/features0.jpg'), label: '知名解说导师' },
                { img: require('~/assets/image/features/features1.jpg'), label: '大型赛事活动' },
                { img: require('~/assets/image/features/features2.jpg'), label: '电竞实践活动' },
                { img: require('~/assets/image/features/features3.jpg'), label: '高校联盟平台' },
                { img: require('~/assets/image/features/features4.jpg'), label: '电竞公开课' },
                { img: require('~/assets/image/features/features5.jpg'), label: '专业电竞裁判' },
            ]
        }
    }
}
</script>

<style lang="scss">
.grid-item:hover .grid__inner {
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
.sf-cards {
    background-size: 100% 100%;
}
.section-inner {
    overflow: hidden;
}
.section-title {
    text-align: center;

    img {
        display: inline-block;
        width: 25rem;
        max-width: 90vw;
    }
}
.section-content {
    display: -moz-grid;
    display: -ms-grid;
    display: grid;
    gap: 2rem 2rem;
    justify-content: center;
}
.grid-item {
    .grid__inner {
        max-width: 17rem;
        margin: 0 auto;
        line-height: 1.5;
        color: #333333;
        background-color: #ffffff;
        transform-style: preserve-3d;

        > p {
            margin-top: 20px;
            font-size: 0.8rem;
        }
    }
    img {
        width: 6rem;
        margin: 0 auto;
    }
    .grid-title {
        margin-top: 20px;
        font-weight: bold;
        text-align: center;
    }
}
.sf-imgs {
    background-color: #ffffff;
    overflow: hidden;
}
.imgs-inner {
    display: -moz-grid;
    display: -ms-grid;
    display: grid;
    gap: 2rem 2rem;
}
.img-item {
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }
    p {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 32px;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
        line-height: 32px;
        text-align: center;
        color: #ebd698;
        background-color: #000000;
    }
}

@media screen and (min-width: 768px) {
    .section-content {
        grid-template-columns: repeat(3, 1fr);
    }
    .grid-item {
        .grid__inner {
            padding: 20px;
        }
    }
    .imgs-inner {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (min-width: 768px) and (max-width: 1023.98px) {
    .grid-item {
        .grid__inner {
            height: 18rem;
        }
    }
}

@media screen and (max-width: 767.98px) {
    .section-content {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem 0.5rem;
    }
    .grid-item {
        .grid__inner {
            padding: 10px;

            .grid-title {
                font-size: 0.9rem;
            }
            .grid-text {
                display: none;
            }
        }
    }
    .imgs-inner {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 639.98px) {
}
</style>
