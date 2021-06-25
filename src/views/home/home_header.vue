<template>
  <el-container>
    <el-aside>
      <div class="title_name">
        <div class="img">
          <img style="width: 100%" src="../../assets/img/u488.svg" alt="" />
        </div>
        <div class="span">用户分析管理系统</div>
      </div>
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <div class="headertitle">
          <span v-if="ifshow" class="biao"></span>
          <div v-if="ifshow">{{ titleName }}</div>
        </div>
        <div>
          <el-button @click="Refresh"
            ><i class="el-icon-refresh"></i>刷新</el-button
          >
          <el-button @click="back"
            ><i class="el-icon-arrow-left"></i>返回</el-button
          >
        </div>
      </el-header>
      <el-main style="position: relative">
        <router-view v-if="showView"></router-view>
        <!-- <content1></content1> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sidebar from "./home_sidebar.vue";
// import content1 from "../../components/content1";
export default {
  data() {
    return {
      showView: true,
    };
  },
  computed: {
    ifshow() {
      return this.$store.state.ifshow;
    },
    titleName() {
      return this.$store.state.titleName;
    },
  },
  components: {
    sidebar,
  },
  mounted: function () {
    let a = [
      { appntno: "jiao", saa: "214" },
      { appntno: "jiao", saa: "214" },
      { appntno: "jiao", saa: "214" },
      { appntno: "jiao1", saa: "214" },
      { appntno: "jiao1", saa: "214" },
      { appntno: "jiao1", saa: "214" },
      { appntno: "jiao", saa: "214" },
      { appntno: "jiao2", saa: "214" },
      { appntno: "jiao2", saa: "214" },
      { appntno: "jiao2", saa: "214" },
    ];
    let b = a.reduce(
      (r, x) => ((r[x.appntno] || (r[x.appntno] = [])).push(x), r),
      {}
    );
    let c = Object.keys(b).map((x) => b[x]);
    (function findLongest(entries) {
      return entries.reduce(function (prev, cur) {
        console.log(prev);
        return cur.length > prev.length ? cur : prev;
      }, "");
    })(c);
    console.log("aaaaaaaaaaaaaaaaaaa");
    console.log(a);
    console.log("bbbbbbbbbbbbbbbbbbbbbbbb");
    console.log(b);
    console.log("ccccccccccccccccccccccccc");
    console.log(c);
  },
  methods: {
    // 返回事件
    back() {
      this.$router.go(-1);
    },
    // 刷新事件
    Refresh() {
      this.showView = false; // 通过v-if移除router-view节点
      this.$nextTick(() => {
        this.showView = true; // DOM更新后再通过v-if添加router-view节点
      });
    },
  },
};
</script>

<style scoped>
/* 侧边栏 */
.el-aside {
  width: 200px !important;
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  /* background-color: red; */
  border-right: 1px solid #ccc;
}
.title_name {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
}
.span {
  height: 36px;
  line-height: 36px;
  margin-left: 10px;
  font-weight: 650;
  font-style: normal;
  font-size: 16px;
  color: rgba(0, 121, 254, 0.8);
  text-align: center;
}

.img {
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
  width: 36px;
  height: 36px;
}
.el-menu {
  border-right: none;
}

/* 头部 */
.el-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  height: 70px !important;
  padding-bottom: 10px;
}
.headertitle {
  height: 25px;
  line-height: 25px;
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", 微软雅黑, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  color: rgb(153, 153, 153);
  display: flex;
  justify-content: flex-start;
}
.biao {
  width: 5px;
  height: 25px;
  background-color: #0079fe;
  margin-right: 10px;
}

/* 内容 */
.el-main {
  width: 100%;
  background-color: #f0f2f5;
}
</style>