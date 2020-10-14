<template>
  <Header></Header>
  <div class="main">
    <div class="left-sidebar">
      left-sidebar
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
  }
</style>