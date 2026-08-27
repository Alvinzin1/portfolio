<script setup>
import { computed } from 'vue'
import useLanguage from '@/composables/useLanguage'
import ConhecimentosPt from '@/assets/jsons/conhecimentos.json'
import ConhecimentosEn from '@/assets/jsons/conhecimentos_en.json'

const { currentLanguage, translations } = useLanguage()

// Alterna os conhecimentos com base no idioma ativo
const skillGroups = computed(() => {
  return currentLanguage.value === 'pt' ? ConhecimentosPt : ConhecimentosEn
})

// Mapeia classes de cores antigas do Bootstrap para classes utilitárias do Tailwind CSS
const getIconColor = (colorClass) => {
  if (!colorClass) return 'text-brand-orange'
  const mappings = {
    'text-danger': 'text-red-500',
    'text-light': 'text-slate-400',
    'text-warning': 'text-yellow-600',
    'text-info': 'text-brand-mint',
    'text-success': 'text-emerald-600',
    'text-purple': 'text-purple-600',
  }
  return mappings[colorClass] || 'text-brand-orange'
}
</script>

<template>
  <section 
    id="knowledge" 
    class="min-h-screen bg-brand-dark flex items-center py-24 border-b border-slate-200/80"
  >
    <div class="container mx-auto px-6 w-full">
      <!-- Cabeçalho da Seção -->
      <div class="text-left mb-16 space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-[2px] bg-brand-orange"></div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-light tracking-tight">
            {{ translations[currentLanguage].knowledge.title }}
          </h2>
        </div>
        <p class="text-slate-600 font-medium text-sm md:text-base max-w-xl font-sans leading-relaxed">
          {{ translations[currentLanguage].knowledge.subtitle }}
        </p>
      </div>

      <!-- Grid de Categorias -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div 
          v-for="(items, title) in skillGroups" 
          :key="title" 
          class="bg-white border-t-4 p-6 rounded-2xl shadow-sm flex flex-col h-full border-x border-b border-slate-200/80"
          :class="{
            'border-t-brand-orange': title.includes('Linguagens') || title.includes('Languages'),
            'border-t-brand-mint': title.includes('Metodologias') || title.includes('Methodologies'),
            'border-t-brand-light': title.includes('Banco') || title.includes('Database')
          }"
        >
          <!-- Título da Categoria -->
          <h3 class="text-lg font-bold text-brand-orange font-sans tracking-wide border-b border-slate-100 pb-4 mb-6">
            {{ title }}
          </h3>
          
          <!-- Grid de Skills -->
          <div class="grid grid-cols-2 gap-3">
            <div 
              v-for="(item, i) in items" 
              :key="i" 
              class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:-translate-y-0.5 hover:bg-white hover:shadow transition-all duration-300 group"
              :class="{
                'hover:border-brand-orange/40': title.includes('Linguagens') || title.includes('Languages'),
                'hover:border-brand-mint/40': title.includes('Metodologias') || title.includes('Methodologies'),
                'hover:border-brand-light/40': title.includes('Banco') || title.includes('Database')
              }"
            >
              <i 
                :class="[item.icon ? item.icon : 'fa-solid fa-code', getIconColor(item.color), 'text-lg group-hover:scale-110 transition-transform duration-200']"
              ></i>
              <span class="text-xs md:text-sm font-semibold text-brand-light group-hover:text-brand-orange transition-colors">
                {{ item.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
