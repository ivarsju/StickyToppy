StickyToppy
===========

Make your page header or other block element visible at the top of the page while scrolling page down

Usage:
===========

1. Download the source
2. Include it in your project
3. Initialize:

  StickyToppy.init('selector');
  
  or set some higher z-index:
  
  StickyToppy.init('selector', 1000);
  
  and some offset from top:
  
  StickyToppy.init('selector', 1000, 10);

Example:
===========

    $(document).ready(function() {
      StickyToppy.init('#header', 1000);
    })

Requirements:
===========
jQuery 1.7+

Browser Support (tested):
===========
- Firefox 21
- Chrome 25
- Opera 12
- Safari 5
- IE 8
