<template>
    <div class="block z-10 w-full h-16">
        <div class="max-w-screen-xl h-full mx-auto">
            <div class="flex flex-row flex-nowrap justify-between">
                <!-- Socials -->
                <div class="flex flex-row items-center">
                    <!-- Discord Icon -->
                    <div class="icon-container md:mr-5 mr-2">
                        <a :href="discordURL" target="_blank">
                            <img alt="Discord" :src="require(`~/static/icons/${discordIconSrc}`)"
                                class="max-w-none" />
                        </a>
                    </div>
                    <!-- Twitter Icon -->
                    <div class="icon-container md:ml-5 ml-2">
                        <a :href="twitterURL" target="_blank">
                            <img alt="Twitter" :src="require(`~/static/icons/${twitterIconSrc}`)"
                                class="max-w-none" />
                        </a>
                    </div>
                </div>
                <!-- Connect Wallet -->
                <div id="button-wrapper">
                    <div id="button-container" class="md:w-64 w-44 h-12">
                        <button id="button-wallet" class="w-full h-full rounded-lg bg-white shadow-lg hover:shadow-xl transition duration-200 ease-in"
                            @click="connectWallet">
                            <span id="button-wallet-text" class="md:text-lg text-sm">
                                {{ walletButtonText }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
      </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
    name: "Header",
    data() {
        return {
            discordURL: "https://discord.com/" as String,
            discordIconSrc: "discord.svg" as String,
            twitterURL: "https://twitter.com/" as String,
            twitterIconSrc: "twitter.svg" as String,
            loading: false as Boolean
        }
    },
    mounted() {
        const wallet = global.localStorage.getItem('walletAddress')

        if (wallet) {
            this.$store.commit('wallet/setSelectedAccount', wallet)
        }
    },
    computed: {
        ...mapGetters(
            {
                wallet: 'wallet/selectedAccount',
                accounts: 'wallet/accounts'
            }
        ),
        walletButtonText() : String {
            if (this.isMetaMaskInstalled) {
                "Please install MetaMask"
            }

            if (this.loading) return "Connecting Wallet..."

            else if (this.wallet) return "Wallet Connected"

            return "Connect Wallet"
        },
        isMetaMaskInstalled() : Boolean
        {
            return (typeof global.ethereum !== 'undefined' && global.ethereum.isMetaMask)
        }
    },
    methods: {
        async connectWallet() : Promise<void> {
            this.loading = true

            const resp = await this.$store.dispatch('wallet/connectWallet')

            if (!resp.isError) {
                global.localStorage.setItem('walletAddress', resp.response)
            }

            this.loading = false
        }
    }
})
</script>

<style scoped>
/* Icons */
.icon-container {
    height: auto;
    width: 30px;
}
img[alt="Twitter"] {
    width: 33px;
}
img[alt="Discord"] {
    width: 34.37px;
}
/* Button */
#button-wallet-text {
    color: #C105DF;
    font-size: 18px;
    font-family: 'Montserrat-Bold';
}
</style>
