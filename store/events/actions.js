import { db } from '~/plugins/firebase.js'

export default {
  SET_EVENTS({ commit }) {
    const ref = db.collection('calEvent')
    ref.get().then(snapshot => {
      snapshot.forEach(res => {
        commit('setEvents', res.data())
      })
    })
  }
}
