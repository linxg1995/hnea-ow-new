<!--
 * @Description: 板块 会员成员
 * @Author: LXG
 * @Date: 2021-04-06
 * @LastEditTime: 2022-05-05
-->
<template>
    <div class="section-member">
        <div class="sm:container mx-auto px-4 section-inner">
            <div class="my-10 section-title">
                <img src="~/assets/image/section/section_member.png" />
            </div>
            <div class="my-10 section-content">
                <img src="~/assets/image/section/member_content.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MemberSection'
}
</script>

<style lang="scss" scoped>
.section-member {
    background-color: #ffffff;
}
.section-inner {
    overflow: hidden;
}
.section-title {
    text-align: center;

    img {
        display: inline-block;
        width: 20rem;
        max-width: 90vw;
    }
}
.section-content {
    text-align: center;

    img {
        display: inline-block;
        width: 56rem;
        max-width: 90vw;
    }
}
</style>
