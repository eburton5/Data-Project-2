﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.core.linkpreview.js'] = (new Date()).getTime();
Type.registerNamespace("_lp");_lp.a=function(n,t,i,r,u,f){this.v=Function.createDelegate(this,this.Z);this.J=n;this.G=t;this.S=r;this.F="Mouse"===r.a();this.Q=i;this.H=u;this.B=f};_lp.a.d=function(n,t,i,r,u){return new _lp.a(n,t,i,r,_b.m.e,u)};_lp.a.b=function(n,t,i,r){var u=!1;try{n.src=t;u=!0}catch(f){_js.Trace.logError(_a.a.f,"Setting src in {0}. Exception: {1} Url: {2} ImageUrl: {3}",r,f.message,i,t)}return u};_lp.a.a=function(n){var t=_a.c.get_utcNow().z().toString()+Math.random();return n+"_"+t};_lp.a.c=function(n){return n.parentNode.parentNode.parentNode};_lp.a.prototype={J:null,G:null,F:!1,Q:!1,H:null,p:null,t:null,S:null,B:null,a:function(n){this.p=n;return n},l:function(n,t,i,r){var f=!1;i.val=0;r.val=0;var u=window.document.createElement("img");if(_lp.a.b(u,n,t,"TryGetImageDimensions")){f=!0;i.val=u.width;r.val=u.height}return f},bK:function(n){var t=document.createElement("div");t.innerHTML=n;t.style.display="inline-block";var i=document.createElement("div");i.appendChild(t);return i.innerHTML},V:function(n){return this.ba(n)},i:function(n,t){var r=null;var i=0;t.val=!1;var o,f,e;if(e=this.I(n,o={val:r},f={val:i}),r=o.val,i=f.val,e){var u=this.br(n);u?i===1?this.A(u,r,i):i===2&&(this.p&&r in this.p?this.A(u,r,i):t.val=!0):_js.Trace.logWarning(_a.a.f,"AddPlayButton: Image anchor was not found")}},j:function(n){var i=n.find("a[id^='LPImageAnchor'] img");if(i&&i.length===1){var r=i[0];_js.Trace.logInfo(_a.a.f,"Unbinding ImageLoad.  Image src= "+r.src);i.unbind("load",this.v);var t=_lp.a.c(r);if(t.style.display==="none"){_js.Trace.logInfo(_a.a.f,"Removing image because Display is set to none.  Image src= "+r.src);t.parentNode.removeChild(t)}else if(!r.src){_js.Trace.logWarning(_a.a.f,"Removing image because image src is null");t.parentNode.removeChild(t)}}},k:function(n){var t=n.find("div[id^='LPPlayButtonContainer']");if(t&&t.length===1){var u=t[0];if(_b.m.a(u.parentNode.id,"LPImageAnchor")){var i=u.parentNode;$(i).unbind("click",this.J);$(i).unbind("click",this.G);var r=this.X(n[0]);r?i.href=r.href:_js.Trace.logWarning(_a.a.f,"RemovePlayButton: Preview anchor was not found")}else _js.Trace.logWarning(_a.a.f,"RemovePlayButton: Play button parent is not an image anchor");t.remove()}},m:function(n,t){t.val=null;var l=null;var c=null;var h=null;var y=null;var v=null;var a=null;var s,u,r,i,o,e,f;return f=this.C(n,t,s={val:l},u={val:c},r={val:h},i={val:y},o={val:v},e={val:a}),l=s.val,c=u.val,h=r.val,y=i.val,v=o.val,a=e.val,f},I:function(n,t,i){t.val=null;i.val=0;if(this.bH(n)){t.val=this.bw(n.id);i.val=this.bv(n.id)}t.val&&i.val===2;return!!t.val},A:function(n,t,i){var f=$(n).find("div[id^='LPPlayButtonContainer']");if(f.length>0){_js.Trace.logInfo(_a.a.f,"Play button already added. Not adding another");return}i===1?n.href=this.bb(t):i===2&&(n.href=t);this.bd(n,i);var r=this.o(9);var u=this.o(10);r.appendChild(u);n.appendChild(r);this.bc(n)},bd:function(n,t){t===1?$(n).bind("click",this.J):t===2&&$(n).bind("click",this.G)},bc:function(n){},bf:function(n){},n:function(n,t){t.val=null;var g=null;var s=null;var h=0;var i=null;var u=null;var r=null;if(_b.m.a(n.id,"LPUrlAnchor"))u=n;else{var nt=_b.m.b(n);if(!nt)return!1;u=this.X(nt);if(!u)return!1}var e,o,k,d,ut;var rt,tt,it,b,a,c,l,v;if(!(v=this.C(u,rt={val:i},tt={val:e},it={val:o},b={val:k},a={val:r},c={val:d},l={val:ut}),i=rt.val,e=tt.val,o=it.val,k=b.val,r=a.val,d=c.val,ut=l.val,v))return!1;if(r){var f=$(r).find("img");if(f.length===1&&f[0]){var ft=f[0];g=ft.src}}var w,p,y;!_b.m.a(i.id,"LPBorder_YT")&&!_b.m.a(i.id,"LPBorder_VT")||(y=this.I(i,w={val:s},p={val:h}),s=w.val,h=p.val,y)||_js.Trace.logWarning(_a.a.f,"Can't get playerUrl for {0}",n.href);t.val=new _b.cl(i,e,o,r,g,s,h);return!0},C:function(n,t,i,r,u,f,e,o){t.val=null;i.val=null;r.val=null;u.val=null;f.val=null;e.val=null;o.val=null;if(!_b.m.a(n.id,"LPUrlAnchor")){_js.Trace.logInfo(_a.a.f,"ValidatePreview: Anchor element id is invalid for {0}",n.href);return!1}if(!this.z(n,n,"div","Invalid url container",u))return!1;var c;var p,y;if(!(y=this.z(u.val,n,"td","Invalid table cell",p={val:c}),c=p.val,y)||!this.z(c,n,"tr","Invalid table row",e))return!1;var s;var w,v;(v=this.z(e.val,n,"tbody","Invalid table body",w={val:s}),s=w.val,v)||(s=e.val);var h;var a,l;return(l=this.z(s,n,"table","Invalid table",a={val:h}),h=a.val,l)?this.z(h,n,"div","Invalid border",t)?this.bJ(t.val,n,i,r,u,f,o)?!0:!1:!1:!1},bJ:function(n,t,i,r,u,f,e){i.val=null;r.val=null;u.val=null;f.val=null;e.val=null;if(!_b.m.a(n.id,"LPBorder")){_js.Trace.logInfo(_a.a.f,"ValidatePreview: Border element id is invalid for {0}",t.href);return!1}if(!this.R(n,"div")){_js.Trace.logInfo(_a.a.f,"ValidatePreview: Border element tag name is invalid for {0}",t.href);return!1}if(n.children.length!==1&&n.children.length!==2){_js.Trace.logInfo(_a.a.f,"ValidatePreview: Border element child count is invalid for {0}",t.href);return!1}var h=n.children[0];if(!this.R(h,"table")){_js.Trace.logInfo(_a.a.f,"ValidatePreview: Parent is not a table for {0}",t.href);return!1}var o=h.getElementsByTagName("div");if(o.length<2||o.length>12){_js.Trace.logInfo(_a.a.f,"ValidatePreview: Expected number of divs not found for {0}",t.href);return!1}for(var s=0;s<o.length;s++)if(_b.m.a(o[s].id,"LPDescription"))r.val=o[s];else if(_b.m.a(o[s].id,"LPTitle"))i.val=o[s];else if(_b.m.a(o[s].id,"LPUrlContainer"))u.val=o[s];else if(_b.m.a(o[s].id,"LPImageContainer")||_b.m.a(o[s].id,"LPBestFitImageContainer")||_b.m.a(o[s].id,"LPImageAlbumContainer"))f.val=o[s];else if(!_b.m.a(o[s].id,"LPPlayButtonContainer"))if(_b.m.a(o[s].id,"LPOverlayID"))e.val=o[s];else if(!_b.m.a(o[s].id,"LPSpinnerID")){_js.Trace.logInfo(_a.a.f,"ValidatePreview: Unexpected div found for {0}",t.href);return!1}return!0},R:function(n,t){return!!n&&!!n.tagName&&n.tagName.toLowerCase()===t.toLowerCase()},ba:function(n){return n.__type===_g.dV._dataContractName?this.bn(n):this.bo(n)},Y:function(n){return n.Photos.length===1?_u.R.Cc:n.Photos.length===n.TotalPhotos?_u.R.WY:n.Photos.length<n.TotalPhotos?String.format(_u.R.EV,n.TotalPhotos):_u.R.WY},bD:function(n){var s=n.__type===_g.ee._dataContractName||n.__type===_g.cY._dataContractName;var u=this.o(1);var r=this.x(u);n.ImageUrl&&this.N(n,n.Url,n.ImageUrl,r,s,!1);var t=window.document.createElement("td");if(n.Title){var o=this.q(n.Title,5);t.appendChild(o)}if(n.Description){var h=this.q(n.Description,6);t.appendChild(h)}var i=this.s(n.Url,8);i.innerHTML=n.IsVideo?_u.R.GV:_u.R.Fh;var f=this.q(null,7);f.appendChild(i);t.appendChild(f);r.appendChild(t);u.appendChild(r);var e=this.O(n);e.appendChild(u);return e},w:function(n){var t=window.document.createElement("td");n&&(t.id=_lp.a.a(n));return t},u:function(n,t,i,r){var f=n.find(String.format("td[id^='{0}']",t));if(f&&f.length===1){var u=f[0];u.colSpan=i;u.style.display=r?"table-cell":"none"}},bg:function(n,t){var i=$(n);if(t){this.u(i,"TitleCell",3,!0);this.u(i,"ImageCell",1,!0);this.u(i,"TextCell",2,!0);this.u(i,"UrlLinkCell",2,!0);this.u(i,"LPRemovePreviewContainer",1,!0)}else if(!t){this.u(i,"TitleCell",2,!0);this.u(i,"ImageCell",1,!1);this.u(i,"TextCell",2,!0);this.u(i,"UrlLinkCell",1,!0);this.u(i,"LPRemovePreviewContainer",1,!0)}},bB:function(n){var s=n.__type===_g.ee._dataContractName||n.__type===_g.cY._dataContractName;var t=this.o(1);if(n.Title){var y=this.x(t);var o=this.w("TitleCell");var v=this.q(n.Title,5);y.appendChild(o);o.appendChild(v)}var c=this.x(t);n.ImageUrl&&this.N(n,n.Url,n.ImageUrl,c,s,!1);var r=this.w("TextCell");r.style.verticalAlign="top";if(n.Description){var a=this.q(n.Description,6);r.appendChild(a)}c.appendChild(r);var l=this.x(t);var i=this.w("UrlLinkCell");i.style.maxWidth="140px";var f=this.s(n.Url,8);f.innerHTML=s?_u.R.GV:_u.R.Fh;var e=this.q(null,7);l.appendChild(i);i.appendChild(e);e.appendChild(f);var h=this.w("LPRemovePreviewContainer");h.style.width="140px";l.appendChild(h);var u=this.O(n);u.appendChild(t);this.bg(u,!1);return u},bo:function(n){return this.B.a().U().Enabled?this.bB(n):this.bD(n)},x:function(n){var t=window.document.createElement("tr");this.be(t);n.appendChild(t);return t},bn:function(n){var i=this.o(1);i.style.width="90%";var a=this.x(i);var c=this.x(i);var h=this.x(i);var t=n;t.Photos&&(t.Photos.length>1?this.bk(n,t.Photos,c):t.Photos.length===1&&this.N(n,n.Url,t.Photos[0].ImageUrl,c,!1,!0));var r=this.w(null);r.colSpan=2;if(n.Title){var v=this.q(n.Title,5);r.appendChild(v)}if(n.Description){var l=this.q(n.Description,6);r.appendChild(l)}a.appendChild(r);var f=this.s(n.Url,8);f.innerHTML=this.Y(t);var u=this.q(null,7);u.appendChild(f);var o=this.w(null);o.appendChild(u);var e=this.w("LPRemovePreviewContainer");e.style.width="140px";h.appendChild(o);h.appendChild(e);var s=this.O(n);s.appendChild(i);return s},bk:function(n,t,i){_js.Trace.logInfo(_a.a.f,"Adding images for {0}",n.Url);for(var o=this.o(13),e=t,s=e.length,u=0;u<s;++u){var f=e[u];var h=this.U(n,o,f.PhotoPageUrl,f.ThumbnailUrl,!1,!1,!0)}var r=this.w(null);r.style.position="relative";r.style.display="table-cell";r.appendChild(o);r.colSpan=2;i.appendChild(r)},N:function(n,t,i,r,u,f){var e=this.w("ImageCell");f||(e.style.width="140px");e.style.position="relative";e.style.display="none";e.style.padding="0px";e.colSpan=2;r.appendChild(e);_js.Trace.logInfo(_a.a.f,"Adding image for {0}",t);var o=null;var h=f?12:2;o=this.o(h);var s=this.U(n,o,t,i,u,f,!1);if(!s){_js.Trace.logWarning(_a.a.f,"Image anchor null for image URL {0}.",i);return}e.appendChild(o)},U:function(n,t,i,r,u,f,e){var l;var a;var v,c,h;if(!(h=this.l(r,i,v={val:l},c={val:a}),l=v.val,a=c.val,h))return null;var o=null;if(u)o=this.bm(n,3);else{var p=e?17:3;o=this.s(i,p)}t.appendChild(o);var s=null;var y=f?14:4;s=this.o(y);o.appendChild(s);$(s).bind("load",this.v);if(!_lp.a.b(s,r,i,"LinkPreviewBuilder.CreateImageLink")){$(s).unbind("load",this.v);return null}return o},bm:function(n,t){var i=null;if(this.F){i=this.o(t);var u=0;var r=null;if(n.__type===_g.ee._dataContractName){u=1;r=n.PlayerUrl}if(n.__type===_g.cY._dataContractName){r=n.Url;u=2}this.A(i,r,u);i.target="_blank"}else i=this.s(n.Url,t);return i},O:function(n){var r=window.document.createElement("div");var i=null;var u=0;if(n.__type===_g.ee._dataContractName){i=n.PlayerUrl;u=1}else if(n.__type===_g.cY._dataContractName){i=n.Url;u=2}var t;t=i?this.bp(i,u):n.__type===_g.dV._dataContractName?"LPBorder_PT":"LPBorder_GT";r.id=_lp.a.a(t);this.r(r,11);return r},bH:function(n){return this.F&&(_b.m.a(n.id,"LPBorder_YT")||_b.m.a(n.id,"LPBorder_VT"))},by:function(n){return _b.m.a(n.id,"LPBorder_PT")},bw:function(n){var r=n.split("_");var i;if(r[0]!=="LPBorder"){_js.Trace.logWarning(_a.a.f,"BorderId {0} is not video",n);return null}else if(r.length===2||r.length===3){i=r[1];if(!(i.startsWith("YT")||i.startsWith("VT"))){_js.Trace.logWarning(_a.a.f,"BorderId {0} is missing video type",n);return null}}else{_js.Trace.logWarning(_a.a.f,"BorderId {0} has wrong number of segments",n);return null}var t=i.substr(2);if(t.length>300||t.length<30){_js.Trace.logWarning(_a.a.f,"Video url {0} is invalid",t);return null}t=this.y(t,"-","+");t=this.y(t,":","/");t=this.y(t,"\\.","=");var u=_a.bj.a(t);if(i.startsWith("YT")&&!u.startsWith("https://www.youtube.com/embed/")){_js.Trace.logWarning(_a.a.f,"Player url {0} is invalid",u);return null}return this.bb(u)},bp:function(n,t){t===1;var i=_a.bj.b(n);i=this.y(i,"//+","-");i=this.y(i,"/",":");i=this.y(i,"=",".");return t===2?"LPBorder_VT"+i:"LPBorder_YT"+i},bv:function(n){var t=n.split("_");var i;if(t[0]!=="LPBorder"){_js.Trace.logWarning(_a.a.f,"BorderId {0} is not video",n);return 0}else if(t.length===2||t.length===3){i=t[1];return i.startsWith("VT")?2:1}else{_js.Trace.logWarning(_a.a.f,"BorderId {0} has wrong number of segments",n);return 0}},y:function(n,t,i){var r=new RegExp(t,"g");return n.replace(r,i)},bb:function(n){this.Q||(n=n.replace("autoplay=1","autoplay=0"));return n},Z:function(n){var r=n.target;var i;var t;var e,o,u;if(u=this.l(r.src,"",e={val:t},o={val:i}),t=e.val,i=o.val,u){if(i<=0||t<=0){_js.Trace.logWarning(_a.a.f,"Image dimension was invalid for src {0}, height {1}, width {2)",r.src,i,t);return}_js.Trace.logInfo(_a.a.f,"Loading image for src {0}, height {1}, width {2)",r.src,i,t);var f=!1;r.parentNode&&r.parentNode.parentNode&&(f=_b.m.a(r.parentNode.parentNode.id,"LPBestFitImageContainer"));if(!f){if(t>i){if(t>140){i=Math.floor(i*140/t);t=140}}else if(i>t){if(i>140){t=Math.floor(t*140/i);i=140}}else if(t>140){t=140;i=140}r.width=t;r.height=i;r.style.width=t.toString()+"px";r.style.height=i.toString()+"px"}var h=_lp.a.c(r);var s=_b.m.b(h);this.bg(s,!0)}},X:function(n){var i=null;var t=$(n).find("a[id^='LPUrlAnchor']");t&&t.length===1&&(i=t[0]);return i},br:function(n){var t=this.W(n);if(!t||!t.length){_js.Trace.logWarning(_a.a.f,"FindImageAnchor: no image anchors found under ancestor "+n.toString());return null}t.length>1&&_js.Trace.logWarning(_a.a.f,"FindImageAnchor: more than one anchor found under ancestor "+n.toString()+". Returning the first.");return t[0]},W:function(n){var i=null;var t=$(n).find("a[id^='LPImageAnchor']");t.length>0&&(i=t.toArray());return i},bq:function(n){return this.P("div[id^='LPDescription']",n)},bt:function(n){return this.P("div[id^='LPTitle']",n)},bs:function(n){return this.P("a[id^='LPImageAnchor'] img",n)},P:function(n,t){var r=null;var i=$(t).find(n);i.length===1&&i[0]&&(r=i[0]);return r},q:function(n,t){var i=this.o(t);n&&(i.innerHTML=n);return i},s:function(n,t){var i=this.o(t);i.href=n;i.target="_blank";this.bf(i);return i},o:function(n){var t;var i;switch(n){case 1:t="LPContainer";i="table";break;case 2:t="LPImageContainer";i="div";break;case 12:t="LPBestFitImageContainer";i="div";break;case 13:t="LPImageAlbumContainer";i="div";break;case 3:case 17:case 16:t="LPImageAnchor";i="a";break;case 5:t="LPTitle";i="div";break;case 6:t="LPDescription";i="div";break;case 7:t="LPUrlContainer";i="div";break;case 8:t="LPUrlAnchor";i="a";break;case 4:case 14:t=null;i="img";break;case 9:t="LPPlayButtonContainer";i="div";break;case 10:t=null;i="span";break;default:throw Error.notImplemented("Type not implemented for "+n);}var r=window.document.createElement(i);t&&(r.id=_lp.a.a(t));this.r(r,n);return r},bE:function(n,t){switch(t){case 11:n.style.marginTop="20px";n.style.marginBottom="20px";n.style.overflow="auto";n.style.display="";n.style.width="100%";break;case 1:n.style.borderTopColor="#CCCCCC";n.style.borderTopWidth="1px";n.style.borderTopStyle="solid";n.style.borderBottom=n.style.borderTop;n.style.width="80%";n.style.backgroundColor="#FFFFFF";n.style.position="relative";n.style.overflow="auto";break;case 2:n.style.marginTop="12px";n.style.backgroundColor="#FFFFFF";n.style.height="auto";n.style.width="140px";n.style.position="relative";n.style.display="table";break;case 13:n.style.marginTop="12px";n.style.backgroundColor="#FFFFFF";n.style.height="auto";n.style.position="relative";break;case 12:n.style.marginTop="12px";n.style.backgroundColor="#FFFFFF";n.style.height="auto";n.style.width="auto";n.style.position="relative";n.style.display="table";break;case 3:case 16:n.style.display="table-cell";n.style.textAlign="center";break;case 17:break;case 4:n.style.display="inline-block";n.style.marginLeft="auto";n.style.marginRight="auto";n.style.maxWidth="140px";n.style.maxHeight="140px";n.style.height="auto";n.style.width="auto";n.style.borderWidth="0px";n.setAttribute("aria-label",_u.R.Dy);break;case 14:n.style.display="inline-block";n.style.marginLeft="auto";n.style.marginRight="auto";n.style.height="auto";n.style.width="auto";n.style.maxWidth="100%";n.style.borderWidth="0px";n.setAttribute("aria-label",_u.R.Dy);break;case 5:n.style.top="0px";n.style.marginTop="8px";n.style.fontSize="21px";n.style.fontFamily="'wf_segoe-ui_semilight', 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif";n.style.color="#333333";n.style.marginLeft="14px";n.style.marginRight="14px";break;case 6:n.style.marginTop="8px";n.style.fontSize="13px";n.style.fontFamily="'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif";n.style.color="#666666";n.style.marginLeft="14px";n.style.marginRight="14px";break;case 7:n.style.marginTop="8px";n.style.marginBottom="10px";n.style.height="18px";n.style.marginLeft="14px";n.style.marginRight="14px";n.style.textOverflow="ellipsis";n.style.overflow="hidden";n.style.whiteSpace="nowrap";break;case 8:n.style.fontSize="11px";n.style.fontFamily="'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif";n.style.textDecoration="none";break;case 9:n.style.top="50%";n.style.left="50px";n.style.marginTop="-20px";n.style.position="absolute";break;case 10:n.className=this.H;n.style.color="#FFFFFF";break;default:throw Error.notImplemented("Style settings not implemented for "+t);}},E:function(n,t){var i=document.createElement("SPAN");i.style.display="none";document.body.appendChild(i);var e=$(i);e.attr("class",n);for(var o="",f=t,s=f.length,r=0;r<s;++r){var u=f[r];o+=String.format("{0}: {1};",u,e.css(u))}document.body.removeChild(i);return o},bC:function(n,t){switch(t){case 11:n.style.marginTop="20px";n.style.marginBottom="20px";n.style.overflow="auto";n.style.display="";n.style.width="100%";break;case 1:n.style.borderTopWidth="1px";n.style.borderTopStyle="solid";n.style.width="90%";n.style.backgroundColor="#FFFFFF";n.style.position="relative";n.style.overflow="auto";n.style.paddingTop="4px";n.style.paddingBottom="4px";n.style.paddingRight="4px";n.style.cssText+=this.E("ms-border-color-neutralTertiaryAlt",["border-top-color"]);n.style.borderBottom=n.style.borderTop;break;case 2:n.style.backgroundColor="#FFFFFF";n.style.height="auto";n.style.width="140px";n.style.position="relative";n.style.marginRight="4px";n.style.marginTop="3px";n.style.display="table";break;case 13:n.style.marginTop="4px";n.style.backgroundColor="#FFFFFF";n.style.height="auto";n.style.position="relative";break;case 12:n.style.marginTop="2px";n.style.backgroundColor="#FFFFFF";n.style.height="auto";n.style.width="auto";n.style.position="relative";n.style.display="table";break;case 3:case 16:n.style.display="table-cell";n.style.textAlign="center";break;case 17:break;case 4:n.style.display="inline-block";n.style.marginLeft="auto";n.style.marginRight="auto";n.style.maxWidth="140px";n.style.maxHeight="140px";n.style.height="auto";n.style.width="auto";n.style.borderWidth="0px";n.setAttribute("aria-label",_u.R.Dy);n.style.verticalAlign="bottom";break;case 14:n.style.display="inline-block";n.style.marginLeft="auto";n.style.marginRight="auto";n.style.height="auto";n.style.width="auto";n.style.maxWidth="100%";n.style.borderWidth="0px";n.setAttribute("aria-label",_u.R.Dy);break;case 5:n.style.top="0px";n.style.cssText+=this.E("ms-font-m ms-font-weight-semibold ms-bg-color-neutralsecondaryalt",["color","font-weight","font-size","font-family"]);break;case 6:n.style.maxHeight="170px";n.style.display="block";n.style.overflow="hidden";n.style.cssText+=this.E("ms-font-s ms-font-weight-regular ms-color-neutralPrimary",["color","font-weight","font-size","font-family"]);break;case 7:n.style.height="18px";n.style.textOverflow="ellipsis";n.style.overflow="hidden";n.style.whiteSpace="nowrap";break;case 8:n.style.textDecoration="none";n.style.cssText+=this.E("ms-font-s ms-font-weight-regular ms-color-neutralSecondary",["color","font-weight","font-size","font-family"]);break;case 9:n.style.top="50%";n.style.left="50px";n.style.marginTop="-20px";n.style.position="absolute";break;case 10:n.className=this.H;n.style.color="#FFFFFF";break;default:throw Error.notImplemented("Style settings not implemented for "+t);}},r:function(n,t){this.B.a().U().Enabled?this.bC(n,t):this.bE(n,t)},be:function(n){n.setAttribute("valign","top")},z:function(n,t,i,r,u){u.val=n.parentNode;if(!this.R(u.val,i)){_js.Trace.logInfo(_a.a.f,r+" for {0}",t.href);u.val=null}return!!u.val},c:function(n,t,i,r){_js.Trace.logInfo(_a.a.f,"Adding link preview for {0}",n.Url);this.g(t);n.__type===_g.cY._dataContractName&&this.p&&(this.p[n.Url]=new _lp.b(n.EmbeddedHtml));if(n.__type===_g.dV._dataContractName&&this.p){for(var e=n,u=0;u<e.Photos.length;u++){var h=e.Photos[u];this.p[h.PhotoPageUrl]=new _lp.d(e.Photos,u)}if(this.bF(i,n.Id))return}if(_b.m.j(n))this.bI(n,i);else{var o=i.find("#"+n.Id);if(!o.is("a")){_js.Trace.logWarning(_a.a.f,"Anchor for preview {0} not found",n.Url);return}var c=o[0];var f=this.V(n);r&&(f=r(f));var s=!r;this.bx(c,f,s)}},bF:function(n,t){var v=n.find("#"+t.replace(".","\\."));if(!v.is("a"))return!1;var k=v[0];var a=null;var l=null;var y=null;var b=null;var w=null;var p=null;var i=null;var e,r,u,h,f,o,s,c;if(!(c=this.C(k,e={val:a},r={val:l},u={val:y},h={val:b},f={val:w},o={val:p},s={val:i}),a=e.val,l=r.val,y=u.val,b=h.val,w=f.val,p=o.val,i=s.val,c))return!1;i&&i.parentNode.removeChild(i);return!0},bl:function(n){var t=document.createElement("div");t.style.backgroundColor="white";t.style.zIndex=10;t.style.opacity="0.5";t.style.position="absolute";t.style.top="0px";t.style.bottom="0px";t.style.left="0px";t.style.right="0px";t.id="LPOverlayID_"+n.id;t.style.width="100%";t.style.display="block";var i=document.createElement("div");i.style.position="absolute";i.style.left="50%";i.style.top="50%";i.style.width="32px";i.style.height="32px";i.id=_lp.a.a("LPSpinnerID");var r=new _fc.d(document.createElement("span"),this.S,null);r.a(_b.d.M());i.appendChild(r.B[0]);t.appendChild(i);n.appendChild(t);var u=this;_js.g.a().a(_a.a.f,"AddLoadingOverlay",function(){t&&t.parentNode&&t.parentNode.removeChild(t)},6e3)},g:function(n){if(this.t&&this.t.d.length>0){var t=this.bu(this.t);t&&n(t)}},h:function(n){var t=this.bA(n);this.T(t)},T:function(n){this.t||(this.t=new _ff.e);for(var t=0;t<this.t.d.length;t++)if(this.t.d[t].Url===n.Url)return;if(!this.t.g(n)){_js.Trace.logInfo(_a.a.f,"Adding GetLinkPreview request for "+n.Url+" to request queue.");this.t.c(n)}},bA:function(n){var t=null;t=new _g.fG;t.Id="UpdateOEmbed__"+n.id;t.Url=n.href;return t},bz:function(n){var t=null;t=new _g.fG;t.Id=n.id;t.Url=n.href;return t},bu:function(n){if(!n||!n.d.length)return null;var t=n.d[0];n.j(0);t.RequestStartTimeMilliseconds=_a.c.a().h();return t},bI:function(n,t){var u=n.Id.split("__")[1];var i=n.EmbeddedHtml;if(i){i=this.bK(i);this.p&&(this.p[n.Url]=new _lp.b(i));u=u.replace(".","\\.");var tt=t.find("#"+u);var w=tt[0];if(w){var r=null;var b=null;var y=null;var p=null;var g=null;var nt=null;var k=null;var d,s,o,f,e,h,a,v;if(!(v=this.C(w,d={val:r},s={val:b},o={val:y},f={val:p},e={val:g},h={val:nt},a={val:k}),r=d.val,b=s.val,y=o.val,p=f.val,g=e.val,nt=h.val,k=a.val,v))return;var c=!1;var l;this.i(r,l={val:c}),c=l.val}}},bx:function(n,t,i){_js.Trace.logInfo(_a.a.f,"Inserting link preview for {0}",n.href);var f=this.bG(n);if(f){_js.Trace.logInfo(_a.a.f,"Inserting before new line element {0}",f);n.parentNode.insertBefore(t,f)}else{var r=n.parentNode;if(!r.parentNode){_js.Trace.logWarning(_a.a.f,"Could not insert link preview because of undefined parent node of link parent node {0}",r);return}if(r.nextSibling){_js.Trace.logInfo(_a.a.f,"Inserting before link parent node next sibling {0}",r.nextSibling);r.parentNode.insertBefore(t,r.nextSibling)}else{_js.Trace.logInfo(_a.a.f,"Appending to child to link parent node {0}",r);r.parentNode.appendChild(t)}}if(i){var u=t.nextSibling;if(u&&u.tagName&&u.tagName.toLowerCase()==="br"){_js.Trace.logInfo(_a.a.f,"Removing preview next sibling which is a br tag");t.parentNode.removeChild(u)}}else if(!_a.UserAgent.getInstance().E){var e=document.createElement("br");t.nextSibling?t.parentNode.insertBefore(e,t.nextSibling):t.parentNode.appendChild(e)}},bG:function(n){for(var i=null,t=n.nextSibling;t;){if(t.tagName)switch(t.tagName.toLowerCase()){case"div":case"br":case"p":i=t;break}t=i?null:t.nextSibling}return i},b:function(n){if(n in this.p){var t=this.p[n];if(t.a===1)return t.b}return null},e:function(n){if(n in this.p){var t=this.p[n];if(t.a===2)return!0}return!1},d:function(n,t,i){t.val=null;i.val=-1;var r=this.p[n];if(r.a===2){t.val=r.c;i.val=r.b;return!0}return!1},f:function(n,t,i,r,u,f){}};_lp.c=function(){};_lp.c.prototype={a:function(n,t,i,r,u){return _lp.a.d(n,t,i,r,u)},b:function(n,t,i,r,u,f){var e=null;switch(u.a()){case"TouchNarrow":e=new _lp.e(n,t,i,r,u,f);break;default:e=new _lp.f(n,t,i,r,u,f);break}return e}};function LinkPreviewComponent(){}LinkPreviewComponent.$$cctor=function(){_a.p.a().a(LinkPreviewComponent)};LinkPreviewComponent.prototype={a:function(n,t,i){n.e(_lp.c).b(ILinkPreviewBuilderFactory)},b:function(){return null}};_lp.g=function(n){this.a=n};_lp.g.prototype={a:0};_lp.d=function(n,t){_lp.d.initializeBase(this,[2]);this.c=n;this.b=t};_lp.d.prototype={c:null,b:0};_lp.b=function(n){_lp.b.initializeBase(this,[1]);this.b=n};_lp.b.prototype={b:null};_lp.e=function(n,t,i,r,u,f){_lp.e.initializeBase(this,[n,t,i,r,u,f])};_lp.e.prototype={n:function(n,t){t.val=null;var f=null;var e=null;var c=null;var r=null;var u=0;var i=null;i=_b.m.b(n);if(!i)return!1;f=this.bt(i);if(!f)return!1;e=this.bq(i);if(!e)return!1;var l=this.bs(i);l&&(c=l.src);var h,o,s;!_b.m.a(i.id,"LPBorder_YT")&&!_b.m.a(i.id,"LPBorder_VT")||(s=this.I(i,h={val:r},o={val:u}),r=h.val,u=o.val,s)||_js.Trace.logWarning(_a.a.f,"Can't get playerUrl for {0}",n.href);t.val=new _b.cl(i,f,e,null,c,r,u);return!0},ba:function(n){return n.__type===_g.dV._dataContractName?this.bN(n):this.bO(n)},bO:function(n){var t=this.o(11);n.ImageUrl&&this.bL(n,t);if(n.Title){var u=this.q(n.Title,5);t.appendChild(u)}if(n.Description){var f=this.q(n.Description,6);t.appendChild(f)}var i=this.s(n.Url,8);i.innerHTML=n.IsVideo?_u.R.GV:_u.R.Fh;var r=this.q(null,7);r.appendChild(i);t.appendChild(r);return t},bN:function(n){var t=this.o(11);var i=n;if(n.Title){var f=this.q(n.Title,5);t.appendChild(f)}if(n.Description){var e=this.q(n.Description,6);t.appendChild(e)}i.Photos&&this.bM(n,i.Photos,t);var r=this.s(n.Url,8);r.innerHTML=this.Y(i);var u=this.q(null,7);u.appendChild(r);t.appendChild(u);return t},bL:function(n,t){_js.Trace.logInfo(_a.a.f,"Adding image for {0}",n.Url);var i=this.o(4);$(i).bind("load",this.v);if(!_lp.a.b(i,n.ImageUrl,n.Url,"NarrowReadingPanePreviewBuilder.AddImage")){$(i).unbind("load",this.v);return}var u=this.s(n.Url,3);u.appendChild(i);var r=this.o(2);r.appendChild(u);r.style.display="none";t.appendChild(r)},bM:function(n,t,i){_js.Trace.logInfo(_a.a.f,"Adding images for {0}",n.Url);var e=this.o(t.length===1?12:13);e.style.display="none";for(var o=t,h=o.length,f=0;f<h;++f){var s=o[f];var r=null;var u=null;if(t.length===1){r=this.o(14);$(r).bind("load",this.v);r.src=s.ImageUrl;u=this.s(n.Url,16)}else{r=this.o(15);$(r).bind("load",this.v);r.src=s.ThumbnailUrl;u=this.s(n.Url,17)}u.appendChild(r);e.appendChild(u)}i.appendChild(e)},Z:function(n){var r=n.target;var i;var t;var e,f,u;if(u=this.l(r.src,"",e={val:t},f={val:i}),t=e.val,i=f.val,u){if(i<=0||t<=0){_js.Trace.logWarning(_a.a.f,"Image dimension was invalid for src {0}, height {1}, width {2)",r.src,i,t);return}_js.Trace.logInfo(_a.a.f,"Loading image for src {0}, height {1}, width {2)",r.src,i,t);r.parentNode.parentNode.style.display="block"}},o:function(n){var t;var i;switch(n){case 11:t="LPBorder";i="div";break;case 2:t="LPImageContainer";i="div";break;case 12:t="LPBestFitImageContainer";i="div";break;case 13:t="LPImageAlbumContainer";i="div";break;case 3:case 17:case 16:t="LPImageAnchor";i="a";break;case 4:case 14:case 15:t=null;i="img";break;case 5:t="LPTitle";i="div";break;case 6:t="LPDescription";i="div";break;case 7:t="LPUrlContainer";i="div";break;case 8:t="LPUrlAnchor";i="a";break;default:throw Error.notImplemented("Type not implemented for "+n);}var r=window.document.createElement(i);t&&(r.id=_lp.a.a(t));this.bP(r,n);return r},bP:function(n,t){switch(t){case 11:n.style.borderTopColor="#CCCCCC";n.style.borderTopWidth="1px";n.style.borderTopStyle="solid";n.style.borderBottom=n.style.borderTop;n.style.width="86%";n.style.marginTop="20px";n.style.marginBottom="20px";n.style.backgroundColor="#FFFFFF";break;case 2:n.style.backgroundColor="#FFFFFF";n.style.height="140px";n.style.position="relative";n.style.marginTop="20px";break;case 12:n.style.backgroundColor="#FFFFFF";n.style.position="relative";n.style.marginTop="20px";break;case 13:n.style.backgroundColor="#FFFFFF";n.style.position="relative";n.style.marginTop="20px";break;case 3:case 16:case 17:break;case 4:n.style.display="block";n.style.marginRight="auto";n.style.marginLeft="auto";n.style.maxWidth="86%";n.style.maxHeight="140px";n.style.borderWidth="0px";break;case 15:n.style.maxHeight="140px";n.style.borderWidth="0px";break;case 14:n.style.display="block";n.style.marginRight="auto";n.style.marginLeft="auto";n.style.maxWidth="86%";n.style.height="auto";n.style.borderWidth="0px";break;case 5:n.style.marginTop="16px";n.style.fontSize="21px";n.style.fontFamily="'wf_segoe-ui_semilight', 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif";n.style.color="#333333";break;case 6:n.style.marginTop="8px";n.style.fontSize="12px";n.style.fontFamily="'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif";n.style.color="#666666";break;case 7:n.style.marginTop="8px";n.style.marginBottom="10px";n.style.textOverflow="ellipsis";n.style.overflow="hidden";n.style.height="19px";n.style.whiteSpace="nowrap";break;case 8:n.style.fontSize="12px";n.style.fontFamily="'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif";n.style.color="#666666";n.style.textDecoration="none";break;default:throw Error.notImplemented("Style settings not implemented for "+t);}}};_lp.f=function(n,t,i,r,u,f){this.bj=new _ff.e;_lp.f.initializeBase(this,[null,null,r,u,_b.d.y().a(),f]);this.L=n;this.M=t;this.K=i};_lp.f.prototype={L:null,M:null,K:null,cc:function(n){n.setAttribute("PreviewInformation",1)},bV:function(n,t,i){var o=null;var rt=null;var ut=null;var h=null;var r=null;var l=null;var ft=null;var it=0;t.val=!1;i.val=!1;var g=0;n=this.bh(n);var nt,tt,ct,lt,ot,et,ht,st;if(!(st=this.C(n,nt={val:o},tt={val:rt},ct={val:ut},lt={val:h},ot={val:r},et={val:l},ht={val:ft}),o=nt.val,rt=tt.val,ut=ct.val,h=lt.val,r=ot.val,l=et.val,ft=ht.val,st))return!1;if(r){var p=this.W(r);if(!p){_js.Trace.logInfo(_a.a.f,"Image anchors not found for {0}",n.href);return!1}for(var y=p,at=y.length,a=0;a<at;++a){var u=y[a];if(!u){_js.Trace.logInfo(_a.a.f,"Image anchor not found for {0}",n.href);return!1}var v=u.getElementsByTagName("img");var s=u.getElementsByTagName("span");if(v.length!==1){_js.Trace.logInfo(_a.a.f,"Unexpected img count {0} for {1}",v.length,n.href);return!1}var c=_b.m.a(r.id,"LPBestFitImageContainer");var vt=_b.m.a(r.id,"LPImageAlbumContainer");if(s.length!==1)_js.Trace.logInfo(_a.a.f,"Unexpected span count {0} for {1}",s.length,n.href);else{s[0].style.height="auto";s[0].style.width=c?"auto":"140px"}this.r(v[0],c?14:4);if(c)this.r(u,16);else if(vt){this.r(u,17);g++}else this.r(u,3);var yt=_b.m.a(r.id,"LPImageAlbumContainer");yt||c?this.r(r,13):this.r(r,2);var k=!1;var e=null;var f=0;var d,w,b;if(b=this.I(o,d={val:e},w={val:f}),e=d.val,f=w.val,b)if(f===1)this.A(u,e,f);else if(f===2)if(this.p&&e in this.p){this.A(u,e,f);k=!0}else t.val=!0;if(!k){u.setAttribute("PreviewInformation",2);this.D(u)}it=140}if(this.B.a().bl().Enabled&&this.by(o)&&g>1){i.val=!0;this.bl(r)}}this.be(l);this.r(h,7);h.style.width=(420-it).toString()+"px";this.r(n,8);n.setAttribute("PreviewInformation",2);this.D(n);_js.Trace.logInfo(_a.a.f,"Finished fixing link preview markup for {0}",n.href);return!0},bT:function(n){var r;var t;n=this.bh(n);var f,u;if(!(u=_lp.a.prototype.n.call(this,n,f={val:t}),t=f.val,u))return null;var i;if(t.f===1&&t.g){_js.Trace.logInfo(_a.a.f,"Constructing YouTubeLinkPreview object for {0}",n.href);i=new _g.ee;i.PlayerUrl=t.g}else if(t.f===2){_js.Trace.logInfo(_a.a.f,"Constructing OEmbedVideoPreview object for {0}",n.href);i=new _g.cY;i.EmbeddedHtml=null}else if(this.ca(t.d))i=this.bU(t.d);else{_js.Trace.logInfo(_a.a.f,"Constructing LinkPreview object for {0}",n.href);i=new _g.kJ}t.b&&(i.Title=t.b.innerHTML);t.a&&(i.Description=t.a.innerHTML);i.Url=n.href;i.ImageUrl=t.e;i.IsVideo=_b.m.a(t.c.id,"LPBorder_YT")||_b.m.a(t.c.id,"LPBorder_VT");r=this.V(i);_js.Trace.logInfo(_a.a.f,"Finished creating narrow format preview for {0}",n.href);return r},bU:function(n){for(var e=new _g.dV,f=new _ff.e,u=0;u<n.childNodes.length;u++){var t=n.childNodes[u];if(_b.m.a(t.id,"LPImageAnchor")){var i=new _g.rg;var r=null;r=t.childNodes[0].tagName==="SPAN"?t.childNodes[0].childNodes[0].src:t.childNodes[0].src;i.ThumbnailUrl=r;i.ImageUrl=r;i.PhotoPageUrl=t.href;f.c(i)}}e.Photos=f.i();return e},ca:function(n){return n?_b.m.a(n.id,"LPImageAlbumContainer")||_b.m.a(n.id,"LPBestFitImageContainer")?!0:!1:!1},D:function(n){var t=n.getAttribute("PreviewInformation");if(t===(3).toString()){_js.Trace.logInfo(_a.a.f,"Adding YouTube handler for {0}",n.href);$(n).bind("click",this.M)}else if(t===(4).toString()){_js.Trace.logInfo(_a.a.f,"Adding OEmbed video handler for {0}",n.href);$(n).bind("click",this.K)}else if(t===(2).toString()){_js.Trace.logInfo(_a.a.f,"Adding handler for {0}",n.href);$(n).bind("click",this.L)}},cb:function(n){var t=n.getAttribute("PreviewInformation");if(t===(3).toString()){_js.Trace.logInfo(_a.a.f,"Removing YouTube handler for {0}",n.href);$(n).unbind("click",this.M)}else if(t===(4).toString()){_js.Trace.logInfo(_a.a.f,"Removing oembed video handler for {0}",n.href);$(n).unbind("click",this.K)}else if(t===(2).toString()){_js.Trace.logInfo(_a.a.f,"Removing handler for {0}",n.href);$(n).unbind("click",this.L)}this.bj.f()},cd:function(n){var t=n.find("a[id^='LPImageAnchor'] img");t&&t.length===1&&t.unbind("load",this.v)},bf:function(n){n.setAttribute("PreviewInformation",2);this.D(n)},bd:function(n,t){var i=3;t===1?i=3:t===2&&(i=4);n.setAttribute("PreviewInformation",i);this.D(n)},bc:function(n){n.setAttribute("tabindex","-1")},bh:function(n){var f=n;var i=n.parentNode;if(!i){_js.Trace.logInfo(_a.a.f,"Anchor parent is null for {0}. Skipping rest of FixAnchor",n.href);return n}if(_b.m.a(n.id,"LPUrlAnchor")&&i.tagName.toLowerCase()==="pre"){_js.Trace.logInfo(_a.a.f,"Anchor parent is not Div for {0}",n.href);var t=window.document.createElement("div");t.id=_lp.a.a("LPUrlContainer");this.r(t,7);var u=n.cloneNode(!0);t.appendChild(u);var r=i.parentNode;if(!r){_js.Trace.logError(_a.a.f,"Anchor grandparent is null for {0}.",n.href);return n}r.replaceChild(t,i);f=u;_js.Trace.logInfo(_a.a.f,"Replaced anchor parent with Div for {0}",n.href)}return f},f:function(n,t,i,r,u,f){for(var s=t,g=0,h=[],a=[],tt=[],v=0;v<n.length;v++){var o=n[v];var e=o;if(_b.m.a(o.id,"LPNoLP")||_b.m.a(o.id,"NoLP")){_js.Trace.logInfo(_a.a.f,"Message was created in compose; no previews will be generated");s=!1}else if(_b.m.a(o.id,"LPlnk")||_b.m.a(o.id,"lnk")){_js.Trace.logInfo(_a.a.f,"Preview request was generated; no previews will be generated");s=!1}else if(_b.m.a(o.id,"LPImageAnchor")){var it=_b.m.c(e);this.bi(e,t,it);this.bX(e,t)}else if(_b.m.a(o.id,"LPUrlAnchor")){var d=_b.m.c(e);var l=!1;var c=!1;this.bi(e,t,d);if(t&&!d)if(i==="Mouse"||i==="TouchWide"){var nt,p,y;y=this.bV(e,nt={val:l},p={val:c}),l=nt.val,c=p.val,y}else{var k=_b.m.b(e);if(k){var b=this.bT(e);if(b){Array.add(a,b);Array.add(tt,k)}}}if(l)this.h(e);else if(c)this.T(this.bz(e));else{_js.Trace.logInfo(_a.a.f,"Message has previews created in compose; no previews will be generated");s=!1}}else if(s&&r){_js.Trace.logInfo(_a.a.f,"AnchorTagProtocolsToInterceptForLinkPreview is non-null; checking links");if(this.bZ(o,r)){g++;s=g<=1;if(s){var w=this.bW(o,t,f);w&&Array.add(h,w)}else _js.Trace.logInfo(_a.a.f,"Message has more than one link; no previews will be generated")}}}if(s&&h.length>0){_js.Trace.logInfo(_a.a.f,"Setting get link preview requests for count: {0}",h.length);u(h)}a.length>0&&this.bR(tt,a);var rt=this;this.g(function(n){var t=[];Array.add(t,n);u(t)})},bi:function(n,t,i){t?i&&this.D(n):this.cb(n)},bW:function(n,t,i){var r=null;t&&(r=this.bS(n,i));return r},bS:function(n,t){var i=null;if(!_b.m.c(n)&&this.bY(n)&&!this.bQ(n,t)){_js.Trace.logInfo(_a.a.f,"Creating link preview request for {0}",n.href);n.id=_b.m.d();this.cc(n);i=new _g.fG;i.Id=n.id;i.Url=n.href;_h.v.e(i)}return i},bY:function(n){var t=!1;var r=-1;var i=n.innerHTML.toLowerCase();t=i.indexOf(n.protocol.toLowerCase())>r&&i.indexOf(n.pathname.toLowerCase())>r;_js.Trace.logInfo(_a.a.f,"hrefMatchesLinkText {0} for {1}",t,n.href);return t},bQ:function(n,t){for(var r=!1,e=t.get(0),i=n,u=0;u<10;u++){i=i.parentNode;if(!i||i===e)break;var f=i.tagName.toLowerCase();switch(f){case"td":case"tr":case"table":_js.Trace.logInfo(_a.a.f,"Anchor {0} is in a table",n.href);r=!0;break}if(r)break}return r},bX:function(n,t){if(!t){var i=_b.m.b(n);i&&this.cd($(i))}},bZ:function(n,t){for(var u=!1,r=t,e=r.length,i=0;i<e;++i){var f=r[i];try{if(n.protocol===f){u=!0;break}}catch(o){}}return u},bR:function(n,t){for(var i=0;i<n.length;i++){var r=n[i];r.parentNode.replaceChild(t[i],r)}}};_lp.a.registerClass("_lp.a",null,ILinkPreviewBuilder);_lp.c.registerClass("_lp.c",null,ILinkPreviewBuilderFactory);LinkPreviewComponent.registerClass("LinkPreviewComponent",null,_a.iR);_lp.g.registerClass("_lp.g");_lp.d.registerClass("_lp.d",_lp.g);_lp.b.registerClass("_lp.b",_lp.g);_lp.f.registerClass("_lp.f",_lp.a);_lp.e.registerClass("_lp.e",_lp.f);LinkPreviewComponent.$$cctor();
window.scriptsLoaded['microsoft.owa.core.linkpreview.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.core.linkpreview.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }