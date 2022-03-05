# 執行完成的專案
1. npm i
2. npm start
可以在 http://localhost:3000 上瀏覽

# 專案的架構、Web 的架構邏輯
以App.tsx為整個專案的最上層元件，在裡面呼叫HeroPage這個主要的功能頁並導轉到/heroes。在HeroPage設定route先顯示HeroList，點擊HeroCard後再導轉到/heroes/:id顯示HeroProfile

# 第三方 library 的理解，以及他們的功能簡介
1. Mui - UI library，有多種元件可以快速應用
2. styled-component - CSS-in-JS的solution
3. axios - 協助處理api的library，有對應各http method的request function，也可依需求設定不同的instances處理特定的api request
4. react-router - 處理依不同的路徑顯示不同元件的需求

# 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解
遇到業務邏輯、資料驗證機制時會寫註解
還有命名的參數或函式用英文很難表達的時候也會寫中文註解

# 在這份專案中你遇到的困難、問題，以及解決的方法
react-router因版本更新和過去使用的方法不同，所以去了解新版的用法，然後在/heroes/:id要顯示時，Route都設定好了但是沒render出HeroProfile元件。後續Google問題看到他人的解法是說在要顯示的地方要加上<Outlet />，然後再到官方文件確認<Outlet />的用途，確認問題就是在這邊。所以在要顯示的地方加上<Outlet />解決問題。
