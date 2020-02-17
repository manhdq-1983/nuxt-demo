<template>
  <div class="col-9 d-flex flex-wrap">
    <a class="col-3 bg-danger m-2 p-2 h-100"
         v-for="(board, index) in boards"
         :key="index"
         :board="board"
         :href="board.href"
    >
        <Board
          :board="board"
        />
    </a>
    <a class="col-3 bg-danger m-2 p-2 h-100" @click="addBoard">
    </a>
    <div class="modal">

    </div>
  </div>
</template>

<script>
  import Board from '~/components/home/Board';
  import { mapState } from 'vuex';

  export default {
      components: {
        Board,
      },
      name: "HomeContent.vue",

      computed: {
        ...mapState('boards', ['boards']),
      },

      data() {
          return {
            numberBoard: 0,
          }
      },

      methods: {
        addBoard() {
          board.append({name: this.nameBoard, href: '/board/' + this.numberBoard })
        }
      }
    }
</script>

<style scoped>

</style>
