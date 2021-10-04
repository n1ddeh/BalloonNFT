<template>
    <div class="grid card grid-flow-col grid-cols-2 max-w-xl shadow-lg hover:shadow-2xl px-4 py-2 border-l-4 border-indigo-900 bg-indigo-700 rounded-md mb-4 opacity-90 hover:opacity-100">
        <div class="flex justify-center align-center items-center px-4">
            <img class="h-auto w-60 rounded-md border-4 border-indigo-900" :src="require(`~/assets/img/balloons/${src}.jpg`)" />
        </div>
        <div class="flex flex-col justify-between">
            <div>
                <h3 class="text-gray-200">{{ title }}</h3>
                <div class="divide-rose-400 divide-x divide-y-reverse" />
                <p class="text-gray-400">{{description}}</p>
            </div>
            <button @click="connect" class="wallet-button mb-0 mt-2 text-center relative rounded-md block overflow-hidden px-1 py-1" style="color: #f9fafb; z-index:2; width:calc(100% - 2.75rem)">
                <span class="relative block h-full rounded-sm bg-gray-900 hover:bg-gray-800" style="padding: 0.8rem 0;">{{ selectedAccount ? 'Show Account' : 'Connect Wallet' }}</span>
            </button>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        }
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            selectedAccount: 'wallet/selectedAccount',
            accounts: 'wallet/accounts',
            networkVersion: 'wallet/networkVersion'
        })
    },
    methods: {
        async connect() {
            console.log('User Wants to connect')

            const resp = await this.$store.dispatch('wallet/connectWallet')

            console.log(resp)

            if (resp.isError) {
                this.$notify({
                    group: 'default',
                    position: 'top center',
                    max: 10,
                    title: 'Error',
                    text: resp.response.message
                })
            }
            else {
                this.$notify({
                    group: 'default',
                    position: 'top center',
                    max: 10,
                    title: 'Success',
                    text: `Account address set to ${resp.response}`
                })
            }
        }
    }
}
</script>

<style scoped>
.wallet-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
    background-size: 50% 100%;
}
.card {
    transition: all 100ms ease-out;
}
.card:hover {
    transform: translateY(-2px);
}
.card:last-child {
    margin-bottom: 0;
}
</style>