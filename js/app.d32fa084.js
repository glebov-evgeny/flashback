(function(){"use strict";var t={1522:function(t,e,o){var s=o(9242),n=o(3396);const a={class:"main"};function r(t,e,o,s,r,i){const l=(0,n.up)("SHeader"),u=(0,n.up)("router-view"),p=(0,n.up)("SFooter");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(l),(0,n._)("main",a,[(0,n.Wm)(u)]),(0,n.Wm)(p)],64)}const i={class:"header"},l=(0,n._)("div",{class:"container header__container"},[(0,n._)("p",{class:"header__title"},"header")],-1),u=[l];function p(t,e,o,s,a,r){return(0,n.wg)(),(0,n.iD)("header",i,u)}var c={name:"SHeader"},d=o(89);const m=(0,d.Z)(c,[["render",p]]);var h=m;const _={class:"footer"},f=(0,n._)("div",{class:"container footer__container"},[(0,n._)("p",{class:"footer__title"},"footer")],-1),v=[f];function g(t,e,o,s,a,r){return(0,n.wg)(),(0,n.iD)("footer",_,v)}var w={name:"SFooter"};const y=(0,d.Z)(w,[["render",g]]);var b=y,k={components:{SHeader:h,SFooter:b}};const P=(0,d.Z)(k,[["render",r]]);var C=P,O=o(678),D=o(7139);const I={class:"container"},V=(0,n._)("h1",{class:"main__title"},"Cтраница с данными",-1),S={key:0,class:"main__filter"},B={class:"main__filter-item"},W=(0,n._)("h2",{class:"main__subtitle"},"Фильтр:",-1),Z={class:"main__filter-item"},j=(0,n._)("h2",{class:"main__subtitle"},"Поиск:",-1),M=(0,n.Uk)("Добавить"),U={class:"main__wrapper"},$=["onClick"];function F(t,e,o,s,a,r){const i=(0,n.up)("BaseSelect"),l=(0,n.up)("BaseInput"),u=(0,n.up)("PostList"),p=(0,n.up)("BaseLoader"),c=(0,n.up)("BaseButton"),d=(0,n.up)("PostForm"),m=(0,n.up)("BasePopup");return(0,n.wg)(),(0,n.iD)("div",I,[V,a.posts.length>0?((0,n.wg)(),(0,n.iD)("div",S,[(0,n._)("div",B,[W,(0,n.Wm)(i,{modelValue:a.selectedSort,"onUpdate:modelValue":e[0]||(e[0]=t=>a.selectedSort=t),options:a.selectedOptions},null,8,["modelValue","options"])]),(0,n._)("div",Z,[j,(0,n.Wm)(l,{class:"form__input",modelValue:a.searchQuery,"onUpdate:modelValue":e[1]||(e[1]=t=>a.searchQuery=t),modelModifiers:{trim:!0},placeholder:"Search something"},null,8,["modelValue"])])])):(0,n.kq)("",!0),a.loading?((0,n.wg)(),(0,n.j4)(p,{key:2})):((0,n.wg)(),(0,n.j4)(u,{key:1,posts:r.sortedAndSearchedPosts,onRemove:r.removePost},null,8,["posts","onRemove"])),a.posts.length>0?((0,n.wg)(),(0,n.j4)(c,{key:3,class:"button main__button",onClick:r.popupOpen},{default:(0,n.w5)((()=>[M])),_:1},8,["onClick"])):(0,n.kq)("",!0),(0,n._)("div",U,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.totalPages,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:(0,D.C_)(["main__wrapper-tab",{_isCurrent:a.page===t}]),onClick:e=>r.pageChanged(t)},(0,D.zw)(t),11,$)))),128))]),(0,n.Wm)(m,{show:a.popupIsOpen,"onUpdate:show":e[2]||(e[2]=t=>a.popupIsOpen=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{onCreatePost:r.createPost},null,8,["onCreatePost"])])),_:1},8,["show"])])}const x="https://jsonplaceholder.typicode.com/posts";var H=o(6265),L=o.n(H);const q=(0,n._)("h3",{class:"form__title"},"Добавить запись:",-1),z=(0,n.Uk)("Добавить");function A(t,e,o,a,r,i){const l=(0,n.up)("BaseInput"),u=(0,n.up)("BaseButton");return(0,n.wg)(),(0,n.iD)("form",{class:"form",onSubmit:e[2]||(e[2]=(0,s.iM)((()=>{}),["prevent"]))},[q,(0,n.Wm)(l,{class:"form__input",modelValue:r.post.title,"onUpdate:modelValue":e[0]||(e[0]=t=>r.post.title=t),modelModifiers:{trim:!0},placeholder:"Заголовок"},null,8,["modelValue"]),(0,n.Wm)(l,{class:"form__input",modelValue:r.post.body,"onUpdate:modelValue":e[1]||(e[1]=t=>r.post.body=t),modelModifiers:{trim:!0},placeholder:"Описание"},null,8,["modelValue"]),(0,n.Wm)(u,{class:"button form__button",type:"submit",onClick:i.createPost},{default:(0,n.w5)((()=>[z])),_:1},8,["onClick"])],32)}var Q={name:"PostForm",props:{},data(){return{post:{title:"",body:""}}},methods:{createPost(){""!==this.post.title&&""!==this.post.body&&(this.post.id=Date.now(),this.$emit("createPost",this.post),this.post={title:"",body:""})}}};const R=(0,d.Z)(Q,[["render",A]]);var Y=R;const K={key:0},T={key:1,class:"main__title"};function E(t,e,o,a,r,i){const l=(0,n.up)("PostItem");return o.posts.length>0?((0,n.wg)(),(0,n.iD)("div",K,[(0,n.Wm)(s.W3,{name:"post-list-animation"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.posts,(e=>((0,n.wg)(),(0,n.j4)(l,{key:e.id,post:e,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])),_:1})])):((0,n.wg)(),(0,n.iD)("h2",T,"Упс... всё закончилось."))}const N={class:"post"},G={class:"post__block"},J={class:"post__text"},X=(0,n._)("strong",null,"Название:",-1),tt={class:"post__text"},et=(0,n._)("strong",null,"Описание:",-1),ot={class:"post__btns"},st=(0,n.Uk)("Удалить");function nt(t,e,o,s,a,r){const i=(0,n.up)("BaseButton");return(0,n.wg)(),(0,n.iD)("div",N,[(0,n._)("div",G,[(0,n._)("p",J,[X,(0,n.Uk)(" "+(0,D.zw)(o.post.title),1)]),(0,n._)("p",tt,[et,(0,n.Uk)(" "+(0,D.zw)(o.post.body),1)])]),(0,n._)("div",ot,[(0,n.Wm)(i,{onClick:e[0]||(e[0]=e=>t.$emit("remove",o.post))},{default:(0,n.w5)((()=>[st])),_:1})])])}var at={name:"PostItem",components:{},props:{post:{type:Object,required:!0}},computed:{}};const rt=(0,d.Z)(at,[["render",nt]]);var it=rt,lt={name:"PostList",components:{PostItem:it},props:{posts:{type:Array,required:!0}},computed:{}};const ut=(0,d.Z)(lt,[["render",E],["__scopeId","data-v-527f2fa0"]]);var pt=ut,ct={name:"PostPage",components:{PostForm:Y,PostList:pt},data(){return{posts:[],popupIsOpen:!1,loading:!0,selectedSort:"",selectedOptions:[{value:"title",name:"По названию"},{value:"body",name:"По описанию"}],searchQuery:"",page:1,limit:10,totalPages:0}},methods:{createPost(t){this.posts.push(t),this.popupIsOpen=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},pageChanged(t){this.page=t},popupOpen(){this.popupIsOpen=!0},async fetchPosts(){try{this.loading=!0;const t=await L().get(`${x}`,{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=t.data,this.loading=!1}catch(t){alert(`Ошибка: ${t}`)}finally{this.loading=!1}}},mounted(){this.fetchPosts()},computed:{sortedPosts(){return[...this.posts].sort(((t,e)=>t[this.selectedSort]?.localeCompare(e[this.selectedSort])))},sortedAndSearchedPosts(){return this.sortedPosts.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}},watch:{page(){this.fetchPosts()}}};const dt=(0,d.Z)(ct,[["render",F]]);var mt=dt;const ht={class:"container"},_t=(0,n._)("h1",{class:"main__title"},"Страница не найдена",-1),ft=[_t];function vt(t,e,o,s,a,r){return(0,n.wg)(),(0,n.iD)("div",ht,ft)}var gt={name:"NotFoundPage"};const wt=(0,d.Z)(gt,[["render",vt]]);var yt=wt;const bt=[{path:"/",name:"posts",component:mt},{path:"/:pathMatch(.*)*",name:"notFound",component:yt}],kt=(0,O.p7)({history:(0,O.PO)("/flashback/"),routes:bt});var Pt=kt,Ct=o(65),Ot=(0,Ct.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const Dt=["value"];function It(t,e,o,s,a,r){return(0,n.wg)(),(0,n.iD)("input",{value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>r.updateInput&&r.updateInput(...t)),type:"text"},null,40,Dt)}var Vt={name:"BaseInput",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const St=(0,d.Z)(Vt,[["render",It]]);var Bt=St;const Wt={class:"button"};function Zt(t,e,o,s,a,r){return(0,n.wg)(),(0,n.iD)("button",Wt,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var jt={name:"BaseButton"};const Mt=(0,d.Z)(jt,[["render",Zt],["__scopeId","data-v-2d6cab0e"]]);var Ut=Mt;function $t(t,e,o,a,r,i){return o.show?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"modal",onClick:e[1]||(e[1]=(0,s.iM)(((...t)=>i.popupClose&&i.popupClose(...t)),["stop"]))},[(0,n._)("div",{onClick:e[0]||(e[0]=(0,s.iM)((()=>{}),["stop"])),class:"modal__content"},[(0,n.WI)(t.$slots,"default",{},void 0,!0)])])):(0,n.kq)("",!0)}var Ft={name:"BasePopup",props:{show:{type:Boolean,default:!1}},methods:{popupClose(){this.$emit("update:show",!1)}}};const xt=(0,d.Z)(Ft,[["render",$t],["__scopeId","data-v-1a2130f2"]]);var Ht=xt;const Lt=t=>((0,n.dD)("data-v-309a332e"),t=t(),(0,n.Cn)(),t),qt={class:"loader"},zt=Lt((()=>(0,n._)("span",null,null,-1))),At=Lt((()=>(0,n._)("span",null,null,-1))),Qt=Lt((()=>(0,n._)("span",null,null,-1))),Rt=[zt,At,Qt];function Yt(t,e,o,s,a,r){return(0,n.wg)(),(0,n.iD)("div",qt,Rt)}var Kt={name:"BaseLoader"};const Tt=(0,d.Z)(Kt,[["render",Yt],["__scopeId","data-v-309a332e"]]);var Et=Tt;const Nt=t=>((0,n.dD)("data-v-60e32326"),t=t(),(0,n.Cn)(),t),Gt=Nt((()=>(0,n._)("option",{disabled:"",value:""},"Выбрать из списка:",-1))),Jt=["value"];function Xt(t,e,o,a,r,i){return(0,n.wy)(((0,n.wg)(),(0,n.iD)("select",{class:"select","onUpdate:modelValue":e[0]||(e[0]=t=>o.modelValue=t),onChange:e[1]||(e[1]=(...t)=>i.changeOption&&i.changeOption(...t))},[Gt,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.options,(t=>((0,n.wg)(),(0,n.iD)("option",{value:t.value,key:t.value},(0,D.zw)(t.name),9,Jt)))),128))],544)),[[s.bM,o.modelValue]])}var te={name:"BaseSelect",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const ee=(0,d.Z)(te,[["render",Xt],["__scopeId","data-v-60e32326"]]);var oe=ee,se=[Bt,Ut,Ht,Et,oe];const ne=(0,s.ri)(C);se.forEach((t=>{ne.component(t.name,t)})),ne.use(Ot).use(Pt).mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,a){if(!s){var r=1/0;for(p=0;p<t.length;p++){s=t[p][0],n=t[p][1],a=t[p][2];for(var i=!0,l=0;l<s.length;l++)(!1&a||r>=a)&&Object.keys(o.O).every((function(t){return o.O[t](s[l])}))?s.splice(l--,1):(i=!1,a<r&&(r=a));if(i){t.splice(p--,1);var u=n();void 0!==u&&(e=u)}}return e}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[s,n,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,r=s[0],i=s[1],l=s[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(l)var p=l(o)}for(e&&e(s);u<r.length;u++)a=r[u],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(p)},s=self["webpackChunkflashback"]=self["webpackChunkflashback"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(1522)}));s=o.O(s)})();
//# sourceMappingURL=app.d32fa084.js.map