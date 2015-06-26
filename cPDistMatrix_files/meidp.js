try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['meidp.js'] = (new Date()).getTime();
/// Copyright (C) Microsoft Corporation. All rights reserved.

(function ()
{
    var w = window;
    w.MSA = {};
    var ME = w.MSA.MeControl = {};
    var storage = w.sessionStorage;

    var c_sessionStorageIdKey = 'msameid';
    var c_type = 'type';
    ME.IDP =
    {
        MSA: 'msa',
        AAD: 'aad'
    };
    
    ME.Log = new Logger();
    /* @constructor */function Logger()
    {
        /// <param name="onEventLog" type="String, * -> void">An event handler to capture QoS and Bici data</param>

        var _this = this;
        var _id;
        var _onEventLog;

        if (storage)
        {
            _id = storage.getItem(c_sessionStorageIdKey) || guid();
            storage.setItem(c_sessionStorageIdKey, _id);
        }
        else
        {
            _id = guid();
        }

        if (!Date.now)
        {
            Date.now = function()
            {
                return (new Date()).getTime();
            };
        }

        _this.setLogEvent = function (onEventLog)
        {
            /// <summary>Sets the event hander for logging</summary>
            /// <param name="onEventLog" type="String, * -> void">The event handler callback</param>
            
            _onEventLog = onEventLog;
        };

        _this.id = _id;

        _this.logQos = function (eventId, success, duration, errorCode, dataPoints)
        {
            /// <summary>Logs a QoS event</summary>
            /// <param name="eventId" type="String">An id for the event</param>
            /// <param name="success" type="Boolean">True if succeeded, false otherwise</param>
            /// <param name="duration" type="Number">The duration of the operation, in ms</param>
            /// <param name="errorCode" type="String" optional="true">An error code in case of failure</param>
            /// <param name="dataPoints" type="*" optional="true">A bag of extra information to be logged</param>

            dataPoints = dataPoints || {};
            dataPoints[c_type] = 'qos';
            dataPoints['success'] = success ? '1' : '0';
            dataPoints['duration'] = duration || 0;
            dataPoints['errorCode'] = errorCode || '';

            _this.logEvent(eventId, dataPoints);
        };

        _this.logEvent = function (eventId, dataPoints)
        {
            dataPoints = dataPoints || {};
            if (!dataPoints[c_type])
            {
                dataPoints[c_type] = 'bici';
            }
            
            dataPoints['ts'] = Date.now();
            dataPoints['uaid'] = _id;

            _onEventLog && _onEventLog(eventId, dataPoints);
        };

        function guid()
        {
            /// <summary>Generate a new random GUID compliant with RFC4122 version 4</summary>
            /// <returns type="String">The new GUID</returns>

            // Stitch in '4' in the third group to comply with RFC4122 version 4
            return (term4() + term4() + '-' + term4() + '-4' + term4().substr(0, 3) + '-' + term4() + '-' + term4() + term4() + term4()).toLowerCase();

            function term4()
            {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            }
        }
    }
})();

/// Copyright (C) Microsoft Corporation. All rights reserved.

