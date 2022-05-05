<!--
 * @Description: 组织架构
 * @Author: LXG
 * @Date: 2021-03-24
 * @LastEditTime: 2022-05-05
-->
<template>
    <div class="organization">
        <!-- 组织架构 -->
        <OrganizationSection></OrganizationSection>
        <!-- 会员成员 -->
        <MemberSection></MemberSection>
    </div>
</template>

<script>
import OrganizationSection from '~/components/business/section/OrganizationSection'
import MemberSection from '~/components/business/section/MemberSection'

export default {
    name: 'Organization',
    components: {
        OrganizationSection,
        MemberSection,
    }
}
</script>

<style lang="scss" scoped>
</style>
