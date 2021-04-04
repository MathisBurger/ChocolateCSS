# Card documentation

This part of the documentation will show you how to use the cards<br>
of ChocolateCSS.

# Basic usage

Using the cards of ChocolateCSS is as easy as using the other components. 

```html
<div class="card-md card-dark">
    <div class="card-heading">Heading</div>
    <div class="card-body">
        Some example text.
    </div>
</div>
```

The other `div` tag defines the card. The main class `div-md`
defines the size of the card.

There are three different card-sizes.

- `card-sm`
- `card-md`
- `card-lg`

<strong>NOTE:</strong> The size of the card changes, if you are resizing the window or using another device.

The `card-dark` defines the theme of the card. There are three different themes.

- `card-light`
- `card-grey`
- `card-dark`


# Heading

Every card has its own heading. You can use it by putting following line of code into your main `card` div.

```html
<div class="card-heading">Heading</div>
```

The size of the heading depends on the size of the card.


# Card body

The card body contains the main content of the card.

```html
<div class="card-body">
    Card content
</div>
```