<template>
  <div>
    <div class="m-title d-flex justify-content-sm-between p-2">
      {{ list.name }}
      <button type="button" class="close" aria-label="Close" @click="removeList">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <ul class="m-card-container m-sort-card" id="sortCard">
      <li
        class="m-card-detail"
        v-for="(card, index) in list.cards"
        :key="index"
      >
          <Card
            :card="card"
            :id="index"
            :listId="id"
          >
          </Card>
      </li>
    </ul>
    <div class="d-grid">
      <span class="addCard" @click="toggleAdd(id)"> + Thêm thẻ khác</span>
      <input
        type="text"
        v-model="cardName"
        :id="'list' + id"
        class="d-none m-input-card"
        v-on:keyup.enter="addCard"
        placeholder="Enter card ..."
      >
    </div>
  </div>
</template>

<script>
  import Card from '~/components/Card.vue'
    export default {
      components: {
        Card,
      },

      props: [
        'list',
        'id',
      ],

      name: "List.vue",
      data() {
        return {
          cardName: '',
          isAddCard: true,
        }
      },

      methods: {
        toggleAdd(id) {
          this.isAddCard = true;
          var els = document.getElementsByClassName('m-input-card');
          Array.prototype.forEach.call(els, function(el) {
            el.classList.add('d-none');
          });
          var el = document.getElementById('list' + id);
          el.classList.remove('d-none');
        },
        addCard() {
          let data = {
            cardName: this.cardName,
            id: this.id,
            countCard: this.$store.state.lists.lists[this.id].cards.length,
          };
          this.$store.commit('lists/addCard', data);
          this.cardName = '';
          var els = document.getElementsByClassName('m-input-card');
          Array.prototype.forEach.call(els, function(el) {
            el.classList.add('d-none');
          });
        },
        removeList() {
          this.$store.commit('lists/removeList', this.id);
        }
      }
    }
</script>

<style lang="css">
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
  .m-title {
    background-color: #BABBBC;
  }
  .m-card-detail {
    border-radius: 4px;
    margin: 0 0 5px 0;
    background-color: #fff;
  }
  .m-card-container {
    padding: 5px;
    background-color: #e1e2e3;
  }
  .addCard {
    background-color: #e1e2e3;
    padding: 5px;
    width: 100%;
  }
  .d-grid {
    display: grid;
    background-color: #e1e2e3;
  }
  .m-input-card {
    padding-left: 10px;
    width: 178px;
    border-radius: 4px;
    margin: 0 10px 5px;
  }
</style>
