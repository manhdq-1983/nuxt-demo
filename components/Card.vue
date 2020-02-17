<template>
    <div class="d-flex px-2 bg-default m-card-detail justify-content-sm-between">
        {{ card.name }}
      <button type="button" class="close" aria-label="Close" @click="removeCard">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
</template>

<script>
    export default {
        name: "Card.vue",
        props: [
          'card',
          'id',
          'listId',
        ],
        methods: {
          removeCard() {
            let data = {
              listId: this.listId,
              id: this.id,
            };
            this.$store.commit('lists/removeCard', data);
          }
        }
    }
</script>

<style lang="css">
  .m-card-detail {
      padding: 5px;
  }
</style>
