<template>
    <form class="w-99 min-w-full" v-bind:class="classObject" @submit.prevent="storeModel">
        <div class="mt-2 sm:col-span-4" v-if="has_administrator || user_establishment.length > 1" >
            <jet-label for="estum" value="Établissement" />
            <infinite-select :per-page="15" :api-url="route('api.establishments.index')" @update:modelValue="selectedEtabChnaged()"
                             id="estum" name="estum"
                             v-model="form.estum" label="name"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.estum}"
            ></infinite-select>
            <jet-input-error :message="form.errors.estum" class="mt-2" />
        </div>
        <div class="mt-3 sm:col-span-4" v-else >
            <jet-label for="estum" value="Établissement" />
            <jet-label for="estum" class="font-bold ml-4" >{{form.estum ? form.estum.name  : '!' }}</jet-label>
            
            <jet-input class="w-full" type="hidden" id="estum" name="estum" v-model="form.estum"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.estum}"
            ></jet-input>
            <jet-input-error :message="form.errors.estum" class="mt-2" />
        </div>

        <div class="mt-3 sm:col-span-4">
            <jet-label for="type" value="Type d'Action" />
            <select class="w-full cost_select" v-model="form.type"  id="type" name="type" @change="onTypeChange($event)"
                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.type}">
                <option value="">Select Action type ...</option>
                <option value="dr_provenance">Provenance de la DR </option>
                <option value="etab_provenance">Provenance d'un établissement</option>
                <option value="achats">Achats</option>
                <option value="etab_transfere">Envoyé à un établissment</option>
                <option value="consommation">Consommation</option>
                <option value="detruit">Détruit</option>
            </select>
            <jet-input-error :message="form.errors.type" class="mt-2" />
        </div>

        <!-- STOCK HISTPRY -->
        <div class="mt-3 sm:col-span-4" v-if="form.type == 'dr_provenance'">
            <jet-label for="region" value="Region" />
            <infinite-select :per-page="15" :api-url="route('api.regions.index')"
                             id="region" name="region"
                             v-model="form.region" label="name"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.region}"
            ></infinite-select>
            <jet-input-error :message="form.errors.region" class="mt-2" />
        </div>

        <div class="mt-3 sm:col-span-4"  v-if="form.type == 'etab_provenance' || form.type == 'etab_transfere'">
            <jet-label for="etab" value="Établissement" />
            <infinite-select :per-page="15" :api-url="route('api.establishments.index')" :queryParams="{'all':true,'deferent_then' : form.estum ? form.estum.id  : null}"
                             id="etab" name="etab" :reaictivo="true"
                             v-model="form.etab" label="name"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.etab}"
            ></infinite-select>
            <jet-input-error :message="form.errors.etab" class="mt-2" />
        </div>
        
        <div class="mt-3 sm:col-span-4" v-if="form.type == 'consommation'">
            <jet-label for="detaine" value="Detaine" />
            <infinite-select :per-page="15" :api-url="route('api.detainees.index')" :queryParams="{'selected_etab' : form.estum ? form.estum.id  : null}"
                             id="detaine" name="detaine" :reaictivo="true"
                             v-model="form.detaine" label="title"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.detaine}"
            ></infinite-select>
            <jet-input-error :message="form.errors.detaine" class="mt-2" />
        </div>
        
        <div class="mt-3 sm:col-span-4"  v-if="form.type != '' ">
            <jet-label for="ordonnance" > {{form.code_label}} </jet-label>
            <jet-input class="w-full" type="text" id="ordonnance" name="ordonnance" v-model="form.ordonnance"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.ordonnance}"
            ></jet-input>
            <jet-input-error :message="form.errors.ordonnance" class="mt-2" />
        </div>
            
        <!-- STOCK -->

        <div class="mt-3 sm:col-span-4" v-if="form.type != ''">
            <jet-label for="medicament" value="Medicament" />
            <infinite-select :per-page="15" :api-url="route('api.medicaments.index')" @update:modelValue="selectedMedicamentChnaged()"
                             id="medicament" name="medicament"
                             v-model="form.medicament" label="title"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.medicament}"
            ></infinite-select>
            <jet-input-error :message="form.errors.medicament" class="mt-2" />
        </div>
        
        <div class=" sm:col-span-4" v-if="(form.type == 'consommation' ||form.type == 'etab_transfere'||form.type == 'detruit') && form.medicament">
            <jet-label for="stock" value="Stock" />
            <infinite-select :per-page="15" :api-url="route('api.stocks.index')" id="stock" name="stock" :reaictivo="true" @update:modelValue="selectedStockChnaged()"
                             :queryParams="{'selected_etab' : form.estum ? form.estum.id  : null,'medicaments_id' : form.medicament ? form.medicament.id  : null }"
                             v-model="form.stock" label="title" :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.stock}"
            ></infinite-select>
            <jet-input-error :message="form.errors.stock" class="mt-2" />
        </div>
   
        <div class="mt-3 sm:col-span-4" v-if="form.type == 'etab_provenance' ||form.type == 'dr_provenance'||form.type == 'achats'">
            <jet-label for="date_production" value="Date de Production" />
            <jig-datepicker
                class="w-full"
                id="date_production"
                name="date_production"
                v-model="form.date_production"
                data-date-format="Y-m-d"
                :data-alt-input="true"
                data-alt-format="l M J, Y"
                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.date_production}"
            ></jig-datepicker>
            <jet-input-error :message="form.errors.date_production" class="mt-2" />
        </div>

        <div class="mt-3 sm:col-span-4" v-if="form.type == 'etab_provenance' || form.type == 'dr_provenance' || form.type == 'achats'">
            <jet-label for="date_dexpiration" value="Date D'expiration" />
            <jig-datepicker
                class="w-full"
                id="date_dexpiration"
                name="date_dexpiration"
                v-model="form.date_dexpiration"
                data-date-format="Y-m-d"
                :data-alt-input="true"
                data-alt-format="l M J, Y"
                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.date_dexpiration}"
            ></jig-datepicker>
            <jet-input-error :message="form.errors.date_dexpiration" class="mt-2" />
        </div>
            
        <div class="mt-3 sm:col-span-4" v-if="form.type != ''">
            <jet-label for="quantite" value="Quantite" />
            <jet-input  v-if="(form.type == 'consommation' ||form.type == 'etab_transfere'||form.type == 'detruit') && form.medicament && form.stock"
                        class="w-full" type="number" min="1" :max="form.stock.quantite" step="1" id="quantite" name="quantite" v-model="form.quantite"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.quantite}"
            ></jet-input>
            <jet-input v-else class="w-full" type="number" min="1" step="1" id="quantite" name="quantite" v-model="form.quantite"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.quantite}"
            ></jet-input>
            <jet-input-error :message="form.errors.quantite" class="mt-2" />
        </div>

        <!-- Global  -->

        <div class="mt-3 sm:col-span-4"  v-if="form.type != ''">
            <jet-label for="comment" value="Comment" />
            <jet-input class="w-full" type="text" id="comment" name="comment" v-model="form.comment"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.comment}"
            ></jet-input>
            <jet-input-error :message="form.errors.comment" class="mt-2" />
        </div> 
        <!-- 
        v-if="validated"

        -->

        <div class="mt-2 text-right" >
            <inertia-button type="submit" class="font-semibold bg-success disabled:opacity-25" :disabled="form.processing">Submit</inertia-button>
        </div>
    </form>
