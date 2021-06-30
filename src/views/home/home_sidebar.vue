<template>
  <!-- default-openeds="['1-/home']" -->
  <el-menu
    unique-opened
    default-active="1"
    :default-openeds="opends"
    active-text-color="rgba(0, 121, 254, 1)"
    router
    class="font_title"
    @select="handleSelect"
  >
    <!-- <el-menu-item>数据概览</el-menu-item> -->
    <el-submenu index="0">
      <!-- 数据概览 -->
      <template slot="title">
        <img src="../../assets/img/u461.svg" alt="" />
        数据概览
      </template>
      <el-menu-item> 客户概览 </el-menu-item>
      <el-menu-item> 产品概览 </el-menu-item>
    </el-submenu>
    <!--客户分析  -->
    <el-submenu index="1">
      <template slot="title">
        <img src="../../assets/img/u470.svg" alt="" />
        客户分析
      </template>
      <el-menu-item
        :class="activeClass == '/home' ? 'hover' : ''"
        index="/home"
      >
        客户画像
      </el-menu-item>
      <el-menu-item
        :class="activeClass == '/home/CustomerInquiryI' ? 'hover' : ''"
        index="/home/CustomerInquiryI"
      >
        客户查询
      </el-menu-item>
      <el-menu-item
        :class="activeClass == '/home/SecurityAnalysis' ? 'hover' : ''"
        index="/home/SecurityAnalysis"
      >
        保障分析
      </el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <!-- 家庭分析 -->
      <template slot="title">
        <img src="../../assets/img/u480.svg" alt="" />
        家庭分析
      </template>
      <el-menu-item
        :class="activeClass == '/home/familyCustomerPortrait' ? 'hover' : ''"
        index="/home/familyCustomerPortrait"
      >
        家庭画像
      </el-menu-item>
      <el-menu-item
        :class="activeClass == '/home/familyCustomerInquiryI' ? 'hover' : ''"
        index="/home/familyCustomerInquiryI"
      >
        家庭查询
      </el-menu-item>
      <el-menu-item
        :class="activeClass == '/home/familySecurityAnalysis' ? 'hover' : ''"
        index="/home/familySecurityAnalysis"
      >
        保障分析
      </el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <!-- 产品中心 -->
      <template slot="title">
        <img src="../../assets/img/u495.svg" alt="" />
        产品中心
      </template>
      <el-menu-item
        :class="activeClass == '/home/ProductInformation' ? 'hover' : ''"
        index="/home/ProductInformation"
      >
        产品信息
      </el-menu-item>
      <el-menu-item
        :class="activeClass == '/home/addProduct' ? 'hover' : ''"
        index="/home/addProduct"
      >
        添加产品
      </el-menu-item>
      <el-menu-item
        :class="activeClass == '/home/Statistics' ? 'hover' : ''"
        index="/home/Statistics"
      >
        产品统计
      </el-menu-item>
    </el-submenu>
    <el-menu-item
      :class="activeClass == '/home/recommend' ? 'hover' : ''"
      index="/home/recommend"
    >
      <img src="../../assets/img/u487.svg" alt="" />
      保险方案推荐</el-menu-item
    >
    <el-menu-item
      :class="activeClass == '/home/accountNumber' ? 'hover' : ''"
      index="/home/accountNumber"
    >
      <img src="../../assets/img/u501.svg" alt="" />
      账号设置</el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      // activeClass: "/home",
      // opends: ["1"],
    };
  },
  computed: {
    activeClass: function () {
      return this.$store.state.pathName;
    },
    opends: function () {
      return this.$store.state.opends;
    },
  },
  methods: {
    handleSelect(index, path) {
      let data = {};
      data.pathName = index;
      data.index = path[0];
      this.$store.commit("savePath", data);
      localStorage.setItem("index", path[0]);
      // console.log(index, path);
    },
  },
  mounted: function () {
    // console.log(this.$route.path);
    this.$route.path == "/home"
      ? this.handleSelect(this.$route.path, "1")
      : this.handleSelect(this.$route.path, localStorage.getItem("index"));
  },
};
</script>

<style scoped>
.el-menu {
  border: none !important;
}
.hover {
  box-sizing: border-box;
  background-color: rgba(0, 121, 254, 0.1);
  border-right: 5px solid rgba(0, 121, 254, 1);
  border-color: rgba(0, 121, 254, 1);
}
</style>