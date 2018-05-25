# jQuery Methods and Animations

**NOTE:** The majority of this lecture makes use of starter code found in
`index.html`, `index.css`, `index.js`. Unlike the previous materials, we have
included all the relative imports, (jQuery, the stylesheet, and our script), in
`index.html`. Still, take a moment to show students the files and remind them
where we are importing them and why we have to in `index.html`.  

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
`animate` method. Go ahead and put it in our `index.js` (jQuery, `index.js`, and
`index.css` have all already been included in `index.html`):

```js
var precious = $("#elegant-cat-gif")

// here, we are passing in an object saying which attributes we want to change to what values
precious.animate({
  height: "100%", // 100% of its parent's height (which is the whole window)
  width: "100%" // 100% of its parent's width (which is the whole window)
})
```

Any professional animator will tell you that how smooth something moves is just
as important as it moving itself. jQuery has that covered, too, and the speed
can optionally be set. The element will adjust to the new parameters over the
given amount of time (in milliseconds):

```js
var precious = $("#elegant-cat-gif")

precious.animate({
  height: "100%", 
  width: "100%" 
}, 1500)
```

 ...in fact, we can take even take this a step further and fire off a function
when the animation completes...

**NOTE:** To protect you from annoying ads, Chrome _won't play the following
audio if you don't click the screen before the animation ends_. Make sure to
click or interact with the website in any way before the animation completed.
This is example is just for fun, try not to let students get hung up on audio
elements, why the sound won't play unless we interact first, or why this isn't
done with jQuery in `index.html`

```js
var precious = $("#elegant-cat-gif")

precious.animate({
  height: "100%", 
  width: "100%" 
}, 1500, roar) // roar is a function that is provided in index.html. Here, we are using it as a callback that is invoked once jQuery says "alright! the animation is complete!"
```


#### Translating, (or "Moving"), Elements

Keep in mind that the [CSS default position][css-position] for all elements is
static (i.e. `position: static` a.k.a. positions itself according to the flow of
the page and elements around it). Therefore, any jQuery animation that moves an
object will not work unless you set the CSS `position` to one of the other
values: `relative`, `absolute` or `fixed`.

**NOTE:** To make this real, open up the Chrome console and attempt to execute: 
`precious.animate({top: '200px'})`. This won't work, because we haven't defined
a `position` value for the `<img>` tag (it has defaulted to `static`). In the
elements tab, locate the `<img>` DOM element and update its style with 
`position: relative` and try re-running the `animate` method while providing
different `top` values. Following, you can update this permanently in `index.css`

The simplest way to _translate_ an element (which is the graphics programming
term for "move") is to change either the `top`, `bottom`, `left`, or `right`
properties. Using jQuery, these can be absolute or relative:

**NOTE:** As it was introduced in the last lecture, we are going to throw in an
example with an event listener/handler. Remind students their role and that we
can write the event handler directly in-line!

```js
// alternate the animate functions to see the difference between absolute and relative translations
precious.click(function() {
  precious.animate({left: '500px'}, "fast") // absolute to an anchor
  // precious.animate({left: '+=20px'}, "slow") // relative to the elements current position
})
```

As we experience in the browser when testing the code above, _absolute_
translations occur according to some fixed anchor. _Relative_ translations occur
according to the CSS position of the element (and are _not_ cumulative in this
example). Now we're really starting to get a feel for how pages work! Even with
the few tools we have now, there is endless [dankification][dankification] we
can do to our (and other people's!) websites.


### Interactivity and Validation

So far, we've mostly been manipulating elements directly jQuery code. What we
would like to do is abstract the actual function calls and code from the user,
so they simply experience interactivity as magic!

We can add interactivity to the page with our old friend, the **event
listener**, to give them a sense of response and control over the page. Let's
see how this is particularly useful through the lens of the ubiquitous **form**!

<p align="center"><a href="https://imgflip.com/i/2azju1"><img src="https://i.imgflip.com/2azju1.jpg"/></a> </p>

Maybe?<sup> Not really...but we can make them nice for users!</sup>

As you know, forms are ubiquitous on the web! We see them everywhere, from
Amazon Shopping carts to clickbait surveys! The amount of work that has gone
into integrating the creation and submittal of forms in all aspects of web
programming is staggering. Let's see how we can do our little part to make them
even better with some **validation event listeners**! (who doesn't like a little
validation, anyways?).

Consider: have you ever entered data into a form, clicked "submit" and waited
for the page to refresh only to be told your phone number needs to be in a
different format? Oh, and along with that format issue, the website went ahead
and erased your whole form? This is not elegant -- this is the opposite of elegant and 
**_we_** are going to fix it!

**NOTE:** This example makes use `form-example.html`, with the JavaScript code
imported from `form-example.js`. Make sure to switch gears and open it in
Chrome.

When users enter data on a form there is often a need to validate the data
entered. We could have the user submit the form and task our server with the
job, but there are several downsides (such as the one mentioned above)
associated with this. Instead, we can validate right then and there using the
jQuery we already know! Let's practice with an example where a user is supposed
to enter their email. 

**NOTE:** Query the students how they think we might go about doing this. We are
looking for anything along the lines of "event listener / whenever the input is
updated / checks if it is valid and changes the DOM somehow". All the code for
the following example has been provided, except for the event listener/handler.

Take a moment to review what we already have in `form-example.js`:
  - a function that returns a boolean to whether a given argument is a valid email string
  - a function that does something to reward the user
  - a function that executes the validation check for the `<input id="email-input">` element
  
All we need to do now is attach the event listener, and make sure an appropriate handler is affixed to it, waiting to fire off whenever the contents of our input field change:

```js
$("#email-input").on("input", validateEmail)
```

With this, a user no longer needs to provide a value, hit "submit" and hope for the best. Instead, they have immediate and satisfying validation in the form of an oversized kitten meme roaring at them. This, unlike having your form destroyed, is indeed **elegant**. 
  

#### Moving Forward

jQuery gives us a lot of flexibility and elegance when improving our websites
with JavaScript. Selecting is only half the battle, and by leveraging the
built-in methods, we can let jQuery do most of the heavy lifting for us.

[css-position]: https://www.w3schools.com/css/css_positioning.asp
[dankification]: https://www.urbandictionary.com/define.php?term=dankify
