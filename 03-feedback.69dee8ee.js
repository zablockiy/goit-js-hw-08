function e(e){return e&&e.__esModule?e.default:e}var t;t=function(e,t){var a,n,r,s,o=0;return function(){a=this,n=arguments;var e=new Date-o;return s||(e>=t?u():s=setTimeout(u,t-e)),r};function u(){s=0,o=+new Date,r=e.apply(a,n),a=null,n=null}};const a=document.querySelector(".feedback-form");a.addEventListener("input",e(t)((function(e){n[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),a.addEventListener("submit",(function(e){e.preventDefault(),n.email&&n.message&&(n.email="",n.message="",e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"))}));const n={};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e){const t=a.querySelector("input"),r=a.querySelector("textarea");t.value=e.email?e.email:"",r.value=e.message?e.message:"",n.email=e.email,n.message=e.message}}();
//# sourceMappingURL=03-feedback.69dee8ee.js.map
