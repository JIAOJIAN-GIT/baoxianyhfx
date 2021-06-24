<template>
  <!-- 客户保单画像 -->
  <div class="box1">
    <el-card>
      <echartsbox
        :id="'bargraph'"
        :data="option1"
        style="height: 35vh; width: 100%"
      ></echartsbox>
      <echartsbox
        :id="'bargraph5'"
        :data="option5"
        style="height: 35vh; width: 100%; margin: 20px 0px 0px 0px"
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
        title: {
          text: "各年龄段平均保单数统计",
          left: "left",
        },

        // 提示框
        tooltip: {},
        // 整体颜色
        color: "#3aa0ff",
        // X轴
        xAxis: {
          type: "category",
          data: ["一星家庭", "二星家庭", "三星家庭", "四星家庭", "五星家庭"],
        },
        // Y轴
        yAxis: {
          type: "value",
        },
        grid: {
          left: "1%",
          right: "10%",
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
      option5: {
        // 表题
        title: {
          text: "各等级客户平均保单数统计",
          left: "left",
        },

        // 提示框
        tooltip: {},
        // 整体颜色
        color: "#4dd386",
        // X轴
        xAxis: {
          type: "category",
          data: ["一星家庭", "二星家庭", "三星家庭", "四星家庭", "五星家庭"],
        },
        // Y轴
        yAxis: {
          type: "value",
        },
        grid: {
          left: "1%",
          right: "10%",
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
        // 表题
        title: {
          text: "各地区等级客户平均保单数",
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
          right: "2%",
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

      option3: {
        // 表题
        title: {
          text: "各地区等级客户平均保单数",
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
          right: "2%",
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
          text: "各年龄段等级客户平均保单数",
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
          right: "2%",
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