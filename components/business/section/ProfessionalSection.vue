<!--
 * @Description: 板块 职业鉴定
 * @Author: LXG
 * @Date: 2021-04-24
 * @LastEditTime: 2022-04-25
-->
<template>
    <div
        class="section-professional"
        :style="{'background-image':`url(${require('~/assets/image/section/sectionBg.png')})`}"
    >
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_professional.png" />
            </div>
            <div class="my-10 section-content">
                <div class="my-10 content-imgInner">
                    <img src="~/assets/image/section/professional_rc.png" />
                    <img src="~/assets/image/section/professional_cc.png" />
                    <img src="~/assets/image/section/professional_ac.png" />
                </div>
                <p>开展国家认证裁判证、教练证、运动员证技能培训及等级证书鉴试，同时具备专业考评员，具有高级（国家职业资格三级）以上职业资格或中级以上专业技术职务，熟悉了解本职业专业知识和操作技能，并具有丰富的考评工作经验；理论知识+模拟互动，确保学员能够理论加实践相结合。</p>
                <p>通过专业的培训，让学员掌握电子竞技基础理论知识，具有良好的电子竞技运动职业技能，熟悉电子竞技相关赛事规则和相关法律法规的基本知识，提高比赛运动分析能力、赛事组织策划、管理能力等，并提供部分就业机会。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfessionalSection',
}
</script>

<style lang="scss" scoped>
.section-professional {
    background-size: 100% 100%;
}
.section-inner {
    overflow: hidden;
}
.section-title {
    text-align: center;

    img {
        display: inline-block;
        width: 35rem;
        max-width: 90vw;
    }
}
.section-content {
    .content-imgInner {
        display: -moz-grid;
        display: -ms-grid;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        gap: 1rem 1rem;
    }
    p {
        line-height: 2;
        text-indent: 2rem;
    }
}
</style>
