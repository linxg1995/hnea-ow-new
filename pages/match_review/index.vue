<!--
 * @Description: 赛事回顾
 * @Author: LXG
 * @Date: 2022-04-24
 * @LastEditors: LXG
 * @LastEditTime: 2022-04-24
-->
<template>
    <div>
        <!-- 协会动态 -->
        <NewsSection></NewsSection>
        <!-- 协会动态 -->
        <ActivitySection></ActivitySection>
    </div>
</template>

<script>
import NewsSection from '~/components/business/section/NewsSection'
import ActivitySection from '~/components/business/section/ActivitySection'

export default {
    name: 'IndexPage',
    components: {
        NewsSection,
        ActivitySection
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
