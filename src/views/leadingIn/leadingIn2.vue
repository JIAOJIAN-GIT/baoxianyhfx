<template>
  <el-card class="cardbox">
    <div slot="header">批量导入</div>
    <el-steps
      align-center
      :active="2"
      finish-status="success"
      process-status="process"
    >
      <el-step title="上传文件"></el-step>
      <el-step title="执行导入"></el-step>
      <el-step title="导入完成"></el-step>
    </el-steps>
  </el-card>
</template>

<script>
export default {};
</script>

<style>
</style>