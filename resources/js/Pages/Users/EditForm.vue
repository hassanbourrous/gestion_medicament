<template>
    <jig-tabs :class="`border-none`" nav-classes="bg-secondary-300 rounded-t-lg border-b-4 border-primary">
        <template #nav>
            <jig-tab-link @activate="activeTab=$event" :active-classes="tabActiveClasses" :tab-controller="activeTab"
                          tab="basic-info">information d'utilisateur
            </jig-tab-link>
            <jig-tab-link @activate="activeTab=$event" :active-classes="tabActiveClasses" :tab-controller="activeTab"
                          tab="assign-roles">effectuer le rôle
            </jig-tab-link>
            
            <jig-tab-link @activate="activeTab=$event" :active-classes="tabActiveClasses" :tab-controller="activeTab"
                          tab="assign-establishments">affecter à une établissement .
            </jig-tab-link>
        </template>
        <template #content>
            <jig-tab name="basic-info" :tab-controller="activeTab">
                <form @submit.prevent="updateModel">
                 
                    <div class=" sm:col-span-4">
                        <jet-label for="name" value="Name" />
                        <jet-input class="w-full" type="text" id="name" name="name" v-model="form.name"
                                   :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.name}"
                        ></jet-input>
                        <jet-input-error :message="form.errors.name" class="mt-2" />
                    </div>
             
                    <div class=" sm:col-span-4">
                        <jet-label for="email" value="Email" />
                        <jet-input class="w-full" type="text" id="email" name="email" v-model="form.email"
                                   :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.email}"
                        ></jet-input>
                        <jet-input-error :message="form.errors.email" class="mt-2" />
                    </div>
             
                    <div class=" sm:col-span-4">
                        <jet-label for="password" value="Password" />
                        <jet-input class="w-full" type="password" id="password" name="password" v-model="form.password"
                                   :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.password}"
                        ></jet-input>
                        <jet-input-error :message="form.errors.password" class="mt-2" />
                    </div>
                    <div class=" sm:col-span-4">
                        <jet-label for="password_confirmation" value="Repeat Password" />
                        <jet-input class="w-full" type="password" id="password_confirmation" name="password_confirmation" v-model="form.password_confirmation"
                                   :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.password_confirmation}"
                        ></jet-input>
                    </div>
  
                    <div class=" sm:col-span-4">
                        <input type="file" class="hidden"
                                    ref="photo"
                                    @change="updatePhotoPreview">

                        <jet-label for="photo" value="Photo" />

                        <!-- Current Profile Photo -->
                        <div class="mt-2" v-show="! photoPreview">
                            <img :src="form.profile_photo_url" :alt="form.first_name" class="rounded-full h-20 w-20 object-cover">
                        </div>
                        <!-- New Profile Photo Preview -->
                        <div class="mt-2" v-show="photoPreview">
                            <span class="block rounded-full w-20 h-20"
                                    :style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + photoPreview + '\');'">
                            </span>
                        </div>

                        <jet-secondary-button class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
                            Select A New Photo
                        </jet-secondary-button>

                        <jet-secondary-button type="button" class="mt-2" @click.prevent="deletePhoto" v-if="form.profile_photo_path">
                            Remove Photo
                        </jet-secondary-button>

                        <jet-input-error :message="photo_form.errors.photo" class="mt-2" />
                    </div>
                                                    
                    <div class="mt-2 text-right">
                        <inertia-button type="submit" class="bg-primary font-semibold text-white" :disabled="form.processing">Submit</inertia-button>
                    </div>
                </form>
            </jig-tab>
            <jig-tab name="assign-roles" :tab-controller="activeTab">
                <div class="my-2 border rounded-md p-3">
                    <h3 class="font-bold py-3 text-lg">affecter une Roles</h3>
                    <hr>
                    <div class="p-2 mt-2 border rounded">
                        <div style="cursor: pointer" v-for="(role, idx) of form.assigned_roles" :key="idx"
                             class=" sm:col-span-4 px-10 flex border-b border-gray-100 justify-between py-3 items-center my-2">
                            <jet-label :for="role.name" class="inline-block  font-black text-xl"
                                       :value="role.title"/>
                            <jet-checkbox @change="toggleRole(role)" class="p-2 inline-block" type="checkbox"
                                          :id="role.name" :name="role.name" :checked="role.checked" v-model="role.checked"
                                          :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.assigned_roles}"
                            ></jet-checkbox>
                        </div>
                    </div>
                </div>
            </jig-tab>
            <jig-tab name="assign-establishments" :tab-controller="activeTab">
                <assign-estab :user="model" :establishments="establishments"></assign-estab>
            </jig-tab>
        </template>
    </jig-tabs>