(function (jQuery)
{
    var w = window;
    var ME = w.MSA.MeControl;

    // Regex that finds {#} so it can be replaced by the arguments in string format
    var c_FormatRegEx = /\{\d+\}/g;
    // Regex that finds { and } so they can be removed on a lookup for string format
    var c_FormatArgsRegEx = /[\{\}]/g;
    //encode if a character not matches with [a-zA-Z0-9_{space}.,-].
    var c_EncodeHtmlRegEx = /[^\w .,-]/g;

    ME.Strings = new StringUtils();
    /* @constructor */function StringUtils()
    {
        /// <summary>
        /// Defines the StringUtils class.
        /// </summary>

        var _this = this;
        var _disposed = false;
        var _strings = {};

        _this.addStrings = function(newStrings)
        {
            /// <summary>
            /// Adds new string resources
            /// </summary>
            /// <param name="newStrings" type="*">The new strings to be added</param>

            jQuery.extend(_strings, newStrings);
        };

        _this.getString = function(stringId, encode)
        {
            /// <summary>
            /// Gets a string resource
            /// </summary>
            /// <param name="stringId" type="String">The string value for the given string id</param>
            /// <param name="encode" type="Boolean" optional="true">If true, result will be HTML encoded</param>
            /// <returns type="String">The string resource</returns>

            var result = _strings[stringId] || _this.format('ERROR: {0}', stringId);

            return encode ? _this.encodeHtml(result) : result;
        };

        _this.startsWith = function(str, prefix)
        {
            /// <summary>
            /// Checks if the string starts with the provided prefix
            /// Usage: Strings.startsWith('abc', 'ab') returns true
            /// </summary>
            /// <param name="str" type="String">String to check</param>
            /// <param name="prefix" type="String">Prefix to match</param>
            /// <returns type="Boolean">Bool if the prefix is at the start of the string</returns>

            return (str.substr(0, prefix.length) === prefix);
        };

        _this.format = function (str, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10)
        {
            /// <summary>
            /// String Format is like C# string format.
            /// Usage Example: "hello {0}!".format("mike") will return "hello mike!"
            /// Calling format on a string with less arguments than specified in the format is invalid
            /// Example "I love {0} every {1}".format("CXP") will result in a Debug Exception.
            /// </summary>
            /// <param name="str" type="String">The string format</param>
            /// <param name="s1" type="String" optional="true">The values passed will be used in the string format</param>
            /// <param name="s2" type="String" optional="true">The values passed will be used in the string format</param>
            /// <param name="s3" type="String" optional="true">The values passed will be used in the string format</param>
            /// <param name="s4" type="String" optional="true">The values passed will be used in the string format</param>
            /// <param name="s5" type="String" optional="true">The values passed will be used in the string format</param>
            /// <param name="s6" type="String" optional="true">The values passed will be used in the string format</param>
            /// <param name="s7" type="String" optional="true">The values passed will be used in the string format</param>
            /// <param name="s8" type="String" optional="true">The values passed will be used in the string format</param>
            /// <param name="s9" type="String" optional="true">The values passed will be used in the string format</param>
            /// <param name="s10" type="String" optional="true">The values passed will be used in the string format</param>

            var args = arguments;

            //Callback match function
            function replace_func(match)
            {
                /// <param name="match" type="String">regex match</param>

                //looks up in the args
                var replacement = args[parseInt(match.replace(c_FormatArgsRegEx, "")) + 1];
                if (replacement == null)
                {
                    replacement = '';
                }
                
                return replacement;
            }

            return (str.replace(c_FormatRegEx, replace_func));
        };
        
        _this.dispose = function ()
        {
            /// <summary>
            /// Disposes the control
            /// </summary>

            if (!_disposed)
            {
                _strings = null;
                _disposed = true;
            }
        };

        _this.encodeHtml = function (str)
        {
            /// <summary>
            /// Aggressively encodes a string to be displayed in the browser. All non-letter characters are converted
            /// to their Unicode entity ref, e.g. &#65;, space, comma, and dash are left un-encoded as well.
            /// Usage: _divElement.innerHTML =_someValue.encodeHtml());
            /// </summary>
            /// <param name="str" type="String">The string to be encoded</param>
            /// <returns type="String">Html Encoded string</returns>

            if (!str)
            {
                return '';
            }

            var /* @dynamic */charCodeResult = {
                c: 0, // Code
                s: -1 // Next skip index
            };

            return str.replace(c_EncodeHtmlRegEx, function (match, ind, s)
            {
                /// <summary>
                /// Replace Helper Function
                /// </summary>
                /// <param name="_match" type="String">Regex Match</param>
                /// <param name="ind" type="Number">Index into the string where the match occurred</param>
                /// <param name="s" type="String">The string where the match occurred</param>
                /// <returns type="String">replaced match</returns>

                if (extendedCharCodeAt(s, ind, charCodeResult))
                {
                    return ['&#', charCodeResult.c, ';'].join('');
                }
                
                //If extendedCharCodeAt returns false that means this index is the low surrogate,
                //which has already been processed, so we remove it by returning an empty string.
                return '';
            });
        };

        
        function extendedCharCodeAt(str, idx, /* @dynamic */result)
        {
            /// <summary>
            /// Gets the char code from str at idx.
            /// Supports Secondary-Multilingual-Plane Unicode characters (SMP), e.g. codes above 0x10000
            /// </summary>
            /// <param name="str" type="String">String to get char code from</param>
            /// <param name="idx" type="Number">Index of char to get code for</param>
            /// <param name="result" type="*">Receives result code c: and index skip s: info</param>
            /// <returns>True if this method processed the char code</returns>

            var skip = (result.s === idx);
            if (!skip)
            {
                idx = idx || 0;
                var code = str.charCodeAt(idx);
                var hi, low;
                result.s = -1;
                if (code < 0xD800 || code > 0xDFFF)
                {
                    //Main case, Basic-Multilingual-Plane (BMP) code points.
                    result.c = code;
                }
                else if (code <= 0xDBFF) // High surrogate of SMP
                {
                    hi = code;
                    low = str.charCodeAt(idx + 1);
                    result.c = ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
                    result.s = idx + 1;
                }
                else // Low surrogate of SMP, 0xDC00 <= code && code <= 0xDFFF
                {
                    //Shouldn't really ever come in here, previous call to this method would set skip index in result
                    //in high surrogate case, which is short-circuited at the start of this function.
                    result.c = -1;
                    skip = true;
                }
            }
            return !skip;
        }
    }
})(window.MejQuery);
/// Copyright (C) Microsoft Corporation. All rights reserved.

