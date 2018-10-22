import Vue from 'vue'
import dayjs from 'dayjs'

function prettyDate(date) {
  return dayjs(date).format('h A ddd MMM D, YYYY')
}

const filters = {
  prettyDate
}

export default filters

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
