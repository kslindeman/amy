# Amy's Site

First open terminal and change to the directory of the project:

```bash
> cd path/to/project
```

Run Gulp to compile the Sass, watch for file changes, and run the Node.js app:

```bash
> gulp
```

To add a new page, first add a route to `app.js`:

```javascript
app.get('/new-page', render('new-page'));
```

Then add a `new-page.jade` file to the `views` folder.