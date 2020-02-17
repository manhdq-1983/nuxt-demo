<template>
  <div class="m-board d-flex">
    <ul class="d-flex m-list-container sort cf" id="sort">
      <li class="m-list bg-table-default m-2 p-2"
      v-for="(list, index) in lists"
      :key="index"
      >
        <div class="m-list-div">
          <List
            :list="list"
            :id="index"
          >
          </List>
      </div>
      </li>
    </ul>
    <li class="bg-table-default m-2 p-0 d-flex justify-content-center">
      <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">
        + Thêm danh sách
      </b-button>
    </li>
    <b-modal id="bv-modal-example" hide-footer>
      <template v-slot:modal-title>
        Add list to board
      </template>
      <div class="d-block text-center">
        <input v-model="nameList" class="form-control"/>
      </div>
      <b-button class="mt-3" block @click="addList">Add now</b-button>
    </b-modal>
  </div>
</template>

<script>
  import List from '~/components/List.vue';
  import { mapState } from 'vuex';
  import Sortable from "sortablejs/modular/sortable.complete.esm";

  export default {
    components: {
      List,
    },

    async fetch ({ store }) {
      store.dispatch('lists/get');
    },

    computed: {
      ...mapState('lists', ['lists']),
    },

    data() {
      return {
        nameList: '',
      }
    },

    methods: {
      addList() {
        console.log();
        let data = {
          nameList: this.nameList,
          numberList: this.$store.state.lists.lists.length,
        };
        this.$bvModal.hide('bv-modal-example');
        this.$store.commit('lists/addList', data);
        this.nameList = '';
      },
    },

    mounted() {
      var el = document.getElementById('sort');
      var sortable = Sortable.create(el);
      var els = document.getElementsByClassName("m-sort-card");
      Array.prototype.forEach.call(els, function(el) {
        var sortable = Sortable.create(el);
      });
    }
  }
</script>

<style lang="css">
  .m-list {
    border-radius: 4px;
    width: 200px;
    list-style: none;
    padding: 0!important;
    height: auto;
  }
  .m-list .m-list-div {
    border: 1px solid #cacaca;
    border-radius: 4px;
  }

  #show-btn {
    width: 100%;
    height: 36px;
  }
</style>
