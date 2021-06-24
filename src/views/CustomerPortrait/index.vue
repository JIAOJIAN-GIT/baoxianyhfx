<template>
  <!-- 客户画像 -->
  <el-card class="cardbox">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="级别" name="level"> </el-tab-pane>
      <el-tab-pane label="年龄" name="age"> </el-tab-pane>
      <el-tab-pane label="性别" name="sex"> </el-tab-pane>
      <el-tab-pane label="保单" name="Policy"></el-tab-pane>
      <el-tab-pane label="主险保费" name="premium"></el-tab-pane>
      <el-tab-pane label="主险保费总额" name="total"></el-tab-pane>
      <el-tab-pane label="偏好" name="preference"></el-tab-pane>
      <el-tab-pane label="服务状态" name="service"></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeName: "level",
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      // let data = {
      //   level: "客户级别画像", //客户级别画像
      //   age: "客户年龄画像", //年龄
      //   sex: "客户性别画像", //性别
      //   Policy: "客户保单画像", //保单
      //   premium: "客户主险保费画像", //保费
      //   total: "客户主险保费总额画像", //保费总额
      //   preference: "客户偏好画像", //偏好
      //   service: "客户服务状态画像", //服务状态
      // };
      console.log(this.activeName);
      if (tab.name == "level") {
        this.$router.push(`/`);
      } else {
        this.$router.push(`/home/${tab.name}`);
      }
      this.$store.commit("saveTitleName", `客户${tab.label}画像`);
    },
  },
};
</script>

<style scoped>
</style>