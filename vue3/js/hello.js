Vue.createApp({
    data: function() {
        return {
            message: '皆さん、こんにちは！',
            value: 30,
            yahoo_url: 'https:www.yahoo.co.jp',
            url: "https://wings.msn.to/",
            email: 'Y-Suzuki@example.com'
        };
    },
    computed: {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase();
        }
    },
    methods: {
        localEmail2: function() {
            return this.email.split('@')[0].toLowerCase();
        }
    }
}).mount('#app');