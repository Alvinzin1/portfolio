<script setup>
import mainImage from '@/assets/images/perfil.png';
import useLanguage from '@/composables/useLanguage'

const { currentLanguage, translations } = useLanguage()
</script>

<template>
  <section 
    id="about" 
    class="bg-brand-darker min-h-screen flex items-center justify-center py-24 border-b border-white/5 relative overflow-hidden"
  >
    <!-- Efeito de luz de fundo -->
    <div class="absolute w-[300px] h-[300px] bg-brand-mint/5 rounded-full blur-[80px] top-1/4 right-1/4 pointer-events-none"></div>

    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Coluna da Foto -->
        <div class="lg:col-span-4 flex justify-center">
          <div class="relative max-w-xs md:max-w-sm w-full aspect-square rounded-2xl p-[2px] bg-gradient-to-tr from-brand-orange to-brand-mint overflow-hidden shadow-2xl group transition-all duration-300 hover:shadow-brand-orange/10 hover:scale-[1.01]">
            <div class="w-full h-full rounded-[14px] overflow-hidden bg-brand-dark relative">
              <img 
                :src="mainImage" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Gabriel Souza"
              >
              <!-- Overlay gradiente sutil -->
              <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        <!-- Coluna de Informações -->
        <div class="lg:col-span-8 text-left space-y-6">
          <div class="space-y-2">
            <!-- Título da Seção com Detalhe Laranja -->
            <div class="flex items-center gap-3">
              <div class="w-8 h-[2px] bg-brand-orange"></div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-brand-light tracking-tight">
                {{ translations[currentLanguage].about.title }}
              </h2>
            </div>
            <!-- Subtítulo de Destaque -->
            <p class="text-lg md:text-xl font-medium text-brand-orange leading-relaxed font-sans pt-2">
              {{ translations[currentLanguage].about.subtitle }}
            </p>
          </div>

          <!-- Texto Sobre Mim Traduzido -->
          <div class="space-y-4 text-slate-600 leading-relaxed font-sans text-sm md:text-base">
            <p>
              <span v-if="currentLanguage === 'pt'">Eu sou </span>
              <span v-else>I am </span>
              <strong class="text-brand-light font-semibold">Gabriel Souza Oliveira</strong>, 
              {{ translations[currentLanguage].about.text1 }}
            </p>
            <p>
              {{ translations[currentLanguage].about.text2 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
