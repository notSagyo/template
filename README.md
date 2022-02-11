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
Add ``Prod`` at the end to minify and/or add other production processors to the pipeline:
```
gulp buildCssProd

gulp buildSassProd
```

## Stylelint
Recommended to use VSCode extension [stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint); since version ``1.x`` doesn't support SCSS by default add it to VSCode's ``settings.json``:
```
"stylelint.validate": [
    (other languages),
	"scss"
]
```
