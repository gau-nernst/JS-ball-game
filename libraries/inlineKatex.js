/* This script is used to render inline LaTeX math expressions
 * 
 * Inline math expressions are warped in <span> block with the class "math"
 * It calls the KaTeX render function to render the math expressions
 * 
 * NOTE: the HTML document must load KaTeX first
 */

let mathInline = document.querySelectorAll('span.math');
for(let i=0; i<mathInline.length; i++) {
    katex.render(mathInline[i].innerText,mathInline[i]);
}