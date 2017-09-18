<template>
    <span>
        <slot></slot>
    </span>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'thea-sector',
        props: {
            threshold: Number
        },
        data: function () {
            return {
                id: ''
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
            setAction: function () {
                debugger;
                console.log('watching', this.threshold);
                if (this.id && this.attention[this.id] >= this.threshold) {
                    this.$emit('action');
                }
            }
        },
        created: function () {
            this.$store.watch(state => state.attention, this.setAction, { deep: true });
        },
        mounted: function () {
            const component = this.getDimensions(this.$children[0].$el);
            this.$store.commit('addSectorComponent', component);
        },
        computed: {
            ...mapState([
                'attention'
            ])
        },
    };

</script>

<style>
</style>