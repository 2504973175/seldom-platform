import{d as a,r as s,o as r,c}from"./index.b7222058.js";import{_ as d}from"./_plugin-vue_export-helper.de5143a6.js";import{_ as p}from"./DataTable.d98b255d.js";import"./Tag.0f7865c5.js";import"./light.75d41d3d.js";import"./Icon.f741b2d7.js";import"./light.91468ef2.js";import"./Select.3b49b3e4.js";import"./Input.e02c91bc.js";const i=Array.from({length:46}).map((e,o)=>({name:`Edward King ${o}`,age:32,address:`London, Park Lane no. ${o}`,key:o})),m=()=>[{type:"selection",multiple:!1,disabled(e){return e.name==="Edward King 3"}},{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}],l=a({setup(){return{checkedRowKeys:s([4,1]),data:i,pagination:{pageSize:6},columns:m()}}});function k(e,o,u,f,y,g){const n=p;return r(),c(n,{"checked-row-keys":e.checkedRowKeys,"onUpdate:checked-row-keys":o[0]||(o[0]=t=>e.checkedRowKeys=t),columns:e.columns,data:e.data,pagination:e.pagination},null,8,["checked-row-keys","columns","data","pagination"])}const C=d(l,[["render",k]]);export{C as default};
