<template>
  <div class="col-3">
    <div>Cac team co ban</div>
    <ul>
      <li class="active text-white"
        v-for="(team, index) in teams"
        v-bind:key="index"
      >
        <a v-bind:href="team.href">{{ team.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        // teams: [
        //   { name: 'sun ci', href: '/board/1' },
        // ],
      }
    },

    computed: {
      ...mapState('teams', ['teams']),
    },

    methods: {
      getTeam() {
        this.$store.dispatch('teams/get');
      }
    }
  }
</script>

<style scoped>

</style>
