import{v as m,r as h,j as e,B as u,a4 as g,o as j,a5 as f,S as a,T as r,L as y,Y as o,I as i,e as d,W as w}from"./index-2a85dc4d.js";import{u as b,L as v}from"./LoadingButton-344311b2.js";import{C as S}from"./Card-2f62b71b.js";import{T as n}from"./TextField-0019b7c9.js";import"./isMuiElement-b2641676.js";import"./Select-2d9c418d.js";import"./Menu-7e858bfd.js";function k(){const l=m(),c=b(),[s,t]=h.useState(!1),x=()=>{c.push("/dashboard")},p=e.jsxs(e.Fragment,{children:[e.jsxs(a,{spacing:3,children:[e.jsx(n,{name:"name",label:"Username"}),e.jsx(n,{name:"password",label:"Password",type:s?"text":"password",InputProps:{endAdornment:e.jsx(o,{position:"end",children:e.jsx(i,{onClick:()=>t(!s),edge:"end",children:e.jsx(d,{icon:s?"eva:eye-fill":"eva:eye-off-fill"})})})}}),e.jsx(n,{name:"confirmpassword",label:"Confirm Password",type:s?"text":"password",InputProps:{endAdornment:e.jsx(o,{position:"end",children:e.jsx(i,{onClick:()=>t(!s),edge:"end",children:e.jsx(d,{icon:s?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),e.jsx(v,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:x,sx:{marginTop:2},children:"Signup"})]});return e.jsxs(u,{sx:{...g({color:j(l.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(f,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),e.jsx(a,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(S,{sx:{p:5,width:1,maxWidth:420},children:[e.jsx(r,{variant:"h4",children:"Sign up to Stratton Banking Panel"}),e.jsxs(r,{variant:"body2",sx:{mt:2,mb:5},children:["Already have an account?",e.jsx(y,{variant:"subtitle2",sx:{ml:.5},href:"/login",children:"Login"})]}),p]})})]})}function F(){return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx("title",{children:" Signup | SBP "})}),e.jsx(k,{})]})}export{F as default};
