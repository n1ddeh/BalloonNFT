<template>
    <div class="flex flex-col">
        <div class="flex justify-center relative w-full">
            <img
                alt="roadmap-title"
                class="md:max-h-16 max-h-12"
                :src="require(`~/static/images/roadmap/${roadmapTitleImageSrc}`)"
            />
        </div>
        <div class="flex justify-center place-items-center mt-16">
            <img 
                alt="balloons-roadmap"
                class="max-w-screen-md w-full h-auto"
                :src="require(`~/static/images/roadmap/${roadmapMainImageSrc}`)">
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Roadmap",
    data() {
        return {
            roadmapTitleImageSrc: "roadmapTitle.svg",
            roadmapMainImageSrc: "roadmapMain.png"
        }
    },
    computed: {
        
    }
})
</script>

<style scoped>
.long-balloon-container { 
    top: 128px;
}
.info-box {
    height: 500px;
    width: 500px;
}
.info-stat {
    font-family: 'Montserrat-Bold';
    color: #C105DF;
}
.info-desc {
    font-family: 'Montserrat-SemiBold';
    color: #C105DF;
}
.info-text {
    max-width: 32ch;
}
.info-url {
    color: #C105DF;
}
</style>