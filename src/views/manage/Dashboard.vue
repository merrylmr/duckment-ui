<template>
  <Header></Header>
  <div class="main">
    <div class="left-sidebar">
      <div class="zz-menu">
        <div class="zz-menu-item">
          <i></i>
          控制台
        </div>
        <div class="zz-menu-item-group">
          <div class="zz-menu-item-group__title">
            站点
          </div>
          <div>
            <div class="zz-menu-item">内容</div>
            <div class="zz-menu-item">页面</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <h1>dashboard</h1>
    </div>
  </div>
</template>

<script>
  import {defineComponent} from 'vue'
  import Header from '../Header.vue'

  export default defineComponent({
    name: 'dashboard',
    components: {Header}
  })
</script>

<style scoped lang="scss">
  .main {
    display: flex;
  }

  .left-sidebar {
    width: 200px;
    height: calc(100vh - 60px);
    border-right: 1px solid #eee;
  }

  .zz-menu-item {
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #303133;
    padding: 0 20px;
    list-style: none;
    cursor: pointer;
    position: relative;
    transition: border-color .3s, background-color .3s, color .3s;
    box-sizing: border-box;
    white-space: nowrap;
  }

  .zz-menu-item-group__title {
    padding: 7px 0 7px 20px;
    line-height: normal;
    font-size: 12px;
    color: #909399;
  }
</style>