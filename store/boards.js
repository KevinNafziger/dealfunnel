export const state = () => ({
  myboard: [],
  showModal: false,
})

export const mutations = {
  add(state, id) {

    state.myboard.push(id)
  },
  remove(state, { todo }) {
    state.myboard.splice(state.list.indexOf(todo), 1)
  },
  toggle(state) {
    state.showModal = !state.showModal;
  }
}
 export const actions = {
    updateBoard(vuexContext, index) {
      if (isNaN(index))
        {
        return
        }
        else
        {
          vuexContext.commit("add", index);
        } 
      },
      toggle(vuexContext) {
      vuexContext.commit("toggle");
      }
  }
