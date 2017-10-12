<template>
    <span>
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'thea-sector',
        props: {
            threshold: Number
        },
        data: function () {
            return {
                id: '',
                thresholdDuration: 1000
            };
        },
        // When the bound element is inserted into the DOM...
        methods: {
            getDimensions: function (el) {
                const elDimentions = el.getBoundingClientRect();
                this.id = el.id;
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
            },
            checkThreshhold: function () {
                if (this.id && this.$store.state.attention[this.id] >= this.threshold) {
                    this.$emit('action');
                    this.$store.commit('resetAttention', this.id);
                }
            }
        },
        mounted: function () {
            if (!this.$children[0]) {
                return;
            }
            const component = this.getDimensions(this.$children[0].$el);
            this.$store.commit('addSectorComponent', component);
            setInterval(this.checkThreshhold, this.thresholdDuration);
        }
    };

</script>

<style>
</style>