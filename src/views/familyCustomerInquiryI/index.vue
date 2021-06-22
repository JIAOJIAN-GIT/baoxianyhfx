<template>
  <!-- 客户查询 -->
  <div class="cardbox">
    <!-- 搜索部分 -->
    <el-card body-style="padding: 10px 0px;">
      <div class="title_sou">
        <div class="font_title">客户查询</div>
        <el-button type="primary" @click="open">高级搜索</el-button>
      </div>
      <el-divider></el-divider>
      <!-- 搜索内容 -->
      <el-form :inline="true" :model="params" class="content_sou">
        <el-form-item label="输入查询">
          <el-input
            v-model="params.name"
            placeholder="姓名"
            style="width: 100px"
          ></el-input>
        </el-form-item>
        <el-form-item label="渠道">
          <el-select
            v-model="params.channel"
            placeholder="个险"
            style="width: 100px"
          >
            <el-option label="" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="城市">
          <el-select
            v-model="params.region"
            placeholder="太原"
            style="width: 120px"
          >
            <el-option label="" value="呼和浩特"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="区">
          <el-select v-model="params.region" placeholder="小店区">
            <el-option label="" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户级别">
          <el-select
            v-model="params.level"
            placeholder="钻石客户"
            style="width: 120px"
          >
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="服务">
          <el-select
            v-model="params.state"
            placeholder="在职"
            style="width: 100px"
          >
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
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
    </el-card>
    <!-- 数据展示 -->
    <el-card class="shu" body-style="padding: 10px 0px;">
      <div class="content_title">
        <div>客户列表</div>
        <div>
          <el-button><i class="el-icon-upload2"></i>导出</el-button>
          <el-button @click="leadingIn"
            ><i class="el-icon-download"></i>导入</el-button
          >
          <el-button><i class="el-icon-plus"></i>添加</el-button>
        </div>
      </div>
      <!-- 表格 -->
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        stripe
        :header-cell-style="{
          backgroundColor: '#03a7f0',
          color: '#fff',
        }"
        height="600"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
          align="center"
        ></el-table-column>
        <!-- <el-table-column label="日期" width="120" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column> -->
        <el-table-column
          align="center"
          prop="name"
          label="客户姓名"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="region"
          label="所在地区"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="channel"
          label="渠道"
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
          prop="birthday"
          label="生日"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="tbpremTotal"
          label="投保主险保费保费总额"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="tbamntTotal"
          label="投保保障总额"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="number"
          label="保单数"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="mepremTotal"
          label="本人保障总额"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="meamntGap"
          label="本人保障缺口"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="state"
          label="服务状态"
        ></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" width="80">
          <template align="center" slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="content_title1">
        <div>
          <div>
            <el-checkbox v-model="value" label="全选" border></el-checkbox>
            <el-checkbox v-model="value" label="反选" border></el-checkbox>
            <el-select style="width: 90px" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div>
            <el-pagination
              background
              layout="prev, pager, next,sizes"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="params.page"
              :total="params.total"
              :page-size="params.page_size"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      value: "da",
      params: {
        name: "", //名字
        channel: "", //渠道
        region: "", //城市
        region: "", //地区
        level: "", //级别
        state: "", //服务
        page: 1, //当前页码
        page_size: 10, //一页条数
        total: 0, //总页数
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      tableData: [],
      // tableData: [
      //   {
      //     Customer: {
      //       "6baced39622b6070f8fe": {
      //         id: "6baced39622b6070f8fe",
      //         name: "张天爱",
      //         region: "北京",
      //         channel: "个险",
      //         level: "级别",
      //         sex: "性别",
      //         birthday: "生日",
      //         tbpremTotal: "投保主险保费保费总额",
      //         tbamntTotal: "投保保障总额",
      //         number: "保单数",
      //         mepremTotal: "本人保障总额",
      //         meamntGap: "本人保障缺口",
      //         state: "在职单",
      //       },
      //     },
      //   },
      // ],
      multipleSelection: [],
    };
  },
  methods: {
    //详情
    handleClick(row) {
      this.$router.push(`/home/SAbaozhangxiangqing?id=${row.id}`);
      console.log(row.id);
    },
    // 请求数据
    requestData(params1) {
      this.tableData = [];
      this.$axios({
        url: "/users",
        params: {
          name: params1.name,
          channel: params1.channel,
          state: params1.state,
          region: params1.region,
          page: params1.page,
          page_size: params1.page_size,
        },
      })
        .then((res) => {
          this.params.total = res.data.total;
          let obj = Object.values(res.data.data.Customer);
          this.tableData = obj;
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //查询事件
    querydata() {
      // this.$axios.get('')
      console.log(this.formDta);
      this.requestData(this.params);
    },
    //重置事件
    resetData() {
      this.params = {
        name: "", //名字
        channel: "", //渠道
        region: "", //城市
        region: "", //地区
        level: "", //级别
        state: "", //服务
        page: 1, //当前页码
        page_size: 10, //一页条数
        total: 0, //总页数
      };
      this.requestData(this.params);
    },
    // 导入事件
    leadingIn() {
      this.$router.push("/home/leadingIn");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.params.page_size = val;
      this.requestData(this.params);
    },
    // 改变页吗方法
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.params.page = val;
      this.requestData(this.params);
    },
    // 弹框
    open() {
      this.$alert("这是一段内容", "标题名称", {
        title: "高级搜索",
        closeOnClickModal: true,
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
  },
  mounted: function () {
    this.requestData(this.params);
  },
};
</script>

<style scoped>
.cardbox .el-card:nth-of-type(1) {
  margin-bottom: 10px;
}

.title_sou {
  margin: 0px 20px;
  display: flex;
  justify-content: space-between;
}
.content_sou {
  position: relative;
  margin: 0px 20px;
  font-size: 14px !important;
  display: flex;
  justify-content: space-between;
}
.title_sou > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.el-divider--horizontal {
  margin: 10px 0px;
}

/* 下部分 */
.shu {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 130px;
  bottom: 10px;
}
.content_title {
  margin: 0px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
}
.content_title1 {
  /* width: 100%; */
  /* padding: 0px 20px; */
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 30px;
}
.content_title1 > div {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.content_title > div:nth-of-type(1) {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.el-table-column--selection {
  background-color: #03a7f0;
}
</style>