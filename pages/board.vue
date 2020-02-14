<template>
  <div class="m-board">
    <ul>
      <li>
        <List></List>
      </li>
      <li>
        <el-button>Thêm danh sách </el-button>
      </li>
    </ul>
  </div>
</template>

<script>
  import List from '~/components/List.vue';
    export default {
      components: {
        List,
      },
      name: "trello.vue"
    }
</script>

<style scoped>

</style>
