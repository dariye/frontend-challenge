const state = {
  limit: 10,
  page: 1,
  total: null,
  expenses: []
}

const getters = {
  pages: (state) => Math.ceil(state.total/state.limit),
  index: (state) => ((state.page-1)*state.limit),
  current: (state, getters) => getters.index+state.limit,
  expenses: (state, getters) => {
    return state.expenses
  }
}

const actions = {
  SET_TOTAL: ({ commit }, total) => {
    commit('SET_TOTAL', { total })
  },
  INCREMENT_PAGE: ({ commit }) => {
    commit('INCREMENT_PAGE')
  },
  SET_PAGE: ({ commit }, page) => {
    commit('SET_PAGE', { page })
  },
  SET_EXPENSES: ({ commit }, expenses) => {
    commit('SET_EXPENSES', { expenses })
  }
}

const mutations = {
  SET_TOTAL: (state, { total }) => {
    state.total = total
  },
  INCREMENT_PAGE: (state) => {
    state.page = state.page++
  },
  SET_PAGE: (state, { page }) => {
    state.page = page
  },
  SET_EXPENSES: (state, { expenses }) => {
    state.expenses = expenses
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
