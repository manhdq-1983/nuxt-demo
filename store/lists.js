export const state = () => ({
  lists: [],
});

export const actions = {
  get({ commit }) {
    const response = [
      { name: 'Di hoc 2', href: 'list/2', cards: [
        { name: 'card 1', status: true, href: 'card/1'},
          { name: 'manh', status: false, href: 'card/2' }
      ]},
      { name: 'Di hoc 1', href: 'list/1', cards: [
        { name: 'card 1', status: true, href: 'card/3' },
        { name: 'minh', status: false, href: 'card/4' },
        { name: 'chao', status: false, href: 'card/5' },
        { name: 'cac', status: false, href: 'card/6' },
        { name: 'ban nhe hehehe', status: true, href: 'card/7' },
      ]}
    ];
    commit('set', response)
  }
};

export const mutations = {
  set(state, data) {
    state.lists = data;
  },
  addList(state, data) {
    if (data.nameList) {
      const id = data.numberList + 2;
      state.lists.push({
        name: data.nameList,
        href: '/href/' + id,
        cards: [],
      });
    }
  },
  addCard(state, data) {
    const id = data.countCard + 2;
    state.lists[data.id].cards.push({
      name: data.cardName,
      status: false,
      href: '/lists/' + data.id + '/cards/' + id,
    })
  },
  removeCard(state, data) {
    state.lists[data.listId].cards.splice(data.id, 1)
  },
  removeList(state, data) {
    state.lists.splice(data, 1)
  }

};
