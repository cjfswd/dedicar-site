import Vue from 'vue'
import VueScreen from 'vue-screen'

Vue.use(VueScreen, 
    {
        'ms': 320,
        'mm': 375,
        'ml': 425,
        'sm': 640,
        'md': 768,
        'lg': 1024,
        'xl': 1280,
        '2xl': 1440,
        '3xl': 1536,
    },
)