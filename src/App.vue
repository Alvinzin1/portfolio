<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import useResponsiveSidebar from '@/composables/useResponsiveSidebar'

const { isSidebarOpen, toggleSidebar, isMobile, sidebarRef } = useResponsiveSidebar()

const sidebar = sidebarRef
</script>

<template>
  <div class="flex min-h-screen bg-brand-dark overflow-x-hidden text-brand-light">
    <!-- Sidebar -->
    <Sidebar :ref="sidebar" :isOpen="isSidebarOpen" @toggle="toggleSidebar" />
    
    <!-- Mobile Overlay -->
    <div 
      v-if="isMobile && isSidebarOpen" 
      class="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300 md:hidden" 
      @click="toggleSidebar"
    ></div>
    
    <!-- Main Content Area -->
    <div class="flex-1 w-full md:pl-[320px] transition-all duration-300">
      <Header @toggleSidebar="toggleSidebar" />
      <main class="w-full">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Estilos adicionais específicos podem ser deixados limpos, pois o Tailwind lida com o restante */
</style>
