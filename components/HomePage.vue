<template>
  <div class="w-screen h-screen bg-gradient-to-b from-indigo-900 to-black overflow-hidden relative">
    <div class="py-2 md:py-8 lg:py-12 xl:py-10 2xl:py-16 px-1 md:px-6 lg:px-8 xl:px-10 2xl:px-12 flex flex-row justify-center my-0 mx-auto max-w-screen-xl" style="height: calc(100vh - 2.7825rem);">
      <div class="max-w-full h-full m-auto overflow-y-auto">
        <div class="px-4 nft-container relative">
          <NFT v-for="(nft, i) in nftCollection" :key="`${i}_${nft.title}`"
            :title="nft.title" :description="nft.description" :src="nft.srcName"/>
        </div>
      </div>
    </div>
    <notifications position="bottom left" group="default" /> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      nftCollection: []
    }
  },
  created() {
    this.initCollection()
  },
  methods: {
    initCollection() {
      this.nftCollection = []
      for (let i = 0; i < 10; ++i) {
        this.nftCollection.push(
          {
            title: `BalloonNFT ${i}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio excepturi suscipit consectetur magnam eos aperiam hic aut delectus a accusamus, architecto voluptates aliquam quasi incidunt rerum facilis ex eius?",
            srcName: `balloon_${i}`
          }
        )
      }
    }
  }
}
</script>

<style scoped>
.nft-container::before {
  content: "";
  background-color: #1f293757;
  position: absolute;
  inset: 0;
}
</style>