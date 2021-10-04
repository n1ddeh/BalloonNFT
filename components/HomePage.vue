<template>
  <div class="w-screen h-screen relative flex justify-center overflow-y-auto overflow-x-hidden" id="home-page-wrapper">
    <div class="pt-2 md:pt-8 lg:pt-12 xl:pt-10 2xl:py-16 px-1 md:px-6 lg:px-8 xl:px-10 2xl:px-12 flex flex-row justify-center my-0 max-w-screen-xl w-full">
      <div class="max-w-full h-full overflow-visible w-full">
        <b-header />
        <b-intro class="md:mb-48 mb-96" />
        <b-army class="md:my-48 mt-96 mb-48" />
        <b-team class="md:my-48 mb-24" />
        <b-road-map class="md:my-48 mb-24" />
        <b-faq class="mt-48 mb-96" />
      </div>
    </div>
    <notifications position="bottom left" group="default" /> 
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Intro from '@/components/Intro.vue'
import Army from '@/components/Army.vue'
import Team from '@/components/Team.vue'
import RoadMap from '@/components/Roadmap.vue'
import FAQ from '@/components/FAQ.vue'
export default Vue.extend({
  components: {
    'b-header' : Header,
    'b-intro' : Intro,
    'b-army' : Army,
    'b-team': Team,
    'b-road-map': RoadMap,
    'b-faq': FAQ
  }
})
</script>

<style scoped>
#home-page-wrapper {
  background: linear-gradient(60deg, #93ddff, #C2ECFF);
}
</style>