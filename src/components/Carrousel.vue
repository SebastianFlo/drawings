<template>
    <div>
        <thea-sector v-bind:threshold="3" @action="$store.commit('setRotate', !rotate)">
            <md-button id="rotate-button" class="md-raised">Rotate</md-button>
        </thea-sector>

        <md-layout :md-gutter="40" md-align="center" v-bind:class="{ 'perspective-rotateY-50': rotate }">
            <md-layout>
                <carrousel-item :card-data="images[currentImageIndex]" class="perspective-layer-1" ></carrousel-item>
            </md-layout>
        </md-layout>

        <md-layout v-bind:class="{ 'perspective-rotateY-50': rotate }">
            <md-layout>
                <md-layout>
                    <md-button @click="$store.commit('goToImage', firstImageIndex)" class="md-icon-button md-raised">
                        <md-icon>skip_previous</md-icon>
                    </md-button>
                </md-layout>

                <md-layout>
                    <md-button @click="$store.commit('previousImage', imageCount)" class="md-icon-button md-raised">
                        <md-icon>keyboard_arrow_left</md-icon>
                    </md-button>
                </md-layout>
            </md-layout>
            <md-layout md-align="end">
                <md-layout>
                    <md-button @click="$store.commit('nextImage', imageCount)" class="md-icon-button md-raised">
                        <md-icon>keyboard_arrow_right</md-icon>
                    </md-button>
                </md-layout>

                <md-layout>
                    <md-button @click="$store.commit('goToImage', lastImageIndex)" class="md-icon-button md-raised">
                        <md-icon>skip_next</md-icon>
                    </md-button>
                </md-layout>
            </md-layout>
        </md-layout>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';

    import CarrouselItem from '@/components/CarrouselItem';
    import TheaSector from '@/components/Sector';
    import data from '../assets/data';

    export default {
        name: 'thea-carrousel',
        data() {
            return {
                greeting: 'This is the carrousel'
            };
        },
        components: {
            CarrouselItem,
            TheaSector
        },
        mounted: function () {
            this.$store.commit('setImages', Object.values(data.images));
        },
        computed: {
            ...mapState([
                'rotate',
                'images',
                'currentImageIndex'
            ]),
            ...mapGetters([
                'firstImageIndex',
                'lastImageIndex',
                'imageCount'
            ])
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
    .th-carrousel-secondary {
        filter: blur(2px);
    }
</style>