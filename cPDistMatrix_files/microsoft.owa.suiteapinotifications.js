﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.suiteapinotifications.js'] = (new Date()).getTime();
Type.registerNamespace("_o365sa");_o365sa.f=function(){_o365sa.f.initializeBase(this)};_o365sa.f.prototype={t:function(n){var r=new _g.ka;var t;var u=(t=new _g.pp(this.y()),t.Body=r,t);var i=new _g.FD(this.w);i.timeZone=this.R();n.eA(u,i,this.r,this.q)},cz:function(n,t,i){try{t()}catch(r){i(r)}}};_o365sa.g=function(n){_o365sa.g.initializeBase(this);this.a=n};_o365sa.g.prototype={a:null,t:function(n){var i;var f=(i=new _g.ky,i.ItemIds=this.a,i);var t;var u=(t=new _g.qi(this.y()),t.Body=f,t);var r=new _g.HC(this.w);n.eW(u,r,this.r,this.q)},cz:function(n,t,i){try{t()}catch(r){i(r)}}};_o365sa.e=function(){};_o365sa.e.prototype={a:function(n,t){var i=new _o365sa.f;if(t){var u=this;i.u(function(n){t(n.s)})}if(n){var r=this;i.v(function(t){n(i.A)})}OwaApplication.a.a(i)},b:function(n,t,i){var r=new _o365sa.g(n);if(i){var f=this;r.u(function(n){i(n.s)})}if(t){var u=this;r.v(function(n){t(r.A)})}OwaApplication.a.a(r)}};_o365sa.d=function(){};_o365sa.d.prototype={b:function(n,t){throw Error.notImplemented("");},a:function(n,t,i,r,u){throw Error.notImplemented("");},c:function(n,t,i,r,u){throw Error.notImplemented("");}};_o365sa.c=function(){};_o365sa.c.b=function(){_o365sa.c.a||(_o365sa.c.a=new _o365sa.c);return _o365sa.c.a};_o365sa.c.prototype={a:function(n,t){var i=new _h.L(n);i.m(_a.a.p,n.NotificationType,t,0)},b:function(n,t,i,r){throw Error.notImplemented("");}};_o365sa.a=function(n,t,i,r){this.c=n;this.a=t;this.d=i;this.e=r};_o365sa.a.g=function(n){var i=n.a(_a.h).a();var t=n.a(_g.a);_o365sa.a.a=new _o365sa.a(n.a(_a.x),t,i.c().Enabled,i.J().Enabled&&!!t.c().bl.DefaultPublicFolderMailbox)};_o365sa.a.prototype={c:null,a:null,d:!1,e:!1,j:function(){return this.b().bl},b:function(){(!this.a||this.a.P)&&(this.a=_g.a.a());return this.a},o:function(n,t){n&&n(this.b().bl)},f:function(){return this.b()},n:function(n){if(_g.b.a){var t=_g.b.a.nameToId(n);if(t)return t.Id}return null},g:function(n){return n?_a.c.t(n):null},i:function(n,t,i,r,u,f,e,o){var s=new _o365sa.a.b;s.S=new _js.f;s.P=new _g.de(_a.c.t(t).j(),_a.c.t(i).j());s.Q=r;if(o){var c=this;s.u(function(n){o(n.s)})}if(e){var h=this;s.v(function(n){e(s.o())})}OwaApplication.a.a(s)},l:function(n,t){var r=this.b().c().bl.UserEmailAddress;var i=new _o365sa.a.c(r,!this.d,this.e);if(t){var f=this;i.u(function(n){t(n.s)})}if(n){var u=this;i.v(function(t){n(i.k)})}OwaApplication.a.a(i)},k:function(n,t,i){throw Error.notImplemented("");},p:function(n,t){var i=new _o365sa.a.f(new _c.x);if(t){var u=this;i.u(function(n){t(n.s)})}if(n){var r=this;i.v(function(t){n(i.c)})}OwaApplication.a.a(i)},r:function(n,t,i,r,u,f){var s=_a.c.t(t);var h=_a.c.t(i);var o=new(_a.eH.$$(String));o.b(r);var e=new _o365sa.a.e(s,h,o);if(f){var l=this;e.u(function(n){f(n.s)})}if(u){var c=this;e.v(function(n){u(e.j)})}OwaApplication.a.a(e)},m:function(n,t){var i=new _c.bz;if(t){var u=this;i.u(function(n){t(n.s)})}if(n){var r=this;i.v(function(t){n(i.a)})}OwaApplication.a.a(i)},q:function(n,t,i,r,u,f){var e=new _o365sa.a.d(i,this.b().e());e.e=this.g(n);e.a=this.g(t);if(f){var s=this;e.u(function(n){f(n.s)})}if(u){var o=this;e.v(function(n){u(e.i)})}OwaApplication.a.a(e)},h:function(n,t,i,r){for(var o=new _h.cc,e=t,h=e.length,u=0;u<h;++u){var s=e[u];o.a(s)}var f=new _c.bw(o,t,this.c);if(r){var l=this;f.u(function(n){r(n.s)})}if(i){var c=this;f.v(function(n){i()})}OwaApplication.a.a(f)},s:function(n,t,i,r,u){var f=new _c.bZ(n,_a.c.b(t),this.c);if(u){var o=this;f.u(function(n){u(n.s)})}if(r){var e=this;f.v(function(n){r()})}OwaApplication.a.a(f)}};_o365sa.a.b=function(){_o365sa.a.b.initializeBase(this)};_o365sa.a.b.prototype={o:function(){return this.B&&this.B.response&&this.B.response.result?this.B.response.result.Body:null}};_o365sa.a.c=function(n,t,i){_o365sa.a.c.initializeBase(this,[n,t,i])};_o365sa.a.c.prototype={k:null,l:function(n){this.k=n;_cc.cy.prototype.l.call(this,n)}};_o365sa.a.f=function(n){_o365sa.a.f.initializeBase(this,[n])};_o365sa.a.f.prototype={c:null,cz:function(n,t,i){this.c=n;_c.V.prototype.cz.call(this,n,t,i)}};_o365sa.a.e=function(n,t,i){_o365sa.a.e.initializeBase(this,[n,t,"Detailed",30,i])};_o365sa.a.e.prototype={j:null,cq:function(n){this.j=n;_cm.Y.prototype.cq.call(this,n)}};_o365sa.a.d=function(n,t){_o365sa.a.d.initializeBase(this,[n,t])};_o365sa.a.d.prototype={i:null,cz:function(n,t,i){this.i=n.Body.Reminders;_h.dt.prototype.cz.call(this,n,t,i)}};_o365sa.f.registerClass("_o365sa.f",_h.dX.$$(_g.vi));_o365sa.g.registerClass("_o365sa.g",_h.dX.$$(_g.vQ));_o365sa.a.b.registerClass("_o365sa.a.b",_cc.Q);_o365sa.a.c.registerClass("_o365sa.a.c",_cc.cy);_o365sa.a.f.registerClass("_o365sa.a.f",_c.V);_o365sa.a.e.registerClass("_o365sa.a.e",_cm.Y);_o365sa.a.d.registerClass("_o365sa.a.d",_h.dt);_o365sa.e.a=new _o365sa.e;_o365sa.d.a=null;_o365sa.c.a=null;_o365sa.a.a=null;
window.scriptsLoaded['microsoft.owa.suiteapinotifications.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.suiteapinotifications.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
