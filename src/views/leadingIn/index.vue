<template>
  <el-card class="cardbox">
    <div slot="header">批量导入</div>
    <!-- 步骤条 -->
    <el-steps
      align-center
      :active="index1"
      finish-status="success"
      process-status="process"
    >
      <el-step title="上传文件"></el-step>
      <el-step title="执行导入"></el-step>
      <el-step title="导入完成"></el-step>
    </el-steps>
    <!-- 内容部分 -->

    <!-- 上传文件 -->
    <div v-show="activeName === 'one'" class="box">
      <div class="box1" @click="shangquanFF">
        <div>
          <i class="el-icon-upload2"></i>
        </div>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <div class="abc">
            <div>{{ xiazai.title }}</div>
            <p>
              {{ xiazai.massge }}
            </p>
            <span size="small" type="primary">{{ xiazai.btn }}</span>
          </div>
        </el-upload>
      </div>

      <div class="box1" @click="shangquanFF">
        <div>
          <i class="el-icon-upload2"></i>
        </div>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <div class="abc">
            <div>{{ shangquan.title }}</div>
            <p>
              {{ shangquan.massge }}
            </p>
            <span size="small" type="primary">{{ shangquan.btn }}</span>
          </div>
        </el-upload>
      </div>
      <el-button class="btn btn1" type="primary" @click="btn1"
        >下一步</el-button
      >
    </div>
    <!-- 执行导入 -->
    <div class="box" v-show="activeName === 'two'">
      <div class="box1" @click="shangquanFF">
        <div>
          <i class="el-icon-success"></i>
        </div>
        <div class="abc">
          <div style="margin: 15px 0px">本次可导入客户数量</div>
          <span>{{ numberList.success }}</span>
        </div>
      </div>
      <div class="box1" @click="shangquanFF">
        <div>
          <i class="el-icon-warning"></i>
        </div>
        <div class="abc">
          <div style="margin: 15px 0px">本次不可导入客户数量</div>
          <span>{{ numberList.error }}</span>
        </div>
      </div>
      <div style="text-align: center; margin: 50px 0px">
        <el-button
          class="btn"
          type="primary"
          @click="btn2"
          style="background-color: #0079fe"
          >下一步
        </el-button>
        <el-button class="btn" plain>返回重新上传</el-button>
      </div>
      <el-row>
        <el-col class="title" :span="24">不可导入对象列表</el-col>
        <el-col :span="24">
          <el-table
            ref="multipleTable"
            :data="tableData"
            border
            stripe
            :header-cell-style="{
              backgroundColor: '#f5f5f5',
              color: 'rgb(102, 102, 102)',
              fontWeight: '700',
              fontSize: '14px',
            }"
            max-height="270"
            tooltip-effect="dark"
            style="width: 100%"
          >
            <el-table-column type="index" width="50"> </el-table-column>
            <el-table-column label="日期" width="120" align="center">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
    <!-- 导入完成 -->
    <div
      class="box"
      v-show="activeName === 'three'"
      style="margin: 50px auto; text-align: center"
    >
      <div style="font-size: 100px; color: #4bd863; margin: 20px 0px">
        <i class="el-icon-success"></i>
      </div>
      <div class="css1">
        批量导入完成，成功导入客户数据{{ numberList.success }}
      </div>
      <div>图部分</div>
      <el-button class="btn btn1" type="primary" @click="btn3">完成 </el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      xiazai: {
        title: "下载客户数据信息模板",
        massge:
          "请按照数据模板的格式准备导入数据，模板中的表头名称不可更改，表头行不能删除",
        btn: "下载模板",
      },
      shangquan: {
        title: "上传客户数据",
        massge:
          "文件后缀名必须为xls 或xlsx （即Excel格式），文件大小不得大于10M",
        btn: "上传文件",
      },
      fileList: [],
      activeName: "one", //下方内容条件
      index1: 0, //步骤条条件
      numberList: {
        success: "12345条", //可导入数据
        error: "5条", //导入失败数据
      },
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
    };
  },
  methods: {
    btn1() {
      this.activeName = "two";
      this.index1 = 1;
    },
    btn2() {
      this.activeName = "three";
      this.index1 = 2;
    },
    btn3() {
      this.index1 = 0;
      this.$router.push("/home/CustomerInquiryI");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    shangquanFF() {
      this.shangquan.title = "上传填好的客户信息表";
      this.shangquan.btn = "";
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
};
</script>

<style scoped>
.el-steps {
  margin: 50px auto;
}
.box {
  width: 70%;
  margin: 0px auto;
}
.box1 {
  margin: 30px 0px;
  border: solid #e9e9e9 1px;
  display: flex;
  justify-content: flex-start;
}
.box1 > div:nth-of-type(1) {
  width: 100px;
  min-height: 120px;
  line-height: 120px;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  color: #fff;
  background-color: #f5f5f5;
}
.abc {
  width: auto;
  padding: 20px;
  text-align: left;
}
.abc > div {
  font-size: 16px;
  font-weight: 600;
  color: #666;
}
.abc > p {
  font-size: 14px;
  color: #999;
  margin: 12px 0px;
}
.abc > span {
  font-size: 14px;
  color: #0079fe;
}

.btn {
  width: 150px;
}
.btn1 {
  display: block;
  margin: 50px auto;
  background-color: #0079fe;
}

/* style="background-color: '#f5f5f5',
              color: 'rgb(102, 102, 102)',
              font-weight: '700'," */
.title {
  margin: 20px 0px;
  font-size: 14px;
  color: rgb(102, 102, 102);
  font-weight: 700;
}
.css1 {
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  color: #555555;
  font-size: 24px;
}
</style>