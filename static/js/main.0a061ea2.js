(()=>{"use strict";var e={7584:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r="Home",i="Registration",o=n(7377),a=n(3535),l=n(885),d=n(6247),c=n(9526),s=n(9233),u=n(1133),f=n(3497),h=n(1451),x=n(4942);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g,y,m,b,j=n(4333).default.create({container:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,x.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({flex:1,backgroundColor:"#fff",paddingHorizontal:30},(g=40,y=20,{paddingTop:g,paddingRight:y||g,paddingBottom:m||g,paddingLeft:b||y||g})),header:{fontSize:28,fontWeight:"bold",marginBottom:30},input:{height:40,width:"100%",borderColor:"gray",borderWidth:1,borderRadius:5,marginVertical:10,paddingHorizontal:10,backgroundColor:"#fff"},button:{backgroundColor:"blue",borderRadius:5,paddingVertical:10,paddingHorizontal:20,marginVertical:10},buttonText:{color:"#fff",fontWeight:"bold",textAlign:"center"},signUpText:{marginTop:20,fontSize:16,textAlign:"center"},Link:{alignSelf:"center",marginBottom:30,color:"#007aff",fontWeight:"bold",fontSize:16},separator:{flexDirection:"row",alignItems:"center",marginVertical:20},separatorLine:{flex:1,height:1,backgroundColor:"gray"},separatorText:{marginHorizontal:10,fontSize:16,color:"gray"},socialButton:{backgroundColor:"#ccc",borderRadius:5,borderColor:"gray",borderWidth:1,paddingVertical:10,paddingHorizontal:20,marginVertical:10},socialButtonText:{textAlign:"center",color:"#000",fontSize:14},divider:{borderWidth:.5,borderColor:"#ccc",marginVertical:20},text:{textAlign:"center",marginBottom:10},link:{alignSelf:"center",marginBottom:30},linkText:{color:"#007aff",fontWeight:"bold",fontSize:16}});d.NativeWindStyleSheet.create({styles:{container:{width:"100%"},"container@0":{maxWidth:640},"container@1":{maxWidth:768},"container@2":{maxWidth:1024},"container@3":{maxWidth:1280},"container@4":{maxWidth:1536},flex:{display:"flex"}},atRules:{container:[[["media","(min-width: 640px)"]],[["media","(min-width: 768px)"]],[["media","(min-width: 1024px)"]],[["media","(min-width: 1280px)"]],[["media","(min-width: 1536px)"]]]},topics:{container:["width"]}});var w=n(2727),v=n(7570),O=n(5640),T=n(7557);function S(){var e=(0,c.useState)(""),t=(0,l.default)(e,2),n=t[0],r=t[1],o=(0,c.useState)(""),a=(0,l.default)(o,2),d=a[0],x=a[1],p=v.default.expoConfig.extra.appName;console.log("welcome to "+p);var g=(0,w.useNavigation)();c.useEffect((function(){g.setOptions({headerShown:!1})}),[]);return(0,T.jsxs)(O.SafeAreaView,{style:j.container,children:[(0,T.jsx)(s.default,{style:j.header,children:p}),(0,T.jsx)(f.default,{style:j.input,onChangeText:r,value:n,placeholder:"Email",placeholderTextColor:"gray",keyboardType:"email-address",autoCapitalize:"none"}),(0,T.jsx)(f.default,{style:j.input,onChangeText:x,value:d,placeholder:"Password",placeholderTextColor:"gray",secureTextEntry:!0}),(0,T.jsx)(h.default,{style:j.button,onPress:function(){},children:(0,T.jsx)(s.default,{style:j.buttonText,children:"Login"})}),(0,T.jsxs)(s.default,{style:j.signUpText,children:["Don\u2019t have an account?"," ",(0,T.jsx)(s.default,{style:j.Link,onPress:function(){return g.navigate(i)},children:"Sign up"})]}),(0,T.jsx)(h.default,{children:(0,T.jsx)(s.default,{style:j.Link,children:"Forgot password?"})}),(0,T.jsxs)(u.default,{style:j.separator,children:[(0,T.jsx)(u.default,{style:j.separatorLine}),(0,T.jsx)(s.default,{style:j.separatorText,children:"OR"}),(0,T.jsx)(u.default,{style:j.separatorLine})]}),(0,T.jsx)(h.default,{style:j.socialButton,children:(0,T.jsx)(s.default,{style:j.socialButtonText,children:"Continue with Facebook"})}),(0,T.jsx)(h.default,{style:j.socialButton,children:(0,T.jsx)(s.default,{style:j.socialButtonText,children:"Continue with Google"})}),(0,T.jsx)(h.default,{style:j.socialButton,children:(0,T.jsx)(s.default,{style:j.socialButtonText,children:"Continue with Apple ID"})})]})}d.NativeWindStyleSheet.create({styles:{container:{width:"100%"},"container@0":{maxWidth:640},"container@1":{maxWidth:768},"container@2":{maxWidth:1024},"container@3":{maxWidth:1280},"container@4":{maxWidth:1536}},atRules:{container:[[["media","(min-width: 640px)"]],[["media","(min-width: 768px)"]],[["media","(min-width: 1024px)"]],[["media","(min-width: 1280px)"]],[["media","(min-width: 1536px)"]]]},topics:{container:["width"]}});var C=n(477);function W(){var e=(0,w.useNavigation)();return c.useEffect((function(){e.setOptions({headerShown:!1})}),[]),(0,T.jsxs)(C.default,{style:j.container,children:[(0,T.jsx)(s.default,{style:j.header,children:"Create Account"}),(0,T.jsx)(f.default,{style:j.input,placeholder:"Full Name",placeholderTextColor:"gray"}),(0,T.jsx)(f.default,{style:j.input,placeholder:"Email Address",placeholderTextColor:"gray"}),(0,T.jsx)(f.default,{style:j.input,placeholder:"Password",placeholderTextColor:"gray",secureTextEntry:!0}),(0,T.jsx)(h.default,{style:j.button,children:(0,T.jsx)(s.default,{style:j.buttonText,children:"Create Account"})}),(0,T.jsx)(s.default,{style:j.text,children:"Already have an account?"}),(0,T.jsx)(h.default,{style:j.link,children:(0,T.jsx)(s.default,{style:j.linkText,onPress:function(){return e.navigate(r)},children:"Log in"})}),(0,T.jsx)(u.default,{style:j.divider}),(0,T.jsx)(h.default,{style:j.socialButton,children:(0,T.jsx)(s.default,{style:j.socialButtonText,children:"Continue with Google"})}),(0,T.jsx)(h.default,{style:j.socialButton,children:(0,T.jsx)(s.default,{style:j.socialButtonText,children:"Continue with Facebook"})}),(0,T.jsx)(h.default,{style:j.socialButton,children:(0,T.jsx)(s.default,{style:j.socialButtonText,children:"Continue with Apple ID"})})]})}d.NativeWindStyleSheet.create({styles:{container:{width:"100%"},"container@0":{maxWidth:640},"container@1":{maxWidth:768},"container@2":{maxWidth:1024},"container@3":{maxWidth:1280},"container@4":{maxWidth:1536}},atRules:{container:[[["media","(min-width: 640px)"]],[["media","(min-width: 768px)"]],[["media","(min-width: 1024px)"]],[["media","(min-width: 1280px)"]],[["media","(min-width: 1536px)"]]]},topics:{container:["width"]}});var k=(0,o.default)();const P=function(){return(0,T.jsx)(a.default,{children:(0,T.jsxs)(k.Navigator,{children:[(0,T.jsx)(k.Screen,{name:r,component:S}),(0,T.jsx)(k.Screen,{name:i,component:W})]})})}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,i,o)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,i,o]=e[s],l=!0,d=0;d<r.length;d++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](r[d])))?r.splice(d--,1):(l=!1,o<a&&(a=o));if(l){e.splice(s--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,i,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var i,o,[a,l,d]=r,c=0;if(a.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(d)var s=d(n)}for(t&&t(r);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[36],(()=>n(9386)));r=n.O(r)})();
//# sourceMappingURL=main.0a061ea2.js.map