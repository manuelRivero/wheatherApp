(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a(162)},136:function(e,t,a){},160:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=a(18),i=(a(136),a(24)),u=a(8),s=a(40),m=a(50),d=a(43),p=a(41),h=a(44),f=a(51),E=a(76),b=a(14),g=a(53),y=a.n(g),v=a(72),O=a.n(v),w=a(196),j=function(e){var t=e.icon;return"http://openweathermap.org/img/w/".concat(t,".png")},C=Object(w.a)(function(e){return{temperature:{flexGrow:"2",display:"flex",justifyContent:"center",alignItems:"center"}}}),S=function(e){var t=e.temperature,a=e.weatherState,n=C();return r.a.createElement("div",{className:n.temperature},r.a.createElement("img",{src:j(a),alt:"",className:"icon-img"}),r.a.createElement("h3",null,"  ".concat(t),r.a.createElement("span",{className:"tempDegrees"},"C\xba")))},x=Object(w.a)(function(e){return{extraInfo:{flexGrow:"1",color:"blue",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}}),A=function(e){var t=e.humidity,a=e.wind,n=x();return r.a.createElement("div",{className:n.extraInfo},r.a.createElement("span",null,"Humidity: ".concat(t,"%")),r.a.createElement("span",null,"Wind: ".concat(a)))},k=Object(w.a)(function(e){return{root:{display:"flex",backgroundColor:"rgba(240, 240, 240, .5)",boxSizing:"border-box"}}}),N=function(e){var t=e.data,a=k(),n=t.temperature,c=t.weatherState,l=t.humidity,o=t.wind;return r.a.createElement("div",{className:a.root},r.a.createElement(S,{temperature:n,weatherState:c}),r.a.createElement(A,{humidity:l,wind:o}))},D=a(198),R=a(199),_=a(201),I=a(203),T=Object(w.a)(function(e){return{root:{margin:"1rem"}}}),L=function(e){e.weekDay;var t=e.hour,a=e.data,n=T();return r.a.createElement(D.a,{item:!0,xs:12,md:4},r.a.createElement(R.a,{className:n.root},r.a.createElement(_.a,{title:"".concat(t,":00")}),r.a.createElement(I.a,null,r.a.createElement(N,{data:a}))))},M=a(204),H=a(205),U=a(207),F=a(236),B=a(202),P=a(211),W=a(200),Y=a(208),V=Object(w.a)(function(e){return{paper:{padding:"1rem",textAlign:"center"},expansionPanelDetail:{flexDirection:"column"},actions:{textAlign:"left"}}}),z=function(e){var t=e.city,a=e.forecastExtendedData,n=V(),c=Object(u.g)(),l=r.a.useState(!1),o=Object(b.a)(l,2),i=o[0],s=o[1],m=r.a.createElement(M.a,null);if(a&&a[0]===t){var d=a[1].reduce(function(e,t){return e[t.weekDay]=[].concat(Object(E.a)(e[t.weekDay]||[]),[t]),e},{}),p=[];for(var h in d)p.push(Object(f.a)({},h,d[h]));m=p.map(function(e,t){var a,c;for(var l in e)a=l;return r.a.createElement(H.a,{key:a+t,expanded:i===t,onChange:(c=t,function(e,t){s(!!t&&c)})},r.a.createElement(U.a,{key:a+t,expandIcon:r.a.createElement(F.a,{title:i===t?"close":"open"},r.a.createElement(O.a,null)),"aria-controls":a,id:a},r.a.createElement(B.a,null,a)),r.a.createElement(P.a,{className:n.expansionPanelDetail},r.a.createElement(D.a,{container:!0},e[a].map(function(e,t){return r.a.createElement(L,{weekDay:e.weekDay,hour:e.hour,data:e.data,key:e+t})}))))})}return r.a.createElement(D.a,{item:!0,sm:12,md:10},r.a.createElement(W.a,{className:n.paper},r.a.createElement("div",{className:n.actions},r.a.createElement(F.a,{title:"Go back"},r.a.createElement(Y.a,{onClick:function(){c.push("/weather")}},r.a.createElement(y.a,null)))),r.a.createElement("h1",null,t),m&&m))},G=a(57),K=a.n(G),q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"weather",a="https://api.openweathermap.org/data/2.5/".concat(t,"?q=").concat(e,"&units=metric&APPID=").concat("ea0b23131c72bacfe9c361211bb6ea7f");return fetch(a).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){throw e})},J=function(e){var t=e.wind.speed,a=e.main,n=a.humidity,r=a.temp,c=e.weather;return{humidity:n,weatherState:X(c),temperature:r,wind:"".concat(t,"m/s")}},X=function(e){var t=Object(b.a)(e,1)[0];return{main:t.main,description:t.description,icon:t.icon}},$=a(106),Q=(a(158),$.initializeApp({apiKey:"AIzaSyDJ_ekIKwp_RiUoy6LL6C1IKOG29OAVy0k",authDomain:"weatherapp-4040e.firebaseapp.com",databaseURL:"https://weatherapp-4040e.firebaseio.com",projectId:"weatherapp-4040e",storageBucket:"weatherapp-4040e.appspot.com",messagingSenderId:"180990636775",appId:"1:180990636775:web:9c12cb0a73b462a970a842"})),Z=function(e){return function(t){console.log(e),q(e,"forecast").then(function(a){var n=a.list.filter(function(e){return 6===K.a.unix(e.dt).utc().hour()||12===K.a.unix(e.dt).utc().hour()||18===K.a.unix(e.dt).utc().hour()}).map(function(e){return{weekDay:K.a.unix(e.dt).format("ddd"),hour:K.a.unix(e.dt).hour(),data:{temperature:e.main.temp,wind:e.wind.speed,humidity:e.main.humidity,weatherState:X(e.weather)}}});t(function(e){return{type:"SET_FORECAST_DATA",payload:e}}({city:e,forecastExtend:n}))}).catch(function(e){return console.log("".concat(e))})}},ee=function(e){return{type:"ADD_CITY",payload:e}},te=function(e){return function(t){t({type:"SEARCH_CITY_START"}),function(e){var t="https://api.teleport.org/api/cities/?search=".concat(e);return fetch(t).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return console.log(e)})}(e).then(function(e){var a=e._embedded["city:search-results"].map(function(e){var t=e.matching_full_name.split(",");return t[0]+","+t[t.length-1].split("(")[0]});t(function(e){return{type:"SEARCH_CITY_SUCCESS",payload:e}}(a))}).catch(function(e){return t({type:"SEARCH_CITY_FAIL",payload:e})})}},ae=function(e){return function(t){t({type:"SHOW_SNACKBAR",payload:e}),setTimeout(function(){t({type:"HIDE_SNACKBAR"})},5e3)}},ne=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.city;this.props.availableCities.indexOf(e)>=0?this.props.getForecast(e):this.props.history.replace("/forecast?find=".concat(e))}},{key:"componentDidUpdate",value:function(){if(this.props.forecastExtendedData[0]!==this.props.match.params.city){console.log("deberia actualizar");var e=this.props.match.params.city;this.props.getForecast(e)}}},{key:"render",value:function(){var e=this.props.match.params.city;return r.a.createElement(z,{city:e,forecastExtendedData:this.props.forecastExtendedData})}}]),t}(n.Component),re=Object(o.b)(function(e){return{forecastExtendedData:e.extendedForecastReducer,availableCities:e.cityReducer.cities}},function(e){return{getForecast:function(t){return e(Z(t))}}})(Object(u.i)(ne)),ce=a(212),le=Object(w.a)(function(e){return{root:{width:"100%",padding:"2rem"},actions:{textAlign:"left"},message:{textAlign:"center"}}});function oe(){var e=le(),t=new URLSearchParams(Object(u.h)().search).get("find"),a=Object(u.g)(),n=r.a.createElement(u.a,{to:"weather"});return t&&(n=r.a.createElement("div",{className:e.message},r.a.createElement("h1",null,' Do you like to find "',t,'" ?'),r.a.createElement(ce.a,{variant:"contained",color:"primary",onClick:function(){console.log("click"),a.push("/weather?find=".concat(t))}},"Find it !"))),r.a.createElement(D.a,{item:!0,sm:12,md:8},r.a.createElement(W.a,{className:e.root},r.a.createElement("div",{className:e.actions},r.a.createElement(Y.a,{onClick:function(){a.push("/weather")}},r.a.createElement(y.a,null))),n))}var ie=function(e){return e.cities,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/forecast",exact:!0},r.a.createElement(oe,null)),r.a.createElement(u.b,{path:"/forecast/:city"},r.a.createElement(re,null)),r.a.createElement(u.b,{path:"*"},"Ups, not mach for that!"))},ue=a(19),se=a.n(ue),me=a(107),de=a.n(me),pe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).headleClick=function(){var e="/forecast/".concat(a.props.city);console.log(a.props.history.replace(e))},a.onDelete=function(e){e.stopPropagation(),a.props.onDelete()},a.componentWillMount=function(){q(a.props.city).then(function(e){var t=J(e);a.setState({data:t})})},a.render=function(){var e=a.props.city,t=a.state.data;return r.a.createElement(D.a,{item:!0,xs:12,md:4},r.a.createElement(R.a,{style:{margin:"1rem auto",cursor:"pointer"},onClick:a.headleClick},r.a.createElement(_.a,{title:e,action:a.props.onDelete&&r.a.createElement(F.a,{title:"Delete this location"},r.a.createElement(Y.a,{style:{padding:"0"},"aria-label":"settings",onClick:a.onDelete},r.a.createElement(de.a,{color:"secondary"})))}),r.a.createElement(I.a,null,t?r.a.createElement(N,{data:t}):r.a.createElement(M.a,null))))},a.state={data:null},a}return Object(h.a)(t,e),t}(n.Component),he=Object(u.i)(pe),fe=a(234),Ee=a(216),be=a(214),ge=a(215),ye=a(213);function ve(e){var t=e.show,a=e.city,n=e.onSubmit,c=e.onCancel;return r.a.createElement("div",null,r.a.createElement(fe.a,{open:t,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(ye.a,{id:"alert-dialog-title"},"Are you sure to delete this location ?"),r.a.createElement(be.a,null,r.a.createElement(ge.a,{id:"alert-dialog-description"},a)),r.a.createElement(Ee.a,null,r.a.createElement(ce.a,{onClick:c,color:"primary"},"Disagree"),r.a.createElement(ce.a,{onClick:n,color:"primary",autoFocus:!0},"Agree"))))}var Oe=a(54),we=a.n(Oe),je=a(217);function Ce(e){return r.a.createElement("div",{className:""},r.a.createElement(F.a,{title:"Add new location!"},r.a.createElement(je.a,{color:"primary",variant:"extended","aria-label":"add",onClick:function(){e.showModal()}},r.a.createElement(we.a,null)," NEW")))}var Se=a(238),xe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={showModal:!1,deleteItem:null},a.modalSubmit=function(){a.setState({showModal:!1}),a.props.deleteCity(a.state.deleteItem)},a.modalCancel=function(){console.log("cancelado"),a.setState({showModal:!1,deleteItem:!1})},a.setDeleteItem=function(e){a.setState({deleteItem:e,showModal:!0})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.cities,n=t.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{item:!0,xs:12,md:12,className:n.root},r.a.createElement(W.a,{className:n.paper},r.a.createElement(D.a,{container:!0,spacing:3},a.map(function(t,a){return r.a.createElement(he,{key:t+a,city:t,onDelete:a>0?function(){return e.setDeleteItem(a)}:null})})),r.a.createElement(Ce,{showModal:this.props.showModal}))),r.a.createElement(ve,{show:this.state.showModal,onSubmit:this.modalSubmit,onCancel:this.modalCancel,city:a[this.state.deleteItem]}))}}]),t}(n.Component),Ae=Object(Se.a)(function(e){return{root:{marginBottom:"150px"},paper:{padding:"1rem",textAlign:"center"}}})(xe),ke=a(231),Ne=a(218),De=a(219),Re=a(220),_e=a(221),Ie=Object(w.a)(function(e){return{root:{textAlign:"center"},spinner:{padding:"1rem",margin:"1rem"}}});function Te(e){var t=Ie();return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{open:e.open,"aria-labelledby":"form-dialog-title",className:t.root},r.a.createElement(ye.a,{id:"form-dialog-title"},"New location"),r.a.createElement(be.a,null,r.a.createElement(ke.a,{autoFocus:!0,defaultValue:e.findValue?e.findValue:"",placeholder:" ej. Buenos Aires",margin:"dense",id:"city",label:"find",type:"text",onChange:function(t){var a=t.target.value;if(a.trim().length<3)return null;setTimeout(function(){e.searchCity(a)},200)},fullWidth:!0}),e.isLoading&&r.a.createElement(M.a,{className:t.spinner}),e.searchResults&&r.a.createElement(Ne.a,{component:"nav","aria-label":"main mailbox folders"},e.searchResults.map(function(t,a){return r.a.createElement(De.a,{button:!0,onClick:function(){return function(t){e.addCity(e.searchResults[t]),e.hide()}(a)},key:t+a},r.a.createElement(Re.a,null,r.a.createElement(we.a,null)),r.a.createElement(_e.a,{primary:t}))}))),r.a.createElement(Ee.a,null,r.a.createElement(ce.a,{onClick:function(){e.findValue&&window.history.pushState("","","/weather"),e.hide()},color:"primary"},"Cancel"))))}var Le=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleSelectionLocation=function(e){a.props.addCity(e),a.props.showSnackbar("New location added, ".concat(e))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.cities.length<1&&this.props.setUserLocation();var e=new URLSearchParams(this.props.location.search).get("find");e&&(this.props.onShowModal(),this.props.searchCity(e))}},{key:"render",value:function(){var e=new URLSearchParams(this.props.location.search).get("find");return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,{cities:this.props.cities,showModal:this.props.onShowModal,deleteCity:this.props.onDeleteCity}),r.a.createElement(Te,{open:this.props.showModal,searchCity:this.props.searchCity,isLoading:this.props.isLoading,searchResults:this.props.searchResults,addCity:this.handleSelectionLocation,hide:this.props.onHideModal,findValue:e||null}))}}]),t}(n.Component);Le.propsType={setCity:se.a.func.isRequired};var Me=Object(o.b)(function(e){var t=e.cityReducer;return{cities:t.cities,isLoading:t.isLoading,searchResults:t.searchResults,showModal:t.showModal}},function(e){return{setUserLocation:function(){return e(function(e){fetch("https://ipapi.co/json/").then(function(e){return e.json()}).then(function(t){var a=[t.city,t.country_name].join(", ");e(ee(a)),e(ae("your current location, ".concat(a))),e(Z(a))})})},searchCity:function(t){return e(te(t))},onShowModal:function(){return e({type:"SHOW_SEARCH_MODAL"})},onHideModal:function(){return e({type:"HIDE_SEARCH_MODAL"})},addCity:function(t){return e(ee(t))},onDeleteCity:function(t){return e(function(e){return{type:"DELETE_CITY",payload:e}}(t))},showSnackbar:function(t){return e(ae(t))}}})(Object(u.i)(Le)),He=a(108),Ue=a(222),Fe=a(223),Be=Object(w.a)(function(e){return{root:{},Header:{height:"100px",display:"flex",justifyContent:"center"},large:{width:e.spacing(10),height:e.spacing(10)}}});function Pe(e){var t=e.user,a=t.displayName,n=(t.photoURL,t.email),c=t.phoneNumber,l=Be(),o=Object(u.g)(),i=r.a.useState(!1),s=Object(b.a)(i,2),m=s[0],d=s[1];return r.a.createElement("div",{className:l.root},r.a.createElement("div",{className:l.Header},r.a.createElement(Ue.a,{alt:"Remy Sharp",src:"https://cdn5.vectorstock.com/i/1000x1000/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg",className:l.large})),r.a.createElement(R.a,null,r.a.createElement(I.a,null,r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"User Name:"),r.a.createElement(B.a,{variant:"button",display:"block",gutterBottom:!0},a||"Add your user name"))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Email:"),r.a.createElement(B.a,{variant:"button",display:"block",gutterBottom:!0},n||"Add your email"))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Phone number:"),r.a.createElement(B.a,{variant:"button",display:"block",gutterBottom:!0},c||"Add your phone number")))),r.a.createElement(Fe.a,null,r.a.createElement(ce.a,{disabled:m,size:"small",onClick:function(){d(!0),setTimeout(function(){o.push("/user/profile/edit")},500)}},m?r.a.createElement(M.a,{size:"1rem"}):"Edit Profile"))))}var We=Object(w.a)(function(e){return{root:{marginBottom:"150px"},Header:{height:"100px",display:"flex",justifyContent:"center"},inputs:{margin:"2rem",paddin:"5px"},buttons:{display:"flex",justifyContent:"space-around"},large:{width:e.spacing(10),height:e.spacing(10)}}});function Ye(e){var t=e.user,a=t.displayName,c=t.photoURL,l=t.email,o=(t.phoneNumber,We()),i=Object(u.g)(),s=Object(n.useState)(!1),m=Object(b.a)(s,2),d=(m[0],m[1],Object(n.useState)(c)),p=Object(b.a)(d,2),h=p[0],f=(p[1],Object(n.useState)(l)),E=Object(b.a)(f,2),g=(E[0],E[1],Object(n.useState)(a)),y=Object(b.a)(g,2),v=y[0];y[1];return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.Header},r.a.createElement(Ue.a,{alt:"Remy Sharp",src:c||"https://cdn5.vectorstock.com/i/1000x1000/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg",className:o.large})),r.a.createElement(R.a,null,r.a.createElement(I.a,null,r.a.createElement("div",{className:o.inputs},r.a.createElement(ke.a,{id:"photo",defaultValue:h,label:"Photo Url",variant:"outlined"})),r.a.createElement("div",{className:o.inputs},r.a.createElement(ke.a,{id:"name",defaultValue:v,label:"User name",variant:"outlined"})),r.a.createElement("div",{className:o.inputs},r.a.createElement(ke.a,{id:"email",defaultValue:l,label:"Email",variant:"outlined"}))),r.a.createElement(Fe.a,{className:o.buttons},r.a.createElement(ce.a,{variant:"contained",size:"small",onClick:function(){i.goBack()}},"Cancel"),r.a.createElement(ce.a,{variant:"contained",color:"primary",size:"small",onClick:function(){alert("coming soon!!")}},"Save"))))}var Ve=a(17),ze=Object(w.a)(function(e){return{paper:{padding:"2rem",textAlign:"center",minHeight:"300px",marginBottom:"150px"},alert:{marginTop:"1rem",padding:"1rem",backgroundColor:"#fef6dd",color:"#968754",borderRadius:"3px"},form:{margin:"2rem 0"},btn:{margin:"1rem 0"},actions:{textAlign:"left"}}});function Ge(){var e=Object(u.g)(),t=ze(),a=Object(n.useState)({email:{value:""},password:{value:""}}),c=Object(b.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(!0),s=Object(b.a)(i,2),m=s[0],d=s[1],p=Object(n.useState)(!1),h=Object(b.a)(p,2),E=h[0],g=h[1],v=Object(n.useState)(null),O=Object(b.a)(v,2),w=O[0],j=O[1],C=function(e){var t=Object(Ve.a)({},l[e.target.name]);t.value=e.target.value,o(Object(Ve.a)({},l,Object(f.a)({},e.target.name,t))),console.log(l)};return r.a.createElement(D.a,{item:!0,xs:12,sm:6,md:6},r.a.createElement(W.a,{className:t.paper},r.a.createElement("div",{className:t.actions},r.a.createElement(Y.a,{onClick:function(){e.push("/weather")}},r.a.createElement(y.a,null))),r.a.createElement(B.a,{variant:"h4"},m?"Log In!":"Sign Up!"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),j(!1),g(!0),m?Q.auth().signInWithEmailAndPassword(l.email.value,l.password.value).then(function(t){return e.push("/")}).catch(function(e){return j(e.message)}):Q.auth().createUserWithEmailAndPassword(l.email.value,l.password.value).then(function(t){return e.push("/")}).catch(function(e){return j(e.message)})},className:t.form},r.a.createElement(ke.a,{autoFocus:!0,placeholder:"example@example.com",margin:"dense",id:"email",name:"email",label:"email",type:"email",onChange:C,fullWidth:!0,required:!0}),r.a.createElement(ke.a,{margin:"dense",id:"password",label:"password",type:"password",name:"password",onChange:C,fullWidth:!0}),r.a.createElement("div",{className:t.btn},r.a.createElement(ce.a,{disabled:E,color:"primary",onClick:function(){d(function(e){return!e})}},m?"Create an account ?":"Already have an account ?")),r.a.createElement(ce.a,{disabled:E,className:t.btn,type:"submit",variant:"contained",color:"primary"},E?r.a.createElement(M.a,null):m?"Log In!":"Sign Up!")),w&&r.a.createElement("div",{className:t.alert},w)))}function Ke(e){var t=e.isAuth,a=e.children,n=Object(He.a)(e,["isAuth","children"]);return r.a.createElement(u.b,Object.assign({},n,{render:function(e){var n=e.location;return t?a:r.a.createElement(u.a,{to:{pathname:"/user/login",state:{from:n}}})}}))}var qe=Object(o.b)(function(e){var t=e.userReducer;return{isAuth:null!==t.user,user:t.user}},null)(function(e){var t=e.isAuth,a=e.user;return r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/user",exact:!0},r.a.createElement(u.a,{to:"/user/profile"})),r.a.createElement(Ke,{isAuth:t,path:"/user/profile",exact:!0},r.a.createElement(Pe,{user:a})),r.a.createElement(Ke,{isAuth:t,path:"/user/profile/edit"},r.a.createElement(Ye,{user:a})),r.a.createElement(u.b,{path:"/user/login"},t?r.a.createElement(u.a,{to:"/weather"}):r.a.createElement(Ge,null)),r.a.createElement(u.b,{path:"*"},r.a.createElement("h1",null,"not found")))}),Je=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{path:"/weather",exact:!0},r.a.createElement(Me,null)))},Xe=function(){return r.a.createElement("h1",null,"not found")};var $e=Object(o.b)(null,function(e){return{setAuthState:function(t){e(function(e){return{type:"SET_AUTH_STATE",payload:e}}(t))}}})(function(e){var t=e.setAuthState;return r.a.useEffect(function(){Q.auth().onAuthStateChanged(function(e){t(e)})},[]),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(u.a,{to:"/weather"})),r.a.createElement(u.b,{path:"/weather"},r.a.createElement(Je,null)),r.a.createElement(u.b,{path:"/forecast"},r.a.createElement(ie,null)),r.a.createElement(u.b,{path:"/user"},r.a.createElement(qe,null)),r.a.createElement(u.b,{path:"*"},r.a.createElement(Xe,null)))}),Qe=a(229),Ze=a(224),et=a(225),tt=a(163),at=a(226),nt=Object(w.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}});var rt=Object(o.b)(function(e){return{isAuth:null!==e.userReducer.user}},null)(function(e){var t=e.isAuth,a=r.a.useState(null),n=Object(b.a)(a,2),c=n[0],l=n[1],o=function(){l(null)},u=nt();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ze.a,{position:"static"},r.a.createElement(et.a,null,r.a.createElement(B.a,{variant:"h6",className:u.title},"WeatherApp"),r.a.createElement(ce.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},variant:"contained",color:"primary"},"Menu"),r.a.createElement(tt.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:o},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(at.a,null,r.a.createElement(i.b,{to:"/user/profile"},"Profile")),r.a.createElement(at.a,{onClick:function(){Q.auth().signOut().then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),o()}},"Log Out")):r.a.createElement(at.a,null,r.a.createElement(i.b,{to:"/user/login"},"Log in"))))))}),ct=(a(160),a(233));var lt=Object(o.b)(function(e){var t=e.userReducer;return{show:t.snackbar.message,message:t.snackbar.message}},null)(function(e){var t=e.show,a=e.message;return r.a.createElement("div",null,r.a.createElement(ct.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:t,message:a}))}),ot=a(109),it=a(227),ut=a(228),st=a(110),mt=a.n(st),dt=Object(w.a)({root:{width:"100%",position:"fixed",bottom:0}});function pt(e){Object(ot.a)(e);var t=dt(),a=r.a.useState(0),n=Object(b.a)(a,2),c=n[0],l=n[1];return r.a.createElement(it.a,{value:c,onChange:function(e,t){l(t)},showLabels:!0,className:t.root},r.a.createElement(ut.a,{label:"Locations",icon:r.a.createElement(we.a,null)}),r.a.createElement(ut.a,{label:"Profile",icon:r.a.createElement(mt.a,null)}))}var ht=a(206),ft=a(111),Et=a.n(ft),bt=a(112),gt=a.n(bt),yt=a(113),vt=a.n(yt),Ot=Object(w.a)(function(e){return{root:{flexBasis:"300px",flexGrow:0,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}}),wt=Object(o.b)(function(e){return{cities:e.cityReducer.cities}},{})(function(e){var t=Ot(),a=Object(u.g)(),n=Object(u.h)();console.log(n);var c=r.a.useState(!0),l=Object(b.a)(c,2),o=l[0],i=l[1],s=r.a.useState(null),m=Object(b.a)(s,2),d=m[0],p=m[1];return r.a.createElement("div",{className:t.root},r.a.createElement(Ne.a,{component:"nav","aria-labelledby":"nested-list-subheader"},r.a.createElement(De.a,{button:!0,onClick:function(){i(!o)}},r.a.createElement(Re.a,null,r.a.createElement(Et.a,null)),r.a.createElement(_e.a,{primary:"Locations"}),o?r.a.createElement(gt.a,null):r.a.createElement(O.a,null)),r.a.createElement(ht.a,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(Ne.a,{component:"div",disablePadding:!0},e.cities.map(function(n,c){return r.a.createElement(De.a,{button:!0,className:t.nested,selected:d===c,onClick:function(){return function(t){var n="/forecast/".concat(e.cities[t]);p(t),a.push(n)}(c)}},r.a.createElement(Re.a,null,r.a.createElement(vt.a,null)),r.a.createElement(_e.a,{primary:n}))})))))}),jt=Object(w.a)(function(e){return{root:{},container:{marginTop:"80px"},layout:{minHeight:"90vh",display:"flex",height:"inherit"}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ct=a(45),St=a(114),xt={selectedCity:null,cities:[],searchResults:[],isLoading:!1,showModal:!1},At={user:null,isLoading:!1,snackbar:{show:!0,message:"test"}},kt=Object(Ct.c)({cityReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CITY!":return Object(Ve.a)({},e,{selectedCity:t.payload});case"ADD_CITY":var a=[].concat(Object(E.a)(e.cities),[t.payload]);return Object(Ve.a)({},e,{cities:a});case"SEARCH_CITY_START":return Object(Ve.a)({},e,{isLoading:!0});case"SEARCH_CITY_FAIL":return Object(Ve.a)({},e,{isLoading:!1});case"SEARCH_CITY_SUCCESS":return Object(Ve.a)({},e,{isLoading:!1,searchResults:t.payload});case"SHOW_SEARCH_MODAL":return Object(Ve.a)({},e,{showModal:!0,searchResults:[]});case"HIDE_SEARCH_MODAL":return Object(Ve.a)({},e,{showModal:!1,searchResults:[]});case"DELETE_CITY":return a=e.cities.filter(function(e,a){return a!==t.payload}),e.selectedCity===e.cities[t.payload]?Object(Ve.a)({},e,{cities:a,selectedCity:e.cities[0]}):0===e.cities.length?Object(Ve.a)({},e,{cities:a,selectedCity:null}):Object(Ve.a)({},e,{cities:a});default:return e}},extendedForecastReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FORECAST_DATA":var a=t.payload;return[a.city,a.forecastExtend];default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_STATE":return Object(Ve.a)({},e,{user:t.payload});case"SHOW_SNACKBAR":var a={show:!0,message:t.payload};return Object(Ve.a)({},e,{snackbar:a});case"HIDE_SNACKBAR":return a={show:!1,message:""},Object(Ve.a)({},e,{snackbar:a});default:return e}}}),Nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ct.d,Dt=Object(Ct.e)(kt,Nt(Object(Ct.a)(St.a)));l.a.render(r.a.createElement(o.a,{store:Dt},r.a.createElement(function(e){var t=jt();return r.a.createElement(i.a,{basename:"/wheatherApp"},r.a.createElement("div",{className:t.root},r.a.createElement(rt,null),r.a.createElement("div",{className:t.layout},r.a.createElement(wt,null),r.a.createElement(Qe.a,{className:t.container},r.a.createElement(D.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement($e,null),r.a.createElement(lt,null)))),r.a.createElement(pt,null)))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[127,2,1]]]);
//# sourceMappingURL=main.29447cec.chunk.js.map