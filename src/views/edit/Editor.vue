<template>
  <div class="edit-header"></div>
  <div class="edit-body">
    <div class="edit-nav">
      <div class="panel">
        <div class="panel-header">
          <div class="nav-title">
            <h3>目录</h3>
            <el-button round size="mini"
                       @click="goBack">
              <i class="el-icon-arrow-left"></i>
              返回
            </el-button>
          </div>
        </div>
        <div class="panel-body">

        </div>
      </div>
      <h1>nav</h1>
    </div>
    <div class="edit-main">
      <div id="editor"></div>
    </div>
    <div class="right-sidebar">
      <div class="right-sidebar__header">
        <ul>
          <li class="func-item">大纲</li>
          <li class="func-item">属性</li>
          <li class="func-item">数据</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
    import {defineComponent, onMounted} from 'vue'
    import {useRouter} from 'vue-router'
    import Vditor from 'vditor'

    export default defineComponent({
        setup() {
            const router = useRouter()
            const goBack = () => {
                router.go(-1)
            }
            const editorInit = () => {
                new Vditor('editor', {})
            }
            onMounted(() => {
                editorInit()
            })
            return {
                goBack,
                editorInit
            }


        },

    })
</script>
<style scoped lang="scss">
  .edit-header {
    height: 60px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .08);
  }

  .edit-body {
    height: calc(100vh - 60px);
    display: flex;
  }

  .edit-nav {
    width: 378px;
    height: 100%;
    border-right: 1px solid $border-color;
    background-color: #fafafa;
  }

  .nav-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
  }

  .edit-main {
    flex: auto;
  }

  .right-sidebar {
    width: 300px;
  }

  .right-sidebar__header {
    ul {
      display: flex;
      height: 36px;
      align-items: center;
      background-color: rgb(246, 248, 250);
      border-bottom: 1px solid #d1d5da;
      font-size: 12px;
    }

    .func-item {
      padding: 0 10px;
      cursor: pointer;
    }
  }

  .vditor {
    height: calc(100vh - 60px)
  }

  .vditor-toolbar {
    height: 36px;
    background-color: rgb(246, 248, 250);
  }
</style>