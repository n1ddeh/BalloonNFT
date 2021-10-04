<template>
    <div class="army-container grid md:grid-cols-2">
        <div id="army-balloons" class="mt-8 md:mt-0">
            <div>
                <img
                    alt="balloon-army"
                    class=""
                    id="balloon-army"
                    :src="require(`~/static/images/army/${balloonArmyImageSrc}`)"
                />
            </div>
        </div>
        <div id="army-text" class="grid items-center md:grid-row md:mt-0 md:mb-0 mt-40">
            <div class="flex flex-row h-full items-end">
                <div>
                    <img
                    alt="army-title"
                    class=""
                    id="army-title"
                    :src="require(`~/static/images/army/${armyTitleImageSrc}`)"
                />
                </div>
            </div>
            <div class="flex flex-col items-start mt-12 md:h-full">
                <div class="w-full text-black text-xl md:whitespace-nowrap text-left">
                    <span>
                        {{ subtitleText1 }}
                    </span>
                </div>
                <div class="w-full text-black text-xl md:whitespace-nowrap text-left mt-4 md:mt-0">
                    <span>
                        {{ subtitleText2 }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Army",
    data() {
        return {
            armyTitleImageSrc: "armyTitle.png" as String,
            subtitleText1: "8,888 Bubbly Balloons guaranteed to make you smile 😄" as String,
            subtitleText2: "Grab a Balloon and join the party! 🥳" as String,
            balloonArmyImageSrc: 'balloons_army.png' as String,
        }
    }
})
</script>

<style scoped>
@media (max-width: 640px) {
    #army-balloons {
        grid-row: 2;
    }
    #army-text {
        grid-row: 1;
    }
}
</style>