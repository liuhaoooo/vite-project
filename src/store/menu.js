import { defineStore } from 'pinia'
export const UserStore = defineStore('menu', {
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
    //   数据持久化
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage,
                paths: ['name']
            }
        ]
    }
})