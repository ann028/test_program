<template>
  <main>
    <router-view></router-view>
  </main>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class Index extends Vue {}
</script>
<style lang="less" scoped>

</style>