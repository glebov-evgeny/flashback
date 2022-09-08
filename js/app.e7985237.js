(function(){"use strict";var t={9636:function(t,n,e){var o=e(9242),r=e(3396);const s={class:"main"};function i(t,n,e,o,i,a){const c=(0,r.up)("SHeader"),u=(0,r.up)("router-view"),p=(0,r.up)("SFooter");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c),(0,r._)("main",s,[(0,r.Wm)(u)]),(0,r.Wm)(p)],64)}const a={class:"header"},c=(0,r._)("div",{class:"container header__container"},[(0,r._)("p",{class:"header__title"},"header")],-1),u=[c];function p(t,n,e,o,s,i){return(0,r.wg)(),(0,r.iD)("header",a,u)}var l={name:"SHeader"},d=e(89);const f=(0,d.Z)(l,[["render",p]]);var m=f;const v={class:"footer"},_=(0,r._)("div",{class:"container footer__container"},[(0,r._)("p",{class:"footer__title"},"footer")],-1),h=[_];function g(t,n,e,o,s,i){return(0,r.wg)(),(0,r.iD)("footer",v,h)}var w={name:"SFooter"};const P=(0,d.Z)(w,[["render",g]]);var b=P,y={components:{SHeader:m,SFooter:b}};const O=(0,d.Z)(y,[["render",i]]);var k=O,D=e(678);const F={class:"container"},Z=(0,r._)("h1",{class:"main__title"},"Главная страница",-1),j=[Z];function x(t,n,e,o,s,i){return(0,r.wg)(),(0,r.iD)("div",F,j)}var S={name:"MainPage"};const C=(0,d.Z)(S,[["render",x]]);var H=C;const M={class:"container"},W=(0,r._)("h1",{class:"main__title"},"Cтраница с данными",-1);function U(t,n,e,o,s,i){const a=(0,r.up)("PostForm"),c=(0,r.up)("PostList");return(0,r.wg)(),(0,r.iD)("div",M,[W,(0,r.Wm)(a,{onCreatePost:i.createPost},null,8,["onCreatePost"]),(0,r.Wm)(c,{posts:s.posts},null,8,["posts"])])}const I=(0,r._)("h3",{class:"form__title"},"Добавить новость:",-1);function L(t,n,e,s,i,a){return(0,r.wg)(),(0,r.iD)("form",{class:"form",onSubmit:n[3]||(n[3]=(0,o.iM)((()=>{}),["prevent"]))},[I,(0,r.wy)((0,r._)("input",{type:"text",class:"form__input","onUpdate:modelValue":n[0]||(n[0]=t=>i.post.title=t),placeholder:"Заголовок"},null,512),[[o.nr,i.post.title]]),(0,r.wy)((0,r._)("input",{type:"text",class:"form__input","onUpdate:modelValue":n[1]||(n[1]=t=>i.post.description=t),placeholder:"Описание"},null,512),[[o.nr,i.post.description]]),(0,r._)("button",{type:"submit",class:"form__button",onClick:n[2]||(n[2]=(...t)=>a.createPost&&a.createPost(...t))},"Создать")],32)}var T={name:"PostForm",props:{},data(){return{post:{title:"",description:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("createPost",this.post),this.post={title:"",description:""}}},computed:{}};const q=(0,d.Z)(T,[["render",L]]);var z=q;function V(t,n,e,o,s,i){const a=(0,r.up)("PostItem");return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.posts,(t=>((0,r.wg)(),(0,r.j4)(a,{key:t.id,post:t},null,8,["post"])))),128)}var Y=e(7139);const A={class:"post"},E={class:"post__text"},K=(0,r._)("strong",null,"Название:",-1),N={class:"post__text"},$=(0,r._)("strong",null,"Описаине:",-1);function B(t,n,e,o,s,i){return(0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("p",E,[K,(0,r.Uk)(" "+(0,Y.zw)(e.post.title),1)]),(0,r._)("p",N,[$,(0,r.Uk)(" "+(0,Y.zw)(e.post.description),1)])])}var G={name:"PostItem",props:{post:{type:Object,required:!0}},computed:{}};const J=(0,d.Z)(G,[["render",B]]);var Q=J,R={name:"PostList",components:{PostItem:Q},props:{posts:{type:Array,required:!0}},computed:{}};const X=(0,d.Z)(R,[["render",V]]);var tt=X,nt={name:"PostPage",components:{PostForm:z,PostList:tt},data(){return{posts:[{id:1,title:"Заголовок 1",description:"Описание новости 1"},{id:2,title:"Заголовок 2",description:"Описание новости 2"},{id:3,title:"Заголовок 3",description:"Описание новости 3"},{id:4,title:"Заголовок 4",description:"Описание новости 4"}]}},methods:{createPost(t){this.posts.push(t)}}};const et=(0,d.Z)(nt,[["render",U]]);var ot=et;const rt={class:"container"},st=(0,r._)("h1",{class:"main__title"},"Страница не найдена",-1),it=[st];function at(t,n,e,o,s,i){return(0,r.wg)(),(0,r.iD)("div",rt,it)}var ct={name:"NotFoundPage"};const ut=(0,d.Z)(ct,[["render",at]]);var pt=ut;const lt=[{path:"/",name:"main",component:H},{path:"/posts",name:"posts",component:ot},{path:"/:pathMatch(.*)*",name:"notFound",component:pt}],dt=(0,D.p7)({history:(0,D.PO)("/"),routes:lt});var ft=dt,mt=e(65),vt=(0,mt.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(k).use(vt).use(ft).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var s=n[o]={exports:{}};return t[o](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,s){if(!o){var i=1/0;for(p=0;p<t.length;p++){o=t[p][0],r=t[p][1],s=t[p][2];for(var a=!0,c=0;c<o.length;c++)(!1&s||i>=s)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(a=!1,s<i&&(i=s));if(a){t.splice(p--,1);var u=r();void 0!==u&&(n=u)}}return n}s=s||0;for(var p=t.length;p>0&&t[p-1][2]>s;p--)t[p]=t[p-1];t[p]=[o,r,s]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,s,i=o[0],a=o[1],c=o[2],u=0;if(i.some((function(n){return 0!==t[n]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(c)var p=c(e)}for(n&&n(o);u<i.length;u++)s=i[u],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(p)},o=self["webpackChunkflashback"]=self["webpackChunkflashback"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(9636)}));o=e.O(o)})();
//# sourceMappingURL=app.e7985237.js.map