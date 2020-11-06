<template>
  <header class="app-header">
    <div class="app-header__wrapper">
      <router-link
        :to="{name:'home'}"
        class="logo">
        <img src="/img/logo.png" alt="duckment" height="56">
      </router-link>
      <div class="user">
        <el-dropdown>
          <span class="el-dropdown-link">
            用户<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .app-header {
    width: 100%;
    height: 60px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .08);
    /*border-bottom: 1px solid rgba(48, 48, 48, 0.08);*/

    .logo {
      width: 100px;
    }

    &.xl {
      .app-header__wrapper {
        max-width: 1800px;
      }
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

<style lang="scss">
  .vditor {
    border: none;
  }
</style>