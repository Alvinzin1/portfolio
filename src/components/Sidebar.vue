<script setup>
import { computed } from 'vue'
import useLanguage from '@/composables/useLanguage'
import MainImagePt from '@/assets/images/perfil.png'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle'])

const { currentLanguage, translations, setLanguage } = useLanguage()

// Imagem fixa (a foto do perfil)
const mainImage = computed(() => MainImagePt)

// Itens de Navegação com âncoras na mesma página
const menuItems = [
  { to: 'inital', icon: 'fa-solid fa-house', langKey: 'inital' },
  { to: 'about', icon: 'fa-solid fa-user', langKey: 'about' },
  { to: 'projects', icon: 'fa-solid fa-code', langKey: 'projects' },
  { to: 'experiences', icon: 'fa-solid fa-graduation-cap', langKey: 'experiences' },
  { to: 'knowledge', icon: 'fa-solid fa-brain', langKey: 'knowledge' },
  { to: 'contact', icon: 'fa-solid fa-envelope', langKey: 'contact' }
]

// Lista de redes sociais para a sidebar
const socialMedias = [
    { icon: 'fa-brands fa-instagram', label: 'instagram', link: 'https://www.instagram.com/gabrielsooliveira' },
    { icon: 'fa-brands fa-github', label: 'github', link: 'https://github.com/gabrielsooliveira' },
    { icon: 'fa-brands fa-x-twitter', label: 'twitter', link: 'https://x.com/alvinzin1_' },
    { icon: 'fa-brands fa-linkedin', label: 'linkedin', link: 'https://www.linkedin.com/in/gabrielsouza99' }
]
</script>

<template>
  <aside
    ref="sidebar"
    class="fixed top-0 bottom-0 left-0 w-[320px] bg-white border-r border-slate-200 flex flex-col p-6 z-50 transition-transform duration-300 ease-in-out -translate-x-full md:translate-x-0"
    :class="{ 'translate-x-0 shadow-2xl': isOpen }"
  >
    <!-- Foto Perfil -->
    <div class="flex justify-center mt-4">
      <div class="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-md group">
        <img 
          :src="mainImage" 
          alt="Gabriel Souza" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
    </div>

    <!-- Nome e Titulo -->
    <div class="text-center mt-4">
      <router-link to="/" class="inline-block text-slate-900 hover:text-brand-orange transition-colors">
        <h1 class="text-xl font-bold tracking-wide font-sans">Gabriel Souza</h1>
      </router-link>
      <p class="text-xs text-brand-orange font-semibold tracking-wider uppercase mt-1">
        {{ translations[currentLanguage].hero.role }}
      </p>
    </div>

    <!-- Redes Sociais -->
    <div class="flex justify-center gap-3 mt-6">
      <a 
        v-for="socialMedia in socialMedias" 
        :key="socialMedia.label" 
        :href="socialMedia.link" 
        target="_blank" 
        class="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-brand-orange hover:bg-slate-200/80 hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-200"
        :aria-label="socialMedia.label"
      >
        <i :class="socialMedia.icon" class="text-sm" />
      </a>
    </div>

    <!-- Menu Links -->
    <nav class="mt-8 flex-1 overflow-y-auto">
      <ul class="flex flex-col gap-1">
        <li v-for="item in menuItems" :key="item.to">
          <a
            :href="'#' + item.to"
            class="flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 hover:text-brand-orange group"
            @click="$emit('toggle')"
          >
            <i 
              :class="item.icon" 
              class="text-sm group-hover:scale-110 transition-transform duration-200" 
            />
            <span class="text-sm font-sans tracking-wide">
              {{ translations[currentLanguage].nav[item.langKey] }}
            </span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Seletor de Idioma Desktop -->
    <div class="mt-auto pt-6 border-t border-slate-200">
      <div class="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-1">
        <button 
          class="flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all duration-200 tracking-wider" 
          :class="currentLanguage === 'pt' ? 'bg-brand-orange text-white shadow font-bold' : 'text-slate-500 hover:text-slate-800'"
          @click="setLanguage('pt')"
        >
          PORTUGUÊS
        </button>
        <button 
          class="flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all duration-200 tracking-wider" 
          :class="currentLanguage === 'en' ? 'bg-brand-orange text-white shadow font-bold' : 'text-slate-500 hover:text-slate-800'"
          @click="setLanguage('en')"
        >
          ENGLISH
        </button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
/* Scrollbar customizada para o menu se necessário */
nav::-webkit-scrollbar {
  width: 4px;
}
nav::-webkit-scrollbar-track {
  background: transparent;
}
nav::-webkit-scrollbar-thumb {
  @apply bg-slate-200 rounded;
}
</style>
