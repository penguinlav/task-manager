export default ({ body, title, store }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/static/build/styles.css">
        <script>
          window.__REDUX__SERVER__STORE__ = '${store}'
        </script>
      </head>
      <body>
        <div id="root">${body}</div>
        <script src="/static/build/indexBundle.js"></script>
      </body>
    </html>
  `;
};
