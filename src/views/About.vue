<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { daily } from '@/api/index';
@Component
export default class About extends Vue {
  private mounted() {
    const resData: any = daily.userInfo().then((res: any) => {
      console.log(res.data);
    });
  }
}
</script>
