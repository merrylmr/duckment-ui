<template>
  <header class="app-header">
    <div class="app-header__wrapper">
      <router-link
        :to="{name:'home'}"
        class="logo">
        <img src="/img/logo.png" alt="duckment" height="56">
      </router-link>
      <div class="user">
        用户
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .app-header {
    width: 100%;
    height: 60px;
    background-color: rgb(254, 250, 230);
    /*border-bottom: 1px solid rgba(48, 48, 48, 0.08);*/

    .logo {
      width: 100px;
    }
  }

  .app-header__wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>