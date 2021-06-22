<template>
  <!-- 客户画像 -->
  <el-card class="cardbox">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="级别" name="level">
        <cplevel></cplevel>
      </el-tab-pane>
      <el-tab-pane label="年龄" name="age">
        <cpage></cpage>
      </el-tab-pane>
      <el-tab-pane label="性别" name="sex">
        <cpsex></cpsex>
      </el-tab-pane>
      <el-tab-pane label="保单" name="Policy"
        ><cpPolicy></cpPolicy
      ></el-tab-pane>
      <el-tab-pane label="主险保费" name="premium"
        ><cppremium></cppremium
      ></el-tab-pane>
      <el-tab-pane label="主险保费总额" name="total"
        ><cptotal></cptotal
      ></el-tab-pane>
      <el-tab-pane label="偏好" name="preference"
        ><cppreference></cppreference
      ></el-tab-pane>
      <el-tab-pane label="服务状态" name="service"
        ><cpservice></cpservice
      ></el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import cplevel from "../../components/CustomerPortrait_item/CP_level.vue";
import cpage from "../../components/CustomerPortrait_item/CP_age.vue";
import cpsex from "../../components/CustomerPortrait_item/CP_sex.vue";
import cpPolicy from "../../components/CustomerPortrait_item/CP_Policy.vue";
import cppremium from "../../components/CustomerPortrait_item/CP_premium.vue";
import cptotal from "../../components/CustomerPortrait_item/CP_total.vue";
import cppreference from "../../components/CustomerPortrait_item/CP_preference.vue";
import cpservice from "../../components/CustomerPortrait_item/CP_service.vue";
export default {
  data() {
    return {
      activeName: "level",
    };
  },
  components: {
    cplevel, //客户级别画像
    cpage, //年龄
    cpsex, //性别
    cpPolicy, //保单
    cppremium, //保费
    cptotal, //保费总额
    cppreference, //偏好
    cpservice, //服务状态
  },
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
      this.$store.commit("saveTitleName", `客户${tab.label}画像`);
    },
  },
};
</script>

<style scoped>
</style>