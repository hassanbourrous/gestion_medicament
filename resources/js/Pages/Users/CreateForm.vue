<template>
    <form class="w-full" @submit.prevent="storeModel">
        
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
            <jet-input type="password" id="password" name="password" v-model="form.password"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.password}"
            ></jet-input>
            <jet-input-error :message="form.errors.password" class="mt-2" />
        </div>

        <div class=" sm:col-span-4">
            <jet-label for="password_confirmation" value="Repeat Password" />
            <jet-input type="password" id="password_confirmation" name="password_confirmation" v-model="form.password_confirmation"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.password_confirmation}"
            ></jet-input>
        </div>
                  
        <div class="sm:col-span-4">
            <jet-label for="roles" value="Role" />
            <select class="w-full cost_select" v-model="form.role"  id="type" name="type"
                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.role}">
                <option v-for="(role, idx) of roles" :key="idx" :value="role.id">{{role.name}}</option>
            </select>
        </div>

        <div class=" sm:col-span-4">
             <!-- Profile Photo File Input -->
            <input type="file" class="hidden" ref="photo" @change="updatePhotoPreview">

            <jet-label for="photo" value="Photo" />

            <!-- Current Profile Photo -->
            <div class="mt-2" v-show="! photoPreview">
                <img :src="form.profile_photo_path" :alt="form.name" class="rounded-full h-20 w-20 object-cover">
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

            <jet-input-error :message="form.errors.photo" class="mt-2" />
        </div>
        <div class="mt-2 text-right">
            <inertia-button type="submit" class="font-semibold bg-success disabled:opacity-25" :disabled="form.processing">Submit</inertia-button>
        </div>
    </form>
</template>

<script>
    import JigDatepicker from "@/JigComponents/JigDatepicker.vue";
    import JetInput from "@/Jetstream/Input.vue";
    import JigTextarea from "@/JigComponents/JigTextarea.vue";
    import JetLabel from "@/Jetstream/Label.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JetInputError from "@/Jetstream/InputError.vue"
    import {useForm} from "@inertiajs/inertia-vue3";
    
    import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue'
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';

    export default {
        name: "CreateUsersForm",
        props: {
            roles: Array,
        },
        components: {
            InertiaButton,
            JetInputError,
            JetLabel,
            JigDatepicker,
            JetInput,
            JigTextarea,
            JetSecondaryButton,
            InfiniteSelect,
        },
        data() {
            return {
                form: useForm({
                    name: null,
                    last_name: null,
                    email: null,
                    phone: null,
                    password: null,
                    password_confirmation: null,
                    profile_photo_path: null,
                    two_factor_secret: null,
                    two_factor_recovery_codes: null,
                    email_verified_at: null,
                    current_team_id: null,
                    photo: null,
                    role: null,                           
                }, {remember: false}),
                photoPreview: null,
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
                if (this.$refs.photo) {
                    this.form.photo = this.$refs.photo.files[0]
                }
                this.form.post(this.route('admin.users.store'),{
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
                this.$inertia.delete(route('current-user-photo.destroy'), {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.photoPreview = null;
                        this.clearPhotoFileInput();
                    },
                });
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
    .cost_select{
        border-color: #e5e7eb;
        background: #f9fafb;
    }
</style>
