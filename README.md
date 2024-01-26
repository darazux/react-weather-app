# Weather App using React framework
## 概要
[Weather API](https://www.weatherapi.com/) の天気データを取得し表示するWebアプリです。  
api_key/api_secretを秘匿するため、中間にプロキシを経由させています。  
React framework を使用しています。

以下の書籍を参考に作成しました。
[「はじめてつくるReactアプリ」](https://monotein.com/books/react-book)

## 構成図
```mermaid
   flowchart TB
   style fw1 fill:#f9f,color:#000,stroke-dasharray: 5 5
   style fw2 fill:#f9f,color:#000,stroke-dasharray: 5 5
   style c1 stroke-dasharray: 5 5
   style c2 stroke-dasharray: 5 5
   style p1 stroke-dasharray: 5 5
   style p2 stroke-dasharray: 5 5
   style s1 stroke-dasharray: 5 5
   style s2 stroke-dasharray: 5 5
   style react fill:#00f

   c1-->c2-->fw1-->p1-->s1
   s2-->p2-->fw2-->c3-->c4
   subgraph Client
       c0[Input city name in text box]-->c1[Click button]
       c4[View Weather Result Data]
   end
   subgraph Browser
       c2[Send HTTP Request]
       c3[Receive Weather Data]
   end
   subgraph react [React Framework]
       fw1[Send HTTP Request]
       fw2[Receive Weather Data]
   end
   subgraph vercel [Vercel Web Hosting Service]
       react
   end
   subgraph Proxy
       p1[Forward HTTP Request]
       p2[Foward Weather Data]
   end
   subgraph API-Server
       s1[Receive HTTP Request]-->s2[Send Weather Data]
   end
```

## 動作
1. Webアプリのテキストボックスへ都市名を入力する
1. [Get Weather]ボタンをクリックする
1. 国名、都市名、気温、天気を表示する
