"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[828],{1803:function(t,n,e){e.r(n),e.d(n,{default:function(){return S}});var r,a,i,c,s,o,u=e(5861),p=e(9439),l=e(4687),d=e.n(l),f=e(2791),h=e(7689),g=e(7596),m=e(5017),x=e(6445),v=e(168),w=e(5706),Z=w.Z.li(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  list-style: none;\n  height: auto;\n  width: calc((100% - 20px) / 2);\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.37);\n  border: 1px solid rgba(50, 94, 116, 0);\n  transform: scale(1);\n  transition: transform 250ms linear, border 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transition: all 0.25s;\n    scale: 1.03;\n  }\n  @media screen and (min-width: 768px) {\n    width: calc((100% - 60px) / 4);\n  }\n  @media screen and (min-width: 1200px) {\n    width: calc((100% - 100px) / 6);\n  }\n"]))),b=w.Z.img(a||(a=(0,v.Z)(["\n  width: 100%;\n  height: 270px;\n  object-fit: cover;\n"]))),y=w.Z.div(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 10px;\n"]))),k=w.Z.p(c||(c=(0,v.Z)(["\n  margin: 0;\n  color: #ebf8e1;\n  font-size: 14px;\n  line-height: calc(18 / 14);\n"]))),_=w.Z.span(s||(s=(0,v.Z)(["\n  font-weight: 700;\n"]))),j=e(184),P=function(t){var n=t.actor,e=n.name,r=n.profilePath,a=n.character;return(0,j.jsxs)(Z,{children:[(0,j.jsx)(b,{src:r,alt:e}),(0,j.jsxs)(y,{children:[(0,j.jsxs)(k,{children:[(0,j.jsx)(_,{children:"Name:"})," ",e]}),(0,j.jsxs)(k,{children:[(0,j.jsx)(_,{children:"Character:"})," ",a]})]})]})},C=w.Z.ul(o||(o=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 30px;\n  padding: 0;\n"]))),A=function(t){var n=t.actors;return(0,j.jsx)(C,{children:n.map((function(t){return(0,j.jsx)(P,{actor:t},t.id)}))})},S=function(){var t=(0,h.UO)().movieId,n=(0,f.useState)([]),e=(0,p.Z)(n,2),r=e[0],a=e[1],i=(0,f.useState)("idle"),c=(0,p.Z)(i,2),s=c[0],o=c[1],l=(0,f.useState)(""),v=(0,p.Z)(l,2),w=v[0],Z=v[1];return(0,f.useEffect)((function(){if(t){var n=new AbortController;return function(){e.apply(this,arguments)}(t,n),function(){n.abort()}}function e(){return(e=(0,u.Z)(d().mark((function e(){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o("pending"),e.prev=1,e.next=4,(0,m.M1)(t,n);case 4:r=e.sent,a(r),o("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),Z(e.t0.message),o("rejected");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}}),[t]),(0,f.useEffect)((function(){"canceled"!==w&&w&&(g.Am.error(w),Z(""))}),[w]),(0,j.jsxs)(j.Fragment,{children:["pending"===s&&(0,j.jsx)(x.Z,{}),"resolved"===s&&0!==r.length&&(0,j.jsx)(A,{actors:r})]})}},5017:function(t,n,e){e.d(n,{M1:function(){return h},TP:function(){return d},tx:function(){return m},AU:function(){return v},Df:function(){return p}});var r=e(5861),a=e(4687),i=e.n(a),c=e(1243),s=e.p+"static/media/no-image.48037438551d1abf8f13.jpg";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="f5d9437320e908c9e483d2406c4ae5b6";function u(t){return t?"https://image.tmdb.org/t/p/w500/".concat(t):s}function p(t,n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function t(n,e){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?api_key=".concat(o,"&page=").concat(n),{signal:e.signal});case 2:return r=t.sent,a=r.data.results.map((function(t){return{id:t.id,title:t.title,posterPath:u(t.poster_path)}})),t.abrupt("return",{movies:a,totalPages:r.data.total_pages});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function t(n,e){var r,a,s,p,l,d,f,h;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(o),{signal:e.signal});case 2:return r=t.sent,a=r.data,s=a.title,p=a.poster_path,l=a.overview,d=a.genres,f=a.vote_average,h=a.release_date,t.abrupt("return",{title:s,posterPath:u(p),overview:l,genres:d.map((function(t){return t.name})).join(", "),vote:f.toFixed(1),year:h.slice(0,4)});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function t(n,e){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(o),{signal:e.signal});case 2:return r=t.sent,a=r.data.cast.map((function(t){var n=t.id,e=t.name,r=t.profile_path,a=t.character;return{id:n,name:e,profilePath:u(r),character:a}})),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function t(n,e){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(o),{signal:e.signal});case 2:return r=t.sent,a=r.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return w.apply(this,arguments)}function w(){return w=(0,r.Z)(i().mark((function t(n){var e,r,a,s,p=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=p.length>1&&void 0!==p[1]?p[1]:1,r=p.length>2?p[2]:void 0,t.next=4,c.Z.get("search/movie?api_key=".concat(o,"&query=").concat(n,"&page=").concat(e),{signal:r.signal});case 4:return a=t.sent,s=a.data.results.map((function(t){return{id:t.id,title:t.title,posterPath:u(t.poster_path)}})),t.abrupt("return",{movies:s,totalPages:a.data.total_pages,totalResults:a.data.total_results});case 7:case"end":return t.stop()}}),t)}))),w.apply(this,arguments)}}}]);
//# sourceMappingURL=828.b2ff4f6c.chunk.js.map