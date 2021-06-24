<template>
  <!-- 客户级别画像 -->
  <div class="box1">
    <el-card>
      <echartsbox
        :id="'bargraph1'"
        :data="option1"
        style="height: 35vh; width: 100%"
      ></echartsbox>
      <echartsbox
        :id="'bargraph2'"
        :data="option2"
        style="height: 35vh; width: 100%; margin: 20px 0px 0px 0px"
      ></echartsbox>
    </el-card>
    <div>
      <el-card>
        <echartsbox
          :id="'bargraph3'"
          :data="option3"
          style="height: 30vh; width: 100%"
        ></echartsbox>
      </el-card>
      <el-card style="margin-top: 3vh">
        <echartsbox
          :id="'bargraph4'"
          :data="option4"
          style="height: 36vh; width: 100%"
        ></echartsbox>
      </el-card>
    </div>
    <div class=".el-card">
      <el-card>
        <echartsbox
          :id="'bargraph5'"
          :data="option5"
          style="height: 30vh; width: 100%"
        ></echartsbox>
      </el-card>
      <el-card style="margin-top: 3vh">
        <echartsbox
          :id="'bargraph6'"
          :data="option6"
          style="height: 36vh; width: 100%"
        ></echartsbox>
      </el-card>
    </div>
  </div>
</template>

<script>
import echartsbox from "../echartsbox.vue";
export default {
  data() {
    return {
      option1: {
        // 表题
        title: [
          {
            text: "各年龄段险种类型统计",
            left: "left",
          },
          {
            text: "",
            subtext: "单位 / 万",
            subtextStyle: {
              fontWeight: "bold",
            },
            left: "right",
          },
        ],
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
          data: ["健康险", "意外险", "年金险", "人寿险"],
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
            name: "60前",
            data: [10000, 15000, 80000, 20000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "60后",
            data: [80000, 20000, 10000, 10000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "70后",
            data: [100000, 54465, 32000, 15000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "80后",
            data: [54664, 80000, 20000, 10000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "90后",
            data: [20000, 100000, 20000, 10000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "00后",
            data: [20000, 100000, 20000, 10000],
            type: "bar",
            // barWidth: 30,
          },
        ],
      },
      option2: {
        // 表题
        title: [
          {
            text: "各客户等级险种类型统计",
            left: "left",
          },
          {
            text: "",
            subtext: "单位 / 万",
            subtextStyle: {
              fontWeight: "bold",
            },
            left: "right",
          },
        ],
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
          data: ["健康险", "意外险", "年金险", "人寿险"],
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
            name: "60前",
            data: [10000, 15000, 80000, 20000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "60后",
            data: [80000, 20000, 10000, 10000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "70后",
            data: [100000, 54465, 32000, 15000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "80后",
            data: [54664, 80000, 20000, 10000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "90后",
            data: [20000, 100000, 20000, 10000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "00后",
            data: [20000, 100000, 20000, 10000],
            type: "bar",
            // barWidth: 30,
          },
        ],
      },
      option3: {
        title: {
          text: "健康险年龄段占比",
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
            data: [
              { value: 1048, name: "一星家庭" },
              { value: 735, name: "二星家庭" },
              { value: 580, name: "三星家庭" },
              { value: 484, name: "四星家庭" },
              { value: 300, name: "五星家庭" },
            ],
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
      option4: {
        title: {
          text: "年金险年龄段占比",
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
            data: [
              { value: 1048, name: "一星家庭" },
              { value: 735, name: "二星家庭" },
              { value: 580, name: "三星家庭" },
              { value: 484, name: "四星家庭" },
              { value: 300, name: "五星家庭" },
            ],
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
      option5: {
        title: {
          text: "意外险年龄段占比",
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
            data: [
              { value: 1048, name: "一星家庭" },
              { value: 735, name: "二星家庭" },
              { value: 580, name: "三星家庭" },
              { value: 484, name: "四星家庭" },
              { value: 300, name: "五星家庭" },
            ],
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
      option6: {
        title: {
          text: "人寿险年龄段占比",
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
            data: [
              { value: 1048, name: "一星家庭" },
              { value: 735, name: "二星家庭" },
              { value: 580, name: "三星家庭" },
              { value: 484, name: "四星家庭" },
              { value: 300, name: "五星家庭" },
            ],
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
    };
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
</style>