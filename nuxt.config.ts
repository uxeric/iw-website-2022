// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/sass/base/_colors.scss" as *;'
                }
            }
        },
    },

    css: [
        'assets/sass/styles.scss',
    ],
})
