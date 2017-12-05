<template>
    <div>
        <h3>{{ message }} ()</h3>
    </div>
</template>

<script>
    export default {
        name: 'thea-header',
        data() {
            return {
                message: 'This is a header',
            };
        },
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>