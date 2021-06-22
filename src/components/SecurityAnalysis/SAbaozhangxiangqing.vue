<template>
  <el-card body-style="padding: 0px;" class="cardbox">
    <el-row>
      <el-col :span="24">
        <div class="grid-content"><b>张天爱</b> 保障详情</div>
      </el-col>
      <el-col v-for="(item, i) in tableData2" :key="i">
        <div style="margin: 20px auto; width: 95%">
          <div v-if="ind == '0'" class="title">年金险</div>
          <el-col v-if="ind == '1'">
            <el-col class="massge_top" :span="3">
              <span>投保人</span>
              <span>{{ item[0].appntno }}</span>
            </el-col>
            <el-col class="massge_top" :span="3">
              <span>与客户关系</span>
              <span>{{ item[0].name }}</span>
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
              prop="appntno"
              label="投保人姓名"
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
              prop="idno"
              label="身份证号码"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="contno"
              label="保单号"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="passiveName"
              label="被保险人姓名"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="relationship"
              label="投被保险人关系"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="riskshortname"
              label="险种名称"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="riskcode"
              label="险种分类名称"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="prem"
              label="主险保费"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="amnt"
              label="主险保额"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="payyears"
              label="交费年期"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="years"
              label="保险年期"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="paytodate"
              label="应交日期"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="enddate"
              label="满期日期"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="state"
              label="保单服务状态"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="appflag"
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
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      multipleSelection: [],
      ind: "1",
      tableData1: [
        {
          Icpol: {
            a: {
              date: "2016-05-03",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄",
            },
            a1: {
              date: "2016-05-03",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄",
            },
            a2: {
              date: "2016-05-03",
              name: "王小虎1",
              address: "上海市普陀区金沙江路 1518 弄",
            },
            a3: {
              date: "2016-05-03",
              name: "王小虎1",
              address: "上海市普陀区金沙江路 1518 弄",
            },
            a4: {
              date: "2016-05-03",
              name: "王小虎2",
              address: "上海市普陀区金沙江路 1518 弄",
            },
            a5: {
              date: "2016-05-03",
              name: "王小虎2",
              address: "上海市普陀区金沙江路 1518 弄",
            },
          },
        },
      ],
      tableData2: [],
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
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    requestData(id) {
      this.$axios.get(`/users/${id}`).then((res) => {
        let a = Object.values(res.data.Icpol);
        let b = a.reduce(
          (r, x) => ((r[x.appntno] || (r[x.appntno] = [])).push(x), r),
          {}
        );
        let c = Object.keys(b).map((x) => b[x]);
        this.tableData2 = c;
        console.log(res);
      });
    },
    handleClick(row) {
      this.$router.push("/home/SAbaozhangxiangqing2");
      console.log(row);
    },
  },
  mounted: function () {
    // 用户id
    // console.log(this.$route.query.id);
    this.requestData(this.$route.query.id);
    // let a = Object.values(this.tableData1[0].Icpol);
    // let b = a.reduce(
    //   (r, x) => ((r[x.name] || (r[x.name] = [])).push(x), r),
    //   {}
    // );
    // let c = Object.keys(b).map((x) => b[x]);
    // this.tableData2 = c;
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