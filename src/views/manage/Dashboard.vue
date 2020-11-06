<template>
  <Header class="xl"></Header>
  <div class="main">
    <div class="left-sidebar">
      <zz-menu>
        <template v-for="item in menuList">
          <zz-menu-item
            :key="item.name"
            v-if="!item.isGroup"
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
      <h1>dashboard</h1>
    </div>
  </div>
</template>

<script lang="ts">
    import {defineComponent, onMounted} from 'vue'
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
        setup() {
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
  }
</style>