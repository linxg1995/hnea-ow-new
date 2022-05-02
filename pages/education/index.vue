<!--
 * @Description: 电竞教育
 * @Author: LXG
 * @Date: 2021-03-24
 * @LastEditTime: 2022-05-02
-->
<template>
    <div class="education">
        <!-- 教学特色 -->
        <FeaturesSection></FeaturesSection>
        <!-- 教学方案 -->
        <PlanSection></PlanSection>
        <!-- 教学内容 -->
        <EduContentSection></EduContentSection>
    </div>
</template>

<script>
import FeaturesSection from '~/components/business/section/FeaturesSection'
import PlanSection from '~/components/business/section/PlanSection'
import EduContentSection from '~/components/business/section/EduContentSection'

export default {
    name: 'Education',
    components: {
        FeaturesSection,
        PlanSection,
        EduContentSection,
    },
}
</script>

<style lang="scss" scoped>
</style>
