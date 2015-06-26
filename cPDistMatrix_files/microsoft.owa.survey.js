﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.survey.js'] = (new Date()).getTime();
Type.registerNamespace("_sy");function SurveyComponent(){}SurveyComponent.$$cctor=function(){_a.p.a().a(SurveyComponent)};SurveyComponent.prototype={a:function(n,t,i){n.e(_sy.c).b(ISurveyFactory).a();n.e(_sy.e).b(ISurveyDialogViewModelFactory).a()},b:function(){return[]}};_sy.d=function(n,t,i,r,u,f,e){this.T=Function.createDelegate(this,this.bb);_sy.d.initializeBase(this,[n,t,i,r,u,f,e]);this.O=new _C(this.T,f);this.n.h(!1);this.Q=_ff.s.a(-this.P,0)};_sy.d.prototype={P:10,Q:0,O:null,a:function(){if(this.X()){this.H();return}if(!_sy.a.a){this.l.ci()||this.l.bP(_a.c.get_utcNow().b(this.Q));this.M.bl.IsBposUser&&_a.n.a().toLowerCase()==="en-us"&&this.L.a()==="Mouse"&&(!this.n.b()||this.n.b()())&&this.l.ci().b(this.P).c(_a.c.get_utcNow())<0&&this.H()}},H:function(){this.bj(this.O);this.bi(_nbs.a.he);this.dQ("HandleLaterOrDismissCommand");this.dQ("HandleLaterOrDismissButtonText");this.k(this.n.g());this.g(!0);_sy.a.a=!0},Z:function(){if(this.ba()){var n=null;!this.R()&&this.n.c()&&(n=this.n.c()(this.y,this.z,this.C));this.E.c(this.n.a(),_y.R.toString(this.y),_y.R.toString(this.z),this.C,!0,!!this.l.bl.ActiveSurvey,!1,this.v,n);this.l.bP(_a.c.get_utcNow());_h.g.a(this.l.u,OwaApplication.a);this.K.a(_a.bF,new _a.bF);this.i.a();_sy.a.a=!1}},bb:function(){this.l.bP(_a.c.get_utcNow());_h.g.a(this.l.u,OwaApplication.a);this.E.c(this.n.a(),_y.R.toString(this.y),_y.R.toString(this.z),this.C,!1,!0,!1,this.v,null);this.i.a();_sy.a.a=!1}};_sy.c=function(){};_sy.c.a=function(){var t=["default","en-029","en-au","en-bz","en-ca","en-gb","en-ie","en-in","en-jm","en-my","en-nz","en-ph","en-sg","en-tt","en-us","en-za","en-zw"];var n=_a.n.a().toLowerCase();return!Array.contains(t,n)};_sy.c.prototype={a:function(n,t,i,r,u,f,e,o,s,h,c,l,a,v){return new _sy.b(n,t,i,r,u,f,e,o,s,h,c,l,a,v)},d:function(n){var t=null;n===32?t=this.c():n===64&&(t=this.b());return t},c:function(){return new _sy.b(32,_nbs.a.Zz,null,_nbs.a.GN,_nbs.a.Jc,_nbs.a.ab,5,_nbs.a.bw,_nbs.a.Mg,_nbs.a.gQ,_nbs.a.Qf,null,null,_nbs.a.lt)},b:function(){return new _sy.b(64,_u.R.Zl,null,_u.R.dt,_u.R.ZM,_u.R.Tg,5,_u.R.GJ,_u.R.Oe,_u.R.aC,_u.R.bv,_sy.c.a,null,_u.R.cj)}};_sy.e=function(){};_sy.e.prototype={a:function(n,t,i,r,u,f,e){return t.a()===16?new _sy.d(n,t,i,r,u,f,e):new _sy.a(n,t,i,r,u,f,e)},b:function(n,t,i,r,u,f,e){var s=new _sy.c;var o=s.d(n);return o?new _sy.a(t,o,i,r,u,f,e):null}};_sy.b=function(n,t,i,r,u,f,e,o,s,h,c,l,a,v){this.T=n;this.ba=a;this.bf=l;this.bh=t;this.P=i;this.R=r;this.H=this.Q=e;this.V=o;this.W=h;if(s){this.bb=s;this.bc=c;this.bg=!0}this.L=!0;this.M=v?v:_nbs.a.jW;if(this.H===5||this.H===3){this.O=this.J=_nbs.a.fI;this.Y=this.be=_nbs.a.dA;this.Z=this.K=_nbs.a.es;this.X=this.bd=_nbs.a.ca;this.N=this.I=_nbs.a.Ba;this.bi=String.format(_nbs.a.kS,_nbs.a.fI,f);this.S=String.format(_nbs.a.kS,_nbs.a.Ba,u)}else if(this.H===2){this.O=this.J=f;this.N=this.I=u}else _a.b.k("surveyScaleToUse","The survey scale is not supported.")};_sy.b.prototype={V:null,bb:null,W:null,bc:null,T:0,bh:null,P:null,R:null,ba:null,bf:null,S:null,bi:null,bg:!1,L:!1,M:null,H:0,Q:0,O:null,Y:null,Z:null,X:null,N:null,J:null,be:null,K:null,bd:null,I:null,U:!1,a:function(){return this.T},g:function(){return this.bh},r:function(){return this.P},A:function(){return this.R},k:function(){return this.V},s:function(){return this.bb},l:function(){return this.W},t:function(){return this.bc},i:function(){return this.S},B:function(){return this.bi},d:function(){return this.H},e:function(){return this.Q},F:function(n){this.Q=n;return n},f:function(){return this.bg},z:function(){return this.L},h:function(n){this.L!==n&&(this.L=n);return n},bk:function(){return _js.d.a(this.R)?!0:!1},bj:function(){return _js.d.a(this.P)?!0:!1},c:function(){return this.ba},b:function(){return this.bf},n:function(){return this.O},p:function(){return this.Y},q:function(){return this.Z},o:function(){return this.X},m:function(){return this.N},v:function(){return this.J},E:function(n){this.J!==n&&(this.J=n);return n},x:function(){return this.be},y:function(){return this.K},G:function(n){this.K!==n&&(this.K=n);return n},w:function(){return this.bd},u:function(){return this.I},D:function(n){this.I!==n&&(this.I=n);return n},j:function(){return this.U},C:function(n){this.U=n;return n}};_sy.a=function(n,t,i,r,u,f,e){this.U=Function.createDelegate(this,this.bf);this.V=Function.createDelegate(this,this.bh);this.W=Function.createDelegate(this,this.Z);_sy.a.resolveInheritance();this.f=this.cf;this.c=this.cb;this.e=this.cd;this.d=this.cc;this.b=this.ce;_sy.a.initializeBase(this);this.L=n;this.M=u;this.K=i;this.l=r;this.m(this);this.B(!0);this.n=t;this.v=r.bl.DontShowSurveys;this.N=f;this.S=new _C(this.W,f);this.E=e;if(!this.l.X()){this.l.bx(_a.c.get_utcNow().b(-_sy.a.b));_h.g.a(this.l.u,OwaApplication.a)}this.A("SurveyDialogView")};_sy.a.prototype={L:null,E:null,S:null,G:null,N:null,n:null,y:0,z:0,C:"",l:null,K:null,M:null,v:!1,F:null,bd:function(){return String.format(_nbs.a.YF,"Survey/"+_a.n.g()+"_SurveyPrivacyStatement.htm")},bj:function(n){this.G!==n&&(this.G=n);return n},bi:function(n){this.F!==n&&(this.F=n);return n},be:function(){return this.n.d()===3||this.n.e()===3&&this.n.d()!==5&&this.n.e()!==5},R:function(){return!this.y&&!this.z},a:function(){if(this.X()){this.H();return}this.bc();if(this.n.a()===1&&this.l.bl.IsInferenceSurveyComplete){var n=!1;if((this.l.bl.CompletedSurveys&1)!=1){var t;(t=this.l).bd(t.bl.CompletedSurveys|1);n=!0}if((this.l.bl.ActiveSurvey&1)==1){this.l.L(0);n=!0}n&&_h.g.b(this.l.u,OwaApplication.a);return}this.M.bl.IsBposUser&&this.L.a()==="Mouse"&&!this.l.bl.DontShowSurveys&&(this.l.bl.CompletedSurveys&this.n.a())!==this.n.a()&&(this.l.bl.ActiveSurvey?(this.l.bl.ActiveSurvey&this.n.a())===this.n.a()&&this.l.X().B(_sy.a.c).c(_a.c.get_utcNow())<0&&this.H():this.l.X().b(_sy.a.b).c(_a.c.get_utcNow())<0&&(!this.n.b()||this.n.b()())&&this.H())},H:function(){if(this.l.bl.ActiveSurvey){this.G=new _C(this.U,this.N);this.F=_u.R.Qg}else{this.G=new _C(this.V,this.N);this.F=_nbs.a.he}this.dQ("HandleLaterOrDismissCommand");this.dQ("HandleLaterOrDismissButtonText");this.k(this.n.g());this.g(!0);_sy.a.a=!0},Z:function(){if(this.ba()){var t=null;!this.R()&&this.n.c()&&(t=this.n.c()(this.y,this.z,this.C));this.E.c(this.n.a(),_y.R.toString(this.y),_y.R.toString(this.z),this.C,!0,!!this.l.bl.ActiveSurvey,!1,this.v,t);this.l.bx(_a.c.get_utcNow());this.l.L(0);var n;(n=this.l).bd(n.bl.CompletedSurveys|this.n.a());this.l.bf(this.v);_h.g.a(this.l.u,OwaApplication.a);this.K.a(_a.bF,new _a.bF);this.i.a();_sy.a.a=!1}},bh:function(){this.l.bx(_a.c.get_utcNow());this.l.L(this.n.a());this.l.bf(this.v);_h.g.a(this.l.u,OwaApplication.a);this.E.c(this.n.a(),_y.R.toString(this.y),_y.R.toString(this.z),this.C,!1,!0,!1,this.v,null);this.i.a();_sy.a.a=!1},bf:function(){this.l.bx(_a.c.get_utcNow());this.l.L(0);var t;(t=this.l).bd(t.bl.CompletedSurveys|this.n.a());var n;(n=this.l).cz(n.bl.DismissedSurveys|this.n.a());this.l.bf(this.v);_h.g.a(this.l.u,OwaApplication.a);this.E.c(this.n.a(),_y.R.toString(this.y),_y.R.toString(this.z),this.C,!1,!1,!0,this.v,null);this.i.a();_sy.a.a=!1},ba:function(){var t=!0;var n=new _ff.e;if(!this.R()||!this.v){if(!this.y){n.c(this.n.l());t=!1}if(this.n.f()&&!this.z){n.c(this.n.t());t=!1}n.d.length>0&&_a.S.b(n.i(),0)}return t},bc:function(){if(!(this.l.bl.ActiveSurvey===this.n.a())&&!!this.l.bl.ActiveSurvey&&this.l.X().b(_sy.a.b).c(_a.c.get_utcNow())<0){this.l.L(0);_h.g.a(this.l.u,OwaApplication.a)}},X:function(){var n=_a.A.e(window.location.href,"survey");return this.n.j()||n&&n==="1"||this.n.b()()&&n==="2"?!0:!1}};_sy._TI=function(){};_sy._TI.$$cctor=function(){var f="SurveyDialogView._tid1";new _A(f,function(){_sy._TI.b[f]===undefined&&(_sy._TI.b[f]=[[[-1,0,["Survey","FirstQuestion"],[_sy._TI.a,_sy._TI.C],null,"Text",null,_sy._TI.c,1,null,null,null],[-1,5,["Survey","FirstQuestionScale"],[_sy._TI.a,_sy._TI.l],null,"_sy_k",null,null,0,new _js.j([_sy._TI.h(),_sy._TI.g()],[5,null]),null,null]],[[-1,0,["Survey","BestOptionText"],[_sy._TI.a,_sy._TI.q],null,"Text",null,_sy._TI.c,1,null,null,null]],[[-1,0,["Survey","WorstOptionText"],[_sy._TI.a,_sy._TI.r],null,"Text",null,_sy._TI.c,1,null,null,null]],[[-1,4,null,null,null,"Data",null,_sy._TI.f,0,null,null,null,1],[-1,0,["Survey","FirstQuestionFirstRadioButtonText"],[_sy._TI.a,_sy._TI.E],null,"Text",null,_sy._TI.d,1,null,null,null],[-1,5,["ShouldUseThreeLevelScaleSpacing"],[_sy._TI.i],null,"_sy_9",null,null,0,null,null,null]],[[-1,4,null,null,null,"Data",null,_sy._TI.f,0,null,null,null,2],[-1,0,["Survey","FirstQuestionSecondRadioButtonText"],[_sy._TI.a,_sy._TI.G],null,"Text",null,_sy._TI.d,1,null,null,null],[-1,0,["Survey","FirstQuestionScale"],[_sy._TI.a,_sy._TI.l],null,"IsHidden",null,_sy._TI.e,1,new _js.j([_sy._TI.h(),_sy._TI.g()],[5,null]),null,!0]],[[-1,4,null,null,null,"Data",null,_sy._TI.f,0,null,null,null,3],[-1,0,["Survey","FirstQuestionThirdRadioButtonText"],[_sy._TI.a,_sy._TI.H],null,"Text",null,_sy._TI.d,1,null,null,null],[-1,0,["Survey","FirstQuestionScale"],[_sy._TI.a,_sy._TI.l],null,"IsHidden",null,_sy._TI.e,1,_sy._TI.h(),2,!0],[-1,5,["ShouldUseThreeLevelScaleSpacing"],[_sy._TI.i],null,"_sy_9",null,null,0,null,null,null]],[[-1,4,null,null,null,"Data",null,_sy._TI.f,0,null,null,null,4],[-1,0,["Survey","FirstQuestionFourthRadioButtonText"],[_sy._TI.a,_sy._TI.F],null,"Text",null,_sy._TI.d,1,null,null,null],[-1,0,["Survey","FirstQuestionScale"],[_sy._TI.a,_sy._TI.l],null,"IsHidden",null,_sy._TI.e,1,new _js.j([_sy._TI.h(),_sy._TI.g()],[5,null]),null,!0]],[[-1,4,null,null,null,"Data",null,_sy._TI.f,0,null,null,null,5],[-1,0,["Survey","FirstQuestionFifthRadioButtonText"],[_sy._TI.a,_sy._TI.D],null,"Text",null,_sy._TI.d,1,null,null,null],[-1,5,["ShouldUseThreeLevelScaleSpacing"],[_sy._TI.i],null,"_sy_9",null,null,0,null,null,null]]]);var n=_sy._TI._hf.childNodes[0].cloneNode(!0);var u=new _fce.i(n.children[5]);u.y("SurveyDialogView.CustomRadioButton");u.C(0);var e=new _fce.i(n.children[4]);e.y("SurveyDialogView.CustomRadioButton");e.C(0);var r=new _fce.i(n.children[3]);r.y("SurveyDialogView.CustomRadioButton");r.C(0);var t=new _fce.i(n.children[2]);t.y("SurveyDialogView.CustomRadioButton");t.C(0);var i=new _fce.i(n.children[1]);i.y("SurveyDialogView.CustomRadioButton");i.C(0);var h=new _fc.a(_B.a(n,[0,2]));h.C(0);var s=new _fc.a(_B.a(n,[0,1]));s.C(0);var o=new _fc.a(_B.a(n,[0,0]));o.C(0);return new _B(n,[o,s,h,i,t,r,e,u])},_sy.a,_fce.h,function(n){return new _fce.h(n)},!1,!0,!1,0,_sy._TI.b);var u="SurveyDialogView._tid2";new _A(u,function(){_sy._TI.b[u]===undefined&&(_sy._TI.b[u]=[[[-1,0,["Survey","SecondQuestion"],[_sy._TI.a,_sy._TI.J],null,"Text",null,_sy._TI.c,1,null,null,null],[-1,5,["Survey","SecondQuestionScale"],[_sy._TI.a,_sy._TI.m],null,"_sy_k",null,null,0,new _js.j([_sy._TI.h(),_sy._TI.g()],[5,null]),null,null]],[[-1,0,["Survey","BestOptionText"],[_sy._TI.a,_sy._TI.q],null,"Text",null,_sy._TI.c,1,null,null,null]],[[-1,0,["Survey","WorstOptionText"],[_sy._TI.a,_sy._TI.r],null,"Text",null,_sy._TI.c,1,null,null,null]],[[-1,4,null,null,null,"Data",null,_sy._TI.f,0,null,null,null,1],[-1,0,["Survey","SecondQuestionFirstRadioButtonText"],[_sy._TI.a,_sy._TI.L],null,"Text",null,_sy._TI.d,1,null,null,null],[-1,5,["ShouldUseThreeLevelScaleSpacing"],[_sy._TI.i],null,"_sy_9",null,null,0,null,null,null]],[[-1,4,null,null,null,"Data",null,_sy._TI.f,0,null,null,null,2],[-1,0,["Survey","SecondQuestionSecondRadioButtonText"],[_sy._TI.a,_sy._TI.N],null,"Text",null,_sy._TI.d,1,null,null,null],[-1,0,["Survey","SecondQuestionScale"],[_sy._TI.a,_sy._TI.m],null,"IsHidden",null,_sy._TI.e,1,new _js.j([_sy._TI.h(),_sy._TI.g()],[5,null]),null,!0]],[[-1,4,null,null,null,"Data",null,_sy._TI.f,0,null,null,null,3],[-1,0,["Survey","SecondQuestionThirdRadioButtonText"],[_sy._TI.a,_sy._TI.O],null,"Text",null,_sy._TI.d,1,null,null,null],[-1,0,["Survey","SecondQuestionScale"],[_sy._TI.a,_sy._TI.m],null,"IsHidden",null,_sy._TI.e,1,_sy._TI.h(),2,!0],[-1,5,["ShouldUseThreeLevelScaleSpacing"],[_sy._TI.i],null,"_sy_9",null,null,0,null,null,null]],[[-1,4,null,null,null,"Data",null,_sy._TI.f,0,null,null,null,4],[-1,0,["Survey","SecondQuestionFourthRadioButtonText"],[_sy._TI.a,_sy._TI.M],null,"Text",null,_sy._TI.d,1,null,null,null],[-1,0,["Survey","SecondQuestionScale"],[_sy._TI.a,_sy._TI.m],null,"IsHidden",null,_sy._TI.e,1,new _js.j([_sy._TI.h(),_sy._TI.g()],[5,null]),null,!0]],[[-1,4,null,null,null,"Data",null,_sy._TI.f,0,null,null,null,5],[-1,0,["Survey","SecondQuestionFifthRadioButtonText"],[_sy._TI.a,_sy._TI.K],null,"Text",null,_sy._TI.d,1,null,null,null],[-1,5,["ShouldUseThreeLevelScaleSpacing"],[_sy._TI.i],null,"_sy_9",null,null,0,null,null,null]]]);var n=_sy._TI._hf.childNodes[0].cloneNode(!0);var f=new _fce.i(n.children[5]);f.y("SurveyDialogView.CustomRadioButton");f.C(0);var e=new _fce.i(n.children[4]);e.y("SurveyDialogView.CustomRadioButton");e.C(0);var r=new _fce.i(n.children[3]);r.y("SurveyDialogView.CustomRadioButton");r.C(0);var t=new _fce.i(n.children[2]);t.y("SurveyDialogView.CustomRadioButton");t.C(0);var i=new _fce.i(n.children[1]);i.y("SurveyDialogView.CustomRadioButton");i.C(0);var h=new _fc.a(_B.a(n,[0,2]));h.C(0);var s=new _fc.a(_B.a(n,[0,1]));s.C(0);var o=new _fc.a(_B.a(n,[0,0]));o.C(0);return new _B(n,[o,s,h,i,t,r,e,f])},_sy.a,_fce.h,function(n){return new _fce.h(n)},!1,!0,!1,0,_sy._TI.b);var o="SurveyDialogView._tid3";new _A(o,function(){_sy._TI.b[o]===undefined&&(_sy._TI.b[o]=[[[-1,4,null,null,null,"Text",null,_sy._TI.c,0,null,null,null,_nbs.a.XD]]]);var n=_sy._TI._hf.childNodes[1].cloneNode(!0);var t=new _fc.a(n.children[0]);return new _B(n,[t])},_sy.a,_fc.b,function(n){return new _fc.b(n)},!1,!0,!1,0,_sy._TI.b);var e="SurveyDialogView._tid4";new _A(e,function(){_sy._TI.b[e]===undefined&&(_sy._TI.b[e]=[[[-1,0,["HandleLaterOrDismissButtonText"],[_sy._TI.X],null,"Text",null,_sy._TI.c,1,null,null,null]]]);var n=_sy._TI._hf.childNodes[2].cloneNode(!0);var t=new _fc.a(n.children[0]);return new _B(n,[t])},_sy.a,_fc.b,function(n){return new _fc.b(n)},!1,!0,!1,0,_sy._TI.b);var t="SurveyDialogView.CustomRadioButton";new _A(t,function(){_sy._TI.b[t]===undefined&&(_sy._TI.b[t]=[null,[[-1,1,["Text"],[_sy._TI.u],null,"Text",null,_sy._TI.c,1,null,null,null]]]);var n=_sy._TI._hf.childNodes[3].cloneNode(!0);var r=new _fc.a(n.children[1]);var i=new _js.c(n.children[0]);return new _B(n,[i,r]).R({RadioButton:i,RadioButtonText:r})},Object,_fce.i,function(n){return new _fce.i(n)},!1,!1,!1,0,_sy._TI.b);var n="SurveyDialogView.CustomButton._tid5";new _A(n,function(){_sy._TI.b[n]===undefined&&(_sy._TI.b[n]=[[[-1,0,["Label"],[_sy._TI.B],null,"Text",null,_sy._TI.c,1,null,null,null]]]);var i=_sy._TI._hf.childNodes[4].cloneNode(!0);var t=new _fc.a(i.children[0]);return new _B(i,[t]).R({Label:t})},_ff.f,_fc.b,function(n){return new _fc.b(n)},!1,!0,!1,0,_sy._TI.b);var r="SurveyDialogView.CustomButton";new _A(r,function(){_sy._TI.b[r]===undefined&&(_sy._TI.b[r]=[[[-1,0,["ClickCommand"],[_sy._TI.z],null,"ClickCommand",null,_sy._TI.n,1,null,null,null],[-1,0,["IsHidden"],[_sy._TI.A],null,"IsHidden",null,_sy._TI.e,1,null,null,!0]]]);var t=_sy._TI._hf.childNodes[5].cloneNode(!0);var n=new _fc.b(t.children[0]);n.b(1);n.y("SurveyDialogView.CustomButton._tid5");return new _B(t,[n])},_ff.f,_js.b,function(n){return new _js.b(n)},!1,!1,!1,0,_sy._TI.b);var i="SurveyDialogView";new _A(i,function(){_sy._TI.b[i]===undefined&&(_sy._TI.b[i]=[[[-1,0,["Survey","Message"],[_sy._TI.a,_sy._TI.I],null,"Text",null,_sy._TI.c,1,null,null,null],[-1,0,["Survey","IsNullOrEmptyMessage"],[_sy._TI.a,_sy._TI.T],null,"IsHidden",null,_sy._TI.e,1,null,null,!0]],[[-1,0,["Survey","Statement"],[_sy._TI.a,_sy._TI.R],null,"Text",null,_sy._TI.c,1,null,null,null],[-1,0,["Survey","IsNullOrEmptyStatement"],[_sy._TI.a,_sy._TI.U],null,"IsHidden",null,_sy._TI.e,1,null,null,!0]],[[-1,0,["FirstQuestionAnswer"],[_sy._TI.W],_sy._TI.be,"SelectedOptionData",_sy._TI.o,_sy._TI.p,2,null,null,null]],[[-1,0,["SecondQuestionAnswer"],[_sy._TI.ba],_sy._TI.bf,"SelectedOptionData",_sy._TI.o,_sy._TI.p,2,null,null,null],[-1,0,["Survey","ShowSecondQuestion"],[_sy._TI.a,_sy._TI.Q],null,"IsHidden",null,_sy._TI.e,1,_sy._TI.g(),null,!0]],[[-1,0,["Survey","CommentsLabel"],[_sy._TI.a,_sy._TI.S],null,"Text",null,_sy._TI.c,1,null,null,null]],[[-1,0,["FeedbackComments"],[_sy._TI.V],_sy._TI.bd,"Text",_sy._TI.v,_sy._TI.w,2,null,null,null]],[[-1,4,null,null,null,"Text",null,_sy._TI.d,0,null,null,null,_nbs.a.WV],[-1,0,["SurveyDontShowAgainStatus"],[_sy._TI.bc],_sy._TI.bg,"IsChecked",_sy._TI.x,_sy._TI.y,2,null,null,!1],[-1,0,["Survey","ShowDontShowAgainCheckBox"],[_sy._TI.a,_sy._TI.P],null,"IsHidden",null,_sy._TI.e,1,_sy._TI.g(),null,!0]],[[-1,0,["SendFeedbackCommand"],[_sy._TI.bb],null,"ClickCommand",null,_sy._TI.n,1,null,null,null]],[[-1,0,["HandleLaterOrDismissCommand"],[_sy._TI.Y],null,"ClickCommand",null,_sy._TI.n,1,null,null,null]],[[-1,4,null,null,null,"Text",null,_sy._TI.c,0,null,null,null,_nbs.a.Ew]],[[-1,4,null,null,null,"Text",null,_sy._TI.c,0,null,null,null,_nbs.a.JG]],[[-1,0,["PrivacyNotice"],[_sy._TI.Z],null,"Html",null,_sy._TI.t,1,null,null,null]],[[-1,4,null,null,null,"Text",null,_sy._TI.c,0,null,null,null,_nbs.a.bh]]]);var n=_sy._TI._hf.childNodes[6].cloneNode(!0);var l=new _fc.a(n.children[9]);l.C(0);var c=new _b.n(n.children[8]);c.C(0);var h=new _fc.a(n.children[7]);h.C(0);var y=new _fc.a(n.children[6]);y.C(0);var v=new _fc.b(_B.a(n,[5,1]));v.y("SurveyDialogView._tid4");var a=new _fc.b(_B.a(n,[5,0]));a.y("SurveyDialogView._tid3");var s=new _fc.i(n.children[4],_js.a.Instance.a(_ff.a));s.C(0);var t=new _fce.q(_B.a(n,[3,1]));t.h("_sy_n");t.C(0);var r=new _fc.a(_B.a(n,[3,0]));r.C(0);var f=new _fce.h(_B.a(n,[2,1]));f.y("SurveyDialogView._tid2");var u=new _fce.h(_B.a(n,[2,0]));u.y("SurveyDialogView._tid1");var e=new _fc.a(n.children[1]);e.C(0);var o=new _fc.a(n.children[0]);o.C(0);return new _B(n,[o,e,u,f,r,t,s,a,v,y,h,c,l])},_sy.a,_js.b,function(n){return new _js.b(n)},!0,!1,!1,0,_sy._TI.b)};_sy._TI.s=function(){var n=window.document.createElement("DIV");n.innerHTML="<div> <div class='_sy_o'> <span class='_sy_2 ms-fwt-r ms-font-color-black _sy_j'></span> <span class='_sy_7'></span> <span class='_sy_7'></span> </div> <label class='_sy_8'></label> <label class='_sy_8'></label> <label class='_sy_8'></label> <label class='_sy_8'></label> <label class='_sy_8'></label> </div><div> <span class='customButtonText'></span> </div><div> <span class='customButtonText'></span>'\n            </div><div> <input type=\"radio\" class='_sy_a'/> <span class='_sy_b'></span> </div><div> <span></span> </div><div> <button type='button' class='_sy_m ms-bg-color-neutralLighter'></button> </div><div> <span class='_sy_2 ms-fwt-r ms-font-color-black _sy_3'></span> <span class='_sy_2 ms-fwt-r ms-font-color-black _sy_4'></span> <div class='_sy_5'> <div class='_sy_6'></div> <div class='_sy_6'></div> </div> <div class='_sy_c'> <span class='_sy_2 ms-fwt-r ms-font-color-black _sy_d'></span> <textarea class='_sy_e ms-border-color-neutralTertiary'></textarea> </div> <button type='button' class='_sy_i'></button> <div class='_sy_l'> <button type='button' class='_sy_m ms-bg-color-themePrimary ms-font-color-white'></button> <button type='button' class='_sy_m ms-bg-color-neutralLighter'></button> </div> <span class='_sy_2 ms-fwt-r ms-font-color-black _sy_f'></span> <span class='_sy_g'></span> <span class='_sy_g'></span> <span class='_sy_g _sy_h'></span>   </div>";_js.c.a().appendChild(n);return n};_sy._TI.a=function(n){return n.n};_sy._TI.C=function(n){return n.k()};_sy._TI.l=function(n){return n.d()};_sy._TI.q=function(n){return n.i()};_sy._TI.r=function(n){return n.B()};_sy._TI.E=function(n){return n.n()};_sy._TI.i=function(n){return n.be()};_sy._TI.G=function(n){return n.p()};_sy._TI.H=function(n){return n.q()};_sy._TI.F=function(n){return n.o()};_sy._TI.D=function(n){return n.m()};_sy._TI.J=function(n){return n.s()};_sy._TI.m=function(n){return n.e()};_sy._TI.L=function(n){return n.v()};_sy._TI.N=function(n){return n.x()};_sy._TI.O=function(n){return n.y()};_sy._TI.M=function(n){return n.w()};_sy._TI.K=function(n){return n.u()};_sy._TI.X=function(n){return n.F};_sy._TI.u=function(n){return n.v};_sy._TI.B=function(n){return n.d};_sy._TI.z=function(n){return n.a};_sy._TI.A=function(n){return n.c};_sy._TI.I=function(n){return n.r()};_sy._TI.T=function(n){return _sy.b.isInstanceOfType(n)?n.bj():null};_sy._TI.R=function(n){return n.A()};_sy._TI.U=function(n){return _sy.b.isInstanceOfType(n)?n.bk():null};_sy._TI.W=function(n){return n.y};_sy._TI.o=function(n){return n.a()};_sy._TI.ba=function(n){return n.z};_sy._TI.Q=function(n){return n.f()};_sy._TI.S=function(n){return _sy.b.isInstanceOfType(n)?n.M:null};_sy._TI.V=function(n){return n.C};_sy._TI.v=function(n){return n.b};_sy._TI.bc=function(n){return n.v};_sy._TI.x=function(n){return n.o()};_sy._TI.P=function(n){return n.z()};_sy._TI.bb=function(n){return n.S};_sy._TI.Y=function(n){return n.G};_sy._TI.Z=function(n){return n.bd()};_sy._TI.c=function(n,t){n.a(t)};_sy._TI.f=function(n,t){n.m=t};_sy._TI.d=function(n,t){n.h(t)};_sy._TI.e=function(n,t){n.M(t)};_sy._TI.n=function(n,t){n.be(t)};_sy._TI.be=function(n,t){n.y=t};_sy._TI.p=function(n,t){n.c(t)};_sy._TI.bf=function(n,t){n.z=t};_sy._TI.bd=function(n,t){n.C=t};_sy._TI.w=function(n,t){n.c(t)};_sy._TI.bg=function(n,t){n.v=t};_sy._TI.y=function(n,t){n.m(t)};_sy._TI.t=function(n,t){n.a(t)};_sy._TI.h=function(){_sy._TI.k||(_sy._TI.k=new _fc.o);return _sy._TI.k};_sy._TI.g=function(){_sy._TI.j||(_sy._TI.j=new _fc.k);return _sy._TI.j};SurveyComponent.registerClass("SurveyComponent",null,_a.iM);_sy.a.registerClass("_sy.a",_bc.j,_y.hI);_sy.d.registerClass("_sy.d",_sy.a);_sy.c.registerClass("_sy.c",null,ISurveyFactory);_sy.e.registerClass("_sy.e",null,ISurveyDialogViewModelFactory);_sy.b.registerClass("_sy.b",null,ISurvey);_sy._TI.registerClass("_sy._TI");SurveyComponent.$$cctor();_sy.a.a=!1;_sy.a.b=21;_sy.a.c=172;_sy._TI._hf=_sy._TI.s();_sy._TI.k=null;_sy._TI.j=null;_sy._TI.b={};_sy._TI.$$cctor();
window.scriptsLoaded['microsoft.owa.survey.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.survey.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
