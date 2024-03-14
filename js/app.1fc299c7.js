(function(){"use strict";var e={8334:function(e,a,t){var i=t(9242),o=t(3396),r=t(7139);const n={class:"bg-zinc-50 border-indigo-200 border-b w-full fixed z-50 dark:bg-zinc-900 dark:border-teal-800"},s={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2 md:py-0.5"},d=(0,o._)("span",{class:"self-center text-xl whitespace-nowrap text-indigo-900 font-bold uppercase dark:text-indigo-50"},"gabriel dev",-1),l=["aria-expanded"],c=(0,o._)("span",{class:"sr-only"},"Open main menu",-1),m=(0,o._)("i",{class:"fa-solid fa-bars"},null,-1),u=[c,m],g={class:"flex flex-col font-medium p-4 md:p-0 mt-4 gap-y-1 border border-indigo-100 rounded-lg bg-indigo-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-zinc-50 dark:bg-indigo-800 md:dark:bg-zinc-900 dark:border-indigo-700"};function p(e,a,t,i,c,m){const p=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("nav",n,[(0,o._)("div",s,[d,(0,o._)("button",{onClick:a[0]||(a[0]=(...e)=>m.toggleNavbar&&m.toggleNavbar(...e)),type:"button",class:"inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-indigo-900 rounded-lg md:hidden hover:bg-indigo-100 dark:text-indigo-50 dark:hover:bg-indigo-700","aria-controls":"navbar-multi-level","aria-expanded":c.isNavbarOpen.toString()},u,8,l),(0,o._)("div",{class:(0,r.C_)([[c.isNavbarOpen?"block":"hidden"],"w-full block md:flex md:flex-wrap md:items-center md:justify-between md:w-auto md:relative md:mt-0"])},[(0,o._)("ul",g,[(0,o._)("li",null,[(0,o.Wm)(p,{to:"/",class:"block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-white dark:bg-indigo-600 md:dark:bg-transparent","aria-current":"page"},{default:(0,o.w5)((()=>[(0,o.Uk)("Inicio")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(p,{to:"/",class:"block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-white dark:bg-indigo-600 md:dark:bg-transparent","aria-current":"page"},{default:(0,o.w5)((()=>[(0,o.Uk)("Projetos")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(p,{to:"/",class:"block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-white dark:bg-indigo-600 md:dark:bg-transparent","aria-current":"page"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contato")])),_:1})])]),(0,o._)("button",{id:"theme-toggle",type:"button",class:"text-indigo-700 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg text-sm p-2.5 my-2 ml-0 md:ml-10",onClick:a[1]||(a[1]=(...e)=>m.toggleDarkMode&&m.toggleDarkMode(...e))},[(0,o._)("i",{class:(0,r.C_)([c.isDarkMode?"fa-solid fa-sun":"fa-solid fa-moon"])},null,2)])],2)])])])}var f={data(){return{isNavbarOpen:!1,isDarkMode:!1}},methods:{toggleDarkMode(){this.isDarkMode=!this.isDarkMode,document.body.classList.toggle("dark",this.isDarkMode),localStorage.setItem("darkMode",this.isDarkMode?"dark":"light")},toggleNavbar(){this.isNavbarOpen=!this.isNavbarOpen}},created(){const e=localStorage.getItem("darkMode");"dark"===e&&this.toggleDarkMode()}},x=t(89);const v=(0,x.Z)(f,[["render",p]]);var b=v;const h={class:"body-font bg-zinc-50 dark:bg-zinc-900"},k=(0,o.uE)('<div class="container p-5 mx-auto flex items-center sm:flex-row flex-col"><span class="ml-3 text-xl font-bold text-indigo-900 dark:text-indigo-50">GABRIEL DEV</span><p class="text-sm text-zinc-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-zinc-200 sm:py-2 sm:mt-0 mt-4">© 2023</p><span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"><a href="https://twitter.com/alvinzin1_" target="_blank" class="text-xl mx-2 text-zinc-600 transition-colors duration-100 transform dark:text-zinc-300 hover:text-indigo-900 dark:hover:text-teal-500" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a><a href="https://www.instagram.com/alvinzin1_/" target="_blank" class="text-xl mx-2 text-zinc-600 transition-colors duration-100 transform dark:text-zinc-300 hover:text-indigo-900 dark:hover:text-teal-500" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a><a href="https://www.linkedin.com/in/gabrielsouza99/" target="_blank" class="text-xl mx-2 text-zinc-600 transition-colors duration-100 transform dark:text-zinc-300 hover:text-indigo-900 dark:hover:text-teal-500" aria-label="Linkedln"><i class="fa-brands fa-linkedin"></i></a><a href="https://github.com/OliveiraGabrielDev" target="_blank" class="text-xl mx-2 text-zinc-600 transition-colors duration-100 transform dark:text-zinc-300 hover:text-indigo-900 dark:hover:text-teal-500" aria-label="Github"><i class="fa-brands fa-github"></i></a></span></div>',1),w=[k];function z(e,a,t,i,r,n){return(0,o.wg)(),(0,o.iD)("footer",h,w)}var _={};const y=(0,x.Z)(_,[["render",z]]);var j=y,D={__name:"App",setup(e){return(e,a)=>{const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(b),(0,o.Wm)(t),(0,o.Wm)(j)],64)}}};const O=D;var P=O,C=t(2483),M=t.p+"img/perfil.506c4eaf.png";const L=(0,o.uE)('<section class="body-font pt-12 lg:py-24 bg-zinc-50 dark:bg-zinc-900"><div class="w-full container px-5 mx-auto flex flex-wrap flex-col bg-gradient-to-r from-indigo-800 to-indigo-950 dark:from-teal-800 dark:to-teal-950 lg:ml-auto lg:rounded-lg"><div class="flex flex-wrap w-full"><div class="lg:w-1/3 w-full content-start rounded-lg overflow-hidden mt-6 lg:mt-0 p-16 grid justify-items-center"><img src="'+M+'" class="sm:size-64 rounded-full border-8 border-indigo-50"></div><div class="lg:w-2/3 lg:pr-10 flex flex-wrap -mx-4 mt-auto mb-auto"><div class="w-full lg:p-4 px-4 mb-6 text-zinc-100"><h1 class="title-font font-medium text-xl mb-2">Eu sou Gabriel Souza Oliveira, um desenvolvedor fullstack</h1><div class="leading-relaxed">Atuando na área há quase 7 anos, comecei a programar desde 2017. Desenvolvi vários projetos para empresas em que estive presente. Hoje estou terminando minha formação em ciências da computação e trabalhando como desenvolvedor fullstack com stacks principais sendo Vue.js e PHP/Laravel.</div></div><div class="p-4 w-1/3 text-center"><h2 class="title-font font-medium text-3xl text-teal-500 dark:text-indigo-500">+3</h2><p class="leading-relaxed text-zinc-100 dark:text-zinc-100">Experiências profissional</p></div><div class="p-4 w-1/3 text-center"><h2 class="title-font font-medium text-3xl text-teal-500 dark:text-indigo-500">+10</h2><p class="leading-relaxed text-zinc-100 dark:text-zinc-100">Projetos realizados</p></div><div class="p-4 w-1/3 text-center"><h2 class="title-font font-medium text-3xl text-teal-500 dark:text-indigo-500">3</h2><p class="leading-relaxed text-zinc-100 dark:text-zinc-100">Empresas trabalhadas</p></div></div></div></div></section>',1),N={class:"body-font bg-zinc-50 dark:bg-zinc-900"},q={class:"container px-5 py-12 mx-auto flex flex-wrap"},S=(0,o._)("h3",{class:"lg:text-5xl text-4xl font-bold text-indigo-800 dark:text-teal-600"},[(0,o.Uk)("Minhas experiências "),(0,o._)("span",{class:"text-teal-400 font-bold dark:text-indigo-600"},".")],-1),A={class:"flex flex-wrap w-full"},E={class:"lg:w-1/2 lg:pr-10 lg:py-6"},G=(0,o._)("h4",{class:"lg:text-2xl text-3xl mt-8 text-indigo-700 dark:text-teal-600"},"Profissionais",-1),H=(0,o._)("div",{class:"h-1 w-20 bg-teal-400 rounded mt-2 mb-5 dark:bg-indigo-700"},null,-1),I={class:"lg:w-1/2 lg:pr-10 lg:py-6"},W=(0,o._)("h4",{class:"lg:text-2xl text-3xl mt-8 text-indigo-700 dark:text-teal-600"},"Acadêmicas",-1),J=(0,o._)("div",{class:"h-1 w-20 bg-teal-400 rounded mt-2 mb-5 dark:bg-indigo-700"},null,-1);function V(e,a,t,i,r,n){const s=(0,o.up)("Step");return(0,o.wg)(),(0,o.iD)("main",null,[L,(0,o._)("section",N,[(0,o._)("div",q,[S,(0,o._)("div",A,[(0,o._)("div",E,[G,H,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.experienciasProfissionais,((e,a)=>((0,o.wg)(),(0,o.j4)(s,{key:e.id,isLast:a===r.experienciasProfissionais.length-1,data:e},null,8,["isLast","data"])))),128))]),(0,o._)("div",I,[W,J,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.experienciasAcademicas,((e,a)=>((0,o.wg)(),(0,o.j4)(s,{key:e.id,isLast:a===r.experienciasAcademicas.length-1,data:e},null,8,["isLast","data"])))),128))])])])])])}const U={key:0,class:"h-full w-10 absolute inset-0 flex items-center justify-center"},Z=(0,o._)("div",{class:"h-full w-1 bg-zinc-200 pointer-events-none"},null,-1),B=[Z],F={class:"flex-shrink-0 w-10 h-10 rounded-full bg-indigo-700 inline-flex items-center justify-center text-white relative z-10 dark:bg-teal-700"},T={class:"flex-grow pl-4"},K={class:"font-bold title-font text-sm text-indigo-700 mb-1 tracking-wider uppercase dark:text-teal-600"},R={class:"text-sm text-zinc-950 uppercase dark:text-zinc-50"},Y={class:"leading-relaxed text-zinc-950 dark:text-zinc-50"};function Q(e,a,t,i,n,s){return(0,o.wg)(),(0,o.iD)("div",{class:(0,r.C_)({"flex relative pb-12":!t.isLast,"flex relative":t.isLast})},[t.isLast?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",U,B)),(0,o._)("div",F,[(0,o._)("i",{class:(0,r.C_)([t.data.final?"fa-solid fa-building-circle-check":"fa-solid fa-building-user"])},null,2)]),(0,o._)("div",T,[(0,o._)("h2",K,(0,r.zw)(t.data.cargo),1),(0,o._)("h6",R,(0,r.zw)(t.data.instituicao)+" | "+(0,r.zw)(t.data.inicio)+" - "+(0,r.zw)(t.data.final?t.data.final:"Atualmente"),1),(0,o._)("p",Y,(0,r.zw)(t.data.descricao),1)])],2)}var X={props:{data:{type:Object,required:!0},isLast:{type:Boolean,default:!1}}};const $=(0,x.Z)(X,[["render",Q]]);var ee=$,ae=JSON.parse('{"W":[{"cargo":"membro da liga de programação em c","instituicao":"unifacs","inicio":"fev 2017","final":"nov 2017","descricao":"Fui membro da liga acadêmica de linguagem de programação C, estando presente na equipe de professores em certo momento durante a passagem pela liga. Na liga eram realizados exercícios em C, além de desafios em que se criava um ambiente de grupo e também de troca de conhecimento das pessoas."},{"cargo":"voluntário","instituicao":"pure startup","inicio":"mar 2018","final":"jun 2018","descricao":"Fui membro da liga acadêmica de linguagem de programação C, estando presente na equipe de professores em certo momento durante a passagem pela liga. Na liga eram realizados exercícios em C, além de desafios em que se criava um ambiente de grupo e também de troca de conhecimento das pessoas."},{"cargo":"projetista do núcleo de t.i","instituicao":"praxis empresa jr","inicio":"jan 2018","final":"jul 2019","descricao":"Fui membro da liga acadêmica de linguagem de programação C, estando presente na equipe de professores em certo momento durante a passagem pela liga. Na liga eram realizados exercícios em C, além de desafios em que se criava um ambiente de grupo e também de troca de conhecimento das pessoas."},{"cargo":"diretor de marketing e vendas","instituicao":"praxis empresa jr","inicio":"jan 2019","final":"jul 2019","descricao":"Com foco em conhecer novas áreas e testar o senso de adaptação à uma nova realidade, atuei no cargo de diretor de Marketing e vendas, onde consegui desenvolver ainda mais minhas skills de liderança e de trabalho em equipe, além de expandir o networking e soft skills necessárias para o mercado de trabalho."},{"cargo":"assessor de comunicação","instituicao":"nej salvador","inicio":"abr 2019","final":"jul 2019","descricao":"Integrei o primeiro time do Núcleo de Empresas Juniores de Salvador, onde desempenhei um papel na área de comunicação e mídias sociais. Minhas responsabilidades incluíram a gestão de anúncios do núcleo e a criação de conteúdo."}],"J":[{"cargo":"desenvolvedor web e mobile","instituicao":"ga software","inicio":"fev 2021","final":"nov 2021","descricao":"Na GA Software, empresa de desenvolvimento de sistemas, atuei como desenvolvedor web front-end em todos sistemas dos produtos da LS System da empresa e atuei no back-end de alguns desses sistemas utilizando do framework de PHP, Laravel. Já no desenvolvimento mobile fiquei a cargo do front-end nos aplicativos Confia, B.I Metas e Guia Pessoal utilizando as linguagens Quasar e React Native."},{"cargo":"analista de sistemas jr","instituicao":"acp group","inicio":"nov 2021","final":"nov 2022","descricao":"Trabalhei na equipe de sustentação para sistema da PRODEB e na equipe de desenvolvimento da Prefeitura de Camaçari. Eu utilizei Kanban, Scrum como metodologias ágeis e Docker para gerenciamento de containers. Utilizo para produção da modelagem do banco de dados Microsoft SQL Server e para o desenvolvimento de telas trabalhei com Vue e serviços utilizando o Laravel."},{"cargo":"analista de sistemas pl","instituicao":"prefeitura de salvador","inicio":"nov 2022","final":"","descricao":"Na controladoria geral do município, órgão central do sistema de controle interno. Atuo no desenvolvimento fullstack de sistemas com foco em PHP, Laravel, Vue.js e Oracle. Junto com a equipe produzimos Api’s e sistemas para melhorias na gestão financeira do município."}]}'),te={name:"HomeView",components:{Step:ee},data(){return{experienciasProfissionais:[],experienciasAcademicas:[]}},created(){this.experienciasProfissionais=ae.J,this.experienciasAcademicas=ae.W}};const ie=(0,x.Z)(te,[["render",V]]);var oe=ie;function re(e,a,t,i,o,r){return null}var ne={name:"AboutView"};const se=(0,x.Z)(ne,[["render",re]]);var de=se;const le=[{path:"/",name:"home",component:oe,meta:{title:"Gabriel Dev - Inicio"}},{path:"/projects",name:"projects",component:de,meta:{title:"Gabriel Dev - Projetos"}}],ce=(0,C.p7)({history:(0,C.PO)("/portfolio/"),routes:le});ce.beforeEach(((e,a,t)=>{document.title=e.meta.title||"Gabriel Dev",t()}));var me=ce;(0,i.ri)(P).use(me).mount("#app")}},a={};function t(i){var o=a[i];if(void 0!==o)return o.exports;var r=a[i]={exports:{}};return e[i].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,i,o,r){if(!i){var n=1/0;for(c=0;c<e.length;c++){i=e[c][0],o=e[c][1],r=e[c][2];for(var s=!0,d=0;d<i.length;d++)(!1&r||n>=r)&&Object.keys(t.O).every((function(e){return t.O[e](i[d])}))?i.splice(d--,1):(s=!1,r<n&&(n=r));if(s){e.splice(c--,1);var l=o();void 0!==l&&(a=l)}}return a}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,o,r]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/portfolio/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,i){var o,r,n=i[0],s=i[1],d=i[2],l=0;if(n.some((function(a){return 0!==e[a]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(d)var c=d(t)}for(a&&a(i);l<n.length;l++)r=n[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},i=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(8334)}));i=t.O(i)})();
//# sourceMappingURL=app.1fc299c7.js.map