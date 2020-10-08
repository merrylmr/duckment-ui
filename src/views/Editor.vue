<template>
  <div>
    <h1>editor</h1>
    <button @click="saveAction">保存</button>
    <div id="editorjs"></div>
  </div>
</template>
<script lang="ts">
  import EditorJS from '@editorjs/editorjs';
  import SimpleImage from '@/plugins/simple-image/index.js';
  import {defineComponent, onMounted, onUnmounted, onUpdated} from "vue";

  export default defineComponent({
    name: "editor",
    setup() {
      let editor;
      const initEditor = () => {
        editor = new EditorJS({
          holder: 'editorjs',
          autofocus: true,
          placeholder: '点击这里开始编辑，展开“+”使用更多功能',
          tools: {
            image: {
              class: SimpleImage,
              inlineToolbar: true
            }
          },
          data: {
            time: 1552744582955,
            blocks: [
              {
                type: "image",
                data: {
                  url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg",
                  "caption": "Here is a caption field",
                  "withBorder": false,
                  "withBackground": false,
                  "stretched": true
                }
              }
            ],
            version: "2.11.10"
          }
        });
      };
      const saveAction = etv => {
        editor.save().then((data) => {
          console.log('save data', data, etv);
        })
      };
      onMounted(() => {
        console.log('onMounted');
        initEditor();
      });
      onUpdated(() => {
        console.log('onUpdated')
      });
      onUnmounted(() => {
        console.log('onUnmounted')
      });
      return {
        saveAction
      }
    }
  })
</script>