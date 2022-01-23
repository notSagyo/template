# Website Template
Template with some memos to quickly initialize my personal web projects.
## Compile code
Compile CSS with:

```
gulp buildCss

gulp watchCss
```
For SCSS files:
```
gulp buildSass

gulp watchSass
```
Add ``Dist`` at the end to minify and/or add other dist processors to the pipeline:
```
gulp buildCssDist

gulp buildSassDist
```

## Stylelint
Recommended to use VSCode extension [stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint). Since version ``1.x`` don't support SCSS by default add it to VSCode's ``settings.json``.
```
"stylelint.validate": [
    (other languages),
	"scss"
]
```
