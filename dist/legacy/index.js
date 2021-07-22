// ==UserScript==
// @author          Oleg Valter
// @description     Fix chat Stack Exchange community search without having to wait 6 to 8 weeks
// @grant           none
// @homepage        https://github.com/userscripters/chat-search-fixup#readme
// @match           https://chat.stackexchange.com
// @match           https://chat.stackoverflow.com
// @name            chat--search-fixup
// @namespace       userscripters
// @source          git+https://github.com/userscripters/chat-search-fixup.git
// @supportURL      https://github.com/userscripters/chat-search-fixup/issues
// @version         1.0.0
// ==/UserScript==

"use strict";
(function (w, d) {
    "use strict";
    var searchClass = "js-site-filter-txt";
    w.addEventListener("load", function () {
        $.ajaxSetup({
            converters: {
                "text html": function (data) {
                    return data.replace(new RegExp("(<input)(.+class=\".*?)s?" + searchClass, "g"), "$1 id=\"" + searchClass + "\"$2");
                },
            },
        });
        var style = d.createElement("style");
        d.head.append(style);
        var sheet = style.sheet;
        if (!sheet)
            return;
        [
            ".s-input.s-input__search,\n             .s-input.s-input__creditcard {\n               padding-left: 32px !important;\n               box-sizing: border-box;\n            }",
        ].forEach(function (rule) { return sheet.insertRule(rule); });
    });
})(window, document);
