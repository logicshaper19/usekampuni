exports.id=891,exports.ids=[891],exports.modules={704:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,46472,23)),Promise.resolve().then(t.t.bind(t,42461,23)),Promise.resolve().then(t.t.bind(t,48190,23)),Promise.resolve().then(t.t.bind(t,15282,23)),Promise.resolve().then(t.t.bind(t,56613,23)),Promise.resolve().then(t.t.bind(t,5486,23)),Promise.resolve().then(t.t.bind(t,58825,23))},66770:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,52144,23)),Promise.resolve().then(t.t.bind(t,62302,23)),Promise.resolve().then(t.t.bind(t,63582,23)),Promise.resolve().then(t.t.bind(t,9587,23)),Promise.resolve().then(t.t.bind(t,65329,23)),Promise.resolve().then(t.t.bind(t,50599,23)),Promise.resolve().then(t.t.bind(t,62118,23))},80806:(e,s,t)=>{Promise.resolve().then(t.bind(t,53453)),Promise.resolve().then(t.bind(t,57348))},31106:(e,s,t)=>{Promise.resolve().then(t.bind(t,95683)),Promise.resolve().then(t.bind(t,88859))},78855:(e,s,t)=>{Promise.resolve().then(t.bind(t,18645))},9637:(e,s,t)=>{Promise.resolve().then(t.bind(t,96087))},96087:(e,s,t)=>{"use strict";t.d(s,{default:()=>o});var r=t(20149),a=t(85723),l=t(4619),n=t(88859),i=t(75750);function o({companyCount:e}){let{user:s,logout:t}=(0,n.a)();(0,l.usePathname)();let o=async()=>{await t(),window.location.href="/login"};return(0,r.jsx)("nav",{className:"bg-white shadow-sm",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex justify-between h-16 items-center",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)(a.default,{href:"/admin",className:"text-xl font-bold text-gray-900",children:"kampuni"}),(0,r.jsxs)("span",{className:"px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800",children:[e," Companies"]})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)("span",{className:"text-gray-700",children:s?.name||s?.email}),(0,r.jsxs)("button",{onClick:o,className:"text-gray-600 hover:text-gray-900 font-medium flex items-center space-x-2",children:[(0,r.jsx)(i.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{children:"Logout"})]})]})]})})})}},16368:(e,s,t)=>{"use strict";t.d(s,{$:()=>C});var r=t(20149),a=t(63606),l=t(4619),n=t(73424),i=t(76762),o=t(77624),d=t(45531),c=t(59639),m=t(45459),u=t(54521),x=t(52851),h=t(8391),b=t(82832);function f({directors:e,onChange:s}){let t=t=>{let r=[...e];r.splice(t,1),s(r)},a=(t,r,a)=>{s(e.map((e,s)=>s===t?{...e,[r]:a}:e))};return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)("h3",{className:"text-lg font-medium",children:"Directors"}),e.map((e,s)=>(0,r.jsxs)("div",{className:"p-4 border rounded-lg space-y-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("h4",{className:"font-medium",children:["Director ",s+1]}),(0,r.jsx)("button",{type:"button",onClick:()=>t(s),className:"text-red-500 hover:text-red-700",children:(0,r.jsx)(b.Z,{className:"h-5 w-5"})})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Name"}),(0,r.jsx)("input",{type:"text",value:e.name,onChange:e=>a(s,"name",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Nationality"}),(0,r.jsx)("input",{type:"text",value:e.nationality,onChange:e=>a(s,"nationality",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Role"}),(0,r.jsx)("input",{type:"text",value:e.role,onChange:e=>a(s,"role",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Shares"}),(0,r.jsx)("input",{type:"number",value:e.shares,onChange:e=>a(s,"shares",parseInt(e.target.value,10)),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]})]})]},s)),(0,r.jsx)("button",{type:"button",onClick:()=>{s([...e,{id:"",name:"",nationality:"",role:"",shares:0}])},className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",children:"Add Director"})]})}var g=t(18177),p=t(50417),v=t(97625),j=t(87113);let N=({financials:e,onChange:s})=>{let[t,l]=(0,a.useState)(null),i=e=>e.year&&e.revenue&&e.profit?e.year<1900||e.year>new Date().getFullYear()?(l("Invalid year"),!1):(l(null),!0):(l("Year, revenue and profit are required"),!1),d=t=>{s(e.filter((e,s)=>s!==t))},c=(t,r,a)=>{s(e.map((e,s)=>{if(s===t){let s={...e,[r]:["revenue","profit","employeeCount","year"].includes(r)?Number(a):a};return i(s),s}return e}))};return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-medium",children:"Financial Results"}),(0,r.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"Add or modify company financial records"})]}),(0,r.jsxs)("button",{type:"button",onClick:()=>{let t=new Date().getFullYear();s([...e,{id:`temp-${Date.now()}`,year:t,revenue:0,profit:0,employeeCount:0,notes:""}])},className:"flex items-center px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100",children:[(0,r.jsx)(g.Z,{className:"w-4 h-4 mr-1"}),"Add Financial Record"]})]}),t&&(0,r.jsx)("div",{className:"rounded-md bg-red-50 p-4",children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(n.Z,{className:"h-5 w-5 text-red-400"}),(0,r.jsxs)("div",{className:"ml-3",children:[(0,r.jsx)("h3",{className:"text-sm font-medium text-red-800",children:"Validation Error"}),(0,r.jsx)("div",{className:"mt-2 text-sm text-red-700",children:t})]})]})}),(0,r.jsx)("div",{className:"space-y-4",children:e.map((e,s)=>(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border rounded-lg",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:(0,r.jsxs)("span",{className:"flex items-center",children:[(0,r.jsx)(o.Z,{className:"w-4 h-4 mr-2"}),"Year"]})}),(0,r.jsx)("input",{type:"number",min:"1900",max:new Date().getFullYear(),value:e.year,onChange:e=>c(s,"year",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:(0,r.jsxs)("span",{className:"flex items-center",children:[(0,r.jsx)(p.Z,{className:"w-4 h-4 mr-2"}),"Revenue"]})}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,r.jsx)(v.Z,{className:"h-4 w-4 text-gray-400"})}),(0,r.jsx)("input",{type:"number",min:"0",value:e.revenue,onChange:e=>c(s,"revenue",e.target.value),className:"block w-full pl-10 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:(0,r.jsxs)("span",{className:"flex items-center",children:[(0,r.jsx)(j.Z,{className:"w-4 h-4 mr-2"}),"Profit"]})}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,r.jsx)(v.Z,{className:"h-4 w-4 text-gray-400"})}),(0,r.jsx)("input",{type:"number",value:e.profit,onChange:e=>c(s,"profit",e.target.value),className:"block w-full pl-10 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Employee Count"}),(0,r.jsx)("input",{type:"number",min:"0",value:e.employeeCount,onChange:e=>c(s,"employeeCount",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Notes"}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{type:"text",value:e.notes,onChange:e=>c(s,"notes",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",placeholder:"Optional notes"}),(0,r.jsx)("button",{type:"button",onClick:()=>d(s),className:"ml-2 p-1 text-red-600 hover:text-red-800",title:"Remove financial record",children:(0,r.jsx)(b.Z,{className:"w-4 h-4"})})]})]})]},e.id))})]})},y=({tenders:e,onChange:s})=>{let[t,l]=(0,a.useState)(null),d=e=>e.projectName&&e.governmentEntity&&e.amount?e.amount<0?(l("Amount cannot be negative"),!1):(l(null),!0):(l("All required fields must be filled"),!1),c=t=>{s(e.filter((e,s)=>s!==t))},m=(t,r,a)=>{s(e.map((e,s)=>{if(s===t){let s={...e,[r]:"amount"===r?parseFloat(a):a};return d(s),s}return e}))};return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:"Government Tenders"}),(0,r.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"Add or modify government tender records"})]}),(0,r.jsxs)("button",{type:"button",onClick:()=>{s([...e,{id:`temp-${Date.now()}`,projectName:"",amount:0,awardDate:new Date().toISOString().split("T")[0],completionStatus:"AWARDED",governmentEntity:""}])},className:"flex items-center px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100",children:[(0,r.jsx)(g.Z,{className:"w-4 h-4 mr-1"}),"Add Tender"]})]}),t&&(0,r.jsx)("div",{className:"rounded-md bg-red-50 p-4",children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(n.Z,{className:"h-5 w-5 text-red-400"}),(0,r.jsxs)("div",{className:"ml-3",children:[(0,r.jsx)("h3",{className:"text-sm font-medium text-red-800",children:"Validation Error"}),(0,r.jsx)("div",{className:"mt-2 text-sm text-red-700",children:t})]})]})}),0===e.length?(0,r.jsxs)("div",{className:"text-center py-12 bg-gray-50 rounded-lg",children:[(0,r.jsx)(i.Z,{className:"mx-auto h-12 w-12 text-gray-400"}),(0,r.jsx)("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No tenders"}),(0,r.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"Get started by adding a new tender record"})]}):(0,r.jsx)("div",{className:"space-y-4",children:e.map((e,s)=>(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border rounded-lg",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:(0,r.jsxs)("span",{className:"flex items-center",children:[(0,r.jsx)(i.Z,{className:"w-4 h-4 mr-2"}),"Project Name"]})}),(0,r.jsx)("input",{type:"text",value:e.projectName,onChange:e=>m(s,"projectName",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:(0,r.jsxs)("span",{className:"flex items-center",children:[(0,r.jsx)(v.Z,{className:"w-4 h-4 mr-2"}),"Amount"]})}),(0,r.jsx)("input",{type:"number",min:"0",value:e.amount,onChange:e=>m(s,"amount",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:(0,r.jsxs)("span",{className:"flex items-center",children:[(0,r.jsx)(o.Z,{className:"w-4 h-4 mr-2"}),"Award Date"]})}),(0,r.jsx)("input",{type:"date",value:e.awardDate.split("T")[0],onChange:e=>m(s,"awardDate",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Status"}),(0,r.jsxs)("select",{value:e.completionStatus,onChange:e=>m(s,"completionStatus",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",children:[(0,r.jsx)("option",{value:"AWARDED",children:"Awarded"}),(0,r.jsx)("option",{value:"IN_PROGRESS",children:"In Progress"}),(0,r.jsx)("option",{value:"COMPLETED",children:"Completed"}),(0,r.jsx)("option",{value:"TERMINATED",children:"Terminated"})]})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:(0,r.jsxs)("span",{className:"flex items-center",children:[(0,r.jsx)(i.Z,{className:"w-4 h-4 mr-2"}),"Government Entity"]})}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{type:"text",value:e.governmentEntity,onChange:e=>m(s,"governmentEntity",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"}),(0,r.jsx)("button",{type:"button",onClick:()=>c(s),className:"ml-2 p-1 text-red-600 hover:text-red-800",title:"Remove tender",children:(0,r.jsx)(b.Z,{className:"w-4 h-4"})})]})]})]},e.id))})]})},w=({encumbrances:e,onChange:s})=>{let[t,l]=(0,a.useState)(null),i=e=>e.type&&e.amount?e.amount<0?(l("Amount cannot be negative"),!1):(l(null),!0):(l("Type and amount are required"),!1),o=t=>{s(e.filter((e,s)=>s!==t))},d=(t,r,a)=>{s(e.map((e,s)=>{if(s===t){let s={...e,[r]:"amount"===r?parseFloat(a):a};return i(s),s}return e}))};return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-medium",children:"Encumbrances"}),(0,r.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"Add or modify company encumbrances and liens"})]}),(0,r.jsxs)("button",{type:"button",onClick:()=>{s([...e,{id:`temp-${Date.now()}`,type:"",amount:0,date:new Date().toISOString().split("T")[0],status:"ACTIVE",description:""}])},className:"flex items-center px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100",children:[(0,r.jsx)(g.Z,{className:"w-4 h-4 mr-1"}),"Add Encumbrance"]})]}),t&&(0,r.jsx)("div",{className:"rounded-md bg-red-50 p-4",children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(n.Z,{className:"h-5 w-5 text-red-400"}),(0,r.jsxs)("div",{className:"ml-3",children:[(0,r.jsx)("h3",{className:"text-sm font-medium text-red-800",children:"Validation Error"}),(0,r.jsx)("div",{className:"mt-2 text-sm text-red-700",children:t})]})]})}),e.map((e,s)=>(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border rounded-lg",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Type"}),(0,r.jsxs)("select",{value:e.type,onChange:e=>d(s,"type",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",children:[(0,r.jsx)("option",{value:"",children:"Select type"}),(0,r.jsx)("option",{value:"MORTGAGE",children:"Mortgage"}),(0,r.jsx)("option",{value:"LIEN",children:"Lien"}),(0,r.jsx)("option",{value:"CHARGE",children:"Charge"}),(0,r.jsx)("option",{value:"DEBENTURE",children:"Debenture"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Amount"}),(0,r.jsx)("input",{type:"number",min:"0",value:e.amount,onChange:e=>d(s,"amount",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Date"}),(0,r.jsx)("input",{type:"date",value:e.date.split("T")[0],onChange:e=>d(s,"date",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Status"}),(0,r.jsxs)("select",{value:e.status,onChange:e=>d(s,"status",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",children:[(0,r.jsx)("option",{value:"ACTIVE",children:"Active"}),(0,r.jsx)("option",{value:"DISCHARGED",children:"Discharged"}),(0,r.jsx)("option",{value:"PENDING",children:"Pending"})]})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Description"}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{type:"text",value:e.description,onChange:e=>d(s,"description",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",placeholder:"Optional description"}),(0,r.jsx)("button",{type:"button",onClick:()=>o(s),className:"ml-2 p-1 text-red-600 hover:text-red-800",title:"Remove encumbrance",children:(0,r.jsx)(b.Z,{className:"w-4 h-4"})})]})]})]},e.id))]})};function C({initialData:e}){let s=(0,l.useRouter)(),[t,b]=(0,a.useState)("details"),[g,p]=(0,a.useState)(!1),[v,j]=(0,a.useState)(null),[C,k]=(0,a.useState)(e||{name:"",registrationNumber:"",registrationDate:"",address:"",contactInfo:{email:"",phone:""},directors:[],financials:[],tenders:[],encumbrances:[]}),A=[{id:"details",label:"Company Details"},{id:"directors",label:"Directors"},{id:"financials",label:"Financials"},{id:"tenders",label:"Tenders"},{id:"encumbrances",label:"Encumbrances"}],P=async t=>{t.preventDefault(),p(!0),j(null);try{let t=e?`/api/companies/${e.id}`:"/api/companies",r=await fetch(t,{method:e?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)});if(!r.ok)throw Error("Failed to save company");let a=await r.json();s.push(`/companies/${a.id}`)}catch(e){j(e instanceof Error?e.message:"An error occurred")}finally{p(!1)}},E=(e,s)=>{k(t=>({...t,[e]:s}))},D=e=>{switch(e){case"details":return!!(C.name&&C.registrationNumber);case"directors":return(C.directors?.length??0)>0;case"financials":return(C.financials?.length??0)>0;case"tenders":case"encumbrances":return!0;default:return!1}},S=D(t);return(0,r.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,r.jsx)("div",{className:"mb-8",children:(0,r.jsx)("nav",{"aria-label":"Progress",children:(0,r.jsx)("ol",{className:"flex items-center",children:A.map((e,s)=>(0,r.jsxs)("li",{className:`relative ${s!==A.length-1?"pr-8 sm:pr-20":""}`,children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("button",{onClick:()=>b(e.id),className:`relative flex h-8 w-8 items-center justify-center rounded-full ${D(e.id)?"bg-blue-600 hover:bg-blue-700":t===e.id?"border-2 border-blue-600":"border-2 border-gray-300"}`,children:(0,r.jsx)("span",{className:`h-2.5 w-2.5 rounded-full ${t===e.id?"bg-blue-600":"bg-transparent"}`})}),s!==A.length-1&&(0,r.jsx)("div",{className:`absolute top-4 w-full h-0.5 ${D(e.id)?"bg-blue-600":"bg-gray-300"}`})]}),(0,r.jsx)("span",{className:"absolute -bottom-6 w-max text-sm font-medium text-gray-500",children:e.label})]},e.id))})})}),v&&(0,r.jsx)("div",{className:"mb-6 rounded-md bg-red-50 p-4",children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(n.Z,{className:"h-5 w-5 text-red-400"}),(0,r.jsxs)("div",{className:"ml-3",children:[(0,r.jsx)("h3",{className:"text-sm font-medium text-red-800",children:"Error"}),(0,r.jsx)("div",{className:"mt-2 text-sm text-red-700",children:v})]})]})}),(0,r.jsxs)("form",{onSubmit:P,className:"space-y-8",children:["details"===t&&(0,r.jsx)("div",{className:"bg-white shadow rounded-lg p-6",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Company Name"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center",children:(0,r.jsx)(i.Z,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{type:"text",id:"name",required:!0,value:C.name,onChange:e=>E("name",e.target.value),className:"pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"registrationNumber",className:"block text-sm font-medium text-gray-700",children:"Registration Number"}),(0,r.jsx)("input",{type:"text",id:"registrationNumber",required:!0,value:C.registrationNumber,onChange:e=>E("registrationNumber",e.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"registrationDate",className:"block text-sm font-medium text-gray-700",children:"Registration Date"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center",children:(0,r.jsx)(o.Z,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{type:"date",id:"registrationDate",required:!0,value:C.registrationDate,onChange:e=>E("registrationDate",e.target.value),className:"pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"address",className:"block text-sm font-medium text-gray-700",children:"Address"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center",children:(0,r.jsx)(d.Z,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{type:"text",id:"address",required:!0,value:C.address,onChange:e=>E("address",e.target.value),className:"pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center",children:(0,r.jsx)(c.Z,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{type:"email",id:"email",required:!0,value:C.contactInfo?.email,onChange:e=>E("contactInfo",{...C.contactInfo,email:e.target.value}),className:"pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center",children:(0,r.jsx)(m.Z,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{type:"tel",id:"phone",required:!0,value:C.contactInfo?.phone,onChange:e=>E("contactInfo",{...C.contactInfo,phone:e.target.value}),className:"pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})]})]})]})}),"directors"===t&&(0,r.jsx)(f,{directors:C.directors||[],onChange:e=>E("directors",e)}),"financials"===t&&(0,r.jsx)(N,{financials:C.financials||[],onChange:e=>E("financials",e)}),"tenders"===t&&(0,r.jsx)(y,{tenders:C.tenders||[],onChange:e=>E("tenders",e)}),"encumbrances"===t&&(0,r.jsx)(w,{encumbrances:C.encumbrances||[],onChange:e=>E("encumbrances",e)}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsxs)("button",{type:"button",onClick:()=>s.back(),className:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:[(0,r.jsx)(u.Z,{className:"h-4 w-4 mr-2"}),"Cancel"]}),(0,r.jsxs)("div",{className:"flex space-x-4",children:[t!==A[0].id&&(0,r.jsx)("button",{type:"button",onClick:()=>{let e=A.findIndex(e=>e.id===t);b(A[e-1].id)},className:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Previous"}),t!==A[A.length-1].id?(0,r.jsx)("button",{type:"button",onClick:()=>{let e=A.findIndex(e=>e.id===t);b(A[e+1].id)},disabled:!S,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",children:"Next"}):(0,r.jsx)("button",{type:"submit",disabled:g||!S,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",children:g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.Z,{className:"h-4 w-4 mr-2 animate-spin"}),"Saving..."]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Z,{className:"h-4 w-4 mr-2"}),"Save Company"]})})]})]})]})]})}},95683:(e,s,t)=>{"use strict";t.d(s,{default:()=>l});var r=t(20149),a=t(85723);function l(){return(0,r.jsx)("nav",{className:"bg-white shadow-sm",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex justify-between h-16 items-center",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(a.default,{href:"/",className:"text-xl font-bold text-gray-900",children:"kampuni"})}),(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(a.default,{href:"/login",className:"px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-medium",children:"Login"})})]})})})}},88859:(e,s,t)=>{"use strict";t.d(s,{AuthProvider:()=>n,a:()=>i});var r=t(20149),a=t(63606);let l=(0,a.createContext)(void 0);function n({children:e}){let[s,t]=(0,a.useState)(null),[n,i]=(0,a.useState)(!0);return(0,r.jsx)(l.Provider,{value:{user:s,loading:n,login:(e,s)=>fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:s})}).then(e=>{if(!e.ok)throw Error("Login failed");return e.json()}).then(e=>(t(e.user),e.redirectUrl)),logout:()=>fetch("/api/auth/logout",{method:"POST"}).then(()=>{t(null)})},children:e})}function i(){let e=(0,a.useContext)(l);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},93240:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var r=t(47705),a=t(18645),l=t(96826),n=t(78051),i=t(71623);async function o({children:e}){let s=(0,n.cookies)(),t=s.get("session")?.value;t||(0,i.redirect)("/login");let o=await l._.user.findUnique({where:{id:t},select:{id:!0,email:!0,name:!0,isAdmin:!0}});o?.isAdmin||(0,i.redirect)("/login");let d=await l._.company.count();return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{companyCount:d}),(0,r.jsx)("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:e})]})}},11112:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c,metadata:()=>d});var r=t(47705),a=t(60177),l=t.n(a);t(5023);var n=t(57348),i=t(53453),o=t(78051);let d={title:"Kampuni",description:"Access accurate, real-time information about businesses across Africa."};function c({children:e}){return(0,o.cookies)(),(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:l().className,children:(0,r.jsxs)(n.AuthProvider,{children:[(0,r.jsx)(i.default,{}),e]})})})}},18645:(e,s,t)=>{"use strict";t.d(s,{default:()=>r});let r=(0,t(78105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/elisha/usekampuni/src/components/admin/AdminNav.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/elisha/usekampuni/src/components/admin/AdminNav.tsx","default")},53453:(e,s,t)=>{"use strict";t.d(s,{default:()=>r});let r=(0,t(78105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/elisha/usekampuni/src/components/navigation/MainNav.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/elisha/usekampuni/src/components/navigation/MainNav.tsx","default")},57348:(e,s,t)=>{"use strict";t.d(s,{AuthProvider:()=>a});var r=t(78105);let a=(0,r.registerClientReference)(function(){throw Error("Attempted to call AuthProvider() from the server but AuthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/elisha/usekampuni/src/context/AuthContext.tsx","AuthProvider");(0,r.registerClientReference)(function(){throw Error("Attempted to call useAuth() from the server but useAuth is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/elisha/usekampuni/src/context/AuthContext.tsx","useAuth")},96826:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l,_:()=>a});var r=t(53524);let a=globalThis.prisma??new r.PrismaClient,l=a},5023:()=>{}};