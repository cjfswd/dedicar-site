import { defineStore } from 'pinia'
import { ref } from '@nuxtjs/composition-api'

/**
 * Simulate a login
 */

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        routeBackArticle: 'A',
    }),

    // actions: {
    //     logout() {
    //         this.$patch({
    //             name: '',
    //             isAdmin: false,
    //         })

    //         // we could do other stuff like redirecting the user
    //     },

    //     /**
    //      * Attempt to login a user
    //      */
    //     async login(user, password) {
    //         const userData = await apiLogin(user, password)

    //         this.$patch({
    //             name: user,
    //             ...userData,
    //             stuff: 'hey',
    //         })
    //     },
    // },
})