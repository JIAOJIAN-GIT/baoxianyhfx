<template>
  <el-card class="cardbox">
    <el-row class="header" type="flex" justify="flex-start">
      <div>
        <el-button class="el-button1" @click="details">客户详情</el-button>
        <el-button class="el-button1 el-button2" type="success"
          >编辑资料</el-button
        >
      </div>
    </el-row>
    <el-row class="text1">
      <el-col :span="24" class="title">
        <div class="grid-content">编辑产品资料</div>
        <div><b class="xing"> * </b>为必填项</div>
      </el-col>
      <el-col :span="24">
        <div style="margin: 20px auto; width: 60%">
          <el-form ref="form" :model="form" label-width="130px">
            <el-row>
              <!-- 产品名称，编码 -->
              <el-row
                class="row"
                :span="24"
                type="flex"
                justify="space-between"
              >
                <el-col :span="11">
                  <el-form-item label="客户姓名：">
                    <el-input
                      placeholder="张天爱"
                      :disabled="true"
                      v-model="form.name"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="职业：" :required="true">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 产品简介 -->
              <el-row class="row" :span="24">
                <el-form-item label="家庭收入：" :required="true">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-row>
              <el-row class="row1"> 新增家庭成员： </el-row>
              <!-- 产品类别，子类 -->
              <el-row
                class="row"
                :span="24"
                type="flex"
                justify="space-between"
              >
                <el-col :span="11">
                  <el-form-item label="姓名：" :required="true">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="与客户关系：" :required="true">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 产品类别，子类 -->
              <el-row
                class="row"
                :span="24"
                type="flex"
                justify="space-between"
              >
                <el-col :span="11">
                  <el-form-item label="性别：" :required="true">
                    <el-radio-group v-model="form.resource">
                      <el-radio label="男"></el-radio>
                      <el-radio label="女"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="年龄：" :required="true">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row class="row2">
                <el-button
                  class="btn1"
                  type="primary"
                  style="background-color: #0079fe"
                  >提交
                </el-button>
              </el-row>
              <el-row class="anniu">
                <el-button
                  class="btn1"
                  type="primary"
                  @click="btn2"
                  style="background-color: #0079fe"
                  >提交
                </el-button>
                <el-button class="btn1" plain>重置</el-button>
              </el-row>
            </el-row>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "男",
        desc: "",
      },
    };
  },
  methods: {
    btn2() {},
    details() {
      this.$router.push("/home/recommendDetails");
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  height: 46px;
  line-height: 46px;
  margin-bottom: 30px;
  padding-right: 20px;
  justify-content: space-between;
  border-bottom: 1px #e9e9e9 solid;
}
.grid-content {
  font-family: "PingFangSC-Semibold", "PingFang SC Semibold", "PingFang SC",
    sans-serif;
  font-weight: 650;
  font-size: 15px;
  margin-bottom: 10px;
  color: #666;
  font-style: normal;
  font-size: 14px;
  padding-left: 20px;
}
.text1 {
  font-size: 14px;
}
.header {
  width: 100%;
  margin-bottom: 20px;
}
.el-button1 {
  border-radius: 0px;
}
.el-button2 {
  background-color: #2ecc71;
}
.xing {
  color: red;
}
.anniu {
  margin-top: 20px;
  text-align: center;
}
.btn1 {
  width: 140px;
}
.row1 {
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
}
.row2 {
  text-align: right;
}
</style>