qDemo - Demonstration generator for jQuery plugins

This jQuery plugin makes it possible to generate a simple demonstration page showcasing your jQuery plugin. The user interface generated contains plugin options, code depending on these options and the plugin output itself.

Usage:
<html>
<head>
    <title>Plugin Demo</title>

    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="qdemo.js"></script>
    <script type="text/javascript" src="myplugin.js"></script>
    <script type="text/javascript">
        $(function() {
            $("#demo").demoize('MyPlugin v0.1', 'pluginFunction');
    </script>
</head>
<body>
    <div id="demo"></div>
</body>
</html>

In addition to demo title and the name of the plugin function, it's possible to pass a callback that allows to customize input change behavior further. Example:
$(function() {
    $("#demo").demoize('qColor v0.1', 'colorPicker',
        function(elementType) {
            if (elementType == 'input') {
                $('#input').show();
            }
            else {
                $('#input').hide();
            }
        }
    );
});

In this case the callback is used to hide and show certain fieldset based on the status of elementType of plugin parent. This particular functionality might change later on as currently it's quite specific (perhaps it's better to pass more general param).

qDemo introspects plugin options using a specific function, getOptions. It's important that you expose your plugin options like this:
(function($) {
    $.fn.pluginFunction = function(pluginOptions) {
        var defaultOptions = {
            initialColor: 'lime',
            bottom: 'black'
        }

        ...

        return {'getOptions': function() {return defaultOptions;}};
    };
})(jQuery);

If you want to see qDemo in action, please take a look at qColor (http://github.com/bebraw/qcolor).
