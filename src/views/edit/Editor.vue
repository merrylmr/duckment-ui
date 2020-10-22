<template>
  <div class="edit-header">
    <div class="edit-header__wrapper">
      <div class="edit-header--left">
        <img src="/img/logo.png" alt="duckment" height="40">
        <div class="doc-name">文档名</div>
      </div>

    </div>

  </div>
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
          <el-tree
            :data="data"
            :default-expand-all="true"
            :props="defaultProps">
          </el-tree>
        </div>
      </div>
    </div>
    <div class="edit-main">
      <div id="editor"></div>
    </div>
    <div class="right-sidebar">
      <div class="right-sidebar__header">
        <ul>
          <li class="func-item"
              v-for="(item,index) in funItems"
              :key="index"
              :class="{'is-active':activeFnc===item.value}"
              @click="switchFuc(item)">
            {{item.label}}
          </li>
        </ul>
      </div>
      <div class="right-sidebar__wrapper">
        <div class="right-sidebar__body">
          <div id="outline">

          </div>
          <el-form class="settings"
                   v-show="activeFnc==='attr'">
            <el-form-item label="标题">
              <el-input placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="简介">
              <el-input placeholder="请输入简介"></el-input>
            </el-form-item>
            <el-form-item label="URL">
              <el-input placeholder="请输入URL"></el-input>
            </el-form-item>
            <el-form-item label="布局">
              <el-input placeholder="请选择布局"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
    import {defineComponent, onMounted, ref} from 'vue'
    import {useRouter} from 'vue-router'
    import Vditor from 'vditor'
    // import VditorPreview from 'vditor/dist/method.min'
    interface Tool {
        label: string;
        value: string;
    }

    export default defineComponent({
        setup() {
            const router = useRouter()
            let editor: Vditor
            const funItems: Tool[] = [
                {
                    label: "大纲",
                    value: 'outline'
                },
                {
                    label: "属性",
                    value: 'attr'
                },
            ]
            const activeFnc = ref('attr')
            // 模拟数据
            const data = [
                {
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }]
            const defaultProps = {
                children: 'children',
                label: 'label'
            }
            const goBack = () => {
                router.go(-1)
            }
            const editorInit = () => {
                editor = new Vditor('editor', {
                    "height": 500, // 必须设置，否则点击大纲无法跳转
                    placeholder: '请输入内容详情',
                    value: '',
                    mode: 'wysiwyg'
                })
            }
            const renderOutline = (): void => {
                const outline = document.getElementById('outline')
                const editor = document.querySelector('#editor .vditor-reset')
                // outlineRender(editor, outline)
            }
            const switchFuc = (item: Tool): void => {
                activeFnc.value = item.value
                renderOutline()
            }
            onMounted(() => {
                editorInit()
                console.log('outlineRender', editor)
            })
            return {
                activeFnc,
                funItems,
                data,
                defaultProps,
                goBack,
                editorInit,
                switchFuc
            }
        },
    })
</script>
<style scoped lang="scss">
  .edit-header {
    height: 60px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .08);
  }

  .edit-header__wrapper {
    padding: 0 20px;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .edit-header--left {
    display: flex;
    align-items: center;
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
    flex: none;
  }

  .nav-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
  }

  .edit-main {
    /*flex: auto;*/
    width: 850px;
  }

  .right-sidebar {
    flex: auto;
  }

  .right-sidebar__wrapper {
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
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 3px;

      &.is-active {
        background-color: #e8e8e8;
      }
    }
  }

  .vditor {
    height: calc(100vh - 60px) !important;
  }

  .vditor-toolbar {
    height: 36px;
    background-color: rgb(246, 248, 250);
  }

  .right-sidebar__body {
    padding: 20px 20px 20px 10px;
  }
</style>