<!--
 * @Description: 头部响应式导航栏 - 侧边栏开关
 * @Author: LXG
 * @Date: 2022-04-21
 * @LastEditors: LXG
 * @LastEditTime: 2022-04-21
-->
<template>
    <div
        class="sidebar-switch"
        :class="{'sidebar-switch--active':cpu_value}"
        @click="toggle"
    >
        <div class="rounded sbs-line topLine"></div>
        <div class="rounded sbs-line centerLine"></div>
        <div class="rounded sbs-line bottomLine"></div>
    </div>
</template>

<script>
export default {
    name: 'SidebarSwitch',
    props: {
        value: {
            type: Boolean,
            default: undefined
        }
    },
    data() {
        return {
            loc_value: false
        };
    },
    computed: {
        cpu_value: {
            get() {
                return this.value ?? this.loc_value;
            },
            set(val) {
                this.$emit('input', val)
                this.loc_value = val
            }
        }
    },
    methods: {
        toggle() {
            this.cpu_value = !this.cpu_value
        }
    },
}
</script>

<style>
:root {
    --sidebar-line-height: 4px;
}
</style>

<style lang="scss" scoped>
.sidebar-switch.sidebar-switch--active {
    .topLine {
        transform: translateY(200%) rotate(45deg);
    }
    .centerLine {
        opacity: 0;
    }
    .bottomLine {
        transform: translateY(-200%) rotate(-45deg);
    }
}
.sbs-line {
    width: calc(var(--sidebar-line-height) * 5);
    height: var(--sidebar-line-height);
    background-color: #333333;
    transition: all 0.4s;

    & + & {
        margin-top: var(--sidebar-line-height);
    }
}
</style>
