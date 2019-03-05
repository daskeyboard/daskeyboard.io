var app = new Vue({
    el: '#videoOrGif',
    data() {
        console.log("Starting data....");
        return {
            status: 404
        }
    },
    created() {
        axios.get('https://spreadsheets.google.com/basi?alt=json')
        .then((response) => {
            // Should not enter here, because of the wrong link with error 404
            console.log("Should not be displayed")
            // console.log("Response status before: "+this.status)
            // this.status = response.status
            // console.log("Response status after: "+this.status)
        })
        .catch((error) => {
            // Error 404 means outside China
            // Network error means inside china (because of google server)
            console.log("Error: "+error)
            console.log("Error status before: "+this.status)
            this.status = error.toString().substr(error.toString().length - 3)
            console.log("Error status before: "+this.status)
        })
    }
});
