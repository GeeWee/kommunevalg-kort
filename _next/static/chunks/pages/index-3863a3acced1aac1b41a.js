(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1836:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return I}});var t=n(9008),s=n(4303),d={Albertslund:"Albertslund","Aller\xf8d":"Aller\xf8d",Ballerup:"Ballerup",Bornholm:"Bornholm","Br\xf8ndby":"Br\xf8ndby","Drag\xf8r":"Drag\xf8r",Egedal:"Egedal",Fredensborg:"Fredensborg",Frederiksberg:"Frederiksberg",Frederikssund:"Frederikssund","Fures\xf8":"Fures\xf8",Gentofte:"Gentofte",Gladsaxe:"Gladsaxe",Glostrup:"Glostrup",Gribskov:"Gribskov","Halsn\xe6s":"Halsn\xe6s","Helsing\xf8r":"Helsing\xf8r",Herlev:"Herlev","Hiller\xf8d":"Hiller\xf8d",Hvidovre:"Hvidovre","H\xf8jeTaastrup":"H\xf8je-Taastrup","H\xf8rsholm":"H\xf8rsholm","Ish\xf8j":"Ish\xf8j","K\xf8benhavn":"K\xf8benhavn","LyngbyTaarb\xe6k":"Lyngby-Taarb\xe6k",Rudersdal:"Rudersdal","R\xf8dovre":"R\xf8dovre","T\xe5rnby":"T\xe5rnby","Vallensb\xe6k":"Vallensb\xe6k",Favrskov:"Favrskov",Hedensted:"Hedensted",Herning:"Herning",Holstebro:"Holstebro",Horsens:"Horsens",IkastBrande:"Ikast-Brande",Lemvig:"Lemvig",Norddjurs:"Norddjurs",Odder:"Odder",Randers:"Randers","Ringk\xf8bingSkjern":"Ringk\xf8bing-Skjern","Sams\xf8":"Sams\xf8",Silkeborg:"Silkeborg",Skanderborg:"Skanderborg",Skive:"Skive",Struer:"Struer",Syddjurs:"Syddjurs",Viborg:"Viborg",Aarhus:"Aarhus","Br\xf8nderslev":"Br\xf8nderslev",Frederikshavn:"Frederikshavn","Hj\xf8rring":"Hj\xf8rring",Jammerbugt:"Jammerbugt","L\xe6s\xf8":"L\xe6s\xf8",Mariagerfjord:"Mariagerfjord","Mors\xf8":"Mors\xf8",Rebild:"Rebild",Thisted:"Thisted",Vesthimmerland:"Vesthimmerland",Aalborg:"Aalborg",Faxe:"Faxe",Greve:"Greve",Guldborgsund:"Guldborgsund","Holb\xe6k":"Holb\xe6k",Kalundborg:"Kalundborg","K\xf8ge":"K\xf8ge",Lejre:"Lejre",Lolland:"Lolland","N\xe6stved":"N\xe6stved",Odsherred:"Odsherred",Ringsted:"Ringsted",Roskilde:"Roskilde",Slagelse:"Slagelse","Solr\xf8d":"Solr\xf8d","Sor\xf8":"Sor\xf8",Stevns:"Stevns",Vordingborg:"Vordingborg",Assens:"Assens",Billund:"Billund",Esbjerg:"Esbjerg","Fan\xf8":"Fan\xf8",Fredericia:"Fredericia",FaaborgMidtfyn:"Faaborg-Midtfyn",Haderslev:"Haderslev",Kerteminde:"Kerteminde",Kolding:"Kolding",Langeland:"Langeland",Middelfart:"Middelfart",Nordfyn:"Nordfyn",Nyborg:"Nyborg",Odense:"Odense",Svendborg:"Svendborg","S\xf8nderborg":"S\xf8nderborg","T\xf8nder":"T\xf8nder",Varde:"Varde",Vejen:"Vejen",Vejle:"Vejle","\xc6r\xf8":"\xc6r\xf8",Aabenraa:"Aabenraa"},i=n(5893),a=function(e){var r=null;void 0!==e.value&&(r=o(e.value));var n=Object.values(d).map((function(e){return o(e)}));return(0,i.jsx)(s.ZP,{value:r,onChange:function(r){var n;e.onChange(null!==(n=null===r||void 0===r?void 0:r.value)&&void 0!==n?n:void 0)},options:n,instanceId:e.instanceId,placeholder:"S\xf8g efter kommune"})};function o(e){return{label:e,value:e}}var l=n(7294),u=n(8800),c=n.n(u),h=function(e){var r=e.groups.map((function(e,r){return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.groupName}),(0,i.jsx)("td",{children:e.description}),(0,i.jsx)("td",{children:e.location}),(0,i.jsx)("td",{children:e.meetings}),(0,i.jsx)("td",{children:e.person})]},r)}));return(0,i.jsx)("div",{children:(0,i.jsxs)("table",{className:c().table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Navn"}),(0,i.jsx)("th",{children:"Beskrivelse"}),(0,i.jsx)("th",{children:"M\xf8dested"}),(0,i.jsx)("th",{children:"M\xf8defrekvens"}),(0,i.jsx)("th",{children:"Mere information"})]})}),(0,i.jsx)("tbody",{children:r})]})})},v=n(6486),j=n.n(v),g=n(9490);function x(e){return e.startsWith("http")?e:"http://".concat(e)}var m=function(e){var r=e.events.filter((function(e){return e.date>=g.ou.now().minus({days:1}).startOf("day")})),n=j().sortBy(r,(function(e){return e.date})).map((function(e,r){var n=(0,i.jsx)("td",{});return e.moreInfoLink&&(n=(0,i.jsx)("td",{children:(0,i.jsxs)("a",{href:x(e.moreInfoLink),children:["https://",e.moreInfoLink]})})),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.date.toLocaleString()}),(0,i.jsx)("td",{children:e.name}),(0,i.jsx)("td",{children:e.place}),(0,i.jsx)("td",{children:e.description}),n]},r)}));return(0,i.jsx)("div",{children:(0,i.jsxs)("table",{className:c().table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Tidspunkt"}),(0,i.jsx)("th",{children:"Begivenhed"}),(0,i.jsx)("th",{children:"Sted"}),(0,i.jsx)("th",{children:"Beskrivelse"}),(0,i.jsx)("th",{children:"Mere information"})]})}),(0,i.jsx)("tbody",{children:n})]})})},f=n(266),p=n(809),b=n.n(p),k=n(9669),S=n.n(k),y=n(8767);function L(e){var r=(0,y.useQuery)("events",H);if(r.data)return r.data.filter((function(r){return r.kommune===e}))}function H(){return B.apply(this,arguments)}function B(){return(B=(0,f.Z)(b().mark((function e(){var r,n;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S().get("https://script.google.com/macros/s/AKfycbzboDHSRLhg7ILtaPq9u_cZLm-isnLD0O913RX74hvicF05wLgHVzKBrnNHptW8zio_/exec?path=Begivenheder",{headers:{"Content-Type":"text/plain"}});case 2:return r=e.sent,console.log(r.data),n=r.data.map((function(e){return{date:g.ou.fromISO(e.Dato),time:e.Tidspunkt,name:e.Begivenhed,kommune:e.Kommune,place:e.Sted,description:e.Info,moreInfoLink:e.Link}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return N.apply(this,arguments)}function N(){return(N=(0,f.Z)(b().mark((function e(){var r,n;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S().get("https://script.google.com/macros/s/AKfycbzboDHSRLhg7ILtaPq9u_cZLm-isnLD0O913RX74hvicF05wLgHVzKBrnNHptW8zio_/exec?path=Grupper");case 2:return r=e.sent,console.log(r.data),n=r.data.map((function(e){return{person:e.Kontaktperson,groupName:e.Gruppenavn,kommune:e.Kommune,description:e.Beskrivelse,meetings:e.M\u00f8der,location:e.Lokation}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=function(e){var r=L(e.name),n=function(e){var r=(0,y.useQuery)("groups",F);if(r.data)return r.data.filter((function(r){return r.kommune===e}))}(e.name),t=(0,i.jsx)("div",{});void 0!==r&&(t=(0,i.jsx)(m,{events:r}));var s=(0,i.jsx)("div",{});return void 0!==n&&(s=(0,i.jsx)(h,{groups:n})),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:e.name}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Grupper"}),s]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Begivenheder"}),t]})]})},_=function(e){var r=e.events.filter((function(e){return e.date>=g.ou.now().minus({days:1}).startOf("day")})),n=j().sortBy(r,(function(e){return e.date})).map((function(e,r){var n=(0,i.jsx)("td",{});return e.moreInfoLink&&(n=(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:x(e.moreInfoLink),children:e.moreInfoLink})})),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.date.toLocaleString()}),(0,i.jsx)("td",{children:e.name}),(0,i.jsx)("td",{children:e.kommune}),(0,i.jsx)("td",{children:e.place}),(0,i.jsx)("td",{children:e.description}),n]},r)}));return(0,i.jsx)("div",{children:(0,i.jsxs)("table",{className:c().table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Tidspunkt"}),(0,i.jsx)("th",{children:"Begivenhed"}),(0,i.jsx)("th",{children:"Kommune"}),(0,i.jsx)("th",{children:"Sted"}),(0,i.jsx)("th",{children:"Beskrivelse"}),(0,i.jsx)("th",{children:"Mere information"})]})}),(0,i.jsxs)("tbody",{children:[n,(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:999,className:"text-center",children:"Og mange flere..."})})]})]})})},I=function(){var e,r,n,s=(0,l.useState)(void 0),d=s[0],o=s[1],u=(function(){var e=(0,y.useQuery)("groups",F);if(e.data)e.data}(),L("Landsd\xe6kkende")),c=null===(e=function(){var e=(0,y.useQuery)("events",H);if(e.data)return e.data}())||void 0===e||null===(r=e.filter((function(e){return"Landsd\xe6kkende"!==e.kommune})))||void 0===r?void 0:r.slice(0,10);return n=void 0===d?null:(0,i.jsx)(K,{name:d}),(0,i.jsxs)("div",{children:[(0,i.jsxs)(t.default,{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{children:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Kommende landsd\xe6kkende begivenheder"}),u&&(0,i.jsx)(m,{events:u})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Kommende begivenheder i alle kommuner"}),c&&(0,i.jsx)(_,{events:c})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Se events og lokalgrupper i din kommune"}),(0,i.jsx)(a,{value:d,onChange:o,instanceId:"sdfsfsd"})]})]}),n]})]})}},5301:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1836)}])},8800:function(e){e.exports={table:"table_table__31gOj"}}},function(e){e.O(0,[774,809,662,455,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);