if (!("paintWorklet" in CSS)) {
    await import("css-paint-polyfill")
}

CSS.paintWorklet.addModule(
    `https://www.unpkg.com/css-houdini-squircle@0.3.0/squircle.min.js`
)