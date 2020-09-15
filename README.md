# concentration

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
# init 
https://ja.nuxtjs.org/guide/installation/
npx create-nuxt-app [プロジェクト名]

REPLで質問が来るはず
NameはそのままEnter
LanguageはTS
矢印とEnterが使える
ManagerはNpm
UIはNone
ModuleはそのままEnter
LintingはそのままEnter
あとでEagleと同じにする
TestingはNone
RenderingはSingle Page App
DeployはStatic
DevToolはEnter

VScode
Japaneseで検索するとMicrosoft公式の言語パックがあるからインストール
ESLintとVeturもインストール

$ git add .
$ git commit -m "setup nuxt"
コメントはなんでもいい
VSCodeのターミナルに慣れると開発が楽になる
$ git remote add origin https://github.com/kazuki-0914/concentration.git
 npm run dev


# Tips
tsの使用
https://typescript.nuxtjs.org/cookbook/components/#template
npm i nuxt-property-decorator

アプリ再起動？
Ctrl＋CCしてからまたrun dev



Lint
npm i -D @nuxtjs/eslint-config-typescript babel-eslint eslint eslint-config-prettier eslint-plugin-nuxt eslint-plugin-prettier prettier stylelint stylelint-config-prettier stylelint-config-standard

plugin
Prettier
line-endings