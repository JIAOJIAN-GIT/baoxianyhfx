<template>
  <el-card class="cardbox">
    <el-row class="header" type="flex" justify="space-between">
      <div>
        <el-button type="success" class="el-button2">客户详情</el-button>
        <el-button @click="means">编辑资料</el-button>
      </div>
      <div>
        <el-button @click="family">家庭保障分析展示</el-button>
        <el-button @click="familyrec">保险方案推荐</el-button>
      </div>
    </el-row>
    <el-row>
      <!-- 基本信息 -->
      <el-col :span="24">
        <div class="grid-content">基本信息</div>
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
              prop="region"
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
              prop="age"
              label="年龄"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="prdtype"
              label="险种分类名称"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="premTotal"
              label="主险保费总额"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="amnt"
              label="主险保额总额"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="prem"
              label="年交保费总额"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="meamntGap"
              label="保障缺口"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="state"
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
      <!-- 保障概况 -->
      <el-col :span="24">
        <div class="grid-content">保障概况</div>
        <div class="list">
          <el-table
            ref="multipleTable"
            :data="total"
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
              label="保障总额"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="name"
              label="保障总缺口"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="name"
              label="年金险总额"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="name"
              label="寿险总额"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="name"
              label="健康险总额"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="name"
              label="意外险总额"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="name"
              label="年金险缺口"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="name"
              label="寿险缺口"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="name"
              label="健康险缺口"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="name"
              label="意外险缺口"
            ></el-table-column>
          </el-table>
        </div>
      </el-col>
      <!-- 保障一览 -->
      <el-col :span="24">
        <div class="grid-content">保障一览</div>
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
              label="家庭成员姓名"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="region"
              label="性别"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="level"
              label="年龄"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="sex"
              label="与客户关系"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="age"
              label="险种分类名称"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="prdtype"
              label="主险保费总额"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="premTotal"
              label="主险保额总额"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="amnt"
              label="保障缺口"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="prem"
              label="年交保费总额"
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
export default {
  data() {
    return {
      btntype: "success",
      tableData: [],
      total: [{ name: 234242 }],
    };
  },
  methods: {
    means() {
      this.$router.push("/home/editRecommend");
    },
    family() {
      this.$router.push("/home/family?id=0");
    },
    familyrec() {
      this.$router.push("/home/family?id=1");
    },
    handleSelectionChange() {},
    handleClick(row) {
      console.log("111111111");
      this.$store.commit("saveIndexState", "1");
      this.$router.push(
        `/home/SAbaozhangxiangqing?id=${row.id}&prdtype=${row.prdtype}`
      );
      console.log(row);
    },
  },
};
</script>

<style scoped>
.el-card__body {
  padding-top: 0px;
}
.el-col {
  margin-bottom: 30px;
}
.header {
  width: 100%;
  margin-bottom: 20px;
}
.header div:nth-of-type(2) .el-button {
  color: #0079fe;
}
.el-button {
  border-radius: 0px;
}
.el-button2 {
  background-color: #2ecc71;
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
</style>