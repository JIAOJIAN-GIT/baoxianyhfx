<template>
  <el-card body-style="padding: 0px;" class="cardbox">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">客户投保详情</div>
      </el-col>
      <div style="margin: 20px auto; width: 95%">
        <el-col><div class="title">基本信息</div></el-col>
        <el-col
          ><el-table
            ref="multipleTable"
            :data="tableData"
            border
            stripe
            :header-cell-style="{
              backgroundColor: '#f5f5f5',
              color: 'rgb(102, 102, 102)',
              fontWeight: '700',
              fontSize: '14px',
              textAlign: 'center',
            }"
            max-height="270"
            tooltip-effect="dark"
            style="width: 100%"
          >
            <el-table-column
              prop="address"
              label="客户姓名"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column prop="address" label="地区" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="address" label="级别" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="address" label="性别" show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="身份证号码"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="保单号"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="被保险人姓名"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="投被保险人关系"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="险种名称"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="险种分类名称"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="主险保费"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="主险保额"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="交费年期"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="保险年期"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="应交日期"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="满期日期"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="保单服务状态"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="保单状态"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              align="center"
              fixed="right"
              label="查看"
              width="80"
            >
              <template align="center" slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >详情</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </div>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      //   tableData: [{}],
    };
  },
  methods: {},
  computed: {},
  mounted: function () {},
};
</script>

<style scoped>
.grid-content {
  font-family: "PingFangSC-Semibold", "PingFang SC Semibold", "PingFang SC",
    sans-serif;
  font-weight: 650;
  min-height: 46px;
  line-height: 46px;
  font-size: 15px;
  margin-bottom: 10px;
  color: #666;
  font-style: normal;
  font-size: 14px;
  padding-left: 20px;
  border-bottom: 1px #e9e9e9 solid;
}
.title {
  font-family: "PingFangSC-Semibold", "PingFang SC Semibold", "PingFang SC",
    sans-serif;
  font-weight: 650;
  color: #666;
  font-size: 14px;
  padding-left: 30px;
  height: 60px;
  line-height: 60px;
}
</style>