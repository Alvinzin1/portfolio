(function(){"use strict";var e={1776:function(e,a,t){var i=t(9242),o=t(3396),r=t(7139);const n={class:"bg-zinc-50 border-indigo-200 border-b w-full fixed z-50 dark:bg-zinc-900 dark:border-teal-800"},s={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2 md:py-0.5"},l=(0,o._)("span",{class:"self-center text-xl whitespace-nowrap text-indigo-900 font-bold uppercase dark:text-indigo-50"},"gabriel dev",-1),d=["aria-expanded"],c=(0,o._)("span",{class:"sr-only"},"Menu",-1),m=(0,o._)("i",{class:"fa-solid fa-bars"},null,-1),u=[c,m],p={class:"flex flex-col font-medium p-4 md:p-0 mt-4 gap-y-1 border border-indigo-100 rounded-lg bg-indigo-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-zinc-50 dark:bg-teal-800 md:dark:bg-zinc-900 dark:border-teal-700"};function g(e,a,t,i,c,m){const g=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("nav",n,[(0,o._)("div",s,[l,(0,o._)("button",{onClick:a[0]||(a[0]=(...e)=>m.toggleNavbar&&m.toggleNavbar(...e)),id:"menu",type:"button",class:"inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-indigo-900 rounded-lg md:hidden hover:bg-indigo-100 dark:text-teal-50 dark:hover:bg-teal-700","aria-controls":"navbar-multi-level","aria-expanded":c.isNavbarOpen.toString()},u,8,d),(0,o._)("div",{class:(0,r.C_)([[c.isNavbarOpen?"block":"hidden"],"w-full block md:flex md:flex-wrap md:items-center md:justify-between md:w-auto md:relative md:mt-0"])},[(0,o._)("ul",p,[(0,o._)("li",null,[(0,o.Wm)(g,{to:"/",class:"block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-white dark:bg-teal-600 md:dark:bg-transparent","aria-current":"page"},{default:(0,o.w5)((()=>[(0,o.Uk)("Inicio")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(g,{to:"/",class:"block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-white dark:bg-teal-600 md:dark:bg-transparent","aria-current":"page"},{default:(0,o.w5)((()=>[(0,o.Uk)("Projetos")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(g,{to:"/",class:"block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-white dark:bg-teal-600 md:dark:bg-transparent","aria-current":"page"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contato")])),_:1})])]),(0,o._)("button",{id:"theme-toggle",type:"button",class:"text-indigo-700 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg text-sm p-2.5 my-2 ml-0 md:ml-10",onClick:a[1]||(a[1]=(...e)=>m.toggleDarkMode&&m.toggleDarkMode(...e))},[(0,o._)("i",{class:(0,r.C_)([c.isDarkMode?"fa-solid fa-sun":"fa-solid fa-moon"])},null,2)])],2)])])])}var f={data(){return{isNavbarOpen:!1,isDarkMode:!1}},methods:{toggleDarkMode(){this.isDarkMode=!this.isDarkMode,document.body.classList.toggle("dark",this.isDarkMode),localStorage.setItem("darkMode",this.isDarkMode?"dark":"light")},toggleNavbar(){this.isNavbarOpen=!this.isNavbarOpen},closeNavbarOnClick(e){this.isNavbarOpen&&!e.target.closest("#menu")&&(this.isNavbarOpen=!1)}},created(){const e=localStorage.getItem("darkMode");"dark"===e&&this.toggleDarkMode()},mounted(){document.addEventListener("click",this.closeNavbarOnClick)},beforeDestroy(){document.removeEventListener("click",this.closeNavbarOnClick)}},x=t(89);const b=(0,x.Z)(f,[["render",g]]);var v=b;const h={class:"body-font bg-zinc-50 dark:bg-zinc-900"},k=(0,o.uE)('<div class="container p-5 mx-auto flex items-center sm:flex-row flex-col"><span class="ml-3 text-xl font-bold text-indigo-900 dark:text-indigo-50">GABRIEL DEV</span><p class="text-sm text-zinc-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-zinc-200 sm:py-2 sm:mt-0 mt-4">© 2023</p><span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"><a href="https://twitter.com/alvinzin1_" target="_blank" class="text-xl mx-2 text-zinc-600 transition-colors duration-100 transform dark:text-zinc-300 hover:text-indigo-900 dark:hover:text-teal-500" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a><a href="https://www.instagram.com/alvinzin1_/" target="_blank" class="text-xl mx-2 text-zinc-600 transition-colors duration-100 transform dark:text-zinc-300 hover:text-indigo-900 dark:hover:text-teal-500" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a><a href="https://www.linkedin.com/in/gabrielsouza99/" target="_blank" class="text-xl mx-2 text-zinc-600 transition-colors duration-100 transform dark:text-zinc-300 hover:text-indigo-900 dark:hover:text-teal-500" aria-label="Linkedln"><i class="fa-brands fa-linkedin"></i></a><a href="https://github.com/OliveiraGabrielDev" target="_blank" class="text-xl mx-2 text-zinc-600 transition-colors duration-100 transform dark:text-zinc-300 hover:text-indigo-900 dark:hover:text-teal-500" aria-label="Github"><i class="fa-brands fa-github"></i></a></span></div>',1),w=[k];function _(e,a,t,i,r,n){return(0,o.wg)(),(0,o.iD)("footer",h,w)}var z={};const y=(0,x.Z)(z,[["render",_]]);var j=y,D={__name:"App",setup(e){return(e,a)=>{const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(v),(0,o.Wm)(t),(0,o.Wm)(j)],64)}}};const O=D;var C=O,N=t(2483),P=t.p+"img/perfil.506c4eaf.png";const L={class:"body-font pt-12 lg:py-24 bg-zinc-50 dark:bg-zinc-900"},M={class:"w-full container px-5 mx-auto flex flex-wrap flex-col bg-gradient-to-r from-indigo-800 to-indigo-950 dark:from-teal-800 dark:to-teal-950 lg:ml-auto lg:rounded-lg"},q={class:"flex flex-wrap w-full"},E=(0,o._)("div",{class:"lg:w-1/3 w-full content-start rounded-lg overflow-hidden mt-6 lg:mt-0 p-16 grid justify-items-center"},[(0,o._)("img",{src:P,class:"sm:size-64 rounded-full border-8 border-indigo-50"})],-1),S={class:"lg:w-2/3 lg:pr-10 flex flex-wrap -mx-4 mt-auto mb-auto"},A={class:"w-full lg:p-4 px-4 mb-6 text-zinc-100"},G=(0,o._)("h1",{class:"title-font font-medium text-xl mb-2"},"Eu sou Gabriel Souza Oliveira, um desenvolvedor fullstack",-1),H=(0,o._)("div",{class:"leading-relaxed"},"Atuando na área há quase 7 anos, comecei a programar desde 2017. Desenvolvi vários projetos para empresas em que estive presente. Hoje estou terminando minha formação em ciências da computação e trabalhando como desenvolvedor fullstack com stacks principais sendo Vue.js e PHP/Laravel.",-1),I=["href"],W=(0,o.uE)('<div class="p-4 w-1/3 text-center"><h2 class="title-font font-medium text-3xl text-teal-500 dark:text-indigo-500">+3</h2><p class="leading-relaxed text-zinc-100 dark:text-zinc-100">Experiências profissional</p></div><div class="p-4 w-1/3 text-center"><h2 class="title-font font-medium text-3xl text-teal-500 dark:text-indigo-500">+10</h2><p class="leading-relaxed text-zinc-100 dark:text-zinc-100">Projetos realizados</p></div><div class="p-4 w-1/3 text-center"><h2 class="title-font font-medium text-3xl text-teal-500 dark:text-indigo-500">3</h2><p class="leading-relaxed text-zinc-100 dark:text-zinc-100">Empresas trabalhadas</p></div>',3),U={class:"body-font bg-zinc-50 dark:bg-zinc-900"},V={class:"container px-5 py-12 mx-auto flex flex-wrap"},J=(0,o._)("h3",{class:"lg:text-5xl text-4xl font-bold text-indigo-800 dark:text-teal-600"},[(0,o.Uk)("Minhas experiências "),(0,o._)("span",{class:"text-teal-400 font-bold dark:text-indigo-600"},".")],-1),Z={class:"flex flex-wrap w-full"},B={class:"lg:w-1/2 lg:pr-10 lg:py-6"},F=(0,o._)("h4",{class:"lg:text-2xl text-3xl mt-8 text-indigo-700 dark:text-teal-600"},"Profissionais",-1),T=(0,o._)("div",{class:"h-1 w-20 bg-teal-400 rounded mt-2 mb-5 dark:bg-indigo-700"},null,-1),K={class:"lg:w-1/2 lg:pr-10 lg:py-6"},R=(0,o._)("h4",{class:"lg:text-2xl text-3xl mt-8 text-indigo-700 dark:text-teal-600"},"Acadêmicas",-1),Y=(0,o._)("div",{class:"h-1 w-20 bg-teal-400 rounded mt-2 mb-5 dark:bg-indigo-700"},null,-1);function Q(e,a,t,i,r,n){const s=(0,o.up)("Step");return(0,o.wg)(),(0,o.iD)("main",null,[(0,o._)("section",L,[(0,o._)("div",M,[(0,o._)("div",q,[E,(0,o._)("div",S,[(0,o._)("div",A,[G,H,(0,o._)("a",{href:r.pdfUrl,download:"Curriculo.pdf",class:"mt-4 inline-flex text-white bg-teal-700 border-0 py-1 px-4 focus:outline-none hover:bg-teal-800 rounded dark:bg-indigo-700 dark:hover:bg-indigo-800"},"Download CV",8,I)]),W])])])]),(0,o._)("section",U,[(0,o._)("div",V,[J,(0,o._)("div",Z,[(0,o._)("div",B,[F,T,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.experienciasProfissionais,((e,a)=>((0,o.wg)(),(0,o.j4)(s,{key:e.id,isLast:a===r.experienciasProfissionais.length-1,data:e},null,8,["isLast","data"])))),128))]),(0,o._)("div",K,[R,Y,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.experienciasAcademicas,((e,a)=>((0,o.wg)(),(0,o.j4)(s,{key:e.id,isLast:a===r.experienciasAcademicas.length-1,data:e},null,8,["isLast","data"])))),128))])])])])])}const X={key:0,class:"h-full w-10 absolute inset-0 flex items-center justify-center"},$=(0,o._)("div",{class:"h-full w-1 bg-zinc-200 pointer-events-none"},null,-1),ee=[$],ae={class:"flex-shrink-0 w-10 h-10 rounded-full bg-indigo-700 inline-flex items-center justify-center text-white relative z-10 dark:bg-teal-700"},te={class:"flex-grow pl-4"},ie={class:"font-bold title-font text-sm text-indigo-700 mb-1 tracking-wider uppercase dark:text-teal-600"},oe={class:"text-sm text-zinc-950 uppercase dark:text-zinc-50"},re={class:"leading-relaxed text-zinc-950 dark:text-zinc-50"};function ne(e,a,t,i,n,s){return(0,o.wg)(),(0,o.iD)("div",{class:(0,r.C_)({"flex relative pb-12":!t.isLast,"flex relative":t.isLast})},[t.isLast?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",X,ee)),(0,o._)("div",ae,[(0,o._)("i",{class:(0,r.C_)([t.data.final?"fa-solid fa-building-circle-check":"fa-solid fa-building-user"])},null,2)]),(0,o._)("div",te,[(0,o._)("h2",ie,(0,r.zw)(t.data.cargo),1),(0,o._)("h6",oe,(0,r.zw)(t.data.instituicao)+" | "+(0,r.zw)(t.data.inicio)+" - "+(0,r.zw)(t.data.final?t.data.final:"Atualmente"),1),(0,o._)("p",re,(0,r.zw)(t.data.descricao),1)])],2)}var se={props:{data:{type:Object,required:!0},isLast:{type:Boolean,default:!1}}};const le=(0,x.Z)(se,[["render",ne]]);var de=le,ce=JSON.parse('{"W":[{"cargo":"membro da liga de programação em c","instituicao":"unifacs","inicio":"fev 2017","final":"nov 2017","descricao":"Fui membro da liga acadêmica de linguagem de programação C, estando presente na equipe de professores em certo momento durante a passagem pela liga. Na liga eram realizados exercícios em C, além de desafios em que se criava um ambiente de grupo e também de troca de conhecimento das pessoas."},{"cargo":"voluntário","instituicao":"pure startup","inicio":"mar 2018","final":"jun 2018","descricao":"Fui membro da liga acadêmica de linguagem de programação C, estando presente na equipe de professores em certo momento durante a passagem pela liga. Na liga eram realizados exercícios em C, além de desafios em que se criava um ambiente de grupo e também de troca de conhecimento das pessoas."},{"cargo":"projetista do núcleo de t.i","instituicao":"praxis empresa jr","inicio":"jan 2018","final":"jul 2019","descricao":"Fui membro da liga acadêmica de linguagem de programação C, estando presente na equipe de professores em certo momento durante a passagem pela liga. Na liga eram realizados exercícios em C, além de desafios em que se criava um ambiente de grupo e também de troca de conhecimento das pessoas."},{"cargo":"diretor de marketing e vendas","instituicao":"praxis empresa jr","inicio":"jan 2019","final":"jul 2019","descricao":"Com foco em conhecer novas áreas e testar o senso de adaptação à uma nova realidade, atuei no cargo de diretor de Marketing e vendas, onde consegui desenvolver ainda mais minhas skills de liderança e de trabalho em equipe, além de expandir o networking e soft skills necessárias para o mercado de trabalho."},{"cargo":"assessor de comunicação","instituicao":"nej salvador","inicio":"abr 2019","final":"jul 2019","descricao":"Integrei o primeiro time do Núcleo de Empresas Juniores de Salvador, onde desempenhei um papel na área de comunicação e mídias sociais. Minhas responsabilidades incluíram a gestão de anúncios do núcleo e a criação de conteúdo."}],"J":[{"cargo":"desenvolvedor web e mobile","instituicao":"ga software","inicio":"fev 2021","final":"nov 2021","descricao":"Na GA Software, empresa de desenvolvimento de sistemas, atuei como desenvolvedor web front-end em todos sistemas dos produtos da LS System da empresa e atuei no back-end de alguns desses sistemas utilizando do framework de PHP, Laravel. Já no desenvolvimento mobile fiquei a cargo do front-end nos aplicativos Confia, B.I Metas e Guia Pessoal utilizando as linguagens Quasar e React Native."},{"cargo":"analista de sistemas jr","instituicao":"acp group","inicio":"nov 2021","final":"nov 2022","descricao":"Trabalhei na equipe de sustentação para sistema da PRODEB e na equipe de desenvolvimento da Prefeitura de Camaçari. Eu utilizei Kanban, Scrum como metodologias ágeis e Docker para gerenciamento de containers. Utilizo para produção da modelagem do banco de dados Microsoft SQL Server e para o desenvolvimento de telas trabalhei com Vue e serviços utilizando o Laravel."},{"cargo":"analista de sistemas pl","instituicao":"prefeitura de salvador","inicio":"nov 2022","final":"","descricao":"Na controladoria geral do município, órgão central do sistema de controle interno. Atuo no desenvolvimento fullstack de sistemas com foco em PHP, Laravel, Vue.js e Oracle. Junto com a equipe produzimos Api’s e sistemas para melhorias na gestão financeira do município."}]}'),me={name:"HomeView",components:{Step:de},data(){return{experienciasProfissionais:[],experienciasAcademicas:[],pdfUrl:"/portfolio/docs/Curriculo.pdf"}},created(){this.experienciasProfissionais=ce.J,this.experienciasAcademicas=ce.W}};const ue=(0,x.Z)(me,[["render",Q]]);var pe=ue;function ge(e,a,t,i,o,r){return null}var fe={name:"AboutView"};const xe=(0,x.Z)(fe,[["render",ge]]);var be=xe;const ve=[{path:"/",name:"home",component:pe,meta:{title:"Gabriel Dev - Inicio"}},{path:"/projects",name:"projects",component:be,meta:{title:"Gabriel Dev - Projetos"}}],he=(0,N.p7)({history:(0,N.PO)("/portfolio/"),routes:ve});he.beforeEach(((e,a,t)=>{document.title=e.meta.title||"Gabriel Dev",t()}));var ke=he;(0,i.ri)(C).use(ke).mount("#app")}},a={};function t(i){var o=a[i];if(void 0!==o)return o.exports;var r=a[i]={exports:{}};return e[i].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,i,o,r){if(!i){var n=1/0;for(c=0;c<e.length;c++){i=e[c][0],o=e[c][1],r=e[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&r||n>=r)&&Object.keys(t.O).every((function(e){return t.O[e](i[l])}))?i.splice(l--,1):(s=!1,r<n&&(n=r));if(s){e.splice(c--,1);var d=o();void 0!==d&&(a=d)}}return a}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,o,r]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/portfolio/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,i){var o,r,n=i[0],s=i[1],l=i[2],d=0;if(n.some((function(a){return 0!==e[a]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(l)var c=l(t)}for(a&&a(i);d<n.length;d++)r=n[d],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},i=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(1776)}));i=t.O(i)})();
//# sourceMappingURL=app.534e84bf.js.map