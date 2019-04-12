# md2pdf

Use (via npx):

```sh
npx github:upleveled/md2pdf#v1.0.1 file.md
```

This will create a PDF `file.md.pdf`, generated from the Markdown in `file.md`.

## Styling with CSS

PDFs can be styled with CSS by linking to the CSS file and using HTML in the markdown:

**file.md:**

```md
<link rel="stylesheet" type="text/css" href="./index.css" />
<body>

# Title

More markdown...

<div class="signatures">
  <div class="signature">
    <div>Rosa Lloyd</div>
    <div>Client</div>
  </div>
  <div class="signature">
    <div>Karl Horky</div>
    <div>Contractor</div>
  </div>
</div>

Even more markdown...

</body>
```

**index.css:**

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

p,
li,
div {
  font-size: 80%;
  line-height: 1.4;
}

.signatures {
  clear: both;
  margin-top: 4em;
}

.signature {
  border-top: 1px solid black;
  margin-top: 40px;
  padding-top: 15px;
  float: left;
  width: 44%;
  margin-right: 6%;
}
```
