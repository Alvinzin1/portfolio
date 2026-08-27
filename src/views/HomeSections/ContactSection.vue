<script setup>
import { ref } from 'vue'
import Toast from '@/components/Toast.vue'
import useLanguage from '@/composables/useLanguage'

const { currentLanguage, translations } = useLanguage()

// Variáveis para controlar o toast
const flash = ref({})
const toastMessage = ref('')

const copyEmailToClipboard = async () => {
  try {
    await navigator.clipboard.writeText('gabrielsouzacontato.99@gmail.com')
    toastMessage.value = translations.value[currentLanguage.value].contact.copied
    flash.value = { success: true }
  } catch (err) {
    toastMessage.value = 'Failed to copy email.'
    flash.value = { error: true }
  }
}

const socialMedias = [
  { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', link: 'https://www.linkedin.com/in/gabrielsouza99', color: 'text-brand-mint' },
  { icon: 'fa-brands fa-github', label: 'GitHub', link: 'https://github.com/gabrielsooliveira', color: 'text-slate-800' },
  { icon: 'fa-brands fa-instagram', label: 'Instagram', link: 'https://www.instagram.com/gabrielsooliveira', color: 'text-red-500' },
  { icon: 'fa-brands fa-x-twitter', label: 'Twitter / X', link: 'https://x.com/alvinzin1_', color: 'text-brand-orange' }
]
</script>

<template>
  <section 
    id="contact" 
    class="min-h-screen bg-brand-darker flex items-center justify-center py-24 relative overflow-hidden"
  >
    <!-- Glow background -->
    <div class="absolute w-[400px] h-[400px] bg-brand-orange/3 rounded-full blur-[100px] bottom-1/4 left-1/4 pointer-events-none"></div>
    <div class="container mx-auto px-6 max-w-4xl w-full space-y-12">
      <!-- Cabeçalho da Seção -->
      <div class="text-left space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-[2px] bg-brand-orange"></div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-light tracking-tight">
            {{ translations[currentLanguage].contact.title }}
          </h2>
        </div>
        <p class="text-slate-600 font-medium text-sm md:text-base max-w-xl font-sans leading-relaxed">
          {{ translations[currentLanguage].contact.subtitle }}
        </p>
      </div>

      <!-- Copy Email Widget -->
      <div class="flex flex-col md:flex-row items-center gap-4 bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm">
        <div class="flex-1 text-center md:text-left">
          <p class="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1">E-mail</p>
          <p class="text-lg md:text-xl font-extrabold text-brand-light tracking-wide select-all font-mono">
            gabrielsouzacontato.99@gmail.com
          </p>
        </div>
        <button 
          @click="copyEmailToClipboard"
          class="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange/95 text-white text-xs font-extrabold tracking-widest uppercase rounded-xl shadow-lg shadow-brand-orange/15 hover:shadow-brand-orange/35 active:translate-y-0.5 hover:-translate-y-0.5 transition-all duration-200"
        >
          <i class="fa-solid fa-copy text-sm" />
          <span>{{ translations[currentLanguage].contact.copyEmail }}</span>
        </button>
      </div>

      <!-- Social Networks Section -->
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-bold text-brand-light tracking-wide">
            {{ translations[currentLanguage].contact.networksTitle }}
          </h3>
          <p class="text-slate-500 text-xs md:text-sm font-sans mt-1">
            {{ translations[currentLanguage].contact.networksSubtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <a 
            v-for="socialMedia in socialMedias" 
            :key="socialMedia.label" 
            :href="socialMedia.link" 
            target="_blank"
            class="flex items-center justify-between p-5 bg-white border border-slate-200/80 rounded-2xl hover:border-brand-orange/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-orange/5 transition-all duration-300 group"
          >
            <div class="flex items-center gap-3">
              <i :class="[socialMedia.icon, socialMedia.color]" class="text-2xl group-hover:scale-110 transition-transform duration-200" />
              <span class="text-sm font-bold text-slate-800 group-hover:text-brand-orange transition-colors">
                {{ socialMedia.label }}
              </span>
            </div>
            <i class="fa-solid fa-arrow-up-right-from-square text-xs text-slate-400 group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Toast de Notificação -->
  <Toast :flash="flash" :message="toastMessage" />
</template>
