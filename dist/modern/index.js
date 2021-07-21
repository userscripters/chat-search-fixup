// ==UserScript==
// @author          Oleg Valter
// @description     Fix chat search input without having to wait 6 to 8 weeks
// @grant           none
// @homepage        https://github.com/userscripters/chat-search-fixup#readme
// @match           https://chat.stackexchange.com
// @match           https://chat.stackoverflow.com
// @name            chat-search-fixup
// @namespace       userscripters
// @source          git+https://github.com/userscripters/chat-search-fixup.git
// @supportURL      https://github.com/userscripters/chat-search-fixup/issues
// @version         1.0.0
// ==/UserScript==

"use strict";
(function (w, d) {
    "use strict";
    const searchClass = "js-site-filter-txt";
    w.addEventListener("load", () => {
        $.ajaxSetup({
            converters: {
                "text html": (data) => data.replace(new RegExp(`(<input)(.+class=".*?)\s?${searchClass}`, "g"), `$1 id="${searchClass}"$2`),
            },
        });
        const style = d.createElement("style");
        d.head.append(style);
        const { sheet } = style;
        if (!sheet)
            return;
        [
            `.s-input.s-input__search,
             .s-input.s-input__creditcard {
               padding-left: 32px !important;
               box-sizing: border-box;
            }`,
        ].forEach((rule) => sheet.insertRule(rule));
    });
})(window, document);
