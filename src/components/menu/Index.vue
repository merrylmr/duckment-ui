<template>
  <div class="zz-menu">
    <slot></slot>
  </div>
</template>
<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: "ZzMenu",
        porps: {},
    })
</script>