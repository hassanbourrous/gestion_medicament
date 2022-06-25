<template>
    <form class="w-full" @submit.prevent="storeModel">
        <div class=" sm:col-span-4">
            <jet-label for="estum" value="Établissement" />
            <infinite-select :per-page="15" :api-url="route('api.establishments.index')"
                             id="estum" name="estum"
                             v-model="form.estum" label="name"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.estum}"
            ></infinite-select>
            <jet-input-error :message="form.errors.estum" class="mt-2" />
        </div>

        <div class=" sm:col-span-4">
            <jet-label for="medicament" value="Medicament" />
            <infinite-select :per-page="15" :api-url="route('api.medicaments.index')"
                             id="medicament" name="medicament"
                             v-model="form.medicament" label="title"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.medicament}"
            ></infinite-select>
            <jet-input-error :message="form.errors.medicament" class="mt-2" />
        </div>
   
        <div class=" sm:col-span-4">
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

        <div class=" sm:col-span-4">
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
             
            
        <div class=" sm:col-span-4">
            <jet-label for="quantite" value="Quantite" />
            <jet-input class="w-full" type="number" id="quantite" name="quantite" v-model="form.quantite"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.quantite}"
            ></jet-input>
            <jet-input-error :message="form.errors.quantite" class="mt-2" />
        </div>
        

        <div class="mt-2 text-right">
            <inertia-button type="submit" class="font-semibold bg-success disabled:opacity-25" :disabled="form.processing">Submit</inertia-button>
        </div>
    </form>
</template>

<script>
    import JigDatepicker from "@/JigComponents/JigDatepicker.vue";
    import JetInput from "@/Jetstream/Input.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';
    import JetLabel from "@/Jetstream/Label.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JetInputError from "@/Jetstream/InputError.vue"
    import {useForm} from "@inertiajs/inertia-vue3";
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "CreateStocksForm",
        components: {
            InertiaButton,
            JetInputError,
            JetLabel,
            JigDatepicker,
            JetInput,
            InfiniteSelect,
        },
        data() {
            return {
                form: useForm({
                    date_dexpiration: null,
                    date_production: null,
                    quantite: null,
                    "estum": null,
                    "medicament": null,
                }, {remember: false}),
            }
        },
        mounted() {
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
            }
        }
    });
</script>

<style scoped>

</style>
