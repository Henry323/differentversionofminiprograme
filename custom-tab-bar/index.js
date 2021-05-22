Component({
  data: {
    selected: 0,
    color: "#999999",
    selectedColor: "#333333",
    list: []
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      this.data.selected = data.index;
      wx.switchTab({url});
    }
  }
})