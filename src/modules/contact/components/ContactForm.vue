<template>
    <div>
        <md-layout md-align="center" class="flex-vert">
            {{ greeting }}
        </md-layout>
        <label for="email">Email</label>
        <input type="email" name="email" required>
    </div>
</template>

<script>
    export default {
        name: 'thea-contact-form',
        data() {
            return {
                greeting: 'Contact Form'
            };
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>