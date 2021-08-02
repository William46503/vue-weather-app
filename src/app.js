const app = Vue.createApp({
    data() {
        return {
            api_key : "27ceb4b36e5cc4c6e112570042ec6fb0",
            url_base : "api.openweathermap.org/data/2.5/",
        }
    },
    methods: {
        
    },
})


app.mount("#app")

// weather?q={city name}&appid={API key}