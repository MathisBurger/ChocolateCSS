<div align="center">
    <h1>ChocolateCSS</h1>
    <strong>
        A basic CSS libary made for modern design.
    </strong>
    <br>
    <hr>
    <img src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" height="100">

</div>

# Information

---
ChocolateCSS is an lightweight scss libary, I build for use
in my personal projects. I wanted to learn more about professional web design. Furthermore I my intention behind this project was, to get rid of css boilerplate code.<br>
ChocolateCSS is not made for beginners. It is especially made for people, who want to design their web pages or apps very fast. But you need at least a bit of css experience.

<strong>NOTE:</strong> This libary is made for the development of dark themes. It is quite hard to build light themes with it.

# Installation

---
Latest release: 
<a href="https://github.com/MathisBurger/ChocolateCSS/releases/download/v1.0.3/">Download</a>

Download the latest release and import it in your html or 
css by using the following lines of code.

CSS:
```css
@import url("<pathToMinCSS>");
```

HTML:
```html
<link rel="stylesheet" href="<pathToMinCSS>">
```

<strong>NOTE:</strong> You need following line of code in your `head` tag. If you do not, the whole responsive design will not work.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Now unzip the scripts.zip and place the `js/` folder whereever you want.
It is important, because you will need these scripts for further functionalities of the libary.

# Scripts

---
If you are using some functionallity, that requires javascript, you will need to add these scripts:

Navbar:
```html
<script src="js/navbar-toggler.js"></script>
```

Sidebar:
```html
<script src="js/sidebar-toggler.js"></script>
```

# Documentation

---
You do not know how to use ChocolateCSS?<br>
Check out the easy to use documentation and play arround with it.

- <a href="documentation/buttons.md">Buttons</a>
- <a href="documentation/flex.md">Flex</a>
- <a href="documentation/navbar.md">Navbar</a>
- <a href="documentation/sidebar.md">Sidebar</a>
- <a href="documentation/cards.md">Cards</a>
- <a href="documentation/dropdown.md">Dropdown</a>
- <a href="documentation/scripts.md">Scripts</a>


# Usage with React

First, you need to import the `chocolate.min.css` file into your `index.html` in the `public/` folder.

Now you are able to use the pure css in your React app.

Using scripts is a bit more trickier than the css.

```jsx
componentDidMount() {
       const script = document.createElement("script");
       script.src = "/sidebar-toggler.js";
       document.body.appendChild(script);
   }
```

You can use the `componentDidMount` react hook to load the script correctly.
Just implement it into your React component and you are good to go

