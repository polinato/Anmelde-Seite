import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        users: []
    }),
    persist: true,
    getters: {
        isExist: (state) => (newEmail) => {
            return state.users.some((user) => user.email === newEmail);
        },
    },    
    actions: {
        addUser (firstName, secondName, email, password) {
            const newUser = {
                id: Math.floor(100000 + Math.random() * 900000),
                firstName,
                secondName,
                email,
                password,
            }
            this.users.push(newUser);
        },
    }
})