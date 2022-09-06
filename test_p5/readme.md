# 環境構築
mkdir test_p5
cd test_p5
touch package.json

```
{
  "private": true
}
```

npm i parcel -D
npm i p5
npm i @types/p5 -D

```
  "scripts": {
    "dev": "parcel src/index.html --open",
    "build": "parcel build src/index.html"
  },
```

# 実行

```
npm run dev
```

# 参考
https://ics.media/entry/210129/