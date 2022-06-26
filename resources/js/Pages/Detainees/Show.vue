<template>
    <jig-layout>
        <template #header>
            <div
                class="flex flex-wrap items-center justify-between w-full px-4"
            >
                <inertia-link
                    :href="route('admin.detainees.index')"
                    class="text-2xl font-black text-white"
                ><i class="fas fa-arrow-left"></i> Retour | Détails de Détenu
                    #{{ model.id }}</inertia-link>
            </div>
        </template>
        <div v-if="model.can.view" class="flex flex-wrap px-4">
            <div
                class="z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"
            >
                <show-detainees-form :model="model"></show-detainees-form>
            </div>
        </div>
        <div v-else class="px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4">
            You don't have permission to view this resource.
        </div>
    </jig-layout>
</template>

<script>
    import JigLayout from "@/Layouts/JigLayout.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import ShowDetaineesForm from "./ShowForm.vue"
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowDetainee",
        components: {
            InertiaButton,
            JigLayout,
            ShowDetaineesForm,
        },
        props: {
            model: Object
        },
        data() {
            return {};
        },
        mounted() {},
        methods: {}
    });
</script>

<style scoped></style>

