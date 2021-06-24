<template>
  <!-- 客户画像 -->
  <div class="cardbox">
    <el-card class="cardbox">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="级别" name="level"> </el-tab-pane>
        <el-tab-pane label="类别" name="category"> </el-tab-pane>
        <el-tab-pane label="人口" name="population"> </el-tab-pane>
        <el-tab-pane label="保单" name="Policy"></el-tab-pane>
        <el-tab-pane label="主险保费" name="premium"></el-tab-pane>
        <el-tab-pane label="主险保费总额" name="total"></el-tab-pane>
        <el-tab-pane label="偏好" name="preference"></el-tab-pane>
        <el-tab-pane label="服务状态" name="service"></el-tab-pane>
      </el-tabs>
      <router-view class=""></router-view>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "level",
    };
  },
  components: {
    // cplevel, //客户级别画像
    // cpage, //年龄
    // cpsex, //性别
    // cpPolicy, //保单
    // cppremium, //保费
    // cptotal, //保费总额
    // cppreference, //偏好
    // cpservice, //服务状态
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.name);
      if (tab.name == "level") {
        this.$router.push(`/home/familyCustomerPortrait`);
      } else {
        this.$router.push(`/home/familyCustomerPortrait/${tab.name}`);
      }
      this.$store.commit("saveTitleName", `家庭${tab.label}画像`);
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
}
</style>