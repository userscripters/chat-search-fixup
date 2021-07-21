(function (w, d) {
    "use strict";

    const searchClass = "js-site-filter-txt";

    w.addEventListener("load", () => {
        $.ajaxSetup({
            converters: {
                "text html": (data) =>
                    data.replace(
                        new RegExp(
                            `(<input)(.+class=".*?)\s?${searchClass}`,
                            "g"
                        ),
                        `$1 id="${searchClass}"$2`
                    ),
            },
        });

        const style = d.createElement("style");
        d.head.append(style);
        const { sheet } = style;
        if (!sheet) return;

        [
            `.s-input.s-input__search,
             .s-input.s-input__creditcard {
               padding-left: 32px !important;
               box-sizing: border-box;
            }`,
        ].forEach((rule) => sheet.insertRule(rule));
    });
})(window, document);
