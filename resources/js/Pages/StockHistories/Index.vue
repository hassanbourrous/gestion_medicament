<template>
    <jig-layout>
        <template #header>
            <div class="flex flex-wrap items-center justify-between w-full px-4">
                <inertia-link v-if="stock" :href="route('admin.stocks.index')" class="text-xl font-black text-white"><i class="fas fa-arrow-left"></i> Back</inertia-link>
                <inertia-link v-else :href="route('admin.dashboard')" class="text-xl font-black text-white"><i class="fas fa-arrow-left"></i> Back</inertia-link>
                <div class="flex gap-x-2">
                    <!-- <inertia-button v-if="can.create" :href="route('admin.stock-histories.create')" classes="bg-green-100 hover:bg-green-200 text-primary"><i class="fas fa-plus"></i> New
                        Stock History</inertia-button> -->
                    <inertia-button @click.native="$refreshDt(tableId)" classes="bg-indigo-100 hover:bg-green-200 text-indigo my-2"><i class="fas fa-redo"></i> Refresh</inertia-button>
                    <inertia-button :disabled="false" @click="print()" classes="bg-purple-500 hover:bg-purple-300 text-white my-2"><i class="fas fa-print"></i> Print</inertia-button>
                    <inertia-button :disabled="false" @click="_export()" classes="bg-green-500 hover:bg-green-300 text-white my-2"><i class="far fa-file-excel"></i> Export</inertia-button>
                </div>
            </div>
        </template>
        <div v-if="can.viewAny" class="flex flex-wrap px-4">
            <div class="w-full z-10 flex-auto bg-white md:rounded-md md:shadow-md" >
                <h3 class="w-full p-4  text-lg font-black sm:rounded-t-lg bg-primary-100">
                    <i class="mr-2 fas fa-bars"></i> List of All Stock Histories 
                    <inertia-link v-if="stock" :href="route('admin.stocks.show' , stock.id)"  class="text-xl font-black text-primary"> > {{stock.title}}</inertia-link>
                    <button  v-if="stock" style="margin-top: -5px;"     type="button" @click="expandInfo()"
                        class="pl-2 pt-1 pb-1 pr-1  transition duration-150 ease-in-out" >
                        <i v-if="!extends_info" class="fas fa-angle-down"></i>
                        <i v-if="extends_info" class="fas fa-angle-up"></i>
                    </button>
                    <button style="margin-top: -5px;" class="float-right pl-2 pt-1 pb-1 pr-1 bg-primary 0 text-white rounded hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out" 
                        type="button" @click="expandFilters()">
                        <i class="mr-2 fas fa-filter"></i> 
                    </button>
                </h3>
                
                <dl class="gap-4 p-4 " v-if="stock && extends_info">
                    <show-stocks-form :model="stock"></show-stocks-form>
                </dl>

                <div class="p-4 transition-all bg-indigo-50 " v-if="filters_expanded" >
                    <form @submit.prevent="submmitFilters">
                        <div class="flex">
                            <div class="flex-1 mr-2">
                                <div class=" w-full max-w-md">
                                    <jet-label for="estum" value="Établissement" />
                                    <infinite-select :per-page="15" :api-url="route('api.establishments.index')" @option:selected="submmitFilters"
                                                    id="estum" name="estum" v-model="tableParamsForm.estum" label="name"
                                    ></infinite-select>
                                </div>
                            </div>
                            <div class="flex-1 mr-2">
                                <div class=" max-w-md">
                                    <jet-label for="type" value="Type d'Action" />
                                    <select class="w-full cost_select" v-model="tableParamsForm.type"  id="type" name="type" @change="onTypeChange($event)">
                                        <option value="">Select Action type ...</option>
                                        <option value="dr_provenance">Provenance de la DR </option>
                                        <option value="etab_provenance">Provenance d'un établissement</option>
                                        <option value="achats">Achats</option>
                                        <option value="etab_transfere">Envoyé à un établissment</option>
                                        <option value="consommation">Consommation</option>
                                        <option value="detruit">Détruit</option>
                                        <option value="update">Mettre à jour direct de stock</option>
                                    </select>
                                </div>
                            </div>
                            <div class="flex-1 mr-2" v-if="tableParamsForm.type == 'dr_provenance'">
                                <div class="w-full max-w-md">
                                    <jet-label for="region" value="Region" />
                                    <infinite-select :per-page="15" :api-url="route('api.regions.index')" @option:selected="submmitFilters"
                                                    id="region" name="region"
                                                    v-model="tableParamsForm.region" label="name"
                                    ></infinite-select>
                                </div>
                            </div>
                            <div class="flex-1 mr-2"  v-if="tableParamsForm.type == 'etab_provenance' || tableParamsForm.type == 'etab_transfere'">
                                <div class="w-full max-w-md">
                                    <jet-label for="etab" value="Établissement" />
                                    <infinite-select :per-page="15" :api-url="route('api.establishments.index')" :queryParams="{'all':true,'deferent_then' : tableParamsForm.estum ? tableParamsForm.estum.id  : null}"
                                                    id="etab" name="etab" :reaictivo="true" @option:selected="submmitFilters"
                                                    v-model="tableParamsForm.etab" label="name"
                                    ></infinite-select>
                                </div>
                            </div>
                            <div class="flex-1 " v-if="tableParamsForm.type == 'consommation'">
                                <div class="w-full max-w-md">
                                    <jet-label for="detaine" value="Detaine" />
                                    <infinite-select :per-page="15" :api-url="route('api.detainees.index')" :queryParams="{'selected_etab' : tableParamsForm.estum ? tableParamsForm.estum.id  : null}"
                                                    id="detaine" name="detaine" :reaictivo="true"  @option:selected="submmitFilters"
                                                    v-model="tableParamsForm.detaine" label="title"
                                    ></infinite-select>
                                </div>
                            </div>
                        </div>
                        <div class="flex mt-2" >
                            <div class="flex-1" v-if="tableParamsForm.type != null && tableParamsForm.type != '' && tableParamsForm.type != 'update' ">
                                <div class="flex">
                                    <div class="flex-1 mr-2">
                                        <div class="w-full max-w-md">
                                            <jet-label for="code" > {{code_label}} </jet-label>
                                            <jet-input class="w-full" type="text" id="code" name="code" v-model="tableParamsForm.code"></jet-input>
                                        </div>
                                    </div>
                                    <div class=" flex-1 mr-8">
                                        <div class="w-full max-w-xs">
                                            <jet-label for="code_condition" value="Condition" />
                                            <select class="w-full cost_select" v-model="tableParamsForm.code_condition"  id="code_condition" name="code_condition">
                                                <option value="equal">Égale &#61;</option>
                                                <option value="contain">Contenir *</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="flex-1 mr-2">
                                <div class="w-full max-w-md">
                                    <jet-label for="medicament" value="Medicament" />
                                    <infinite-select :per-page="15" :api-url="route('api.medicaments.index')" @option:selected="submmitFilters"
                                        id="medicament" name="medicament" v-model="tableParamsForm.medicament" label="title"
                                    ></infinite-select>
                                </div>
                            </div>
                            <div class="flex-1" v-if="tableParamsForm.medicament">
                                <div class="w-full max-w-md">
                                    <jet-label for="stock" value="Stock" />
                                    <infinite-select :per-page="15" :api-url="route('api.stocks.index')" @option:selected="stockChanged"
                                        :queryParams="{'selected_etab' : tableParamsForm.estum ? tableParamsForm.estum.id  : null,'medicaments_id' : tableParamsForm.medicament ? tableParamsForm.medicament.id  : null }"
                                        id="stock" name="stock" v-model="tableParamsForm.stock" label="title" :reaictivo="true"
                                    ></infinite-select>
                                </div>
                            </div>
                        </div>
                        <div class="flex mt-2">
                            <div class="flex-initial mr-6">
                                <jet-label for="date_from" value="Date : Du" />
                                <flat-pickr class="cost_select" v-model="tableParamsForm.date_from"></flat-pickr>
                            </div>
                            <div class="flex-initial ">
                                <jet-label for="date_to" value="Jusqu'à" />
                                <flat-pickr class="cost_select" v-model="tableParamsForm.date_to"></flat-pickr>
                            </div>
                             <div class="flex-1 ml-14">
                                <div class="flex">
                                    <div class=" -mr-8 flex-initial mr-10">
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
                        @delete-model="confirmDeletion"
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
                        <template #title>Show Stock History #{{currentModel.id}}</template>
                        <show-stock-histories-form :model="currentModel"></show-stock-histories-form>
                        <template #footer>
                            <inertia-button class="px-4 text-white bg-primary" @click="showModal = false; currentModel = null">Close</inertia-button>
                        </template>
                    </jig-modal>
                </div>
            </div>
        </div>
        <div v-else class="p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md ">
            You are not authorized to view a list of Stock History
        </div>
    </jig-layout>
