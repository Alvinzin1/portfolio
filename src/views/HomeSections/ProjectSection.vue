<script setup>
import { computed } from 'vue'
import useLanguage from '@/composables/useLanguage'
import ProjetosPt from '@/assets/jsons/projetos.json'
import ProjetosEn from '@/assets/jsons/projetos_en.json'

const { currentLanguage, translations } = useLanguage()

// Alterna os projetos com base no idioma ativo
const projects = computed(() => {
  return currentLanguage.value === 'pt' ? ProjetosPt : ProjetosEn
})
</script>

<template>
  <section 
    id="projects" 
    class="min-h-screen bg-brand-dark flex items-center py-24 border-b border-slate-200/80"
  >
    <div class="container mx-auto px-6 w-full">
      <!-- Cabeçalho da Seção -->
      <div class="text-left mb-16 space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-[2px] bg-brand-orange"></div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-light tracking-tight">
            {{ translations[currentLanguage].projects.title }}
          </h2>
        </div>
        <p class="text-slate-600 font-medium text-sm md:text-base max-w-xl font-sans leading-relaxed">
          {{ translations[currentLanguage].projects.subtitle }}
        </p>
      </div>

      <!-- Grid de Projetos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div 
          v-for="projeto in projects" 
          :key="projeto.name" 
          class="bg-white border border-slate-200/80 p-6 rounded-2xl flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group"
          :class="projeto.type === 'API' 
            ? 'hover:border-brand-mint/40 hover:shadow-brand-mint/10' 
            : 'hover:border-brand-orange/40 hover:shadow-brand-orange/10'"
        >
          <div>
            <!-- Topo do Card -->
            <div class="flex justify-between items-start gap-4 mb-4">
              <h3 class="text-lg font-bold text-brand-light group-hover:text-brand-orange transition-colors">
                {{ projeto.name }}
              </h3>
              <span 
                class="text-[10px] px-2.5 py-1 font-bold uppercase rounded-md tracking-wider border"
                :class="projeto.type === 'API' 
                  ? 'bg-brand-mint/10 text-brand-mint border-brand-mint/20' 
                  : 'bg-brand-orange/10 text-brand-orange border-brand-orange/20'"
              >
                {{ projeto.type }}
              </span>
            </div>
            
            <!-- Descrição -->
            <p class="text-xs md:text-sm text-slate-600 font-sans leading-relaxed flex-grow">
              {{ projeto.description }}
            </p>
          </div>

          <!-- Rodapé com Links -->
          <div class="mt-6 flex gap-2.5">
            <a 
              v-if="projeto.github" 
              :href="projeto.github" 
              target="_blank" 
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
            >
              <i class="fa-brands fa-github text-sm" />
              <span>{{ translations[currentLanguage].projects.github }}</span>
            </a>
            
            <a 
              v-if="projeto.website" 
              :href="projeto.website" 
              target="_blank" 
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-brand-orange/30 text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-200"
            >
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]" />
              <span>{{ translations[currentLanguage].projects.website }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
