<script setup>
import { ref, watch } from 'vue';

const visible = ref(false);
const toastClass = ref('bg-brand-forest/90 border-white/10 text-white');
const iconClass = ref('fa-solid fa-circle-check text-brand-orange');

const props = defineProps({
    flash: Object,
    message: String
});

const showToast = () => {
    visible.value = true;
    setTimeout(() => {
        visible.value = false;
    }, 4000);
};

watch(
    () => props.flash,
    (flash) => {
        if (!flash || Object.keys(flash).length === 0) return;
        
        if (flash.success) {
            toastClass.value = 'bg-brand-forest/90 border-brand-orange/20 text-white';
            iconClass.value = 'fa-solid fa-circle-check text-brand-orange';
            showToast();
        } else if (flash.error) {
            toastClass.value = 'bg-red-950/90 border-red-500/30 text-red-200';
            iconClass.value = 'fa-solid fa-circle-xmark text-red-400';
            showToast();
        } else if (flash.warning) {
            toastClass.value = 'bg-amber-950/90 border-amber-500/30 text-amber-200';
            iconClass.value = 'fa-solid fa-triangle-exclamation text-amber-400';
            showToast();
        } else if (flash.info) {
            toastClass.value = 'bg-brand-dark/95 border-brand-mint/30 text-brand-light';
            iconClass.value = 'fa-solid fa-circle-info text-brand-mint';
            showToast();
        }
    },
    { deep: true }
);
</script>

<template>
  <transition
    enter-active-class="transition duration-300 ease-out transform"
    enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:translate-x-4"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition duration-200 ease-in transform"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div 
      v-if="visible" 
      class="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3.5 rounded-xl border backdrop-blur-md shadow-2xl max-w-sm"
      :class="toastClass"
      role="alert"
    >
      <i :class="iconClass" class="text-lg flex-shrink-0" />
      <div class="text-sm font-semibold tracking-wide mr-2">
        {{ message }}
      </div>
      <button 
        type="button" 
        class="ml-auto w-6 h-6 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/50 hover:text-white transition-colors" 
        @click="visible = false"
      >
        <i class="fa-solid fa-xmark text-xs" />
      </button>
    </div>
  </transition>
</template>
