<template>
  <!-- 客户查询 -->
  <div class="cardbox">
    <!-- 搜索部分 -->
    <el-card body-style="padding: 10px 0px;">
      <div class="title_sou">
        <div class="font_title">产品查询</div>
      </div>
      <el-divider></el-divider>
      <!-- 搜索内容 -->
      <el-form :inline="true" :model="params" class="content_sou">
        <el-form-item label="输入查询">
          <el-input v-model="formDate.name" placeholder="产品名称"></el-input>
        </el-form-item>
        <el-form-item label="产品编号">
          <el-input v-model="formDate.number" placeholder="产品编号"></el-input>
        </el-form-item>
        <el-form-item label="产品类别">
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
      <!-- 图表 -->
      <div class="tubiao">
        <el-row>
          <el-col :span="14">
            <el-card class="box1">
              <echartsbox
                :id="'bargraph1'"
                :data="option1"
                style="height: 70vh; width: 100%"
              ></echartsbox>
            </el-card>
          </el-col>
          <el-col :span="9" :push="1">
            <el-row>
              <el-card class="box2">
                <echartsbox
                  :id="'bargraph2'"
                  :data="option2"
                  style="height: 35vh; width: 100%"
                ></echartsbox>
              </el-card>
            </el-row>
            <el-row>
              <el-card class="box3">
                <echartsbox
                  :id="'bargraph3'"
                  :data="option3"
                  style="height: 33vh; width: 100%"
                ></echartsbox>
              </el-card>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-card class="box4">
            <echartsbox
              :id="'bargraph4'"
              :data="option4"
              style="height: 33vh; width: 100%"
            ></echartsbox>
          </el-card>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import echartsbox from "../../components/echartsbox.vue";
export default {
  data() {
    return {
      input: "",
      value: "",
      isIndeterminate: "",
      checkAll: "",
      optionS: {
        option1: {
          data: [
            "红双喜红双喜红双喜红双喜",
            "恢复报",
            "黄户",
            "客户",
            "石客",
            "红双喜1",
            "恢复报1",
            "黄户1",
            "客户1",
            "石客1",
          ],
          value: [32, 15, 80, 20, 10, 31, 45, 62, 19, 26],
        },
        option2: [
          { value: 32, name: "恢复报" },
          { value: 15, name: "恢复报1" },
          { value: 80, name: "客户" },
          { value: 20, name: "金客" },
          { value: 31, name: "钻石户" },
          { value: 39, name: "恢复2报" },
          { value: 52, name: "恢1复报1" },
          { value: 8, name: "客户3" },
          { value: 25, name: "金2客" },
          { value: 71, name: "钻石1户" },
        ],
        option3: {
          region: [
            "阳泉",
            "晋",
            "长治",
            "肃州",
            "忻州",
            "忻州",
            "陆良",
            "吕梁",
            "太原",
            "运城",
            "天津",
          ],
          series: [
            {
              name: "一星家庭",
              data: [
                10000, 15000, 80000, 20000, 100000, 10000, 15000, 80000, 20000,
                100000, 34522,
              ],
              type: "bar",
              // barWidth: 30,
            },
          ],
        },
        option4: {
          region: [
            "阳泉",
            "晋",
            "长治",
            "肃州",
            "忻州",
            "忻州",
            "陆良",
            "吕梁",
            "太原",
            "运城",
            "天津",
          ],
          series: [
            {
              name: "红酸洗",
              data: [
                10000, 15000, 80000, 20000, 100000, 10000, 15000, 80000, 20000,
                100000, 34522,
              ],
              type: "bar",
              // barWidth: 30,
            },
            {
              name: "西来顺",
              data: [
                32000, 15000, 80000, 20000, 10000, 10000, 15000, 80000, 20000,
                100000, 45653,
              ],
              type: "bar",
              // barWidth: 30,
            },
            {
              name: "荣祥人生",
              data: [
                10000, 15000, 80000, 20000, 100000, 54465, 32000, 15000, 80000,
                20000, 10000,
              ],
              type: "bar",
              // barWidth: 30,
            },
            {
              name: "尊享人生",
              data: [
                32000, 15000, 10000, 15000, 80000, 20000, 100000, 54664, 80000,
                20000, 10000,
              ],
              type: "bar",
              // barWidth: 30,
            },
            {
              name: "包尔代",
              data: [
                32000, 10000, 15000, 80000, 20000, 100000, 67867, 150000, 80000,
                20000, 10000,
              ],
              type: "bar",
              // barWidth: 30,
            },
          ],
        },
      },
      option1: {
        // 表题
        title: {
          text: "全省各产品销售收入统计",
          left: "left",
        },
        // 提示框
        tooltip: {},
        // 整体颜色
        color: "#3aa0ff",
        // X轴
        xAxis: {
          type: "value",
        },
        // Y轴
        yAxis: {
          type: "category",
          data: [],
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "8%",
          containLabel: true,
        },
        // 数据
        series: [
          {
            name: "客户数量",
            data: [],
            type: "bar",
            // barWidth: 30,
          },
        ],
      },
      option2: {
        title: {
          text: "Top10大销量产品占比",
          left: "left",
        },
        tooltip: {
          trigger: "item",
        },
        // 提示信息
        legend: {
          orient: "horizontal",
          left: "center",
          bottom: 23,
        },
        series: [
          {
            type: "pie",
            radius: "50%",
            data: [],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} : {d}%",
                },
                labelLine: { show: true },
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          },
        ],
      },
      option3: {
        // 表题
        title: {
          text: "Top10销量增长率产品统计",
          left: "left",
        },
        // 提示框
        tooltip: {},
        // 整体颜色
        color: "#3aa0ff",
        // X轴
        xAxis: {
          type: "value",
        },
        // Y轴
        yAxis: {
          type: "category",
          data: [],
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "8%",
          containLabel: true,
        },
        // 数据
        series: [
          {
            name: "客户数量",
            data: [],
            type: "bar",
            // barWidth: 30,
          },
        ],
      },
      option4: {
        // 表题
        title: {
          text: "Top10销量产品各地区销售收入统计",
          left: "left",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        // 整体颜色
        // color: "#3aa0ff",
        legend: {
          orient: "horizontal",
          left: "center",
          bottom: 0,
        },
        // X轴
        xAxis: {
          type: "category",
          axisTick: { show: false },
          // data: [],
          data: [],
        },
        // Y轴
        yAxis: {
          type: "value",
        },
        grid: {
          left: "1%",
          right: "2%",
          bottom: "8%",
          containLabel: true,
        },
        // 数据
        series: [],
        series: [],
      },
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
    // 请求数据
    requestData() {
      this.option1.yAxis.data = this.optionS.option1.data;
      this.option1.series[0].data = this.optionS.option1.value;
      this.option2.series[0].data = this.optionS.option2;
      this.option3.yAxis.data = this.optionS.option1.data;
      this.option3.series[0].data = this.optionS.option1.value;
      this.option4.xAxis.data = this.optionS.option4.region;
      this.option4.series = this.optionS.option4.series;
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
  },
  mounted: function () {
    this.$axios.get("/dictionary").then((res) => {
      this.FData = res.data.customer;
    });
    this.requestData();
  },
  components: {
    echartsbox,
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
  margin-top: 15px;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 130px;
  bottom: 10px;
  overflow: auto;
}
.tubiao {
  margin: 25px auto;
  width: 95%;
}
.box1 {
  height: 70vh;
}
.box2 {
  height: 35vh;
  margin-bottom: 2vh !important;
}
.box3 {
  height: 33vh;
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