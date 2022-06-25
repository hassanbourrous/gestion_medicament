<template>
    <form class="w-full" @submit.prevent="storeModel">
        
        <div class=" sm:col-span-4">
            <jet-label for="category" value="Category" />
            <infinite-select :per-page="15" :api-url="route('api.categories.index')"
                             id="category" name="category"
                             v-model="form.category" label="name"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.category}"
            ></infinite-select>
            <jet-input-error :message="form.errors.category" class="mt-2" />
        </div>
        <div class=" sm:col-span-4">
            <jet-label for="nom_commercial" value="Nom Commercial" />
            <jet-input class="w-full" type="text" id="nom_commercial" name="nom_commercial" v-model="form.nom_commercial"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.nom_commercial}"
            ></jet-input>
            <jet-input-error :message="form.errors.nom_commercial" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="dosage" value="Dosage" />
            <jet-input class="w-full" type="text" id="dosage" name="dosage" v-model="form.dosage"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.dosage}"
            ></jet-input>
            <jet-input-error :message="form.errors.dosage" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="presentation" value="Presentation" />
            <jet-input class="w-full" type="text" id="presentation" name="presentation" v-model="form.presentation"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.presentation}"
            ></jet-input>
            <jet-input-error :message="form.errors.presentation" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="ref" value="Ref" />
            <jet-input class="w-full" type="text" id="ref" name="ref" v-model="form.ref"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.ref}"
            ></jet-input>
            <jet-input-error :message="form.errors.ref" class="mt-2" />
        </div>

        <div class="mt-2 text-right">
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
    import {useForm} from "@inertiajs/inertia-vue3";
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "CreateMedicamentsForm",
        components: {
            InertiaButton,
            JetInputError,
            JetLabel,
                         JetInput,
                                     InfiniteSelect,
        },
        data() {
            return {
                form: useForm({
                    dosage: null,
                    nom_commercial: null,
                    presentation: null,
                    ref: null,
                                        "category": null,
                    
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
                this.form.post(this.route('admin.medicaments.store'),{
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
