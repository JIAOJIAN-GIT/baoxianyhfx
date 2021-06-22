<template>
  <el-card class="cardbox">
    <!-- 搜索 -->
    <el-form :inline="true" :model="formDate" class="content_sou">
      <el-form-item label="输入查询">
        <el-input v-model="formDate.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="身份证号码">
        <el-input v-model="formDate.idno" placeholder="全部"></el-input>
      </el-form-item>
      <el-form-item label="客户号">
        <el-input v-model="formDate.appntno" placeholder="全部"></el-input>
      </el-form-item>
      <el-form-item width="200px">
        <el-button type="primary" @click="querydata"
          ><i class="el-icon-search"></i>查询</el-button
        >
        <el-button @click="resetData"
          ><i class="el-icon-refresh-left"></i>重置</el-button
        >
      </el-form-item>
    </el-form>
    <el-row :gutter="10" style="margin-top: 0px">
      <el-col :span="8">
        <div class="grid-content">本人保障一览</div>
        <el-col :span="24" :gutter="10">
          <el-col class="massge_top" :span="7">
            <span>姓名</span>
            <span>张天爱</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>姓名</span>
            <span>张天爱</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>姓名</span>
            <span>张天爱</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>姓名</span>
            <span>张天爱</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>姓名</span>
            <span>张天爱</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>姓名</span>
            <span>张天爱</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>姓名</span>
            <span>张天爱</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>姓名</span>
            <span>张天爱张天爱</span>
          </el-col>
        </el-col>
        <el-col :span="24">
          <el-row class="massge_bottom" type="flex" justify="space-around">
            <el-col :span="6">
              <div>保障总额度</div>
              <div>5000000</div>
            </el-col>
            <el-col :span="6">
              <div>保障总额度</div>
              <div>5000000</div>
            </el-col>
            <el-col :span="6">
              <div>保障总额度</div>
              <div>5000000</div>
            </el-col>
          </el-row>
          <el-row class="massge_bottom" type="flex" justify="space-around">
            <el-col :span="6">
              <div>保障总额度</div>
              <div>5000000</div>
            </el-col>
            <el-col :span="6">
              <div>保障总额度</div>
              <div>5000000</div>
            </el-col>
            <el-col :span="6">
              <div>保障总额度</div>
              <div>5000000</div>
            </el-col>
          </el-row>
        </el-col>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">本人特征分析</div>
        <echarts
          :id="'bargraph1'"
          :data="option1"
          style="height: 35vh"
        ></echarts>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">本人保障分析</div>
        <echarts
          :id="'bargraph2'"
          :data="option1"
          style="height: 35vh"
        ></echarts>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">本人保障列表</div>
        <div class="list">
          <el-table
            ref="multipleTable"
            :data="tableData"
            border
            stripe
            :header-cell-style="{ backgroundColor: '#03a7f0', color: '#fff' }"
            max-height="270"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55" align="center">
            </el-table-column>
            <el-table-column label="日期" width="120" align="center">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >查看</el-button
                >
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import echarts from "../../components/echartsbox.vue";
export default {
  data() {
    return {
      input: "qinfshu",
      formDate: {
        name: "",
        idno: "",
        appntno: "",
      },
      multipleSelection: [],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],

      option1: {
        radar: {
          shape: "circle",
          indicator: [
            { name: "销售（Sales）", max: 6500 },
            { name: "管理（Administration）", max: 16000 },
            { name: "信息技术（Information Technology）", max: 30000 },
            { name: "客服（Customer Support）", max: 38000 },
            { name: "研发（Development）", max: 52000 },
            { name: "市场（Marketing）", max: 25000 },
          ],
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "预算分配（Allocated Budget）",
                areaStyle: {
                  color: "rgba(240,255,255, 0.9",
                },
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      this.$router.push("/home/SAbaozhangxiangqing");
      console.log(row);
    },
    querydata() {},
    resetData() {},
  },
  components: {
    echarts,
  },
};
</script>

<style scoped>
.content_sou {
  position: relative;
  margin: 0px 20px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

.el-row {
  margin-top: 20px;
  margin-bottom: 20px;
}
.grid-content {
  min-height: 36px;
  line-height: 36px;
  font-size: 14px;
  margin-bottom: 10px;
  color: #fff;
  background-color: #2ecc71;
  padding-left: 10px;
}
.massge_top {
  display: flex;
  border-bottom: solid 1px #f59a23;
  justify-content: flex-start;
  padding: 0px !important;
  margin: 10px;
}
.massge_top span {
  padding: 10px;
  text-align: center;
  font-size: 14px;
}
.massge_top > span:nth-of-type(1) {
  color: #fff;
  background-color: #f59a23;
}

.massge_bottom > .el-col > div:nth-of-type(1) {
  font-size: 14px;
  color: #fff;
  text-align: center;
  padding: 10px 0px;
  background-color: #02a7f0;
}
.massge_bottom > .el-col > div:nth-of-type(2) {
  font-size: 14px;
  padding: 10px 0px;
  box-sizing: border-box;
  border: 1px solid #02a7f0;
  border-radius: 2px;
}

.list {
  width: 95%;
  margin: 20px auto;
}
</style>