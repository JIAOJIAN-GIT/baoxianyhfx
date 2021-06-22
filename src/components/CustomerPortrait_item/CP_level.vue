<template>
  <!-- 客户级别画像 -->
  <div class="box1">
    <el-card>
      <echartsbox
        :id="'bargraph'"
        :data="option2"
        style="height: 70vh"
      ></echartsbox>
    </el-card>
    <div>
      <el-card>
        <echartsbox
          :id="'bargraph1'"
          :data="option1"
          style="height: 33vh"
        ></echartsbox>
      </el-card>
      <el-card style="margin-top: 3vh"></el-card>
    </div>
  </div>
</template>

<script>
import echartsbox from "../echartsbox.vue";
export default {
  name: "weixinanaly",
  data() {
    return {
      option1: {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        color: ["red", "#fff", "#000", "blue"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      option2: {
        title: {
          text: "全年设备产量对比图",
          left: "center",
        },
        xAxis: {
          type: "category",
          data: [
            "检品机1",
            "检品机2",
            "检品机3",
            "检品机4",
            "检品机5",
            "检品机6",
            "检品机7",
          ],
        },
        yAxis: {
          type: "value",
        },
        legend: {
          left: "center",
          data: ["本年", "上年"],
          bottom: 0,
        },
        grid: {
          left: "1%",
          right: "2%",
          bottom: "8%",
          containLabel: true,
        },
        series: [
          {
            name: "本年",
            data: [1000, 200, 150, 80, 70, 110, 130],
            type: "bar",
            barWidth: 30,
          },
          {
            name: "上年",
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            barWidth: 30,
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
  justify-content: flex-start;
}
.box1 > .el-card {
  width: 40%;
  height: 70vh;
  margin-right: 5%;
}
.box1 > div {
  width: 30%;
  height: 70vh;
}
.box1 > div .el-card {
  height: 33vh;
}
</style>