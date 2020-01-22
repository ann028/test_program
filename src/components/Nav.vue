<template>
  <main>
    <ul class="ulList">
      <li>1</li>
      <li>2</li>
    </ul>
  </main>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class Nav extends Vue {}
</script>
<style lang="less" scoped>
main{
  .ulList{
    width: 200px;
  }
}
</style>