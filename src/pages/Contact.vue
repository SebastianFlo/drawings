<template>
    <div class="contact-container">
        <md-layout md-align="center" class="flex-vert">
            {{ greeting }}
        </md-layout>
    </div>
</template>

<script>
    export default {
        name: 'thea-contact',
        data() {
            return {
                greeting: 'Welcome To Thea\'s Contact Page'
            };
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
    .contact-container {
        display: flex;
        flex-direction: column;
    }

    .flex-vert {
        flex: 1 0 auto;
    }
</style>