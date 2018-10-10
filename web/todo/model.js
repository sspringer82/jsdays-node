module.exports = {
  data: [{ id: 1, title: 'get up' }, { id: 2, title: 'go to work' }],
  getItems() {
    return Promise.resolve(this.data);
  },
};
