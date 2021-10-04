<template>
    <div class="flex flex-col">
        <div class="flex justify-center">
            <img
                alt="faq-title"
                class="md:max-h-16 max-h-12"
                :src="require(`~/static/images/faq/${faqTitleSrc}`)"
            />
        </div>
        <div class="flex flex-col mt-24">
            <div v-for="(question, i) of questions" :key="`q-${i}`" class="md:mb-8 mb-4">
                <div class="question text-black text-2xl text-left">
                    <span>
                        {{ question.q }}
                    </span>
                </div>
                <div class="answer text-black text-xl md:mt-6 mt-2 text-left">
                    <span>
                        {{ question.a }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface QA {
    q: String,
    a: String
}
export default Vue.extend({
    name: "FAQ",
    data() {
        return {
            q1: "When can I get a balloon?" as String,
            q2: "What will minting look like?" as String,
            q3: "Reveal when?" as String,
            q4: "Which blockchain?" as String,
            q5: "What is the smart contract address?" as String,
            a1: "Balloon minting will start on October 2, 2021 @ 5 UTC. To ensure a fair distribution, we will not have a whitelist or presale. But, we have reserved 15 Looney Balloons for giveaways and marketing." as String,
            a2: "There will be a total supply of 8,888 Looney Balloons. Each balloon will cost 0.04 eth to mint. You can mint up to 20 balloons per wallet." as String,
            a3: "After all balloons have been minted or 72 hours have passed (whichever comes first), we will reveal all balloons to their new owners." as String,
            a4: "Ethereum!" as String,
            a5: "Address" as String,
            faqTitleSrc: "faq.svg" as String
        }
    },
    computed: {
        questions(): Array<QA> {
            return [
                {
                    q: this.q1,
                    a: this.a1
                },
                {
                    q: this.q2,
                    a: this.a2
                },
                {
                    q: this.q3,
                    a: this.a3
                },
                {
                    q: this.q4,
                    a: this.a4
                },
                {
                    q: this.q5,
                    a: this.a5
                }
            ]
        }
    }
})
</script>

<style scoped>
.question span {
    font-family: 'Montserrat-Bold';
    font-weight: 500;
}
</style>