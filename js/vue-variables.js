var app = new Vue({
    el: '#app',
    data() {
        console.log("Starting data....");
        return {
            info: [200],
            errors: []
        }
    },
    async created() {
        console.log("Starting created....");
        // axios
        //     .get('https://ipapi.co/8.8.8.8/json/')
        //     .then(function (response) {
        //         console.log(response.status);
        //         this.info = response.status;
        //         console.log(this.info)})
        try {
            console.log("Status before: "+this.info)
            // const response = await axios.get(`https://ipapi.co/8.8.8.8/json/`)
            const response = await axios.get(`http://ip-api.com/json/24.48.0.1`)
            this.info = response.status
            console.log("Status after: "+this.info)
        } catch (e) {
            this.errors.push(e)
        }

    }
});
