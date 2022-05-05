<!--
 * @Description: 板块 里程碑
 * @Author: LXG
 * @Date: 2021-04-06
 * @LastEditTime: 2022-05-05
-->
<template>
    <div class="section-milestone">
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_lcb.png" />
            </div>
            <HneaTimeline class="my-10">
                <HneaTimelineItem
                    v-for="(item,index) in contents"
                    :key="index"
                >
                    <div class="milestone__inner">
                        <img
                            class="rounded-lg"
                            :src="item.img0"
                        />
                        <div class="p-4 milestone__inner__right">
                            <h3>
                                {{cpu_createYear(item.createTime)}}
                                |
                                {{item.title}}
                            </h3>
                            <p>{{item.content}}</p>
                        </div>
                    </div>
                </HneaTimelineItem>
            </HneaTimeline>
        </div>
    </div>
</template>

<script>
import { HneaTimeline, HneaTimelineItem } from '~/components/general/hnea-timeline/index.js'
import milestoneJson from '~/assets/json/milestoneJson.json'

let milestones = milestoneJson.map((cv) => {
    return {
        ...cv,
        img0: cv.img0 ? require('~/assets/image' + cv.img0) : '',
        // img1: cv.img1 ? require('@/assets/image/events/' + cv.img1 + '.jpg') : '',
    }
})

export default {
    name: 'MilestoneSection',
    components: {
        HneaTimeline,
        HneaTimelineItem,
    },
    data() {
        return {
            contents: milestones
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
.section-milestone {
    background-color: #ffffff;
}
.section-inner {
    overflow: hidden;
}
.section-title {
    text-align: center;

    img {
        display: inline-block;
        width: 20rem;
        max-width: 90vw;
    }
}
.milestone__inner {
    border-radius: 8px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

    .milestone__inner__right {
        flex: 1;
        line-height: 1.5;

        h3 {
            margin-bottom: 10px;
            font-size: 1.2rem;
            font-weight: bold;
            color: #333333;
        }
        p {
            font-size: 0.8rem;
            color: #cccccc;
        }
    }
}
@media screen and (min-width: 1024px) {
    ::v-deep .hnea-timeline {
        max-width: 1024px;
        margin-right: auto;
        margin-left: auto;
    }
}
@media screen and (min-width: 640px) {
    .milestone__inner {
        display: -webkit-flex;
        display: flex;

        img {
            width: 15rem;
        }
    }
}
@media screen and (max-width: 767.98px) {
    .milestone__inner {
        img {
            width: 12rem;
        }
    }
}
@media screen and (max-width: 639.98px) {
    .milestone__inner {
        img {
            width: 100%;
        }
    }
}
</style>
