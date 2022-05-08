<!--
 * @Description: 电竞省队
 * @Author: LXG
 * @Date: 2021-03-24
 * @LastEditTime: 2022-05-08
-->
<template>
    <div class="provincialTeam">
        <!-- 省队介绍 -->
        <IntroduceSection></IntroduceSection>
        <!-- 所获荣誉 -->
        <HonorSection></HonorSection>
    </div>
</template>

<script>
import IntroduceSection from '~/components/business/section/IntroduceSection'
import HonorSection from '~/components/business/section/HonorSection'

export default {
    name: 'ProvincialTeam',
    components: {
        IntroduceSection,
        HonorSection,
    }
}
</script>

<style lang="scss" scoped>
</style>
