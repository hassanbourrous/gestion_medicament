<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Category:</template>
            {{ model.category ? model.category.name : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Nom Commercial:</template>
            {{ model.nom_commercial }}
        </jig-dd>
        <jig-dd>
            <template #dt>Dosage:</template>
            {{ model.dosage }}
        </jig-dd>
        <jig-dd>
            <template #dt>Presentation:</template>
            {{ model.presentation }}
        </jig-dd>
        <jig-dd>
            <template #dt>Ref:</template>
            {{ model.ref }}
        </jig-dd>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowMedicamentsForm",
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
