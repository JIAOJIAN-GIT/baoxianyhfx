<template>
  <!-- 客户级别画像 -->
  <div class="box1">
    <el-card>
      <echartsbox
        :id="'bargraph'"
        :data="option1"
        style="height: 70vh; width: 100%"
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
        style="height: 70vh; width: 100%"
      ></echartsbox>
    </el-card>
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
            text: "全省家庭客户类别统计",
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
        color: "#3aa0ff",
        // X轴
        xAxis: {
          data: ["一星家庭", "二星家庭", "三星家庭", "四星家庭", "五星家庭"],
          type: "category",
        },
        // Y轴
        yAxis: {
          type: "value",
        },
        grid: {
          left: "1%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        // 数据
        series: [
          {
            name: "客户数量",
            data: [320000, 150000, 80000, 20000, 10000],
            type: "bar",
            // barWidth: 30,
          },
        ],
      },
      option2: {
        title: {
          text: "各家庭客户类别占比",
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

      option3: {
        // 表题
        title: {
          text: "各地区家庭客户类别分布",
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
          data: [
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
        },
        grid: {
          left: "1%",
          bottom: "8%",
          containLabel: true,
        },
        // 数据
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
          {
            name: "二星家庭",
            data: [
              32000, 15000, 80000, 20000, 10000, 10000, 15000, 80000, 20000,
              100000, 45653,
            ],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "三星家庭",
            data: [
              10000, 15000, 80000, 20000, 100000, 54465, 32000, 15000, 80000,
              20000, 10000,
            ],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "四星家庭",
            data: [
              32000, 15000, 10000, 15000, 80000, 20000, 100000, 54664, 80000,
              20000, 10000,
            ],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "五星家庭",
            data: [
              32000, 15000, 10000, 15000, 80000, 20000, 100000, 54664, 80000,
              20000, 10000,
            ],
            type: "bar",
            // barWidth: 30,
          },
        ],
      },
      option4: {
        // 表题
        title: {
          text: "各类别家庭客户客户等级分布",
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
          data: ["一星家庭", "二星家庭", "三星家庭", "四星家庭", "五星家庭"],
        },
        grid: {
          left: "1%",
          right: "5%",
          bottom: "8%",
          containLabel: true,
        },
        // 数据
        series: [
          {
            name: "普通客户",
            data: [10000, 15000, 80000, 20000, 100000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "普通客户",
            data: [10000, 15000, 80000, 20000, 100000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "普通客户",
            data: [10000, 15000, 80000, 20000, 100000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "普通客户",
            data: [10000, 15000, 80000, 20000, 100000],
            type: "bar",
            // barWidth: 30,
          },
          {
            name: "普通客户",
            data: [10000, 15000, 80000, 20000, 100000],
            type: "bar",
            // barWidth: 30,
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