(function()
{
    var w = window;
    var ME = w.MSA.MeControl;
    var $str = ME.Strings;

    ME.Util =
    {
        appendQueryParameter: function (url, paramName, paramValue)
        {
            /// <summary>Appends a query string parameter and value to a given url</summary>
            /// <param name="url" type="String">The url to append the parameter to</param>
            /// <param name="paramName" type="String">The parameter name</param>
            /// <param name="paramValue" type="String">The parameter value</param>
            /// <returns type="String">The URl with the parameter</returns>

            if (!url)
            {
                return '';
            }

            return $str.format('{0}{1}{2}={3}', url, url.indexOf('?') === -1 ? '?' : '&', paramName, paramValue);
        }
    };

})();
/// Copyright (C) Microsoft Corporation. All rights reserved.

(function (jQuery)
{
    var w = window;
    var ME = w.MSA.MeControl;
    var $log = ME.Log;
    var $str = ME.Strings;

    ME.IFrameControl = new IFrameControl();
    /* @constructor */function IFrameControl()
    {
        /// <summary>
        /// Defines the IFrameControl class.
        /// </summary>

        var _this = this;
        var _disposed = false;

        var _frameIndex = 0;
        var _originToCallbackMap = {};

        function init()
        {
            /// <summary>
            /// Initializes the control
            /// </summary>

            jQuery(w).on('message.msame', handlePostMessage);
        }

        function openIFrameInternal(urlSource, fnCallback)
        {
            /// <summary>
            /// Opens an iframe and optionally adds a postMessage handler
            /// </summary>
            /// <param name="urlSource" type="String" />
            /// <param name="fnCallback" type="* -> void" />

            if (urlSource)
            {
                var startTime = Date.now();
                
                // adding a hidden iframe to the page
                var frameId = 'mecontrol_iframe_index_' + _frameIndex++;
                var iframe = jQuery('<iframe style="display:none"></iframe>')
                    .attr('id', frameId)
                    .attr('src', urlSource);
                iframe.appendTo('body');

                // if we have a callback function, add an entry to our domain map
                if (fnCallback)
                {
                    var origin = _this.getDomainFromUrl(urlSource);

                    if (!_originToCallbackMap[origin])
                    {
                        _originToCallbackMap[origin] = {};
                    }

                    _originToCallbackMap[origin][frameId] = { callback: fnCallback, iframe: iframe[0], start: startTime };
                }
            }
        }

        function handlePostMessage(e)
        {
            /// <summary>
            /// Handles the message event from the browser and routes it based on the origin
            /// </summary>
            /// <param name="e" type="*" />

            var originalEvent = e.originalEvent;

            if (originalEvent && _originToCallbackMap[originalEvent.origin])
            {
                jQuery.each(_originToCallbackMap[originalEvent.origin],
                    function (frameId, frameObj)
                    {
                        // we match the event window to the iframe window to route the event to the appropriate callback function
                        if (originalEvent.source == frameObj.iframe.contentWindow)
                        {
                            $log.logQos('IFrameCtrl', true, Date.now() - frameObj.start, '', { src: frameObj.iframe.src });
                            frameObj.callback(originalEvent);
                        }
                    }
                );
            }
        }

        _this.getDomainFromUrl = function (url)
        {
            /// <summary>
            /// Returns the root domain for a given url
            /// </summary>
            /// <param name="url" type="String" />
            /// <returns type="String" />

            var tmp = document.createElement('a');
            tmp.href = url;
            var domain = tmp.protocol + '//' + tmp.hostname;

            if ((tmp.port !== null) && (tmp.port !== '') && (tmp.port !== '443') && (tmp.port !== '80'))
            {
                domain += ':' + tmp.port;
            }

            return domain;
        };

        _this.openIFrame = function (urlSource, fnCallback, queryParams)
        {
            /// <summary>
            /// Opens an iframe and optionally adds a postMessage handler
            /// </summary>
            /// <param name="urlSource" type="String" />
            /// <param name="fnCallback" type="* -> void" />
            /// <param name="queryParams" type="*" optional="true"/>

            if (queryParams)
            {
                for (var param in queryParams)
                {
                    urlSource = ME.Util.appendQueryParameter(urlSource, param, queryParams[param]);
                }
            }

            openIFrameInternal(urlSource, fnCallback);
        };

        _this.dispose = function ()
        {
            /// <summary>
            /// Disposes the control
            /// </summary>

            if (!_disposed)
            {
                jQuery(w).off('message.msame');

                _this = null;
                _originToCallbackMap = null;

                _disposed = true;
            }
        };

        init();

        // Dispose on page unload
        jQuery(w).on('unload.msame', _this.dispose);
    }
})(window.MejQuery);
/// Copyright (C) Microsoft Corporation. All rights reserved.

