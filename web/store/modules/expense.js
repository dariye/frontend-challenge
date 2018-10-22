import { concatenate, sortByDate } from '../../utils/collection'

const state = {
  limit: 25,
  page: 1,
  loading: false,
  total: null,
  expenses: []
}

const getters = {
  pages: (state) => Math.ceil(state.total/state.limit),
  index: (state) => ((state.page-1)*state.limit),
  current: (state, getters) => getters.index+state.limit,
  expenses: (state, getters, rootState) => {
    const  { type, order } = rootState.filter
    if (order === 'DESCENDING') {
      return state.expenses.sort((a, b) => {
        return type === 'DATE'
          ? new Date(a.date) - new Date(b.date)
          : a.amount.value - a.amount.value
      })
    }
    return state.expenses.sort((a, b) => {
      return type === 'DATE'
        ? new Date(b.date) - new Date(a.date)
        : b.amount.value - a.amount.value
    })
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
  },
  SET_LOADING: ({ commit }, loading) => {
    commit('SET_LOADING', loading)
  },
  async postComment ({ app, commit }, { id, comment }) {
    const { $axios, env: { api } } = this.app.context
    const data = { comment }
    try {
      await $axios.post(`${api}/expenses/${id}`, data)
    } catch (err) {
      console.log(err)
    }
  },
  async postReceipt ({ app, commit }, { id, receipt }) {
    const { $axios, env: { api } } = this.app.context

    const form = new FormData()
    form.append('receipt', receipt, receipt.name)

    try {
      await $axios.post(`${api}/expenses/${id}/receipts`, form)
    } catch (err) {
      console.log(err)
    }
  },
  async fetchExpenses ({ state, commit, dispatch, getters }) {
    const { $axios, env: { api } } = this.app.context

    const current = getters.current
    const pages = getters.pages
    const total = state.total
    const page = state.page
    const limit = state.limit

    if (current === total) return
    if (page === pages) return

    try {
      const { data } = await $axios.get(`${api}/expenses?limit=${limit}&offset=${limit*page}`)
      if (data) {
        const { expenses } = data
        commit('SET_EXPENSES', { expenses })
        commit('SET_LOADING', false)
      }
    } catch (err) {
      console.log(err)
    }
  }
}

const mutations = {
  SET_TOTAL: (state, { total }) => {
    state.total = total
  },
  INCREMENT_PAGE: (state) => {
    state.page++
  },
  SET_PAGE: (state, { page }) => {
    state.page = page
  },
  SET_EXPENSES: (state, { expenses }) => {
    state.expenses = sortByDate(concatenate(state.expenses, expenses))
  },
  SET_LOADING: (state, loading) => {
    state.loading = loading
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
