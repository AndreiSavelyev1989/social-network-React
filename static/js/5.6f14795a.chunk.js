(this.webpackJsonpreact_social_network=this.webpackJsonpreact_social_network||[]).push([[5],{291:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2BC_N",dialogsItems:"Dialogs_dialogsItems__3xI5q",active:"Dialogs_active__32jxH",messages:"Dialogs_messages__2LCcp"}},292:function(e,a,t){e.exports={dialog:"DialogItem_dialog__3dKVH"}},293:function(e,a,t){e.exports={message:"Message_message__17XjD"}},303:function(e,a,t){"use strict";t.r(a);var s=t(125),n=t(0),i=t.n(n),l=t(291),o=t.n(l),c=t(292),r=t.n(c),m=t(16),g=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:"".concat(r.a.dialog," ").concat(r.a.active)},i.a.createElement("img",{src:"http://aniavatars.com/data/avatars/38/967.jpg",alt:"avatar"}),i.a.createElement(m.b,{to:a},e.name))},d=t(293),u=t.n(d),_=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:u.a.message},e.message))},E=t(85),v=t(126),f=t(26),b=t(62),p=Object(b.a)(10),h=Object(v.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(E.a,{component:f.b,name:"messageBody",placeholder:"Enter your message",validate:[b.b,p]})),i.a.createElement("div",null,i.a.createElement("button",null,"Send Message")))})),j=function(e){console.log("hey hey hey");var a=e.dialogs.map((function(e){return i.a.createElement(g,{name:e.name,id:e.id,key:e.id})})),t=e.messages.map((function(e){return i.a.createElement(_,{message:e.message,key:e.id})}));return i.a.createElement("div",{className:o.a.dialogs},i.a.createElement("div",{className:o.a.dialogsItems},a),i.a.createElement("div",{className:o.a.messages},i.a.createElement("div",null,t)),i.a.createElement(h,{onSubmit:function(a){e.sendMessage(a.messageBody)}}))},y=t(19),k=t(29),D=function(e){return{isAuth:e.auth.isAuth}},N=t(7);a.default=Object(N.d)(Object(y.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),{sendMessage:s.b}),(function(e){return Object(y.b)(D)((function(a){return a.isAuth?i.a.createElement(e,a):i.a.createElement(k.a,{to:"/login"})}))}))(j)}}]);
//# sourceMappingURL=5.6f14795a.chunk.js.map