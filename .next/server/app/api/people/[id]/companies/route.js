(()=>{var e={};e.id=407,e.ids=[407],e.modules={53524:e=>{"use strict";e.exports=require("@prisma/client")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},92695:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>h,routeModule:()=>d,serverHooks:()=>m,workAsyncStorage:()=>u,workUnitAsyncStorage:()=>l});var s={};t.r(s),t.d(s,{GET:()=>c});var i=t(88797),n=t(10042),a=t(58492),o=t(59540),p=t(96826);async function c(e,{params:r}){try{let e=await p._.director.findMany({where:{id:r.id},include:{company:{include:{directors:!0,shareholders:!0}}}}),t=await p._.shareholder.findMany({where:{id:r.id},include:{company:{include:{directors:!0,shareholders:!0}}}}),s=[...e.map(e=>e.company),...t.map(e=>e.company)].filter((e,r,t)=>r===t.findIndex(r=>r.id===e.id));return o.NextResponse.json({companies:s})}catch(e){return console.error("Error fetching related companies:",e),o.NextResponse.json({error:"Failed to fetch related companies"},{status:500})}}let d=new i.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/people/[id]/companies/route",pathname:"/api/people/[id]/companies",filename:"route",bundlePath:"app/api/people/[id]/companies/route"},resolvedPagePath:"/Users/elisha/usekampuni/src/app/api/people/[id]/companies/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:u,workUnitAsyncStorage:l,serverHooks:m}=d;function h(){return(0,a.patchFetch)({workAsyncStorage:u,workUnitAsyncStorage:l})}},78031:()=>{},35303:()=>{},74437:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ReflectAdapter",{enumerable:!0,get:function(){return t}});class t{static get(e,r,t){let s=Reflect.get(e,r,t);return"function"==typeof s?s.bind(e):s}static set(e,r,t,s){return Reflect.set(e,r,t,s)}static has(e,r){return Reflect.has(e,r)}static deleteProperty(e,r){return Reflect.deleteProperty(e,r)}}},96826:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n,_:()=>i});var s=t(53524);let i=globalThis.prisma??new s.PrismaClient,n=i}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[492,661],()=>t(92695));module.exports=s})();