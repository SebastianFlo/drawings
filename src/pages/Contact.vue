<template>
    <div class="contact-container">
        <md-layout md-align="center" class="flex-vert">
            {{ greeting }}

        </md-layout>
        <contact-form></contact-form>
    </div>
</template>

<script>
    import ContactForm from '@/modules/contact/components/ContactForm';

    export default {
        name: 'thea-contact',
        data() {
            return {
                greeting: 'Welcome To Thea\'s Contact Page'
            };
        },
        components: {
            ContactForm
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