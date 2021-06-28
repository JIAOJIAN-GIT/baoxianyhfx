<template>
  <el-card body-style="padding: 0px;" class="cardbox">
    <el-row>
      <el-col :span="24" class="title">
        <div class="grid-content">编辑产品资料</div>
        <div class=""><b class="xing"> * </b>为必填项</div>
      </el-col>
      <el-col :span="24">
        <div style="margin: 20px auto; width: 50%">
          <el-form ref="form" :model="form" label-width="100px">
            <el-row>
              <!-- 登录账号： -->
              <el-row class="row" :span="24">
                <el-form-item label="登录账号：" :required="true">
                  <el-input
                    v-model="form.account"
                    placeholder="请填写登录账号"
                  ></el-input>
                </el-form-item>
              </el-row>
              <!-- 登录密码： -->
              <el-row class="row" :span="24">
                <el-form-item label="登录密码：" :required="true">
                  <el-input
                    v-model="form.password"
                    placeholder="请填写登录密码"
                  ></el-input>
                </el-form-item>
              </el-row>
              <!-- 员工姓名： -->
              <el-row class="row" :span="24">
                <el-form-item label="员工姓名：" :required="true">
                  <el-input
                    v-model="form.name"
                    placeholder="请填写员工姓名"
                  ></el-input>
                </el-form-item>
              </el-row>
              <!-- 员工性别： -->
              <el-row class="row" :span="24">
                <el-form-item label="员工性别：" :required="true">
                  <el-radio-group v-model="form.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-row>
              <!-- 手机号码： -->
              <el-row class="row" :span="24">
                <el-form-item label="手机号码：" :required="true">
                  <el-input
                    v-model="form.mobile"
                    placeholder="请填写手机号码"
                  ></el-input>
                </el-form-item>
              </el-row>
              <!-- 邮箱地址： -->
              <el-row class="row" :span="24">
                <el-form-item label="邮箱地址：">
                  <el-input
                    v-model="form.mail"
                    placeholder="请填写邮箱地址"
                  ></el-input>
                </el-form-item>
              </el-row>
              <!-- 所属部门： -->
              <el-row class="row" :span="24">
                <el-form-item label="所属部门：" :required="true">
                  <el-select
                    v-model="form.department"
                    placeholder="请选择活动区域"
                    style="width: 100%"
                  >
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-row>
              <!-- 当前职务： -->
              <el-row class="row" :span="24">
                <el-form-item label="当前职务：" :required="true">
                  <el-select
                    v-model="form.post"
                    placeholder="请选择活动区域"
                    style="width: 100%"
                  >
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-row>
              <!-- 座机/分机： -->
              <el-row class="row" :span="24">
                <el-form-item class="input" label="座机/分机：">
                  <el-input
                    class="input1"
                    v-model="form.Landline1"
                    placeholder="电话区号"
                  ></el-input>
                  <el-input
                    class="input2"
                    v-model="form.Landline2"
                    placeholder="电话号码"
                  ></el-input>
                  <el-input
                    class="input3"
                    v-model="form.Landline3"
                    placeholder="分机号码"
                  ></el-input>
                </el-form-item>
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
      //   tableData: [{}],
      form: {
        account: "", //登录账号
        password: "", //登录密码
        name: "", //员工姓名
        sex: "男", //员工性别
        mobile: "", //手机号码
        mail: "", //邮箱地址
        department: "", //所属部门
        post: "", //当前职务
        Landline1: "", //电话区号
        Landline2: "", //电话号码
        Landline3: "", //分机号码
      },
    };
  },
  methods: {
    btn2() {},
  },
  computed: {},
  mounted: function () {
    let params = this.$route.params;
    params.type == "0" ? (this.form = params.data) : "";
    console.log(this.form);
  },
};
</script>

<style scoped>
.title {
  display: flex;
  height: 46px;
  line-height: 46px;
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
.xing {
  color: red;
}
/* .row {
  margin-bottom: 30px;
} */
.input1 {
  width: 20%;
}
.input2 {
  width: 60%;
  margin-left: -5px;
}
.input3 {
  margin-left: -5px;
  width: 20%;
}
.el-row {
  font-size: 14px;
  color: #666;
}
.anniu {
  text-align: center;
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
.btn1 {
  width: 140px;
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