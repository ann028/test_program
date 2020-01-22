<template>
  <div class="home">
    <Head></Head>
    <section style="display: flex">
      <Aside></Aside>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Head from '@/components/Header.vue';
import Aside from '@/components/Nav.vue';
export default {
  name: 'home',
  components: {
    HelloWorld,
    Head,
    Aside,
  },
};
</script>
