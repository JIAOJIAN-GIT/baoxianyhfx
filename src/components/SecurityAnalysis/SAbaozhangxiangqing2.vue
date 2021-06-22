<template>
  <el-card body-style="padding: 0px;" class="cardbox">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">保障详情</div>
        <div style="margin: 0px auto; width: 80%">
          <el-row>
            <el-col class="title" :span="24"> 基本信息 </el-col>
            <el-col :span="24" class="fllex">
              <div class="massge_top">
                <div>姓名</div>
                <div>张天爱</div>
              </div>
              <div class="massge_top">
                <div>姓名</div>
                <div>张天爱</div>
              </div>
              <div class="massge_top">
                <div>姓名</div>
                <div>张天爱</div>
              </div>
              <div class="massge_top">
                <div>姓名</div>
                <div>张天爱</div>
              </div>
              <div class="massge_top">
                <div>姓名</div>
                <div>张天爱</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.grid-content {
  min-height: 46px;
  line-height: 46px;
  font-size: 15px;
  margin-bottom: 10px;
  color: #fff;
  font-weight: 650;
  font-style: normal;
  font-size: 16px;
  background-color: #2ecc71;
  padding-left: 20px;
}
.title {
  text-decoration: underline;
  font-weight: 650;
  font-style: normal;
  font-size: 16px;
  text-decoration: underline;
  text-align: left;
  line-height: 28px;
  color: #666;
  margin: 20px 10px;
}
.fllex {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.massge_top {
  width: 31%;
  margin: 10px;
}
.massge_top > div:nth-of-type(1) {
  width: 100px;
  font-size: 14px;
  color: #fff;
  text-align: left;
  padding: 15px 10px;
  background-color: #0297d7;
}
.massge_top > div:nth-of-type(2) {
  font-size: 14px;
  padding: 15px 10px;
  box-sizing: border-box;
  border: 1px solid #0297d7;
  border-radius: 3px;
}
</style>