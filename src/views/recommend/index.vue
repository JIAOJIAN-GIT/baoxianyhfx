<template>
  <!-- 客户查询 -->
  <div class="cardbox">
    <!-- 搜索部分 -->
    <el-card body-style="padding: 10px 0px;">
      <div class="title_sou">
        <div class="font_title">家庭查询</div>
      </div>
      <el-divider></el-divider>
      <!-- 搜索内容 -->
      <el-form :inline="true" :model="params" class="content_sou">
        <el-form-item label="输入查询">
          <el-input v-model="formDate.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码：">
          <el-input v-model="formDate.number" placeholder="全部"></el-input>
        </el-form-item>
        <el-form-item label="客户号">
          <el-select v-model="formDate.level" placeholder="全部">
            <!-- <el-option
              v-for="(item, i) in FData.customer_levels.data"
              :key="i"
              :value="item"
            ></el-option> -->
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
    <el-card class="shu" body-style="padding: 10px 0px">
      <div class="content_title">
        <div class="font_title">家庭列表</div>
      </div>
      <!-- 表格 -->
      <div class="divcol">
        <el-table
          ref="multipleTable"
          :data="tableData"
          border
          stripe
          :header-cell-style="{
            backgroundColor: '#03a7f0',
            fontWeight: 600,
            color: '#fff',
          }"
          height="570"
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
            label="级别"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="level"
            label="性别"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="sex"
            label="生日"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="sex"
            label="投保主险保费保费总额"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="sex"
            label="投保保障总额"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="sex"
            label="保单数"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="sex"
            label="家庭保障总额"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="sex"
            label="家庭保障缺口预估"
          ></el-table-column>
          <el-table-column align="center" fixed="right" label="操作" width="80">
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
      <!-- 分页 -->
      <div class="content_title1">
        <div>
          <div>
            <el-button
              icon="el-icon-check"
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @click="selAll()"
              >全选
            </el-button>
            <el-button icon="el-icon-finished" @click="unselAll(tableData)"
              >反选
            </el-button>
            <el-select
              style="width: 190px"
              v-model="value"
              placeholder="请选择"
            >
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
              :page-sizes="[10, 20]"
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
      value: "",
      isIndeterminate: "",
      checkAll: "",
      // 查询参数
      params: {
        name: "", //名字
        channel: "", //渠道
        cities: "", //城市
        region: "", //地区
        level: "", //级别
        state: "", //服务
        page: 1, //当前页码
        page_size: 10, //一页条数
        total: 0, //总页数
      },
      // 查询数据
      formDate: {
        name: "",
        isinsured: "1",
        id: "",
        number: "",
        cadegory: "",
        page: 0, //当前页码
        page_size: 20, //一页条数
      },
      options: [{ label: "批量操作", value: "批量操作" }],
      // 查询数据
      FData: [],
      // 表数据
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

      // 当表格选择项发生变化时
      multipleSelection: [],
    };
  },
  watch: {
    // 监听表格多选事件
    tableData: {
      handler(value) {
        if (this.checkAll) {
          this.tableData.forEach((row) => {
            if (row) {
              this.$refs.multipleTable.toggleAllSelection(row, true);
            }
          });
        }
      },
      deep: true,
    },
  },
  methods: {
    selAll() {
      if (this.$refs.multipleTable.selection.length < this.tableData.length) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
      this.$refs.multipleTable.toggleAllSelection();
    },
    //表格内checkbox触发的全选按钮状态变化
    selRow(val) {
      if (val.length < this.tableData.length && val.length > 0) {
        this.isIndeterminate = true;
      } else if (val.length === this.tableData.length) {
        this.isIndeterminate = false;
        this.checkAll = true;
      } else if (val.length === 0) {
        this.isIndeterminate = false;
        this.checkAll = false;
      }
    },
    unselAll(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    //详情
    handleClick(row) {
      this.$store.commit("saveIndexState", "0");
      this.$router.push(`/home/recommendDetails`);
      console.log(row.id);
    },
    // 请求数据
    requestData(params) {
      let date = {};
      for (let item in params) {
        if (params[item] !== "") {
          date[item] = params[item];
        }
      }
      console.log(date);
      this.tableData = [];
      this.$axios({
        url: "/users",
        params: date,
      })
        .then((res) => {
          this.params.total = res.data.total;
          // let obj = Object.values(res.data.data.Customer);
          // 整体数据
          let obj = Object.keys(res.data.data.Customer);
          obj = obj.sort();
          obj = obj.map((x) => res.data.data.Customer[x]);
          this.tableData = obj;

          console.log(this.tableData.length);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //查询事件
    querydata() {
      this.params.page = "1";
      this.params.page_size = "10";
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
        page: 0, //当前页码
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
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {
          console.log("quxiao");
        });
    },
    //查询事件
    querydata2() {
      // this.params.page = "1";
      // this.params.page_size = "10";
      // this.requestData(this.params);
      // this.cancelForm();
      console.log(this.form);
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
    },
  },
  mounted: function () {
    this.$axios.get("/dictionary").then((res) => {
      this.FData = res.data.customer;
    });
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
  padding: 7px 0px;
  display: flex;
  justify-content: flex-start;
}
.content_sou {
  position: relative;
  padding-top: 10px;
  height: 50px;
  margin: 0px 20px;
  font-size: 14px !important;
  display: flex;
  justify-content: space-between;
}
.font_title {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.el-divider--horizontal {
  margin: 10px 0px;
}

/* 下部分 */
.divcol {
  width: 98%;
  margin: 0px auto !important;
}
.shu {
  margin-top: 25px;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 130px;
  bottom: 10px;
}
.content_title {
  margin: 0px 20px 10px 20px;
  padding: 7px 0px;
  display: flex;
  justify-content: flex-start;
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

.form2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
.form2 > .el-form-item {
  margin: 0px 0px 10px 8px;
  display: flex;
  flex-flow: column nowrap;
}
.demo-drawer__footer {
  text-align: right;
  padding: 20px 40px 0px 0px;
}
.demo-drawer__footer > .el-link {
  margin-right: 10px;
}
</style>