</template>

<script>
    import JigLayout from "@/Layouts/JigLayout.vue";
    import JetConfirmationModal from "@/Jetstream/ConfirmationModal.vue";
    import JetDialogModal from "@/Jetstream/DialogModal.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JigToggle from "@/JigComponents/JigToggle.vue";
    import JigModal from "@/JigComponents/JigModal.vue";
    import DtComponent from "@/JigComponents/DtComponent.vue";
    import DisplayMixin from "@/Mixins/DisplayMixin.js";
    import ShowStockHistoriesForm from "@/Pages/StockHistories/ShowForm.vue";
    import { defineComponent } from "vue";
    import JetInput from "@/Jetstream/Input.vue";
    import JetLabel from "@/Jetstream/Label.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';
    import {useForm} from "@inertiajs/inertia-vue3";
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    
    import ShowStocksForm from "@/Pages/Stocks/ShowForm.vue"

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
            ShowStockHistoriesForm,
            JetLabel,
            InfiniteSelect,
            JetInput,
            flatPickr,
            ShowStocksForm,
        },
        props: {
            can: Object,
            columns: Array,
            columnDefs: Array,
            stock: Object,
        },
        inject: ["$refreshDt","$dayjs"],
        data() {
            return {
                tableId: 'stock-histories-dt',
                tableParams: {
                    "estum_id": null,
                    "type": null,
                    region_id: null,
                    etab_id: null,
                    detaine_id: null,
                    code: null,
                    code_condition: 'equal',
                    "medicament_id": null,
                    "stock_id": null,
                    date_from: null,
                    date_to: null,
                    quantite: null,
                    condition: 'equal',
                },
                tableParamsForm: useForm({
                    "estum": null,
                    "type": null,
                    region: null,
                    etab: null,
                    detaine: null,
                    code: null,
                    code_condition: 'equal',
                    "medicament": null,
                    "stock": null,
                    date_from: null,
                    date_to: null,
                    quantite: null,
                    condition: 'equal',
                }, {remember: false}),
                datatable: null,
                confirmDelete: false,
                currentModel: null,
                withDisabled: false,
                showModal: false,
                filters_expanded: false,
                code_label: "N° Bulletin",
                extends_info: false,
            }
        },
        mixins: [
            DisplayMixin,
        ],
        mounted() {
        },
        computed: {
            ajaxUrl() {
                const url = new URL(this.route('api.stock-histories.dt' ));
                /*if (this.withDisabled) {
                    url.searchParams.append('include-disabled',true);
                }*/
                if (this.stock) {
                    url.searchParams.append('stock_id',this.stock.id);
                    this.tableParamsForm.stock = this.stock;
                    this.tableParams.stock_id = this.stock.id;
                }
                return url.href;
            }
        },
        methods: {
            showModel(model) {
                axios.get(route('api.stock-histories.show',model)).then(res => {
                    this.currentModel = res.data.payload;
                    this.showModal = true;
                })
                // this.$inertia.visit(this.route('admin.stock-histories.show',model.id));
            },
            editModel(model) {
                this.$inertia.visit(this.route('admin.stock-histories.edit',model.id));
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
                    this.$inertia.delete(route('admin.stock-histories.destroy', vm.currentModel),{
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
                axios.put(route(`api.stock-histories.update`,model.id),{
                    enabled: enabled
                }).then(res => {
                    this.displayNotification('success', res.data.message);
                    this.$refreshDt(this.tableId);
                })
            },
            expandFilters(){
                this.filters_expanded = ! this.filters_expanded;
            },
            onTypeChange(event){
                if(event.target.value != ""){
                    if(event.target.value == "consommation"){
                        this.code_label = "N° Ordonnance";
                    }else if(event.target.value == "achats"){
                        this.code_label = "Bon d'achat";
                    }else if(event.target.value == "detruit"){
                        this.code_label = "N° PV";
                    }else{
                        this.code_label = "N° Bulletin";
                    }
                }
            },
            submmitFilters(){
                this.tableParams.type = this.tableParamsForm.type ? this.tableParamsForm.type : null;
                this.tableParams.estum_id = this.tableParamsForm.estum ? this.tableParamsForm.estum.id : null;
                this.tableParams.region_id = this.tableParamsForm.region ? this.tableParamsForm.region.id : null;
                this.tableParams.etab_id = this.tableParamsForm.etab ? this.tableParamsForm.etab.id : null;
                this.tableParams.detaine_id = this.tableParamsForm.detaine ? this.tableParamsForm.detaine.id : null;
                this.tableParams.medicament_id = this.tableParamsForm.medicament ? this.tableParamsForm.medicament.id : null;
                if(this.stock == null ){
                    this.tableParams.stock_id = this.tableParamsForm.stock ? this.tableParamsForm.stock.id : null;
                }
                this.tableParams.date_from = this.tableParamsForm.date_from ? this.tableParamsForm.date_from : null;
                this.tableParams.date_to = this.tableParamsForm.date_to ? this.tableParamsForm.date_to : null;
                this.tableParams.quantite = this.tableParamsForm.quantite ? this.tableParamsForm.quantite : null;
                this.tableParams.condition = this.tableParamsForm.condition ? this.tableParamsForm.condition : 'equal';
                this.tableParams.code = this.tableParamsForm.code ? this.tableParamsForm.code : null;
                this.tableParams.code_condition = this.tableParamsForm.code_condition ? this.tableParamsForm.code_condition : 'equal';
                this.$refreshDt(this.tableId);
            },
            ResetFillters(){
                this.tableParamsForm.estum =  null;
                this.tableParamsForm.type =  null;
                this.tableParamsForm.region =  null;
                this.tableParamsForm.etab =  null;
                this.tableParamsForm.detaine =  null;
                this.tableParamsForm.code =  null;
                this.tableParamsForm.code_condition =  'equal';
                this.tableParamsForm.medicament =  null;
                if(this.stock == null ){
                    this.tableParamsForm.stock =  null;
                }
                this.tableParamsForm.date_from =  null;
                this.tableParamsForm.date_to =  null;
                this.tableParamsForm.quantite =  null;
                this.tableParamsForm.condition =  'equal';
                this.submmitFilters();
            },
            stockChanged(){
                // this.stock = this.tableParamsForm.stock;
                this.submmitFilters();
            },
            async print() {
                if (this.stock) {
                    this.tableParams.stock_id = this.stock.id;
                }
                await axios.get(this.route('api.stock-histories.print',this.tableParams), { responseType: "blob" }).then(res => {
                    this.displayNotification('success', "Stock Histories Printed");
                    const blob = new Blob([res.data], { type: "application/pdf" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = 'stock-histories.pdf';
                    link.click();
                    URL.revokeObjectURL(link.href);
                }).catch(err => {
                    this.displayNotification('error', err.response?.data?.message || err.message || err);
                }).finally(res => {
                    // this.displayNotification('success', "finally");
                });
                // this.displayNotification('error', "You can only print agenda on 1 week mode/preiod !");
            },
            expandInfo(){
                this.extends_info = ! this.extends_info;
            },
            async _export(){
                await axios.get(this.route('api.stock-histories.export',this.tableParams), { responseType: "blob" }).then(res => {
                    this.displayNotification('success', "Stock Histories Exported");
                    const blob = new Blob([res.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = 'stock-histories.xlsx';
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
</style>
