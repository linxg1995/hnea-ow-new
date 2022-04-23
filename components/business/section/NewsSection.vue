<!--
 * @Description: 版块 协会动态
 * @Author: LXG
 * @Date: 2021-03-26
 * @LastEditTime: 2022-04-22
-->
<template>
    <section class="section-news">
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_news.png">
            </div>
            <div class="my-10 section-content">
                <div
                    v-for="(item,index) in contents"
                    :key="index"
                    class="p-5 rounded-lg match-item"
                >
                    <div class="match-img-inner">
                        <img
                            class="rounded-lg"
                            :src="item.img0"
                        />
                        <img
                            class="rounded-lg match-img-2"
                            :src="item.img1"
                        />
                    </div>
                    <div>
                        <h3 class="my-2">
                            {{cpu_createYear(item.createTime)}}
                            |
                            {{item.title}}
                        </h3>
                        <p>{{item.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import matchJson from '~/assets/json/matchJson.json'

export default {
    name: 'NewsSection',
    data() {
        return {
            contents: matchJson.map((cv) => {
                return {
                    ...cv,
                    img0: cv.img0 ? require('@/assets/image/events/' + cv.img0 + '.jpg') : '',
                    img1: cv.img1 ? require('@/assets/image/events/' + cv.img1 + '.jpg') : '',
                }
            })
        }
    },
    computed: {
        cpu_createYear() {
            return function (createTime) {
                return createTime.split('-')[0] + '年'
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.section-news {
    overflow: hidden;
}
.section-inner {
    overflow: hidden;
}
.section-title {
    text-align: center;
    img {
        display: inline-block;
        width: 13rem;
        max-width: 34vw;
    }
}
.section-content {
    display: -moz-grid;
    display: -ms-grid;
    display: grid;
    gap: 2.5vw 2.5vw;
}
.match-item {
    background-color: #ffffff;

    .match-img-inner {
        display: -moz-grid;
        display: -ms-grid;
        display: grid;
        gap: 1.5rem 1.5rem;

        img {
            display: inline-block;
            width: 100%;
            height: 182px;
        }
    }
    h3 {
        font-size: 16px;
        font-weight: bold;
    }
    p {
        line-height: 2;
        font-size: 0.8rem;
    }
}
@media screen and (min-width: 768px) {
    .section-content {
        grid-template-columns: repeat(2, 1fr);
    }
    .match-item {
        .match-img-inner {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media screen and (max-width: 1535.98px) {
    .match-item {
        .match-img-inner {
            img {
                height: 146px;
            }
        }
    }
}
@media screen and (max-width: 1279.98px) {
    .match-item {
        .match-img-inner {
            img {
                height: 110px;
            }
        }
    }
}
@media screen and (max-width: 1023.98px) {
    .match-item {
        .match-img-inner {
            img {
                height: 74px;
            }
        }
    }
}

@media screen and (max-width: 767.98px) {
    .section-content {
        gap: 0.5rem 0.5rem;
    }
    .match-item {
        .match-img-inner {
            img {
                height: auto;
            }
            .match-img-2 {
                display: none;
            }
        }
    }
}
</style>
