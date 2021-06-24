<template>
  <!-- 客户级别画像 -->
  <div class="box1">
    <el-card>
      <echartsbox
        :id="'bargraph1'"
        :data="option1"
        style="height: 70vh; width: 100%"
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
            text: "全省客户服务状态统计",
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
          data: ["一星家庭", "二星家庭", "三星家庭", "四星家庭", "五星家庭"],
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
            name: "在职",
            data: [10000, 15000, 80000, 20000, 32424],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "非在职",
            data: [80000, 20000, 10000, 10000, 45656],
            type: "bar",
            // barWidth: 30,
          },
        ],
      },
      option3: {
        title: {
          text: "钻石客户服务状态占比",
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
          text: "黄金客户服务状态占比",
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
          text: "铂金客户服务状态占比",
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
          text: "K金客户服务状态占比",
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