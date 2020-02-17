export const state = () => ({
  teams: [],
});

export const actions = {
  async get({ commit }) {
    const response = [
        { name: 'sun ci', href: '/board/1' },
        { name: 'team 1', href: '/board/2' },
    ];

    commit('set', response);
  }
};

export const mutations = {
  set(state, data) {
    state.teams = data;
  }
};
