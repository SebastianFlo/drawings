<script>
export default {
    name: 'observer',
    abstract: true,
    props: {
        threshold: {
            type: Array
        }
    },
    render () {
        // Without using a wrapper component, we can only render one child component.
        try {
            return this.$slots.default[0];
        } catch (e) {
            throw new Error('IntersectionObserver.vue can only render one, and exactly one child component.');
        }
    },

    mounted () {
        this.observer = new IntersectionObserver((entries) => {
            console.log('observer', entries[0].intersectionRatio);
            this.$emit(entries[0].isIntersecting ? 'intersect-enter' : 'intersect-exit', [entries[0]]);
        }, {
            threshold: this.threshold || 0
        });


        // You have to wait for the next tick so that the child element has been rendered.
        this.$nextTick(() => {
            this.observer.observe(this.$slots.default[0].elm);
        });
    },
    destroyed() {
        this.observer.disconnect();
    }
};
</script>