<template>
    <div class="grid md:grid-cols-2">
        <div class="md:grid md:grid-rows-2">
            <!-- Title -->
            <div class="w-full relative md:h-auto h-16">
                <div class="absolute z-10 md:top-unset md:bottom-2 left-0 w-full">
                    <img
                        alt="Title"
                        class="md:max-w-none max-w-xs mx-auto"
                        id="image-title"
                        :src="require(`~/static/images/intro/${titleImageSrc}`)"
                    />
                </div>
            </div>

            <div class="w-full flex flex-col flex-grow relative">
                <!-- Subtitle/Description -->
                <div class="relative h-32">
                    <div class="absolute z-10">
                        <div id="title-desc" class="lg:text-xl md:text-lg text-md text-black md:text-left text-center">
                            <span>
                                {{ titleDesc }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Mint Buttons -->
                <div class="flex flex-row items-center md:justify-start justify-center md:mt-12 mt-6 z-10">
                    <div class="mr-2">
                        <!-- # of Mints -->
                        <div class="w-36 h-12">
                            <button
                                class="w-full h-full rounded-lg hover:shadow-lg transition duration-200 ease-in"
                                id="mint-count-btn">
                                <span>
                                    {{ mintCountBtnText }}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="ml-2">
                        <!-- MINT -->
                        <div class="w-36 h-12">
                            <button 
                                class="w-full h-full rounded-lg bg-white hover:shadow-lg transition duration-200 ease-in"
                                id="mint-btn">
                                <span>
                                    {{ mintBtnText }}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Price -->
                <div class="flex flex-col md:mt-8 mt-4">
                    <div class="text-black">
                        <span>
                            {{ maxMintsText }}
                        </span>
                    </div>
                    <div class="text-black">
                        <span>
                            {{ pricePerMintText }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-full relative">
            <div class="absolute -left-12 top-0 md:bottom-0 z-30">
                <img
                    alt="looneyBalloon"
                    class="md:max-w-screen-md max-w-sm"
                    id="image-looney"
                    :src="require(`~/static/images/intro/${looneyImageSrc}`)"
                />
            </div>
            <div class="cloud-1-container absolute z-20 top-4">
                <img
                    alt="cloud1"
                    class="cloud-1"
                    :src="require(`~/static/images/clouds/${cloudSrc1}`)"
                />
            </div>
            <div class="cloud-2-container absolute z-20">
                <img
                    alt="cloud2"
                    class="cloud-2"
                    :src="require(`~/static/images/clouds/${cloudSrc2}`)"
                />
            </div>
            <div class="cloud-3-container absolute z-20">
                <img
                    alt="cloud3"
                    class="cloud-3"
                    :src="require(`~/static/images/clouds/${cloudSrc3}`)"
                />
            </div>
        </div>
    </div>    
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            titleImageSrc: 'pageTitle.svg' as String,
            looneyImageSrc: 'looney_adobespark 1.png' as String,
            titleDesc: 'Looney Balloons are a unique collection of programmatically created NFTs, assembled from over 90 traits. The 8,888 smile inducing balloons were made to spark the kid in all of us. So grab a balloon and join the party!' as String,
            mintCountBtnText: '# of Mints' as String,
            mintBtnText: 'MINT' as String,
            maxMintsText: 'Max mints per transaction = 20' as String,
            pricePerMintText: 'Price = 0.05Ξ',
            cloudSrc1: 'cloud1.svg' as String,
            cloudSrc2: 'cloud2.svg' as String,
            cloudSrc3: 'cloud3.svg' as String
        }
    }
})
</script>

<style scoped>
#title-desc {
    font-family: 'Montserrat-SemiBold';
}
#mint-count-btn {
    background: #E28DFF;
}
#mint-count-btn span {
    font-family: 'Montserrat-SemiBold';
}
#mint-btn span {
    font-family: 'Montserrat-Bold';
    color: #C105DF;
}
.cloud-1-container {
    animation: cloud-1-float 20s infinite;
}
.cloud-2-container {
    top: 302px;
    right: 32px;
    animation: cloud-2-float 20s infinite;
}
.cloud-3-container {
    top: 384px;
    left: 12px;
    animation: cloud-3-float 20s infinite;
}

@keyframes cloud-1-float {
    0% { transform: translatex(0px); }
    25% { transform: translatex(10px); }
    50% { transform: translatex(20px); }
    75% { transform: translatex(10px); }
    100% { transform: translatex(0px); }
}
@keyframes cloud-2-float {
    0% { transform: translatex(0px); }
    25% { transform: translatex(-10px); }
    50% { transform: translatex(-20px); }
    75% { transform: translatex(-10px); }
    100% { transform: translatex(0px); }
}
@keyframes cloud-3-float {
    0% { transform: translatex(0px); }
    25% { transform: translatex(-10px); }
    50% { transform: translatex(-20px); }
    75% { transform: translatex(-10px); }
    100% { transform: translatex(0px); }
}
</style>