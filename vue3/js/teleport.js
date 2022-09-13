Vue
    .createApp({})
    .component('my-teleport', {
        data() {
            return {
                // ダイアログを表示状態にするか
                show: false,
                disabled_flag: false,
            }
        },
        template: `
        <form>
            <input type="button" v-on:click="onclick(true)" v-bind:disabled="disabled_flag" value="ダイアログ開く" />
        </form>
        <teleport to="#popup">
            <div id="my-dialog" class="dialog" v-if="show">
                <p>独自ダイアログです。</p>
                <input type="button" v-on:click="onclick(false)" value="閉じる" />
            </div>
        </teleport>
        `,
        methods: {
            // 引数flagでshowをオン／オフ
            onclick(flag) {
                this.show = flag;
                this.disabled_flag = flag;
            }
        }
    }).mount('#app');