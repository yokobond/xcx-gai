# GAIとは

GAI は Xcratch で複数の生成AIプロバイダーを使うための拡張機能です。

[Google Gemini AI](https://deepmind.google/technologies/gemini/#introduction)、[OpenAI](https://openai.com/)、および [Anthropic Claude](https://www.anthropic.com/claude) を使うための特別なブロックを [Xcratch](https://xcratch.github.io/) に追加します。


## ✨ 何ができるのか

Scratch内の文章と画像を使って複数のAIプロバイダー（Google Gemini、OpenAI、Anthropic Claude）へ文章の生成を問い合わせることができます。

GAI 拡張機能を使って何ができるかを見るために、サンプルプロジェクトで遊んでみてください。
このプロジェクトはカメラ画像をAIに送って、文章を生成する例です。
(このプロジェクトを動かすには、使用するAIプロバイダーのAPIキー(参照:[APIキーの設定](how-to-use?id=apiキーの設定))と、カメラへのアクセスの許可が必要です。)

サンプルプロジェクト
([別画面で開く](https://xcratch.github.io/editor#https://yokobond.github.io/xcx-gai/projects/example-ja.sb3))

<iframe src="https://xcratch.github.io/editor/player#https://yokobond.github.io/xcx-gai/projects/example-ja.sb3" width="540px" height="460px" allow="camera"></iframe>

詳しくは、[使い方](how-to-use) を参照してください。


## サポートしているAIプロバイダー
この拡張機能は以下のAIプロバイダーとそのモデルをサポートしています：

### Google Gemini
- 生成モデルと埋め込みモデルをサポート
- 利用可能なモデルは [Gemini API ドキュメント](https://ai.google.dev/gemini-api/docs/models) で確認できます

### OpenAI
- GPT-4、GPT-3.5-turbo、text-embedding-ada-002 などのモデルをサポート
- OpenAI互換のAPIエンドポイントもサポート

### Anthropic Claude
- Claude 3.5 Sonnet、Claude 3 Opus、Claude 3 Haiku などのモデルをサポート

デフォルトのモデルはリリース時の最新モデルに設定されていますが、ブロックで変更することができます。

この拡張機能にはモデル一覧ブロックがあり、このプロジェクトのように利用可能なモデルを確認できます。
([gai-model_listing](https://xcratch.github.io/editor#https://yokobond.github.io/xcx-gai/projects/gai-model_listing.sb3))


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

ソースコードは GitHub [https://github.com/yokobond/xcx-gai](https://github.com/yokobond/xcx-gai) で公開しています。
