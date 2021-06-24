<template>
  <el-card body-style="padding: 0px;" class="cardbox">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <b>{{ name }}</b> 保障详情
        </div>
      </el-col>
      <el-col>
        <el-col v-for="(item, i) in tableData" :key="i">
          <div style="margin: 20px auto; width: 95%">
            <el-col>
              <el-col class="massge_top" :span="3">
                <span>投保人</span>
                <span>{{ item[0].app.data.投保人姓名 }}</span>
              </el-col>
              <el-col class="massge_top" :span="3">
                <span>与客户关系</span>
                <span>{{ item[0].app.data.投被保人关系 }}</span>
              </el-col>
            </el-col>
            <el-table
              ref="multipleTable"
              :data="item"
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
              <!-- <el-table-column label="日期" width="120" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column> -->
              <el-table-column
                align="center"
                width="120"
                prop="app.data.投保人姓名"
                label="投保人姓名"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="app.data.地区"
                label="地区"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="app.data.级别"
                label="级别"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="app.data.性别"
                label="性别"
              ></el-table-column>
              <el-table-column
                align="center"
                width="120"
                prop="app.data.身份证号码"
                label="身份证号码"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="icpol.data.保单号"
                label="保单号"
              ></el-table-column>
              <el-table-column
                align="center"
                width="120"
                prop="ins.data.被保人姓名"
                label="被保险人姓名"
              ></el-table-column>
              <el-table-column
                align="center"
                width="120"
                prop="app.data.投被保人关系"
                label="投被保险人关系"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="icpol.data.险种名称"
                label="险种名称"
              ></el-table-column>
              <el-table-column
                align="center"
                width="120"
                prop="icpol.data.险种名称分类"
                label="险种分类名称"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="icpol.data.主险保费"
                label="主险保费"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="icpol.data.主险保额"
                label="主险保额"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="icpol.data.交费年期"
                label="交费年期"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="icpol.data.保险年期"
                label="保险年期"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="icpol.data.应交日期"
                label="应交日期"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="icpol.data.满期日期"
                label="满期日期"
              ></el-table-column>
              <el-table-column
                align="center"
                width="120"
                prop="icpol.data.保单服务状态"
                label="保单服务状态"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="icpol.data.保单状态"
                label="保单状态"
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
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      multipleSelection: [],
      name: "张天爱",
      title: "",
      ind: "1",

      tableData: [],
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    requestData(id) {
      let params = {
        page: "0",
        page_size: "20",
        customer: id,
      };
      this.$axios({ url: "/bills", params }).then((res) => {
        console.log(res.data.data);
        let b = res.data.data.reduce(
          (r, x) => (
            (r[x.app.data.投保人姓名] || (r[x.app.data.投保人姓名] = [])).push(
              x
            ),
            r
          ),
          {}
        );
        let c = Object.keys(b).map((x) => b[x]);
        this.tableData = c;
        console.log(this.tableData);
      });
      // this.$axios.get(`/users/${id}`).then((res) => {
      //   let a = Object.values(res.data.data.Icpol);
      //   let b = a.reduce(
      //     (r, x) => ((r[x.appntno] || (r[x.appntno] = [])).push(x), r),
      //     {}
      //   );
      //   let c = Object.keys(b).map((x) => b[x]);
      //   this.tableData2 = c;
      //   // console.log(res.data.data.Icpol);
      //   // console.log("1111111111111111111");
      // });
    },
    requestData2(params) {
      this.$axios({ url: "/bills", params }).then((res) => {
        this.tableData[0] = res.data.data;
        console.log(res.data.data);
        console.log(this.tableData);
      });
    },

    handleClick(row) {
      this.$store.commit("savebaodanData", Object.values(row));
      this.$router.push("/home/SAbaozhangxiangqing2");
    },
  },
  computed: {
    indexState() {
      return this.$store.state.indexState;
    },
  },
  mounted: function () {
    // 用户id
    // console.log(this.$route.query.id);
    // console.log(this.indexState);
    this.title = this.$route.query.prdtype;
    this.name = this.$route.query.name;
    let query = {
      page: "0",
      page_size: "20",
      isinsured: "1",
      customer: this.$route.query.id,
      prdtype: this.$route.query.prdtype,
    };
    console.log(this.indexState);

    this.indexState == 0
      ? this.requestData(this.$route.query.id)
      : this.requestData2(query);
  },
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
  width: 90px;
  padding: 10px 0px;
  text-align: center;
  font-weight: 650;
  font-style: normal;
  font-size: 14px;
  color: #fff;
  background-color: #f59a23;
  border-radius: 5px;
  margin-bottom: 5px;
}

.massge_top {
  display: flex;
  box-sizing: border-box;
  border-bottom: solid 2px #f59a23;
  justify-content: flex-start;
  padding: 0px !important;
  margin: 10px;
  border-radius: 5px 0px 0px 5px;
}
.massge_top span {
  padding: 10px;
  text-align: center;
  font-size: 14px;
}
.massge_top > span:nth-of-type(1) {
  width: 90px;
  padding: 10px 0px;
  text-align: center;
  font-weight: 650;
  font-style: normal;
  font-size: 14px;
  color: #fff;
  border-radius: 5px 0px 0px 5px;
  background-color: #f59a23;
}
</style>