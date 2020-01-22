<template>
  <main>
    <div class="topHeader"></div>
  </main>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class Header extends Vue {}
</script>
<style lang="less" scoped>
main{
  .topHeader{
    width: 100%;
    height: 200px;
  }
}
</style>