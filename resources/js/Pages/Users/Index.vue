<template>
    <jig-layout class="bg-gray-100">
        <template #header>
            <div class="flex flex-wrap items-center justify-between w-full px-4">
                <inertia-link :href="route('admin.dashboard')" class="text-xl font-black text-white"><i class="fas fa-arrow-left"></i> Retour</inertia-link>
                <div class="flex gap-x-2">
                    <inertia-button v-if="can.create" :href="route('admin.users.create')" classes="bg-green-100 hover:bg-green-200 text-primary"><i class="fas fa-plus"></i> Nouveau Utilisateur</inertia-button>
                    <inertia-button @click.native="$refreshDt(tableId)" classes="bg-indigo-100 hover:bg-green-200 text-indigo"><i class="fas fa-redo"></i> Refresh</inertia-button>
                </div>
            </div>
        </template>
        <div v-if="can.viewAny" class="flex flex-wrap px-4">
            <div class="z-10 flex-auto bg-white md:rounded-md md:shadow-md">
                <h3 class="w-full p-4 text-lg font-black sm:rounded-t-lg bg-primary-100"><i class="mr-2 fas fa-bars"></i> 
                    List des utilisateurs
                    <button style="margin-top: -5px;" type="button" @click="expandFilters()"
                        class="float-right pl-2 pt-1 pb-1 pr-1 bg-primary text-white rounded hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out" >
                        <i class="mr-2 fas fa-filter"></i> 
                    </button>
                </h3>
                <div class="p-4 transition-all bg-indigo-50 " v-if="filters_expanded" >
                    <form @submit.prevent="submmitFilters">
                        <div class="flex">
                            <div class="flex-1 mr-2">
                                <div class=" w-full max-w-md">
                                    <jet-label for="role" value="Role" />
                                    <infinite-select :per-page="15" :api-url="route('api.roles.index')" @option:selected="selectedRoleFilter"
                                                    id="role" name="role" v-model="tableParamsForm.role" label="name"
                                    ></infinite-select>
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

                        <template #title>Show User #{{currentModel.id}}</template>
                        <show-users-form :model="currentModel"></show-users-form>
                        <template #footer>
                            <inertia-button class="px-4 text-white bg-primary" @click="showModal = false; currentModel = null">Close</inertia-button>
                        </template>
                    </jig-modal>
                </div>
            </div>
        </div>
        <div v-else class="p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md ">
            You are not authorized to view a list of Users
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
    import ShowUsersForm from "@/Pages/Users/ShowForm.vue";
    import {useForm} from "@inertiajs/inertia-vue3";
    import JetLabel from "@/Jetstream/Label.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';
    export default {
        name: "Index",
        components: {
            DtComponent,
            JigToggle,
            InertiaButton,
            JetConfirmationModal,
            JetDialogModal,
            JigModal,
            JigLayout,
            ShowUsersForm,
            JetLabel,
            InfiniteSelect,
        },
        props: {
            can: Object,
            columns: Array,
        },
        inject: ["$refreshDt","$dayjs"],
        data() {
            return {
                tableId: 'users-dt',
                tableParams: {
                    "role_id": null,
                },
                datatable: null,
                confirmDelete: false,
                currentModel: null,
                withDisabled: false,
                showModal: false,
                filters_expanded: false,
                tableParamsForm: useForm({
                    "role": null,
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
                const url = new URL(this.route('api.users.dt'));
                /*if (this.withDisabled) {
                    url.searchParams.append('include-disabled',true);
                }*/
                return url.href;
            }
        },
        methods: {
            showModel(model) {
                axios.get(route('api.users.show',model)).then(res => {
                    this.currentModel = res.data.payload;
                    this.showModal = true;
                })
                // this.$inertia.visit(this.route('admin.users.show',model.id));
            },
            editModel(model) {
                this.$inertia.visit(this.route('admin.users.edit',model.id));
            },
            expandFilters(){
                this.filters_expanded = ! this.filters_expanded;
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
                    this.$inertia.delete(route('admin.users.destroy', vm.currentModel),{
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
                axios.put(route(`api.users.update`,model.id),{
                    enabled: enabled
                }).then(res => {
                    this.displayNotification('success', res.data.message);
                    this.$refreshDt(this.tableId);
                })
            },
            selectedRoleFilter(){
                this.tableParams.role_id = this.tableParamsForm.role ? this.tableParamsForm.role.id : null;
                this.$refreshDt(this.tableId);
            },
            submmitFilters(){
                this.tableParams.role_id = this.tableParamsForm.role ? this.tableParamsForm.role.id : null;
                this.$refreshDt(this.tableId);
            },
            ResetFillters(){
                this.tableParams.role_id =  null;
                this.tableParamsForm.role =  null;
                this.$refreshDt(this.tableId);
            }
        }
    }
</script>

<style scoped>

</style>
