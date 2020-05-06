/*! For license information please see 4.467c0b7e.chunk.js.LICENSE.txt */
(this.webpackJsonpreact_social_network=this.webpackJsonpreact_social_network||[]).push([[4],{290:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},298:function(e,t,n){e.exports={pagination:"Pagination_pagination__3j6Eb",pageNumber:"Pagination_pageNumber__2uuCt",selectedPage:"Pagination_selectedPage__NYH7I"}},299:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var l=o.apply(null,r);l&&e.push(l)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},300:function(e,t,n){e.exports={userPhoto:"User_userPhoto__2H4ku"}},301:function(e,t,n){e.exports=n.p+"static/media/user.9c5cb55e.png"},304:function(e,t,n){"use strict";n.r(t);var r=n(47),o=n(48),a=n(59),l=n(49),u=n(60),i=n(0),s=n.n(i),c=n(19),g=n(128),f=n(70),p=n(96),m=n(290),d=n(298),h=n.n(d),P=n(299),v=n.n(P),w=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,o=e.onPageChanged,a=e.portionSize,l=void 0===a?10:a,u=Math.ceil(t/n),c=[],g=1;g<=u;g++)c.push(g);var f=Math.ceil(u/l),d=Object(i.useState)(1),P=Object(m.a)(d,2),w=P[0],b=P[1],E=(w-1)*l+1,y=w*l;return s.a.createElement("div",{className:h.a.pagination},w>1&&s.a.createElement("button",{onClick:function(){b(w-1)}},"PREV"),c.filter((function(e){return e>=E&&e<=y})).map((function(e){return s.a.createElement("span",{className:v()(Object(p.a)({},h.a.selectedPage,r===e),h.a.pageNumber),key:e,onClick:function(){o(e)}},e)})),f>w&&s.a.createElement("button",{onClick:function(){b(w+1)}},"NEXT"))},b=n(300),E=n.n(b),y=n(301),C=n.n(y),j=n(16),I=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;Object(f.a)(e,["user","followingInProgress","unfollow","follow"]);return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(j.b,{to:"/profile/"+t.id},s.a.createElement("img",{src:null!=t.photos.small?t.photos.small:C.a,className:E.a.userPhoto}))),s.a.createElement("div",null,t.followed?s.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"UnFollow"):s.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow")),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",null,t.name),s.a.createElement("div",null,t.status)),s.a.createElement("div",null,s.a.createElement("div",null,"user.location.country"),s.a.createElement("div",null,"user.location.city"))))},S=function(e){var t=e.currentPage,n=e.totalItemsCount,r=e.pageSize,o=e.onPageChanged,a=e.users,l=Object(f.a)(e,["currentPage","totalItemsCount","pageSize","onPageChanged","users"]);return s.a.createElement("div",null,s.a.createElement(w,{currentPage:t,totalItemsCount:n,pageSize:r,onPageChanged:o}),s.a.createElement("div",null,a.map((function(e){return s.a.createElement(I,{key:e.id,user:e,followingInProgress:l.followingInProgress,unfollow:l.unfollow,follow:l.follow})}))))},_=n(58),O=n(7),k=function(e){return e.usersPage.users},z=function(e){return e.usersPage.pageSize},N=function(e){return e.usersPage.totalItemsCount},x=function(e){return e.usersPage.currentPage},F=function(e){return e.usersPage.isFetching},A=function(e){return e.usersPage.followingInProgress},U=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return(n=Object(a.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(u)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.isFetching?s.a.createElement(_.a,null):null,s.a.createElement(S,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(s.a.Component);t.default=Object(O.d)(Object(c.b)((function(e){return{users:k(e),pageSize:z(e),totalItemsCount:N(e),currentPage:x(e),isFetching:F(e),followingInProgress:A(e)}}),{followSuccess:g.c,unfollowSuccess:g.g,toggleFollowingProgress:g.e,requestUsers:g.d,follow:g.b,unfollow:g.f}))(U)}}]);
//# sourceMappingURL=4.467c0b7e.chunk.js.map