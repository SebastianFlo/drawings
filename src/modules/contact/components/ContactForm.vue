<template>
    <div>
        <md-layout md-align="center">
            {{ greeting }}
        </md-layout>
        <form name="contactForm" v-bind:ref="'contactForm'">
            <md-layout md-align="center">
                <label for="name">Name</label>
                <input type="text" name="name" required v-model="name">
            </md-layout>
            <md-layout md-align="center">
                <label for="email">Email</label>
                <input type="email" name="email" required v-model="email">
            </md-layout>
            <md-layout md-align="center">
                <label for="message">Message</label>
                <input type="textarea" name="message" required v-model="message">
            </md-layout>
            <md-layout md-align="center">
                <md-button :disabled="!form.checkValidity()" type="submit" class="md-raised">Send {{ form.checkValidity() }}</md-button>
            </md-layout>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'thea-contact-form',
        data() {
            return {
                greeting: 'Contact Form',
                email: '',
                name: '',
                message: '',
                mounted: false,
                form: {
                    checkValidity () {
                        return false;
                    }
                }
            };
        },
        mounted () {
            this.mounted = true;
            this.form = this.$refs.contactForm;
        },
        methods: {
            submit () {
                console.log('Submitted');
            }
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>