(function (jQuery)
{
    var w = window;
    var ME = w.MSA.MeControl;
    var IFrameControl = ME.IFrameControl;
    var $log = ME.Log;

    var c_idpFlag = 'proxy'; 

    ME.UserStateModel = UserStateModel;
    /* @constructor */function UserStateModel(rpData)
    {
        /// <summary>
        /// Defines the UserStateModel class.
        /// </summary>
        /// <param type="ME.RPData">RP data for the control</param>

        var _this = this;
        var _disposed = false;

        var _rpData = rpData;

        var _userList = [];
        var /* @type(Array) */_cachedUserList = null;
        var /* @dynamic */_successCallback = null;
        var /* @dynamic */_failureCallback = null;
        var _timeout = 10000;

        var _expectedMessageCount = 0;
        var _fCallInProgress = false;
        var /* @type(Number) */_startTime;

        _this.currentState = function()
        {
            /// <summary>Gets the user's current state</summary>
            /// <returns type="Array">The list of current users</returns>
            
            return _cachedUserList || [];
        };

        function handlePostMessage(e)
        {
            /// <summary>
            /// General postMessage handler
            /// </summary>
            /// <param name="e" type="*" />

            // we only want to handle the postMessage if the call is in progress
            // for example, if the previous call timed out we don't want to trigger the callback if the call finally succeeds
            if (_fCallInProgress)
            {
                var isMsa = _rpData.msaInfo.meTrustedOrigin && e.origin === _rpData.msaInfo.meTrustedOrigin;
                var isAad = _rpData.aadInfo.meTrustedOrigin && e.origin === _rpData.aadInfo.meTrustedOrigin;

                // only proceed if the origin is trusted (comes from the same domain as the original iframe that was opened)
                if ((isMsa || isAad) && typeof e.data === 'string')
                {
                    _expectedMessageCount--;

                    var dataPoints = { currentIdp: isMsa ? ME.IDP.MSA : ME.IDP.AAD, messagesMissing: _expectedMessageCount };

                    var /* @dynamic */userData = jQuery.parseJSON(e.data);

                    if (userData && userData.userList && userData.userList.length > 0)
                    {
                        _userList.push.apply(_userList, userData.userList);
                    }
                    else
                    {
                        var errorCode = 'InvalidIdpData';
                        if (userData && userData.error)
                        {
                            dataPoints['IDPError'] = userData.error;
                            errorCode = 'IDPError';
                        }

                        $log.logQos('UserStatePartial', false, Date.now() - _startTime, errorCode, dataPoints);
                    }
                    
                    if (_expectedMessageCount === 0)
                    {
                        if (/* @static_cast(Boolean) */_userList && _userList.length > 0)
                        {
                            // Deliver partial results even if one IDP fails
                            notifyResult(true);
                        }
                        else
                        {
                            notifyResult(false, 'NoIdpData', dataPoints);
                        }
                    }
                }
            }
        }

        function notifyResult(success, errorCode, dataPoints)
        {
            /// <summary>Makes the necessary call back with the results</summary>
            /// <param name="success" type="Boolean">True if succeeded, false otherwise</param>
            /// <param name="errorCode" type="String" optional="true">An error code</param>
            /// <param name="dataPoints" type="*" optional="true">Collection of extra information to be logged</param>

            _cachedUserList = _userList || [];

            dataPoints = dataPoints || {};
            dataPoints['userCount'] = _cachedUserList.length;
            
            $log.logQos('UserState', success, Date.now() - _startTime, errorCode, dataPoints);

            if (success)
            {
                _successCallback(_userList);
            }
            else
            {
                _failureCallback && _failureCallback();
            }
            
            resetFlags();
        }

        function handleTimeout()
        {
            /// <summary>
            /// If the IFrames don't respond in a given time, we want to notify the caller of the timeout
            /// </summary>

            // if the call is still in progress, it means it has gone over the given time and we notify the caller
            if (_fCallInProgress)
            {
                if (/* @static_cast(Boolean) */_userList && _userList.length > 0)
                {
                    notifyResult(true, '', { timeout: true, messagesMissing: _expectedMessageCount });
                }
                else
                {
                    notifyResult(false, 'Timeout');
                }
            }
        }

        function resetFlags()
        {
            /// <summary>
            /// Reset all the flags and user data
            /// </summary>

            _expectedMessageCount = 0;
            _fCallInProgress = false;
            _startTime = 0;
            _userList = [];
        }

        _this.getUserState = function (successCallback, failureCallback, timeout)
        {
            /// <summary>
            /// Gets the user state
            /// </summary>
            /// <param name="successCallback" type="* -> void" />
            /// <param name="failureCallback" type="void -> void" />
            /// <param name="timeout" type="Number" optional="true" />

            _cachedUserList = null;
            _successCallback = successCallback;
            _failureCallback = failureCallback;
            _startTime = Date.now();
            
            ///#DEBUG
            /* @disable(0092) */
            if (ME.TestData)
            {
                setTimeout(function() {
                    _successCallback(ME.TestData);
                }, 0);
                return;
            }
            /* @enable(0092) */
            ///#ENDDEBUG
            
            if (!w.postMessage)
            {
                notifyResult(false, 'PostMessageNotSupported');
                return;
            }

            if (location.protocol !== 'https:')
            {
                notifyResult(false, 'HttpNotSupported');
                return;
            }

            if (timeout)
            {
                _timeout = timeout;
            }

            setTimeout(handleTimeout, _timeout);

            _fCallInProgress = true;
            _expectedMessageCount = 2;

            var queryParams = { uaid: $log.id };

            if (_rpData && _rpData.msaInfo && _rpData.aadInfo)
            {
                if (_rpData.msaInfo && _rpData.msaInfo.meUrl)
                {
                    _rpData.msaInfo.meTrustedOrigin = IFrameControl.getDomainFromUrl(_rpData.msaInfo.meUrl);

                    if (_rpData.aadInfo && _rpData.aadInfo.meUrl)
                    {
                        _rpData.aadInfo.meTrustedOrigin = IFrameControl.getDomainFromUrl(_rpData.aadInfo.meUrl);

                        // if both are supported, open 2 iframes
                        IFrameControl.openIFrame(_rpData.msaInfo.meUrl, handlePostMessage, queryParams);
                        IFrameControl.openIFrame(_rpData.aadInfo.meUrl, handlePostMessage, queryParams);
                    }
                    else
                    {
                        // if only MSA is supported, open the MSA iframe with a proxy to AAD
                        queryParams.idpflag = c_idpFlag;
                        IFrameControl.openIFrame(_rpData.msaInfo.meUrl, handlePostMessage, queryParams);
                    }
                }
                else if (_rpData.aadInfo && _rpData.aadInfo.meUrl)
                {
                    _rpData.aadInfo.meTrustedOrigin = IFrameControl.getDomainFromUrl(_rpData.aadInfo.meUrl);

                    // if only AAD is supported, open the AAD iframe with a proxy to AAD
                    queryParams.idpflag = c_idpFlag;
                    IFrameControl.openIFrame(_rpData.aadInfo.meUrl, handlePostMessage, queryParams);
                }
            }
            else
            {
                notifyResult(false, 'InvalidRpData');
            }
        };

        _this.dispose = function ()
        {
            /// <summary>
            /// Disposes the control
            /// </summary>

            if (!_disposed)
            {
                _disposed = true;
            }
        };
    }
})(window.MejQuery);
window.scriptsLoaded['meidp.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['meidp.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
