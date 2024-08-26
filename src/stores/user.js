import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        users: []
    }),
    
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
        }
    }
})