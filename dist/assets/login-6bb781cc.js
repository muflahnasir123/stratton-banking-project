import{v as x,r as h,j as e,B as m,a4 as p,o as u,a5 as g,S as t,T as n,L as r,Y as j,I as f,e as y,W as b}from"./index-2a85dc4d.js";import{u as v,L as w}from"./LoadingButton-344311b2.js";import{C as L}from"./Card-2f62b71b.js";import{T as a}from"./TextField-0019b7c9.js";import"./isMuiElement-b2641676.js";import"./Select-2d9c418d.js";import"./Menu-7e858bfd.js";function k(){const i=x(),o=v(),[s,d]=h.useState(!1),l=()=>{o.push("/dashboard")},c=e.jsxs(e.Fragment,{children:[e.jsxs(t,{spacing:3,children:[e.jsx(a,{name:"email",label:"Email address"}),e.jsx(a,{name:"password",label:"Password",type:s?"text":"password",InputProps:{endAdornment:e.jsx(j,{position:"end",children:e.jsx(f,{onClick:()=>d(!s),edge:"end",children:e.jsx(y,{icon:s?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),e.jsx(t,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{my:3},children:e.jsx(r,{variant:"subtitle2",underline:"hover",children:"Forgot password?"})}),e.jsx(w,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:l,children:"Login"})]});return e.jsxs(m,{sx:{...p({color:u(i.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(g,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),e.jsx(t,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(L,{sx:{p:5,width:1,maxWidth:420},children:[e.jsx(n,{variant:"h4",children:"Sign in to Stratton Banking Panel"}),e.jsxs(n,{variant:"body2",sx:{mt:2,mb:5},children:["Don’t have an account?",e.jsx(r,{variant:"subtitle2",sx:{ml:.5},href:"/signup",children:"Get started"})]}),c]})})]})}function E(){return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx("title",{children:" Login | SBP "})}),e.jsx(k,{})]})}export{E as default};
