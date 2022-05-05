<!--
 * @Description: 关于我们
 * @Author: LXG
 * @Date: 2021-03-22
 * @LastEditTime: 2022-05-05
-->
<template>
    <div class="about">
        <!-- 关于我们 -->
        <AboutSection></AboutSection>
        <!-- 里程碑 -->
        <MilestoneSection></MilestoneSection>
        <!-- 联系我们 -->
        <ContactSection></ContactSection>
    </div>
</template>

<script>
import AboutSection from '~/components/business/section/AboutSection'
import MilestoneSection from '~/components/business/section/MilestoneSection'
import ContactSection from '~/components/business/section/ContactSection'

export default {
    name: 'About',
    components: {
        AboutSection,
        MilestoneSection,
        ContactSection,
    },
}
</script>
