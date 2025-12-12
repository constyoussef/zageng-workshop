# 🎨 Full CSS Essential Properties and Concepts Syllabus

This comprehensive checklist covers all the fundamental CSS concepts, selectors, properties, and layout models necessary for styling modern web applications.

---

## 1. Core Concepts & Syntax

These are the foundational building blocks of CSS—how you write rules and how those rules are applied.

| Concept/Keyword | Purpose | Example Syntax |
| :--- | :--- | :--- |
| **Selector** | Targets the HTML element(s) to be styled. | `h1` |
| **Declaration Block** | Contains one or more declarations (properties and values). | `{ color: blue; font-size: 24px; }` |
| **Property** | The specific feature of an element you want to change. | `color`, `font-size` |
| **Value** | The specific setting you want to apply to the property. | `blue`, `24px` |
| **Rule Set** | The complete structure: **Selector** + **Declaration Block**. | `h1 { color: blue; }` |
| **Specificity** | The algorithm that determines which CSS rule applies to an element when multiple rules conflict. | *ID Selectors* > *Class Selectors* > *Element Selectors* |
| **Inheritance** | How property values are passed down from a parent element to its descendants (e.g., `color`, `font-family`). | |
| **Cascade** | The process by which CSS rules are combined and resolved based on origin, importance, and specificity. | |
| **`!important`** | An override flag to give a declaration maximum importance (use sparingly). | `color: red !important;` |
| **Comments** | Used for adding notes to your CSS code. | `/* This is a comment */` |

---

## 2. Basic Selectors

These are the primary methods for targeting elements in your HTML.

| Selector Type | Syntax | Description |
| :--- | :--- | :--- |
| **Element/Type** | `p` | Selects all elements of a given HTML tag name. |
| **ID** | `#myId` | Selects the **single** element with the matching `id` attribute. |
| **Class** | `.myClass` | Selects **all** elements with the matching `class` attribute. |
| **Universal** | `*` | Selects all elements on the page. |
| **Descendant** | `div p` | Selects all `<p>` elements that are inside a `<div>`. |
| **Child** | `ul > li` | Selects all `<li>` elements that are **direct children** of a `<ul>`. |
| **Adjacent Sibling** | `h1 + p` | Selects the first `<p>` element that **immediately follows** an `<h1>`. |
| **General Sibling**| `h1 ~ p` | Selects **all** `<p>` elements that are preceded by an `<h1>`. |
| **Attribute** | `[type="text"]` | Selects elements that have the specified attribute/value. |

---

## 3. Pseudo-classes and Pseudo-elements

These allow you to style elements based on their state or target specific parts of an element.

| Selector Type | Syntax | Purpose |
| :--- | :--- | :--- |
| **`:hover`** | `a:hover` | Styles an element when the user **mouses over** it. |
| **`:active`** | `button:active` | Styles an element while it is being **activated/clicked**. |
| **`:focus`** | `input:focus` | Styles an element when it has been **selected** (e.g., in a form). |
| **`:nth-child(n)`**| `li:nth-child(2)` | Selects an element based on its position among its siblings. |
| **`:first-child`** | `p:first-child` | Selects the element that is the first child of its parent. |
| **`:last-child`** | `p:last-child` | Selects the element that is the last child of its parent. |
| **`::before`** | `h1::before` | Inserts content **before** the content of an element. |
| **`::after`** | `h1::after` | Inserts content **after** the content of an element. |

---

## 4. Typography and Text Properties

How text is displayed, positioned, and styled.

| Property | Purpose | Values (Examples) |
| :--- | :--- | :--- |
| `font-family` | The typeface to be used. | `Arial, sans-serif` |
| `font-size` | The size of the text. | `16px`, `1.2em`, `1rem` |
| `font-weight` | The thickness/boldness of characters. | `normal`, `bold`, `700` |
| `font-style` | Sets the text to normal, italic, or oblique. | `normal`, `italic` |
| `color` | The color of the text/foreground. | `#333`, `rgb(0,0,0)` |
| `text-align` | Horizontal alignment of text within the element. | `left`, `center`, `right`, `justify` |
| `text-decoration` | Adds lines to text. | `none`, `underline`, `line-through` |
| `line-height` | The vertical spacing between lines of text. | `1.5`, `24px` |
| `letter-spacing`| The horizontal spacing between characters. | `2px` |

---

## 5. The Box Model

Every HTML element is a rectangular box. Understanding this model is fundamental to layout.

| Property/Concept | Purpose | Notes |
| :--- | :--- | :--- |
| **Content** | The actual content (text, image, etc.). | Defined by `width` and `height`. |
| **Padding** | Space *inside* the border, between the content and the border. | Increases the size of the box. |
| **Border** | A line between the padding and the margin. | Defined by `border-width`, `border-style`, `border-color`. |
| **Margin** | Space *outside* the border, between the element and other elements. | Margins on block elements can **collapse**. |
| `box-sizing` | Changes how `width`/`height` are calculated. | **`border-box`** is often preferred for layout. |
| `display` | Defines the display type of an element. | `block`, `inline`, `inline-block`, `none`, `flex`, `grid`. |

