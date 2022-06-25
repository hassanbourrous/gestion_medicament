<template>
    <form @submit.prevent="updateModel">
         
        <div class=" sm:col-span-4">
            <jet-label for="first_name" value="First Name" />
            <jet-input class="w-full" type="text" id="first_name" name="first_name" v-model="form.first_name"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.first_name}"
            ></jet-input>
            <jet-input-error :message="form.errors.first_name" class="mt-2" />
        </div>
         
        <div class=" sm:col-span-4">
            <jet-label for="last_name" value="Last Name" />
            <jet-input class="w-full" type="text" id="last_name" name="last_name" v-model="form.last_name"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.last_name}"
            ></jet-input>
            <jet-input-error :message="form.errors.last_name" class="mt-2" />
        </div>
        
        <div class=" sm:col-span-4">
            <jet-label for="establishment" value="establishment" />
            <infinite-select class="w-full" :per-page="15" :api-url="route('api.establishments.index')"
                                id="establishment" name="establishment"
                                v-model="form.establishment" label="name"
                                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.establishment}"
            ></infinite-select>
            <jet-input-error :message="form.errors.establishment" class="mt-2" />
        </div>

         
        <div class=" sm:col-span-4">
            <jet-label for="cin" value="Cin" />
            <jet-input class="w-full" type="text" id="cin" name="cin" v-model="form.cin"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.cin}"
            ></jet-input>
            <jet-input-error :message="form.errors.cin" class="mt-2" />
        </div>
         
        <div class=" sm:col-span-4">
            <jet-label for="code" value="Code" />
            <jet-input class="w-full" type="text" id="code" name="code" v-model="form.code"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.code}"
            ></jet-input>
            <jet-input-error :message="form.errors.code" class="mt-2" />
        </div>
        <div class=" sm:col-span-4">
            <jet-label for="birthday" value="Birthday" />
            <jig-datepicker
                class="w-full"
                id="birthday"
                name="birthday"
                v-model="form.birthday"
                data-date-format="Y-m-d"
                :data-alt-input="true"
                data-alt-format="l M J, Y"
                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.birthday}"
            ></jig-datepicker>
            <jet-input-error :message="form.errors.birthday" class="mt-2" />
        </div>
        
        <div class=" sm:col-span-4">
            <!-- <jet-label for="profile_photo_path" value="Profile Photo Path" />
            <jet-input class="w-full" type="text" id="profile_photo_path" name="profile_photo_path" v-model="form.profile_photo_path"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.profile_photo_path}"
            ></jet-input>
            <jet-input-error :message="form.errors.profile_photo_path" class="mt-2" /> -->
             <!-- Profile Photo File Input -->
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
            <inertia-button type="submit" class="font-semibold text-white bg-primary" :disabled="form.processing">Submit</inertia-button>
        </div>
    </form>
</template>

<script>
    import JetLabel from "@/Jetstream/Label.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JetInputError from "@/Jetstream/InputError.vue";
    import {useForm} from "@inertiajs/inertia-vue3";
    import JigDatepicker from "@/JigComponents/JigDatepicker.vue";
    import JetInput from "@/Jetstream/Input.vue";
    import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue'
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';
        
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "EditDetaineeForm",
        props: {
            model: Object,
        },
        components: {
            InertiaButton,
            JetLabel,
            JetInputError,
            JetInput,
            JigDatepicker,
            JetSecondaryButton,
            InfiniteSelect,
        },
        data() {
            return {
                form: useForm({
                    ...this.model,
                },{remember:false}),
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
                // if (this.$refs.photo) {
                //     this.form.photo = this.$refs.photo.files[0]
                // }
                this.form.put(this.route('admin.detainees.update',this.form.id),
                    {
                        onSuccess: res => {
                            if (this.flash.success) {
                                this.updateDetaineePhoto();
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
            updateDetaineePhoto() {
                if (this.$refs.photo) {
                    if( this.$refs.photo.files[0]){
                        let formData = new FormData();
                        formData.append('photo',  this.$refs.photo.files[0]);
                        axios.post(route('api.detainee-photo.update', this.form.id),formData,{headers: {'Content-Type': 'multipart/form-data'}})
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
    });
</script>

<style scoped>

</style>
