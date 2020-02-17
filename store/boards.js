export const state = () => ({
  boards: [],
});

export const actions = {
  get({ commit }) {
    const response = [
      { name: 'Di hoc 5', href: 'board/5'},
      { name: 'Di hoc 4', href: 'board/4'},
      { name: 'Di hoc 3', href: 'board/3'},
      { name: 'Di hoc 6', href: 'board/6'},
      { name: 'Di hoc 7', href: 'board/7'},
      { name: 'Di hoc 8', href: 'board/8'},
      { name: 'Di hoc 2', href: 'board/2'},
      { name: 'Di hoc 1', href: 'board/1'}
    ];
    commit('set', response)
  }
};

export const mutations = {
  set(state, data) {
    state.boards = data;
  }
};
