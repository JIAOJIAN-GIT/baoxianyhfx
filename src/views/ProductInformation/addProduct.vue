<template>
  <el-card body-style="padding: 0px;" class="cardbox">
    <el-row>
      <el-col :span="24" class="title">
        <div class="grid-content">编辑产品资料</div>
        <div class=""><b class="xing"> * </b>为必填项</div>
      </el-col>
      <el-col :span="24">
        <div style="margin: 20px auto; width: 60%">
          <el-form ref="form" :model="form" label-width="100px">
            <el-row>
              <!-- 产品名称，编码 -->
              <el-row
                class="row"
                :span="24"
                type="flex"
                justify="space-between"
              >
                <el-col :span="11">
                  <el-form-item label="产品名称：" :required="true">
                    <el-input
                      placeholder="惠信宝"
                      v-model="form.name"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="产品编码：" :required="true">
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
                  <el-form-item label="产品类别：" :required="true">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="产品子类：" :required="true">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 产品简介 -->
              <el-row class="row" :span="24">
                <el-form-item label="产品简介：" :required="true">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-row>
              <!-- 产品详情 -->
              <el-row class="row" :span="24">
                <el-form-item label="产品详情：" :required="true">
                  <el-input
                    type="textarea"
                    :rows="8"
                    v-model="form.desc"
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
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {},
  computed: {},
  mounted: function () {},
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
.row {
  margin-bottom: 30px;
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