---

## 6. Sizing and Units

Controlling the dimensions of elements and understanding the different units of measurement.

| Property | Purpose | Values (Examples) |
| :--- | :--- | :--- |
| `width` / `height` | Sets the dimensions of the content area. | `300px`, `50%` |
| `min-width` / `max-width` | Sets constraints on element dimensions. | Useful for responsive design. |
| **`px`** | Absolute unit (Pixels). | Standard screen measurement. |
| **`%`** | Relative to the parent element. | `width: 50%` means half of the parent's width. |
| **`em`** | Relative to the **font-size** of the **parent element**. | Good for relative sizing and spacing. |
| **`rem`** | Relative to the **font-size** of the **root (`<html>`) element**. | Excellent for consistent, accessible sizing. |
| **`vw` / `vh`** | Relative to the **Viewport** width/height. | `1vw` is 1% of the viewport width. |

---

## 7. Positioning and Layering

Controlling the placement and stacking order of elements.

| Property | Purpose | Values (Notes) |
| :--- | :--- | :--- |
| `position` | Specifies the type of positioning method. | `static`, **`relative`**, **`absolute`**, **`fixed`**, **`sticky`**. |
| `top`, `bottom`, `left`, `right` | Used to offset a positioned element. | Only works with `position` values other than `static`. |
| `z-index` | Controls the stacking order of positioned elements. | Higher number means closer to the user (on top). |
| `overflow` | Specifies how to handle content that exceeds the element's box. | `hidden`, `scroll`, `auto`. |

---

## 8. Layout Models (Flexbox and Grid)

The modern, primary methods for organizing page content.

### Flexbox (1D Layout)

| Property | Applies To | Purpose |
| :--- | :--- | :--- |
| `display: flex` | **Parent** (Flex Container) | Activates the Flex formatting context. |
| `flex-direction` | **Parent** | Sets the direction of the main axis (`row`, `column`). |
| `justify-content` | **Parent** | Aligns items **along the main axis**. |
| `align-items` | **Parent** | Aligns items **along the cross axis**. |
| `flex-grow` | **Child** (Flex Item) | Specifies how a flex item should grow relative to the others. |
| `order` | **Child** | Controls the display order of flex items. |

### Grid (2D Layout)

| Property | Applies To | Purpose |
| :--- | :--- | :--- |
| `display: grid` | **Parent** (Grid Container) | Activates the Grid formatting context. |
| `grid-template-columns` / `rows` | **Parent** | Defines the structure by setting column/row sizes. |
| `grid-gap` / `gap` | **Parent** | Sets the spacing (gutters) between grid cells. |
| `grid-column` / `row` | **Child** (Grid Item) | Defines where an item starts and ends in the grid structure. |
| **`fr` unit** | **Parent** (in `grid-template...`) | The "fractional unit" for flexible grid track sizing. |

---

## 9. Visual Effects and Transforms

Adding non-layout effects and animations.

| Property | Purpose | Values (Examples) |
| :--- | :--- | :--- |
| `background-color`| Sets the background color of an element. | `transparent`, `#FFF` |
| `background-image`| Sets an image as the background. | `url('image.jpg')` |
| `border-radius` | Creates rounded corners. | `5px`, `50%` (for a circle) |
| `opacity` | Sets the transparency of an element. | `0` (invisible) to `1` (fully visible) |
| `box-shadow` | Adds a shadow effect to an element's box. | `2px 2px 5px rgba(0,0,0,0.5)` |
| `transform` | Applies 2D or 3D transformations. | `rotate(45deg)`, `scale(1.1)`, `translateY(10px)` |
| `transition` | Defines animated effects between two states (e.g., on `:hover`). | `property duration timing-function delay` |
| `animation` | Allows for complex, multi-step animations. | |

---

## 10. Preprocessors and Advanced Concepts

Key topics for professional and scalable CSS.

| Concept/Tool | Purpose | Notes |
| :--- | :--- | :--- |
| **Media Queries** | Allows you to apply styles based on device characteristics. | Essential for **Responsive Web Design**. |
| **Variables** (Custom Properties) | Store reusable values directly in CSS. | `body { --main-color: blue; }` |
| **Nesting** | Writing nested selectors for cleaner, modular code. | Available in preprocessors (Sass/LESS) and native CSS. |
| **Sass/LESS** | CSS preprocessors that add features like variables, mixins, and functions. | Compile down to standard CSS. |
| **PostCSS** | A tool for transforming CSS with JavaScript plugins. | Used for vendor prefixing, future CSS features, etc. |