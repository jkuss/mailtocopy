mailtocopy
==========

jQuery Plugin to allow click or copy/paste of email address in HTML

Its goal is to allow users to click mail links to use their device's native email client OR copy addresses to use a web-based client easily. If you write your mailto link as normal and add a class, you can call `mailtocopy()` on that class using jQuery. The raw link continues to function and doesn't disrupt the flow of the paragraph or other inline elements.

This plugin handles all standard options on the mailto link (multiple addresses, subject lines, etc.) There are no options, CSS is added to the `&lt;head&gt;`. The default CSS disables the plugin functionality on devices smaller than 768px wide (&lt; desktop). This prevents hovers from overriding clicks on mobile devices and most people use the native email client on their mobile device anyway. Override CSS as you wish.
