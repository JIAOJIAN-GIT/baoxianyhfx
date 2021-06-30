<template>
  <el-card class="cardbox">
    <el-row class="row1">
      <el-button type="success" @click="ModificationPlan">修改方案</el-button>
    </el-row>
    <el-row>
      <el-col :span="24">
        被保险人：<span>张天爱</span> <span>女</span> <span>56岁</span>
      </el-col>
      <el-col :span="24">
        <el-table
          :data="tableData"
          style="width: 100%"
          :header-cell-style="{
            backgroundColor: '#03a613',
            color: '#fff',
            fontWeight: 600,
          }"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column
            align="right"
            prop="address"
            label="基本保障（元）/份数/计划"
          >
          </el-table-column>
          <el-table-column align="right" prop="address" label="保险期间">
          </el-table-column>
          <el-table-column
            align="right"
            prop="address"
            label="交费方式/交费期间"
          >
          </el-table-column>
          <el-table-column align="right" prop="address" label="首期保费（元）">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col>
        <p>
          部分产品续保保费会随被保险人年龄增长发生变化，具体以保险合同所附产品费率表为准。
        </p>
        <p>该保险产品组合仅为保障建议，消费者可单独购买任一主险产品。</p>
      </el-col>
      <el-col> 首期合计保费:<span>12457.60</span>元 </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        被保险人：<span>张天爱</span> <span>女</span> <span>56岁</span>
      </el-col>
      <el-col :span="24">
        <el-table
          :data="tableData"
          style="width: 100%"
          :header-cell-style="{
            backgroundColor: '#03a613',
            color: '#fff',
            fontWeight: 600,
          }"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column
            align="right"
            prop="address"
            label="基本保障（元）/份数/计划"
          >
          </el-table-column>
          <el-table-column align="right" prop="address" label="保险期间">
          </el-table-column>
          <el-table-column
            align="right"
            prop="address"
            label="交费方式/交费期间"
          >
          </el-table-column>
          <el-table-column align="right" prop="address" label="首期保费（元）">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col>
        <p>
          部分产品续保保费会随被保险人年龄增长发生变化，具体以保险合同所附产品费率表为准。
        </p>
        <p>该保险产品组合仅为保障建议，消费者可单独购买任一主险产品。</p>
      </el-col>
      <el-col> 首期合计保费:<span>12457.60</span>元 </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    ModificationPlan() {},
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
  },
};
</script>

<style scoped>
.el-row {
  font-size: 14px;
  border-top: 1px #e9e9e9 solid;
}
span {
  margin-left: 15px;
}
.row1 {
  border: none;
  text-align: right;
  margin-bottom: 20px;
}
.el-row .el-col:nth-of-type(1) {
  font-weight: 650;
  padding: 15px 20px;
}
.el-row .el-col:nth-of-type(3) {
  background-color: #f2f2f2;
  font-weight: 600;
  color: #666;
  padding: 5px 10px;
  line-height: 20px;
}
.el-row .el-col:nth-of-type(4) {
  font-weight: 650;
  color: #000;
  text-align: right;
  padding: 30px;
}
.el-table {
  color: #000;
  font-weight: 600;
}
.title {
  color: red;
}
.el-button {
  border-radius: 0px;
  background-color: #2ecc71;
}
</style>