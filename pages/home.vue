<template>
  <div class="container d-flex">
    <LeftMenu/>
    <HomeContent></HomeContent>
  </div>
</template>

<script>
  import LeftMenu from '~/components/home/LeftMenu'
  import HomeContent from '~/components/home/HomeContent'
    export default {
      components: {
        LeftMenu,
        HomeContent,
      },
      async fetch ({ store }) {
        store.dispatch('teams/get');
        store.dispatch('boards/get');
      },
      name: "home.vue"
    }
</script>

<style scoped>

</style>
