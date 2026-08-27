<script setup>
import useLanguage from '@/composables/useLanguage'

const { currentLanguage, translations } = useLanguage()
</script>

<template>
  <section 
    id="inital" 
    class="min-h-screen flex items-center justify-center bg-brand-dark relative overflow-hidden"
  >
    <!-- Efeitos de Luz de Fundo Minimalistas -->
    <div class="absolute w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 pointer-events-none animate-pulse"></div>
    <div class="absolute w-[400px] h-[400px] bg-brand-mint/5 rounded-full blur-[100px] bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-6 text-center z-10">
      <div class="space-y-6">
        <!-- Subtítulo de Introdução -->
        <p class="text-xs md:text-sm font-bold text-brand-orange uppercase tracking-[0.3em] opacity-0 animate-slide-up">
          Hello World, I am
        </p>
        
        <!-- Nome Principal -->
        <h1 class="text-5xl md:text-8xl font-extrabold tracking-tight text-gradient m-0 opacity-0 animate-slide-up delay-100 pb-2">
          Gabriel Souza
        </h1>
        
        <!-- Cargo Traduzido -->
        <p class="text-lg md:text-2xl font-medium text-brand-mint tracking-wide opacity-0 animate-slide-up delay-200">
          {{ translations[currentLanguage].hero.role }}
        </p>

        <!-- Botão de Download CV -->
        <div class="pt-4 opacity-0 animate-slide-up delay-300">
          <a 
            href="/portfolio/docs/Curriculo.pdf" 
            target="_blank" 
            class="inline-flex items-center gap-2.5 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange/95 text-brand-dark text-xs font-extrabold tracking-widest uppercase rounded-xl shadow-lg shadow-brand-orange/10 hover:shadow-brand-orange/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <i class="fa-solid fa-file-pdf text-sm" />
            <span>{{ translations[currentLanguage].hero.downloadCv }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Indicador de Scroll Minimalista -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-30 hover:opacity-80 transition-opacity pointer-events-none">
      <div class="w-[1.5px] h-10 bg-gradient-to-b from-brand-orange to-transparent"></div>
    </div>
  </section>
</template>
