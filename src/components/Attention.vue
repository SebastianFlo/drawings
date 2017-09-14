<template>
    <div>
        <h3>{{ message }}</h3>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'thea-attention',
        data() {
            return {
                message: 'This component measures attention',
                mousePos: {},
                checkMouseDuration: 3000,
                myDoc: document.documentElement,
            };
        },
        props: {
            // Has to be 2^x: 2, 4, 16 ...
            sectorCount: {
                type: Number
            },
            showSectors: {
                default: false,
                type: [Boolean, String]
            },
        },
        methods: {
            handleMouseMove: function ({ pageX, pageY }) {
                this.mousePos = {
                    x: pageX,
                    y: pageY
                };
            },
            getPosition: function () {
                if (!this.mousePos.x || !this.mousePos.y) {
                    return;
                }
                // Store in a table, or do some magic
                const activeSectorId = this.fitMouseInSector(this.mousePos, this.sectors);
                this.$store.commit('drawSectors', activeSectorId);
            },
            fitMouseInSector (mousePos, sectors) {
                return Object.keys(sectors)
                    .filter(sector => (sectors[sector].x1 < mousePos.x &&
                                        mousePos.x < sectors[sector].x2))
                    .filter(sector => (sectors[sector].y1 < mousePos.y &&
                                        mousePos.y < sectors[sector].y2));
            }
        },
        mounted: function () {
            document.onmousemove = this.handleMouseMove;
            setInterval(this.getPosition, this.checkMouseDuration);
        },
        computed: {
            ...mapState([
                'sectors'
            ]),
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>