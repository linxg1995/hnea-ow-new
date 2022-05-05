<!--
 * @Description: 电竞省队
 * @Author: LXG
 * @Date: 2021-03-24
 * @LastEditTime: 2022-05-05
-->
<template>
    <div class="provincialTeam">
        <!-- 省队介绍 -->
        <IntroductionSection></IntroductionSection>
        <!-- 所获荣誉 -->
        <HonorSection></HonorSection>
    </div>
</template>

<script>
import IntroductionSection from '~/components/business/section/IntroductionSection'
import HonorSection from '~/components/business/section/HonorSection'

export default {
    name: 'ProvincialTeam',
    components: {
        IntroductionSection,
        HonorSection,
    }
}
</script>

<style lang="scss" scoped>
</style>
