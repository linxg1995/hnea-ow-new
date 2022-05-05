<!--
 * @Description: 板块 教学方案
 * @Author: LXG
 * @Date: 2021-04-24
 * @LastEditTime: 2022-05-02
-->
<template>
    <div class="section-plan">
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_plan.png" />
            </div>
            <div class="my-10 section-content">
                <div
                    v-for="(item,index) in contents"
                    :key="index"
                    class="p-4 rounded-lg content-item"
                >
                    <h2>{{item.title}}</h2>
                    <p>{{item.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlanSection',
    data() {
        return {
            contents: [
                { title: '培养高技能人才', desc: '密切关注企业需求，与企业开展全方位、深层次、多形式合作，推动高技能人才培养取得实效。' },
                { title: '结合院校特色深入合作', desc: '紧紧围绕行业特色，发挥资源技术优势，找准与校方的合作点，大招学校的专业特色。' },
                { title: '多方合作发展夯实行业地位', desc: '立足做强，面向社会做大，多方积极联系，形成校企按需组合，相互支持，共同发展，实现“双赢”的发展模式。' },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.section-inner {
    overflow: hidden;
}
.section-title {
    text-align: center;

    img {
        display: inline-block;
        width: 12rem;
        max-width: 90vw;
    }
}
.section-content {
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
    gap: 1rem 1rem;
}
.content-item {
    flex: 1;
    background-color: #ffffff;

    h2 {
        text-align: center;
        font-weight: bold;
    }
    p {
        margin-top: 10px;
        font-size: 14px;
    }
}

@media screen and (min-width: 768px) {
    .content-item {
        max-width: 22rem;
    }
}

@media screen and (max-width: 767.8px) {
    .section-content {
        -ms-flex-direction: column;
        flex-direction: column;
        align-items: center;
    }
}
</style>
