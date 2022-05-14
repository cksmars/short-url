# 短網址產生器
![Index page about Restaurant List](https://github.com/cksmars/short-url/blob/main/short-url.png)

## 介紹
將長的URL網址縮短，提供一個較為短小的URL代替原來較長的URL。

## 功能說明
- 輸入想縮短的網址並提交，即可得到一組縮短後的網址。
- 可以使用Copy鍵將短網址複製下來。
- 或是使用Back鍵再次輸入其他想要縮短的網址。


# 使用方式
1. 請先確認有安裝node.js 與 npm
2. 將此專案 clone 到本地
3. 透過終端機進入專案資料夾，執行以下指令安裝專案使用套件：
```
npm install
```
4. 請設定環境變數MONGODB_URI ，如果在 Bash(windows) 指令為下：
```
export MONGODB_URI="your connection string"
```
5. 執行啟動伺服器：
```
npm run start
```
6. 若終端機出現此行訊息代表伺服器順利運行，請打開瀏覽器進入以下網址<http://localhost:3000>
```
Express is listening on http://localhost:3000
mongodb connected
```
7. 若欲停止使用，請按：
```
ctrl + c
```

# 開發工具
- Node.js 16.14.2
- Express 4.17.1
- Express-Handlebars 4.0.2
- mongoose 6.3.0

# 作者
- Alpha Camp - project design.
- cksmars - project develop.