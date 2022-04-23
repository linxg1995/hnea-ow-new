<!--
 * @Description: 板块 联系我们
 * @Author: LXG
 * @Date: 2021-04-04
 * @LastEditTime: 2022-04-22
-->
<template>
    <div class="py-3 section-contact">
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="section-content">
                <div class="content-img">
                    <img src="~/assets/image/section/section_lxwm.png" />
                </div>
                <p
                    v-for="(item,index) in content"
                    :key="index"
                >
                    <span>{{item.label}}: </span>
                    <span>{{item.value}}</span>
                </p>
            </div>
            <Amap
                ref="amap"
                @inited="mapInited"
            ></Amap>
        </div>
    </div>
</template>

<script>
import Amap from '@/components/general/amap/Amap'

export default {
    name: 'ContactSection',
    components: {
        Amap,
    },
    data() {
        return {
            content: [
                { label: '商务合作联系', value: '李先生 15019470545' },
                { label: '内容合作联系', value: '符小姐 17508952359' },
                { label: '渠道合作联系', value: '宋小姐 13379984567' },
                { label: '地址', value: '国兴大道68号海南体育职业技术学院运动场西门2层右侧' },
            ]
        }
    },
    methods: {
        mapInited(amapInst) {
            this.$refs.amap.addMarker(function (AMap) {
                return {
                    id: 'location',
                    position: [110.372781, 20.012859],
                    icon: require('@/assets/icon/location.png'),
                    anchor: 'bottom-center',
                    // offset: [0, 100],
                    label: {
                        direction: 'top',
                        content: `<div class="marker-info">海南省电子竞技运动协会</div>`,
                        offset: [0, -10]
                    },
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.section-contact {
    background-image: url("~/assets/image/section/lxwm_bg.png");
    background-size: 100% 100%;
}
.section-inner {
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.section-content {
    font-weight: bold;
    color: #ffffff;

    .content-img {
        margin-bottom: 20px;

        img {
            width: 7rem;
        }
    }
    p {
        line-height: 1.5;
        font-size: 0.9rem;

        span:first-child {
            margin-right: 5px;
        }
    }
}
#container-amap {
    width: 27rem;
    height: 17rem;

    ::v-deep .amap-marker-label {
        padding: 10px 25px;
        border: 0;
        color: #ffffff;
        background-color: #464646;
        border-radius: 4px;

        &::after {
            content: "";
            position: absolute;
            display: block;
            bottom: 0;
            left: 50%;
            border-top: 8px solid #464646;
            border-right: 5px solid transparent;
            border-left: 5px solid transparent;
            transform: translate(-50%, 100%);
        }
    }
}

@media screen and (min-width: 640px) {
    .section-contact {
        padding-right: 20px;
        padding-left: 20px;
    }
}

@media screen and (max-width: 639.98px) {
    .section-inner {
        flex-direction: column;
    }
    .section-content {
        width: 100%;
        margin-bottom: 20px;
        .content-img {
            text-align: center;

            img {
                display: inline-block;
            }
        }
        p {
            font-size: 0.8rem;
        }
    }
    #container-amap {
        width: 100%;
    }
}
</style>
