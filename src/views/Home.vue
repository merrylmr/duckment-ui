<template>
  <Header></Header>
  <div class="app-body">
    <h1>选择或则创建网站!</h1>
    <div class="create-site-btn">
      <router-link
        :to="{name:'createSite'}">
        <el-button
          round
          type="primary">
          <i class="el-icon-plus"></i>创建
        </el-button>
      </router-link>
    </div>
    <div class="site-panel">
      <div>我的站点</div>
      <div class="site-list">
        <div class="site-item"
             v-for="(item,index) in siteList"
             :key="index"
             @click="goSiteDetail(item.id)">
          <div class="site-item__img">
            <img :src="item.thumbnail" alt="">
          </div>
          <div class="site-item__text">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import Header from './Header.vue'
    import {defineComponent, onMounted} from 'vue'
    import {useRouter} from 'vue-router'
    import {getProject} from '@/api/index.js'
    interface Site {
        id: number;
        name: string;
        thumbnail: string;
    }

    export default defineComponent({
        name: 'home',
        components: {Header},
        setup(props, context) {

          const router = useRouter()

          const siteList: Site[] = [
            {
              id: 1,
              name: 'test',
              thumbnail: '/img/logo.png'
            },
          ]
          const goSiteDetail = (id: number) => {
            console.log('context', context, id)
            router.push({name: 'dashboard', params: {id: id}})
          }

          onMounted(async () => {
            const res = await getProject()
            console.log('res', res)
          })
          return {
            siteList,
            goSiteDetail
          }
        }
    })
</script>

<style scoped lang="scss">
  .app-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }

  .site-panel {
    width: 1200px;
    min-height: 500px;
    /*border: 1px solid #ebeef5;*/
    margin-top: 15px;
    border-radius: 10px;
    /*box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);*/
    padding: 20px;
  }

  .create-site-btn {
    padding: 10px;

    .el-button {
      width: 250px;
      margin: 0 auto;
    }
  }

  .site-list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .site-item {
    width: 120px;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
      color: $primary-color;
    }
  }

  .site-item__img {
    width: 100%;
    height: 120px;
    border: 1px solid #eee;

    img {
      width: 100%;
    }
  }

  .site-item__text {
    text-align: center;
    padding: 10px;
  }
</style>
