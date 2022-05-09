<!--
 * @Description: 板块 省队介绍
 * @Author: LXG
 * @Date: 2021-04-06
 * @LastEditTime: 2022-05-08
-->
<template>
    <div
        class="section-introduce"
        :style="{'background-image':`url(${require('~/assets/image/section/sectionBg.png')})`}"
    >
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_sdjs.png" />
            </div>
            <div class="my-10 section-content">
                <div
                    ref="swiperOuter"
                    class="swiper__outer"
                >
                    <div
                        ref="swiperInner"
                        class="content-img__inner"
                        :class="{
                            'swiper-scroll-left':swipeScrollType==1,
                            'swiper-scroll-right':swipeScrollType==2,
                        }"
                        :style="{'left':swipeLeft+'px'}"
                    >
                        <img
                            ref="swipeFirstItem"
                            class="swipe-item"
                            src="~/assets/image/team/ENI2180.jpg"
                        />
                        <img
                            class="swipe-item"
                            src="~/assets/image/team/FIN3097.jpg"
                        />
                        <img
                            class="swipe-item"
                            src="~/assets/image/team/DENI9594.jpg"
                        />
                        <img
                            ref="swipeLastItem"
                            class="swipe-item"
                            src="~/assets/image/team/20201109123408.jpg"
                        />
                    </div>
                </div>
                <p>海南省电子竞技代表队2019年底成立，这是国内成立的第一支省级专业电竞队；</p>
                <p>海南省队由海南体育职业技术学院和海南省电子竞技协会共同组建。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IntroduceSection',
    data() {
        return {
            swipeScrollType: 0, // 0:不滚动, 1:左滚动, 2:右滚动
            swipeLeft: 0,
        }
    },
    methods: {
        swipeScroll() {
            switch (this.swipeScrollType) {
                case 1:
                    this.swipeLeft++
                    window.requestAnimationFrame(() => {
                        this.swipeScroll()
                    })
                    break;
                case 2:
                    this.swipeLeft--
                    window.requestAnimationFrame(() => {
                        this.swipeScroll()
                    })
                    break;
                default:
                    break;
            }
        }
    },
    mounted() {
        const _this = this
        const swipeFirstItem = this.$refs.swipeFirstItem
        const swipeLastItem = this.$refs.swipeLastItem
        let observer = new IntersectionObserver(function (entries) {
            const entry = entries[0]
            // console.log(entry)
            if (entry.isIntersecting) {
                switch (_this.swipeScrollType) {
                    case 1:
                        observer.unobserve(swipeFirstItem)
                        _this.swipeScrollType = 2
                        observer.observe(swipeLastItem)
                        break;
                    case 2:
                        observer.unobserve(swipeLastItem)
                        _this.swipeScrollType = 1
                        observer.observe(swipeFirstItem)
                        break;
                    default:
                        break;
                }
            }
        }, {
            root: _this.$refs.swiperOuter,
            threshold: 1
        })
        observer.observe(swipeLastItem)

        this.swipeScrollType = 2
        this.swipeScroll()
    }
}
</script>

<style lang="scss" scoped>
.section-introduce {
    background-size: 100% 100%;
}
.section-inner {
    overflow: hidden;
}
.section-title {
    text-align: center;

    img {
        display: inline-block;
        width: 28rem;
        max-width: 90vw;
    }
}
.section-content {
    text-align: center;
    line-height: 1.5;
    font-size: 1.2rem;

    p + p {
        margin-top: 1rem;
    }
}
.swiper__outer {
    margin-bottom: 3rem;
    overflow-x: hidden;
}
.content-img__inner {
    position: relative;
    left: 0;
    width: max-content;
    font-size: 0;
    white-space: nowrap;

    .swipe-item {
        display: inline-block;
        height: 20rem;
    }
}

@media screen and (max-width: 1023.98px) {
    .swipe-item {
        height: 18rem;
    }
}
</style>
