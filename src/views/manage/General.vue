<template>
  <div>
    <h3>设置</h3>
    <div
      class="section m-t-md">
      <div class="section-title">
        信息
      </div>
      <div class="section-body">
        <el-form class="general-form">
          <el-form-item label="名称">
            <el-input placeholder="请输入名称"></el-input>
          </el-form-item>
          <el-form-item label="LOGO">

          </el-form-item>
          <el-form-item label="页脚版权">
            <el-input placeholder="请输入页脚版权"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary">提交
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'general'
  }
</script>

<style scoped lang="scss">
  .general-form {
    ::v-deep(.el-input__inner) {
      border: none;
      border-bottom: 1px solid #DCDFE6;
      border-radius: 0;
    }
  }
</style>