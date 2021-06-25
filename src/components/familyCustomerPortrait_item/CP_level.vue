<template>
  <!-- 客户级别画像 -->
  <div class="box1">
    <el-card>
      <el-row>
        <el-col>
          <div class="title">全省各等级家庭数统计</div>
        </el-col>
        <el-col :span="12">
          <div>今年截止本月家庭客户总数</div>
          <div>{{ totalName }}</div>
        </el-col>
      </el-row>
      <echartsbox
        :id="'bargraph'"
        :data="option1"
        style="height: 60vh; width: 100%"
      ></echartsbox>
    </el-card>
    <div>
      <el-card>
        <echartsbox
          :id="'bargraph1'"
          :data="option2"
          style="height: 30vh; width: 100%"
        ></echartsbox>
      </el-card>
      <el-card style="margin-top: 3vh">
        <echartsbox
          :id="'bargraph3'"
          :data="option3"
          style="height: 36vh; width: 100%"
        ></echartsbox>
      </el-card>
    </div>
    <el-card>
      <echartsbox
        :id="'bargraph4'"
        :data="option4"
        style="height: 68vh; width: 100%"
      ></echartsbox>
    </el-card>
  </div>
</template>

<script>
import echartsbox from "../echartsbox.vue";
export default {
  data() {
    return {
      totalName: "",
      option1: {
        // 表题
        title: {
          show: false,
        },
        // 提示框
        tooltip: {},
        // 提示信息/分类标题
        legend: {
          show: false,
        },
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
        // 调整图表盒子离周边位置
        grid: {
          left: "1%",
          right: "5%",
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
          text: "各等级家庭客户数占比",
          left: "left",
        },
        tooltip: {
          trigger: "item",
        },
        // 提示信息
        legend: {
          orient: "horizontal",
          left: "center",
          itemWidth: 8,
          itemHeight: 8,
          bottom: 0,
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
          text: "各地区等级家庭客户分布",
          left: "left",
        },
        // 提示框
        tooltip: {},
        // 整体颜色
        // color: "#3aa0ff",
        legend: {
          orient: "horizontal",
          left: "center",
          itemWidth: 8,
          itemHeight: 8,
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
        },
        grid: {
          left: "1%",
          right: "5%",
          bottom: "8%",
          containLabel: true,
        },
        // 数据
        series: [],
      },
      option4: {
        // 表题
        title: {
          text: "各等级家庭客户级别分布",
          left: "left",
        },
        // 提示框
        tooltip: {},
        // 整体颜色
        // color: "#3aa0ff",
        legend: {
          orient: "horizontal",
          left: "center",
          itemWidth: 8,
          itemHeight: 8,
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
        },
        grid: {
          left: "1%",
          right: "5%",
          bottom: "8%",
          containLabel: true,
        },
        // 数据
        series: [],
      },
    };
  },
  mounted: function () {
    this.$axios.get("/family_statis").then((res) => {
      // console.log(res);
      let data = res.data;
      console.log(data);
      this.totalName = data.total;
      this.option1.yAxis.data = data.option1.data;
      this.option1.series[0].data = data.option1.value;
      this.option2.series[0].data = data.option1.value.map((item, i) => ({
        value: item,
        name: data.option1.data[i],
      }));
      this.option3.yAxis.data = data.option2.region;
      this.option3.series = data.option2.series;
      this.option4.yAxis.data = data.option3.region;
      this.option4.series = data.option3.series;
      // series
    });
  },
  components: {
    echartsbox,
  },
};
</script>

<style scoped>
.box1 {
  display: flex;
  justify-content: space-around;
}
.box1 > .el-card:nth-of-type(1) {
  width: 35%;
  /* height: 82vh; */
}
.box1 > .el-card:nth-of-type(2) {
  width: 30%;
  /* height: 82vh; */
}
.box1 > div {
  width: 30%;
}
.el-divider {
  margin: 0px auto;
}
.el-col:nth-of-type(2) {
  text-align: left;
  padding-left: 20px;
  line-height: 35px;
}
.el-col > div:nth-of-type(2) {
  font-size: 20px;
  font-weight: 600;
}
.title {
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
}
</style>