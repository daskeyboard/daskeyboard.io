var app = new Vue({
    el: '#app',
    data() {
        console.log("Starting data....");
        return {
            info: 200
        }
    },
    async created() {
        console.log("Starting created....");
        try {
            console.log("Status before: "+this.info)
            // const response = await axios.get(`https://ipapi.co/8.8.8.8/json/`)
            // const response = await axios.get(`http://ip-api.com/json/24.48.0.1`)
            // const response = await axios.get(`https://www.metaweather.com/static/img/weather/ico/c.ico`)
            const response = await axios.get(`https://spreadsheets.google.com/feeds/list/1LOzOn9s7RrDyaeNYxjIKN_rbu8DUvB3Ace3SYvM0s6Q/od6/public/basic?alt=json`)
            this.info = response.status
            console.log("Status after: "+this.info)
        } catch (e) {
            this.info=404
            console.log("Error: " + e)
            console.log("Status error: "+this.info)

        }

    }
});
