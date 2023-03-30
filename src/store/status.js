import { defineStore } from 'pinia'
export const UserStore = defineStore('status', {
  state: () => {
    return {
      name: '',
    }
  },
  actions: {
    updateName(name) {
      this.name = name
    },
  },
})