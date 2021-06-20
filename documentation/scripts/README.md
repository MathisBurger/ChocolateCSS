# Script documentation

Of course, ChocolateCSS is not only plain css (scss), but it also has some javascript in it to work.

# Navbar script

If you want to use the navbar with responsive design and fully functional, you need some javascript. implementing it is quite easy.

Just add this to the bottom of your HTML body.

```html
<script src="<pathToJsFolder>/navbar-toggler.js"></script>
```

# Sidebar script

Using the sidebar script is similar to the navbar script.
You just need to add a specific line of code to your html body.

Just add this to the bottom of your HTML body.

```html
<script src="<pathToJsFolder>/sidebar-toggler.js"></script>
```

# Dropdown script

Use the `dropdown-toggler.js` script if you want to switch between different menus in your dropdown.

```html
<script src="<pathToJsFolder>/dropdown-toggler.js"></script>
```

Now you can use the script to switch between the menus.

There are two different functions you can use.

`DropdownForwardMenu`
You can use this function to switch to a new sub menu.
Its syntax is quite easy.
```js
DropdownForwardMenu('from', 'to');
```
Just call the function and replace the string parameters with the ids of the menus, you want to switch.

Same with the `DropdownBackwardMenu` function.

```js
DropdownBackwardMenu('from', 'to');
```

Its usage is the same as the usage of the `DropdownForwardMenu` function.