(()=>{"use strict";var e={410:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var r="Home",i="Registration",a="ForgotPassword",o="ValidateCode",d=n(7377),l=n(3535),s=n(885),c=n(6247),u=n(9526),f=n(9233),h=n(1133),x=n(3497),p=n(1451),g=n(4942),m=n(4333);var y=n(2370);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,g.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w,v,S,C,W=m.default.create({container:b(b({flex:1,backgroundColor:"#fff",paddingHorizontal:30},(w=40,v=20,{paddingTop:w,paddingRight:v||w,paddingBottom:S||w,paddingLeft:C||v||w})),(0,y.minWidth)(500,{alignItems:"center"})),header:{fontSize:28,fontWeight:"bold",marginBottom:30},input:{height:40,width:"100%",borderColor:"gray",borderWidth:1,borderRadius:5,marginVertical:10,paddingHorizontal:10,backgroundColor:"#fff"},button:{backgroundColor:"blue",borderRadius:5,paddingVertical:10,paddingHorizontal:20,marginVertical:10},buttonText:{color:"#fff",fontWeight:"bold",textAlign:"center"},signUpText:{marginTop:20,fontSize:16,textAlign:"center"},Link:{alignSelf:"center",marginBottom:30,color:"#007aff",fontWeight:"bold",fontSize:16},separator:{flexDirection:"row",alignItems:"center",marginVertical:20},separatorLine:{flex:1,height:1,backgroundColor:"gray"},separatorText:{marginHorizontal:10,fontSize:16,color:"gray"},socialButton:{backgroundColor:"#ccc",borderRadius:5,borderColor:"gray",borderWidth:1,paddingVertical:10,paddingHorizontal:20,marginVertical:10},socialButtonText:{textAlign:"center",color:"#000",fontSize:14},divider:{borderWidth:.5,borderColor:"#ccc",marginVertical:20},text:{textAlign:"center",marginBottom:10},link:{alignSelf:"center",marginBottom:30},linkText:{color:"#007aff",fontWeight:"bold",fontSize:16},subheader:{fontSize:16,marginBottom:40},codeContainer:{flexDirection:"row",justifyContent:"space-between",width:300},codeInput:{height:50,width:50,borderWidth:1,borderRadius:5,textAlign:"center",fontSize:20,fontWeight:"bold"},errorText:{color:"red",fontSize:14,marginTop:10},disabledButton:{backgroundColor:"gray"}});c.NativeWindStyleSheet.create({styles:{container:{width:"100%"},"container@0":{maxWidth:640},"container@1":{maxWidth:768},"container@2":{maxWidth:1024},"container@3":{maxWidth:1280},"container@4":{maxWidth:1536},flex:{display:"flex"}},atRules:{container:[[["media","(min-width: 640px)"]],[["media","(min-width: 768px)"]],[["media","(min-width: 1024px)"]],[["media","(min-width: 1280px)"]],[["media","(min-width: 1536px)"]]]},topics:{container:["width"]}});var O=n(2727),P=n(2063),T=n(5640),k=n(6856),B=m.default.create({input:{flexDirection:"row",height:40,width:"100%",borderColor:"gray",borderWidth:1,borderRadius:5,marginVertical:10,paddingHorizontal:10,backgroundColor:"#fff",paddingLeft:0,paddingRight:0},password:{flex:1,paddingHorizontal:8},eye:{padding:6}});c.NativeWindStyleSheet.create({styles:{flex:{display:"flex"}}});var E=n(7557);function z(e){var t=e.onChangePassword,n=e.password,r=e.placeholder,i=(0,u.useState)(!0),a=(0,s.default)(i,2),o=a[0],d=a[1];return(0,E.jsxs)(h.default,{style:B.input,children:[(0,E.jsx)(x.default,{contextMenuHidden:!0,onChangeText:t,value:n,style:B.password,secureTextEntry:o,placeholder:null!=r?r:"Password",placeholderTextColor:"#aaa"}),(0,E.jsx)(p.default,{onPress:function(){d(!o)},style:B.eye,children:(0,E.jsx)(k.default,{name:o?"visibility-off":"visibility",size:24,color:"#666"})})]})}var I=n(1844),R=n(7783),A={apiKey:P.default.expoConfig.extra.apiKey,authDomain:P.default.expoConfig.extra.authDomain,projectId:P.default.expoConfig.extra.projectId,storageBucket:P.default.expoConfig.extra.storageBucket,messagingSenderId:P.default.expoConfig.extra.messagingSenderId,appId:P.default.expoConfig.extra.appId},L=(0,I.initializeApp)(A);const N=(0,R.getAuth)(L);var D=u.createContext(null),U=function(){return u.useContext(D)};function V(e){var t=e.children,n=u.useState(""),r=(0,s.default)(n,2),i=r[0],a=r[1],o=u.useState({code:null,message:""}),d=(0,s.default)(o,2),l=d[0],c=d[1];u.useEffect((function(){return(0,R.onAuthStateChanged)(N,(function(e){a(e?e.uid:"")}))}),[]);var f={currentUserId:i,resetUser:function(){a("")},signUp:function(e,t){(0,R.createUserWithEmailAndPassword)(N,e,t).then((function(e){})).catch((function(e){c({code:e.code,message:e.message})}))},error:l};return(0,E.jsx)(D.Provider,{value:f,children:t})}function _(){var e=P.default.expoConfig.extra.appName,t=U().resetUser;console.log("welcome to "+e);var n=(0,u.useState)(""),r=(0,s.default)(n,2),o=r[0],d=r[1],l=(0,u.useState)(""),c=(0,s.default)(l,2),g=c[0],m=c[1],y=(0,O.useNavigation)();u.useEffect((function(){y.setOptions({headerShown:!1})}),[]);return(0,E.jsxs)(T.SafeAreaView,{style:W.container,children:[(0,E.jsx)(f.default,{style:W.header,children:e}),(0,E.jsx)(x.default,{style:W.input,onChangeText:d,value:o,placeholder:"Email",placeholderTextColor:"gray",keyboardType:"email-address",autoCapitalize:"none"}),(0,E.jsx)(z,{onChangePassword:m,password:g}),(0,E.jsx)(p.default,{style:W.button,onPress:function(){},children:(0,E.jsx)(f.default,{style:W.buttonText,children:"Login"})}),(0,E.jsxs)(f.default,{style:W.signUpText,children:["Don\u2019t have an account?"," ",(0,E.jsx)(f.default,{style:W.Link,onPress:function(){t(),y.navigate(i)},children:"Sign up"})]}),(0,E.jsx)(p.default,{children:(0,E.jsx)(f.default,{style:W.Link,onPress:function(){return y.navigate(a)},children:"Forgot password?"})}),(0,E.jsxs)(h.default,{style:W.separator,children:[(0,E.jsx)(h.default,{style:W.separatorLine}),(0,E.jsx)(f.default,{style:W.separatorText,children:"OR"}),(0,E.jsx)(h.default,{style:W.separatorLine})]}),(0,E.jsx)(p.default,{style:W.socialButton,children:(0,E.jsx)(f.default,{style:W.socialButtonText,children:"Continue with Facebook"})}),(0,E.jsx)(p.default,{style:W.socialButton,children:(0,E.jsx)(f.default,{style:W.socialButtonText,children:"Continue with Google"})}),(0,E.jsx)(p.default,{style:W.socialButton,children:(0,E.jsx)(f.default,{style:W.socialButtonText,children:"Continue with Apple ID"})})]})}c.NativeWindStyleSheet.create({styles:{container:{width:"100%"},"container@0":{maxWidth:640},"container@1":{maxWidth:768},"container@2":{maxWidth:1024},"container@3":{maxWidth:1280},"container@4":{maxWidth:1536}},atRules:{container:[[["media","(min-width: 640px)"]],[["media","(min-width: 768px)"]],[["media","(min-width: 1024px)"]],[["media","(min-width: 1280px)"]],[["media","(min-width: 1536px)"]]]},topics:{container:["width"]}});var H=n(5861),F=n(477);function K(){var e=(0,u.useState)(""),t=(0,s.default)(e,2),n=t[0],i=t[1],a=(0,u.useState)(""),o=(0,s.default)(a,2),d=o[0],l=o[1],c=(0,u.useState)(""),g=(0,s.default)(c,2),m=g[0],y=g[1],j=U(),b=j.error,w=j.signUp,v=j.currentUserId,S=(j.resetUser,(0,u.useState)("")),C=(0,s.default)(S,2),P=C[0],T=C[1],k=(0,O.useNavigation)();function B(){return(B=(0,H.default)((function*(){w(m,n)}))).apply(this,arguments)}u.useEffect((function(){k.setOptions({headerShown:!1})}),[]),u.useEffect((function(){n!==d&&d.length>0?T("Passwords did not match"):n===d&&T(""),n.length<6&&n.length>0&&T("Password should be at least 6 characters")}),[n,d]),u.useEffect((function(){b.code&&T("Failed to create an account")}),[b]),u.useEffect((function(){console.log({currentUserId:v}),v.length>0&&k.navigate(r)}),[v]);var I=!m||!n||!d||P.length>0;return(0,E.jsxs)(F.default,{style:W.container,children:[(0,E.jsx)(f.default,{style:W.header,children:"Create Account"}),(0,E.jsx)(x.default,{style:W.input,placeholder:"Email address",placeholderTextColor:"gray",onChangeText:y}),(0,E.jsx)(z,{onChangePassword:i,password:n}),(0,E.jsx)(z,{onChangePassword:l,password:d,placeholder:"Confirm Password"}),P?(0,E.jsx)(f.default,{style:W.errorText,children:P}):null,(0,E.jsx)(p.default,{style:[W.button,I&&W.disabledButton],onPress:function(){return B.apply(this,arguments)},disabled:I,children:(0,E.jsx)(f.default,{style:W.buttonText,children:"Create Account"})}),(0,E.jsx)(f.default,{style:W.text,children:"Already have an account?"}),(0,E.jsx)(p.default,{style:W.link,children:(0,E.jsx)(f.default,{style:W.linkText,onPress:function(){return k.navigate(r)},children:"Log in"})}),(0,E.jsx)(h.default,{style:W.divider}),(0,E.jsx)(p.default,{style:W.socialButton,children:(0,E.jsx)(f.default,{style:W.socialButtonText,children:"Continue with Google"})}),(0,E.jsx)(p.default,{style:W.socialButton,children:(0,E.jsx)(f.default,{style:W.socialButtonText,children:"Continue with Facebook"})}),(0,E.jsx)(p.default,{style:W.socialButton,children:(0,E.jsx)(f.default,{style:W.socialButtonText,children:"Continue with Apple ID"})})]})}function M(){var e=(0,u.useState)(""),t=(0,s.default)(e,2),n=t[0],i=t[1],a=(0,O.useNavigation)();u.useEffect((function(){a.setOptions({headerShown:!1})}),[]);return(0,E.jsxs)(h.default,{style:W.container,children:[(0,E.jsx)(f.default,{style:W.header,children:"Forgot Password"}),(0,E.jsx)(f.default,{style:W.text,children:"Enter your email to reset your password."}),(0,E.jsx)(x.default,{style:W.input,placeholder:"Email",value:n,onChangeText:function(e){return i(e)}}),(0,E.jsx)(p.default,{style:W.button,onPress:function(){a.navigate(o)},children:(0,E.jsx)(f.default,{style:W.buttonText,children:"Send Code"})}),(0,E.jsx)(f.default,{style:W.text,children:"Remember password?"}),(0,E.jsx)(p.default,{style:W.link,children:(0,E.jsx)(f.default,{style:W.linkText,onPress:function(){return a.navigate(r)},children:"Log in"})})]})}c.NativeWindStyleSheet.create({styles:{container:{width:"100%"},"container@0":{maxWidth:640},"container@1":{maxWidth:768},"container@2":{maxWidth:1024},"container@3":{maxWidth:1280},"container@4":{maxWidth:1536}},atRules:{container:[[["media","(min-width: 640px)"]],[["media","(min-width: 768px)"]],[["media","(min-width: 1024px)"]],[["media","(min-width: 1280px)"]],[["media","(min-width: 1536px)"]]]},topics:{container:["width"]}}),c.NativeWindStyleSheet.create({styles:{container:{width:"100%"},"container@0":{maxWidth:640},"container@1":{maxWidth:768},"container@2":{maxWidth:1024},"container@3":{maxWidth:1280},"container@4":{maxWidth:1536}},atRules:{container:[[["media","(min-width: 640px)"]],[["media","(min-width: 768px)"]],[["media","(min-width: 1024px)"]],[["media","(min-width: 1280px)"]],[["media","(min-width: 1536px)"]]]},topics:{container:["width"]}});var G=n(2982);function q(){var e=(0,u.useState)(["","","",""]),t=(0,s.default)(e,2),n=t[0],r=t[1],a=(0,u.useRef)([]),o=(0,O.useNavigation)();u.useEffect((function(){o.setOptions({headerShown:!1})}),[]);var d=function(e,t){e.nativeEvent.key>="0"&&e.nativeEvent.key<="9"&&function(e,t){var i=(0,G.default)(n);i[t]=e,r(i),e&&t<n.length-1&&a.current[t+1].focus()}(e.nativeEvent.key,t)};return(0,E.jsxs)(h.default,{style:W.container,children:[(0,E.jsx)(f.default,{style:W.header,children:"Please check your email"}),(0,E.jsx)(f.default,{style:W.subheader,children:"We've sent a code to your email."}),(0,E.jsxs)(h.default,{style:W.codeContainer,children:[(0,E.jsx)(x.default,{style:W.codeInput,ref:function(e){return a.current[0]=e},maxLength:1,keyboardType:"numeric",onKeyPress:function(e){return d(e,0)},value:n[0]}),(0,E.jsx)(x.default,{style:W.codeInput,ref:function(e){return a.current[1]=e},maxLength:1,keyboardType:"numeric",value:n[1],onKeyPress:function(e){return d(e,1)}}),(0,E.jsx)(x.default,{style:W.codeInput,ref:function(e){return a.current[2]=e},maxLength:1,keyboardType:"numeric",value:n[2],onKeyPress:function(e){return d(e,2)}}),(0,E.jsx)(x.default,{style:W.codeInput,ref:function(e){return a.current[3]=e},maxLength:1,keyboardType:"numeric",value:n[3],onKeyPress:function(e){return d(e,3)}})]}),(0,E.jsx)(p.default,{style:W.button,onPress:function(){o.navigate(i)},children:(0,E.jsx)(f.default,{style:W.buttonText,children:"Validate Code"})})]})}c.NativeWindStyleSheet.create({styles:{container:{width:"100%"},"container@0":{maxWidth:640},"container@1":{maxWidth:768},"container@2":{maxWidth:1024},"container@3":{maxWidth:1280},"container@4":{maxWidth:1536}},atRules:{container:[[["media","(min-width: 640px)"]],[["media","(min-width: 768px)"]],[["media","(min-width: 1024px)"]],[["media","(min-width: 1280px)"]],[["media","(min-width: 1536px)"]]]},topics:{container:["width"]}});var J=(0,d.default)();const Q=function(){return(0,E.jsx)(V,{children:(0,E.jsx)(l.default,{children:(0,E.jsxs)(J.Navigator,{children:[(0,E.jsx)(J.Screen,{name:r,component:_}),(0,E.jsx)(J.Screen,{name:i,component:K}),(0,E.jsx)(J.Screen,{name:a,component:M}),(0,E.jsx)(J.Screen,{name:o,component:q})]})})})}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,i,a)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,i,a]=e[c],d=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(d=!1,a<o&&(o=a));if(d){e.splice(c--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var d=2&i&&r;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/firey-login/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var i,a,[o,d,l]=r,s=0;if(o.some((t=>0!==e[t]))){for(i in d)n.o(d,i)&&(n.m[i]=d[i]);if(l)var c=l(n)}for(t&&t(r);s<o.length;s++)a=o[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[804],(()=>n(9386)));r=n.O(r)})();
//# sourceMappingURL=main.463c2771.js.map