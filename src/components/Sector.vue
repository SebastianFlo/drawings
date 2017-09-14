<template>
    <span>
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'thea-sector',
        // When the bound element is inserted into the DOM...
        methods: {
            getDimensions: function (el) {
                const elDimentions = el.getBoundingClientRect();
                return {
                    id: el.id,
                    dimensions: {
                        width: elDimentions.width,
                        height: elDimentions.height,
                        x1: elDimentions.left,
                        x2: elDimentions.right,
                        y1: elDimentions.top,
                        y2: elDimentions.bottom
                    }
                };
            }
        },
        mounted: function () {
            const component = this.getDimensions(this.$children[0].$el);
            this.$store.commit('addSectorComponent', component);
        }
    };

</script>

<style>
</style>