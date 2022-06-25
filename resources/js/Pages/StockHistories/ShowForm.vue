<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Établissement:</template>
            {{ model.stock ? ( model.stock.estum ? model.stock.estum.name : "-" ): '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Type:</template>
            {{ model.type }}
        </jig-dd>
        <jig-dd>
            <template #dt>Medicament:</template>
            {{ model.stock ? ( model.stock.medicament ? model.stock.medicament.title : "-" ): '-' }}
        </jig-dd>
        <jig-dd v-if="model.type == 'dr_provenance'">
            <template #dt >Region:</template>
            {{ model.region ? model.region.name:'-' }}
        </jig-dd>
        <jig-dd v-if="model.type == 'etab_provenance' || model.type =='etab_transfere'">
            <template #dt >Établissement:</template>
            {{ model.etab ? model.etab.name:'-' }}
        </jig-dd>
        <jig-dd v-if="model.type == 'consommation'">
            <template #dt>Detaine:</template>
            {{ model.detaine ? model.detaine.title : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt v-if="model.type == 'dr_provenance' ||model.type == 'etab_provenance'||model.type == 'etab_transfere' || model.type == 'achats'|| model.type == 'detruit' ">N° Bulletin:</template>
            <template #dt v-else>N° Ordonnance:</template>
            {{ model.ordonnance }}
        </jig-dd>
        <jig-dd>
            <template #dt>Quantite:</template>
            {{ model.quantite }}
        </jig-dd>
        <jig-dd>
            <template #dt>User:</template>
            {{ model.user ? model.user.name : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Date:</template>
            {{ model.created_at ? model.created_at : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Comment:</template>
            {{ model.comment }}
        </jig-dd>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowStockHistoriesForm",
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
