import{l as L}from"./index.b7222058.js";import{r as o}from"./HttpCommon.3165052d.js";const P={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},u=i=>{const{textColor2:a,primaryColor:e,textColorDisabled:r,closeIconColor:b,closeIconColorHover:p,closeIconColorPressed:g,closeColorHover:x,closeColorPressed:s,tabColor:d,baseColor:m,dividerColor:C,fontWeight:l,textColor1:t,borderRadius:n,fontSize:c,fontWeightStrong:S}=i;return Object.assign(Object.assign({},P),{colorSegment:d,tabFontSizeCard:c,tabTextColorLine:t,tabTextColorActiveLine:e,tabTextColorHoverLine:e,tabTextColorDisabledLine:r,tabTextColorSegment:t,tabTextColorActiveSegment:a,tabTextColorHoverSegment:a,tabTextColorDisabledSegment:r,tabTextColorBar:t,tabTextColorActiveBar:e,tabTextColorHoverBar:e,tabTextColorDisabledBar:r,tabTextColorCard:t,tabTextColorHoverCard:t,tabTextColorActiveCard:e,tabTextColorDisabledCard:r,barColor:e,closeIconColor:b,closeIconColorHover:p,closeIconColorPressed:g,closeColorHover:x,closeColorPressed:s,closeBorderRadius:n,tabColor:d,tabColorSegment:m,tabBorderColor:C,tabFontWeightActive:l,tabFontWeight:l,tabBorderRadius:n,paneTextColor:a,fontWeightStrong:S})},T={name:"Tabs",common:L,self:u},v=T;class B{login(a){return o.post("/api/user/login",a)}logout(a){return o.post("/api/user/logout",a)}register(a){return o.post("/api/user/register",a)}}const G=new B;export{G as U,u as s,v as t};
