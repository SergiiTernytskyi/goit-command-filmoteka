function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired76b;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired76b=a),a.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("f78HT",(function(e,t){var n=a("1O3u4"),r=a("92mEW"),i={spread:360,ticks:50,gravity:0,decay:.94,startVelocity:30,shapes:["star"],colors:["be0200","55232a","ff6b01","ff001b","E89400","FFCA6C"]};function o(){(0,r.default)({...i,particleCount:80,scalar:1.2,shapes:["star"]}),(0,r.default)({...i,particleCount:10,scalar:.75,shapes:["circle"]})}function s(){n.refs.teamModal.classList.add("is-hidden"),n.refs.body.classList.remove("no-scroll"),window.removeEventListener("keydown",c)}function c(e){"Escape"===e.code&&(console.log("click"),s(),window.removeEventListener("keydown",c))}n.refs.openModalLink.addEventListener("click",(function(){setTimeout(o,0),setTimeout(o,100),setTimeout(o,200),n.refs.teamModal.classList.remove("is-hidden"),n.refs.body.classList.add("no-scroll"),window.addEventListener("keydown",c)})),n.refs.closeModalBtn.addEventListener("click",s),n.refs.teamModal.addEventListener("click",(function(e){e.currentTarget===e.target&&s()}))})),a.register("1O3u4",(function(t,n){e(t.exports,"refs",(function(){return r}));const r={body:document.querySelector("body"),watchedBtn:document.querySelector(".film-modal__watch-btn"),queueBtn:document.querySelector(".film-modal__queue-btn"),watchedLibraryBtn:document.querySelector(".library-btn__btn-watched"),queueLibraryBtn:document.querySelector(".library-btn__btn-queue"),myLibraryFilmList:document.querySelector(".films__list"),form:document.querySelector(".header-form"),list:document.querySelector(".gallery"),spinNer:document.querySelector(".js-spinner"),loadSpin:document.querySelector(".spin-backdrop"),pagination:document.querySelector(".tui-pagination"),toTopBtn:document.querySelector(".btn-to-top"),togglerDiv:document.querySelector(".toggler"),toggler:document.querySelector("#switch"),dayBtn:document.querySelector("#text-day"),weekBtn:document.querySelector("#text-week"),openModalLink:document.querySelector(".footer-content__link"),closeModalBtn:document.querySelector(".modal-team__close-btn"),teamModal:document.querySelector("[data-team-modal]"),filterForm:document.querySelector(".filter_form")}})),a.register("92mEW",(function(t,n){e(t.exports,"default",(function(){return i}));var r={};!function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function o(){}function s(e){var r=n.exports.Promise,i=void 0!==r?r:t.Promise;return"function"==typeof i?new i(e):(e(o,o),null)}var c,l,u,d,f,m,h,g,y,p=(u=Math.floor(1e3/60),d={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(e){var t=Math.random();return d[t]=requestAnimationFrame((function n(r){f===r||f+u-1<r?(f=r,delete d[t],e()):d[t]=requestAnimationFrame(n)})),t},l=function(e){d[e]&&cancelAnimationFrame(d[e])}):(c=function(e){return setTimeout(e,u)},l=function(e){return clearTimeout(e)}),{frame:c,cancel:l}),b=(g={},function(){if(m)return m;if(!r&&a){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{m=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,r,i){if(h)return t(n,null),h;var a=Math.random().toString(36).slice(2);return h=s((function(r){function o(t){t.data.callback===a&&(delete g[a],e.removeEventListener("message",o),h=null,i(),r())}e.addEventListener("message",o),t(n,a),g[a]=o.bind(null,{data:{callback:a}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),g)g[t](),delete g[t]}}(m)}return m}),v={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(e,t,n){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:v[t],n)}function M(e){return e<0?0:Math.floor(e)}function L(e){return parseInt(e,16)}function x(e){return e.map(S)}function S(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:L(t.substring(0,2)),g:L(t.substring(2,4)),b:L(t.substring(4,6))}}function _(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function E(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function k(e,t,n,a,o){var c,l,u=t.slice(),d=e.getContext("2d"),f=s((function(t){function s(){c=l=null,d.clearRect(0,0,a.width,a.height),o(),t()}c=p.frame((function t(){!r||a.width===i.width&&a.height===i.height||(a.width=e.width=i.width,a.height=e.height=i.height),a.width||a.height||(n(e),a.width=e.width,a.height=e.height),d.clearRect(0,0,a.width,a.height),u=u.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,o=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(o-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(o-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var s=Math.PI/2*3,c=4*t.scalar,l=8*t.scalar,u=t.x,d=t.y,f=5,m=Math.PI/f;f--;)u=t.x+Math.cos(s)*l,d=t.y+Math.sin(s)*l,e.lineTo(u,d),s+=m,u=t.x+Math.cos(s)*c,d=t.y+Math.sin(s)*c,e.lineTo(u,d),s+=m;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(o)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}(d,e)})),u.length?c=p.frame(t):s()})),l=s}));return{addFettis:function(e){return u=u.concat(e),f},canvas:e,promise:f,reset:function(){c&&p.cancel(c),l&&l()}}}function q(e,n){var r,i=!e,o=!!w(n||{},"resize"),c=w(n,"disableForReducedMotion",Boolean),l=a&&!!w(n||{},"useWorker")?b():null,u=i?_:E,d=!(!e||!l)&&!!e.__confetti_initialized,f="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function m(t,n,i){for(var a,o,s,c,l,d=w(t,"particleCount",M),f=w(t,"angle",Number),m=w(t,"spread",Number),h=w(t,"startVelocity",Number),g=w(t,"decay",Number),y=w(t,"gravity",Number),p=w(t,"drift",Number),b=w(t,"colors",x),v=w(t,"ticks",Number),L=w(t,"shapes"),S=w(t,"scalar"),_=function(e){var t=w(e,"origin",Object);return t.x=w(t,"x",Number),t.y=w(t,"y",Number),t}(t),E=d,q=[],T=e.width*_.x,F=e.height*_.y;E--;)q.push((a={x:T,y:F,angle:f,spread:m,startVelocity:h,color:b[E%b.length],shape:L[(c=0,l=L.length,Math.floor(Math.random()*(l-c))+c)],ticks:v,decay:g,gravity:y,drift:p,scalar:S},o=void 0,s=void 0,o=a.angle*(Math.PI/180),s=a.spread*(Math.PI/180),{x:a.x,y:a.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*a.startVelocity+Math.random()*a.startVelocity,angle2D:-o+(.5*s-Math.random()*s),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*a.gravity,ovalScalar:.6,scalar:a.scalar}));return r?r.addFettis(q):(r=k(e,q,u,n,i)).promise}function h(n){var a=c||w(n,"disableForReducedMotion",Boolean),h=w(n,"zIndex",Number);if(a&&f)return s((function(e){e()}));i&&r?e=r.canvas:i&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(h),document.body.appendChild(e)),o&&!d&&u(e);var g={width:e.width,height:e.height};function y(){if(l){var t={getBoundingClientRect:function(){if(!i)return e.getBoundingClientRect()}};return u(t),void l.postMessage({resize:{width:t.width,height:t.height}})}g.width=g.height=null}function p(){r=null,o&&t.removeEventListener("resize",y),i&&e&&(document.body.removeChild(e),e=null,d=!1)}return l&&!d&&l.init(e),d=!0,l&&(e.__confetti_initialized=!0),o&&t.addEventListener("resize",y,!1),l?l.fire(n,g,p):m(n,g,p)}return h.reset=function(){l&&l.reset(),r&&r.reset()},h}function T(){return y||(y=q(null,{useWorker:!0,resize:!0})),y}n.exports=function(){return T().apply(this,arguments)},n.exports.reset=function(){T().reset()},n.exports.create=q}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),r,!1);var i=r.exports;r.exports.create})),a.register("9dEUQ",(function(n,r){e(n.exports,"toggleWatched",(function(){return u})),e(n.exports,"toggleQueue",(function(){return d})),e(n.exports,"isFilmWatched",(function(){return m})),e(n.exports,"isFilmQueued",(function(){return h})),e(n.exports,"loadWatchedFilms",(function(){return g})),e(n.exports,"loadQueuedFilms",(function(){return y})),e(n.exports,"setupLIbraryBtns",(function(){return p}));var i=a("6ZqYr"),o=a("1O3u4"),s=a("4yLOD");const c=t(a("liDJ7"));function l(e,t){let n=(0,i.load)(t);if(Array.isArray(n)){const t=n.findIndex((t=>t.id===e.id));t>-1?n.splice(t,1):n.push(e)}else n=[e];(0,i.save)(t,n)}function u(e){l(e,"watched")}function d(e){l(e,"queue")}function f(e,t){let n=(0,i.load)(t);return Array.isArray(n)?n.findIndex((t=>t.id===e)):-1}function m(e){return f(e,"watched")>-1}function h(e){return f(e,"queue")>-1}function g(){const e=(0,i.load)("watched")||[];0!==e.length?o.refs.myLibraryFilmList.innerHTML=(0,s.renderList)(e):o.refs.myLibraryFilmList.innerHTML=`<span class="empty-library-title">Watched movies list is empty  <span>😟</span></span><img src=${c} alt="Cat with big eyes" id="124" class="show">`}function y(){const e=(0,i.load)("queue")||[];0!==e.length?o.refs.myLibraryFilmList.innerHTML=(0,s.renderList)(e):o.refs.myLibraryFilmList.innerHTML=`<span class="empty-library-title">Movies queue is empty  <span>😟</span></span><img src=${c} alt="Cat with big eyes" id="124" class="show">`}function p(){o.refs.queueLibraryBtn.addEventListener("click",(function(){o.refs.queueLibraryBtn.classList.add("active"),o.refs.watchedLibraryBtn.classList.remove("active"),o.refs.queueLibraryBtn.classList.add("library-btn__btn--active"),o.refs.watchedLibraryBtn.classList.remove("library-btn__btn--active"),y()})),o.refs.watchedLibraryBtn.addEventListener("click",(function(){o.refs.watchedLibraryBtn.classList.add("active"),o.refs.queueLibraryBtn.classList.remove("active"),o.refs.queueLibraryBtn.classList.remove("library-btn__btn--active"),o.refs.watchedLibraryBtn.classList.add("library-btn__btn--active"),g()}))}})),a.register("6ZqYr",(function(t,n){e(t.exports,"save",(function(){return r})),e(t.exports,"load",(function(){return i}));const r=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},i=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}})),a.register("4yLOD",(function(t,n){e(t.exports,"renderList",(function(){return i}));var r=a("hoWMN");function i(e){return e.map((e=>{const t=new Date(e.release_date).getFullYear(),n=JSON.stringify(e);return`<li class="card__item" data-filminfo="${encodeURIComponent(n)}" data-filmid="${e.id}">\n        <div class="card__thumb">\n            <img class="card__img" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}" onerror="this.onerror=null;this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';">\n        </div>\n        <h2 class="card__title">\n        ${e.title}\n        </h2>\n        <p class="card__text">\n            <span class="card__genres">${(0,r.default)(Object.values(e.genre_ids))}</span> | <span class="card__date">${t}</span>\n        </p>\n        </li>`})).join("")}})),a.register("hoWMN",(function(n,r){e(n.exports,"default",(function(){return o}));var i=a("2j7ES");function o(e){let n=[];return e.map((e=>{var r;n.push((r=e,t(i).genres.filter((e=>r===e.id)))[0].name)})),n.length>3&&(n=n.slice(0,2),n.push("Other")),0===n.length&&n.push("Other"),n.join(", ")}})),a.register("2j7ES",(function(e,t){e.exports=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}')})),a.register("liDJ7",(function(e,t){e.exports=new URL(a("kyEFX").resolve("jf9wd"),import.meta.url).toString()})),a("kyEFX").register(JSON.parse('{"eM9ss":"library.f698fb48.js","jf9wd":"catbig.f02c9677.jpg"}'));
//# sourceMappingURL=library.f698fb48.js.map
