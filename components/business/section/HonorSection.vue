<!--
 * @Description: 板块 所获荣誉
 * @Author: LXG
 * @Date: 2021-04-06
 * @LastEditTime: 2022-05-09
-->
<template>
    <div class="section-honor">
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_shry.png" />
            </div>
            <div class="my-10 section-content">
                <div class="grids__outer">
                    <div class="content-left">
                        <img src="~/assets/image/section/shry_lol.png" />
                    </div>
                    <div class="content-right">
                        <div
                            v-for="(item,index) in lolList"
                            :key="index"
                            class="grid-item"
                        >
                            <img
                                v-lazy-src="{src:require(`~/assets/image/honor/`+item.img+'.jpg')}"
                                class="rounded-lg"
                            />
                            <p class="py-1 px-3">
                                {{item.label}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="grids__outer">
                    <img
                        class="content-left"
                        src="~/assets/image/section/shry_wzry.png"
                    />
                    <div class="content-right">
                        <div
                            v-for="(item,index) in wzryList"
                            :key="index"
                            class="grid-item"
                        >
                            <img
                                v-lazy-src="{src:require(`~/assets/image/honor/`+item.img+'.jpg')}"
                                class="rounded-lg"
                            />
                            <p class="py-1 px-3">
                                {{item.label}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HonorSection',
    data() {
        return {
            lolList: [
                { img: 'lol_2019nest', label: '2019年NEST全国电子竞技大赛海南站冠军' },
                { img: 'lol_2019iefquanqiu', label: '2019年IEF英雄联盟全球亚军' },
                { img: 'lol_2020chengshijianianhua', label: '2020英雄联盟城市嘉年华海南省冠军' },
                { img: 'lol_2020txyundonghui', label: '2020腾讯电竞运动会英雄联盟省队赛全国亚军' },
                { img: 'lol_2020hndzjjgks', label: '2020年海南省电子竞技公开赛冠军' },
                { img: 'lol_9gxlshn', label: '第九届英雄联盟全国高校联赛海南亚军' },
                { img: 'lol_9gxlshnydzy', label: '第九届英雄联盟全国高校联赛云顶之弈——海南冠军' },
            ],
            wzryList: [
                { img: 'wzry_2019nest', label: '2019年NEST全国电子竞技大赛海口冠军' },
                { img: 'wzry_2019iefquanqiu', label: '2019年IEF王者荣耀全球总冠军' },
                { img: 'wzry_2qgdshnhx', label: '第二届王者荣耀全国大赛华南大区海南省城市海选赛冠军' },
                { img: 'wzry_7gxlshnzgj', label: '第七届王者荣耀高校联赛海南站冠军' },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.section-honor {
    background-color: #ffffff;
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
.content-left {
    width: 200px;
    height: 200px;

    img {
        width: 100%;
        height: 100%;
    }
}
.content-right {
    display: -moz-grid;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(auto-fill, 19rem);
}
.grid-item {
    position: relative;
    height: 200px;

    img {
        width: 100%;
        height: 100%;
    }
    p {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        line-height: 1.5;
        font-size: 0.8rem;
        color: #ebd698;
        background-color: #020217;
    }
}
@media screen and (min-width: 768px) {
    .section-content {
        .grids__outer + .grids__outer {
            margin-top: 1rem;
        }
    }
    .content-left {
        float: left;
        margin-right: 0.5rem;
    }
    .content-right {
        justify-content: space-evenly;
        gap: 0.5rem 0.5rem;
    }
}
@media screen and (max-width: 1023.98px) {
    .content-left {
        width: 150px;
        height: 150px;
    }
    .content-right {
        grid-template-columns: repeat(auto-fill, 15rem);
    }
    .grid-item {
        height: 150px;
    }
}
@media screen and (max-width: 767.98px) {
    .section-title {
        margin-bottom: 0;
    }
    .section-content {
        margin-top: 0;
    }
    .content-left {
        margin: 0 auto;
        clip-path: inset(50px 10px 50px 10px);
    }
    .content-right {
        display: flex;
        display: -webkit-flex;
        overflow-x: auto;
    }
    .grid-item {
        flex-shrink: 0;
        width: 15rem;
    }
    .grid-item + .grid-item {
        margin-left: 10px;
    }
}
</style>
