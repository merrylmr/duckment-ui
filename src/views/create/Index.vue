<template>
  <Header></Header>
  <div class="main-area">
    <el-steps :active="step" align-center>
      <el-step title="选择场景"></el-step>
      <el-step title="选择主题"></el-step>
      <el-step title="创建站点"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>

    <div v-if="step!==1">
      <el-button
        round
        @click="goBack"
        type="text">
        <i class="el-icon-back"></i>返回上一步
      </el-button>
    </div>
    <div class="scene-list"
         v-if="step===1">
      <div class="scene-item">
        <div class="scene-item__thumbnail">
          <i class="el-icon-s-order"></i>
        </div>
        <div class="scene-item__desc">
          文档
        </div>
        <div class="scene-item__btn">
          <el-button
            @click="toNext"
            type="primary"
            round>选择
          </el-button>
        </div>

      </div>
      <div class="scene-item">
        <div class="scene-item__thumbnail">
          <i class="el-icon-s-custom"></i>
        </div>
        <div class="scene-item__desc">
          Blog
        </div>
        <div class="scene-item__btn">
          <el-button
            @click="toNext"
            type="primary"
            round>选择
          </el-button>
        </div>
      </div>
    </div>
    <div v-else-if="step===2">
      选择主题
      <div>
        <el-button @click="toNext">下一步</el-button>
      </div>
    </div>
    <div v-else-if="step===3">
      3
      <div>
        <el-button @click="toNext">下一步</el-button>
      </div>
    </div>
    <div v-else>
      4
      <div>
        <el-button
          round
          @click="finish"
          type="primary">管理站点
        </el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
    import {defineComponent, ref} from 'vue'
    import Header from '../Header.vue'
    import {useRouter} from 'vue-router'

    export default defineComponent({
        name: 'create',
        components: {Header},
        setup() {
            const router = useRouter()
            const step = ref(1)
            const toNext = (): void => {
                console.log('toNext')
                step.value++
            }
            const goBack = (): void => {
                step.value--
            }
            const finish = (): void => {
                router.replace({
                    name: 'dashboard',
                    params: {
                        id: 1
                    }
                })
            }
            return {
                step,
                toNext,
                goBack,
                finish
            }
        }
    })
</script>

<style scoped lang="scss">
  .main-area {
    max-width: 1200px;
    margin: 50px auto 0 auto;
  }
  .scene-list {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scene-item {
    width: 300px;
    height: 400px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    margin-right: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
  }

  .scene-item__thumbnail {
    text-align: center;
    height: 200px;

    i {
      font-size: 64px;
    }
  }

  .scene-item__btn {
    margin-top: 40px;
    width: 100%;

    button {
      width: 100%;
    }
  }

</style>