<template>
  <div></div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // echarts数据格式
      optionS: {
        option1: {
          data: ["一星家庭", "二星家庭", "三星家庭", "四星家庭", "五星家庭"],
          value: [320000, 150000, 80000, 20000, 10000],
        },
        option2: {
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
        option3: {
          region: ["一星家庭", "二星家庭", "三星家庭", "四星家庭", "五星家庭"],
          series: [
            {
              name: "普通客户",
              data: [10000, 15000, 80000, 20000, 100000],
              type: "bar",
              // barWidth: 30,
            },
          ],
        },
      },
    };
  },
};
</script>

<style>
</style>
