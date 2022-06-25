<template>
    <dl class="gap-4">
        
        <jig-dd v-if="model.profile_photo_url">
            <template #dt>Photo:</template>
            <img :src="model.profile_photo_url" :alt="model.first_name" class="h-20 w-20 object-cover">
        </jig-dd>
        <jig-dd>
            <template #dt>Name:</template>
            {{ model.name }}
        </jig-dd>
        <jig-dd>
            <template #dt>Email:</template>
            {{ model.email }}
        </jig-dd>
        <!-- <jig-dd>
            <template #dt>Email Verified At:</template>
            {{ model.email_verified_at }}
        </jig-dd> -->
        <jig-dd v-if="model.roles">
            <template #dt>Roles:</template>
            <span v-for="(role, idx) of model.roles" :key="idx">{{role.name}}</span> ,
        </jig-dd>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    export default {
        name: "ShowUsersForm",
        props: {
            model: Object,
        },
        components: {
            InertiaButton,
            JigDd,
        },
        data() {
            return {}
        },
        mounted() {},
        computed: {
            flash() {
                return this.$page.props.flash || {}
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
