<!--
 * @Description: 版块 合作伙伴
 * @Author: LXG
 * @Date: 2021-03-26
 * @LastEditTime: 2022-04-22
-->
<template>
    <section class="section-partner">
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_hzhb.png">
            </div>
            <div class="my-10">
                <div class="section-content">
                    <div
                        v-for="(item,index) in partners"
                        :key="index"
                    >
                        <img :src="item">
                    </div>
                </div>
                <div class="section-content--md">
                    <div
                        v-for="(item,index) in partnerGroups"
                        :key="index"
                    >
                        <img :src="item[0]" />
                        <img :src="item[1]" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
const imgSrcList = require.context('~/assets/image/partner').keys().map((cv) => {
    return require(`~/assets/image/partner${cv.substring(cv.lastIndexOf('/'), cv.length)}`)
})

export default {
    name: 'PartnerSection',
    data() {
        return {
            partners: imgSrcList,
        }
    },
    computed: {
        partnerGroups() {
            const arr = []
            for (let i = 0; i < imgSrcList.length; i += 2) {
                arr.push([imgSrcList[i], imgSrcList[i + 1] || ''])
            }

            return arr;
        }
    },
}
</script>

<style lang="scss" scoped>
.section-partner {
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
        width: 25rem;
        max-width: 65vw;
    }
}
.section-content {
    display: -moz-grid;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(auto-fill, 8rem);
    gap: 1vw 1vw;
    justify-content: center;
}
.section-content--md {
    display: -webkit-flex;
    display: flex;
    column-gap: 1rem;
    overflow-x: auto;

    > div {
        flex-shrink: 0;
        -webkit-transform: translateX(calc(50vw - 0.5rem - (160px / 2)));
        -moz-transform: translateX(calc(50vw - 0.5rem - (160px / 2)));
        -o-transform: translateX(calc(50vw - 0.5rem - (160px / 2)));
        -ms-transform: translateX(calc(50vw - 0.5rem - (160px / 2)));
        transform: translateX(calc(50vw - 0.5rem - (160px / 2)));

        img {
            width: 160px;
        }
        img + img {
            margin-top: 1rem;
        }
    }
}

@media screen and (min-width: 768px) {
    .section-content--md {
        display: none;
    }
}

@media screen and (max-width: 767.98px) {
    .section-content {
        display: none;
    }
}
</style>
