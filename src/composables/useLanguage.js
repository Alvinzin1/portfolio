import { ref } from 'vue'

const currentLanguage = ref(localStorage.getItem('portfolio-lang') || 'pt')

export default function useLanguage() {
  const setLanguage = (lang) => {
    currentLanguage.value = lang
    localStorage.setItem('portfolio-lang', lang)
  }

  const toggleLanguage = () => {
    const nextLang = currentLanguage.value === 'pt' ? 'en' : 'pt'
    setLanguage(nextLang)
  }

  // Dicionário de termos estáticos traduzidos
  const translations = {
    pt: {
      nav: {
        inital: 'Início',
        about: 'Sobre mim',
        projects: 'Projetos',
        experiences: 'Trajetória',
        knowledge: 'Conhecimentos',
        contact: 'Contato',
      },
      hero: {
        role: 'Desenvolvedor Web & Mobile',
        downloadCv: 'Download CV',
      },
      about: {
        title: 'Sobre Mim',
        subtitle: 'Desenvolvedor fullstack apaixonado por criar soluções web e mobile modernas.',
        text1: 'desenvolvedor fullstack com experiência em PHP (Laravel) e Vue.js. Tenho forte base em APIs, modelagem de banco de dados e interfaces intuitivas. Minha trajetória combina técnica, liderança e comunicação, construídas em projetos acadêmicos e profissionais.',
        text2: 'Participei ativamente de ligas acadêmicas e empresas juniores, o que reforçou minha capacidade de aprender rápido e colaborar em equipe.',
      },
      projects: {
        title: 'Projetos',
        subtitle: 'Alguns trabalhos que desenvolvi com paixão e dedicação.',
        github: 'GitHub',
        website: 'Site',
      },
      experiences: {
        title: 'Um pouco sobre minhas experiências...',
        professional: 'Profissionais',
        academic: 'Acadêmicas',
        others: 'Outras',
      },
      knowledge: {
        title: 'Conhecimentos',
        subtitle: 'Um pouco sobre minhas habilidades técnicas.',
      },
      contact: {
        title: 'Contato',
        subtitle: 'Vamos conversar? Seja sobre projetos, tecnologia ou oportunidades.',
        copyEmail: 'Copiar E-mail',
        copied: 'E-mail copiado!',
        networksTitle: 'Minhas Redes',
        networksSubtitle: 'Escolha seu canal preferido para entrar em contato.',
      }
    },
    en: {
      nav: {
        inital: 'Home',
        about: 'About me',
        projects: 'Projects',
        experiences: 'Timeline',
        knowledge: 'Skills',
        contact: 'Contact',
      },
      hero: {
        role: 'Web & Mobile Developer',
        downloadCv: 'Download CV',
      },
      about: {
        title: 'About Me',
        subtitle: 'Full-stack developer passionate about building modern web and mobile solutions.',
        text1: 'a full-stack developer with experience in PHP (Laravel) and Vue.js. I have a strong foundation in APIs, database modeling, and intuitive user interfaces. My journey combines technical expertise, leadership, and communication skills, developed in both academic and professional projects.',
        text2: 'I actively participated in academic leagues and junior enterprises, which reinforced my ability to learn quickly and collaborate in teams.',
      },
      projects: {
        title: 'Projects',
        subtitle: 'A selection of works I developed with passion and dedication.',
        github: 'GitHub',
        website: 'Website',
      },
      experiences: {
        title: 'A bit about my experiences...',
        professional: 'Professional',
        academic: 'Academic',
        others: 'Others',
      },
      knowledge: {
        title: 'Skills',
        subtitle: 'A bit about my technical skills.',
      },
      contact: {
        title: 'Contact',
        subtitle: "Let's talk? Whether it's about projects, tech, or opportunities.",
        copyEmail: 'Copy Email',
        copied: 'Email copied!',
        networksTitle: 'My Networks',
        networksSubtitle: 'Choose your preferred channel to get in touch.',
      }
    }
  }

  return {
    currentLanguage,
    toggleLanguage,
    setLanguage,
    translations,
  }
}
