(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var i,a,s,r=n(0),l=n.n(r),c=n(26),d=n.n(c),o=(n(32),n(42)),m=n(16),u=n(43),b=n(27),j=n(10),f=n(18),x=n(44),p=n(19),h=n(11),g="https://test-task.expane.pro/api/graphql",v=function(){var e=Object(h.gql)(i||(i=Object(p.a)(["\n    {\n      getClients{\n        id\n        firstName\n        lastName\n        phone\n        avatarUrl\n      }\n    }\n  "])));return Object(h.request)(g,e).then((function(e){return e.getClients}))},O=function(e){var t=Object(h.gql)(a||(a=Object(p.a)(["\n  mutation testAddClient($firstName: String!\n    $lastName: String!\n    $phone: String\n    $avatarUrl: String){\n    addClient(firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl){\n      id\n    }\n  }\n  "])));return Object(h.request)(g,t,e).then((function(e){return e.addClient}))},N=function(e){var t=Object(h.gql)(s||(s=Object(p.a)(["\n  mutation testUpdateClient(\n    $id: ID!\n    $firstName: String!\n    $lastName: String!\n    $phone: String\n    $avatarUrl: String){\n    updateClient(id: $id, firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl){\n      id\n      firstName\n      lastName\n      phone\n      avatarUrl\n    }\n  }\n  "])));return Object(h.request)(g,t,e).then((function(e){return e.updateClient}))},y=n(2),w=function(e){var t={};for(var n in e)e[n].length?t[n]=e[n]:t[n]=null;return t},k=function(){var e,t,n,i,a,s,r=Object(f.a)(),l=r.register,c=r.handleSubmit,d=r.setValue,o=r.errors,u=Object(m.b)(),b=Object(x.a)(O,{onSuccess:function(){u.invalidateQueries("clients")}});return Object(y.jsx)("form",{className:"border mt-10",onSubmit:c((function(e){var t=w(e);for(var n in b.mutate(t),e)d(n,"")})),id:"form",children:Object(y.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[Object(y.jsx)("div",{className:"p-4 bg-white",children:Object(y.jsxs)("div",{className:"grid grid-cols-6 gap-4",children:[Object(y.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(y.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"First name"}),Object(y.jsx)("input",{ref:l({required:"required field"}),type:"text",name:"firstName",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"+((null===(e=o.firstName)||void 0===e?void 0:e.message)?" border-red-500":"")}),(null===(t=o.firstName)||void 0===t?void 0:t.message)?Object(y.jsx)("span",{className:"text-red-500",children:null===(n=o.firstName)||void 0===n?void 0:n.message}):null]}),Object(y.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(y.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Last name"}),Object(y.jsx)("input",{ref:l({required:"required field"}),type:"text",name:"lastName",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"+((null===(i=o.lastName)||void 0===i?void 0:i.message)?" border-red-500":"")}),(null===(a=o.lastName)||void 0===a?void 0:a.message)?Object(y.jsx)("span",{className:"text-red-500",children:null===(s=o.lastName)||void 0===s?void 0:s.message}):null]}),Object(y.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(y.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Phone"}),Object(y.jsx)("input",{ref:l,type:"tel",name:"phone",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(y.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(y.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Avatar Url"}),Object(y.jsx)("input",{ref:l,type:"url",name:"avatarUrl",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]})]})}),Object(y.jsx)("div",{className:"p-4 bg-gray-50 text-right",children:Object(y.jsx)("button",{className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"ADD"})})]})})},$=function(e){var t=e.client,n=e.index,i=e.editClient,a=Object(f.a)(),s=a.register,r=a.handleSubmit,l=Object(m.b)(),c=Object(x.a)(N,{onSuccess:function(){l.invalidateQueries("clients")}});return Object(y.jsxs)("form",{className:(n%2?"bg-blue-50 ":"bg-blue-100 ")+"flex justify-between bg-gray-300 divide-x divide-black hover:bg-blue-200",onSubmit:r((function(e){var n=w(e);(function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n]!==t[n])return!1;for(var i in t)if(t.hasOwnProperty(i)&&e[i]!==t[i])return!1;return!0})(n,t)||c.mutate(n),i()})),children:[Object(y.jsx)("input",{ref:s,type:"text",className:"p-4 flex-initial w-2/12 p-1 flex justify-center items-center",name:"avatarUrl",alt:"avatar",defaultValue:t.avatarUrl}),Object(y.jsx)("input",{ref:s,type:"text",className:"p-4 flex-initial w-3/12 p-1 flex justify-center items-center",autoFocus:!0,name:"firstName",defaultValue:t.firstName}),Object(y.jsx)("input",{ref:s,type:"text",className:"p-4 flex-initial w-3/12 p-1 flex justify-center items-center",name:"lastName",defaultValue:t.lastName}),Object(y.jsx)("input",{ref:s,type:"text",className:"p-4 flex-initial w-4/12 p-1 flex justify-center items-center",name:"phone",defaultValue:t.phone}),Object(y.jsx)("input",{ref:s,type:"text",className:"hidden",name:"id",defaultValue:t.id}),Object(y.jsx)("input",{className:"hidden",type:"submit",value:"sub"})]})},S=function(e){var t=e.client,n=e.index,i=Object(r.useState)(!1),a=Object(j.a)(i,2),s=a[0],l=a[1];return Object(y.jsx)(y.Fragment,{children:s?Object(y.jsx)($,{client:t,index:n,editClient:function(){l(!1)}}):Object(y.jsxs)("div",{className:(n%2?"bg-blue-50 ":"bg-blue-100 ")+"flex justify-between bg-gray-300 divide-x divide-black hover:bg-blue-200 h-20",onDoubleClick:function(){l(!0)},children:[Object(y.jsx)("div",{className:"p-4 flex-initial w-2/12 p-1 flex justify-center items-center",children:Object(y.jsx)("img",{className:"max-h-20 my-0 mx-auto",src:t.avatarUrl?t.avatarUrl:"https://iconape.com/wp-content/png_logo_vector/avatar-4.png",alt:"avatar"})}),Object(y.jsx)("div",{className:"p-4 flex-initial w-3/12 p-1 flex justify-center items-center",children:t.firstName}),Object(y.jsx)("div",{className:"p-4 flex-initial w-3/12 p-1 flex justify-center items-center",children:t.lastName}),Object(y.jsx)("div",{className:"p-4 flex-initial w-4/12 p-1 flex justify-center items-center",children:t.phone})]})})},U=function(e){var t=e.clients,n=e.isLoading;return Object(y.jsxs)("div",{className:"border border-black min-w-max",children:[Object(y.jsxs)("div",{className:"flex justify-between bg-gray-300 divide-x divide-black border-b-2 border-black ",children:[Object(y.jsx)("div",{className:"p-4 flex-initial w-2/12 p-1 text-center",children:"Avatar"}),Object(y.jsx)("div",{className:"p-4 flex-initial w-3/12 p-1 text-center",children:"FirstName"}),Object(y.jsx)("div",{className:"p-4 flex-initial w-3/12 p-1 text-center",children:"LastName"}),Object(y.jsx)("div",{className:"p-4 flex-initial w-4/12 p-1 text-center",children:"Phone"})]}),Object(y.jsx)("div",{children:n?Object(y.jsx)("span",{className:"block text-xl font-bolt text-center p-4",children:"Loading..."}):null===t||void 0===t?void 0:t.map((function(e,t){return Object(y.jsx)(S,{client:e,index:t},e.id)}))})]})},q=new o.a({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),C=function(){var e=Object(u.a)("clients",v,{refetchOnWindowFocus:!1}),t=e.isLoading,n=e.data,i=e.status,a=null===n||void 0===n?void 0:n.sort((function(e,t){return e.id>t.id?1:-1}));return"error"===i?Object(y.jsx)("div",{className:"p-4",children:Object(y.jsx)("h1",{children:"Error querying"})}):Object(y.jsxs)("div",{className:"p-4",children:[Object(y.jsx)("h1",{className:"text-2xl font-bolt text-center",children:"List of Clients"}),Object(y.jsx)("div",{className:"p-4 text-right",children:Object(y.jsx)("a",{href:"#form",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"GO TO ADD"})}),Object(y.jsx)(U,{isLoading:t,clients:a}),Object(y.jsx)(k,{})]})},D=function(){return Object(y.jsxs)(m.a,{client:q,children:[Object(y.jsx)(C,{}),Object(y.jsx)(b.ReactQueryDevtools,{initialIsOpen:!1})]})};d.a.render(Object(y.jsx)(l.a.StrictMode,{children:Object(y.jsx)(D,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.098354b5.chunk.js.map