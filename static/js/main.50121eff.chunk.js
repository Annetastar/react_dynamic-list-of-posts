(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),s=n(2),i=n(1),l=n(3),u=n(6),m=n(7),p=n(9),d=n(8),f=n(10);n(16);var b=function(e){var t=e.user,n=t.email,a=t.name;return r.a.createElement("div",{className:"user"},r.a.createElement("div",null,a),r.a.createElement("div",null,n),r.a.createElement("div",null,t.address.city))};var h=function(e){var t=e.comment,n=t.name,a=t.email,o=t.body;return r.a.createElement("div",{className:"comment"},r.a.createElement("div",null,o),r.a.createElement("p",null,n),r.a.createElement("p",null,a))};var E=function(e){var t=e.comments;return r.a.createElement("div",{className:"comments"},t.map(function(e){return r.a.createElement(h,{comment:e})}))};n(17);var v=function(e){var t=e.post,n=t.title,a=t.body,o=t.comments;return r.a.createElement("div",{className:"main-post"},r.a.createElement("div",{className:"post"},r.a.createElement("h3",null,n),r.a.createElement("p",null,a),r.a.createElement(b,{user:t.user})),r.a.createElement(E,{comments:o}))},y=function(e){return e.fullPosts.map(function(e){return r.a.createElement(v,{post:e})})};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={originalData:[],sortedData:[],users:[],inputtedName:"",isLoading:!1,isReady:!0},n.getListFromApi=function(){n.setState({isLoading:!0}),Promise.all([fetch("https://jsonplaceholder.typicode.com/comments"),fetch("https://jsonplaceholder.typicode.com/users"),fetch(" https://jsonplaceholder.typicode.com/posts")]).then(function(e){var t=Object(l.a)(e,3),n=t[0],a=t[1],r=t[2];return Promise.all([n.json(),a.json(),r.json()])}).then(function(e){var t=Object(l.a)(e,3),a=t[0],r=t[1],o=t[2];return n.setState({originalData:o.map(function(e){return O({},e,{comments:a.filter(function(t){return t.postId===e.id}),user:r.reduce(function(e,t){return O({},e,Object(i.a)({},t.id,t))},{})[e.userId]})}),sortedData:o.map(function(e){return O({},e,{comments:a.filter(function(t){return t.postId===e.id}),user:r.reduce(function(e,t){return O({},e,Object(i.a)({},t.id,t))},{})[e.userId]})}),users:r,isLoading:!1,isReady:!1})})},n.handleEnterName=function(e){var t=e.target;n.setState({inputtedName:t.value.toLowerCase()}),n.sortingDataByName(t.value.toLowerCase())},n.sortingByName=function(e){n.setState(function(t){return{sortedData:Object(s.a)(t.originalData).filter(function(t){return t.user.name.toLowerCase().includes(e)}),sortedUsers:Object(s.a)(t.users).filter(function(t){return t.name.toLowerCase().includes(e)})}})},n.showAllData=function(){n.setState(function(e){return{sortedData:Object(s.a)(e.originalData)}})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.isReady,a=e.sortedData,o=e.inputtedName,c=e.users;return t?r.a.createElement("div",{className:"app"},r.a.createElement("p",null,"Loading ...")):n?r.a.createElement("div",{className:"app"},r.a.createElement("button",{type:"button",onClick:this.getListFromApi}," Show posts ")):r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Static list of posts"),r.a.createElement("p",null,"Posts:",a.length),r.a.createElement("h2",null,"Posted users name: "),c.map(function(e){return r.a.createElement("b",null,e.name,r.a.createElement("br",null))}),r.a.createElement("form",{onSubmit:this.sortingByName,className:"form"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("input",{onChange:this.handleEnterName,value:o,type:"text",placeholder:"Search users..."}),r.a.createElement("i",{"aria-hidden":"true",className:"users icon"})),r.a.createElement("button",{type:"submit",class:"ui primary button"},"Search")),r.a.createElement("button",{type:"button",onClick:this.showAllData,class:"ui primary button"},"Show all"),r.a.createElement(y,{fullPosts:a}))}}]),t}(r.a.Component);c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.50121eff.chunk.js.map