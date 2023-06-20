"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[470],{3140:function(n,t,e){e.r(t),e.d(t,{default:function(){return Y}});var r,a,i,o,s,c,p,u,d,l,f,h,x,m=e(5861),v=e(9439),g=e(4687),w=e.n(g),Z=e(2791),b=e(7689),j=e(7596),y=e(5017),k=e(4373),_=e(6445),P=e(168),z=e(1087),S=e(5706),C=(0,S.Z)(z.rU)(r||(r=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 14px;\n  height: 40px;\n  width: 140px;\n  text-decoration: none;\n  font-size: 24px;\n  text-align: center;\n  background: transparent;\n  color: #f69d3c;\n  border-radius: 8px;\n\n  transition: color 250ms linear, background-color 250ms linear;\n  &:hover,\n  &:focus-visible {\n    background-color: #f69d3c;\n    color: #ebf8e1;\n  }\n"]))),R=S.Z.main(a||(a=(0,P.Z)(["\n  padding-top: 40px;\n  padding-bottom: 40px;\n  flex-grow: 1;\n"]))),U=S.Z.div(i||(i=(0,P.Z)(["\n  max-width: 320px;\n  margin: 0 auto;\n  padding: 0 20px;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    padding: 0 32px;\n  }\n  @media screen and (min-width: 1200px) {\n    max-width: 1200px;\n  }\n"]))),A=S.Z.div(o||(o=(0,P.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n"]))),H=S.Z.img(s||(s=(0,P.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  @media screen and (min-width: 768px) {\n    width: 270px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 320px;\n  }\n"]))),I=S.Z.nav(c||(c=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n"]))),T=S.Z.div(p||(p=(0,P.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),E=S.Z.h1(u||(u=(0,P.Z)(["\n  margin-bottom: 15px;\n  font-width: 700;\n  font-size: 32px;\n"]))),F=S.Z.h2(d||(d=(0,P.Z)(["\n  margin-bottom: 15px;\n  font-width: 600;\n  font-size: 28px;\n"]))),G=S.Z.p(l||(l=(0,P.Z)(["\n  margin-bottom: 15px;\n  font-size: 18px;\n  line-height: calc(22 / 18);\n"]))),O=S.Z.h2(f||(f=(0,P.Z)(["\n  margin-bottom: 15px;\n  font-width: 600;\n  font-size: 28px;\n"]))),q=S.Z.p(h||(h=(0,P.Z)(["\n  margin-bottom: 15px;\n  font-size: 18px;\n  line-height: calc(22 / 18);\n"]))),D=S.Z.p(x||(x=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60px;\n  height: 40px;\n  background-color: #3f87a6;\n  color: #f69d3c;\n  font-size: 20px;\n  border-radius: 7px;\n"]))),L=e(184),M=function(n){var t,e,r,a=n.movie,i=a.title,o=a.posterPath,s=a.overview,c=a.genres,p=a.vote,u=a.year,d=(0,b.TH)(),l=d.state,f=d.pathname;return(0,L.jsx)(R,{children:(0,L.jsxs)(U,{children:[(0,L.jsxs)(C,{to:null!==(t=null===l||void 0===l?void 0:l.from)&&void 0!==t?t:"/",children:[(0,L.jsx)(k.PjY,{}),"Go back"]}),(0,L.jsxs)(A,{children:[(0,L.jsx)(H,{src:o,alt:i}),(0,L.jsxs)("div",{children:[(0,L.jsxs)(T,{children:[(0,L.jsxs)(E,{children:[i," (",u||"xxxx",")"]}),0!==p&&(0,L.jsx)(D,{children:p})]}),(0,L.jsx)(F,{children:"Overview"}),s?(0,L.jsx)(G,{children:s}):"Information is not available",(0,L.jsx)(O,{children:"Genres"}),c?(0,L.jsx)(q,{children:c}):"Information is not available"]})]}),(0,L.jsxs)(I,{children:[(0,L.jsx)(C,{to:f.includes("cast")?"":"cast",state:{from:null!==(e=null===l||void 0===l?void 0:l.from)&&void 0!==e?e:"/"},children:f.includes("cast")?"Hide Cast":"Show Cast"}),(0,L.jsx)(C,{to:f.includes("reviews")?"":"reviews",state:{from:null!==(r=null===l||void 0===l?void 0:l.from)&&void 0!==r?r:"/"},children:f.includes("reviews")?"Hide Reviews":"Show Reviews"})]}),(0,L.jsx)(Z.Suspense,{fallback:(0,L.jsx)(_.Z,{}),children:(0,L.jsx)(b.j3,{})})]})})},Y=function(){var n=(0,b.UO)().movieId,t=(0,Z.useState)([]),e=(0,v.Z)(t,2),r=e[0],a=e[1],i=(0,Z.useState)("idle"),o=(0,v.Z)(i,2),s=o[0],c=o[1],p=(0,Z.useState)(""),u=(0,v.Z)(p,2),d=u[0],l=u[1];return(0,Z.useEffect)((function(){if(n){var t=new AbortController;return function(){e.apply(this,arguments)}(),function(){t.abort()}}function e(){return(e=(0,m.Z)(w().mark((function e(){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c("pending"),e.prev=1,e.next=4,(0,y.TP)(n,t);case 4:r=e.sent,a(r),c("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),l(e.t0.message),c("rejected");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}}),[n]),(0,Z.useEffect)((function(){"canceled"!==d&&d&&(j.Am.error(d),l(""))}),[d]),(0,L.jsxs)(L.Fragment,{children:["pending"===s&&(0,L.jsx)(_.Z,{}),"resolved"===s&&(0,L.jsx)(M,{movie:r})]})}},5017:function(n,t,e){e.d(t,{M1:function(){return h},TP:function(){return l},tx:function(){return m},AU:function(){return g},Df:function(){return u}});var r=e(5861),a=e(4687),i=e.n(a),o=e(1243),s=e.p+"static/media/no-image.48037438551d1abf8f13.jpg";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="f5d9437320e908c9e483d2406c4ae5b6";function p(n){return n?"https://image.tmdb.org/t/p/w500/".concat(n):s}function u(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t,e){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c,"&page=").concat(t),{signal:e.signal});case 2:return r=n.sent,a=r.data.results.map((function(n){return{id:n.id,title:n.title,posterPath:p(n.poster_path)}})),n.abrupt("return",{movies:a,totalPages:r.data.total_pages});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t,e){var r,a,s,u,d,l,f,h;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(c),{signal:e.signal});case 2:return r=n.sent,a=r.data,s=a.title,u=a.poster_path,d=a.overview,l=a.genres,f=a.vote_average,h=a.release_date,n.abrupt("return",{title:s,posterPath:p(u),overview:d,genres:l.map((function(n){return n.name})).join(", "),vote:f.toFixed(1),year:h.slice(0,4)});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t,e){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(c),{signal:e.signal});case 2:return r=n.sent,a=r.data.cast.map((function(n){var t=n.id,e=n.name,r=n.profile_path,a=n.character;return{id:t,name:e,profilePath:p(r),character:a}})),n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t,e){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c),{signal:e.signal});case 2:return r=n.sent,a=r.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}})),n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return w.apply(this,arguments)}function w(){return w=(0,r.Z)(i().mark((function n(t){var e,r,a,s,u=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.length>1&&void 0!==u[1]?u[1]:1,r=u.length>2?u[2]:void 0,n.next=4,o.Z.get("search/movie?api_key=".concat(c,"&query=").concat(t,"&page=").concat(e),{signal:r.signal});case 4:return a=n.sent,s=a.data.results.map((function(n){return{id:n.id,title:n.title,posterPath:p(n.poster_path)}})),n.abrupt("return",{movies:s,totalPages:a.data.total_pages,totalResults:a.data.total_results});case 7:case"end":return n.stop()}}),n)}))),w.apply(this,arguments)}}}]);
//# sourceMappingURL=470.200616bc.chunk.js.map