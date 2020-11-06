<template>
  <Header></Header>
  <div class="main-area">
    <el-steps :active="step" align-center>
      <el-step title="选择场景"></el-step>
      <el-step title="选择模板"></el-step>
      <el-step title="创建站点"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>

    <div v-if="step!==1">
      <el-button
        class="go-back"
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
          <img src="/img/rep.png" alt="">
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
          <img src="/img/blog.png" width="80" alt="">
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
    <div class="choose-tpl" v-else-if="step===2">
      <el-row class="tpl-list" :gutter="20">
        <el-col class="tpl-item"
                v-for="i in 10"
                :key="i"
                :span="6">
          <div class="tpl-item__inner">
            <div class="tpl-item__thumbnail">
              <img src="https://www.baklib.com/templates/help-scout/1/assets/images/1200x750.png" alt="">
            </div>
            <div class="tpl-item__info">
              <div class="tpl-item__name">
                模板名称
              </div>
              <div class="tpl-item__choose">
                <el-button
                  type="primary"
                  @click="toNext"
                  size="small">选择模板
                </el-button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="site-info" v-else-if="step===3">
      <h3>站点名称</h3>
      <div class="site-name">
        <el-input placeholder="请输入名称"></el-input>
      </div>

      <div class="step-btn">
        <el-button round type="primary" @click="toNext">下一步</el-button>
      </div>
    </div>
    <div class="site-complete" v-else>
      <div>
        <img src="/img/success1.png" width="400" alt="">
      </div>
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
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scene-item {
    width: 300px;
    height: 400px;
    border: 1px solid #ebeef5;
    margin-right: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    cursor: pointer;

    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    }
  }

  .scene-item__thumbnail {
    text-align: center;
    height: 200px;

    img {
      width: 100%;
    }

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

  .step-btn {
    margin-top: 20px;

    .el-button {
      padding: 12px 60px;
    }
  }

  .site-info {
    margin: 30px auto 0 auto;
    text-align: center;
    max-width: 800px;
  }

  .site-name {
    margin-top: 20px;

    /deep/ .el-input__inner {
      border: none;
      border-bottom: 1px solid #C0C4CC;
      border-radius: 0;
    }
  }

  .go-back {
    color: #666;
  }

  .choose-tpl {
    .title {
      text-align: center;
    }
  }

  .tpl-list {

  }

  .tpl-item {
    padding-bottom: 20px;
  }

  .tpl-item__inner {
    border: 1px solid #ebeef5;
    /*margin: 10px;*/

    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    }
  }

  .tpl-item__thumbnail {
    img {
      width: 100%;
    }
  }

  .tpl-item__info {
    display: flex;
    padding: 10px;
    justify-content: space-between;
  }

  .site-complete {
    text-align: center;
  }
</style>