(this.webpackJsonpmccreations=this.webpackJsonpmccreations||[]).push([[0],{54:function(e,t,a){e.exports=a(88)},61:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),s=a(22),c=a(37);a(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(9),u=a(11),m=r.a.createContext(null),p=function(e){return function(t){return r.a.createElement(m.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},d=m,h=a(4),v=a(26),f=a.n(v),b=(a(62),a(64),{apiKey:"AIzaSyAnWtiYs11GQqRRNYi0Z0FGoUo57lKjT4Y",authDomain:"mccreations-c3cb8.firebaseapp.com",databaseURL:"https://mccreations-c3cb8.firebaseio.com",projectId:"mccreations-c3cb8",storageBucket:"mccreations-c3cb8.appspot.com",messagingSenderId:"92325017566",appId:"1:92325017566:web:949acc99082d5c969c4f4f",measurementId:"G-0MSTKN2G62"}),g=function e(){var t=this;Object(h.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.maps=function(){return t.db.ref("maps")},this.datapacks=function(){return t.db.ref("datapacks")},this.resourcepacks=function(){return t.db.ref("resourcepacks")},this.getMapFromName=function(e){return t.db.ref("map").orderByChild("title").equalTo("".concat(e))},f.a.initializeApp(b),this.auth=f.a.auth(),this.db=f.a.database()},E=p((function(e){var t=e.firebase;return r.a.createElement("a",{href:"/",className:"nav-link",onClick:t.doSignOut},"Sign Out")})),k=r.a.createContext(null),N=a(5),w=a(7),y=a(6),O=function(e){var t=function(t){Object(w.a)(n,t);var a=Object(y.a)(n);function n(e){var t;return Object(h.a)(this,n),(t=a.call(this,e)).state={authUser:null},t}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(k.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return p(t)},C=a(19),S=function(e){return function(t){var a=function(a){Object(w.a)(o,a);var n=Object(y.a)(o);function o(){return Object(h.a)(this,o),n.apply(this,arguments)}return Object(N.a)(o,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(a){e(a)||t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(k.Consumer,null,(function(n){return e(n)?r.a.createElement(t,a.props):null}))}}]),o}(r.a.Component);return Object(C.a)(u.e,p)(a)}},j=function(e){return function(t){var a=function(a){Object(w.a)(o,a);var n=Object(y.a)(o);function o(){return Object(h.a)(this,o),n.apply(this,arguments)}return Object(N.a)(o,[{key:"componentDidMount",value:function(){this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){e(t)}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(k.Consumer,null,(function(n){return e(n)?r.a.createElement(t,a.props):null}))}}]),o}(r.a.Component);return Object(C.a)(u.e,p)(a)}},D=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-5"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"MCCreations"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link active",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link active",to:"/maps"},"Maps")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link active",to:"/datapacks"},"Datapacks")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link active",to:"/resourcepacks"},"Resoucepacks")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link active",to:"/submit"},"Submit")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Account"),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement(i.b,{className:"nav-link",to:"/account"},"Settings"),r.a.createElement(E,null))))))},x=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-5"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"MCCreations"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link active",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link active",to:"/maps"},"Maps")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link active",to:"/datapacks"},"Datapacks")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link active",to:"/resourcepacks"},"Resoucepacks")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link active",to:"/submit"},"Submit")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link active",to:"/signin"},"Sign In")))))},T=function(){return r.a.createElement("div",null,r.a.createElement(k.Consumer,null,(function(e){return e?r.a.createElement(D,null):r.a.createElement(x,null)})))},U=a(16),P=a(8),I=a(31),M=a.n(I),H={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},W=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then((function(e){n.props.firebase.user(e.user.uid).set({username:a,email:r,roles:"user"}).then((function(){n.setState(Object(P.a)({},H)),n.props.history.push("/")})).catch((function(e){n.setState({error:e})}))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(U.a)({},e.target.name,e.target.value))},n.state=Object(P.a)({},H),n}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,o=e.passwordTwo,l=e.error,s=n!==o||""===n||""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},"Username",r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",className:"form-control"})),r.a.createElement("div",{className:"form-group"},"Email",r.a.createElement("input",{name:"email",value:a,onChange:this.onChange,type:"text",className:"form-control"})),r.a.createElement("div",{className:"form-group"},"Password",r.a.createElement("input",{name:"passwordOne",value:n,onChange:this.onChange,type:"password",className:"form-control"})),r.a.createElement("div",{className:"form-group"},"Confirm Password",r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",className:"form-control"})),r.a.createElement("button",{disabled:s,type:"submit"},"Sign Up"),l&&r.a.createElement("p",null,l.message))}}]),a}(n.Component),L=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(i.b,{to:"/signup"},"Sign Up"))},A=Object(u.e)(p(W)),q=function(){return r.a.createElement("div",{className:"container m-auto",style:{width:500}},r.a.createElement("h1",null,"SignUp"),r.a.createElement(A,null))},F={email:"",error:null},R=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(P.a)({},F))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(U.a)({},e.target.name,e.target.value))},n.state=Object(P.a)({},F),n}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),a}(n.Component),V=function(){return r.a.createElement("p",null,r.a.createElement(i.b,{to:"/pw-forget"},"Forgot Password?"))},B=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(z,null))},z=p(R),G={email:"",password:"",error:null},K=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(P.a)({},G)),n.props.history.push("/")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(U.a)({},e.target.name,e.target.value))},n.state=Object(P.a)({},G),n}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),n&&r.a.createElement("p",null,n.message))}}]),a}(n.Component),Y=Object(C.a)(u.e,p)(K),J=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(Y,null),r.a.createElement(V,null),r.a.createElement(L,null))},Q=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello!"),r.a.createElement("p",null,"The Home Page isn't quite done yet but feel free to browse or submit content by using the menu above!"))},Z={passwordOne:"",passwordTwo:"",error:null},$=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(P.a)({},Z))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(U.a)({},e.target.name,e.target.value))},n.state=Object(P.a)({},Z),n}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,o=t!==a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),a}(n.Component),X=p($),_=S((function(e){return!!e}))((function(){return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(z,null),r.a.createElement(X,null))}))})),ee=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={loading:!1,users:[]},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",(function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(P.a)(Object(P.a)({},a[e]),{},{uid:e})}));e.setState({users:n,loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),a&&r.a.createElement("div",null,"Loading ..."),r.a.createElement(te,{users:t}))}}]),a}(n.Component),te=function(e){var t=e.users;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username))})))},ae=p(ee),ne=a(93),re=function(e){return r.a.createElement("div",{className:"mapHoverOverlay"},r.a.createElement("div",{className:"d-inline-block mr-5 w-50"},r.a.createElement("h5",{className:"font-weight-bold"},"Version"),r.a.createElement("p",null,e.map.version)),r.a.createElement("div",{className:"d-inline-block"},r.a.createElement("h5",{className:"font-weight-bold"},"Votes"),r.a.createElement("p",null,e.map.votes)),r.a.createElement("h5",{className:"font-weight-bold"},"Created By"),r.a.createElement("p",null,e.map.creator),r.a.createElement("p",{className:"updatedText"},r.a.createElement("small",{className:"text-muted"},"Last updated ",Object(ne.a)(new Date(e.map.updatedDate),new Date)," ago")))},oe=function(e){return r.a.createElement("div",{class:"cardBody"},r.a.createElement("div",{className:"d-inline-block"},r.a.createElement("h5",null,e.map.title)),r.a.createElement(i.b,{to:"../map/"+e.map.title,className:"btn btn-primary cardDownload float-right d-inline-block stretched-link"},"Download"),r.a.createElement("p",null,e.map.shortDescription))},le=function(e){return r.a.createElement("div",{className:"mapCard mx-2 my-2"},r.a.createElement("div",{className:"imagePart"},r.a.createElement("img",{src:"../"+e.map.logo,alt:e.map.title,className:"cardImg"}),r.a.createElement(re,{map:e.map})),r.a.createElement(oe,{map:e.map}))},se=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={loading:!1,maps:[]},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.maps().on("value",(function(t){var a=t.val();if(null!=a){var n=Object.keys(a).map((function(e){return Object(P.a)(Object(P.a)({},a[e]),{},{uid:e})})),r=[];for(var o in n)n.hasOwnProperty(o)&&n[o].approved&&r.push(n[o]);r.sort((function(e,t){return t.updatedDate-e.updatedDate})),e.setState({maps:r,loading:!1})}}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.maps().off()}},{key:"render",value:function(){var e=this.state,t=e.maps,a=e.loading;return r.a.createElement("div",{className:"mx-5"},r.a.createElement("h1",null,"Maps"),a&&r.a.createElement("div",null,"If you see this message for more than a couple of seconds something has gone wrong! Let us know so that we can fix it."),r.a.createElement(ce,{maps:t}))}}]),a}(n.Component),ce=function(e){var t=e.maps;return r.a.createElement("div",{className:"card-deck"},t.map((function(e){return r.a.createElement(le,{map:e})})))},ie=p(se),ue=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={loading:!1,packs:[]},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.datapacks().on("value",(function(t){var a=t.val();if(null!=a){var n=Object.keys(a).map((function(e){return Object(P.a)(Object(P.a)({},a[e]),{},{uid:e})})),r=[];for(var o in n)n.hasOwnProperty(o)&&n[0].approved&&r.push(n[0]);e.setState({packs:r,loading:!1})}}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.datapacks().off()}},{key:"render",value:function(){var e=this.state,t=e.packs,a=e.loading;return r.a.createElement("div",{className:"mx-5"},r.a.createElement("h1",null,"Datapacks"),a&&r.a.createElement("div",null,"If you see this message for more than a couple of seconds something has gone wrong! Let us know so that we can fix it."),r.a.createElement(me,{packs:t}))}}]),a}(n.Component),me=function(e){var t=e.packs;return r.a.createElement("div",{className:"card-deck"},t.map((function(e){return r.a.createElement(le,{map:e})})))},pe=p(ue),de=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={loading:!1,packs:[]},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.resourcepacks().on("value",(function(t){var a=t.val();if(null!=a){var n=Object.keys(a).map((function(e){return Object(P.a)(Object(P.a)({},a[e]),{},{uid:e})})),r=[];for(var o in n)n.hasOwnProperty(o)&&n[0].approved&&r.push(n[0]);e.setState({packs:r,loading:!1})}}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.resourcepacks().off()}},{key:"render",value:function(){var e=this.state,t=e.packs,a=e.loading;return r.a.createElement("div",{className:"mx-5"},r.a.createElement("h1",null,"Resourepacks"),a&&r.a.createElement("div",null,"If you see this message for more than a couple of seconds something has gone wrong! Let us know so that we can fix it."),r.a.createElement(he,{packs:t}))}}]),a}(n.Component),he=function(e){var t=e.packs;return r.a.createElement("div",{className:"card-deck"},t.map((function(e){return r.a.createElement(le,{map:e})})))},ve=p(de),fe=a(94),be=a(17),ge=(a(87),a(53)),Ee=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).checkMimeType=function(e){for(var t=e.target.files,a=[],n=["image/png","image/jpeg","image/gif"],r=0;r<t.length;r++)n.every((function(e){return t[r].type!==e}))&&(a[r]=t[r].type+" is not a supported format\n");for(var o=0;o<a.length;o++)be.b.error(a[o]),e.target.value=null;return!0},n.maxSelectFile=function(e){if(e.target.files.length>3){return e.target.value=null,be.b.warn("Only 3 images can be uploaded at a time"),!1}return!0},n.checkFileSize=function(e){for(var t=e.target.files,a=[],n=0;n<t.length;n++)t[n].size>2e6&&(a[n]=t[n].type+"is too large, please pick a smaller file\n");for(var r=0;r<a.length;r++)be.b.error(a[r]),e.target.value=null;return!0},n.onIChangeHandler=function(e){var t=e.target.files;n.maxSelectFile(e)&&n.checkMimeType(e)&&n.checkFileSize(e)&&n.setState({selectedImages:t,loaded:0})},n.onDescriptionChangeHandler=function(e,t){n.setState({description:e})},n.onSubmitChangeHandler=function(e){"content-type"===e.target.id?n.setState({contentType:e.target.value}):"title"===e.target.id?n.setState({title:e.target.value}):"creator"===e.target.id?n.setState({creator:e.target.value}):"social"===e.target.id?n.setState({social:e.target.value}):"short-description"===e.target.id?n.setState({shortDescription:e.target.value}):"desc"===e.target.id?n.setState({description:e.target.value}):"download"===e.target.id?n.setState({download:e.target.value}):"rp"===e.target.id?n.setState({resourcepack:e.target.value}):"version"===e.target.id?n.setState({version:e.target.value}):"content-version"===e.target.id&&n.setState({contentVersion:e.target.value})},n.onLChangeHandler=function(e){var t=e.target.files[0];n.maxSelectFile(e)&&n.checkMimeType(e)&&n.checkFileSize(e)&&n.setState({selectedLogo:t,loaded:0})},n.onClickHandler=function(e,t){e.preventDefault();var a=new FormData;a.append("file",n.state.selectedLogo);for(var r=0;r<n.state.selectedImages.length;r++)a.append("file",n.state.selectedImages[r]);M.a.post("https://php.mccreations.net:8000/upload",a,{onUploadProgress:function(e){n.setState({loaded:e.loaded/e.total*100})}}).then((function(e){be.b.success("Images Uploaded Successfully");for(var t=n.state,a=t.contentType,r=t.title,o=t.creator,l=t.social,s=t.shortDescription,c=t.description,i=t.download,u=t.resourcepack,m=t.version,p=t.contentVersion,d=t.images,h=t.logo,v=t.selectedImages,f=t.selectedLogo,b=t.owner,g=0;g<n.state.selectedImages.length;g++)d=d+"|maps/images/"+v[g].name;if(h="maps/images/"+f.name,"map"===a)n.props.firebase.db.ref("maps").push({contentType:a,title:r,creator:o,social:l,shortDescription:s,description:c,download:i,resourcepack:u,version:m,contentVersion:p,images:d,logo:h,approved:!1,featured:!1,downloads:0,clicks:0,votes:0,owner:b,createdDate:Date.now(),updatedDate:Date.now()}).then((function(){be.b.success("Map Submitted Successfully")}));else if("datapack"===a){n.props.firebase.db.ref("datapacks").push({contentType:a,title:r,creator:o,social:l,shortDescription:s,description:c,download:i,resourcepack:u,version:m,contentVersion:p,images:d,logo:h,approved:!1,featured:!1,downloads:0,clicks:0,votes:0,owner:b,createdDate:Date.now(),updatedDate:Date.now()}).then((function(){be.b.success("Datapack Submitted Successfully")}))}else{n.props.firebase.db.ref("resourcepacks").push({contentType:a,title:r,creator:o,social:l,shortDescription:s,description:c,download:i,resourcepack:u,version:m,contentVersion:p,images:d,logo:h,approved:!1,featured:!1,downloads:0,clicks:0,votes:0,owner:b,createdDate:Date.now(),updatedDate:Date.now()}).then((function(){be.b.success("Resourcepack Submitted Successfully")}))}})).catch((function(e){be.b.error("Image Upload Failed"),console.log(e)}))},n.state={contentType:"",title:"",creator:"",social:"",shortDescription:"",description:"",download:"",resourcepack:"",version:"",contentVersion:"",images:"",logo:"",selectedImages:null,selectedLogo:null,loaded:0,owner:n.props.owner},n}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Content Type")),r.a.createElement("select",{name:"content",required:"",className:"custom-select",id:"content-type",onChange:this.onSubmitChangeHandler},r.a.createElement("option",{value:""},"Choose Type "),r.a.createElement("option",{value:"map"},"Map"),r.a.createElement("option",{value:"datapack"},"Datapack"),r.a.createElement("option",{value:"resourcepack"},"Resourcepack"))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Title")),r.a.createElement("input",{type:"text",required:"",className:"form-control",id:"title",name:"title",onChange:this.onSubmitChangeHandler})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",required:"",className:"form-control",id:"creator",placeholder:"Creator",onChange:this.onSubmitChangeHandler}),r.a.createElement("input",{type:"text",className:"form-control",id:"social",placeholder:"Social Link",onChange:this.onSubmitChangeHandler})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Upload Logo")),r.a.createElement("input",{type:"file",className:"form-control",onChange:this.onLChangeHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{maxLength:"20000",placeholder:"Short description (Will display on stuff like the homepage)",id:"short-description",className:"form-control",rows:"3",onChange:this.onSubmitChangeHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement(ge.a,{onEditorChange:this.onDescriptionChangeHandler,init:{height:300}})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Upload Images")),r.a.createElement("input",{type:"file",className:"form-control",multiple:!0,onChange:this.onIChangeHandler})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Download Link")),r.a.createElement("input",{type:"text",required:"",className:"form-control",id:"download",name:"download",onChange:this.onSubmitChangeHandler})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Resourcepack Link")),r.a.createElement("input",{type:"text",className:"form-control",id:"rp",name:"rp",onChange:this.onSubmitChangeHandler})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",required:"",className:"form-control",id:"version",placeholder:"Minecraft Version",onChange:this.onSubmitChangeHandler}),r.a.createElement("input",{type:"text",required:"",className:"form-control",id:"content-version",placeholder:"Content Version(usually 1.0)",onChange:this.onSubmitChangeHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement(be.a,null),r.a.createElement(fe.a,{max:"100",color:"success",value:this.state.loaded},Math.round(this.state.loaded,2),"%")),r.a.createElement("button",{type:"button",className:"btn btn-success btn-block",onClick:this.onClickHandler},"Submit"))}}]),a}(n.Component),ke=p(Ee),Ne=function(e){return function(t){var a=function(a){Object(w.a)(o,a);var n=Object(y.a)(o);function o(){return Object(h.a)(this,o),n.apply(this,arguments)}return Object(N.a)(o,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(a){e(a)||t.props.history.push("/anysubmit")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(k.Consumer,null,(function(n){return e(n)?r.a.createElement(t,a.props):null}))}}]),o}(r.a.Component);return Object(C.a)(u.e,p)(a)}}((function(e){return!!e}))((function(){return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement(ke,{owner:e.uid}))}))})),we=function(){return r.a.createElement("div",null,r.a.createElement(ke,{owner:"1"}))},ye=a(36),Oe=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).upDownVoteClickHandler=function(e){e.preventDefault();var t=n.state.map,a=t[0].uid;"up"===e.target.id?n.props.firebase.db.ref("maps/"+a).update({votes:t[0].votes+1}):"down"===e.target.id&&n.props.firebase.db.ref("maps/"+a).update({votes:t[0].votes-1})},n.state={map:[],user:null},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.maps().orderByChild("title").equalTo(this.props.mapName).on("value",(function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(P.a)(Object(P.a)({},a[e]),{},{uid:e})}));e.setState({map:n,loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.maps().orderByChild("title").equalTo(this.props.mapName).off()}},{key:"render",value:function(){var e=this,t=this.state.map;return r.a.createElement("div",{className:"w-100"},t.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"btn p-0",onClick:e.upDownVoteClickHandler,id:"down"},r.a.createElement(ye.a,{icon:"caret-square-down",className:"d-inline-block mx-3 vote"})),r.a.createElement("p",{className:"d-inline-block voteT"},t.votes),r.a.createElement("a",{className:"btn p-0",onClick:e.upDownVoteClickHandler,id:"up"},r.a.createElement("div",{id:"up"},r.a.createElement(ye.a,{icon:"caret-square-up",className:"d-inline-block mx-3 vote",id:"up"}))))})))}}]),a}(r.a.Component),Ce=j((function(e){return!!e}))(p(Oe)),Se=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={loading:!1,map:[]},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.maps().orderByChild("title").equalTo(this.props.mapName).on("value",(function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(P.a)(Object(P.a)({},a[e]),{},{uid:e})}));e.setState({map:n,loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.maps().orderByChild("title").equalTo(this.props.mapName).off()}},{key:"render",value:function(){var e=this.state,t=e.map,a=e.loading;return r.a.createElement("div",{className:"container mx-auto text-center border border-primary rounded pb-3"},a&&r.a.createElement("div",null,"Loading ..."),t.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"mt-4 font-weight-bold"},e.title),r.a.createElement("img",{className:"w-100 my-2",src:"../"+e.logo}),r.a.createElement("div",{className:"w-100 border border-primary rounded"},r.a.createElement("p",{className:"d-inline-block w-25"},"ProfileImage"),r.a.createElement("div",{className:"d-inline-block w-75 text-left"},r.a.createElement("h4",{className:"mt-2"},e.creator),r.a.createElement("a",{href:e.social},"Website"))),r.a.createElement("div",{className:"d-inline-block w-75 py-3 pr-4"},r.a.createElement("div",{className:"border border-primary rounded p-2"},e.description)),r.a.createElement("div",{className:"d-inline-block w-25 py-3 float-right"},r.a.createElement("div",{className:"border border-primary rounded p-2"},r.a.createElement("a",{className:"btn btn-primary w-100 mb-2 detDL",href:e.download},"Download"),r.a.createElement(Ce,{mapName:e.title}),r.a.createElement("p",null,"Minecraft Version: ",e.version),r.a.createElement("p",null,"Downloads: ",e.downloads))),r.a.createElement("div",{className:"carousel slide",id:"mapSlide","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner"},r.a.createElement(je,{images:e.images})),r.a.createElement("a",{className:"carousel-control-prev",href:"#mapSlide",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#mapSlide",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))))})))}}]),a}(n.Component),je=function(e){var t=e.images.split("|");return t.shift(),r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return 0==t?r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{src:"../"+e,className:"d-block w-100",alt:"..."})):r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{src:"../"+e,className:"d-block w-100",alt:"..."}))})))},De=p(Se),xe=function(e){var t=e.match,a=(e.location,t.params.mapName);return r.a.createElement(De,{mapName:a})},Te=O((function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(u.a,{exact:!0,path:"/signup",component:q}),r.a.createElement(u.a,{exact:!0,path:"/signin",component:J}),r.a.createElement(u.a,{exact:!0,path:"/pw-forget",component:B}),r.a.createElement(u.a,{exact:!0,path:"/",component:Q}),r.a.createElement(u.a,{exact:!0,path:"/account",component:_}),r.a.createElement(u.a,{exact:!0,path:"/admin",component:ae}),r.a.createElement(u.a,{exact:!0,path:"/maps",component:ie}),r.a.createElement(u.a,{exact:!0,path:"/datapacks",component:pe}),r.a.createElement(u.a,{exact:!0,path:"/resourcepacks",component:ve}),r.a.createElement(u.a,{exact:!0,path:"/submit",component:Ne}),r.a.createElement(u.a,{path:"/map/:mapName",component:xe}),r.a.createElement(u.a,{exact:!0,path:"/anysubmit",component:we})))}));s.b.add(c.a,c.b),l.a.render(r.a.createElement(d.Provider,{value:new g},r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.03a34031.chunk.js.map