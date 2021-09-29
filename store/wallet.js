export const state = () => ({
    selectedAccount: 1,
    accounts: 2,
    networkVersion: 3
})

export const mutations = {
    setSelectedAccount(state, account) {
        state.selectedAccount = account
    },
    setAccounts(state, accounts) {
        state.accounts = accounts
    },
    setNetworkVersion(state, network) {
        state.networkVersion = network
    }
}

export const getters = {
    selectedAccount(state) {
        return state.selectedAccount
    },
    accounts(state) {
        return state.accounts
    },
    networkVersion(state) {
        state.networkVersion
    }
}

export const actions = {
    async connectWallet({commit}) 
    {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            commit('setSelectedAccount', accounts[0])
            commit('setAccounts', accounts)

            return { 'response': accounts[0] }
        }
        catch (error) {
            return { 'response': error, 'isError': true }
        }
    }
}