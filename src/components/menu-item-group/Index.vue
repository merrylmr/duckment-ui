<template>
  <div class="zz-menu-item-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: "ZzMenuItemGroup",
        porps: {},
    })
</script>