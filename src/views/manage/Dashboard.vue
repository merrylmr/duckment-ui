<template>
  <h3>控制台</h3>
  <el-row
    class="summary-list"
    :gutter="20">
    <el-col :span="6">
      <div class="summary-item">
        <div class="summary-item__icon">
          <i class="iconfont icon-iconset0335"></i>
        </div>
        <div class="summary-item__label">
          <div class="summary-item__desc">页面</div>
          <div class="summary-item__num">{{summary.page}}</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="summary-item">
        <div class="summary-item__icon">
          <i class="iconfont icon-yonghu"></i>
        </div>
        <div class="summary-item__label">
          <div class="summary-item__desc">用户</div>
          <div class="summary-item__num"> {{summary.users}}</div>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row
    style="margin-top:30px"
    :gutter="20">
    <el-col :span="12">
      <div class="section">
        <div class="section-title">
          最新页面
        </div>
        <div class="section-body">
          <ul class="page-list">
            <div class="page-item">

            </div>
          </ul>
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="section">
        <div class="section-title">
          最近登录
        </div>
        <div class="section-body">

        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import Header from '../Header.vue'
    import {useRouter} from 'vue-router'

    interface Menu {
        name?: string;
        icon?: string;
        label?: string;
        groupTitle?: string;
        isGroup?: boolean;

        [propName: string]: any;
    }


    export default defineComponent({
      name: 'dashboard',
      components: {Header},
      setup({}: {} = {}) {
        const router = useRouter()
        const menuList: Menu[] = [
          {
            name: "dashboard",
            icon: "el-icon-s-home",
            label: "控制台"
          },
          {
            isGroup: true,
            groupTitle: "站点",
            sub: [
              {
                name: "general",
                icon: "el-icon-document",
                label: "常规"
              },
              {
                name: "content",
                icon: "el-icon-document",
                label: "内容"
              },
              {
                name: "page",
                icon: "el-icon-tickets",
                label: "页面"
              }
            ]
          }
        ]
        const summary = {
          page: 3,
          users: 2
        }
        const goToUrl = (item: Menu) => {
          console.log('item', item)
          router.push({
            name: item.name,
            params: {
              contentId: 0
            }
          })
        }
        return {
          menuList,
          summary,
          goToUrl
        }
      },
    })
</script>

<style scoped lang="scss">
  .main {
    display: flex;
    height: calc(100vh - 60px);
  }

  .left-sidebar {
    width: 200px;
    height: 100%;
    border-right: 1px solid #eee;
  }

  .content {
    padding: 20px;
    width: 100%;
    background: #f4f6f9;
  }

  .summary-list {
    margin-top: 30px;
  }

  .summary-item {
    position: relative;
    display: flex;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    color: rgba(0, 0, 0, .87);
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, .1);
    align-items: center;
  }

  .summary-item__icon {
    padding: 0 10px;

    &::before {
      content: '';
      position: absolute;
      width: 2px;
      height: 30px;
      background-color: $primary-color;
      left: -1px;
      top: 50%;
      transform: translate(0, -50%);
    }

    i {
      font-size: 48px;
      color: $--color-primary;
    }
  }

  .summary-item__label {
    margin-left: 16px;
  }

  .summary-item__desc {
    color: #9e9e9e !important;
    font-size: 14px;
  }

  .summary-item__num {
    font-size: 24px;
  }

  .section {
    border-radius: 5px;
    background-color: #fff;
    color: rgba(0, 0, 0, .87);
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, .1);
  }

  .section-title {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    padding: 10px;
  }
</style>