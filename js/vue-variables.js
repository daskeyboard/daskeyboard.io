var app = new Vue({
    el: '#app',
    data () {
        return {
        info: 'null'
        }
    },
    mounted () {
        axios
        .get('http://ip-api.com/json/24.48.0.1',
        {
            headers: {'Content-Type': 'application/json'},
        }
        )
        .then(response => (this.info = response.status))
    }
    });