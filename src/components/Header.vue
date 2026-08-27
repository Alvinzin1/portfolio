<script setup>
import useLanguage from '@/composables/useLanguage'

const { currentLanguage, toggleLanguage } = useLanguage()

defineEmits(['toggleSidebar'])
</script>

<template>
  <header class="fixed top-0 left-0 right-0 h-16 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 px-4 flex justify-between items-center z-30 md:hidden">
    <!-- Botão de abrir menu lateral (hambúrguer) -->
    <button 
      class="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-forest/40 border border-white/10 text-brand-orange hover:bg-brand-forest/60 transition-all duration-200" 
      @click="$emit('toggleSidebar')"
      aria-label="Toggle Sidebar"
    >
      <i class="fa-solid fa-bars text-lg" />
    </button>

    <!-- Botão Seletor de Idioma Mobile -->
    <button 
      class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-forest/40 border border-white/10 text-xs font-bold tracking-wider hover:bg-brand-forest/60 text-brand-orange transition-all duration-200"
      @click="toggleLanguage"
    >
      <i class="fa-solid fa-globe" />
      <span>{{ currentLanguage.toUpperCase() }}</span>
    </button>
  </header>
</template>
