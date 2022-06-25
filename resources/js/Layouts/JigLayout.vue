<template>
    <div class="bg-gray-200">
        <slot name="sidebar">
            <sidebar-component
                :menu="sidebarMenu"
                class="z-40"
                v-if="withSidebar && !fullScreenBody"
            ></sidebar-component>
        </slot>
        <div
            class="relative flex flex-col min-h-screen"
            :class="{ 'md:ml-64': withSidebar }"
        >
            <navbar-component class="gap-x-2" v-if="!fullScreenBody">
                <!-- <slot name="navbar-menu">
                    <jet-nav-link
                        :class="`text-secondary font-bold hover:text-secondary-400`"
                        :href="route('dashboard')"
                        :active="route().current('dashboard')"
                    >
                        Frontend
                    </jet-nav-link>
                </slot> -->
            </navbar-component>
            <!-- Header -->
            <jig-notifications />

            <div  v-if="!fullScreenBody" class="relative max-w-full pb-32 bg-primary" >
                <div class="pb-8 mt-2 border-t lg:mx-4 border-primary-400"  ></div>
                <!--                <inertia-button v-if="withSidebar" @click.native.prevent="toggleSidebarMin" pill style="z-index: 100"
                                class="absolute text-white bg-gray-800 h-11 w-11 -top-2 -left-3 md:-top-1 md:-left-8 focus:outline-none focus:ring-0">
                    <i class="fas" :class="{'fa-angle-left': !minSidebar,'fa-angle-right': minSidebar}"></i>
                </inertia-button>-->
                <div class="w-full px-1 pt-8 mx-auto mb-4 lg:px-10">
                    <div>
                        <!-- Card stats -->
                        <div class="flex flex-wrap">
                            <slot name="header">
                                
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col justify-between flex-1 w-full px-1 mx-auto bg-gray-200  lg:px-10"
                :class="{
                    '-mt-24': !fullScreenBody,
                    'pt-4 bg-gray-500': fullScreenBody,
                }"
            >
                <div class="relative flex-auto">
                    <slot />
                </div>
                <footer class="flex-initial py-4">
                    <div class="container px-1 mx-auto md:px-4">
                        <hr class="mb-4 border-gray-300 border-b-1" />
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>
<script>
import NavbarComponent from "@/Layouts/Jig/Navbar.vue";
import SidebarComponent from "@/Layouts/Jig/Sidebar.vue";
import JigNotifications from "@/JigComponents/JigNotifications.vue";
import JetNavLink from "@/Jetstream/NavLink.vue";
import InertiaButton from "@/JigComponents/InertiaButton.vue";
import ApplicationMark from "@/Jetstream/ApplicationMark.vue";
import menu from "@/Layouts/Jig/Menu.json";

import { defineComponent } from "vue";
export default defineComponent({
    name: "JigLayout",
    components: {
        ApplicationMark,
        InertiaButton,
        JigNotifications,
        NavbarComponent,
        SidebarComponent,
        JetNavLink,
    },
    props: {
        withSidebar: {
            default: true,
        },
        fullScreenBody: {
            default: false,
        },
    },
    data() {
        return {
            date: new Date().getFullYear(),
            minSidebar: false,
            sidebarMenu: menu,
        };
    },
    mounted() {
        this.minSidebar = !this.withSidebar;
        console.log("new page! Setting body overflow to auto");
        document.body.style.overflow = "auto";
    },
    methods: {
        toggleSidebarMin() {
            this.minSidebar = !this.minSidebar;
            localStorage.setItem("minSidebar", this.minSidebar);
        },
    },
});
</script>
