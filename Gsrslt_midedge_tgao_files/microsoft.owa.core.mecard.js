﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.core.mecard.js'] = (new Date()).getTime();
Type.registerNamespace("_mc");_mc.a=function(n,t,i,r,u,f,e,o,s){this.bc=Function.createDelegate(this,this.bD);this.bb=Function.createDelegate(this,this.bC);this.ba=Function.createDelegate(this,this.bB);this.be=Function.createDelegate(this,this.bI);this.bd=Function.createDelegate(this,this.bH);this.t=-1;_mc.a.resolveInheritance();this.b=this.bP;this.f=this.j;_mc.a.initializeBase(this,[[]]);_a.b.a(n,"sessionSettings");_a.b.a(t,"chatManager");_a.b.a(i,"personaViewModelFactory");_a.b.a(r,"actionSubmitter");_a.b.a(s,"signOutCommand");_a.b.a(o,"uploadPhotoViewModelFactory");this.p=t;this.bA(n,i);this.P=r;this.F=u;this.T=f;this.X=e;this.Z=o;this.B=!this.T.a().i().Enabled;var c=this;this.U=new _C(this.bd,_a.a.i,this,_mc.a.a,function(){return c.bf()!=="AttemptingSignIn"});var l=this;this.V=new _C(this.be,_a.a.i,this,_mc.a.a,function(){return l.bf()!=="AttemptingSignOut"});this.Y=s;this.p.apcl("SignInState",this.ba);var h=_g.a.a();this.s=$a(h)||$a(h.e())||this.g.bY()?!1:h.e().bl.DisplayPhotos&&h.e().bl.SetPhoto;this.R=this.s?new _C(this.bb,_mc.a.b):null;this.by();this.G=new _pc.j(this.g.bA,[13],this.g.bA.c());this.G.c=2};_mc.a.prototype={P:null,Y:null,B:!1,U:null,V:null,R:null,s:!1,X:null,G:null,Z:null,F:null,T:null,p:null,v:null,g:null,W:!1,Q:null,S:null,E:0,c:function(){return this.g},e:function(){return this.bx(this.g.bA.dm)},bf:function(){return this.p.e()},bF:function(n){this.W=n;this.bj(_mc.a.i);return n},bE:function(n){this.Q=n;this.bj(_mc.a.d);return n},bi:function(n){this.S=n;this.bj(_mc.a.h);return n},bw:function(){return(this.g.F()&1)==1},d:function(){return String.format(_u.R.OS,this.G.e())},D:function(){return this.s?1:0},bg:function(){return this.E+this.D()-1},a:function(n){_a.b.a(n,"menuItem");if(this.t===-1){this.t=this.h.x.length-1;this.h.r(this.t,new _fm.j)}this.h.r(this.t,n);this.t+=1},bA:function(n,t){var i=new _g.d;i.MailboxType="OneOff";i.EmailAddress=n.bl.UserEmailAddress;i.RoutingType="SMTP";i.Name=n.bl.UserDisplayName;i.SipUri=n.bl.UserSipUri||null;var r=_pc.a.b(i);r.apcl("Presence",this.bc);this.g=t.e(r,_pe.c.a,!1,6);var f=[1];this.g.l(1,f,"");if(this.p.f()){var u=this.g.a();u.cG()}},bx:function(n){switch(n){case 2:return 42;case 3:return 43;case 5:return 44;case 4:return 45;case 6:return 46;case 1:return 47;case 0:default:return 48}},by:function(){if(this.s){var n=new _fm.d(_u.R.GL,null,this.R,!1,null,_u.R.Jd,"MeCardView.EditPhoto");this.h.a(n)}this.p.f()&&this.bu(this.g.bY());this.bt()},bu:function(n){var i=new _fm.d(_u.R.eA,null,this.U,!0);i.c(this.B);this.h.a(i);if(n){this.h.a(this.r(_pecs.d.h,"Online"));this.h.a(this.r(_pecs.d.V,"Offline"));this.E=4}else{this.h.a(this.r(_pecs.d.h,"Online"));this.h.a(this.r(_pecs.d.b,"Busy"));this.h.a(this.r(_pecs.d.U,"DoNotDisturb"));this.h.a(this.r(_u.R.Hv,"BeRightBack"));this.h.a(this.r(_u.R.WG,"Away"));this.E=7}var t=new _fm.d(_u.R.Ip,null,this.V,!0);t.c(!0);this.h.a(t);this.h.a(new _fm.j);this.bl()},bt:function(){this.h.a(new _fm.d(_u.R.Oz,null,new _C(this.Y,_mc.a.b)))},r:function(n,t){var i=new _fm.d(n,_pe.l.a(this.p.n(t)),new _C(this.bv(t),_a.a.i),!0);i.c(!0);return i},bv:function(n){var t=this;return function(){t.p.g("SetPresence",t.g.bA.g(),n);t.p.w(t.g.bA.g(),n)}},bl:function(){var n=!1;var t=!1;this.bi("");switch(this.p.e()){case"AttemptingSignIn":this.H(!0,_u.R.Mm);break;case"SignedIn":this.H(!1,null);t=!0;break;case"unknown":case"AttemptingSignOut":case"Disabled":case"SignedOut":this.H(!1,null);n=!0;break;case"Error":this.bi(_u.R.Ty);this.H(!1,null);n=!0;break;default:throw Error.invalidOperation("MeCardViewModel.UpdateChatMenuItemState: Unexpected SignInState: "+this.p.e()+")");}this.bG(n,t)},H:function(n,t){this.bE(t);this.bF(n)},bG:function(n,t){var e=this.D();var f=this.h.x[this.D()];f.c(!n||!this.B);for(var i=this.D()+1;i<this.bg();i++){var u=this.h.x[i];u.c(!t)}var r=this.h.x[this.bg()];r.c(!t||!this.B)},bH:function(){this.p.s(!0)},bI:function(){this.p.t(!0)},bB:function(n,t){this.bl();this.bj(_mc.a.a);this.bj(_mc.a.c)},bD:function(n,t){this.bj(_mc.a.k);this.bj(_mc.a.c);this.bj(_mc.a.j)},bC:function(){if(this.v)this.bh();else{var n=this;this.Z.a(function(t){n.v=t.a(n.F,n.P,n.X);n.v.b(function(){n.g.V()});n.bh()})}},bh:function(){this.v.a()?this.F.d(this.v):window.open(_a.cd.a(window.location.pathname,_mc.a.e),_mc.a.g,_mc.a.f);this.j(!1)}};_mc.c=function(){};_mc.c.prototype={a:function(n,t){var i=n;return i==="ContextMenuView.ContextMenuItem"?"HeaderView.MeCardPresenceContextMenuItem":i},b:function(n,t){throw Error.notImplemented();}};function MeCardComponent(){}MeCardComponent.$$cctor=function(){_a.p.a().a(MeCardComponent)};MeCardComponent.prototype={a:function(n,t,i){var r=this;n.b(_mc.b,function(){return new _mc.b(n.a(_g.bf),n.d(IChatManagerFactory),n.a(_pe.e),n.a(_a.q),n.a(_y.a),n.a(_a.h),n.a(_a.w),n.d(IUploadPhotoViewModelFactory))}).b(IMeCardViewModelFactory).a()},b:function(){return null}};_mc.b=function(n,t,i,r,u,f,e,o){this.h=n;this.c=t;this.g=i;this.b=r;this.f=u;this.d=f;this.e=e;this.i=o};_mc.b.prototype={h:null,c:null,g:null,b:null,e:null,f:null,d:null,i:null,a:function(n,t){var i=this;this.c.a(function(r){t(new _mc.a(i.h,r.a(),i.g,i.b,i.f,i.d,i.e,i.i,n))})}};_mc._TI=function(){};_mc._TI.$$cctor=function(){var r="MeCardView._tid1";new _A(r,function(){_mc._TI.b[r]===undefined&&(_mc._TI.b[r]=[null]);var t=_mc._TI._hf.childNodes[0].cloneNode(!0);var n=new _fce.c(t.children[0]);return new _B(t,[n]).R({ListPanel:n})},_fm.f,_fce.b,function(n){return new _fce.b(n,_js.a.Instance.a(_ff.a))},!1,!0,!1,0,_mc._TI.b);var u="MeCardView.EditPhoto._tid2";new _A(u,function(){_mc._TI.b[u]===undefined&&(_mc._TI.b[u]=[[[-1,4,null,null,null,"Text",null,_mc._TI.j,0,null,null,null,_u.R.GL]]]);var n=_mc._TI._hf.childNodes[1].cloneNode(!0);var t=new _fc.a(n.children[0]);return new _B(n,[t])},_fm.d,_fce.r,function(n){return new _fce.r(n,_js.a.Instance.a(_ff.c))},!1,!0,!1,0,_mc._TI.b);var f="MeCardView.EditPhoto";new _A(f,function(){_mc._TI.b[f]===undefined&&(_mc._TI.b[f]=[[[-1,4,null,null,null,"AriaRole",null,_mc._TI.d,0,null,null,0,7],[-1,0,["Command"],[_mc._TI.P],null,"ClickCommand",null,_mc._TI.J,1,null,null,null],[-1,0,["ParentContextMenu","ContextMenuPopupCloseCommand"],[_mc._TI.k,_mc._TI.M],null,"CloseMenuCommand",null,_mc._TI.K,1,null,null,null],[-1,0,["ParentContextMenu","ContextMenuPopupId"],[_mc._TI.k,_mc._TI.N],null,"ContextMenuPopupId",null,_mc._TI.L,1,null,null,0],[-1,0,["AriaLabel"],[_mc._TI.O],null,"AriaLabel",null,_mc._TI.I,1,null,null,null],[-1,5,["ParentContextMenu","IsPresenceImageShownInPersona"],[_mc._TI.k,_mc._TI.H],null,"_abs_5:_abs_6",null,null,0,null,null,null],[-1,5,["IsSelected"],[_mc._TI.Q],null,"_abs_a",null,null,0,null,null,null]]]);var t=_mc._TI._hf.childNodes[2].cloneNode(!0);var n=new _fce.r(t.children[0],_js.a.Instance.a(_ff.c));n.c("_abs_a");n.y("MeCardView.EditPhoto._tid2");return new _B(t,[n]).R({FocusControl:n})},_fm.d,_fce.n,function(n){return new _fce.n(n)},!1,!1,!1,0,_mc._TI.b);var n="MeCardView";new _A(n,function(){_mc._TI.b[n]===undefined&&(_mc._TI.b[n]=[null,[[-1,0,["MePersonaViewModel"],[_mc._TI.o],null,"DataContext",null,_mc._TI.D,1,null,null,null]],[[-1,5,["ShowEditPhotoItem"],[_mc._TI.p],null,"_abs_3",null,null,0,null,null,null]],[[-1,5,["ErrorMessage"],[_mc._TI.g],null,"hidden",null,null,0,_mc._TI.l(),null,null]],[[-1,4,null,null,null,"AriaRole",null,_mc._TI.d,0,null,null,0,1],[-1,0,["ErrorMessage"],[_mc._TI.g],null,"Text",null,_mc._TI.j,1,null,null,null]],[[-1,4,null,null,null,"SpinnerSize",null,_mc._TI.s,0,null,null,0,0],[-1,4,null,null,null,"AriaRole",null,_mc._TI.d,0,null,null,0,1],[-1,0,["IsBusy"],[_mc._TI.n],null,"IsBusy",null,_mc._TI.r,1,null,null,!1],[-1,0,["BusyMessage"],[_mc._TI.m],null,"BusyText",null,_mc._TI.q,1,null,null,null]],[[-1,0,["ContextMenuItems"],[_mc._TI.z],null,"DataSource",null,_mc._TI.x,1,null,null,null],[-1,0,["SelectedItem"],[_mc._TI.A],_mc._TI.B,"SelectedItem",_mc._TI.w,_mc._TI.y,2,null,null,null]]]);var i=_mc._TI._hf.childNodes[4].cloneNode(!0);var t=new _fce.b(_B.a(i,[0,1,2]),_js.a.Instance.a(_ff.a));t.bn("div");t.cE(!0);t.cP=!0;t.C(-1);var v=new _fc.g;var o=new _fc.c;o.D(_E.a(["ContextParent","ContextParent","DownArrowCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.h],null,"Command",null,_mc._TI.c,1));o.i("DOWNARROW");var s=new _fc.c;s.D(_E.a(["ContextParent","ContextParent","DownArrowCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.h],null,"Command",null,_mc._TI.c,1));s.i("TAB");var h=new _fc.c;h.D(_E.a(["ContextParent","ContextParent","UpArrowCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.i],null,"Command",null,_mc._TI.c,1));h.i("UPARROW");var r=new _fc.c;r.D(_E.a(["ContextParent","ContextParent","UpArrowCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.i],null,"Command",null,_mc._TI.c,1));r.i("TAB");r.j=1;var f=new _fc.c;f.D(_E.a(["ContextParent","ContextParent","LeftArrowSubMenuCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.v],null,"Command",null,_mc._TI.c,1));f.i("LEFTARROW");var e=new _fc.c;e.D(_E.a(["ContextParent","ContextParent","HomeCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.u],null,"Command",null,_mc._TI.c,1));e.i("HOME");var u=new _fc.c;u.D(_E.a(["ContextParent","ContextParent","EndCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.t],null,"Command",null,_mc._TI.c,1));u.i("END");v.a([o,s,h,r,f,e,u]);t.G([v]);t.bg(function(){var t=_mc._TI._hf.childNodes[3].cloneNode(!0).childNodes[0];var n=new _fce.n(t);n.A(_E.a(["MenuItemTemplateId"],[_mc._TI.C],null,"TemplateId",null,_mc._TI.E,1));return n});t.y("MeCardView._tid1");var a=new _fce.g(_B.a(i,[0,1,1]),_js.a.Instance.a(_js.h),_js.a.Instance.a(_ff.a));a.a=0;var y=new _fc.a(_B.a(i,[0,1,0,0]));var p=new _js.c(_B.a(i,[0,1,0]));var w=new _js.c(_B.a(i,[0,1]));var c=new _pe.b(_B.a(i,[0,0,0]),_js.a.Instance.a(_a.m));c.y("PersonaView.PresenceDisplayPictureTwoLinesDetailsPopup");var l=new _js.c(i.children[0]);return new _B(i,[l,c,w,p,y,a,t]).R({PopupContent:l,MenuListView:t})},_fm.f,_fce.l,function(n){return new _fce.l(n,_js.a.Instance.a(_fc.e),_js.a.Instance.a(_ff.c),_js.a.Instance.a(_ff.a),_js.a.Instance.a(_ff.b),_js.a.Instance.a(String))},!1,!1,!1,0,_mc._TI.b);var t="MeCardHeaderView._tid3";new _A(t,function(){_mc._TI.b[t]===undefined&&(_mc._TI.b[t]=[null]);var i=_mc._TI._hf.childNodes[0].cloneNode(!0);var n=new _fce.c(i.children[0]);return new _B(i,[n]).R({ListPanel:n})},_mc.a,_fce.b,function(n){return new _fce.b(n,_js.a.Instance.a(_ff.a))},!1,!0,!1,0,_mc._TI.b);var i="MeCardHeaderView";new _A(i,function(){_mc._TI.b[i]===undefined&&(_mc._TI.b[i]=[null,[[-1,0,["MePersonaViewModel"],[_mc._TI.o],null,"DataContext",null,_mc._TI.D,1,null,null,null]],[[-1,5,["ShowEditPhotoItem"],[_mc._TI.p],null,"_abs_c",null,null,0,null,null,null]],[[-1,5,["ErrorMessage"],[_mc._TI.g],null,"hidden",null,null,0,_mc._TI.l(),null,null]],[[-1,4,null,null,null,"AriaRole",null,_mc._TI.d,0,null,null,0,1],[-1,0,["ErrorMessage"],[_mc._TI.g],null,"Text",null,_mc._TI.j,1,null,null,null]],[[-1,4,null,null,null,"SpinnerSize",null,_mc._TI.s,0,null,null,0,0],[-1,4,null,null,null,"AriaRole",null,_mc._TI.d,0,null,null,0,1],[-1,0,["IsBusy"],[_mc._TI.n],null,"IsBusy",null,_mc._TI.r,1,null,null,!1],[-1,0,["BusyMessage"],[_mc._TI.m],null,"BusyText",null,_mc._TI.q,1,null,null,null]],[[-1,0,["ContextMenuItems"],[_mc._TI.z],null,"DataSource",null,_mc._TI.x,1,null,null,null],[-1,0,["SelectedItem"],[_mc._TI.A],_mc._TI.B,"SelectedItem",_mc._TI.w,_mc._TI.y,2,null,null,null]]]);var t=_mc._TI._hf.childNodes[5].cloneNode(!0);var n=new _fce.b(_B.a(t,[0,1,2]),_js.a.Instance.a(_ff.a));n.bn("div");n.bl=!0;n.cP=!0;var a=new _fc.g;var s=new _fc.c;s.D(_E.a(["ContextParent","ContextParent","DownArrowCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.h],null,"Command",null,_mc._TI.c,1));s.i("DOWNARROW");var u=new _fc.c;u.D(_E.a(["ContextParent","ContextParent","DownArrowCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.h],null,"Command",null,_mc._TI.c,1));u.i("TAB");u.l=!1;var h=new _fc.c;h.D(_E.a(["ContextParent","ContextParent","UpArrowCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.i],null,"Command",null,_mc._TI.c,1));h.i("UPARROW");var r=new _fc.c;r.D(_E.a(["ContextParent","ContextParent","UpArrowCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.i],null,"Command",null,_mc._TI.c,1));r.i("TAB");r.j=1;r.l=!1;var e=new _fc.c;e.D(_E.a(["ContextParent","ContextParent","LeftArrowSubMenuCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.v],null,"Command",null,_mc._TI.c,1));e.i("LEFTARROW");var f=new _fc.c;f.D(_E.a(["ContextParent","ContextParent","HomeCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.u],null,"Command",null,_mc._TI.c,1));f.i("HOME");var o=new _fc.c;o.D(_E.a(["ContextParent","ContextParent","EndCommand"],[_mc._TI.a,_mc._TI.a,_mc._TI.t],null,"Command",null,_mc._TI.c,1));o.i("END");a.a([s,u,h,r,e,f,o]);n.G([a]);n.bg(function(){var t=_mc._TI._hf.childNodes[3].cloneNode(!0).childNodes[0];var n=new _fce.n(t);n.A(_E.a(["MenuItemTemplateId"],[_mc._TI.C],null,"TemplateId",null,_mc._TI.E,1,_mc._TI.F(),null,null));return n});n.y("MeCardHeaderView._tid3");var v=new _fce.g(_B.a(t,[0,1,1]),_js.a.Instance.a(_js.h),_js.a.Instance.a(_ff.a));v.a=0;var y=new _fc.a(_B.a(t,[0,1,0,0]));var p=new _js.c(_B.a(t,[0,1,0]));var w=new _js.c(_B.a(t,[0,1]));var l=new _pe.b(_B.a(t,[0,0,0]),_js.a.Instance.a(_a.m));l.y("PersonaView.PresenceDisplayPictureTwoLinesDetailsPopup");var c=new _js.c(t.children[0]);return new _B(t,[c,l,w,p,y,v,n]).R({PopupContent:c,MenuListView:n}).b(n)},_mc.a,_fce.l,function(n){return new _fce.l(n,_js.a.Instance.a(_fc.e),_js.a.Instance.a(_ff.c),_js.a.Instance.a(_ff.a),_js.a.Instance.a(_ff.b),_js.a.Instance.a(String))},!1,!1,!1,0,_mc._TI.b)};_mc._TI.G=function(){var n=window.document.createElement("DIV");n.innerHTML="<div>   <div></div> </div><div> <span></span> </div><div> <div autoid=\"_abs_1\" class='_abs_4 ms-font-weight-regular ms-font-color-themePrimary'></div> </div><div><div></div></div><div> <div class='_abs_7 ms-font-weight-regular ms-bg-color-white'> <div class='_abs_2 ms-bg-color-white'> <span></span> </div> <div> <div class='_abs_8 ms-font-weight-regular ms-font-color-neutralPrimary'> <span></span> </div> <div class='_abs_9 ms-font-weight-regular'></div> <div autoid=\"_abs_0\"></div> </div> </div>  </div><div> <div class='_abs_d ms-font-weight-regular ms-bg-color-white o365cs-nav-contextMenu o365cs-base'> <div class='_abs_b ms-bg-color-white'> <span></span> </div> <div> <div class='_abs_e ms-font-weight-regular ms-font-color-neutralPrimary'> <span></span> </div> <div class='_abs_f ms-font-weight-regular'></div> <div role='menu'></div> </div> </div> </div>";_js.c.a().appendChild(n);return n};_mc._TI.P=function(n){return n.i};_mc._TI.k=function(n){return n.f()};_mc._TI.M=function(n){return n.k};_mc._TI.N=function(n){return n.n};_mc._TI.O=function(n){return n.s};_mc._TI.H=function(n){return _mc.a.isInstanceOfType(n)?n.bw():null};_mc._TI.Q=function(n){return n.o()};_mc._TI.o=function(n){return _mc.a.isInstanceOfType(n)?n.g:null};_mc._TI.p=function(n){return _mc.a.isInstanceOfType(n)?n.s:null};_mc._TI.g=function(n){return _mc.a.isInstanceOfType(n)?n.S:null};_mc._TI.n=function(n){return _mc.a.isInstanceOfType(n)?n.W:null};_mc._TI.m=function(n){return _mc.a.isInstanceOfType(n)?n.Q:null};_mc._TI.z=function(n){return n.h};_mc._TI.A=function(n){return n.l};_mc._TI.w=function(n){return n.bd()};_mc._TI.a=function(n){return n.L};_mc._TI.h=function(n){return _fce.l.isInstanceOfType(n)?n.k:null};_mc._TI.i=function(n){return _fce.l.isInstanceOfType(n)?n.Q:null};_mc._TI.v=function(n){return _fce.l.isInstanceOfType(n)?n.bd:null};_mc._TI.u=function(n){return _fce.l.isInstanceOfType(n)?n.w:null};_mc._TI.t=function(n){return _fce.l.isInstanceOfType(n)?n.m:null};_mc._TI.C=function(n){return n.b()};_mc._TI.j=function(n,t){n.a(t)};_mc._TI.J=function(n,t){n.be(t)};_mc._TI.K=function(n,t){n.br(t)};_mc._TI.L=function(n,t){n.v=t};_mc._TI.I=function(n,t){n.bb(t)};_mc._TI.d=function(n,t){n.I(t)};_mc._TI.D=function(n,t){n.ba(t)};_mc._TI.r=function(n,t){n.b(t)};_mc._TI.q=function(n,t){n.d(t)};_mc._TI.s=function(n,t){n.c(t)};_mc._TI.x=function(n,t){n.br(t)};_mc._TI.B=function(n,t){n.m(t)};_mc._TI.y=function(n,t){n.bf(t)};_mc._TI.c=function(n,t){n.k=t};_mc._TI.E=function(n,t){n.y(t)};_mc._TI.l=function(){_mc._TI.f||(_mc._TI.f=new _fc.n);return _mc._TI.f};_mc._TI.F=function(){_mc._TI.e||(_mc._TI.e=new _mc.c);return _mc._TI.e};_mc.a.registerClass("_mc.a",_fm.f,_y.eg);MeCardComponent.registerClass("MeCardComponent",null,_a.iR);_mc.b.registerClass("_mc.b",null,IMeCardViewModelFactory);_mc._TI.registerClass("_mc._TI");_mc.a.a="ChatSignInState";_mc.a.c="IsIMPresenceStateAvailable";_mc.a.k="PresenceImageType";_mc.a.j="MeTileAriaLabel";_mc.a.i="IsBusy";_mc.a.d="BusyMessage";_mc.a.h="ErrorMessage";_mc.a.b=_a.a.cc;_mc.a.e="PersonalSettings/EditAccount.aspx?chgPhoto=1";_mc.a.g="_blank";_mc.a.f="width=600,height=400,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no";MeCardComponent.$$cctor();_mc._TI._hf=_mc._TI.G();_mc._TI.f=null;_mc._TI.e=null;_mc._TI.b={};_mc._TI.$$cctor();
window.scriptsLoaded['microsoft.owa.core.mecard.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.core.mecard.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
