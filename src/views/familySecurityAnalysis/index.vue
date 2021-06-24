<template>
  <el-card class="cardbox">
    <!-- 搜索 -->
    <el-form :inline="true" :model="formDate" class="content_sou">
      <el-form-item label="输入查询">
        <el-input v-model="formDate.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="身份证号码">
        <el-input v-model="formDate.idno" placeholder="全部"></el-input>
      </el-form-item>
      <el-form-item label="家庭号">
        <el-input v-model="formDate.appntno" placeholder="全部"></el-input>
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
    <el-row :gutter="10" style="margin-top: 0px">
      <el-col :span="10">
        <div class="grid-content">家庭保障一览</div>
        <el-col :span="24" :gutter="10">
          <el-col class="massge_top" :span="7">
            <span>姓名</span>
            <span>{{ lengthShu == 1 ? me.name : "未知" }}</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>性别</span>
            <span>{{ lengthShu == 1 ? me.sex : "未知" }}</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>地区</span>
            <span>{{ lengthShu == 1 ? me.region : "未知" }}</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>生日</span>
            <span>{{ lengthShu == 1 ? me.birthday : "未知" }}</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>渠道</span>
            <span>{{ lengthShu == 1 ? me.channel : "未知" }}</span>
          </el-col>
          <el-col class="massge_top" :span="7">
            <span>客户级别</span>
            <span> {{ lengthShu == 1 ? me.level : "未知" }}</span>
          </el-col>
        </el-col>
        <el-col :span="24">
          <el-row class="massge_bottom" type="flex" justify="space-around">
            <el-col :span="6">
              <div>保障总额度</div>
              <div>{{ me.tbamntTotal ? me.tbamntTotal : "0" }}</div>
            </el-col>
            <el-col :span="6">
              <div>年金险保障额度</div>
              <div>{{ totlelist["年金险"] ? totlelist["年金险"] : "0" }}</div>
            </el-col>
            <el-col :span="6">
              <div>健康险保障额度</div>
              <div>{{ totlelist["健康险"] ? totlelist["健康险"] : "0" }}</div>
            </el-col>
          </el-row>
          <el-row class="massge_bottom" type="flex" justify="space-around">
            <el-col :span="6">
              <div>意外险保障额度</div>
              <div>{{ totlelist["意外险"] ? totlelist["意外险"] : "0" }}</div>
            </el-col>
            <el-col :span="6">
              <div>寿险保障额度</div>
              <div>{{ totlelist["寿险"] ? totlelist["寿险"] : "0" }}</div>
            </el-col>
            <el-col :span="6">
              <div>保障缺口</div>
              <div>{{ me.meamntGap ? me.meamntGap : "0" }}</div>
            </el-col>
          </el-row>
        </el-col>
      </el-col>
      <el-col :span="7">
        <div class="grid-content">家庭特征分析</div>
        <echarts
          :id="'bargraph1'"
          :data="option1"
          style="height: 30vh"
        ></echarts>
      </el-col>
      <el-col :span="7">
        <div class="grid-content">家庭保障分析</div>
        <echarts
          :id="'bargraph2'"
          :data="option2"
          style="height: 30vh"
        ></echarts>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">家庭保障列表</div>

        <div class="list">
          <el-col>
            <el-col class="massge_top1" :span="3">
              <span>家庭成员</span>
              <span>张天爱</span>
            </el-col>
            <el-col class="massge_top1" :span="3">
              <span>与客户关系</span>
              <span>本人</span>
            </el-col>
            <el-col class="massge_top1" :span="3">
              <span>保障缺口</span>
              <span>1700000</span>
            </el-col>
          </el-col>
          <el-table
            ref="multipleTable"
            :data="tableData"
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
            <el-table-column
              align="center"
              width="120"
              prop="name"
              label="姓名"
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
              prop="age"
              label="年龄"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="prdtype"
              label="险种分类名称"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="premTotal"
              label="主险保费总额"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="amnt"
              label="主险保额总额"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="prem"
              label="年交保费总额"
            ></el-table-column>
            <el-table-column
              align="center"
              width="120"
              prop="meamntGap"
              label="保障缺口"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="state"
              label="保单服务状态"
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
import echarts from "../../components/echartsbox.vue";
export default {
  data() {
    return {
      input: "qinfshu",
      lengthShu: "2",
      formDate: {
        name: "d9345d172a96f02c",
        isinsured: "1",
        id: "",
        prdtype: "",
        idno: "",
        appntno: "",
        page: 0, //当前页码
        page_size: 20, //一页条数
      },
      multipleSelection: [],
      me: {},
      totlelist: {},
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

      option1: {
        radar: {
          shape: "circle",
          indicator: [
            { name: "消费金额", max: 80 },
            { name: "支付能力", max: 90 },
            { name: "客户粘性", max: 50 },
            { name: "客户忠诚度", max: 60 },
            { name: "客户有效性", max: 60 },
          ],
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            data: [
              {
                value: [40, 40, 40, 40, 40],
                name: "预算分配（Allocated Budget）",
                areaStyle: {
                  color: "rgba(240,255,255, 0.9)",
                },
              },
            ],
          },
        ],
      },
      option2: {
        radar: {
          shape: "circle",
          indicator: [
            { name: "健康险保障", max: 180 },
            { name: "意外险保障", max: 190 },
            { name: "年金险保障", max: 150 },
            { name: "寿险保障", max: 160 },
          ],
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            itemStyle: {
              normal: {
                // 点的颜色。
                color: "red",
              },
              // 高亮样式。
              emphasis: {
                // 高亮时点的颜色。
                color: "blue",
              },
            },
            data: [
              {
                value: [60, 60, 60, 60],
                name: "预算分配（Allocated Budget）",
                areaStyle: {
                  color: "rgba(23, 255, 210 , 0.9)",
                },
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      console.log("111111111");
      this.$store.commit("saveIndexState", "1");
      this.$router.push(
        `/home/SAbaozhangxiangqing?id=${row.id}&prdtype=${row.prdtype}`
      );
      console.log(row);
    },
    open() {
      this.$alert("有同名客户，请输入多个搜索条件", "错误", {
        confirmButtonText: "确定",
      });
    },
    open1() {
      this.$alert("未找到数据", "错误", {
        confirmButtonText: "确定",
      });
    },
    // 查询事件
    querydata() {
      this.formDate.prdtype = "";
      this.requestData(this.formDate);
    },
    resetData() {},
    requestData(params) {
      let date = {};
      for (let item in params) {
        if (params[item] !== "") {
          date[item] = params[item];
        }
      }
      // console.log(date);
      this.tableData = [];
      this.$axios({
        url: "/users",
        params: date,
      })
        .then((res) => {
          this.me = res.data.data;
          let obj = Object.values(res.data.data.Customer);
          this.lengthShu = obj.length;
          console.log(obj);
          if (this.lengthShu == 1) {
            this.me = obj[0];
            this.totlelist = [];
            Object.keys(obj[0].prdtypes).forEach((item) => {
              // obj[0].prdtypes.forEach((item) => {
              this.formDate.prdtype = item;
              this.totlelist[item] = obj[0].prdtypes[item].amnt;
              let obj3 = {
                id: obj[0].id,
                name: obj[0].name,
                region: obj[0].region,
                level: obj[0].level,
                sex: obj[0].sex,
                age: "18",
                prdtype: item,
                premTotal: obj[0].prdtypes[item].premTotal,
                amnt: obj[0].prdtypes[item].amnt,
                prem: obj[0].prdtypes[item].prem,
                meamntGap: 1000000 - obj[0].prdtypes[item].premTotal,
                state: "123",
              };
              this.tableData.push(obj3);
            });
          } else if (obj.length >= 2) {
            this.open();
          } else {
            this.open1();
          }

          // 整体数据
          // this.tableData = obj;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted: function () {
    this.requestData(this.formDate);
  },
  components: {
    echarts,
  },
};
</script>

<style scoped>
.content_sou {
  color: rgba(aas, rgb(23, 255, 100), blue, alpha);
  position: relative;
  margin: 0px 20px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

.el-row {
  margin-top: 20px;
  margin-bottom: 20px;
}
.grid-content {
  min-height: 36px;
  line-height: 36px;
  font-size: 14px;
  margin-bottom: 10px;
  color: #fff;
  background-color: #2ecc71;
  padding-left: 10px;
}
.massge_top {
  display: flex;
  border-bottom: solid 1px #f59a23;
  justify-content: flex-start;
  padding: 0px !important;
  margin: 10px;
}
.massge_top span {
  padding: 10px 0px;
  text-align: center;
  font-size: 14px;
}
.massge_top > span:nth-of-type(1) {
  width: 72px;
  color: #fff;
  background-color: #f59a23;
}
.massge_top > span:nth-of-type(2) {
  margin: 0 auto;
}

.massge_bottom > .el-col > div:nth-of-type(1) {
  font-size: 14px;
  color: #fff;
  text-align: center;
  padding: 10px 0px;
  background-color: #02a7f0;
}
.massge_bottom > .el-col > div:nth-of-type(2) {
  font-size: 14px;
  padding: 10px 0px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #02a7f0;
  border-radius: 2px;
}

.list {
  width: 95%;
  margin: 20px auto;
}

.massge_top1 {
  display: flex;
  box-sizing: border-box;
  border-bottom: solid 2px #f59a23;
  justify-content: flex-start;
  padding: 0px !important;
  margin: 10px;
  margin-left: 0px;
  background-color: #f2f2f2;
  border-radius: 5px 0px 0px 5px;
}
.massge_top1 span {
  padding: 10px;
  text-align: center;
  font-size: 14px;
}
.massge_top1 > span:nth-of-type(1) {
  width: 90px;
  padding-top: 10px;
  text-align: center;
  font-weight: 650;
  font-style: normal;
  font-size: 14px;
  color: #fff;
  border-radius: 4px 0px 0px 4px;
  background-color: #f59a23;
}
</style>