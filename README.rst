<x-help>
========
Pretty much any website could benefit from having more tooltips.  They're 
helpful for new users, and they don't get in the way of experienced users.  For 
complicated actions, the tooltips should be rich with information (maybe 
including graphics or links to external resources) so the user can fully 
understand what they're doing.  ``<x-help>`` is a javascript library that 
facilitates making these kind to tooltips.  It works by providing a 
``<x-help>`` tag that can be used to enclose arbitrarily-structured help 
messages.  These tags are automatically replaced by (configurable) icons that 
can be clicked to reveal the underlying help message.  This is what the HTML 
would look like::

  <x-help>Arbitrary HTML here...</x-help>
  
The biggest advantages of ``<x-help>`` tooltips:

- No boiler plate.  This lowers the barrier-to-entry for writing documentation!

- The tooltips are activated by clicking, not hovering.  Especially on pages 
  with a lot of tooltips, it's annoying to accidentally trigger a bunch of 
  dialogs just by moving your mouse around.

- No restrictions on what can go in the tooltips.  Many tooltip libraries can 
  only display strings, because the message itself is given as an attribute of 
  some element.  This unfortunately encourages messages that are succinct, 
  possibly at the expense of being helpful.  In contrast, ``<x-help>`` defines 
  a custom tag so that any markup can be used in the tooltip.

Installation
============
Copy the following files into your project:

- ``js/x-help.js``
- ``css/x-help.css``

Note that ``<x-help>`` depends on jQuery.

Usage
=====
Coming soon...
