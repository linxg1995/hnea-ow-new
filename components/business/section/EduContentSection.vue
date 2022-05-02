<!--
 * @Description: 板块 教学内容
 * @Author: LXG
 * @Date: 2021-04-24
 * @LastEditTime: 2022-05-02
-->
<template>
    <div class="section-edu-content">
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_contents.png" />
            </div>
            <div class="my-10 section-content">
                <div
                    v-for="(item,index) in contents"
                    :key="index"
                    class="p-4 rounded-lg content-item"
                >
                    <div class="contentItem-circle"></div>
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EduContentSection',
    data() {
        return {
            contents: [
                { title: '《电子竞技职业生涯规划》' },
                { title: '《电子竞技用户分析》' },
                { title: '《电子竞技产业概论》' },
                { title: '《电子竞技运动概论》' },
                { title: '《电子竞技俱乐部运营与管理》' },
                { title: '《电子竞技运动心理学》' },
                { title: '《电子竞技赛事运营与管理》' },
                { title: '《电子竞技赛事导播》' },
                { title: '《电子竞技传播与解说》' },
                { title: '《电子竞技技能》' },
            ]
        }
    },
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
        width: 25rem;
        max-width: 90vw;
    }
}
.section-content {
    display: -webkit-flex;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 1rem;
}
.content-item {
    position: relative;
    width: 22rem;
    max-width: 90vw;
    background-color: #ffffff;

    .contentItem-circle {
        position: absolute;
        top: 50%;
        left: 1rem;
        width: 14px;
        height: 14px;
        background-color: #368bfa;
        border-radius: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);

        &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            width: 10px;
            height: 10px;
            background-color: rgba(#368bfa, 0.4);
            border-radius: 50%;
            -webkit-transform: translate(30%, -30%);
            -moz-transform: translate(30%, -30%);
            -o-transform: translate(30%, -30%);
            -ms-transform: translate(30%, -30%);
            transform: translate(30%, -30%);
        }
    }
    p {
        padding-left: 1.5rem;
    }
}
</style>
