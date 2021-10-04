<template>
    <div class="flex flex-col relative">
        <div class="absolute cloud-1-container">
            <img
                alt="cloud1"
                class="cloud-1 md:scale-100 scale-50"
                :src="require(`~/static/images/clouds/${cloudSrc1}`)"
            />
        </div>
        <div class="absolute cloud-2-container">
            <img
                alt="cloud2"
                class="cloud-2 md:scale-100 scale-50"
                :src="require(`~/static/images/clouds/${cloudSrc2}`)"
            />
        </div>
        <div class='w-full flex justify-center mb-20'>
            <div>
                <img
                    alt="team-title"
                    class=""
                    id="team-title"
                    :src="require(`~/static/images/team/${titleTeam}`)"
                />
            </div>
        </div>
        <div class="grid md:grid-cols-4 gird-rows-4">
            <div v-for="(teamMember, i) of teamMembers" :key="`team-${i}`" 
                class="flex flex-col justify-center">
                <div class="w-full flex justify-center">
                    <img
                        alt="team-1"
                        class=""
                        id="team-1"
                        :src="require(`~/static/images/team/${teamMember.imageSrc}`)"
                    />
                </div>
                <div>
                    <div class="text-black text-center text-2xl">
                        <span>
                            {{ teamMember.teamTitle }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface TeamMember {
    imageSrc: String,
    teamTitle: String
}
export default Vue.extend({
    name: "Team",
    data() {
        return {
            titleTeam: "teamTitle.svg" as String,
            titleTeam1: "Team 1" as String,
            titleTeam2: "Team 2" as String,
            titleTeam3: "Team 3" as String,
            titleTeam4: "Team 4" as String,
            imageTeam1: "team1.png" as String,
            imageTeam2: "team2.png" as String,
            imageTeam3: "team3.png" as String,
            imageTeam4: "team4.png" as String,
            cloudSrc1: "cloud1.svg" as String,
            cloudSrc2: "cloud2.svg" as String
        }
    },
    computed: {
        teamMembers(): Array<TeamMember> {
            return [
                {
                    imageSrc: this.imageTeam1,
                    teamTitle: this.titleTeam1
                },
                {
                    imageSrc: this.imageTeam2,
                    teamTitle: this.titleTeam2
                },
                {
                    imageSrc: this.imageTeam3,
                    teamTitle: this.titleTeam3
                },
                {
                    imageSrc: this.imageTeam4,
                    teamTitle: this.titleTeam4
                }
            ]
        }
    }
})
</script>
<style scoped>
.cloud-1-container {
    top: -48px;
    left: -64px;
    animation: cloud-1-float 12s infinite;
}
.cloud-2-container {
    top: 12px;
    right: -64px;
    animation: cloud-2-float 12s infinite;
}

@media (max-width: 640px) {
    .cloud-1 {
        transform: scale(0.5) translateY(-128px);
    }
}

@keyframes cloud-1-float {
    0% { transform: translatex(0px); }
    15% { transform: translatex(-10px); }
    30% { transform: translatex(-20px); }
    45% { transform: translatex(-25px); }
    60% { transform: translatex(-20px); }
    75% { transform: translatex(-10px); }
    100% { transform: translatex(0px); }
}

@keyframes cloud-2-float {
    0% { transform: translatex(0px); }
    15% { transform: translatex(10px); }
    30% { transform: translatex(20px); }
    45% { transform: translatex(25px); }
    60% { transform: translatex(20px); }
    75% { transform: translatex(10px); }
    100% { transform: translatex(0px); }
}
</style>