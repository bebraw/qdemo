(function ($) {
    function awesomePlugin($elem, opts) {
        // TODO: make this really awesome
        var $e = $('<div>').css('background', opts.background)
            .css('width', opts.width + 'px')
            .text(opts.input)
            .appendTo($elem);

        $.each(opts.segments, function(i, k) {
            $('<div>').text(opts.text.toUpper? k.toUpperCase(): k).css('color', k).appendTo($e);
        });
    }

    var defaults = {
        background: 'lime',
        input: 'some text goes here',
        width: 150,
        segments: ['red', 'green', 'blue'],
        text: {
            toUpper: false
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

