(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"App_container__eSJ6i",title:"App_title__2oBiX",contacts:"App_contacts__RLy6_"}},12:function(t,e,n){t.exports={label:"Filter_label__2pNgv",input:"Filter_input__YmgBH"}},2:function(t,e,n){t.exports={form:"Phonebook_form__2eN2q",title:"Phonebook_title__2MIbi",input:"Phonebook_input__19lqA",button:"Phonebook_button__1GHn0"}},20:function(t,e,n){},3:function(t,e,n){t.exports={contacts:"Contacts_contacts__kbOkO",item:"Contacts_item__2ZI9i",span:"Contacts_span__2fbZS",button:"Contacts_button__3yWAo"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(13),s=n.n(o),r=(n(20),n(15)),i=n(5),l=n(6),u=n(9),b=n(8),m=n(14),d=n(7),h=n.n(d),p=n(2),j=n.n(p),f=n(0),_=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.contactId=h.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.clearForm(e)},t.clearForm=function(e){t.setState({name:"",number:""})},t.checkContact=function(e){console.log(t.state)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsxs)("form",{className:j.a.form,onSubmit:function(e){t.handleSubmit(e)},children:[Object(f.jsx)("h3",{className:j.a.title,children:"Name"}),Object(f.jsx)("input",{className:j.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:function(e){t.handleChange(e)}}),Object(f.jsx)("h3",{className:j.a.title,children:"Number"}),Object(f.jsx)("input",{className:j.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:function(e){t.handleChange(e)}}),Object(f.jsx)("button",{className:j.a.button,type:"submit",children:"Add Contact"})]})}}]),n}(c.a.Component),C=_,O=n(3),v=n.n(O);function x(t){var e=t.contacts,n=t.onClick;return Object(f.jsx)("ul",{className:v.a.contacts,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:v.a.item,children:[a,":",Object(f.jsx)("span",{className:v.a.span,children:c}),Object(f.jsx)("button",{type:"button",className:v.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var g=n(12),N=n.n(g);function y(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:N.a.label,children:["Find contacts by name",Object(f.jsx)("input",{className:N.a.input,type:"text",value:e,onChange:n})]})}var k=n(10),A=n.n(k),S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name===n})))alert("".concat(n," is already exists"));else{var c={id:h.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(r.a)(e))}}))}},t.filterChange=function(e){t.setState({filter:e.target.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(f.jsxs)("div",{className:A.a.container,children:[Object(f.jsx)("h1",{className:A.a.title,children:"Phonebook"}),Object(f.jsx)(C,{onSubmit:this.addContact}),Object(f.jsx)("h2",{className:A.a.contacts,children:"Contacts"}),Object(f.jsx)(y,{value:this.state.filter,onChange:this.filterChange}),Object(f.jsx)(x,{contacts:e,onClick:this.deleteContact})]})}}]),n}(c.a.Component),w=S;s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c48f9a13.chunk.js.map