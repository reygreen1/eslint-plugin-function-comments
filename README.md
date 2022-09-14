# eslint-plugin-function-comments

检查 function 是否包含 JSDoc 注释的插件

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-function-comments`:

```
$ npm install eslint-plugin-function-comments --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-function-comments` globally.

## Usage

Add `function-comments` to the plugins section of your `.eslintrc` configuration file or `package.json`. You can omit the `eslint-plugin-` prefix:

`package.json` demo
```json
"eslintConfig": {
    "plugins": [
      "function-comments"
    ]
}
```

After the configuration is complete, you can see the prompts when coding and building