// store/state.js
export const state = () => ({
  visits: [],
})

export const mutations = {
	
addVisit (state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON()
     })
  }
 }