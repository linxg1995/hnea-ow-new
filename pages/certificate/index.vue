<!--
 * @Description: 三员证
 * @Author: LXG
 * @Date: 2021-03-24
 * @LastEditTime: 2022-04-25
-->
<template>
    <div class="certificate">
        <div
            class="certificate-top"
            :style="{'background-image':`url(${require('~/assets/image/section/cpz_topBg.png')})`}"
        >
            <div class="my-10 top-title">
                <img src="~/assets/image/section/section_syz.png" />
            </div>
            <div class="my-10">
                <HneaInput
                    v-model="formData.idCard"
                    placeholder="请输入身份证号查询"
                    :maxlength="18"
                    search
                    @confirm="confirm"
                ></HneaInput>
            </div>
        </div>
        <el-table
            class="my-10"
            :data="tableInfo.data"
            :empty-text="tableInfo.emptyText"
        >
            <el-table-column
                prop="name"
                label="姓名"
                align="center"
            ></el-table-column>
            <el-table-column
                prop="area"
                label="地区"
                align="center"
            ></el-table-column>
            <el-table-column
                prop="sportsItems"
                label="体育项目"
                align="center"
            ></el-table-column>
            <el-table-column
                prop="grade"
                label="证书等级"
                align="center"
            ></el-table-column>
            <el-table-column
                prop="certificateType"
                label="证书类型"
                align="center"
            ></el-table-column>
            <el-table-column
                prop="date"
                label="发证日期"
                align="center"
            ></el-table-column>
        </el-table>
    </div>
</template>

<script>
import HneaInput from '~/components/general/hnea-input/HneaInput'
import { getFormData } from '~/assets/http/hneaXhr.js'
import { format } from '~/assets/utils/date-handler.js'

export default {
    name: 'Certificate',
    components: {
        HneaInput,
    },
    data() {
        return {
            formData: {
                idCard: ''
            },
            tableInfo: {
                data: [],
                emptyText: '暂无数据',
            }
        }
    },
    methods: {
        confirm() {
            this.tableInfo.emptyText = '查询中...'
            this.tableInfo.data = []
            getFormData('/searchByIdCard', this.formData).then((res) => {
                // console.log('getFormData:', res)
                if (res.code === 200) {
                    this.tableInfo.data = res.data.map((cv) => {
                        return {
                            ...cv,
                            date: format(cv.date, '%YYYY%年%MM%月%DD%日')
                        }
                    })
                }
                this.tableInfo.emptyText = '暂无数据'
            }).catch((err) => {
                window.console.log('err:', err)
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.certificate {
    min-height: calc(100vh - var(--nav-height) - var(--footer-height));
    text-align: center;
    background-color: #ffffff;
}
.certificate-top {
    background-size: 100% 100%;
    overflow: hidden;

    ::v-deep .hnea-input {
        width: 34rem;
        max-width: 90vw;
    }
}
.top-title {
    text-align: center;

    img {
        display: inline-block;
        width: 34rem;
        max-width: 90vw;
    }
}
::v-deep .el-table {
    width: 1024px;
    max-width: 90vw;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

    .el-table__header-wrapper th {
        color: #333333;
        background: #ebf3fe;
    }
    .el-table__body-wrapper td {
        color: #666666;
    }
}

@media screen and (max-width: 767.98px) {
    .certificate {
        min-height: calc(100vh - var(--nav-height--m) - var(--footer-height));
    }
}
</style>
