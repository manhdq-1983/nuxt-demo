<template>
  <div>
    {{ board.name }}
  </div>
</template>

<script>
    export default {
      name: "Board",
      props: [
        'board',
      ]
    }
</script>

<style scoped>

</style>
