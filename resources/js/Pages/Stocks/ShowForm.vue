<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Établissement:</template>
            {{ model.estum ? model.estum.name : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Medicament:</template>
            {{ model.medicament ? model.medicament.title : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Date Production:</template>
            {{ model.date_production }}
        </jig-dd>
        <jig-dd>
            <template #dt>Date D'expiration:</template>
            {{ model.date_dexpiration }}
        </jig-dd>
        <jig-dd>
            <template #dt>Quantite:</template>
            {{ model.quantite }}
        </jig-dd>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowStocksForm",
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
