"use strict";(self.webpackChunksoftryzen_ecosolution=self.webpackChunksoftryzen_ecosolution||[]).push([[971],{3132:function(e,a,t){t.d(a,{Z:function(){return o}});var s=t(4218),c={socialContainer:"social_socialContainer__kQXm+",socialILink:"social_socialILink__F3X2m"},n=t(184),o=function(e){var a=e.color,t=e.length;return(0,n.jsxs)("ul",{className:c.socialContainer,style:void 0===t?{}:{gap:Number(t)},children:[(0,n.jsx)("li",{className:c.socialItem,children:(0,n.jsx)("a",{href:"https://www.facebook.com/",className:c.socialILink,children:(0,n.jsx)(s.Z,{id:"facebook",style:""===a?"":a})})}),(0,n.jsx)("li",{className:c.socialItem,children:(0,n.jsx)("a",{href:"https://www.instagram.com/",className:c.socialILink,children:(0,n.jsx)(s.Z,{id:"instagram",style:""===a?"":a})})})]})}},7971:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});var s=t(5984),c=t(5705),n=t(4218),o=function(e){var a={};switch(!0){case!e.name:a.name="Name is required";break;case e.name.length>40:a.name="Enter a shorter name";break;case!e.email:a.email="Email is required";break;case!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email):a.email="Wrong Email";break;case!e.phone:a.phone="Phone is required";break;case!/^(380\d{9})?$/.test(e.phone):a.phone="Wrong phone number"}return a},l="contactForm_contactForm__jGZzV",i="contactForm_fieldForm__gwscJ",r="contactForm_fieldForm_fieldBlock__WnRx7",m="contactForm_fieldForm_fieldBlock_textarea__0IycR",_="contactForm_fieldForm_fieldBlock_error__KdYt+",d="contactForm_fieldForm_fieldBlock_textareaCounter__QGy9L",h="contactForm_textArea__Qx3Oc",x="contactForm_fieldForm_buttonWrap__f7fyH",u="contactForm_BtnSubmit__pvAfk",j="contactForm_BtnSubmit_svgWrapper__bqua0",f=t(184),p=function(){return(0,f.jsx)("div",{className:l,children:(0,f.jsx)(c.J9,{initialValues:{name:"",email:"",phone:"",text:""},validate:o,onSubmit:function(e,a){var t=a.resetForm;try{var c={id:(0,s.x0)(),name:e.name,email:e.email,phone:e.phone,text:e.text};console.log("data",c),t()}catch(n){console.log(n.message)}},children:function(e){var a=e.values,t=e.errors,s=e.touched,o=e.handleChange,l=e.setFieldValue;return(0,f.jsxs)(c.l0,{className:i,children:[(0,f.jsxs)("div",{style:{borderColor:t.name&&s.name?"#D28B8B":""},className:r,children:[(0,f.jsx)("label",{htmlFor:"name",children:"* Full name:"}),(0,f.jsx)(c.gN,{type:"text",name:"name",id:"name",value:a.name,placeholder:"John Rosie",maxLength:50}),t.name&&s.name&&(0,f.jsx)("div",{className:_,children:t.name})]}),(0,f.jsxs)("div",{style:{borderColor:t.email&&s.email?"#D28B8B":""},className:r,children:[(0,f.jsx)("label",{htmlFor:"email",children:"* E-mail:"}),(0,f.jsx)(c.gN,{type:"text",name:"email",id:"email",value:a.email,placeholder:"johnrosie@gmail.com"}),t.email&&s.email&&(0,f.jsx)("div",{className:_,children:t.email})]}),(0,f.jsxs)("div",{style:{borderColor:t.phone&&s.phone?"#D28B8B":""},className:r,children:[(0,f.jsx)("label",{htmlFor:"phone",children:"* Phone:"}),(0,f.jsx)(c.gN,{type:"phone",name:"phone",id:"phone",value:a.phone,onChange:function(e){return function(e,a){var t=e.target.value;/^\d*$/.test(t)&&a("phone",t)}(e,l)},placeholder:"380961234567",maxLength:12}),t.phone&&s.phone&&(0,f.jsx)("div",{className:_,children:t.phone})]}),(0,f.jsxs)("div",{className:"".concat(r," ").concat(h),children:[(0,f.jsx)("label",{htmlFor:"text",children:"Message:"}),(0,f.jsx)(c.gN,{className:m,as:"textarea",rows:"3",name:"text",id:"text",onChange:o,value:a.text,placeholder:"Your message",maxLength:200}),(0,f.jsxs)("span",{style:{color:200===a.text.length?"#D28B8B":""},className:d,children:[a.text.length,"/200"]})]}),(0,f.jsx)("div",{className:x,children:(0,f.jsxs)("button",{className:u,type:"button",children:["Send",(0,f.jsx)("div",{className:j,children:(0,f.jsx)(n.Z,{id:"arrow"})})]})})]})}})})},N=t(3132),v={contactsWraper:"contactInfo_contactsWraper__pRAQn",contactsItem__name:"contactInfo_contactsItem__name__OOQUy",contactsItem__info:"contactInfo_contactsItem__info__-gmve",contactsItem__svg:"contactInfo_contactsItem__svg__kUVQN",contactsItem__bodyTel:"contactInfo_contactsItem__bodyTel__xBob+",contactsSocial:"contactInfo_contactsSocial__bdFCK"},I=function(){return(0,f.jsxs)("ul",{className:v.contactsWraper,children:[(0,f.jsxs)("li",{className:v.contactsItem,children:[(0,f.jsx)("p",{className:v.contactsItem__name,children:"Phone:"}),(0,f.jsxs)("div",{className:v.contactsItem__bodyTel,children:[(0,f.jsxs)("a",{href:"tel:+380981234567",className:v.contactsItem__info,children:[(0,f.jsx)(n.Z,{id:"call",style:v.contactsItem__svg})," 38 (098) 12 34 567"]}),(0,f.jsxs)("a",{href:"tel:+380931234567",className:v.contactsItem__info,children:[(0,f.jsx)(n.Z,{id:"call",style:v.contactsItem__svg})," 38 (093) 12 34 567"]})]})]}),(0,f.jsxs)("li",{className:v.contactsItem,children:[(0,f.jsx)("p",{className:v.contactsItem__name,children:"E-mail:"}),(0,f.jsxs)("a",{href:"mailto:office@ecosolution.com",className:v.contactsItem__info,children:[(0,f.jsx)(n.Z,{id:"mail",style:v.contactsItem__svg})," ","office@ecosolution.com"]})]}),(0,f.jsxs)("li",{className:v.contactsItem,children:[(0,f.jsx)("p",{className:v.contactsItem__name,children:"Address:"}),(0,f.jsxs)("p",{className:v.contactsItem__info,children:[(0,f.jsx)(n.Z,{id:"address",style:v.contactsItem__svg})," 79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"]})]}),(0,f.jsxs)("li",{className:v.contactsItem,children:[(0,f.jsx)("p",{className:v.contactsItem__name,children:"Social Networks:"}),(0,f.jsx)(N.Z,{color:v.contactsSocial,length:"32"})]})]})},g=t(5667),b="contacts_containerContacts__achc+",F="contacts_contactsTitle__5jC9F",y="contacts_contactsWraper__qBMxt",k=function(){return(0,f.jsxs)(g.W_,{name:"Contact Us",className:b,children:[(0,f.jsx)("h2",{className:F,children:"Contact us"}),(0,f.jsxs)("div",{className:y,children:[(0,f.jsx)(I,{}),(0,f.jsx)(p,{})]})]})}}}]);
//# sourceMappingURL=971.90ebe8ad.chunk.js.map