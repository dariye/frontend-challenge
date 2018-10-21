<template lang="html">
  <div class="uk-container uk-margin-medium-left">
    <form class="uk-search uk-search-large uk-inline">
      <div class="uk-form-icon"><vk-icon icon="search" ratio="2"
                                                       reset></vk-icon></div>
      <input class="uk-search-input uk-margin-medium-left" type="search" placeholder="Search...">
    </form>
  </div>
</template>
<script type="text/javscript">
export default {
  name: 'Search'
}
</script>
<style scoped>
input {
  font-weight: 100;
}
</style>
