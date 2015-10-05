/*! Copyright (c) 2013 Ivars Jukāms - https://github.com/ivarsju/StickyToppy/
    MIT license: https://github.com/ivarsju/StickyToppy/blob/master/license.txt */

var StickyToppy = function() {
    
    var $_header     = null;
    var $_headerTop  = null;
    var $_topOffset  = 0;
    var $_leftOffset = 0;
    
    function init(selector, zIndex, offset, keepSpace) {
        
        $_header = $(selector);
        
        if (!$_header.length) {
            return;
        }
        
        $_headerTop  = $_header.offset().top;
        $_leftOffset = $_header.offset().left;
        
        //get and set element's width, in case it is not already done in css
        var width = $_header.width();
        $_header.css({'width': width});
        
        //add some higher z-index
        if (zIndex != undefined) {
            $_header.css({'z-index': zIndex});
        }
        
        //set offset from top (px)
        if (offset != undefined) {
            $_topOffset = offset;
        }
        
        //add "wrapper" to fill space earlier used by header
        if (keepSpace) {
            $_header.wrap('<div id="sticky-wrapper" />');
            _spaceRecalculate();
            if (jQuery.isFunction($.subscribe)) {
                $.subscribe('StickyToppy.spaceRecalculate', _spaceRecalculate);
            }
        }
        
        //make it "sticky" if you first scroll the page and then refresh
        _sticky();
        
        //make it "sticky" while scrolling
        $(window).on('scroll', _sticky);
        
    }
    
    function _sticky() {
        
        if ($(window).scrollTop() > $_headerTop) {
            //set it fixed at the top of the window
            var left = $_leftOffset - $(window).scrollLeft();
            $_header.css({'position': 'fixed', 'top': $_topOffset, 'left': left});
            if (jQuery.isFunction($.publish)) {
                $.publish('StickyToppy.fixed');
            }
        } else {
            //set back default position
            $_header.css({'position': 'static'});
            if (jQuery.isFunction($.publish)) {
                $.publish('StickyToppy.static');
            }
        }
        
    }
    
    function _spaceRecalculate() {
        var height = $_header.height();
        $('#sticky-wrapper').css({'min-height': height});
    }
    
    return {
        init: init
    };

}();
