<template>
    <form class="w-full" @submit.prevent="storeModel">
        
        <div class=" sm:col-span-4">
            <jet-label for="type" value="Type" />
            <jet-input class="w-full" type="text" id="type" name="type" v-model="form.type"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.type}"
            ></jet-input>
            <jet-input-error :message="form.errors.type" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="comment" value="Comment" />
            <jet-input class="w-full" type="text" id="comment" name="comment" v-model="form.comment"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.comment}"
            ></jet-input>
            <jet-input-error :message="form.errors.comment" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="ordonnance" value="Ordonnance" />
            <jet-input class="w-full" type="text" id="ordonnance" name="ordonnance" v-model="form.ordonnance"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.ordonnance}"
            ></jet-input>
            <jet-input-error :message="form.errors.ordonnance" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="quantite" value="Quantite" />
            <jet-input class="w-full" type="number" id="quantite" name="quantite" v-model="form.quantite"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.quantite}"
            ></jet-input>
            <jet-input-error :message="form.errors.quantite" class="mt-2" />
        </div>
        <div class=" sm:col-span-4">
            <jet-label for="detaine" value="Detaine" />
            <infinite-select :per-page="15" :api-url="route('api.detainees.index')"
                             id="detaine" name="detaine"
                             v-model="form.detaine" label="first_name"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.detaine}"
            ></infinite-select>
            <jet-input-error :message="form.errors.detaine" class="mt-2" />
        </div>
            <div class=" sm:col-span-4">
            <jet-label for="etab" value="Etab" />
            <infinite-select :per-page="15" :api-url="route('api.establishments.index')"
                             id="etab" name="etab"
                             v-model="form.etab" label="name"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.etab}"
            ></infinite-select>
            <jet-input-error :message="form.errors.etab" class="mt-2" />
        </div>
            <div class=" sm:col-span-4">
            <jet-label for="stock" value="Stock" />
            <infinite-select :per-page="15" :api-url="route('api.stocks.index')"
                             id="stock" name="stock"
                             v-model="form.stock" label="id"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.stock}"
            ></infinite-select>
            <jet-input-error :message="form.errors.stock" class="mt-2" />
        </div>
        <div class=" sm:col-span-4">
            <jet-label for="user" value="User" />
            <infinite-select :per-page="15" :api-url="route('api.users.index')"
                             id="user" name="user"
                             v-model="form.user" label="name"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.user}"
            ></infinite-select>
            <jet-input-error :message="form.errors.user" class="mt-2" />
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
        name: "CreateStockHistoriesForm",
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
                    type: null,
                    comment: null,
                    ordonnance: null,
                    quantite: null,
                    "detaine": null,
                    "etab": null,
                    "stock": null,
                    "user": null,
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
                this.form.post(this.route('admin.stock-histories.store'),{
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
