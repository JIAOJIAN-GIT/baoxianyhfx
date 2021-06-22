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
      <el-col :span="10">
        <div class="grid-content">本人保障一览</div>
        <el-col :span="24" :gutter="10">
          <el-col class="massge_top" :span="7">
            <span>姓名</span>
            <span>张天爱</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>性别</span>
            <span>女</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>地区</span>
            <span>太原</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>生日</span>
            <span>1968年5月20日</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>渠道</span>
            <span>个险</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>客户级别</span>
            <span> 钻石客户</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>理赔</span>
            <span>否</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>投诉</span>
            <span>否</span>
          </el-col>
        </el-col>
        <el-col :span="24">
          <el-row class="massge_bottom" type="flex" justify="space-around">
            <el-col :span="6">
              <div>保障总额度</div>
              <div>5000000</div>
            </el-col>
            <el-col :span="6">
              <div>年金险保障额度</div>
              <div>5000000</div>
            </el-col>
            <el-col :span="6">
              <div>健康险保障额度</div>
              <div>600000</div>
            </el-col>
          </el-row>
          <el-row class="massge_bottom" type="flex" justify="space-around">
            <el-col :span="6">
              <div>意外险保障额度</div>
              <div>5000000</div>
            </el-col>
            <el-col :span="6">
              <div>寿险保障额度</div>
              <div>400000</div>
            </el-col>
            <el-col :span="6">
              <div>保障缺口</div>
              <div>2400000</div>
            </el-col>
          </el-row>
        </el-col>
      </el-col>
      <el-col :span="7">
        <div class="grid-content">本人特征分析</div>
        <echarts
          :id="'bargraph1'"
          :data="option1"
          style="height: 30vh"
        ></echarts>
      </el-col>
      <el-col :span="7">
        <div class="grid-content">本人保障分析</div>
        <echarts
          :id="'bargraph2'"
          :data="option2"
          style="height: 30vh"
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
            :header-cell-style="{
              backgroundColor: '#03a7f0',
              color: '#fff',
            }"
            tooltip-effect="light"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              align="center"
              width="120"
              prop="name"
              label="姓名"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="address"
              label="地区"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="level"
              label="级别"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="sex"
              label="性别"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="idno"
              label="年龄"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="contno"
              label="险种分类名称"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="passiveName"
              label="主险保费总额"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="relationship"
              label="主险保额总额"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="riskshortname"
              label="年交保费总额"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="riskcode"
              label="保障缺口"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="prem"
              label="保单服务状态"
            ></el-table-column>
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
            { name: "消费金额", max: 80 },
            { name: "支付能力", max: 90 },
            { name: "客户粘性", max: 50 },
            { name: "客户忠诚度", max: 60 },
            { name: "客户有效性", max: 60 },
          ],
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            data: [
              {
                value: [40, 40, 40, 40, 40],
                name: "预算分配（Allocated Budget）",
                areaStyle: {
                  color: "rgba(240,255,255, 0.9)",
                },
              },
            ],
          },
        ],
      },
      option2: {
        radar: {
          shape: "circle",
          indicator: [
            { name: "健康险保障", max: 180 },
            { name: "意外险保障", max: 190 },
            { name: "年金险保障", max: 150 },
            { name: "寿险保障", max: 160 },
          ],
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            itemStyle: {
              normal: {
                // 点的颜色。
                color: "red",
              },
              // 高亮样式。
              emphasis: {
                // 高亮时点的颜色。
                color: "blue",
              },
            },
            data: [
              {
                value: [60, 60, 60, 60],
                name: "预算分配（Allocated Budget）",
                areaStyle: {
                  color: "rgba(23, 255, 210 , 0.9)",
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
      this.$router.push(`/home/SAbaozhangxiangqing?id=${row.id}`);
      console.log(row.id);
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
  color: rgba(aas, rgb(23, 255, 100), blue, alpha);
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
  padding: 10px 0px;
  text-align: center;
  font-size: 14px;
}
.massge_top > span:nth-of-type(1) {
  width: 72px;
  color: #fff;
  background-color: #f59a23;
}
.massge_top > span:nth-of-type(2) {
  margin: 0 auto;
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
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #02a7f0;
  border-radius: 2px;
}

.list {
  width: 95%;
  margin: 20px auto;
}
</style>