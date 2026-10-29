function extractBodyContent(htmlString) {
  // Split on the opening <body> tag. Index [1] is everything that comes after it,
  // so the <html> and <head> sections are discarded.
  const afterOpenTag = htmlString.split('<body>')[1];

  // Split what remains on the closing </body> tag. Index [0] is everything before it,
  // which drops the closing tag and anything after it, like </html>.
  const bodyContent = afterOpenTag.split('</body>')[0];

  // Return the inner content exactly as written. Whitespace and newlines are kept
  // because the expected output includes them.
  return bodyContent;
}

// Example 1
const html1 = `<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>`;

console.log(JSON.stringify(extractBodyContent(html1)));
// "\n    <h1>Welcome!</h1>\n    <p>This is my new React app.</p>\n  "