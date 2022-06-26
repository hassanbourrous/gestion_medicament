<template>
    <div>
        <div class="font-black text-xl mb-2 flex flex-wrap justify-between items-center">
            <h2 class="">effectuer une etablissment</h2>
            <div>
                <inertia-button class="bg-green-500" type="button" @click.native.prevent="toggleAll(true)">Attribuer tout</inertia-button>
                <inertia-button class="bg-red-500 text-white" type="button" @click.native.prevent="toggleAll(false)">Révoquer tout</inertia-button>
            </div>
        </div>
        <hr>
        <div class="p-4 mt-2 md:grid grid-cols-2 border rounded">
            <div v-for="(estabs, region) of establishments" :key="region" class="border-b-2 mb-2">
                <div class="flex flex-wrap">
                    <h3 class="font-black text-xl pb-2">{{region}}</h3>
                    <div class="">
                        <inertia-button @click.native.prevent="togglerRegionEstabs(estabs,true)" class="bg-green-500 py-1 mx-1 text-sm">Attribuer</inertia-button>
                        <inertia-button @click.native.prevent="togglerRegionEstabs(estabs,false)" class="bg-red-500 py-1 mx-1 text-sm">Révoquer</inertia-button>
                    </div>
                </div>
                <div style="cursor: pointer" v-for="(estab, idx) of estabs" :key="idx" class=" sm:col-span-4 px-10 flex border-b border-gray-100 py-3 items-center my-2 text-gray-600">
                    <jet-checkbox @change="toggleEstab(estab)" class="p-2 inline-block" type="checkbox" :id="estab.name" :name="estab.name" :checked="!!estab.checked" v-model="estab.checked"
                                  :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': !estab.checked}"
                    />
                    <jet-label style="cursor: pointer" :for="estab.name" :class="`text-gray-400 hover:text-gray-600`" class="inline-block font-black text-xl ml-3" :value="estab.name"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import JetLabel from "@/Jetstream/Label.vue";
import InertiaButton from "@/JigComponents/InertiaButton.vue";
import JetInputError from "@/Jetstream/InputError.vue";
import JetCheckbox from "@/Jetstream/Checkbox.vue";
import JetInput from "@/Jetstream/Input.vue";
import Axios from "axios";
import DisplayMixin from "@/Mixins/DisplayMixin.js";
export default {
    name: "AssignEstab",
    components: {
        InertiaButton,
        JetLabel,
        JetInputError,
        JetInput,
        JetCheckbox
    },
    props: {
        establishments: Object,
        user: {
            required: true,
            type: Object,
        }
    },
    created() {
    },
    mixins: [DisplayMixin],
    methods: {
        async toggleEstab(estab) {
            const vm = this;
            Axios.post(this.route('api.users.assign-establishment',this.user.id),{establishment: estab}).then(res => {
                this.$emit('toggle-success',res.data.message);
            }).catch(err => {
                this.$emit('toggle-error',(err.response?.data?.message || err.message || err));
            });
        },
        async toggleAll(checked) {
            const vm = this;
            for (const region in vm.establishments) {
                if (!vm.establishments.hasOwnProperty(region)) {return false;}
                let estabRegion = vm.establishments[region];
                await vm.togglerRegionEstabs(estabRegion, checked);
            }
            this.displayNotification('success',`All establishments have been ${checked ? 'Assigned.': 'Revoked.'}`)
        },
        async togglerRegionEstabs(estabRegion, checked) {
            const vm = this;
            for (const key in estabRegion) {
                if (!estabRegion.hasOwnProperty(key)) {return false;}
                let estab = estabRegion[key];
                if (estab.checked && !checked) {
                    // Uncheck
                    estab.checked = false;
                    await vm.toggleEstab(estab);
                } else if (checked && !estab.checked) {
                    // Check
                    estab.checked = true;
                    await vm.toggleEstab(estab);
                } else {
                }
            }
            this.displayNotification('success',`All establishments in the region have been ${checked ? 'Assigned.': 'Revoked.'}`)
        }
    }
}
</script>

<style scoped>

</style>
