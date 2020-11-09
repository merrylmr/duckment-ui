<template>
  <Header></Header>
  <div class="main-area">
    <el-steps :active="step" align-center>
      <el-step title="选择场景"></el-step>
      <el-step title="选择模板"></el-step>
      <el-step title="创建站点"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>

    <div v-if="step!==1 && step!==4">
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
      <div class="scene-item"
           v-for="(item,index) in docTypeList"
           :key="index">
        <div class="scene-item__thumbnail">
          <img :src="item.thumbnail" alt="">
        </div>
        <div class="scene-item__desc">
          {{item.label}}
        </div>
        <div class="scene-item__btn">
          <el-button
            @click="selectedType(item)"
            type="primary"
            round>选择
          </el-button>
        </div>
      </div>
    </div>
    <div class="choose-tpl" v-else-if="step===2">
      <el-row class="tpl-list" :gutter="20">
        <el-col class="tpl-item"
                v-for="(item,i) in ThemeList"
                :key="i"
                :span="6">
          <div class="tpl-item__inner">
            <div class="tpl-item__thumbnail">
              <img
                :src="item.thumbnail" alt="">
            </div>
            <div class="tpl-item__info">
              <div class="tpl-item__name">
                {{item.name}}
              </div>
              <div class="tpl-item__choose">
                <el-button
                  type="primary"
                  @click="selectedTheme(item)"
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
        <el-form
          :model="siteData"
          :rules="rules">
          <el-form-item prop="name">
            <el-input
              v-model="siteData.name"
              placeholder="请输入名称">
            </el-input>
          </el-form-item>
        </el-form>
      </div>

      <div class="step-btn">
        <el-button
          round type="primary"
          :disabled="!siteData.name"
          @click="createSite">下一步
        </el-button>
      </div>
    </div>
    <div class="site-complete" v-else>
      <div
        v-if="isCreateIng"
        v-loading="isCreateIng">
        creating
      </div>
      <div v-if="!isCreateIng">
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
  </div>
</template>
<script lang="ts">
  import {defineComponent, ref, reactive, onUnmounted} from 'vue'
  import Header from '../Header.vue'
  import {useRouter} from 'vue-router'
  import {setLocalStore, getLocalStore, removeLocalStore} from "@/assets/js/tool"
  import {Doc} from '@/types/index.d.ts'
  import {newProject} from '@/api/index.ts'

  interface Theme {
    name: string;
    thumbnail: string;
    id: number;
  }

  interface DocType {
    thumbnail: string;
    type: string;
    label: string;
    desc: string;
  }

  interface SiteData {
    step: number;
    site: Doc
  }

  export default defineComponent({
    name: 'create',
    components: {Header},
    setup() {
      const router = useRouter()
      const doc: Doc = {
        type: '',
        theme_id: 0,
        name: '',
        icon: ''
      };
      const data = getLocalStore('siteData') || {step: 1, site: doc};
      console.log('siteData', data, typeof data, (data as any).step);
      const step = ref((data as any).step)

      const docTypeList: DocType[] = [
        {
          thumbnail: "img/rep.png",
          type: 'rep',
          label: '文档',
          desc: ''
        },
        {
          thumbnail: "/img/blog.png",
          type: 'blog',
          label: 'Blog',
          desc: ''
        }
      ]
      const siteData = reactive((data as any).site)
      const ThemeList: Theme[] = [{
        thumbnail: "https://www.baklib.com/templates/help-scout/1/assets/images/1200x750.png",
        name: '模板名称',
        id: 1
      }]
      const rules = {
        name: [
          {required: true, message: '名称必填', trigger: ['blur', 'change']},
        ]
      }
      const isCreateIng = ref(false)
      const toNext = (): void => {
        console.log('toNext')
        step.value++
      }
      const goBack = (): void => {
        step.value--
        storeSiteData('siteData')
      }
      const finish = (): void => {
        removeLocalStore('siteData')
        router.replace({
          name: 'dashboard',
          params: {
            id: 1
          }
        })
      };
      const storeSiteData = (name: string): void => {
        let data = {
          step: step.value,
          site: siteData
        }
        setLocalStore(name, data);

      };
      const selectedType = (item: Doc): void => {
        siteData.type = item.type
        toNext()
        storeSiteData('siteData')
      }


      const selectedTheme = (item: Theme): void => {
        siteData.theme_id = item.id
        toNext()
        storeSiteData('siteData')
      }

      const createSite = async () => {
        try {
          toNext()
          isCreateIng.value = true
          const res = await newProject(siteData)
          console.log('res', res)
          isCreateIng.value = false
        } catch (err) {
          isCreateIng.value = false
          console.error(err)
        }
      }
      onUnmounted(() => {
        removeLocalStore('siteData')
      })
      return {
        step,
        siteData,
        docTypeList,
        ThemeList,
        rules,
        isCreateIng,
        toNext,
        goBack,
        finish,
        selectedType,
        storeSiteData,
        selectedTheme,
        createSite
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

    ::v-deep(.el-input__inner ) {
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