<!--
 * @Description: 板块 活动回顾
 * @Author: LXG
 * @Date: 2021-04-05
 * @LastEditTime: 2022-04-24
-->
<template>
    <section class="section-activity">
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_activity.png">
            </div>
            <ul class="my-10 section-content">
                <li
                    v-for="(item,index) in newsList"
                    :key="index"
                    class="rounded-lg news-item"
                >
                    <img :src="item.img0" />
                    <div class="news__right">
                        <div class="item__right-title">
                            <h3>
                                {{cpu_createYear(item.createTime)}}
                                |
                                {{item.title}}
                            </h3>
                            <span>{{item.createTime}}</span>
                        </div>
                        <p>{{item.content}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import newsJson from '~/assets/json/newsJson.json'

export default {
    name: 'ActivitySection',
    components: {
    },
    data() {
        return {
            newsList: newsJson.map((cv) => {
                return {
                    ...cv,
                    img0: cv.img0 ? require('@/assets/image/news/' + cv.img0 + '.jpg') : '',
                    img1: cv.img1 ? require('@/assets/image/news/' + cv.img1 + '.jpg') : '',
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
.section-activity {
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
        width: 40rem;
        max-width: 90vw;
    }
}
.news-item {
    display: -moz-grid;
    display: -ms-grid;
    display: grid;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

    img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 8px;
    }
    .news__right {
        padding: 20px;

        .item__right-title {
            h3 {
                font-size: 1.3rem;
                font-weight: bold;
                color: #333333;
            }
            span {
                font-size: 0.8rem;
                color: #cccccc;
            }
        }
        p {
            display: -webkit-box;
            display: -moz-box;
            line-height: 2;
            font-size: 0.9rem;
            color: #666666;
            -webkit-box-orient: vertical;
            -moz-box-orient: vertical;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            overflow: hidden;
        }
    }
}
.news-item + .news-item {
    margin-top: 20px;
}

@media screen and (min-width: 1024px) {
    .item__right-title {
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
}

@media screen and (min-width: 768px) {
    .news-item {
        grid-template-columns: 20rem 1fr;

        img {
            border-bottom-left-radius: 8px;
        }
        .news__right {
            .item__right-title {
                margin-bottom: 10px;
            }
        }
    }
}

@media screen and (max-width: 1023.98px) {
    .item__right-title {
        display: -moz-grid;
        display: -ms-grid;
        display: grid;

        h3 {
            overflow: hidden;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            -ms-text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}

@media screen and (max-width: 767.98px) {
    .news-item {
        -ms-flex-direction: column;
        flex-direction: column;

        h3 {
            line-height: 1.5;
        }
        img {
            border-top-right-radius: 8px;
        }
        .news__right {
            padding: 10px;
        }
    }
}
</style>
