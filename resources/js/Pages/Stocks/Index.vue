<template>
    <jig-layout>
        <template #header>
            <div class="flex flex-wrap items-center justify-between w-full px-4">
                <inertia-link :href="route('admin.dashboard')" class="text-xl font-black text-white"><i class="fas fa-arrow-left"></i> Back</inertia-link>
                <div class="flex gap-x-2">
                    <inertia-button v-if="can.create" @click="manageAllStocks(null)" classes="bg-pink-500 hover:bg-pink-200 text-white my-2 mr-0"><i class="fas fa-boxs"></i> Gérer les stocks</inertia-button>
                    <inertia-button v-if="can.create" :href="route('admin.stocks.create')" classes="bg-pink-500 hover:bg-pink-200 text-white my-2 ml-0 rounded-r-lg" 
                                    style="margin-left: -15px;border-radius:0 0.5rem 0.5rem 0 !important"><i class="fas fa-share-square"></i></inertia-button>
                    <!-- <inertia-button v-if="can.create" :href="route('admin.stocks.create')" classes="bg-green-100 hover:bg-green-200 text-primary m-2"><i class="fas fa-plus"></i> Nouveau stock</inertia-button> -->
                    <inertia-button @click.native="$refreshDt(tableId)" classes="bg-indigo-100 hover:bg-green-200 text-indigo my-2"><i class="fas fa-redo"></i> Refresh</inertia-button>
                    <inertia-button :disabled="false" @click="print()" classes="bg-purple-500 hover:bg-purple-300 text-white my-2"><i class="fas fa-print"></i> Print</inertia-button>
                    <inertia-button :disabled="false" @click="_export()" classes="bg-green-500 hover:bg-green-300 text-white my-2"><i class="far fa-file-excel"></i> Export</inertia-button>
                </div>

            </div>
        </template>
        <div v-if="can.viewAny" class="flex flex-wrap px-4">
            <div class="w-full z-10 flex-auto bg-white md:rounded-md md:shadow-md">
                <h3 class="w-full p-4 text-lg font-black sm:rounded-t-lg bg-primary-100">
                    <i class="mr-2 fas fa-bars"></i> List of All Stocks
                    <button style="margin-top: -5px;" class="float-right pl-2 pt-1 pb-1 pr-1 bg-primary 0 text-white rounded hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out" 
                        type="button" @click="expandFilters()">
                        <i class="mr-2 fas fa-filter"></i> 
                    </button>
                </h3>
                <div class="p-4 transition-all bg-indigo-50 " v-if="filters_expanded" >
                    <form @submit.prevent="submmitFilters">
                        <div class="flex">
                            <div class="flex-1 mr-2">
                                <div class=" w-full max-w-md">
                                    <jet-label for="estum" value="Établissement" />
                                    <infinite-select :per-page="15" :api-url="route('api.establishments.index')" @close="submmitFilters"
                                                    id="estum" name="estum" v-model="tableParamsForm.estum" label="name"
                                    ></infinite-select>
                                </div>
                            </div>
                            <div class="flex-1 ">
                                <div class="w-full max-w-md">
                                    <jet-label for="medicament" value="Medicament" />
                                    <infinite-select :per-page="15" :api-url="route('api.medicaments.index')" @close="submmitFilters"
                                                    id="medicament" name="medicament" v-model="tableParamsForm.medicament" label="title"
                                    ></infinite-select>
                                </div>
                            </div>
                            <div class="flex-1 ">
                                <div class="w-full max-w-md">
                                    <jet-label for="status" value="Status" />
                                    <infinite-select :per-page="15" :api-url="route('api.stock-statuses.index')" @close="submmitFilters"
                                                    id="status" name="status" v-model="tableParamsForm.status" label="name"
                                    ></infinite-select>
                                </div>
                            </div>
                        </div>
                        <div class="flex mt-2">
                            <div class="flex-initial mr-6">
                                <jet-label for="date_dexpiration_from" value="Date D'expiration : Du" />
                                <flat-pickr class="cost_select" v-model="tableParamsForm.date_dexpiration_from"></flat-pickr>
                            </div>
                            <div class="flex-initial mr-2">
                                <jet-label for="date_dexpiration_to" value="Jusqu'à" />
                                <flat-pickr class="cost_select" v-model="tableParamsForm.date_dexpiration_to"></flat-pickr>
                            </div>
                             <div class="flex-1 ml-14">
                                <div class="flex">
                                    <div class="flex-initial mr-10">
                                        <div class="w-full max-w-xs">
                                        <jet-label for="quantite" value="Quantite" />
                                            <jet-input class="w-full" type="number" min="0" step="1" id="quantite" name="quantite" v-model="tableParamsForm.quantite"></jet-input>
                                        </div>
                                    </div>
                                    <div class=" flex-initial ml-12">
                                        <div class="w-full max-w-xs">
                                            <jet-label for="condition" value="Condition" />
                                            <select class="w-full cost_select" v-model="tableParamsForm.condition"  id="condition" name="condition">
                                                <option value="equal">Égale &#61;</option>
                                                <option value="higher">Supérieure &#62;</option>
                                                <option value="less">Inférieur &#60;</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- submmitFilters  reset-->
                            <div class="flex-none">
                                <inertia-button type="button" class="mt-4 mr-4 text-white font-semibold bg-success disabled:opacity-25" @click="ResetFillters()">Reset</inertia-button>
                                <inertia-button type="submit" class="mt-4 mr-14 text-white font-semibold bg-primary disabled:opacity-25">Submit</inertia-button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="p-4">
                    <dt-component
                        :table-id="tableId"
                        :ajax-url="ajaxUrl"
                        :columns="columns"
                        :ajax-params="tableParams"
                        @show-model="showModel"
                        @edit-model="editModel"
                        @show-history="showHistory"
                        @delete-model="confirmDeletion"
                        @manage-stock="manageStock"
                        :defaultOrderColumn="id"
                        :defaultOrderDirection="desc"
                    />
                </div>
                <jet-confirmation-modal title="Confirm Deletion" :show="confirmDelete">
                    <template v-slot:content>
                        <div>Are you sure you want to delete this record?</div>
                    </template>
                    <template v-slot:footer>
                        <div class="flex justify-end gap-x-2">
                            <inertia-button as="button" type="button" @click.native.stop="cancelDelete" class="bg-red-500">Cancel</inertia-button>
                            <inertia-button as="button" type="button" @click.native.prevent="deleteModel" class="bg-green-500">Yes, Delete</inertia-button>
                        </div>
                    </template>
                </jet-confirmation-modal>
                <div v-if="showModal && currentModel">
                    <jig-modal
                        :show="showModal"
                        corner-class="rounded-lg"
                        position-class="align-middle"
                        @close="currentModel = null; showModal = false">

                        <template #title>Show Stock #{{currentModel.id}}</template>
                        <show-stocks-form :model="currentModel"></show-stocks-form>
                        <template #footer>
                            <inertia-button class="px-4 text-white bg-primary" @click="showModal = false; currentModel = null">Close</inertia-button>
                        </template>
                    </jig-modal>
                </div>
            </div>
        </div>
        <div v-else class="p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md ">
            You are not authorized to view a list of Stocks
        </div>
        
        <!-- Manager Stocks Modal -->
        <vue-final-modal v-model="manageStockModal" :drag="true" :resize="true"
            :resize-directions="['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']" classes="modal-container" content-class="modal-content">
            <button class="modal__close" @click="manageStockModal = false">
                <span>X</span>
            </button>
            <span class="modal__title">Gérer les stocks</span>
            <div class="modal__content w-auto">
                <manage-stock-form :form="stockForm" :user_establishment="user_establishment" :has_administrator="has_administrator" @success="onManageStockSuccess" @error="onManageStockError" ></manage-stock-form>
            </div>
        </vue-final-modal>
    </jig-layout>
