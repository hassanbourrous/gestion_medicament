<template>
    <jig-layout>
        <template #header>
            <div class="flex flex-wrap items-center justify-between w-full px-4">
                <inertia-link :href="route('admin.stocks.index')"
                              class="text-xl font-black text-white"><i
                        class="fas fa-arrow-left"></i> Retour | Nouveau Stock
                </inertia-link>
            </div>
        </template>
        <div class="flex flex-wrap px-4">
            <div class="z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md">
                <!-- <create-stocks-form @success="onSuccess" @error="onError"/> -->
                <manage-stock-form :form="stockForm" :user_establishment="user_establishment" :has_administrator="has_administrator" @success="onManageStockSuccess" @error="onManageStockError" ></manage-stock-form>

            </div>
        </div>
    </jig-layout>
</template>

<script>
    import JigLayout from "@/Layouts/JigLayout.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import CreateStocksForm from "./CreateForm.vue";
    import DisplayMixin from "@/Mixins/DisplayMixin.js";
    import { defineComponent } from "vue";
    import ManageStockForm from "@/Pages/Stocks/ManageStockForm.vue";
    import {useForm} from "@inertiajs/inertia-vue3";

    export default defineComponent({
        name: "CreateStocks",
        components: {
            InertiaButton,
            JigLayout,
            CreateStocksForm,
            ManageStockForm,
        },
        props: {
            user_establishment: Array,
            has_administrator: Boolean,
        },
        data() {
            return {
                stockForm: useForm({
                    type: "",
                    
                    quantite: null,

                    date_dexpiration: null,
                    date_production: null,
                    "estum": null,
                    "medicament": null,
                    "region": null,

                    comment: null,
                    ordonnance: null,
                    "detaine": null,
                    "etab": null,
                    "stock": null,
                    "user": null,
                }, {remember: false}),
            }
        },
        mixins: [DisplayMixin],
        mounted() {},
        computed: {
            flash() {
                return this.$page.props.flash || {}
            }
        },
        methods: {
            onManageStockSuccess(msg) {
                this.displayNotification('success',msg);
                this.stockForm.quantite = null;
                // this.$inertia.visit(route('admin.stocks.index'));
            },
            onManageStockError(msg) {
                this.displayNotification('error',msg);
            }
        }
    });
</script>

<style scoped>

</style>
