define(["require","exports","module","react"],function(e,t,n){var r=e("react"),i=13,s=27,o=r.createClass({displayName:"NewTodo",handleBlur:function(e){var t=e.target,n=t.value.trim();if(n){var r=new Date;this.props.addTodo({id:r.getTime(),time:r.toLocaleString(),title:n,completed:!1}),e.target.value=""}},handleKeyup:function(e){var t=e.keyCode;(t===i||t===s)&&this.handleBlur(e)},render:function(){return r.createElement("div",null,r.createElement("h1",null,"todos"),r.createElement("input",{id:"new-todo",placeholder:"What needs to be done?",autofocus:!0,onBlur:this.handleBlur,onKeyup:this.handleKeyup}))}});n.exports=o});