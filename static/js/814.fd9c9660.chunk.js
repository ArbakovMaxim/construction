"use strict";(self.webpackChunkconstruction=self.webpackChunkconstruction||[]).push([[814],{3614:function(e,s,i){i.d(s,{s:function(){return m}});var n=i(9439),t=(i(8458),i(5705)),a=i(8007),r=i(2791),l=i(7678),o=i(9085),c=i(184),m=function(){var e=(0,r.useState)(!1),s=(0,n.Z)(e,2),i=s[0],m=s[1];return(0,c.jsx)("section",{className:"footerForm__section",id:"footerForm",children:(0,c.jsx)("div",{className:"container footerForm__container",children:(0,c.jsx)(t.J9,{initialValues:{name:"",phone:"",email:"",massage:""},validationSchema:a.Ry({name:a.Z_().max(15,"Must be 15 characters or less").required("Required").matches(/^[A-Za-z]+$/,"Name must contain only letters"),phone:a.Z_().matches(/^\+?[0-9]+$/,"Invalid phone number").max(20,"Must be 20 characters or less").required("Required"),email:a.Z_().email("Invalid email address"),massage:a.Z_().max(150,"Must be 150 characters or less")}),onSubmit:function(e,s){var n=s.resetForm;i?(o.Am.success("Your application has been successfully accepted"),console.log(e),n()):o.Am.warn("Please take checkBox")},children:(0,c.jsxs)(t.l0,{className:"footerForm__form",children:[(0,c.jsx)("h2",{className:"footerForm__title",children:"A quick way to discuss details"}),(0,c.jsxs)("div",{className:"footerForm__wrapper--input",children:[(0,c.jsx)("label",{className:"footerForm__label",htmlFor:"name",children:"Name*"}),(0,c.jsx)(t.gN,{autoComplete:"name",id:"name",name:"name",type:"text",placeholder:"Your name",className:"footerForm__field"}),(0,c.jsx)("div",{className:"footerForm__error-container",children:(0,c.jsx)(t.Bc,{name:"name"})})]}),(0,c.jsxs)("div",{className:"footerForm__wrapper--input",children:[(0,c.jsx)("label",{className:"footerForm__label",htmlFor:"phone",children:"Phone*"}),(0,c.jsx)(t.gN,{autoComplete:"phone",id:"phone",name:"phone",type:"text",placeholder:"Your phone number",className:"footerForm__field"}),(0,c.jsx)("div",{className:"footerForm__error-container",children:(0,c.jsx)(t.Bc,{name:"phone"})})]}),(0,c.jsxs)("div",{className:"footerForm__wrapper--input",children:[(0,c.jsx)("label",{className:"footerForm__label",htmlFor:"email",children:"Email"}),(0,c.jsx)(t.gN,{autoComplete:"email",id:"email",name:"email",type:"email",placeholder:"Your working email",className:"footerForm__field"}),(0,c.jsx)("div",{className:"footerForm__error-container",children:(0,c.jsx)(t.Bc,{name:"email"})})]}),(0,c.jsxs)("div",{className:"footerForm__wrapper--input",children:[(0,c.jsx)("label",{className:"footerForm__label",htmlFor:"message",children:"Massage*"}),(0,c.jsx)(t.gN,{as:"textarea",id:"message",name:"message",type:"text",placeholder:"Your message",className:"footerForm__field  footerForm__field--massage"}),(0,c.jsx)("div",{className:"footerForm__error-container",children:(0,c.jsx)(t.Bc,{name:"massage"})})]}),(0,c.jsx)("div",{className:"footerForm__chekbox--wrapper",children:(0,c.jsxs)("label",{className:"footerForm__chekbox--massege",children:[(0,c.jsx)("input",{id:"checkbox",type:"checkbox",checked:i,onChange:function(){m((function(e){return!e}))},style:{display:"none"}}),(0,c.jsx)("span",{className:"custom-checkbox ".concat(i?"checked":""),children:i&&(0,c.jsx)(l.b,{})}),(0,c.jsx)("span",{className:"footerForm__chekbox--span",children:"I agree to receive communications from Createx Construction Bureau."})]})}),(0,c.jsx)("div",{className:"footerForm__button--wrapper",children:(0,c.jsx)("button",{className:"footerForm__button ",type:"submit",children:"send request"})})]})})})})}},8186:function(e,s,i){i.d(s,{J:function(){return t}});var n=i(184),t=function(){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[(0,n.jsx)("path",{d:"M10.0007 19.1673C15.0549 19.1673 19.1673 15.0553 19.1673 10.0007C19.1673 9.12822 19.0455 8.26847 18.8044 7.44509C18.6856 7.04021 18.2628 6.80765 17.8568 6.92645C17.4516 7.04487 17.2197 7.46915 17.3382 7.87403C17.5379 8.5581 17.6395 9.27387 17.6395 10.0007C17.6395 14.2127 14.2127 17.6395 10.0007 17.6395C5.78863 17.6395 2.36176 14.2127 2.36176 10.0007C2.36176 5.78863 5.78863 2.36176 10.0007 2.36176C11.5314 2.36176 13.0042 2.80935 14.2597 3.65586C14.6092 3.89178 15.0844 3.79909 15.3199 3.44959C15.5556 3.09973 15.4637 2.62491 15.1138 2.38918C13.6051 1.37184 11.8371 0.833984 10.0007 0.833984C4.94641 0.833984 0.833984 4.94604 0.833984 10.0007C0.833984 15.0553 4.94641 19.1673 10.0007 19.1673Z",fill:"#FF5A30"}),(0,n.jsx)("path",{d:"M18.578 1.91131L10.0005 10.4884L7.25636 7.74464C6.93084 7.41932 6.40349 7.41932 6.07797 7.74464C5.75265 8.07016 5.75265 8.5975 6.07797 8.92302L9.41131 12.2564C9.57427 12.4193 9.78708 12.5005 10.0005 12.5005C10.2139 12.5005 10.4267 12.4193 10.5897 12.2564L19.7564 3.08969C20.0817 2.76417 20.0817 2.23683 19.7564 1.91131C19.4308 1.58599 18.9035 1.58599 18.578 1.91131Z",fill:"#FF5A30"})]})}},8256:function(e,s,i){i.d(s,{H:function(){return t}});var n=i(184),t=function(){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.6153 7.54557C14.5204 8.20339 14.2954 8.82861 13.9619 9.40355C13.9869 9.5459 13.9997 9.68979 13.9997 9.83429C13.9997 10.3362 13.8543 10.8165 13.5849 11.2529C13.4504 11.4707 13.4158 11.726 13.4025 11.8946C13.3873 12.0879 13.3924 12.2994 13.4062 12.5025C13.4217 12.7304 13.4497 12.9697 13.4818 13.1954C13.2216 13.1196 12.9395 13.0434 12.6704 12.9826C12.4465 12.9321 12.2174 12.8891 12.0099 12.8676C11.8289 12.849 11.5674 12.8345 11.3335 12.9101C10.8221 13.0754 10.2594 13.1676 9.66636 13.1676C8.96109 13.1676 8.31335 13.0424 7.74559 12.825C7.60903 12.8312 7.47147 12.8343 7.33301 12.8343C6.52993 12.8343 5.75701 12.7287 5.03385 12.5335C6.08516 13.7494 7.81828 14.501 9.66636 14.501C10.3883 14.501 11.0812 14.3901 11.7198 14.1864C11.7209 14.1865 11.723 14.1864 11.726 14.1864C11.7424 14.186 11.7879 14.1851 11.8729 14.1939C12.0067 14.2077 12.1786 14.2385 12.377 14.2833C12.7719 14.3724 13.2157 14.5038 13.5615 14.6136C14.2949 14.8464 15.0056 14.2064 14.8745 13.4621C14.8181 13.1418 14.7595 12.7508 14.7365 12.4122C14.7249 12.2419 14.7236 12.1021 14.7317 11.9995C14.7351 11.957 14.7394 11.9304 14.7421 11.9162C15.1172 11.2949 15.333 10.5874 15.333 9.83429C15.333 8.98526 15.0693 8.20995 14.6153 7.54557Z",fill:"#787A80"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.73109 4.29943C2.83245 4.98662 2.33306 5.88871 2.33306 6.83398C2.33306 7.30534 2.45577 7.75932 2.68599 8.18147C2.77367 8.34226 2.79854 8.50812 2.80744 8.6204C2.81714 8.74283 2.8123 8.86867 2.80166 8.98633C2.78034 9.22191 2.72949 9.48884 2.66849 9.75174C2.59715 10.0593 2.50572 10.3872 2.41296 10.6952C2.76512 10.5672 3.15003 10.436 3.51493 10.3296C3.80985 10.2435 4.10767 10.1689 4.37274 10.1269C4.60108 10.0908 4.93243 10.0554 5.2177 10.1541C5.85792 10.3756 6.57411 10.5007 7.33306 10.5007C8.76451 10.5007 10.0358 10.0562 10.935 9.36854C11.8337 8.68135 12.3331 7.77926 12.3331 6.83398C12.3331 5.88871 11.8337 4.98662 10.935 4.29943C10.0358 3.61176 8.76451 3.16732 7.33306 3.16732C5.90162 3.16732 4.63034 3.61176 3.73109 4.29943ZM2.92116 3.24028C4.07283 2.35959 5.63489 1.83398 7.33306 1.83398C9.03123 1.83398 10.5933 2.35959 11.745 3.24028C12.8973 4.12145 13.6664 5.38602 13.6664 6.83398C13.6664 8.28194 12.8973 9.54652 11.745 10.4277C10.5933 11.3084 9.03123 11.834 7.33306 11.834C6.43769 11.834 5.58244 11.688 4.80591 11.4224C4.80513 11.4246 4.74215 11.4184 4.58098 11.4439C4.39521 11.4733 4.15809 11.5308 3.88836 11.6095C3.35138 11.7662 2.74835 11.9878 2.28902 12.1666C1.49327 12.4763 0.682633 11.712 0.95074 10.8979C1.09284 10.4665 1.26043 9.92121 1.36966 9.45041C1.42468 9.21324 1.46039 9.01384 1.47375 8.86618C1.47839 8.81492 1.47958 8.77756 1.47932 8.7523C1.17246 8.16592 0.99973 7.51748 0.99973 6.83398C0.99973 5.38602 1.76887 4.12145 2.92116 3.24028Z",fill:"#787A80"})]})}},7678:function(e,s,i){i.d(s,{b:function(){return t}});var n=i(184),t=function(){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[(0,n.jsx)("rect",{x:"0.5",y:"0.5",width:"15",height:"15",rx:"2.5",fill:"#FF5A30",stroke:"#FF5A30"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8277 4.19526C13.0574 4.45561 13.0574 4.87772 12.8277 5.13807L6.94536 11.8047C6.71564 12.0651 6.34319 12.0651 6.11347 11.8047L3.17229 8.4714C2.94257 8.21105 2.94257 7.78894 3.17229 7.5286C3.40201 7.26825 3.77446 7.26825 4.00418 7.5286L6.52941 10.3905L11.9958 4.19526C12.2255 3.93491 12.598 3.93491 12.8277 4.19526Z",fill:"white"})]})}},4832:function(e,s,i){i.d(s,{s:function(){return t}});var n=i(184),t=function(e){var s=e.opacity,i=void 0===s?"0.6":s,t=e.width,a=void 0===t?"24":t,r=e.height,l=void 0===r?"24":r,o=e.color,c=void 0===o?"#FFFFFF":o;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:l,viewBox:"0 0 24 24",fill:"none",children:(0,n.jsx)("g",{opacity:i,children:(0,n.jsx)("path",{d:"M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z",fill:c})})})}},6238:function(e,s,i){i.d(s,{y:function(){return t}});var n=i(184),t=function(e){var s=e.width,i=void 0===s?"20":s,t=e.height,a=void 0===t?"20":t,r=e.color,l=void 0===r?"#FFFFFF":r;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:a,viewBox:"0 0 20 20",fill:"none",children:[(0,n.jsx)("path",{d:"M18.3285 18.3327L18.3327 18.332V12.2195C18.3327 9.22921 17.6889 6.92574 14.1931 6.92574C12.5125 6.92574 11.3848 7.84796 10.9243 8.72227H10.8757V7.2049H7.56115V18.332H11.0125V12.8223C11.0125 11.3716 11.2875 9.9688 13.0841 9.9688C14.8542 9.9688 14.8806 11.6244 14.8806 12.9153V18.3327H18.3285Z",fill:l}),(0,n.jsx)("path",{d:"M1.94101 7.2056H5.39657V18.3327H1.94101V7.2056Z",fill:l}),(0,n.jsx)("path",{d:"M3.6674 1.66602C2.56254 1.66602 1.66602 2.56254 1.66602 3.6674C1.66602 4.77227 2.56254 5.68754 3.6674 5.68754C4.77227 5.68754 5.66879 4.77227 5.66879 3.6674C5.6681 2.56254 4.77157 1.66602 3.6674 1.66602Z",fill:l})]})}},7823:function(e,s,i){i.d(s,{w:function(){return t}});var n=i(184),t=function(){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"20",viewBox:"0 0 28 20",fill:"none",children:[(0,n.jsx)("path",{d:"M18 8.92534C18 8.63119 18.1295 8.35196 18.3541 8.16195L28 0V19C28 19.5523 27.5523 20 27 20H19C18.4477 20 18 19.5523 18 19V8.92534Z",fill:"#FF5A30"}),(0,n.jsx)("path",{d:"M0 8.92534C0 8.63119 0.129507 8.35196 0.354058 8.16195L10 0V19C10 19.5523 9.55228 20 9 20H1C0.447715 20 0 19.5523 0 19V8.92534Z",fill:"#FF5A30"})]})}},9890:function(e,s,i){i.d(s,{t:function(){return t}});var n=i(184),t=function(e){var s=e.opacity,i=void 0===s?"0.6":s,t=e.width,a=void 0===t?"24":t,r=e.height,l=void 0===r?"24":r,o=e.color,c=void 0===o?"#FFFFFF":o;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:l,viewBox:"0 0 24 24",fill:"none",children:(0,n.jsx)("g",{opacity:i,children:(0,n.jsx)("path",{d:"M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z",fill:c})})})}},3814:function(e,s,i){i.r(s),i.d(s,{default:function(){return F}});var n=i(7689),t=i(3614),a=(i(8458),i(4557),i(1087)),r=i(8256),l=i(9085),o=i(4832),c=i(9890),m=i(6238),d=i(9434),u=i(4871),h=i(184),_=function(e){var s=e.ID,i=(0,d.v9)((function(e){return(0,u.NB)(e,s)}));if(!i)return(0,h.jsx)("div",{children:l.Am.error("Project not found")});var n=i,t=Object.keys(n.textComent).length;return(0,h.jsx)("section",{className:"heroSinglePost__section",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"heroSinglePost__wraper--content",children:[(0,h.jsxs)("p",{className:"hero__link--text",children:[(0,h.jsx)(a.OL,{className:"hero__link",to:"/",children:"Homepage"}),(0,h.jsx)("span",{className:"hero__link--span ",children:"/"}),(0,h.jsx)(a.OL,{className:"hero__link",to:"/News",children:"News"}),(0,h.jsx)("span",{className:"hero__link--span ",children:"/"}),n.nameNews]}),(0,h.jsx)("h1",{className:"heroSinglePost__title",children:n.nameNews}),(0,h.jsxs)("div",{className:"heroSinglePost__wrapper--infoBlock",children:[(0,h.jsxs)("div",{className:"heroSinglePost__wrapper--date",children:[(0,h.jsxs)("div",{className:"heroSinglePost__wrapper--categoryAndDate",children:[(0,h.jsx)("p",{className:"heroSinglePost__category",children:n.category}),(0,h.jsx)("time",{className:"heroSinglePost__date",dateTime:"",children:n.date})]}),(0,h.jsxs)("div",{className:"heroSinglePost__wrapper--comments",children:[(0,h.jsx)(r.H,{}),(0,h.jsxs)("span",{className:"heroSinglePost__comments",children:[0===t?"no":t," comments"]})]})]}),(0,h.jsxs)("ul",{className:"heroSinglePost__sicialBlock--list",children:[(0,h.jsx)("li",{className:"heroSinglePost__sicialBlock--item",children:(0,h.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",className:"heroSinglePost__social--icon",children:(0,h.jsx)(o.s,{color:"#787A80",opacity:"1"})})}),(0,h.jsx)("li",{className:"heroSinglePost__sicialBlock--item",children:(0,h.jsx)("a",{href:"https://www.linkedin.com/",rel:"noopener noreferrer",target:"_blank",className:"heroSinglePost__social--icon",children:(0,h.jsx)(m.y,{width:"24",height:"24",color:"#787A80"})})}),(0,h.jsx)("li",{className:"heroSinglePost__sicialBlock--item",children:(0,h.jsx)("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noopener noreferrer",className:"heroSinglePost__social--icon",children:(0,h.jsx)(c.t,{color:"#787A80",opacity:"1"})})})]})]})]})})})},x=i(9439),p=i(7823),g=i(8186),j=function(){return(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",children:(0,h.jsx)("path",{d:"M0.667318 7.82816L6.7625 1.16602V5.14077H8.05839C12.0766 5.14077 15.334 8.38764 15.334 12.393V14.4993L14.7584 13.8706C12.8014 11.7333 10.0324 10.5156 7.1293 10.5156H6.7625V14.4903L0.667318 7.82816Z",fill:"#787A80"})})},C=i(2791),N=i(5705),f=i(8007),v=function(e){var s=e.reply,i=e.ID,n=(0,d.I0)(),t=s,a=(0,C.useState)(t),r=(0,x.Z)(a,2),o=r[0],c=r[1];(0,C.useEffect)((function(){c(s)}),[s]);var m=(new Date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),_=f.Ry().shape({name:f.Z_().max(30,"Name must be at most 30 characters").matches(/^[A-Za-z\s]+$/,"Name can only contain letters").required("Name is required"),email:f.Z_().email("Invalid email address").required("Email is required"),message:f.Z_().max(450,"Message must be at most 450 characters").required("Message is required")}),p=(0,N.TA)({initialValues:{name:"",email:"",message:"",reply:""},validationSchema:_,onSubmit:function(e,s){var t=s.resetForm,a={name:e.name.trim(),email:e.email.trim(),reply:o,DateComent:m,textComent:e.message.trim()};n((0,u.Ir)({newsId:i,comment:a})),l.Am.success("Your comment has been successfully added."),t(),c("")}});return(0,h.jsx)("section",{className:"singleCommentForm__section",children:(0,h.jsxs)("div",{className:"singleCommentForm__container ",children:[(0,h.jsx)("h2",{className:"singleCommentForm__title",children:"Leave your comment"}),(0,h.jsxs)("form",{className:"singleCommentForm__form",onSubmit:p.handleSubmit,children:[(0,h.jsxs)("div",{className:"singleCommentForm__wrapper--infoInputs",children:[(0,h.jsxs)("div",{className:"singleCommentForm__wrapper--input",children:[(0,h.jsx)("label",{htmlFor:"name",className:"singleCommentForm__label",children:"Name*"}),(0,h.jsx)("input",{className:"singleCommentForm__input",autoComplete:"name",type:"text",id:"name",name:"name",placeholder:"Your name",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.name}),p.touched.name&&p.errors.name?(0,h.jsx)("div",{className:"footerForm__error-container",children:p.errors.name}):null]}),(0,h.jsxs)("div",{className:"singleCommentForm__wrapper--input",children:[(0,h.jsx)("label",{htmlFor:"email",className:"singleCommentForm__label",children:"Email*"}),(0,h.jsx)("input",{className:"singleCommentForm__input",autoComplete:"email",placeholder:"Your working email",type:"text",id:"email",name:"email",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.email}),p.touched.email&&p.errors.email?(0,h.jsx)("div",{className:"footerForm__error-container",children:p.errors.email}):null]})]}),(0,h.jsxs)("div",{className:"singleCommentForm__wrapper--message",children:[(0,h.jsx)("label",{htmlFor:"message",className:"singleCommentForm__label",children:"Your comment*"}),(0,h.jsx)("div",{contentEditable:!0,id:"message",className:"singleCommentForm__input singleCommentForm__input--message",onBlur:function(e){var s=e.currentTarget.innerHTML;p.setFieldValue("message",s)},dangerouslySetInnerHTML:{__html:"".concat(o)}}),p.touched.message&&p.errors.message?(0,h.jsx)("div",{className:"footerForm__error-container",children:p.errors.message}):null]}),(0,h.jsx)("div",{className:"singleCommentForm__wrapper--btn",children:(0,h.jsx)("button",{className:"singleCommentForm__button",type:"submit",children:"Post comment"})})]})]})})},w=function(e){var s=e.ID,i=(0,C.useState)(""),n=(0,x.Z)(i,2),t=n[0],a=n[1],r=(0,d.v9)((function(e){return(0,u.NB)(e,s)}));if(!r)return(0,h.jsx)("div",{children:l.Am.error("Project not found")});var _=r,N=Object.keys(_.textComent).length;return(0,h.jsxs)("section",{children:[(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)("div",{className:"singlePostNewsSection__wraper--img",children:(0,h.jsx)("img",{src:_.singleImage,alt:"News",className:"singlePostNewsSection__img"})}),(0,h.jsxs)("div",{className:"singlePostNewsSection__container",children:[(0,h.jsx)("p",{className:"singlePostNewsSection__title",children:"Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod."}),(0,h.jsxs)("p",{className:"singlePostNewsSection__text",children:["At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel. ",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non."]}),(0,h.jsxs)("div",{className:"singlePostNewsSection__wrapper--quote",children:[(0,h.jsx)("div",{className:"singlePostNewsSection__wrapper--svg",children:(0,h.jsx)(p.w,{})}),(0,h.jsx)("p",{className:"singlePostNewsSection__quote--text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum."})]}),(0,h.jsx)("p",{className:"singlePostNewsSection__text",children:"Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:"}),(0,h.jsxs)("ul",{className:"singlePostNewsSection__list",children:[(0,h.jsxs)("li",{className:"singlePostNewsSection__item",children:[(0,h.jsx)("div",{className:"singlePostNewsSection__wrapper--check",children:(0,h.jsx)(g.J,{})}),(0,h.jsx)("span",{className:"singlePostNewsSection__item--text",children:"A fermentum in morbi pretium aliquam adipiscing donec tempus."})]}),(0,h.jsxs)("li",{className:"singlePostNewsSection__item",children:[(0,h.jsx)("div",{className:"singlePostNewsSection__wrapper--check",children:(0,h.jsx)(g.J,{})}),(0,h.jsx)("span",{className:"singlePostNewsSection__item--text",children:"Vulputate placerat amet pulvinar lorem nisl."})]}),(0,h.jsxs)("li",{className:"singlePostNewsSection__item",children:[(0,h.jsx)("div",{className:"singlePostNewsSection__wrapper--check",children:(0,h.jsx)(g.J,{})}),(0,h.jsx)("span",{className:"singlePostNewsSection__item--text",children:"Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed."})]}),(0,h.jsxs)("li",{className:"singlePostNewsSection__item",children:[(0,h.jsx)("div",{className:"singlePostNewsSection__wrapper--check",children:(0,h.jsx)(g.J,{})}),(0,h.jsx)("span",{className:"singlePostNewsSection__item--text",children:"Etiam duis lobortis in fames ultrices commodo nibh."})]})]}),(0,h.jsx)("p",{className:"singlePostNewsSection__text",children:"Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae."}),(0,h.jsxs)("div",{className:"singlePostNewsSection__wrapper--socialBlock",children:[(0,h.jsx)("p",{className:"singlePostNewsSection__sicialBlock--text",children:"Share:"}),(0,h.jsxs)("ul",{className:"singlePostNewsSection__sicialBlock--list",children:[(0,h.jsx)("li",{className:"singlePostNewsSection__sicialBlock--item",children:(0,h.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",className:"singlePostNewsSection__social--icon",children:(0,h.jsx)(o.s,{color:"#787A80",opacity:"1"})})}),(0,h.jsx)("li",{className:"singlePostNewsSection__sicialBlock--item",children:(0,h.jsx)("a",{href:"https://www.linkedin.com/",rel:"noopener noreferrer",target:"_blank",className:"singlePostNewsSection__social--icon",children:(0,h.jsx)(m.y,{width:"24",height:"24",color:"#787A80"})})}),(0,h.jsx)("li",{className:"singlePostNewsSection__sicialBlock--item",children:(0,h.jsx)("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noopener noreferrer",className:"singlePostNewsSection__social--icon",children:(0,h.jsx)(c.t,{color:"#787A80",opacity:"1"})})})]})]}),(0,h.jsxs)("p",{className:"coment__title",children:[0===N?"no":N," comments"]}),(0,h.jsx)("ul",{children:Object.entries(_.textComent).map((function(e){var s=(0,x.Z)(e,2),i=s[0],n=s[1];return(0,h.jsxs)("li",{className:"comment__item",children:[(0,h.jsxs)("div",{className:"comment__info",children:[(0,h.jsx)("p",{className:"comment__name",children:n.name}),(0,h.jsx)("p",{className:"comment__date",children:n.DateComent})]}),(0,h.jsxs)("div",{className:"comment__wrapper--text",children:[(0,h.jsxs)("p",{className:"comment__text",children:[(0,h.jsx)("span",{className:"comment__text--reply",children:""===n.reply?null:n.reply})," ",n.textComent]}),(0,h.jsxs)("button",{className:"comment__btn",onClick:function(){a("@".concat(n.name))},children:[(0,h.jsx)(j,{}),(0,h.jsx)("span",{className:"comment__btn--span",children:"Reply"})]})]})]},i)}))})]})]}),(0,h.jsx)(v,{reply:t,ID:s})]})},F=function(){var e=(0,n.UO)().ID;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(_,{ID:e}),(0,h.jsx)(w,{ID:e}),(0,h.jsx)(t.s,{})]})}},8458:function(){},4557:function(){}}]);
//# sourceMappingURL=814.fd9c9660.chunk.js.map