</template>

<script>
    import JetLabel from "@/Jetstream/Label.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JetInputError from "@/Jetstream/InputError.vue";
    import {useForm} from "@inertiajs/inertia-vue3";
    import JigTab from "@/JigComponents/JigTab.vue";
    import JigTabs from "@/JigComponents/JigTabs.vue";
    import JigTabLink from "@/JigComponents/JigTabLink.vue";

    import JetCheckbox from "@/Jetstream/Checkbox.vue";
    import JigDatepicker from "@/JigComponents/JigDatepicker.vue";
    import JetInput from "@/Jetstream/Input.vue";
    import JigTextarea from "@/JigComponents/JigTextarea.vue";
    import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue'
    import AssignEstab from "@/Pages/Users/AssignEstab.vue";
    
    export default {
        name: "EditUsersForm",
        props: {
            model: Object,
            roles: Object,
            establishments: Object,
        },
        components: {
            InertiaButton,
            JetLabel,
            JetInputError,
            JetInput,
            JigDatepicker,
            JetCheckbox,
            JigTextarea,
            JigTabLink,
            JigTabs,
            JigTab,
            JetSecondaryButton,
            AssignEstab,
        },
        data() {
            return {
                form: useForm({
                    ...this.model,
                    assigned_roles: this.roles,
                    password: null,
                    "password_confirmation": null,
                },{remember:false}),
                activeTab: 'basic-info',
                tabActiveClasses: "bg-primary font-bold text-secondary rounded-t-lg hover:bg-primary-500",
                photoPreview: null,
                photo_form: useForm({
                    photo: null
                },{remember:false}),
                photo: null
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
            async updateModel() {
                this.form.put(this.route('admin.users.update',this.form.id),
                    {
                        onSuccess: res => {
                            if (this.flash.success) {
                                this.updateUserPhoto();
                                this.clearPhotoFileInput();
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
            async toggleRole(role) {
                const vm = this;
                axios.post(this.route('api.users.assign-role',this.form.id),{role: role}).then(res => {
                    this.$inertia.reload({preserveState: true});
                    this.displayNotification('success',res.data.message)
                }).catch(err => {
                    this.displayNotification('error',err.response?.data?.message || err.message || err)
                    vm.form.assigned_roles[role.name].checked = !role.checked;
                });
            },
            updateUserPhoto() {
                if (this.$refs.photo) {
                    if( this.$refs.photo.files[0]){
                        let formData = new FormData();
                        formData.append('photo',  this.$refs.photo.files[0]);
                        axios.post(route('api.users-photo.update', this.form.id),formData,{headers: {'Content-Type': 'multipart/form-data'}})
                        .then(function(data){
                            this.clearPhotoFileInput()
                        })
                        .catch(function(){
                            this.clearPhotoFileInput()
                        });
                    }
                }
            },
            selectNewPhoto() {
                this.$refs.photo.click();
            },
            updatePhotoPreview() {
                const photo = this.$refs.photo.files[0];

                if (! photo) return;

                const reader = new FileReader();

                reader.onload = (e) => {
                    this.photoPreview = e.target.result;
                };

                reader.readAsDataURL(photo);
            },

            deletePhoto() {
                this.form.profile_photo_path = null;
                this.form.profile_photo_url = null;
            },
            clearPhotoFileInput() {
                if (this.$refs.photo?.value) {
                    this.$refs.photo.value = null;
                }
            }
        }
    }
</script>

<style scoped>

</style>
