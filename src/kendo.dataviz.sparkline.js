kendo_module({
    id: "sparkline",
    name: "Sparkline",
    category: "dataviz",
    description: "Sparkline widgets.",
    depends: [ "chart" ]
});

(function ($, undefined) {
    // Imports ===============================================================
    var kendo = window.kendo,
        deepExtend = kendo.deepExtend,
        math = Math,
        proxy = $.proxy,

        dataviz = kendo.dataviz,
        template = kendo.template,
        defined = dataviz.defined,
        Chart = dataviz.ui.Chart,
        last = dataviz.last,
        renderTemplate = dataviz.renderTemplate;

    // Constants =============================================================
    var CSS_PREFIX = "k-";

    // Sparkline =============================================================
    var Sparkline = Chart.extend({
        init: function(element, options) {
            var chart = this;

            if (element.innerHTML === "") {
                element.innerHTML = "&nbsp;";
            }

            Chart.fn.init.call(chart, element, options);
            chart.element.addClass(CSS_PREFIX + "sparkline");
        },

        options: {
            name: "Sparkline",
            chartArea: {
                margin: 0
            },
            axisDefaults: {
                visible: false,
                valueAxis: {
                    narrowRange: true
                }
            },
            tooltip: {
                visible: true
            },
            legend: {
                visible: false
            },
            transitions: false
        },

        _modelOptions: function() {
            var chart = this,
                options = Chart.fn._modelOptions.call(chart),
                element = chart.element;

            options.inline = true;

            // TODO: Container width or computed
            options.width = 80;

            element.css({
                width: options.width,
                height: options.height
            });

            return options;
        }
    });

    // Exports ================================================================

    dataviz.ui.plugin(Sparkline);

    deepExtend(dataviz, {
    });

})(window.kendo.jQuery);
