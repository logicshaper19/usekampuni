(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{16759:(e,t,r)=>{Promise.resolve().then(r.bind(r,37129))},78030:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(2265);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:u="",children:c,iconNode:d,...h}=e;return(0,n.createElement)("svg",{ref:t,...o,width:a,height:a,stroke:r,strokeWidth:l?24*Number(i)/Number(a):i,className:s("lucide",u),...h},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),l=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:l,...u}=r;return(0,n.createElement)(i,{ref:o,iconNode:t,className:s("lucide-".concat(a(e)),l),...u})});return r.displayName="".concat(e),r}},16463:(e,t,r)=>{"use strict";var n=r(71169);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},37129:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(57437),a=r(87138),s=r(16463),o=r(21270);let i=(0,r(78030).Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function l(e){let{companyCount:t}=e,{user:r,logout:l}=(0,o.a)();(0,s.usePathname)();let u=async()=>{await l(),window.location.href="/login"};return(0,n.jsx)("nav",{className:"bg-white shadow-sm",children:(0,n.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,n.jsxs)("div",{className:"flex justify-between h-16 items-center",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,n.jsx)(a.default,{href:"/admin",className:"text-xl font-bold text-gray-900",children:"kampuni"}),(0,n.jsxs)("span",{className:"px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800",children:[t," Companies"]})]}),(0,n.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,n.jsx)("span",{className:"text-gray-700",children:(null==r?void 0:r.name)||(null==r?void 0:r.email)}),(0,n.jsxs)("button",{onClick:u,className:"text-gray-600 hover:text-gray-900 font-medium flex items-center space-x-2",children:[(0,n.jsx)(i,{className:"h-4 w-4"}),(0,n.jsx)("span",{children:"Logout"})]})]})]})})})}},21270:(e,t,r)=>{"use strict";r.d(t,{AuthProvider:()=>o,a:()=>i});var n=r(57437),a=r(2265);let s=(0,a.createContext)(void 0);function o(e){let{children:t}=e,[r,o]=(0,a.useState)(null),[i,l]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{fetch("/api/auth/me").then(e=>e.json()).then(e=>{e&&o(e)}).catch(e=>console.error("Auth check failed:",e)).finally(()=>l(!1))},[]),(0,n.jsx)(s.Provider,{value:{user:r,loading:i,login:(e,t)=>fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(e=>{if(!e.ok)throw Error("Login failed");return e.json()}).then(e=>(o(e.user),e.redirectUrl)),logout:()=>fetch("/api/auth/logout",{method:"POST"}).then(()=>{o(null)})},children:t})}function i(){let e=(0,a.useContext)(s);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}}},e=>{var t=t=>e(e.s=t);e.O(0,[138,130,215,744],()=>t(16759)),_N_E=e.O()}]);