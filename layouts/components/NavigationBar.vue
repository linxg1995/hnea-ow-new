<!--
 * @Description: 头部响应式导航栏
 * @Author: LXG
 * @Date: 2022-04-20
 * @LastEditors: LXG
 * @LastEditTime: 2022-04-22
-->
<template>
    <div class="navigation-bar">
        <div class="md:container mx-auto px-4 navbar-inner">
            <img
                class="navbar-logo"
                src="~/assets/image/logo.png"
            >
            <ul
                class="navbar-list"
                :class="{'sidebar--active':sidebarShow}"
            >
                <nuxt-link
                    v-for="link in links"
                    :key="link.to"
                    :to="link.to"
                    @click.native="toggleLink"
                >
                    {{link.name}}
                </nuxt-link>
            </ul>
            <SidebarSwitch v-model="sidebarShow"></SidebarSwitch>
        </div>
    </div>
</template>

<script>
import SidebarSwitch from './SidebarSwitch'

export default {
    name: 'NavigationBar',
    components: {
        SidebarSwitch,
    },
    data() {
        return {
            links: [
                { to: '/', name: '首页' },
                { to: '/matchReview', name: '活动回顾' },
                { to: '/certificate', name: '三员证' },
                { to: '/professional', name: '职业鉴定' },
                { to: '/education', name: '电竞教育' },
                { to: '/provincialTeam', name: '电竞省队' },
                { to: '/organization', name: '组织架构' },
                { to: '/about', name: '关于我们' }
            ],
            sidebarShow: false,
        }
    },
    methods: {
        toggleLink() {
            this.sidebarShow = false
        }
    },
}
</script>

<style>
:root {
    --logo-height: 50px;
    --logo-height--m: 40px;
}
</style>

<style lang="scss" scoped>
.navigation-bar {
    background-color: #ffffff;
}
.navbar-inner {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
}
.navbar-logo {
    height: var(--logo-height);
}
.navbar-list {
    display: flex;
    display: -webkit-flex;

    a {
        display: inline-block;
        width: calc(1rem * 5);
        height: calc(var(--logo-height) - 10px);
        text-align: center;
        line-height: calc(var(--logo-height) - 10px);
        color: #333333;

        &:hover {
            text-decoration: none;
            color: #368bfa;
        }
        &.nuxt-link-exact-active {
            background-color: #368bfa;
            color: #ffffff;
        }
    }
}

@media screen and (min-width: 768px) {
    .navigation-bar {
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .navbar-list {
        a {
            border-radius: 4px;
        }
    }
    ::v-deep .sidebar-switch {
        display: none;
    }
}

@media screen and (max-width: 767.98px) {
    .navbar-logo {
        height: var(--logo-height--m);
    }
    .navbar-list {
        position: absolute;
        flex-direction: column;
        -ms-flex-direction: column;
        align-items: center;
        top: calc(var(--logo-height--m));
        right: -40vw;
        width: 40vw;
        height: calc(100vh - var(--logo-height--m));
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        transition: all 0.4s ease 0s;

        a {
            width: 100%;
        }

        &.sidebar--active {
            right: 0;
        }
    }
}
</style>
