/**
 * A void element is an element whose content model never allows it to have contents under any circumstances. Void elements can have attributes. The following is a complete list of the void elements in HTML : area , base , br , col , command , embed , hr , img , input , keygen , link , meta , param , source , track , wbr.
 
flex-box
The Flexbox is a  one-dimensional layout method for layout items in row columns.
CSS flexbox is a better way to align items into a container
Flexbox = flexible + box



noscript
viewport
Boxing
pseudo-class vs pseudo-element
    Pseudo-classes are used to define a special state of an element, such as :hover, :focus, or :nth-child. They allow you to style elements based on user interaction or their position in the DOM.

    Pseudo-elements are used to style specific parts of an element, such as ::before and ::after, which insert content before or after the element's actual content.

display:none vs visibility:hidden
display:none; - It completely removes an HTML tag from the web page like it was never there.
visibility:hidden;  - It makes the tag invisible but will not remove the element, and it will still occupy the space on the page.

z-index
Note: Z-index does not work on static position value. It only works on the elements with position: relative, absolute, fixed, or sticky.


center an element horizontally and vertically using CSS?
    1. Using Flexbox:
        This method is simple and works well for dynamic or unknown heights and widths.
        
        css
        Copy code
        .container {
            display: flex;
            justify-content: center; /* Horizontally centers the element * /
            align-items: center;     /* Vertically centers the element * /
            height: 100vh;           /* Full viewport height * /
        }

        .element {
            width: 100px;
            height: 100px;
            background-color: lightblue;
        }
    2. Using CSS Grid:
        Another clean and effective way to center elements is using Grid layout.

        css
        Copy code
        .container {
            display: grid;
            place-items: center; /* Centers both horizontally and vertically * /
            height: 100vh;
        }

        .element {
            width: 100px;
            height: 100px;
            background-color: lightblue;
        }
    3. Using Absolute Positioning and Transform:
        This method is useful when the element’s size is known.

        css
        Copy code
        .container {
            position: relative;
            height: 100vh;
        }

        .element {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); /* Shifts element to center * /
            width: 100px;
            height: 100px;
            background-color: lightblue;
        }
    Summary:
        Flexbox: Ideal for centering when the element’s size is dynamic or unknown.
        Grid: Simplifies centering with minimal code.
        Absolute + Transform: Works well for fixed-size elements.

'em', 'rem', and 'px' units?
    Definition: A pixel is a fixed unit of measurement that represents a single point on the screen. It is an absolute unit and does not scale with the font size or viewport size.
    Use case: Best used when you want fixed, consistent sizes that don’t need to change relative to anything. Common for precise layouts and graphics.
    
    Definition: The em unit is relative to the font size of the parent element. If no parent size is explicitly set, it falls back to the root font size (usually 16px by default in most browsers).
    Behavior: It scales based on the font size of the nearest parent element. Multiplying occurs with nested elements, which can cause unintended scaling unless controlled.
    Use case: Useful when you want sizes that scale based on the context or surrounding text. Frequently used for responsive design.

    Definition: The rem unit is relative to the root element's font size (typically the <html> element). By default, the root font size in most browsers is 16px, unless it is explicitly changed.
    Behavior: It does not compound like em. Instead, it stays consistent regardless of nested elements, making it more predictable.
    Use case: Preferred for creating scalable and responsive layouts without the risk of compounding values. It's easier to control for global sizing (e.g., defining global font sizes, padding, and margins).
    
    px: Absolute unit. Does not scale.
    em: Relative to the font size of its parent element. Can scale with nested elements.
    rem: Relative to the root font size (<html>). Consistent across nested elements.


 transform and transition are distinct properties with different purposes:
    transform modifies the appearance of an element (e.g., scale, rotate, skew, translate)
    transition defines how changes in CSS properties should occur over time, creating smooth animations



flexbox --https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    .container {
    display: flex; /* or inline-flex * /
    }
    // flex-direction: row | row-reverse | column | column-reverse;
    //  order: 5; /* default is 0 * /
    // flex-grow: 4; /* default 0 * /
    // flex-shrink: 3; /* default 1 * /
    // flex-wrap: nowrap | wrap | wrap-reverse;
    //  flex-flow: column wrap;


    //row (default): left to right in ltr; right to left in rtl
    //row-reverse: right to left in ltr; left to right in rtl
    //column: same as row but top to bottom
    //column-reverse: same as row-reverse but bottom to top


    Box Model
        margin --> outer border
        padding--> inner border
 
1. Grid:
    A CSS layout system that divides the page into rows and columns. It provides flexible layouts using a grid structure.

    display: grid;
    grid-template-columns: 1fr 1fr;
2. @mixin (SCSS):
    A reusable block of styles in SCSS that can be applied to multiple selectors.

    @mixin box-shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .card {
    @include box-shadow;
    }
3. static (Positioning):
    The default position of elements. They appear in the normal document flow without any special positioning.

    position: static;

4. relative (Positioning):
    Positions an element relative to its normal position, allowing it to be moved with top, left, right, or bottom.

    position: relative;
    top: 10px;

5. absolute (Positioning):
    Positions an element relative to its closest positioned ancestor (other than static). It is removed from the normal flow.

    position: absolute;
    top: 50px;

6. fixed (Positioning):
    Positions an element relative to the viewport. It stays in place even when the page is scrolled.

    position: fixed;
    top: 0;

7. sticky (Positioning):
    An element behaves like relative until a certain scroll position is reached, then it behaves like fixed.

    position: sticky;
    top: 20px;

8. z-index:
    Determines the stacking order of elements along the z-axis (which element appears on top). Higher z-index values place elements in front of lower ones.

    z-index: 10;

9. Clearfix:
    A technique used to clear floated elements within a container, ensuring the container wraps around them properly.

    .clearfix::after {
    content: "";
    clear: both;
    display: block;
    }













 */