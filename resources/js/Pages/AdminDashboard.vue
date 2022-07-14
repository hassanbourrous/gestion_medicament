<template>
  <jig-layout>
        <template #header>
            <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg  xl:mb-0" >
                    <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                            <div class="relative flex-1 flex-grow w-full max-w-full pr-4 " >
                                <h5 class="text-xs font-bold text-gray-500 uppercase " >
                                    Quantité globale en stock
                                </h5>
                                <span v-if="data" class="text-xl font-semibold text-gray-800 " >
                                    {{data.stocks_quantity}}
                                </span>
                            </div>
                            <div class="relative flex-initial w-auto pl-4 "  >
                                <div   class="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-red-500 rounded-full shadow-lg " >
                                    <i class="fas fa-boxes" style="font-size: 1.6rem;"></i>
                                </div>
                            </div>
                        </div>
                        <p  class="mt-4 text-sm text-gray-500 " >
                            <span  class="mr-2 text-green-500"  > <i class="fas fa-arrow-up" ></i> 3.48% </span>
                            <span  class="whitespace-no-wrap"  >  depuis le mois dernier  </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg  xl:mb-0" >
                    <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                            <div  class="relative flex-1 flex-grow w-full max-w-full pr-4 " >
                                <h5  class="font-bold text-gray-500 uppercase " style="font-size: 0.73rem;" >
                                    Nombre de transactions et d'actions
                                </h5>
                                <span v-if="data" class="text-xl font-semibold text-gray-800 "  >
                                    {{data.stocks_history}}
                                </span>
                            </div>
                            <div class="relative flex-initial w-auto pl-4 "  >
                                <div   class="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-primary-500 rounded-full shadow-lg " >
                                    <i class="fas fa-random" style="font-size: 1.6rem;"></i>
                                </div>
                            </div>
                        </div>
                        <p  class="mt-4 text-sm text-gray-500 " >
                            <span class="mr-2 text-red-500">
                                <i class=" fas fa-arrow-down"   ></i>
                                3.48%
                            </span>
                            <span  class="whitespace-no-wrap" >
                                Depuis la semaine dernière
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg  xl:mb-0" >
                    <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                            <div  class="relative flex-1 flex-grow w-full max-w-full pr-4 "  >
                                <h5  class="text-xs font-bold text-gray-500 uppercase "  >
                                    Détenus
                                </h5>
                                <span v-if="data" class="text-xl font-semibold text-gray-800 "  >
                                    {{data.detenus}}
                                </span>
                            </div>
                            <div class="relative flex-initial w-auto pl-4 " >
                                <div  class="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-pink-500 rounded-full shadow-lg " >
                                    <i class="fas fa-users" style="font-size: 1.6rem;" ></i>
                                </div>
                            </div>
                        </div>
                        <p class="mt-4 text-sm text-gray-500 " >
                            <span class="mr-2 text-green-500" >
                                <i class=" fas fa-arrow-down" ></i>
                                11.10%
                            </span>
                            <span class="whitespace-no-wrap"  >
                                Depuis le mois dernier
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg  xl:mb-0" >
                    <div class="flex-auto p-4">
                        <div class="flex flex-wrap">
                            <div class="relative flex-1 flex-grow w-full max-w-full pr-4 " >
                                <h5 class="text-xs font-bold text-gray-500 uppercase " >
                                    Médicaments
                                </h5>
                                <span v-if="data" class="text-xl font-semibold text-gray-800 " >
                                    {{data.medicaments}}
                                </span>
                            </div>
                            <div class="relative flex-initial w-auto pl-4 " >
                                <div  class="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-blue-500 rounded-full shadow-lg "  >
                                    <i  class=" fas fa-pills"  style="font-size: 1.6rem;"></i>
                                </div>
                            </div>
                        </div>
                        <p class="mt-4 text-sm text-gray-500 " >
                            <span class="mr-2 text-green-500" >
                                <i class="fas fa-arrow-up" ></i>
                                12%
                            </span>
                            <span  class="whitespace-no-wrap" >
                                Depuis l'année dernière
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </template>
        <div class="flex flex-wrap mt-4">
            <div class="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
                <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
                    <div class="px-4 py-3 mb-0 border-0 rounded-t">
                        <div class="flex flex-wrap items-center">
                            <div class="relative flex-1 flex-grow w-full max-w-full px-4">
                                <h3 class="text-base font-semibold text-gray-800">
                                    Dernières transactions et actions sur stock
                                </h3>
                            </div>
                            <div class="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
                                <inertia-button :href="route('admin.stock-histories.index')" style="transition:all .15s ease"
                                        classes="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none">
                                    Voir tout
                                </inertia-button>
                            </div>
                        </div>
                    </div>
                    <div class="block w-full overflow-x-auto">
                        <!-- Projects table -->
                        <table class="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th class="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                                        Type
                                    </th>
                                    <th class="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                                        Stock
                                    </th>
                                    <th class="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                                        N°Bulletin / N°Ordonnance
                                    </th>
                                    <th class="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                                        DR. Etab. Détenu(e)
                                    </th>
                                    <th class="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                                        Quantite
                                    </th>
                                </tr>
                            </thead>
                            <tbody v-if="data">
                                <tr v-for="(sh, idx) of data.last_s_h" :key="idx" >
                                    <th class="p-4 px-6 text-xs text-left whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
                                        {{sh.type}}
                                    </th>
                                    <td v-if="sh.stock" class="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
                                        {{sh.stock.title}}
                                    </td>
                                    <td class="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
                                        {{sh.ordonnance}}
                                    </td>
                                    <td class="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
                                        <span v-if ="sh.type == 'dr_provenance' && sh.region ">
                                            {{sh.region.name}}
                                        </span>
                                        <span v-if ="(sh.type == 'etab_provenance' || sh.type == 'etab_transfere')&& sh.etab ">
                                            {{sh.etab.name}}
                                        </span>
                                        <span v-if ="sh.type == 'consommation' && sh.detaine ">
                                            {{sh.detaine.title}}
                                        </span>
                                        <span v-if ="sh.type != 'consommation' && sh.type != 'etab_provenance' && sh.type != 'etab_transfere' && sh.type != 'dr_provenance' && sh.stock.estum ">
                                            {{sh.stock.estum.name}}
                                        </span>
                                    </td>
                                    <td class="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
                                        {{sh.quantite}}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          <div class="w-full px-4 xl:w-4/12">
              <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
                  <div class="px-4 py-3 mb-0 border-0 rounded-t">
                      <div class="flex flex-wrap items-center">
                          <div class="relative flex-1 flex-grow w-full max-w-full px-4">
                              <h3 class="text-base font-semibold text-gray-800">
                                  Stocks
                              </h3>
                          </div>
                          <div class="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
                                <inertia-button :href="route('admin.stocks.index')" style="transition:all .15s ease"
                                        classes="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none">
                                    Voir tout
                                </inertia-button>
                          </div>
                      </div>
                  </div>
                  <div class="block w-full overflow-x-auto">
                      <!-- Projects table -->
                    <table class="items-center w-full bg-transparent border-collapse">
                        <thead class="thead-light">
                            <tr>
                                <th class="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                                    Medicament
                                </th>
                                <th class="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                                    Status
                                </th>
                                <th class="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                                    Quantite
                                </th>
                            </tr>
                        </thead>
                        <tbody v-if="data" class="text-md">
                            <tr v-for="(ss, idx) of data.stocks" :key="idx" class="text-md mb-6" >
                                <td class="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">{{ss.medicament}}</td>
                                <td class="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0" v-html="ss.Status"></td>
                                <td class="p-4 px-6 text-xs whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">{{ss.quantite}}</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
              </div>
          </div>
      </div>
  </jig-layout>
</template>
<script>
import JigLayout from "@/Layouts/JigLayout.vue";
import InertiaButton from "@/JigComponents/InertiaButton.vue";
export default {
    name: "dashboard-page",
    props: {
        data: Object,
    },
    components: {
        JigLayout,
        InertiaButton,
    },
    data() {
        return {
            date: new Date().getFullYear(),
            showModal: false,
        }
    }
};
</script>
