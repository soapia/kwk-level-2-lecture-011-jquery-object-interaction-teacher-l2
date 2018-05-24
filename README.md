# jQuery Methods, Animation


## Objectives

This lesson aims to dive deeper into jQuery, and how we can use it to augment
our websites further with animations and interactivity. 

## SWBATS

+ JQUERY - Explain what a jQuery method is
+ JQUERY - Explain the capabilities and limitations of what can be performed with methods, and when to use them
+ JQUERY - Use jQuery methods to manipulate specific UI elements


## Introduction

We've learned about selectors, and done a crash course on event listeners, but
that's only half of it! Once we have an element in hand, jQuery provides us with
the ability to implement very cool interactive actions and effects on DOM
elements via **methods**.

We have many different components that make up a typical webpage, and jQuery has
specific methods that act on these components. Take, for example, how
traditional (such as setting a background color of an element) can be done with
CSS. As you know, this would be a one-time setting when loading the page. What
if instead we wanted to tweak the background color after the page loads? This is
where jQuery can really spice things up: using some of jQuery's built-in
methods, we can do just that! Let's take a look:

**NOTE:** Use the starter files throughout the lecture to show the code in real time. `open index.html` in Chrome.

```js
$('body').css("background-color", "green")
```

Easy enough! This will change the background color to green. We can see this in
action by running it directly in Chrome Developer Console or by placing it into
our `index.js` to trigger it programmatically.  


### Animations

Changing the background color is nifty, but let's explore something a little
more involved. jQuery has tons of animation methods: The `animate` method in
particular allows us to create a custom animation on any HTML element. The
method accepts an object of CSS `key: value`s as an argument.

Let's imagine we have an image of a cat on our website (which we do) and that we
want to make it bigger (which we very much do). We could achieve this with the
`animate` method. Go ahead and put it in our `index.js` (jQuery, `index.js`, and `index.css` have all
already been included in `index.html`):

```js
var precious = $("#dank-cat-gif")

// here, we are passing in an object saying which attributes we want to change to what values
precious.animate({
  height: "100%", // 100% of its parent's height (which is the whole window)
  width: "100%" // 100% of its parent's width (which is the whole window)
})
```

Any animator will tell you that how smooth something moves is just as
important as it moving itself. jQuery has that covered, too, and the speed can
optionally be set as well. The element will adjust to the new parameters over
the given amount of time (in milliseconds):

```js
$('img').animate({
  height: '500px'},5000)
```



#### fadeOut

 In addition to moving stuff around, we can animate traits of an element
without moving the element itself. The `fadeOut` method, for example, changes
the opacity of the selected elements.

Let's take the cat image again:

```html
<img src="images/cat.png">
```

We could make the cat disappear by using `fadeOut`. This method also accepts a
parameter of the amount of time in milliseconds for the item to fade:

```js
$('img').fadeOut(6000);
```

Remember that these are all actions we can trigger based on something else, like
the **event listeners** we learned about earlier.  

#### Changing Position and Relative Values with Events

Keep in mind that the CSS position default for all elements is static.
Therefore, any jQuery animation that moves an object will not work unless you
set the CSS position to one of the other values: relative, absolute or fixed.

To move an element left, right up and down, the simplest way is by changing
either the top, bottom, left or right properties. These can be absolute or
relative:

```js
$("button").click(method(){
        $("#img1").animate({top: '200px'}, "fast");
        $("#img2").animate({left: '+=20px'}, "slow");
    });
```

In the above method, the click of the button triggers two events. The element
with the id #img1 moves so that it's top edge is 200px below it's nearest
ancestor. The element with the id #img2 moves so that it's left edge is 20px
further right than it used to be. And all of this happens with the click from
the user! Now we're really starting to get a feel for how pages work.



### Data & Interactivity

So far we've learned how to manipulate elements with direct jQuery code. But we
don't expect our users to do that! We can add interactivity to the page through
things like buttons, forms and other ways to monitor user input, to give them a
sense of control over the page experience. We can also collect data from them.

When users enter data on a form there is often a need to validate the data
entered. We could have the user submit the form and task our server with the
job, but there are several downsides to this.

Enter JavaScript and jQuery! By allowing us to **script on the frontend**, we
can provide instantaneous feedback to the user. With traditional JavaScript we
could accomplish this, but when we have jQuery at our disposal we're able to do
it so much easier. Let's say you're building a form for an online order.
Typically, you give your user an option to check if their shipping address is
different than their billing address. If they click the box that they are
different addresses, then they would expect an additional form to fill out for
shipping address. In order to achieve this, you would want to check the `value`
of the checkbox, and trigger the form to be filled out if it is checked with the
`val` method. This allows us to collect all the data on a single page determined
by logic.  Without this, a user would have to first submit their form, and, if
they chose to click the box that they have different addresses, they would need
to be redirected to a second form where they can enter the second address.

The `val()` method returns the `value` attribute for an HTML element.

Given the following HTML form for our shopping checkout:

```html
<form>
  <input type="checkbox" value="same">Same as billing address
  <input type="checkbox" value="different">Different than billing address
</form>
```

We can **select** the value of an input with:
```js
$('input').val();
```

Very elegant! One thing to remember is that this method returns the very first
match, so it would find the first input field and return `"same"`.

What if we wanted to consider both? We could change our selector to look for the
*selected* checkbox:

```js
$('input:checked').val();
```

If you wanted to change the value of the input to "choice Z" instead of
`"same"`, you would just pass a parameter to the `val` method:

```js
$('input').val("choice Z");
```



#### Wrapping Up

 jQuery gives us a lot of flexibility and elegance when working with
JavaScript. Selecting is only half the battle, and by leveraging the built-in
methods, we learned about the heavy lifting jQuery provides to us. 
