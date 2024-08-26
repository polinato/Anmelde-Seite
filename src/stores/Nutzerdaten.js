import { defineStore } from "pinia";

export const useUserdataStore = defineStore('userdata', {
    state: () => ({
        users: () => ({
            id: 1,
        firstName: 'Polina',
        secondName: 'Tohoieva',
        email: 'polina@example.com',
        password: '1234'
        })
    })
})