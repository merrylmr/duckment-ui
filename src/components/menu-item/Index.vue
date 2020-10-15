<template>
  <div class="zz-menu-item">
    <slot></slot>
  </div>
</template>
<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: "ZzMenuItem",
        props: {},
    })
</script>