</template>

<script>
    import JetInput from "@/Jetstream/Input.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';
    import JetLabel from "@/Jetstream/Label.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JetInputError from "@/Jetstream/InputError.vue"
    import { defineComponent } from "vue";
    import JigDatepicker from "@/JigComponents/JigDatepicker.vue";

    export default defineComponent({
        name: "ManageStockForm",
        components: {
            InertiaButton,
            JetInputError,
            JetLabel,
            JetInput,
            InfiniteSelect,
            JigDatepicker
        },
        props: {
            form:Object,
            user_establishment: Array,
            has_administrator: Boolean,
        },
        data() {
            return {
                validated: false,
                classObject : {
                    'changed_h': 'h-72'
                },
            }
        },
        mounted() {
            this.form.estum = this.user_establishment[0];
        },
        computed: {
            flash() {
                return this.$page.props.flash || {}
            }
        },
        methods: {
            async storeModel() {
                this.form.post(this.route('admin.stocks.store'),{
                    onSuccess: res => {
                        if (this.flash.success) {
                            this.$emit('success',this.flash.success);
                        } else if (this.flash.error) {
                            this.$emit('error',this.flash.error);
                        } else {
                            this.$emit('error',"Unknown server error.")
                        }
                    },
                    onError: res => {
                        this.$emit('error',"A server error occurred");
                    }
                },{remember: false, preserveState: true})
            },
            onTypeChange(event){
                if(event.target.value != ""){
                    this.classObject.changed_h = 'h-96';
                    if(event.target.value == "consommation"){
                        this.form.code_label = "N° Ordonnance";
                    }else if(event.target.value == "achats"){
                        this.form.code_label = "Bon d'achat";
                    }else if(event.target.value == "detruit"){
                        this.form.code_label = "N° PV";
                    }else{
                        this.form.code_label = "N° Bulletin";
                    }
                }
            },
            selectedEtabChnaged(){
                this.form.etab = null;
                this.form.detaine = null;
                this.form.medicament = null;
                this.form.stock = null;
            },
            selectedMedicamentChnaged(){
                this.form.stock = null;
                this.form.quantite = 0;
            },
            selectedStockChnaged(){
                this.form.quantite = 0;
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
