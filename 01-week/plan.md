# 📚 Full HTML Essential Tags and Elements Syllabus

This comprehensive checklist covers all the fundamental HTML tags, elements, and crucial attributes necessary for building a strong foundation in modern web development.

---

## 1. Document Structure & Metadata

These tags define the overall document and provide information about the page (the head content).

| Tag | Purpose | Example Usage |
| :--- | :--- | :--- |
| `<!DOCTYPE html>` | The required declaration to define the document type. | (At the very top) |
| `<html>` | The root element of an HTML page. | `<html lang="en">` |
| `<head>` | Container for metadata (information about the document). | |
| `<title>` | Defines the title shown in the browser tab. | `<title>My First Page</title>` |
| `<meta>` | Provides metadata (e.g., character set, viewport). | `<meta charset="UTF-8">` |
| `<link>` | Links external resources, like a CSS file. | `<link rel="stylesheet" href="style.css">` |
| `<style>` | Contains CSS code (for internal styling). | |
| `<script>` | Used to embed or link executable code (JavaScript). | |
| `<body>` | Contains all the visible contents of the document. | |

---

## 2. Text and Semantics

These tags are used to format and structure text content meaningfully.

| Tag | Purpose | Example Usage |
| :--- | :--- | :--- |
| `<h1>` to `<h6>` | Defines headings (level 1 to level 6). | `<h1>Main Title</h1>` |
| `<p>` | Defines a paragraph. | `<p>This is a paragraph.</p>` |
| `<br>` | Inserts a single line break. | |
| `<hr>` | Inserts a thematic break/horizontal rule. | |
| `<strong>` | Defines text with strong importance (usually bold). | `<strong>Important!</strong>` |
| `<em>` | Defines emphasized text (usually italic). | `<em>Emphasis</em>` |
| `<b>` | Bold text (stylistic only). | `<b>Bold</b>` |
| `<i>` | Italic text (stylistic only). | `<i>Italic</i>` |
| `<blockquote>` | Defines a section that is quoted from another source. | |
| `<code>` | Defines a piece of computer code. | |

---

## 3. Links and Images

These tags connect pages and embed graphics.

| Tag | Purpose | Example Usage |
| :--- | :--- | :--- |
| `<a>` | Defines a hyperlink (Anchor tag). | `<a href="page.html">Link</a>` |
| `<img>` | Defines an image. | `<img src="pic.jpg" alt="A photo">` |

---

## 4. Lists

These tags structure items into ordered or unordered groups.

| Tag | Purpose | Example Usage |
| :--- | :--- | :--- |
| `<ul>` | Defines an unordered (bulleted) list. | |
| `<ol>` | Defines an ordered (numbered) list. | |
| `<li>` | Defines a list item. | `<li>Item One</li>` |
| `<dl>` | Defines a description list. | |
| `<dt>` | Defines a term in a description list. | |
| `<dd>` | Defines the description/definition of a term. | |

---

## 5. Forms and Input

These tags are essential for collecting user data.

| Tag | Purpose | Example Usage |
| :--- | :--- | :--- |
| `<form>` | Defines an HTML form for user input. | |
| `<input>` | Defines an input field (text, password, submit, etc.). | `<input type="text" name="user">` |
| `<label>` | Defines a label for an `<input>` element. | `<label for="user">Name:</label>` |
| `<textarea>` | Defines a multi-line text input control. | |
| `<select>` | Defines a dropdown list. | |
| `<option>` | Defines an option in a `<select>` list. | |
| `<button>` | Defines a clickable button. | `<button type="submit">Send</button>` |

---

## 6. Tables

These tags are used to present tabular data.

| Tag | Purpose | Example Usage |
| :--- | :--- | :--- |
| `<table>` | Defines an HTML table. | |
| `<tr>` | Defines a row in a table. | |
| `<th>` | Defines a header cell in a table. | |
| `<td>` | Defines a standard data cell in a table. | |
| `<thead>` | Groups the header content in a table. | |
| `<tbody>` | Groups the body content in a table. | |
| `<tfoot>` | Groups the footer content in a table. | |

---

## 7. Semantic & Generic Grouping (HTML5 Layout)

These tags are used to structure the page layout meaningfully.

| Tag | Purpose | Notes |
| :--- | :--- | :--- |
| `<div>` | Generic block-level container. | Used for non-semantic grouping. |
| `<span>` | Generic inline container. | Used to style small parts of text. |
| `<header>` | Introductory content or navigation links. | Top part of a document or section. |
| `<nav>` | Contains navigation links. | |
| `<main>` | The dominant content of the document. | Should be used only once. |
| `<section>` | A generic section of a document. | Grouping related content. |
| `<article>` | Independent, self-contained content (e.g., a blog post). | |
| `<aside>` | Content related to the main content but separate (e.g., sidebar). | |
| `<footer>` | Footing content for its nearest sectioning element. | |

---

## 8. Media

These tags embed audio and video content.

| Tag | Purpose | Example Usage |
| :--- | :--- | :--- |
| `<audio>` | Embeds sound content. | `<audio controls src="song.mp3"></audio>` |
| `<video>` | Embeds video content. | `<video controls src="movie.mp4"></video>` |
| `<iframe>` | Embeds another HTML document within the current document. | |

---

## 9. Essential Global Attributes & Comments

These concepts apply to almost all HTML elements and are crucial for styling, scripting, and documenting your code. 

| Concept/Attribute | Purpose | Applies To | Key Use |
| :--- | :--- | :--- | :--- |
| **`id`** | Defines a **unique identifier** for an element. | Almost all elements. | Used for specific targeting by **JavaScript** or linking. |
| **`class`** | Defines one or more **class names** for an element. | Almost all elements. | The primary way to apply **CSS styles** to multiple elements. |
| **`title`** | Provides extra information about an element (a tooltip). | Almost all elements. | Appears when the mouse hovers over the element. |
| **`data-*`** | Allows you to store **custom data**. | Almost all elements. | Used by **JavaScript** to hold extra, non-visual information. |
| **`<!-- This is a comment -->`** | **HTML Comment**. | Document flow. | Used for adding notes, explaining code, or temporarily disabling code. |

---