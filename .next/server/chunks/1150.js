"use strict";exports.id=1150,exports.ids=[1150],exports.modules={1150:(e,a,t)=>{t.d(a,{VY:()=>k,aV:()=>E,fC:()=>h,xz:()=>M});var n=t(35108),r=t(9885),o=t(32840),i=t(8718),d=t(50433),l=t(79752),s=t(43979),c=t(73994),b=t(43408),u=t(76529);let f="Tabs",[v,m]=(0,i.b)(f,[d.Pc]),$=(0,d.Pc)(),[p,g]=v(f),C=(0,r.forwardRef)((e,a)=>{let{__scopeTabs:t,value:o,onValueChange:i,defaultValue:d,orientation:l="horizontal",dir:f,activationMode:v="automatic",...m}=e,$=(0,c.gm)(f),[g,C]=(0,b.T)({prop:o,onChange:i,defaultProp:d});return(0,r.createElement)(p,{scope:t,baseId:(0,u.M)(),value:g,onValueChange:C,orientation:l,dir:$,activationMode:v},(0,r.createElement)(s.WV.div,(0,n.Z)({dir:$,"data-orientation":l},m,{ref:a})))}),T=(0,r.forwardRef)((e,a)=>{let{__scopeTabs:t,loop:o=!0,...i}=e,l=g("TabsList",t),c=$(t);return(0,r.createElement)(d.fC,(0,n.Z)({asChild:!0},c,{orientation:l.orientation,dir:l.dir,loop:o}),(0,r.createElement)(s.WV.div,(0,n.Z)({role:"tablist","aria-orientation":l.orientation},i,{ref:a})))}),I=(0,r.forwardRef)((e,a)=>{let{__scopeTabs:t,value:i,disabled:l=!1,...c}=e,b=g("TabsTrigger",t),u=$(t),f=$69cb30bb0017df05$var$makeTriggerId(b.baseId,i),v=$69cb30bb0017df05$var$makeContentId(b.baseId,i),m=i===b.value;return(0,r.createElement)(d.ck,(0,n.Z)({asChild:!0},u,{focusable:!l,active:m}),(0,r.createElement)(s.WV.button,(0,n.Z)({type:"button",role:"tab","aria-selected":m,"aria-controls":v,"data-state":m?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:f},c,{ref:a,onMouseDown:(0,o.M)(e.onMouseDown,e=>{l||0!==e.button||!1!==e.ctrlKey?e.preventDefault():b.onValueChange(i)}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&b.onValueChange(i)}),onFocus:(0,o.M)(e.onFocus,()=>{let e="manual"!==b.activationMode;m||l||!e||b.onValueChange(i)})})))}),V=(0,r.forwardRef)((e,a)=>{let{__scopeTabs:t,value:o,forceMount:i,children:d,...c}=e,b=g("TabsContent",t),u=$69cb30bb0017df05$var$makeTriggerId(b.baseId,o),f=$69cb30bb0017df05$var$makeContentId(b.baseId,o),v=o===b.value,m=(0,r.useRef)(v);return(0,r.useEffect)(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,r.createElement)(l.z,{present:i||v},({present:t})=>(0,r.createElement)(s.WV.div,(0,n.Z)({"data-state":v?"active":"inactive","data-orientation":b.orientation,role:"tabpanel","aria-labelledby":u,hidden:!t,id:f,tabIndex:0},c,{ref:a,style:{...e.style,animationDuration:m.current?"0s":void 0}}),t&&d))});function $69cb30bb0017df05$var$makeTriggerId(e,a){return`${e}-trigger-${a}`}function $69cb30bb0017df05$var$makeContentId(e,a){return`${e}-content-${a}`}let h=C,E=T,M=I,k=V}};