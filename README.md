# KTV Reservation System and CMS
[react source code](https://github.com/mshmwr/reservation-system)

## Introducion
提供顧客與商家訂位資訊交流的互動介面（中英雙語系）。
顧客可以查看目前可訂位資訊，並進行訂位的手續，完成後會取得訂單編號，可以透過網頁查詢訂單目前的處理狀況。
商家除了顧客能使用的功能以外，還可以使用日曆的型態管理目前所有訂單，和調整訂單內容。


## Feature (common)
### 多國語系介面切換（英語）
  <!--04-customer-reservation(multiLang) -->
  


https://user-images.githubusercontent.com/66200737/129253435-ad2e9f8a-679c-40ea-9b0d-9ef3daad7c9c.mp4


## Features (customer side)

### 預約流程
  <!-- 01-customer-reservation -->


https://user-images.githubusercontent.com/66200737/129253745-8fa3f9aa-9c09-4d10-aa0a-e1d2d8e9837a.mp4


### 訂單查詢流程
  <!-- 02-order-inquery -->


https://user-images.githubusercontent.com/66200737/129253782-ab842a3d-be0a-4d9b-bd75-ccf8244daa47.mp4


### 選擇預約時間 (點擊模式設計)
1. 自由選擇不同包廂
    <!-- 05-1-time-selection_normal -->


https://user-images.githubusercontent.com/66200737/129253806-198c2a90-b9a4-4c3a-a9dd-9e0b69af631f.mp4


2. 自動補齊點選區間的顏色
    <!--05-2-time-selection_auto-fill-up(1x) -->


https://user-images.githubusercontent.com/66200737/129253842-fb1b473b-c645-473b-bf64-e716573d47d0.mp4


3. 進行點選後，可以自由切換到其他包廂時段做選擇
    <!-- 05-3-time-selection_cross-timeline(1.5x) -->


https://user-images.githubusercontent.com/66200737/129253860-7a6df0e4-d0e8-464e-b2e3-719b6e4ae5a7.mp4


4. 防止往回選擇時間
    <!-- 05-4-time-selection_prevent-opposite-direction-selection(1.5x) -->


https://user-images.githubusercontent.com/66200737/129253892-3ec521d1-ed32-437c-a8fe-d1a04d1aba2d.mp4


5. 點擊兩下取消選取
    <!-- 05-5-time-selection_click-two-times-to-canceled-selection(1.5x) -->


https://user-images.githubusercontent.com/66200737/129253943-e86b4880-b893-468f-be6b-c4f06227d730.mp4


6. 選擇區域跨過已預約時段時，選取無效
    <!-- 05-6-time-selection_cannot-cross-reserved-region(1.5x) -->
    

https://user-images.githubusercontent.com/66200737/129253979-6718772e-e4c4-4e2b-816f-1f2a3adfd0ab.mp4



### 訂購時修改預約時段 & 修改預約資料
  <!-- 06-customer-modify-time-selection-or-info(2x) -->


https://user-images.githubusercontent.com/66200737/129254020-7ecaf899-78d3-40f0-bfd5-ee872760fb17.mp4


### 顧客查看訂單狀況
1. 透過訂單編號查詢 (此段影片包含商家修改訂單的流程，以便對比前後查詢結果)
    <!-- 09-1-check-order-status-after-status-changed-by-order-inquery(1.5x) -->


https://user-images.githubusercontent.com/66200737/129254091-4192f2d1-9c42-482c-85e4-3faa2a0652c9.mp4


2. 透過預約系統查看時間表
    <!-- 09-2-check-order-status-after-status-changed-by-timeline(1.5x) -->


https://user-images.githubusercontent.com/66200737/129254112-63d4689c-4138-49ac-a2d5-0bf1d168bea5.mp4

## Features (owner side)
### 商家登入
  <!-- 03-member-login -->


https://user-images.githubusercontent.com/66200737/129254179-31dad0af-7739-432f-90b8-22dcc543743a.mp4


### 進入後台查看整體訂單現況
1. 查看訂單日曆
    <!-- 07-1-check-orders-calendar(2x) -->


https://user-images.githubusercontent.com/66200737/129254211-b42b7042-5fda-45ed-bff3-1cb9907b59c6.mp4


2. 查看上下個月份的預約
    <!-- 07-2-check-another-month-orders(1.5x) -->


https://user-images.githubusercontent.com/66200737/129254250-b5dec55f-2f74-4c49-934d-917da4aeab65.mp4


3. 點開時間表
    <!-- 07-3-open-the-timeline(1x, cut) -->


https://user-images.githubusercontent.com/66200737/129254297-8d5ef35a-4f57-4dd2-a451-0489c72cbe8a.mp4


4. 篩選日期
    <!-- 07-4-choose-a-date(1x, cut) -->


https://user-images.githubusercontent.com/66200737/129254330-bb576540-647f-4751-8b48-685e749cba43.mp4


5. 篩選包廂
    <!-- 07-5-choose-a-room(1x) -->


https://user-images.githubusercontent.com/66200737/129254344-b002051c-0ebb-4058-ae85-351d2c83dff7.mp4


### 修改訂單狀態（打開時間表）
訂單狀態以四種顏色代表：
```diff
! 已申請訂位 (咖啡色)：顧客未付款
+ 已確認預約 (綠色)：顧客已付款
# 已取消訂單 (灰色)：顧客取消訂單
- 時段有衝突 (紅色)：這筆訂單的申請時段和已確認預約的時段產生衝突
```
1. 已申請訂位 狀態改成 已確認預約
    <!-- 08-1-modify-order-status-to-reserved(1x) -->


https://user-images.githubusercontent.com/66200737/129254386-de3957af-f025-441c-a421-9b7e95a0c46e.mp4


2. 衝突的訂單(紅色)禁止修改成確認預約
    <!-- 08-2-modify-order-status-conflicted-cannot-choose-reserved(1x) -->


https://user-images.githubusercontent.com/66200737/129254413-94334e51-eb37-493e-a918-914aaff1a2e3.mp4


3. 已確認預約 狀態改回 已申請訂位 & 已預約狀態下，預約按鈕和確認按鈕禁止點擊
    <!-- 08-3-modify-order-status-to-applied(1x) -->


https://user-images.githubusercontent.com/66200737/129254431-644190b2-80b5-4e95-a897-b562dee30a7c.mp4


4. 已確認預約 狀態改成 已取消訂單
    <!-- 08-4-modify-order-status-to-deleted(1x) -->


https://user-images.githubusercontent.com/66200737/129254462-f35c2224-f4b2-4792-ad9f-0c8f93d8c771.mp4


5. 已取消的訂單無法再修改狀態
    <!-- 08-5-modify-order-status-delected-cannot-be-modified(1x) -->


https://user-images.githubusercontent.com/66200737/129254489-547917ce-9fc8-4a4a-aa2f-221b5ddd33a6.mp4


6. 可以修改今天以後時間的訂單 & 時間表會同步更新成點擊的訂單的日期
    <!-- 08-6-modify-order-status-from-now-on-and-update-timeline-date -->


https://user-images.githubusercontent.com/66200737/129254517-d1a2632c-929a-43de-88a2-ca124581c1c7.mp4


7. 禁止修改過去時間的訂單
    <!-- 08-7-modify-order-status-cannot-edit-order-before(1x) -->


https://user-images.githubusercontent.com/66200737/129254550-fefcd2ff-0646-463c-9c5f-7f27ba22fb3d.mp4


### 商家登出
  <!-- 10-member-logout -->


https://user-images.githubusercontent.com/66200737/129254594-8a8bfc75-7223-4f33-bb20-7d33e6365b62.mp4

