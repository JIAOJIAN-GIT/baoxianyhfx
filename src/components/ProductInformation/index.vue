<template>
  <el-card body-style="padding: 0px;" class="cardbox">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">产品详情</div>
      </el-col>
      <el-col :span="24">
        <div style="margin: 20px auto; width: 60%">
          <el-row>
            <!-- 产品名称，编码 -->
            <el-row class="row" :span="24" type="flex" justify="space-between">
              <el-col :span="11">
                <el-col :span="6" class="btn">产品名称</el-col>
                <el-col :span="18" class="text"
                  >健康无忧C6款重大疾病保险</el-col
                >
              </el-col>
              <el-col :span="11">
                <el-col :span="6" class="btn">产品编码</el-col>
                <el-col :span="18" class="text">A00001</el-col>
              </el-col>
            </el-row>
            <!-- 产品类别，子类 -->
            <el-row class="row" :span="24" type="flex" justify="space-between">
              <el-col :span="11">
                <el-col :span="6" class="btn"> 产品类别</el-col>
                <el-col :span="18" class="text">健康险</el-col>
              </el-col>
              <el-col :span="11">
                <el-col :span="6" class="btn"> 产品子类</el-col>
                <el-col :span="18" class="text"></el-col>
              </el-col>
            </el-row>
            <!-- 产品简介 -->
            <el-row class="row" :span="24">
              <el-col :span="3" class="btn">产品简介</el-col>
              <el-col :span="21" class="text1"
                >涵盖190种“轻、中、重”度疾病保障的终身疾病保险，且有少儿、成人特定疾病关爱和保费豁免功能</el-col
              >
            </el-row>
            <!-- 产品详情 -->
            <el-row class="row" :span="24">
              <el-col :span="3" class="btn">产品详情</el-col>
              <el-col :span="21" class="text1"
                >投保人范围 : 被保险人本人或对被保险人有保险利益的其他人
                被保险人范围 : 出生满30天，不满61周岁的身体健康者 投保年龄 :
                出生满30天，不满61周岁 保险期间 : 至被保险人终身 交费方式 :
                5年交、10年交、15年交、20年交、30年交</el-col
              >
            </el-row>
          </el-row>
        </div>
      </el-col>
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
.row {
  margin-bottom: 30px;
}
.el-row {
  font-size: 14px;
  color: #666;
}
.btn {
  height: 40px;
  background-color: rgba(250, 205, 145, 0.6);
  line-height: 40px;
  border-radius: 8px;
  text-align: center;
  font-family: "PingFangSC-Semibold", "PingFang SC Semibold", "PingFang SC",
    sans-serif;
  font-weight: 650;
}
.text {
  height: 40px;
  max-height: 40px;
  padding: 0px 10px;
  line-height: 40px;
  border-bottom: 1px rgba(250, 205, 145, 0.6) solid;
  box-sizing: border-box;
}
.text1 {
  min-height: 40px;
  padding: 0px 10px;
  line-height: 40px;
  border-bottom: 1px rgba(250, 205, 145, 0.6) solid;
  box-sizing: border-box;
}
</style>