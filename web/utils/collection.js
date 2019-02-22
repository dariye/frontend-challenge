function concatenate(items, itemsToAdd) {
  return [
    ...items,
    ...itemsToAdd.filter(item => {
      for (let i = 0, len = items.length; i < len; i++) {
        if (items[i].id === item.id) return false;
      }
      return true;
    })
  ];
}

function sortByDate(items) {
  return items.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

export { concatenate, sortByDate };
