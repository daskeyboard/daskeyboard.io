var app = new Vue({
    el: '#videoOrGif',
    data() {
        console.log("Starting data....");
        return {
            status: 200
        }
    },
    async created() {
        console.log("Starting created....");
        try {
            console.log("Status before: "+this.status)
            // Using json file (spreadsheets) on google server
            const response = await axios.get(`https://spreadsheets.google.com/feeds/list/1LOzOn9s7RrDyaeNYxjIKN_rbu8DUvB3Ace3SYvM0s6Q/od6/public/basic?alt=json`)
            this.status = response.status
            console.log("Status after: "+this.status)
        } catch (e) {
            this.status=404
            console.log("Error: " + e)
            console.log("Status error: "+this.status)
        }

    }
});