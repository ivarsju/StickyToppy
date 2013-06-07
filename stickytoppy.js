/*! Copyright (c) 2013 Ivars Jukāms - https://github.com/ivarsju/StickyToppy/
    MIT license: https://github.com/ivarsju/StickyToppy/blob/master/license.txt */

var StickyToppy = function() {
    
    var $_header    = null;
    var $_headerTop = null;
    var $_topOffset = 0;
    
    function init(selector, zIndex, offset) {
        
        $_header = $(selector);
        
        if (!$_header.length) {
            return;
        }
        
        $_headerTop = $_header.offset().top;
        
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
        
        //make it "sticky" if you first scroll the page and then refresh
        _sticky();
        
        //make it "sticky" while scrolling
        $(window).on('scroll', _sticky);
        
    }
    
    function _sticky() {
        
        if ($(window).scrollTop() > $_headerTop) {
            //set it fixed at the top of the window
            $_header.css({'position': 'fixed', 'top': $_topOffset});
        } else {
            //set back default position
            $_header.css({'position': 'static'});
        }
        
    }
    
    return {
        init: init
    };

}();