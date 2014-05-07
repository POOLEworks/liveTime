(function($) {
    // What does the liveTime plugin do?
    $.fn.liveTime = function(options) {

        if (!this.length) {
            return this;
        }

        var opts = $.extend(true, {}, $.fn.liveTime.defaults, options);

        this.each(function() {
            var $this = $(this);
            setInterval(function() {
                var d = new Date($.now());
                var dateToDisplay = d.toLocaleString();
                if (opts.toUTC) {
                    dateToDisplay = d.toUTCString();
                };

                $this.text(dateToDisplay);
            }, opts.intervall);
        });

        return this;
    };

    // default options
    $.fn.liveTime.defaults = {
        toUTC: false,
        intervall: 1000
    };

})(jQuery);