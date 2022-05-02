<!--
 * @Description: hnea-ui - input
 * @Author: LXG
 * @Date: 2021-04-06
 * @LastEditTime: 2022-04-25
-->
<template>
    <div
        class="hnea-input"
        :class="{'hnea-input--focus':isFocus}"
    >
        <div class="hi-inner">
            <input
                v-model="cpu_value"
                type="text"
                :placeholder="placeholder"
                :maxlength="maxlength"
                @focus="focus"
                @blur="blur"
                @keydown.enter="confirm"
            >
            <img
                v-if="search"
                class="hi-searchIcon"
                src="~/assets/icon/search.png"
                @click="confirm"
            />
        </div>
    </div>
</template>

<script>

export default {
    name: 'HneaInput',
    props: {
        value: {
            type: String,
            default: ''
        },
        // placeholder
        placeholder: {
            type: String,
            default: '请输入'
        },
        maxlength: {
            type: Number,
            default: 16
        },
        // 是否开启搜索
        search: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            in_value: '',
            isFocus: false, // 聚焦状态位
        }
    },
    computed: {
        cpu_value: {
            get() {
                return this.value ?? this.in_value;
            },
            set(val) {
                this.$emit('input', val)
                this.in_value = val
            }
        }
    },
    methods: {
        focus(e) {
            this.isFocus = true
        },
        blur(e) {
            this.isFocus = false
        },
        confirm(e) {
            this.$emit('confirm')
        }
    }
}
</script>

<style lang="scss">
:root {
    --input-height: 36px;
}
</style>

<style lang="scss" scoped>
.hnea-input {
    position: relative;
    display: inline-block;
    height: var(--input-height);
    border-radius: 4px;
    font-size: 14px;
    background-color: #ffffff;
}
.hi-inner {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    height: 100%;
    padding-right: 10px;
    padding-left: 10px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    transition: all 0.4s linear 0s;
    -webkit-transition: all 0.4s linear 0s;
    -moz-transition: all 0.4s linear 0s;
    -o-transition: all 0.4s linear 0s;
}
input {
    flex: 1;
    outline: none;
}
.hi-searchIcon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    color: #666666;
    cursor: pointer;
}
.hnea-input--focus {
    .hi-inner {
        border: 1px solid #3699ff;
    }
}
</style>
