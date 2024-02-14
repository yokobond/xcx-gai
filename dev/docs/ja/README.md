# GAIとは

GAI とは Xcratch で Google の生成AI、Gemini の拡張機能です。

[Google Gemini AI](https://deepmind.google/technologies/gemini/#introduction) を使うための特別なブロックを [Xcratch](https://xcratch.github.io/) に追加します。


## ✨ 何ができるのか

Scratch内の文章と画像を使って Gemini へ文章の生成を問い合わせることができます。

GAI 拡張機能を使って何ができるかを見るために、サンプルプロジェクトで遊んでみてください。
このプロジェクトはカメラ画像を Gemini に送って、文章を生成する例です。

サンプルプロジェクト
([別画面で開く](https://xcratch.github.io/editor#https://yokobond.github.io/xcx-gai/projects/example-ja.sb3))

<iframe src="https://xcratch.github.io/editor/player#https://yokobond.github.io/xcx-gai/projects/example-ja.sb3" width="540px" height="460px" allow="camera"></iframe>


## Xcratchへのロード

この拡張機能は、以下の手順でXcratchにロードして、他の拡張機能とともに使うことができます。

1. [Xcratch Editor](https://xcratch.github.io/editor)を開く。
2. '拡張機能の追加'ボタンをクリックします。
3. 拡張機能'Extension Loader'を選択します。
4. 入力フィールドにモジュールのURLを入力します。
```
https://yokobond.github.io/xcx-gai/dist/gai.mjs
```
1. 'OK' ボタンをクリックする。
2. これでこの拡張機能のブロックが使えるようになります。


## </> Source Code

ソースコードは GitHub [https://yokobond.github.io/xcx-gai/](https://yokobond.github.io/xcx-gai/) で公開されています。
