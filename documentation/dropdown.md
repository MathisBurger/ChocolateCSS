# Dropdown documentation

This part of the documentation will show you how to use the<br>
included dropdown menus of ChocolateCSS.

# Basic usage

Using single page dropdown menus with ChocolateCSS is very easy.

```html
<div class="dropdown dropdown-dark active">
    <div class="dropdown-menu">
        <div class="dropdown-menu-item">Item 1</div>
        <div class="dropdown-menu-item">Item 2</div>
    </div>
</div>
```

The other `div` tag contains three classes. The `dropdown` class defines the general structure of the dropdown.<br>
The `dropdown-dark` class defines the theme of the dropdown.
There are three different themes available.

- `dropdown-light`
- `dropdown-grey`
- `dropdown-dark`

The `active` class sets the visibility of the dropdown. `active` means, that the dropdown fades in from the top.

Into the other `div` you will have to put a div with the class `dropdown-menu`. Into this you can put your menu elements.<br>
To define a menu element, you need to put a div into your menu `div` and add another `div` with the class `dropdown-menu-item`.

# Multiple menus

Multiple menus in one dropdown menu are also possible. 

```html
<div class="dropdown dropdown-dark active">
    <div class="dropdown-menu" id="main-menu">
        <div class="dropdown-menu-item" onclick="DropdownForwardMenu('main-menu', 'sec-menu');">Item 1</div>
        <div class="dropdown-menu-item">Item 2</div>
    </div>
    <div class="dropdown-submenu" id="sec-menu">
        <div class="dropdown-menu-item" onclick="DropdownBackwardMenu('sec-menu', 'main-menu');">Item 3</div>
        <div class="dropdown-menu-item">Item 4</div>
    </div>
</div>
```

To get multiple menus in one dropdown to work, you will have to add the `dropdown-toggler.js` script to your html body.

```html
<script src="js/dropdown-toggler.js"></script>
```

After that you can go on with adding a submenu.<br>
The structure of the submenu is equal to the structure of 
default dropdown menu. Just change the class to `dropdown-submenu`.

```html
<div class="dropdown-submenu">
    <div class="dropdown-menu-item">Item 3</div>
    <div class="dropdown-menu-item">Item 4</div>
</div>
```

Your submenu is hidden now.<br>
To make them callable, you will need to add an id to every menu (Look main example).

Check out the <a href="./scripts.md">script documentation</a> to learn how to toggle between the different menus of the dropdown.