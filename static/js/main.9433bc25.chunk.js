(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(29),r=a.n(s),l=(a(79),a(2)),i=a(7),c=a(8),p=a(10),u=a(9),m=a(22),d=a(32),h=a.n(d),f=a(17),_=a.n(f),g="https://cors-anywhere.herokuapp.com/https://stormy-fortress-78932.herokuapp.com",v=function(e){return _()({method:"POST",data:e,withCredentials:!0,url:"".concat(g,"/register")})},E=function(e,t){return _()({method:"POST",data:{username:e,password:t},withCredentials:!0,url:"".concat(g,"/login")})},b=function(){return _()({method:"POST",url:"".concat(g,"/logout")})},N=function(){return _()({method:"GET",url:"".concat(g,"/user")})},P=function(e){return _()({method:"POST",data:{id:e},url:"".concat(g,"/userbyid")})},C=function(e){return _()({method:"POST",data:e,url:"".concat(g,"/addpost")})},O=function(e,t){return _()({method:"POST",data:{user:e,action:t},withCredentials:!0,url:"".concat(g,"/getposts")})},k=function(e){return _()({method:"POST",data:{id:e},withCredentials:!0,url:"".concat(g,"/getsinglepost")})},y=function(e,t){return _()({method:"POST",data:{post:e,comment:t},url:"".concat(g,"/addcomment")})},j=function(e,t){return _()({method:"POST",data:{post_id:e,liker_id:t},url:"".concat(g,"/addlike")})},U=function(e,t){return _()({method:"POST",data:{post_id:e,unliker_id:t},url:"".concat(g,"/removelike")})},w=function(e,t){return _()({method:"POST",data:{user_id:e,follower_id:t},url:"".concat(g,"/addfollower")})},F=function(e,t){return _()({method:"POST",data:{user_id:e,unfollower_id:t},url:"".concat(g,"/removefollower")})},S=function(e,t){return _()({method:"POST",data:{user_id:e,inputData:t},url:"".concat(g,"/edituser")})},x=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:""},e.handleUsernameChange=function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{username:t.target.value}))},e.handlePasswordChange=function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{password:t.target.value}))},e.handleSubmit=function(t){E(e.state.username,e.state.password).then((function(t){console.log(t.status),e.setState(Object(l.a)(Object(l.a)({},e.state),{},{username:"",password:""})),e.props.history.push("/home")}))},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:h.a.login},o.a.createElement("div",{className:h.a.signinForm},o.a.createElement("h2",{className:h.a.formTitle},"Instagram"),o.a.createElement("input",{className:h.a.loginInput,onChange:this.handleUsernameChange,type:"mail",name:"text",placeholder:"Username or Email",required:!0,autoComplete:"off",value:this.state.username}),o.a.createElement("br",null),o.a.createElement("input",{className:h.a.loginInput,onChange:this.handlePasswordChange,type:"password",name:"password",placeholder:"Password",required:!0,value:this.state.password}),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.handleSubmit,className:h.a.loginBtn},"Log In")),o.a.createElement("div",{className:h.a.signinForm},o.a.createElement("p",null,"Don't have an account? ",o.a.createElement(m.b,{to:"/signup"},"Sign Up"))))}}]),a}(n.Component),I=a(25),L=a.n(I),B=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",firstName:"",lastName:""},e.handleUsernameChange=function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{username:t.target.value}))},e.handlePasswordChange=function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{password:t.target.value}))},e.handleFirstNameChange=function(t){console.log(t.target.value),e.setState(Object(l.a)(Object(l.a)({},e.state),{},{firstName:t.target.value}))},e.handleLastNameChange=function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{lastName:t.target.value}))},e.handleSubmit=function(t){var a={username:e.state.username,password:e.state.password,firstName:e.state.firstName,lastName:e.state.lastName};v(a).then((function(t){console.log(t.data),e.props.history.push("/")})),e.setState(Object(l.a)(Object(l.a)({},e.state),{},{username:"",password:""}))},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:L.a.signup},o.a.createElement("div",{className:L.a.signupForm},o.a.createElement("h2",{className:L.a.formTitle},"Instagram"),o.a.createElement("input",{className:L.a.signupInput,onChange:this.handleUsernameChange,type:"text",placeholder:"Username or Email",required:!0,autoComplete:"on"}),o.a.createElement("br",null),o.a.createElement("input",{className:L.a.signupInput,onChange:this.handleFirstNameChange,type:"text",placeholder:"First Name",required:!0,autoComplete:"on"}),o.a.createElement("br",null),o.a.createElement("input",{className:L.a.signupInput,onChange:this.handleLastNameChange,type:"text",placeholder:"Last Name",required:!0,autoComplete:"on"}),o.a.createElement("br",null),o.a.createElement("input",{className:L.a.signupInput,onChange:this.handlePasswordChange,type:"password",placeholder:"Password",required:!0}),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.handleSubmit,className:L.a.signupBtn},"Sign Up")),o.a.createElement("div",{className:L.a.signupForm},o.a.createElement("p",null,"Have an account? ",o.a.createElement(m.b,{to:"/"},"Log In"))))}}]),a}(n.Component),T=a(39),D=a.n(T),A=function(e){return{type:"UPDATE_USER",user:e}},R=a(13),W=function(e){return{type:"ADD_POST",posts:e}},z=a(36),H=a.n(z),Z=a(46),q=a(44),M=a(5),X=a.n(M),V=function(e){return{type:"UPDATE_CLICKED_USER",user:e}},J=a(3),Y=a.n(J),G=a(38),K=a.n(G),Q=a(119),$=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={post:null,author:"",commentors:[],commentorsComplete:!1,inputComment:""},e.likePressControl=function(){var t=!1;return e.state.post.likes.map((function(a){return a===e.props.user._id?t=!0:null})),t?o.a.createElement(Q.a,{className:Y()(X.a.likeBtn,X.a.pointer),onClick:e.handleUnlikePress},o.a.createElement(K.a,{color:"secondary"})):o.a.createElement(Q.a,{className:Y()(X.a.likeBtn,X.a.pointer),onClick:e.handleLikePress},o.a.createElement(K.a,null))},e.handleLikePress=function(){j(e.state.post._id,e.props.user._id).then((function(t){k(e.state.post._id).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{post:t.data.post}))}))}))},e.handleUnlikePress=function(){U(e.state.post._id,e.props.user._id).then((function(t){k(e.state.post._id).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{post:t.data.post}))}))}))},e.commentList=function(){var t;return e.state.commentorsComplete?null===(t=e.state.post)||void 0===t?void 0:t.comments.map((function(t,a){var n,s;return o.a.createElement("div",{className:Y()(X.a.horizontalFlex,X.a.singleComment),key:a},o.a.createElement("h5",{className:Y()(X.a.commentor,X.a.pointer),onClick:function(){return e.handleProfileClick(e.state.commentors[a])}},null===(n=e.state.commentors[a])||void 0===n?void 0:n.firstName," ",null===(s=e.state.commentors[a])||void 0===s?void 0:s.lastName),o.a.createElement("p",{className:X.a.commentBody},t.body," "))})):null},e.handleInputCommentChange=function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{inputComment:t.target.value}))},e.handleCommentAdd=function(t){var a={commentor_id:e.props.user._id,body:e.state.inputComment};y(e.state.post,a).then((function(t){k(e.state.post._id).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{post:t.data.post,commentorsComplete:!1,commentors:"",inputComment:""}))}))}))},e.handleProfileClick=function(t){e.props.updateClickedUser(t),t._id===e.props.user._id?e.props.addPath("/profile"):e.props.addPath("/account")},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;P(this.props.post.author_id).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{author:t.data,post:e.props.post}))}))}},{key:"componentDidUpdate",value:function(){var e=this;null!==this.state.post&&!1===this.state.commentorsComplete&&(this.state.post.comments.map(function(){var t=Object(q.a)(H.a.mark((function t(a){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(a.commentor_id).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{commentors:[].concat(Object(Z.a)(e.state.commentors),[t.data])}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.setState(Object(l.a)(Object(l.a)({},this.state),{},{commentorsComplete:!0})))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.state.post?o.a.createElement("div",{className:Y()(X.a.verticalFlex,X.a.snippet)},this.state.author?o.a.createElement("div",{className:Y()(X.a.postHead,X.a.verticalFlex)},o.a.createElement("div",{className:Y()(X.a.postAuthor,X.a.horizontalFlex)},o.a.createElement("img",{className:Y()(X.a.profilePic,X.a.pointer),onClick:function(){return e.handleProfileClick(e.state.author)},src:this.state.author.profilePic,alt:this.state.author.profilePic}),o.a.createElement("div",{className:Y()(X.a.verticalFlex,X.a.authorAndLocation)},o.a.createElement("h5",{className:Y()(X.a.authorName,X.a.pointer),onClick:function(){return e.handleProfileClick(e.state.author)}}," ",this.state.author.firstName," ",this.state.author.lastName),o.a.createElement("p",{className:X.a.postLocation},this.state.post.location," ")))):null,o.a.createElement("img",{onClick:function(){return e.props.addPath("/post/"+e.state.post._id)},className:X.a.postImage,src:this.state.post.image,alt:"post"}),o.a.createElement("div",{className:X.a.postTail},o.a.createElement("div",{className:X.a.likes},this.likePressControl(),o.a.createElement("p",{className:Y()(X.a.likesNumber)},"Liked by ",this.state.post.likes.length," others")),o.a.createElement("div",{className:Y()(X.a.horizontalFlex,X.a.postDetails)},o.a.createElement("h5",{className:Y()(X.a.authorName,X.a.pointer)}," ",this.state.author.firstName," ",this.state.author.lastName),o.a.createElement("p",{className:Y()(X.a.caption,X.a.horizontalFlex)},this.state.post.caption)),o.a.createElement("div",{className:X.a.postComments},this.state.commentorsComplete&&this.commentList())),o.a.createElement("div",{className:Y()(X.a.horizontalFlex,X.a.inputComment)},o.a.createElement("input",{className:Y()(X.a.inputCommentField),type:"text",onChange:this.handleInputCommentChange,placeholder:"Write a comment",value:this.state.inputComment,autoComplete:"off"}),o.a.createElement("button",{className:Y()(X.a.addBtn,X.a.pointer),onClick:this.handleCommentAdd},"Post"))):null)}}]),a}(n.Component),ee=Object(R.b)((function(e){return{user:e.user,posts:e.posts,clickedUser:e.clickedUser}}),(function(e){return{updateUser:function(t){e(A(t))},addPosts:function(t){e(W(t))},updateClickedUser:function(t){e(V(t))}}}))($),te=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={flag:!1},e.addPath=function(t){console.log("Path added"),e.props.history.push(t)},e.tileList=function(){return e.state.flag?e.props.posts.map((function(t,a){return o.a.createElement("div",{key:a,className:D.a.singlePost},o.a.createElement(ee,{addPath:e.addPath,post:t}))})):o.a.createElement("h1",{className:D.a.center},"You are not following anyone")},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;N().then((function(t){e.props.updateUser(t.data),O(e.props.user,"FOLLOWING_POSTS").then((function(t){e.props.addPosts(t.data),e.setState(Object(l.a)(Object(l.a)({},e.state),{},{flag:!0})),console.log("props=====>",e.props),console.log("state=====>",e.state)}))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:D.a.homeWrapper},o.a.createElement("div",{className:D.a.home},o.a.createElement("div",{className:D.a.posts},this.tileList())))}}]),a}(n.Component),ae=Object(R.b)((function(e){return{user:e.user,posts:e.posts,clickedUser:e.clickedUser}}),(function(e){return{updateUser:function(t){e(A(t))},addPosts:function(t){e(W(t))},updateClickedUser:function(t){e(V(t))}}}))(te),ne=a(11),oe=a.n(ne),se=a(51),re=a.n(se),le=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:re.a.tile},o.a.createElement("img",{onClick:function(){return e.props.goToSinglePost("/post/"+e.props.post._id)},className:re.a.postImage,src:this.props.post.image,alt:"post"}))}}]),a}(n.Component),ie=a(66),ce=a.n(ie),pe=a(67),ue=a.n(pe),me=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).addPath=function(t){e.props.history.push(t)},e.handleAddPostClick=function(){e.props.history.push("/addpost")},e.tileList=function(){if(e.props.posts)return e.props.posts.map((function(t,a){return o.a.createElement(le,{key:a,goToSinglePost:e.addPath,post:t})}))},e.handleEditClick=function(){console.log("Edit Profile clicked"),e.props.history.push("/editprofile")},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;O(this.props.user,"SELF_POSTS").then((function(t){e.props.addPosts(t.data)}))}},{key:"render",value:function(){var e,t;return o.a.createElement("div",{className:oe.a.profileWrapper},this.props.user?o.a.createElement("div",{className:oe.a.profile},o.a.createElement("div",{className:Y()(oe.a.headWrapper,oe.a.verticalFlex)},o.a.createElement("div",{className:Y()(oe.a.horizontalFlex,oe.a.head)},o.a.createElement("img",{className:oe.a.profilePic,src:this.props.user.profilePic,alt:this.props.user.profilePic}),o.a.createElement("div",{className:Y()(oe.a.verticalFlex,oe.a.headRight)},o.a.createElement("div",{className:Y()(oe.a.horizontalFlex,oe.a.userEditProfile)},o.a.createElement("p",{className:oe.a.userName},this.props.user.username),o.a.createElement(Q.a,{className:oe.a.editProfileBtn,onClick:this.handleEditClick},o.a.createElement(ce.a,null))),o.a.createElement("div",{className:Y()(oe.a.horizontalFlex,oe.a.headRightItem)},o.a.createElement("p",{className:oe.a.headRightItemChild},this.props.posts.length," posts"),o.a.createElement("p",{className:oe.a.headRightItemChild},null===(e=this.props.user.followers)||void 0===e?void 0:e.length," followers"),o.a.createElement("p",{className:oe.a.headRightItemChild},null===(t=this.props.user.following)||void 0===t?void 0:t.length," following")),o.a.createElement("p",{className:oe.a.userFLName},this.props.user.firstName," ",this.props.user.lastName),this.props.user.bio)),o.a.createElement(Q.a,{className:oe.a.addPostBtn,onClick:this.handleAddPostClick},o.a.createElement(ue.a,{fontSize:"large"}))),o.a.createElement("div",{className:oe.a.tilesPanel},this.tileList())):null)}}]),a}(n.Component),de=Object(R.b)((function(e){return{user:e.user,posts:e.posts}}),(function(e){return{updateUser:function(t){e(A(t))},addPosts:function(t){e(W(t))}}}))(me),he=a(12),fe=(a(104),a(52)),_e=a.n(fe),ge=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={postImage:""},e.handleSubmit=function(t){var a={location:t.target.location.value,caption:t.target.caption.value,id:e.props.user._id,postImage:e.state.postImage};C(a).then((function(e){console.log(e.data)})),e.props.history.push("/profile"),t.preventDefault()},e.handleImageChange=function(t){var a=t.target.files[0],n=new FileReader;n.addEventListener("load",(function(){console.log(n.result),e.setState({postImage:n.result})}),!1),a&&n.readAsDataURL(a)},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:_e.a.addPost},o.a.createElement("form",{className:_e.a.postForm,onSubmit:this.handleSubmit},o.a.createElement("label",null,"Image: "),o.a.createElement("input",{type:"file",onChange:this.handleImageChange}),o.a.createElement("br",null),o.a.createElement("label",null,"location: "),o.a.createElement("input",{type:"text",name:"location",autoComplete:"off"}),o.a.createElement("br",null),o.a.createElement("label",null,"caption: "),o.a.createElement("input",{type:"text",name:"caption",autoComplete:"off"}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Add")))}}]),a}(n.Component),ve=Object(R.b)((function(e){return{user:e.user,posts:e.posts}}),(function(e){return{updateUser:function(t){e(A(t))},addPosts:function(t){e(W(t))}}}))(ge),Ee=a(53),be=a.n(Ee),Ne=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).addPath=function(t){e.props.history.push(t)},e.tileList=function(){if(e.props.posts)return e.props.posts.map((function(t,a){return o.a.createElement(le,{key:a,goToSinglePost:e.addPath,post:t})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;O(this.props.user,"ALL_POSTS").then((function(t){e.props.addPosts(t.data)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:be.a.discoverWrapper},o.a.createElement("div",{className:be.a.discover},this.tileList()))}}]),a}(n.Component),Pe=Object(R.b)((function(e){return{user:e.user,posts:e.posts}}),(function(e){return{updateUser:function(t){e(A(t))},addPosts:function(t){e(W(t))}}}))(Ne),Ce=a(4),Oe=a.n(Ce),ke=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={post:null,author:"",inputComment:"",commentors:[],commentorsComplete:!1},e.componentDidUpdate=function(){console.log(e.props),null!==e.state.post&&!1===e.state.commentorsComplete&&(e.state.post.comments.map(function(){var t=Object(q.a)(H.a.mark((function t(a){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(a.commentor_id).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{commentors:[].concat(Object(Z.a)(e.state.commentors),[t.data])}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.setState(Object(l.a)(Object(l.a)({},e.state),{},{commentorsComplete:!0})))},e.handleInputCommentChange=function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{inputComment:t.target.value}))},e.handleSubmit=function(t){var a={commentor_id:e.props.user._id,body:e.state.inputComment};e.state.inputComment&&y(e.state.post,a).then((function(t){k(e.props.match.params.post_id).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{post:t.data.post,commentorsComplete:!1,commentors:"",inputComment:""}))}))}))},e.controlBtn=function(){var t=!1;return e.props.user.following.forEach((function(a){a===e.state.author._id&&(t=!0)})),t?o.a.createElement("button",{className:Y()(Oe.a.followBtn),onClick:e.handleUnfollowPress},"Unfollow"):o.a.createElement("button",{className:Y()(Oe.a.followBtn),onClick:e.handleFollowPress},"Follow")},e.handleUnfollowPress=function(){console.log("Unfollower ID====>",e.props.user._id),F(e.state.author._id,e.props.user._id).then((function(t){console.log(t.data),N().then((function(t){e.props.updateUser(t.data)})),P(e.state.author._id).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{author:t.data})),e.props.history.push("/post/"+e.state.post._id)}))}))},e.handleFollowPress=function(){console.log("Follower ID====>",e.props.user._id),w(e.state.author._id,e.props.user._id).then((function(t){console.log(t.data),N().then((function(t){e.props.updateUser(t.data)})),P(e.state.author._id).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{author:t.data})),e.props.history.push("/post/"+e.state.post._id)}))}))},e.likePressControl=function(){var t=!1;return e.state.post.likes.map((function(a){return a===e.props.user._id?t=!0:null})),t?o.a.createElement(Q.a,{className:Y()(Oe.a.likeBtn,Oe.a.pointer),onClick:e.handleUnlikePress},o.a.createElement(K.a,{color:"secondary"})):o.a.createElement(Q.a,{className:Y()(Oe.a.likeBtn,Oe.a.pointer),onClick:e.handleLikePress},o.a.createElement(K.a,null))},e.handleLikePress=function(){j(e.state.post._id,e.props.user._id).then((function(t){k(e.state.post._id).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{post:t.data.post}))}))}))},e.handleUnlikePress=function(){U(e.state.post._id,e.props.user._id).then((function(t){k(e.state.post._id).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{post:t.data.post}))}))}))},e.commentsList=function(){var t;return e.state.commentorsComplete?null===(t=e.state.post)||void 0===t?void 0:t.comments.map((function(t,a){var n,s;return o.a.createElement("div",{className:Y()(Oe.a.singleComment,Oe.a.horizontalFlex),key:a},o.a.createElement("h5",{className:Y()(Oe.a.commentor,Oe.a.pointer),onClick:function(){return e.handleProfileClick(e.state.commentors[a])}},null===(n=e.state.commentors[a])||void 0===n?void 0:n.firstName," ",null===(s=e.state.commentors[a])||void 0===s?void 0:s.lastName),o.a.createElement("p",{className:Oe.a.commentBody},t.body))})):null},e.handleProfileClick=function(t){e.props.updateClickedUser(t),t._id===e.props.user._id?e.props.history.push("/profile"):e.props.history.push("/account")},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;k(this.props.match.params.post_id).then((function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{post:t.data.post,author:t.data.author}))}))}},{key:"render",value:function(){var e,t=this;return this.state.post&&this.state.author?o.a.createElement("div",{className:Y()(Oe.a.singlePostWrapper)},o.a.createElement("div",{className:Y()(Oe.a.horizontalFlex,Oe.a.singlePost)},o.a.createElement("img",{className:Oe.a.postImage,src:this.state.post.image,alt:"post"}),o.a.createElement("div",{className:Y()(Oe.a.postInfo,Oe.a.verticalFlex)},o.a.createElement("div",{className:Oe.a.postHead},o.a.createElement("div",{className:Y()(Oe.a.authorDetails,Oe.a.horizontalFlex)},o.a.createElement("div",{className:Oe.a.horizontalFlex},o.a.createElement("img",{className:Oe.a.profilePicCircle,onClick:function(){return t.handleProfileClick(t.state.author)},src:this.state.author.profilePic,alt:"profile pic"}),o.a.createElement("h5",{className:Oe.a.authorName,onClick:function(){return t.handleProfileClick(t.state.author)}},this.state.author.firstName," ",this.state.author.lastName)),this.state.author._id!==this.props.user._id?this.controlBtn():null),o.a.createElement("div",{className:Y()(Oe.a.horizontalFlex,Oe.a.postDetails)},o.a.createElement("h5",{className:Y()(Oe.a.captionWriter,Oe.a.pointer)}," ",this.state.author.firstName," ",this.state.author.lastName),o.a.createElement("p",{className:Y()(Oe.a.caption,Oe.a.horizontalFlex)},this.state.post.caption)),o.a.createElement("div",{className:Oe.a.commentsArray},null!==this.state.commentors&&this.commentsList())),o.a.createElement("div",{className:Y()(Oe.a.postTail,Oe.a.verticalFlex)},o.a.createElement("div",{className:Y()(Oe.a.likes,Oe.a.verticalFlex)},this.likePressControl(),o.a.createElement("p",{className:Oe.a.likesNum},null===(e=this.state.post)||void 0===e?void 0:e.likes.length," Likes")),o.a.createElement("div",{className:Y()(Oe.a.addComment,Oe.a.horizontalFlex)},o.a.createElement("input",{className:Oe.a.inputCommentField,type:"text",name:"comment",autoComplete:"off",placeholder:"Write a comment...",value:this.state.inputComment,onChange:this.handleInputCommentChange}),o.a.createElement("button",{className:Oe.a.postBtn,onClick:this.handleSubmit},"Post")))))):null}}]),a}(n.Component),ye=Object(R.b)((function(e){return{user:e.user,posts:e.posts,clickedUser:e.clickedUser}}),(function(e){return{updateUser:function(t){e(A(t))},addPosts:function(t){e(W(t))},updateClickedUser:function(t){e(V(t))}}}))(ke),je=a(18),Ue=a.n(je),we=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).addPath=function(t){e.props.history.push(t)},e.tileList=function(){return e.props.posts.map((function(t,a){return o.a.createElement(le,{key:a,goToSinglePost:e.addPath,post:t})}))},e.controlBtn=function(){var t=!1;return e.props.user.following.forEach((function(a){a===e.props.clickedUser._id&&(t=!0)})),t?o.a.createElement("button",{className:Ue.a.followingBtn,onClick:e.handleUnfollowPress},"Unfollow"):o.a.createElement("button",{className:Ue.a.followingBtn,onClick:e.handleFollowPress},"Follow")},e.handleUnfollowPress=function(){console.log("Unfollower ID====>",e.props.user._id),F(e.props.clickedUser._id,e.props.user._id).then((function(t){console.log(t.data),N().then((function(t){e.props.updateUser(t.data)})),P(e.props.clickedUser._id).then((function(t){e.props.updateClickedUser(t.data),e.props.history.push("/account")}))}))},e.handleFollowPress=function(){console.log("Follower ID====>",e.props.user._id),w(e.props.clickedUser._id,e.props.user._id).then((function(t){console.log(t.data),N().then((function(t){e.props.updateUser(t.data)})),P(e.props.clickedUser._id).then((function(t){e.props.updateClickedUser(t.data),e.props.history.push("/account")}))}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;O(this.props.clickedUser,"SELF_POSTS").then((function(t){e.props.addPosts(t.data)})),N().then((function(t){e.props.updateUser(t.data)}))}},{key:"componentDidUpdate",value:function(){console.log("UPDATED")}},{key:"render",value:function(){return o.a.createElement("div",{className:Ue.a.accountWrapper},this.props.clickedUser?o.a.createElement("div",{className:Ue.a.account},o.a.createElement("div",{className:Ue.a.head},o.a.createElement("img",{className:Ue.a.profilePic,src:this.props.clickedUser.profilePic,alt:this.props.clickedUser.profilePic}),o.a.createElement("div",{className:Ue.a.headRight},o.a.createElement("div",{className:Ue.a.userEditProfile},o.a.createElement("p",{className:Ue.a.userName},this.props.clickedUser.username),this.props.clickedUser?this.controlBtn():null),o.a.createElement("div",{className:Ue.a.headRightItem},o.a.createElement("p",{className:Ue.a.headRightItemChild},this.props.posts.length," posts"),o.a.createElement("p",{className:Ue.a.headRightItemChild},this.props.clickedUser.followers.length," followers"),o.a.createElement("p",{className:Ue.a.headRightItemChild},this.props.clickedUser.following.length," following")),o.a.createElement("p",null,this.props.clickedUser.firstName," ",this.props.clickedUser.lastName," ",o.a.createElement("br",null),this.props.clickedUser.bio))),o.a.createElement("div",{className:Ue.a.tilesPanel},this.tileList())):null)}}]),a}(n.Component),Fe=Object(R.b)((function(e){return{user:e.user,posts:e.posts,clickedUser:e.clickedUser}}),(function(e){return{updateUser:function(t){e(A(t))},addPosts:function(t){e(W(t))},updateClickedUser:function(t){e(V(t))}}}))(we),Se=a(47),xe=a.n(Se),Ie=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={selectedFile:null,img:null},e.handleFormSubmit=function(t){var a={profilePic:e.state.img,fName:t.target.fName.value,lName:t.target.lName.value,email:t.target.email.value,phone:t.target.phone.value,bio:t.target.bio.value,gender:t.target.gender.value};S(e.props.user._id,a).then((function(t){console.log(t.data),e.props.updateUser(t.data),e.addPath("/profile")})),t.preventDefault()},e.addPath=function(t){e.props.history.push(t)},e.handleProfileImage=function(t){var a=t.target.files[0],n=new FileReader;n.addEventListener("load",(function(){console.log("========>",n.result),e.setState({img:n.result})}),!1),a&&n.readAsDataURL(a)},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:xe.a.editProfileWrapper},this.props.user?o.a.createElement("div",{className:xe.a.editProfile},o.a.createElement("form",{className:xe.a.editProfileForm,onSubmit:this.handleFormSubmit},o.a.createElement("label",null,"Profile Picture: "),o.a.createElement("input",{onChange:this.handleProfileImage,type:"file",name:"profilePic"}),o.a.createElement("br",null),o.a.createElement("label",null,"First Name: "),o.a.createElement("input",{type:"text",name:"fName",autoComplete:"off"}),o.a.createElement("br",null),o.a.createElement("label",null,"Last Name: "),o.a.createElement("input",{type:"text",name:"lName",autoComplete:"off"}),o.a.createElement("br",null),o.a.createElement("label",null,"Email: "),o.a.createElement("input",{type:"email",name:"email",autoComplete:"off"}),o.a.createElement("br",null),o.a.createElement("label",null,"Bio: "),o.a.createElement("input",{type:"text",name:"bio",autoComplete:"off"}),o.a.createElement("br",null),o.a.createElement("label",null,"Phone Number: "),o.a.createElement("input",{type:"number",name:"phone",autoComplete:"off"}),o.a.createElement("br",null),o.a.createElement("label",null,"Gender: "),o.a.createElement("input",{type:"radio",id:"male",name:"gender",value:"male"}),o.a.createElement("label",null,"Male"),o.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"female"}),o.a.createElement("label",null,"Female"),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Submit"))):null)}}]),a}(n.Component),Le=Object(R.b)((function(e){return{user:e.user,posts:e.posts}}),(function(e){return{updateUser:function(t){e(A(t))},addPosts:function(t){e(W(t))}}}))(Ie),Be=a(27),Te=a.n(Be),De=a(69),Ae=a.n(De),Re=a(68),We=a.n(Re),ze=a(70),He=a.n(ze),Ze=a(71),qe=a.n(Ze),Me=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).handleLogOut=function(){e.props.updateUser(""),e.props.updateClickedUser(""),e.props.addPosts(""),b().then((function(t){e.props.history.push("/"),console.log(t.data)}))},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:Te.a.navbarWrapper},o.a.createElement("div",{className:Te.a.navbar},o.a.createElement(m.b,{to:"/",className:Te.a.brand},"Instagram"),o.a.createElement("div",{className:Te.a.nav},o.a.createElement(m.b,{to:"/home",className:Te.a.navBtn},o.a.createElement(We.a,null)),o.a.createElement(m.b,{to:"/discover",className:Te.a.navBtn},o.a.createElement(Ae.a,null)),o.a.createElement(m.b,{to:"/profile",className:Te.a.navBtn},o.a.createElement(He.a,null)),o.a.createElement(m.b,{to:"/",onClick:this.handleLogOut,className:Te.a.navBtn},o.a.createElement(qe.a,null)))))}}]),a}(n.Component),Xe=Object(R.b)((function(e){return{user:e.user}}),(function(e){return{updateUser:function(t){e(A(t))},addPosts:function(t){e(W(t))},updateClickedUser:function(t){e(V(t))}}}))(Me);var Ve=function(){return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(he.a,{path:["/home","/profile","/account","/addpost","/discover","/editprofile","/post/:post_id"],component:Xe}),o.a.createElement(he.c,null,o.a.createElement(he.a,{exact:!0,path:"/",component:x}),o.a.createElement(he.a,{path:"/signup",component:B}),o.a.createElement(he.a,{path:"/home",component:ae}),o.a.createElement(he.a,{path:"/profile",component:de}),o.a.createElement(he.a,{path:"/account",component:Fe}),o.a.createElement(he.a,{path:"/addpost",component:ve}),o.a.createElement(he.a,{path:"/discover",component:Pe}),o.a.createElement(he.a,{path:"/editprofile",component:Le}),o.a.createElement(he.a,{path:"/post/:post_id",component:ye})))))},Je=a(40),Ye={},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_USER"===t.type?Object(l.a)({},t.user):e},Ke=[],Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;return"ADD_POST"===t.type?t.posts:e},$e={},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_CLICKED_USER"===t.type?Object(l.a)({},t.user):e},tt=Object(Je.b)({user:Ge,posts:Qe,clickedUser:et}),at=Object(Je.c)(tt,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(o.a.createElement(R.a,{store:at},o.a.createElement(Ve,null)),document.getElementById("root"))},11:function(e,t,a){e.exports={profileWrapper:"profile_profileWrapper__PktQt",profile:"profile_profile__1fCNP",horizontalFlex:"profile_horizontalFlex__1Zl57",verticalFlex:"profile_verticalFlex__3Yql7",head:"profile_head__37BLZ",profilePic:"profile_profilePic__3Ua1L",headRight:"profile_headRight__rmfvZ",headRightItem:"profile_headRightItem__1Tv1j",headRightItemChild:"profile_headRightItemChild__2cmIg",userFLName:"profile_userFLName__1UT8O",userEditProfile:"profile_userEditProfile__3B6Zr",tilesPanel:"profile_tilesPanel__W6bbH",addPostBtn:"profile_addPostBtn__2Leza",userName:"profile_userName__3XTNf"}},18:function(e,t,a){e.exports={accountWrapper:"account_accountWrapper__ZLgTp",account:"account_account__6KcCY",head:"account_head__1EAnW",profilePic:"account_profilePic__1HnNX",headRight:"account_headRight__fpPzQ",headRightItem:"account_headRightItem__23xzr",headRightItemChild:"account_headRightItemChild__28BnP",userEditProfile:"account_userEditProfile__2kBOR",tilesPanel:"account_tilesPanel__1gR3w",followingBtn:"account_followingBtn__2eM3O",userName:"account_userName__2qtPr"}},25:function(e,t,a){e.exports={signup:"signup_signup__1etxp",signupForm:"signup_signupForm__1AOds",formTitle:"signup_formTitle__zTa5e",labels:"signup_labels__3vxED",signupInput:"signup_signupInput__1ZebZ",signupBtn:"signup_signupBtn__17KzV"}},27:function(e,t,a){e.exports={navbarWrapper:"navbar_navbarWrapper__2_UtL",navbar:"navbar_navbar__17bD9",brand:"navbar_brand__2YRmJ",nav:"navbar_nav__Zspz3",navBtn:"navbar_navBtn__3UJ8p",circleImage:"navbar_circleImage__2bduP"}},32:function(e,t,a){e.exports={login:"login_login__eWxTd",signinForm:"login_signinForm__2ygL6",formTitle:"login_formTitle__3M4Hv",loginInput:"login_loginInput__k4Wh7",loginBtn:"login_loginBtn__3XLNp"}},39:function(e,t,a){e.exports={homeWrapper:"home_homeWrapper__2whH5",home:"home_home__3dLwH",posts:"home_posts__3pcrv",singlePost:"home_singlePost__320Ob",center:"home_center__1qyMW"}},4:function(e,t,a){e.exports={horizontalFlex:"singlePost_horizontalFlex__2lsA5",verticalFlex:"singlePost_verticalFlex__v6OlU",authorDetails:"singlePost_authorDetails__3Uctn",singlePost:"singlePost_singlePost__3it1D",postComments:"singlePost_postComments__R1Nub",profilePicCircle:"singlePost_profilePicCircle__2pp-h",postInfo:"singlePost_postInfo__3N_0E",followBtn:"singlePost_followBtn__1OKFY",addComment:"singlePost_addComment__x5-ZU",likes:"singlePost_likes__3Fi74",likeBtn:"singlePost_likeBtn__zus3S",likesNum:"singlePost_likesNum__3-ZrT",profileClick:"singlePost_profileClick__36dDR",postImage:"singlePost_postImage__ZCigq",singlePostWrapper:"singlePost_singlePostWrapper__1gCUp",captionWriter:"singlePost_captionWriter__2VeQr",authorName:"singlePost_authorName__38614",inputCommentField:"singlePost_inputCommentField__1bJxb",postBtn:"singlePost_postBtn__1xW1f",commentor:"singlePost_commentor__1_v4j",commentBody:"singlePost_commentBody__3B8v3",pointer:"singlePost_pointer__3ogmC",caption:"singlePost_caption__1p5Aq",commentsArray:"singlePost_commentsArray__A16u8"}},47:function(e,t,a){e.exports={editProfileWrapper:"editProfile_editProfileWrapper__3GZ8N",editProfileForm:"editProfile_editProfileForm__fOvRU"}},5:function(e,t,a){e.exports={snippet:"snippet_snippet__1kv4m",postImage:"snippet_postImage__363JY",profilePic:"snippet_profilePic__2jG50",postHead:"snippet_postHead__3Ptgx",authorName:"snippet_authorName__2HDZG",postLocation:"snippet_postLocation__1bod4",authorAndLocation:"snippet_authorAndLocation__1XknT",caption:"snippet_caption__2zU-d",commentor:"snippet_commentor__1wAHX",commentBody:"snippet_commentBody__1rv2q",horizontalFlex:"snippet_horizontalFlex__3AVdc",verticalFlex:"snippet_verticalFlex__HCPdp",likeBtn:"snippet_likeBtn__Qyyzi",inputComment:"snippet_inputComment__2Yldp",inputCommentField:"snippet_inputCommentField__2p2Vm",addBtn:"snippet_addBtn__2R8Ej",postTail:"snippet_postTail__wgsux",pointer:"snippet_pointer__3J5AV",likesNumber:"snippet_likesNumber__1tTOZ",postComments:"snippet_postComments__2NWrs"}},51:function(e,t,a){e.exports={tile:"tile_tile__1slmq",postImage:"tile_postImage__14T6M"}},52:function(e,t,a){e.exports={addPost:"addPost_addPost__1efHx",postForm:"addPost_postForm__1hmVo"}},53:function(e,t,a){e.exports={discover:"discover_discover__3KFEk",discoverWrapper:"discover_discoverWrapper__1fWCw"}},74:function(e,t,a){e.exports=a(105)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.9433bc25.chunk.js.map