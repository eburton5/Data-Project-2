﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.extensibility.common.js'] = (new Date()).getTime();
Type.registerNamespace("OSF");OSF.AppSpecificSetup=function(){};OSF.AppSpecificSetup._setupFacade=function(n,t,i){n.y=i;t.getLocalizedCSSFilePath=OSF.AppSpecificSetup.a;t.getLocalizedImageFilePath=OSF.AppSpecificSetup.b;t._hostPlatform="Web";t._hostType="Outlook";t._hostSpecificFileVersion="16.00"};OSF.AppSpecificSetup.a=function(n){var i=n.toLocaleLowerCase()==="moeerrorux.css";var t=_g.a.a().c().bl.IsUserCultureRightToLeft?"moeerroruxrtl.css":n;return i?_y.c.a.J(t.toLowerCase()):""};OSF.AppSpecificSetup.b=function(n){var t=n.toLowerCase();var i=t==="progress.gif"||t==="agavedefaulticon96x96.png"||t==="moe_status_icons.png";return i?_y.c.a.r(n.toLowerCase()):""};OSF.AppSpecificSetup.registerClass("OSF.AppSpecificSetup");
window.scriptsLoaded['microsoft.owa.extensibility.common.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.extensibility.common.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
