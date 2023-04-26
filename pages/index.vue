<template>
    <div>
        <div class="sm:container px-4 mx-auto">
            <div v-swiper="swiperOptions">
                <div class="swiper-wrapper">
                    <div
                        v-for="img in imgs"
                        :key="img"
                        class="swiper-slide"
                    >
                        <img
                            :src="img"
                            :alt="img"
                            referrer="no-referrer"
                            width="100%"
                        >
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        <!-- 协会简介 -->
        <IntroductionSection></IntroductionSection>
        <!-- 业务内容 -->
        <BusinessSection></BusinessSection>
        <!-- 协会动态 -->
        <NewsSection></NewsSection>
        <!-- 合作伙伴 -->
        <PartnerSection></PartnerSection>
        <!-- 联系我们 -->
        <ContactSection></ContactSection>
    </div>
</template>

<script>
import IntroductionSection from '~/components/business/section/IntroductionSection'
import BusinessSection from '~/components/business/section/BusinessSection'
import NewsSection from '~/components/business/section/NewsSection'
import PartnerSection from '~/components/business/section/PartnerSection'
import ContactSection from '~/components/business/section/ContactSection'

export default {
    name: 'IndexPage',
    components: {
        IntroductionSection,
        BusinessSection,
        NewsSection,
        PartnerSection,
        ContactSection,
    },
    data() {
        return {
            swiperOptions: {
                autoplay: { disableOnInteraction: false },
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            imgs: [
                require('~/assets/image/banner/banner0.jpg'),
                require('~/assets/image/banner/banner1.jpg'),
                require('~/assets/image/banner/banner2.jpg'),
                // 'https://wx1.sinaimg.cn/large/96bea5begy1gozhgo3xdij21hc0o4kd3.jpg',
                // 'https://wx4.sinaimg.cn/large/96bea5begy1gozhgsetggj21hc0o4wxl.jpg',
                // 'https://wx4.sinaimg.cn/large/96bea5begy1gozhgvl5llj21hc0o4x0y.jpg',
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.swiper-button-prev,
.swiper-button-next {
    width: 2vw;
    height: 2vw;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;

    &::after {
        font-size: 1vw;
        color: #ffffff;
    }
    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
}
// 打包后Navigation的样式会丢失，手动复写一下
::v-deep .swiper-button-prev,
::v-deep .swiper-button-next {
    position: absolute;
    top: 50%;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -0.5rem;
    cursor: pointer;
    z-index: 10;

    &::after {
        font-family: swiper-icons;
        text-transform: none !important;
        letter-spacing: 0;
        font-variant: initial;
        line-height: 1;
    }
}
::v-deep .swiper-button-prev {
    right: auto;
    left: 10px;

    &::after {
        content: "prev";
    }
}
::v-deep .swiper-button-next {
    right: 10px;
    left: auto;

    &::after {
        content: "next";
    }
}

@media screen and (max-width: 639.98px) {
    .swiper-button-prev,
    .swiper-button-next {
        display: none;
    }
}
</style>
