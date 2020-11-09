<template>
  <Header class="xl"></Header>
  <div class="main">
    <div class="left-sidebar">
      <zz-menu>
        <template v-for="item in menuList">
          <zz-menu-item
            :key="item.name"
            v-if="!item.isGroup"
            @click="goToUrl(item)"
            class="is-active">
            <i :class="item.icon"></i>
            {{item.label}}
          </zz-menu-item>
          <!--    分组      -->
          <zz-menu-item-group
            :key="item.name"
            v-if="item.isGroup">
            <div class="zz-menu-item-group__title">
              {{item.groupTitle}}
            </div>
            <template
              v-if="item.sub && item.sub.length">
              <zz-menu-item
                v-for="cItem in item.sub"
                :key="cItem.name"
                @click="goToUrl(cItem)">
                <i :class="cItem.icon"></i>
                {{cItem.label}}
              </zz-menu-item>
            </template>
          </zz-menu-item-group>
        </template>

      </zz-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
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
    name: 'manage',
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