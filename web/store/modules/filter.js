const state = {
  query: null,
  order: 'ASCENDING',
  type: 'DATE',
}

const actions = {
  SET_QUERY: ({ commit }, query) => {
    commit('SET_QUERY', query)
  },
  SET_ORDER: ({ commit }, order) => {
    commit('SET_ORDER', order)
  },
  SET_TYPE: ({ commit }, type) => {
    commit('SET_TYPE', type)
  }
}

const mutations = {
  SET_QUERY: (state, query) => {
    state.query = query
  },
  SET_ORDER: (state, order) => {
    state.order = order
  },
  SET_TYPE: (state, type) => {
    state.type = type
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
