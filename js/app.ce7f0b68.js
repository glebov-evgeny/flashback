(function(){"use strict";var t={8970:function(t,e,o){var n=o(9242),s=o(3396);const a={class:"main"};function r(t,e,o,n,r,l){const i=(0,s.up)("SHeader"),u=(0,s.up)("router-view"),p=(0,s.up)("SFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i),(0,s._)("main",a,[(0,s.Wm)(u)]),(0,s.Wm)(p)],64)}const l={class:"header"},i=(0,s._)("div",{class:"container header__container"},[(0,s._)("p",{class:"header__title"},"header")],-1),u=[i];function p(t,e,o,n,a,r){return(0,s.wg)(),(0,s.iD)("header",l,u)}var c={name:"SHeader"},d=o(89);const m=(0,d.Z)(c,[["render",p]]);var f=m;const v={class:"footer"},h=(0,s._)("div",{class:"container footer__container"},[(0,s._)("p",{class:"footer__title"},"footer")],-1),_=[h];function g(t,e,o,n,a,r){return(0,s.wg)(),(0,s.iD)("footer",v,_)}var w={name:"SFooter"};const b=(0,d.Z)(w,[["render",g]]);var y=b,k={components:{SHeader:f,SFooter:y}};const P=(0,d.Z)(k,[["render",r]]);var O=P,D=o(678);const I={class:"container"},C=(0,s._)("h1",{class:"main__title"},"Cтраница с данными",-1),B={key:0,class:"main__filter"},V=(0,s._)("h1",{class:"main__subtitle"},"Фильтр:",-1),S=(0,s.Uk)("Добавить");function W(t,e,o,n,a,r){const l=(0,s.up)("BaseSelect"),i=(0,s.up)("PostList"),u=(0,s.up)("BaseLoader"),p=(0,s.up)("BaseButton"),c=(0,s.up)("PostForm"),d=(0,s.up)("BasePopup");return(0,s.wg)(),(0,s.iD)("div",I,[C,a.posts.length>0?((0,s.wg)(),(0,s.iD)("div",B,[V,(0,s.Wm)(l,{modelValue:a.selectedSort,"onUpdate:modelValue":e[0]||(e[0]=t=>a.selectedSort=t),options:a.selectedOptions},null,8,["modelValue","options"])])):(0,s.kq)("",!0),a.loading?((0,s.wg)(),(0,s.j4)(u,{key:2})):((0,s.wg)(),(0,s.j4)(i,{key:1,posts:r.sortedPosts,onRemove:r.removePost},null,8,["posts","onRemove"])),a.posts.length>0?((0,s.wg)(),(0,s.j4)(p,{key:3,class:"button main__button",onClick:r.popupOpen},{default:(0,s.w5)((()=>[S])),_:1},8,["onClick"])):(0,s.kq)("",!0),(0,s.Wm)(d,{show:a.popupIsOpen,"onUpdate:show":e[1]||(e[1]=t=>a.popupIsOpen=t)},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{onCreatePost:r.createPost},null,8,["onCreatePost"])])),_:1},8,["show"])])}const Z="https://jsonplaceholder.typicode.com/posts";var j=o(6265),U=o.n(j);const $=(0,s._)("h3",{class:"form__title"},"Добавить запись:",-1),F=(0,s.Uk)("Добавить");function M(t,e,o,a,r,l){const i=(0,s.up)("BaseInput"),u=(0,s.up)("BaseButton");return(0,s.wg)(),(0,s.iD)("form",{class:"form",onSubmit:e[2]||(e[2]=(0,n.iM)((()=>{}),["prevent"]))},[$,(0,s.Wm)(i,{class:"form__input",modelValue:r.post.title,"onUpdate:modelValue":e[0]||(e[0]=t=>r.post.title=t),modelModifiers:{trim:!0},placeholder:"Заголовок"},null,8,["modelValue"]),(0,s.Wm)(i,{class:"form__input",modelValue:r.post.body,"onUpdate:modelValue":e[1]||(e[1]=t=>r.post.body=t),modelModifiers:{trim:!0},placeholder:"Описание"},null,8,["modelValue"]),(0,s.Wm)(u,{class:"button form__button",type:"submit",onClick:l.createPost},{default:(0,s.w5)((()=>[F])),_:1},8,["onClick"])],32)}var x={name:"PostForm",props:{},data(){return{post:{title:"",body:""}}},methods:{createPost(){""!==this.post.title&&""!==this.post.body&&(this.post.id=Date.now(),this.$emit("createPost",this.post),this.post={title:"",body:""})}}};const H=(0,d.Z)(x,[["render",M]]);var q=H;const L={key:0},R={key:1,class:"main__title"};function z(t,e,o,a,r,l){const i=(0,s.up)("PostItem");return o.posts.length>0?((0,s.wg)(),(0,s.iD)("div",L,[(0,s.Wm)(n.W3,{name:"post-list-animation"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.posts,(e=>((0,s.wg)(),(0,s.j4)(i,{key:e.id,post:e,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])),_:1})])):((0,s.wg)(),(0,s.iD)("h2",R,"Упс... всё закончилось."))}var T=o(7139);const Y={class:"post"},A={class:"post__block"},E={class:"post__text"},K=(0,s._)("strong",null,"Название:",-1),N={class:"post__text"},G=(0,s._)("strong",null,"Описание:",-1),J={class:"post__btns"},Q=(0,s.Uk)("Удалить");function X(t,e,o,n,a,r){const l=(0,s.up)("BaseButton");return(0,s.wg)(),(0,s.iD)("div",Y,[(0,s._)("div",A,[(0,s._)("p",E,[K,(0,s.Uk)(" "+(0,T.zw)(o.post.title),1)]),(0,s._)("p",N,[G,(0,s.Uk)(" "+(0,T.zw)(o.post.body),1)])]),(0,s._)("div",J,[(0,s.Wm)(l,{onClick:e[0]||(e[0]=e=>t.$emit("remove",o.post))},{default:(0,s.w5)((()=>[Q])),_:1})])])}var tt={name:"PostItem",components:{},props:{post:{type:Object,required:!0}},computed:{}};const et=(0,d.Z)(tt,[["render",X]]);var ot=et,nt={name:"PostList",components:{PostItem:ot},props:{posts:{type:Array,required:!0}},computed:{}};const st=(0,d.Z)(nt,[["render",z],["__scopeId","data-v-527f2fa0"]]);var at=st,rt={name:"PostPage",components:{PostForm:q,PostList:at},data(){return{posts:[],popupIsOpen:!1,loading:!0,selectedSort:"",selectedOptions:[{value:"title",name:"По названию"},{value:"body",name:"По описанию"}]}},methods:{createPost(t){this.posts.push(t),this.popupIsOpen=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},popupOpen(){this.popupIsOpen=!0},async fetchPosts(){try{this.loading=!0;const t=await U().get(`${Z}?_limit=5`);this.posts=t.data,this.loading=!1}catch(t){alert(`Ошибка: ${t}`)}finally{this.loading=!1}}},mounted(){this.fetchPosts()},computed:{sortedPosts(){return[...this.posts].sort(((t,e)=>t[this.selectedSort]?.localeCompare(e[this.selectedSort])))}}};const lt=(0,d.Z)(rt,[["render",W]]);var it=lt;const ut={class:"container"},pt=(0,s._)("h1",{class:"main__title"},"Страница не найдена",-1),ct=[pt];function dt(t,e,o,n,a,r){return(0,s.wg)(),(0,s.iD)("div",ut,ct)}var mt={name:"NotFoundPage"};const ft=(0,d.Z)(mt,[["render",dt]]);var vt=ft;const ht=[{path:"/",name:"posts",component:it},{path:"/:pathMatch(.*)*",name:"notFound",component:vt}],_t=(0,D.p7)({history:(0,D.PO)("/flashback/"),routes:ht});var gt=_t,wt=o(65),bt=(0,wt.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const yt=["value"];function kt(t,e,o,n,a,r){return(0,s.wg)(),(0,s.iD)("input",{value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>r.updateInput&&r.updateInput(...t)),type:"text"},null,40,yt)}var Pt={name:"BaseInput",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const Ot=(0,d.Z)(Pt,[["render",kt]]);var Dt=Ot;const It={class:"button"};function Ct(t,e,o,n,a,r){return(0,s.wg)(),(0,s.iD)("button",It,[(0,s.WI)(t.$slots,"default",{},void 0,!0)])}var Bt={name:"BaseButton"};const Vt=(0,d.Z)(Bt,[["render",Ct],["__scopeId","data-v-2d6cab0e"]]);var St=Vt;function Wt(t,e,o,a,r,l){return o.show?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"modal",onClick:e[1]||(e[1]=(0,n.iM)(((...t)=>l.popupClose&&l.popupClose(...t)),["stop"]))},[(0,s._)("div",{onClick:e[0]||(e[0]=(0,n.iM)((()=>{}),["stop"])),class:"modal__content"},[(0,s.WI)(t.$slots,"default",{},void 0,!0)])])):(0,s.kq)("",!0)}var Zt={name:"BasePopup",props:{show:{type:Boolean,default:!1}},methods:{popupClose(){this.$emit("update:show",!1)}}};const jt=(0,d.Z)(Zt,[["render",Wt],["__scopeId","data-v-1a2130f2"]]);var Ut=jt;const $t=t=>((0,s.dD)("data-v-309a332e"),t=t(),(0,s.Cn)(),t),Ft={class:"loader"},Mt=$t((()=>(0,s._)("span",null,null,-1))),xt=$t((()=>(0,s._)("span",null,null,-1))),Ht=$t((()=>(0,s._)("span",null,null,-1))),qt=[Mt,xt,Ht];function Lt(t,e,o,n,a,r){return(0,s.wg)(),(0,s.iD)("div",Ft,qt)}var Rt={name:"BaseLoader"};const zt=(0,d.Z)(Rt,[["render",Lt],["__scopeId","data-v-309a332e"]]);var Tt=zt;const Yt=t=>((0,s.dD)("data-v-9883231a"),t=t(),(0,s.Cn)(),t),At=Yt((()=>(0,s._)("option",{disabled:"",value:""},"Выбрать из списка:",-1))),Et=["value"];function Kt(t,e,o,a,r,l){return(0,s.wy)(((0,s.wg)(),(0,s.iD)("select",{class:"select","onUpdate:modelValue":e[0]||(e[0]=t=>o.modelValue=t),onChange:e[1]||(e[1]=(...t)=>l.changeOption&&l.changeOption(...t))},[At,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.options,(t=>((0,s.wg)(),(0,s.iD)("option",{value:t.value,key:t.value},(0,T.zw)(t.name),9,Et)))),128))],544)),[[n.bM,o.modelValue]])}var Nt={name:"BaseSelect",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const Gt=(0,d.Z)(Nt,[["render",Kt],["__scopeId","data-v-9883231a"]]);var Jt=Gt,Qt=[Dt,St,Ut,Tt,Jt];const Xt=(0,n.ri)(O);Qt.forEach((t=>{Xt.component(t.name,t)})),Xt.use(bt).use(gt).mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,a){if(!n){var r=1/0;for(p=0;p<t.length;p++){n=t[p][0],s=t[p][1],a=t[p][2];for(var l=!0,i=0;i<n.length;i++)(!1&a||r>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[i])}))?n.splice(i--,1):(l=!1,a<r&&(r=a));if(l){t.splice(p--,1);var u=s();void 0!==u&&(e=u)}}return e}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[n,s,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,r=n[0],l=n[1],i=n[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(i)var p=i(o)}for(e&&e(n);u<r.length;u++)a=r[u],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(p)},n=self["webpackChunkflashback"]=self["webpackChunkflashback"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(8970)}));n=o.O(n)})();
//# sourceMappingURL=app.ce7f0b68.js.map