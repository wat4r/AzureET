"use strict";(self.webpackChunkazure_et_docs=self.webpackChunkazure_et_docs||[]).push([[616],{1397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(5893),o=t(1151);const r={sidebar_position:1},s="Config",c={id:"moules/config",title:"Config",description:"Authentication mode",source:"@site/docs/moules/config.md",sourceDirName:"moules",slug:"/moules/config",permalink:"/docs/moules/config",draft:!1,unlisted:!1,editUrl:"https://github.com/wat4r/AzureET/tree/main/docs/docs/docs/moules/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddfc Modules",permalink:"/docs/category/-modules"},next:{title:"Public",permalink:"/docs/moules/public"}},l={},a=[{value:"Authentication mode",id:"authentication-mode",level:2},{value:"Refresh token",id:"refresh-token",level:2},{value:"App client credential",id:"app-client-credential",level:2},{value:"UserAgent",id:"useragent",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.h2,{id:"authentication-mode",children:"Authentication mode"}),"\n",(0,i.jsx)(n.p,{children:"Set the authentication mode to TOKEN(Refresh token) or APP(Client credential)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"AzureET Config SetMode -mode TOKEN\r\nAzureET Config SetMode -mode APP\n"})}),"\n",(0,i.jsx)(n.h2,{id:"refresh-token",children:"Refresh token"}),"\n",(0,i.jsx)(n.p,{children:"Set refresh token"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"AzureET Config SetRefreshToken -token token.txt\n"})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"AzureET Config SetRefreshToken -token 0.AVUAIE......\n"})}),"\n",(0,i.jsx)(n.h2,{id:"app-client-credential",children:"App client credential"}),"\n",(0,i.jsx)(n.p,{children:"Set app client credential"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"AzureET Config SetClientCredential -tenant [Tenant] -clientId [ClientId] -secret [ClientSecret]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"useragent",children:"UserAgent"}),"\n",(0,i.jsxs)(n.p,{children:["Set request header ",(0,i.jsx)(n.code,{children:"UserAgent"})," value"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'AzureET Config SetUserAgent -ua "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);