<template>
  <!-- 客户级别画像 -->
  <div class="box1">
    <el-card>
      <echartsbox
        :id="'bargraph'"
        :data="option2"
        style="height: 68vh; width: 100%"
      ></echartsbox>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="8">
          <div>今年截止本月客户总数</div>
          <div>{{ total }}</div>
        </el-col>
        <el-col :span="8">
          <div>投保人总数</div>
          <div>{{ apps }}</div>
        </el-col>
        <el-col :span="8">
          <div>被保人总数</div>
          <div>{{ inss }}</div>
        </el-col>
      </el-row>
    </el-card>
    <div>
      <el-card>
        <echartsbox
          :id="'bargraph1'"
          :data="option1"
          style="height: 34vh; width: 100%"
        ></echartsbox>
      </el-card>
      <el-card style="margin-top: 3vh">
        <echartsbox
          :id="'bargraph3'"
          :data="option3"
          style="height: 34vh; width: 100%"
        ></echartsbox>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: "",
      apps: "",
      inss: "",
      option1: {
        title: {
          text: "各等级客户数占比",
          left: "left",
        },
        tooltip: {
          trigger: "item",
        },
        // 提示信息
        legend: {
          orient: "horizontal",
          left: "center",
          bottom: 0,
        },
        series: [
          {
            type: "pie",
            radius: "50%",
            // data: [
            //   { value: 1048, name: "普通客户" },
            //   { value: 735, name: "K金客户" },
            //   { value: 580, name: "黄金客户" },
            //   { value: 484, name: "铂金客户" },
            //   { value: 300, name: "钻石客户" },
            // ],
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

      option2: {
        // 表题
        title: {
          text: "全省各等级客户数统计",
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
          // data: ["普通客户", "K金客户", "黄金客户", "铂金客户", "钻石客户"],
        },
        grid: {
          left: "1%",
          right: "2%",
          bottom: "8%",
          containLabel: true,
        },
        // 数据
        series: [
          {
            name: "客户数量",
            // data: [320000, 150000, 80000, 20000, 10000],
            data: [],
            type: "bar",
            // barWidth: 30,
          },
        ],
      },
      option3: {
        // 表题
        title: {
          text: "各地区等级客户数分布",
          left: "left",
        },
        // 提示框
        tooltip: {},
        // 整体颜色
        // color: "#3aa0ff",
        legend: {
          orient: "horizontal",
          left: "center",
          bottom: 0,
        },
        // X轴
        xAxis: {
          type: "value",
        },
        // Y轴
        yAxis: {
          type: "category",
          axisTick: { show: false },
          data: [],
          // data: [
          //   "阳泉",
          //   "晋",
          //   "长治",
          //   "肃州",
          //   "忻州",
          //   "忻州",
          //   "陆良",
          //   "吕梁",
          //   "太原",
          //   "运城",
          //   "天津",
          // ],
        },
        grid: {
          left: "1%",
          right: "2%",
          bottom: "8%",
          containLabel: true,
        },
        // 数据
        series: [],
        // series: [
        //   {
        //     name: "普通客户",
        //     data: [
        //       10000, 15000, 80000, 20000, 100000, 10000, 15000, 80000, 20000,
        //       100000, 34522,
        //     ],
        //     type: "bar",
        //     // barWidth: 30,
        //   },
        //   {
        //     name: "K金客户",
        //     data: [
        //       32000, 15000, 80000, 20000, 10000, 10000, 15000, 80000, 20000,
        //       100000, 45653,
        //     ],
        //     type: "bar",
        //     // barWidth: 30,
        //   },
        //   {
        //     name: "黄金客户",
        //     data: [
        //       10000, 15000, 80000, 20000, 100000, 54465, 32000, 15000, 80000,
        //       20000, 10000,
        //     ],
        //     type: "bar",
        //     // barWidth: 30,
        //   },
        //   {
        //     name: "铂金客户",
        //     data: [
        //       32000, 15000, 10000, 15000, 80000, 20000, 100000, 54664, 80000,
        //       20000, 10000,
        //     ],
        //     type: "bar",
        //     // barWidth: 30,
        //   },
        //   {
        //     name: "钻石客户",
        //     data: [
        //       32000, 10000, 15000, 80000, 20000, 100000, 67867, 150000, 80000,
        //       20000, 10000,
        //     ],
        //     type: "bar",
        //     // barWidth: 30,
        //   },
        // ],
      },
    };
  },
  components: {
    echartsbox,
  },
  mounted: function () {
    this.$axios.get("/statis").then((res) => {
      let data = res.data;
      console.log(res.data);
      this.total = res.data.total;
      this.apps = res.data.apps;
      this.inss = res.data.inss;
      this.option2.yAxis.data = data.dengji.data;
      this.option2.series[0].data = data.dengji.values;
      this.option3.yAxis.data = data.diqudengji.region;
      this.option3.series = data.diqudengji.series.map((x) => x[0]);
      let dengji = data.dengji;
      this.option1.series[0].data = data.dengji.data.map((val, index) => ({
        value: dengji.values[index],
        name: val,
      }));
      console.log();
    });
  },
};
import echartsbox from "../echartsbox.vue";
</script>

<style scoped>
.box1 {
  display: flex;
  justify-content: space-around;
}
.box1 > .el-card {
  width: 42%;
  /* height: 82vh; */
}
.box1 > div {
  width: 35%;
}
.el-divider {
  margin: 0px auto;
}
.el-col {
  text-align: center;
  line-height: 35px;
}
.el-col > div:nth-of-type(2) {
  font-size: 20px;
  font-weight: 600;
}
</style>