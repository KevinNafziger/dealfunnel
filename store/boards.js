export const state = () => ({
  myboard: [],
  myboardArry: [],
  showModal: false,
})

export const mutations = {
  add(state, id) {

    if (state.myboard.includes(id) == false) 
    {
      state.myboard.push(id);
    }
  },
  addboardArry(state, item )  {

    if (state.myboardArry.includes(item) == false) 
    {
      state.myboardArry.push(item);
    } 
  }, 

  remove(state, { todo }) {
    state.myboard.splice(state.list.indexOf(todo), 1)
  },
  
  toggle(state)  {
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
    updateBoardArry(vuexContext, index) {
      vuexContext.commit("addboardArry", index);
    },
    toggle(vuexContext) {
      vuexContext.commit("toggle");
    }
  }
