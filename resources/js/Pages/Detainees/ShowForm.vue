<template>
    <dl class="gap-4">
        <jig-dd v-if="model.profile_photo_url">
            <template #dt>Photo:</template>
            <!-- {{ model.profile_photo_path }} -->
            <img :src="model.profile_photo_url" :alt="model.first_name" class="h-20 w-20 object-cover">
        </jig-dd>
        <jig-dd>
            <template #dt>First Name:</template>
            {{ model.first_name }}
        </jig-dd>
        <jig-dd>
            <template #dt>Last Name:</template>
            {{ model.last_name }}
        </jig-dd>
        <jig-dd>
            <template #dt>establishment:</template>
            {{ model.establishment ? model.establishment.name : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Cin:</template>
            {{ model.cin }}
        </jig-dd>
        <jig-dd>
            <template #dt>Code:</template>
            {{ model.code }}
        </jig-dd>
        <jig-dd>
            <template #dt>Birthday:</template>
            {{ model.birthday }}
        </jig-dd>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowDetaineesForm",
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
    });
</script>

<style scoped>

</style>
