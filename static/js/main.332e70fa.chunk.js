(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),o=n.n(s),r=(n(14),n(9)),l=n(2),i=n(5),d=n(0),j=function(e){var t=e.id,n=e.text,a=e.date,c=e.handleDeleteNote;return Object(d.jsxs)("div",{className:"note",children:[Object(d.jsx)("span",{children:n}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsx)("small",{children:a}),Object(d.jsx)(i.a,{onClick:function(){return c(t)},className:"delete-icon",size:"1.3em"})]})]})},u=function(e){var t=e.handleAddNote,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],o=c[1];return Object(d.jsxs)("div",{className:"note new",children:[Object(d.jsx)("textarea",{rows:"8",cols:"10",placeholder:"Type to add a note...",value:s,onChange:function(e){200-e.target.value.length>=0&&o(e.target.value)}}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsxs)("small",{style:{color:200-s.length<=10?"red":"black"},children:[200-s.length," Remaining"]}),Object(d.jsx)("button",{className:"save",onClick:function(){s.trim().length>0&&(t(s),o(""))},children:"Save"})]})]})},b=function(e){var t=e.notes,n=e.handleAddNote,a=e.handleDeleteNote;return Object(d.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(d.jsx)(j,{id:e.id,text:e.text,date:e.date,handleDeleteNote:a})})),Object(d.jsx)(u,{handleAddNote:n})]})},h=function(e){var t=e.handleSearchNote;return Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)(i.b,{className:"search-icons",size:"1.3em"}),Object(d.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"type to search..."})]})},O=function(e){var t=e.handleToggleDarkMode,n=e.isDarkMode;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:"Notes"}),Object(d.jsxs)("button",{className:"save",onClick:function(){return t((function(e){return!e}))},children:[n?"Disable":"Enable"," Dark Mode"]})]})},x=n(7),f=function(){var e=new Date,t=Object(a.useState)([{id:Object(x.a)(),text:"Welcome to my notes app made in React!",date:e.toLocaleDateString()}]),n=Object(l.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),j=i[0],u=i[1],f=Object(a.useState)(!1),m=Object(l.a)(f,2),v=m[0],N=m[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-app-data"));console.log(e),e&&s(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("react-notes-app-data",JSON.stringify(c))}),[c]);return Object(d.jsx)("div",{className:"".concat(v&&"dark-mode"),children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{handleToggleDarkMode:N,isDarkMode:v}),Object(d.jsx)(h,{handleSearchNote:u}),Object(d.jsx)(b,{notes:c.filter((function(e){return e.text.toLowerCase().includes(j)})),handleAddNote:function(e){var t=new Date,n={id:Object(x.a)(),text:e,date:t.toLocaleDateString()},a=[].concat(Object(r.a)(c),[n]);s(a)},handleDeleteNote:function(e){var t=c.filter((function(t){return t.id!==e}));s(t)}})]})})};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.332e70fa.chunk.js.map