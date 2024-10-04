(()=>{"use strict";const t=window.React,e=window.wp.blocks,i=window.wp.element,n=(0,i.forwardRef)((function({icon:t,size:e=24,...n},o){return(0,i.cloneElement)(t,{width:e,height:e,...n,ref:o})})),o=window.wp.primitives,s=(0,t.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.Path,{d:"m4 5.5h2v6.5h1.5v-6.5h2v-1.5h-5.5zm16 10.5h-16v-1.5h16zm-7 4h-9v-1.5h9z"})),r=window.wp.i18n,l=JSON.parse('{"name":"simple-definition-list-blocks/term","category":"text","parent":["simple-definition-list-blocks/list","simple-definition-list-blocks/div"],"attributes":{"content":{"type":"string","source":"html","selector":"dt.wp-block-simple-definition-list-blocks-term"}},"supports":{"anchor":true,"spacing":{"padding":true,"margin":true},"typography":{"fontSize":true,"lineHeight":true}}}'),c=window.wp.blockEditor,{name:a,category:d,attributes:p,parent:m,supports:w}=l;(0,e.registerBlockType)(a,{title:`${(0,r.__)("DT Tag","simple-definition-list-blocks")} (Simple Definition List Blocks)`,description:(0,r.__)("Add a dt tag for inside the dl tag.","simple-definition-list-blocks"),category:d,icon:(0,t.createElement)(n,{icon:s}),parent:m,attributes:p,supports:w,keywords:["definition list",(0,r.__)("definition list","simple-definition-list-blocks"),"dt",(0,r.__)("dt","simple-definition-list-blocks")],edit:function({attributes:{content:e},setAttributes:i}){const n=(0,c.useBlockProps)();return(0,t.createElement)(c.RichText,{...n,tagName:"dt",onChange:t=>{i({content:t})},value:e,placeholder:(0,r.__)("Start writing dt tag contents.","simple-definition-list-blocks")})},save:function({attributes:{content:e}}){const i=c.useBlockProps.save();return(0,t.createElement)(c.RichText.Content,{...i,tagName:"dt",value:e})}})})();