(function ($) {
    function awesomePlugin($elem, opts) {
        // TODO: make this really awesome
        var $e = $('<div>').css('background', opts.background)
            .css('width', opts.width + 'px')
            .text(opts.text)
            .appendTo($elem);
    }

    var defaults = {
        background: 'lime',
        text: 'some text goes here',
        width: 150,
        segments: ['red', 'green', 'blue'],
        input: {
            allowEmpty: false,
            prependHash: false
        }
    };
    $.fn.awesomePlugin = function(options) {
        return this.each(function () {
            var $elem = $(this);
            var opts = $.extend(defaults, options);

            awesomePlugin($elem, opts);
        });
    };
    $.fn.awesomePlugin.options = defaults;
})(jQuery);