</template>

<script>
    import JigLayout from "@/Layouts/JigLayout.vue";
    import JetInput from "@/Jetstream/Input.vue";
    import JetConfirmationModal from "@/Jetstream/ConfirmationModal.vue";
    import JetDialogModal from "@/Jetstream/DialogModal.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JigToggle from "@/JigComponents/JigToggle.vue";
    import JigModal from "@/JigComponents/JigModal.vue";
    import DtComponent from "@/JigComponents/DtComponent.vue";
    import DisplayMixin from "@/Mixins/DisplayMixin.js";
    import ShowStocksForm from "@/Pages/Stocks/ShowForm.vue";
    import { defineComponent } from "vue";
    import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal';
    import {useForm} from "@inertiajs/inertia-vue3";
    import JetLabel from "@/Jetstream/Label.vue";
    import ManageStockForm from "@/Pages/Stocks/ManageStockForm.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';
    
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';

    export default defineComponent({
        name: "Index",
        components: {
            DtComponent,
            JigToggle,
            InertiaButton,
            JetConfirmationModal,
            JetDialogModal,
            JigModal,
            JigLayout,
            ShowStocksForm,
            VueFinalModal,
            ModalsContainer,
            ManageStockForm,
            JetLabel,
            InfiniteSelect,
            JetInput,
            flatPickr,
        },
        props: {
            can: Object,
            columns: Array,
            user_establishment: Array,
            has_administrator: Boolean,
        },
        inject: ["$refreshDt","$dayjs"],
        data() {
            return {
                tableId: 'stocks-dt',
                tableParams: {
                    "estum_id": null,
                    "medicament_id": null,
                    "status_period": null,
                    date_dexpiration_from: null,
                    date_dexpiration_to: null,
                    quantite: null,
                    condition: 'equal',
                },
                tableParamsForm: useForm({
                    "estum": null,
                    "medicament": null,
                    "status": null,
                    date_dexpiration_from: null,
                    date_dexpiration_to: null,
                    quantite: null,
                    condition: 'equal',
                }, {remember: false}),
                datatable: null,
                confirmDelete: false,
                currentModel: null,
                withDisabled: false,
                showModal: false,
                manageStockModal: false,
                filters_expanded: false,
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
                    "code_label": "N° Bulletin",
                }, {remember: false}),
            }
        },
        mixins: [
            DisplayMixin,
        ],
        mounted() {
        },
        computed: {
            ajaxUrl() {
                const url = new URL(this.route('api.stocks.dt'));
                return url.href;
            }
        },
        methods: {
            manageAllStocks(){
                this.manageStockModal = true;
            },
            showModel(model) {
                axios.get(route('api.stocks.show',model)).then(res => {
                    this.currentModel = res.data.payload;
                    this.showModal = true;
                });
                // this.$inertia.visit(this.route('admin.stocks.show',model.id));
            },
            manageStock(model){
                axios.get(route('api.stocks.show',model)).then(res => {
                    this.currentModel = res.data.payload;
                    this.stockForm.estum = this.currentModel.estum;
                    this.stockForm.type = "consommation";
                    this.stockForm.code_label = "N° Ordonnance";
                    this.stockForm.detaine = null;
                    this.stockForm.ordonnance = "";
                    this.stockForm.medicament = this.currentModel.medicament;
                    this.stockForm.stock = this.currentModel;
                    this.stockForm.quantite = 0;
                    this.stockForm.comment = "";
                    this.manageStockModal = true;
                });
            },
            showHistory(model){
                this.$inertia.visit(this.route('admin.stock-histories.index',{'stock_id' : model ? model.id : null } ));
            },
            editModel(model) {
                this.$inertia.visit(this.route('admin.stocks.edit',model.id));
            },
            confirmDeletion(model) {
                this.currentModel = model;
                this.confirmDelete = true;
            },
            cancelDelete() {
                this.currentModel = false;
                this.confirmDelete = false;
            },
            async deleteModel() {
                const vm = this;
                this.confirmDelete = false;
                if (this.currentModel) {
                    this.$inertia.delete(route('admin.stocks.destroy', vm.currentModel),{
                        onFinish: res => {
                            this.displayNotification('success', "Item deleted.");
                            vm.$refreshDt(vm.tableId);
                        },
                        onError: err => {
                            console.log(err);
                            this.displayNotification('error', "There was an error while deleting the item.");
                        }
                    });
                }
            },
            async toggleActivation(enabled,model) {
                const vm = this;
                console.log(enabled);
                axios.put(route(`api.stocks.update`,model.id),{
                    enabled: enabled
                }).then(res => {
                    this.displayNotification('success', res.data.message);
                    this.$refreshDt(this.tableId);
                })
            },
            onManageStockSuccess(msg) {
                this.displayNotification('success',msg);
                this.stockForm.quantite = null;
                this.manageStockModal = false;
                this.$refreshDt(this.tableId);
            },
            onManageStockError(msg){
                this.displayNotification('error',msg);
            },
            expandFilters(){
                this.filters_expanded = ! this.filters_expanded;
            },
            submmitFilters(){
                this.tableParams.estum_id = this.tableParamsForm.estum ? this.tableParamsForm.estum.id : null;
                this.tableParams.medicament_id = this.tableParamsForm.medicament ? this.tableParamsForm.medicament.id : null;
                this.tableParams.status_period = this.tableParamsForm.status ? this.tableParamsForm.status.period : null;
                this.tableParams.date_dexpiration_from = this.tableParamsForm.date_dexpiration_from ? this.tableParamsForm.date_dexpiration_from : null;
                this.tableParams.date_dexpiration_to = this.tableParamsForm.date_dexpiration_to ? this.tableParamsForm.date_dexpiration_to : null;
                this.tableParams.quantite = this.tableParamsForm.quantite ? this.tableParamsForm.quantite : null;
                this.tableParams.condition = this.tableParamsForm.condition ? this.tableParamsForm.condition : null;
                this.$refreshDt(this.tableId);
            },
            ResetFillters(){
                this.tableParamsForm.estum = null;
                this.tableParamsForm.medicament = null;
                this.tableParamsForm.status = null;
                this.tableParamsForm.date_dexpiration_from = null;
                this.tableParamsForm.date_dexpiration_to = null;
                this.tableParamsForm.quantite = null;
                this.tableParamsForm.condition = null;
                this.submmitFilters();
            },
            async print() {
                await axios.get(this.route('api.stocks.print',this.tableParams), { responseType: "blob" }).then(res => {
                    this.displayNotification('success', "Stock Printed");
                    const blob = new Blob([res.data], { type: "application/pdf" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = 'stock.pdf';
                    link.click();
                    URL.revokeObjectURL(link.href);
                }).catch(err => {
                    this.displayNotification('error', err.response?.data?.message || err.message || err);
                }).finally(res => {
                    // this.displayNotification('success', "finally");
                });
            },
            async _export(){
                await axios.get(this.route('api.stocks.export',this.tableParams), { responseType: "blob" }).then(res => {
                    this.displayNotification('success', "Stock Exported");
                    const blob = new Blob([res.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = 'stock.xlsx';
                    link.click();
                    URL.revokeObjectURL(link.href);
                }).catch(err => {
                    this.displayNotification('error', err.response?.data?.message || err.message || err);
                }).finally(res => {
                    // this.displayNotification('success', "finally");
                });
            }
        }
    });
</script>


<style scoped>
   .cost_select{
        border-color: #e5e7eb;
        background: #f9fafb;
    }
    ::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    ::v-deep .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
    }
    .modal__title {
    margin: 0 2rem 0 0;
    font-size: 1.5rem;
    font-weight: 700;
    }
    .modal__content {
    flex-grow: 1;
    overflow-y: auto;
    }
    .modal__action {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    padding: 1rem 0 0;
    }
    .modal__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    }
    .dark-mode div::v-deep .modal-content {
        border-color: #2d3748;
        background-color: #1a202c;
    }
</style>
