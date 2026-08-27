<script setup>
import { computed } from 'vue'
import useLanguage from '@/composables/useLanguage'
import TrajetoriasPt from '@/assets/jsons/trajetorias.json'
import TrajetoriasEn from '@/assets/jsons/trajetorias_en.json'

const { currentLanguage, translations } = useLanguage()

// Alterna a trajetória ativa com base no idioma selecionado
const trajectories = computed(() => {
  return currentLanguage.value === 'pt' ? TrajetoriasPt : TrajetoriasEn
})
</script>

<template>
  <section 
    id="experiences" 
    class="min-h-screen bg-brand-darker flex items-center py-24 border-b border-slate-200/80 relative overflow-hidden"
  >
    <div class="container mx-auto px-6 w-full">
      <!-- Cabeçalho da Seção -->
      <div class="text-left mb-16 space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-[2px] bg-brand-orange"></div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-light tracking-tight">
            {{ translations[currentLanguage].experiences.title }}
          </h2>
        </div>
      </div>

      <!-- Grid com as três colunas de trajetórias -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
        
        <!-- Coluna Profissional -->
        <div class="space-y-6">
          <div class="flex items-center gap-2.5 mb-2">
            <i class="fa-solid fa-briefcase text-brand-orange text-sm"></i>
            <h3 class="text-xl font-bold text-brand-light font-sans tracking-wide">
              {{ translations[currentLanguage].experiences.professional }}
            </h3>
          </div>
          <!-- Container da Timeline com Linha Customizada -->
          <div class="relative ml-3 pl-6 space-y-8 py-2">
            <div class="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-orange via-brand-mint to-transparent opacity-60"></div>
            
            <div 
              v-for="exp in trajectories.experienciasProfissionais"
              :key="exp.titulo"
              class="relative group"
            >
              <!-- Marcador Flutuante na Linha -->
              <span class="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-brand-orange text-brand-orange flex items-center justify-center shadow-sm shadow-brand-orange/10 group-hover:scale-110 transition-transform duration-300">
                <i :class="exp.icone" class="text-[9px]"></i>
              </span>
              
              <!-- Card de Conteúdo -->
              <div class="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl hover:border-brand-orange/30 hover:bg-white hover:shadow-lg transition-all duration-300">
                <h4 class="text-sm md:text-base font-extrabold text-brand-light leading-snug group-hover:text-brand-orange transition-colors">
                  {{ exp.titulo }}
                </h4>
                <span class="text-[11px] text-brand-mint font-semibold tracking-wider block mt-1">
                  {{ exp.empresa }} | {{ exp.periodo }}
                </span>
                <p class="text-xs md:text-sm text-slate-600 font-sans leading-relaxed mt-3">
                  {{ exp.descricao }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Coluna Acadêmica -->
        <div class="space-y-6">
          <div class="flex items-center gap-2.5 mb-2">
            <i class="fa-solid fa-graduation-cap text-brand-mint text-sm"></i>
            <h3 class="text-xl font-bold text-brand-light font-sans tracking-wide">
              {{ translations[currentLanguage].experiences.academic }}
            </h3>
          </div>
          <!-- Container da Timeline com Linha Customizada -->
          <div class="relative ml-3 pl-6 space-y-8 py-2">
            <div class="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-mint via-brand-orange to-transparent opacity-60"></div>
            
            <div 
              v-for="exp in trajectories.experienciasAcademicas"
              :key="exp.titulo"
              class="relative group"
            >
              <!-- Marcador Flutuante na Linha -->
              <span class="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-brand-mint text-brand-mint flex items-center justify-center shadow-sm shadow-brand-mint/10 group-hover:scale-110 transition-transform duration-300">
                <i :class="exp.icone" class="text-[9px]"></i>
              </span>
              
              <!-- Card de Conteúdo -->
              <div class="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl hover:border-brand-mint/30 hover:bg-white hover:shadow-lg transition-all duration-300">
                <h4 class="text-sm md:text-base font-extrabold text-brand-light leading-snug group-hover:text-brand-mint transition-colors">
                  {{ exp.titulo }}
                </h4>
                <span class="text-[11px] text-brand-orange font-semibold tracking-wider block mt-1">
                  {{ exp.empresa }} | {{ exp.periodo }}
                </span>
                <p class="text-xs md:text-sm text-slate-600 font-sans leading-relaxed mt-3">
                  {{ exp.descricao }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Coluna Outras -->
        <div class="space-y-6">
          <div class="flex items-center gap-2.5 mb-2">
            <i class="fa-solid fa-trophy text-slate-600 text-sm"></i>
            <h3 class="text-xl font-bold text-brand-light font-sans tracking-wide">
              {{ translations[currentLanguage].experiences.others }}
            </h3>
          </div>
          <!-- Container da Timeline com Linha Customizada -->
          <div class="relative ml-3 pl-6 space-y-8 py-2">
            <div class="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-slate-300 via-brand-orange to-transparent opacity-40"></div>
            
            <div 
              v-for="exp in trajectories.experienciasOutras"
              :key="exp.titulo"
              class="relative group"
            >
              <!-- Marcador Flutuante na Linha -->
              <span class="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-slate-300 text-slate-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <i :class="exp.icone" class="text-[9px]"></i>
              </span>
              
              <!-- Card de Conteúdo -->
              <div class="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-300">
                <h4 class="text-sm md:text-base font-extrabold text-brand-light leading-snug group-hover:text-slate-800 transition-colors">
                  {{ exp.titulo }}
                </h4>
                <span class="text-[11px] text-brand-mint font-semibold tracking-wider block mt-1">
                  {{ exp.empresa }} | {{ exp.periodo }}
                </span>
                <p class="text-xs md:text-sm text-slate-600 font-sans leading-relaxed mt-3">
                  {{ exp.descricao }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
