export default defineNuxtConfig({
 app:{
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  future: {
    compatibilityVersion: 4
  }
})
