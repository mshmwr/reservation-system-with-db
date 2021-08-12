# KTV Reservation System and CMS
## introducion
提供顧客與商家訂位資訊交流的互動介面（中英雙語系）。
顧客可以查看目前可訂位資訊，並進行訂位的手續，完成後會取得訂單編號，可以透過網頁查詢訂單目前的處理狀況。
商家除了顧客能使用的功能以外，還可以使用日曆的型態管理目前所有訂單，和調整訂單內容。


## feature (both side)
- 多國語系介面切換（英語）
  ![04-customer-reservation(multiLang)](https://user-images.githubusercontent.com/66200737/129248137-3cdb9c9a-9687-434b-ac7b-c9591246bed4.mp4)

## feature (customer side)

- 預約流程
  ![01-customer-reservation](https://user-images.githubusercontent.com/66200737/129247145-3effbd2b-2ad5-4b1e-9e79-0bd60c317233.mp4)
- 訂單查詢流程
  ![02-order-inquery](https://user-images.githubusercontent.com/66200737/129247919-6aa6d99b-6b13-4738-8b4c-094ad148bb03.mp4)

- 選擇預約時間 (點擊模式設計)
  - 自由選擇不同包廂
    ![05-1-time-selection_normal](https://user-images.githubusercontent.com/66200737/129249121-90101739-62c7-4ab6-8b7d-38cb04f5b31f.mp4)
  - 自動補齊點選區間的顏色
    ![05-2-time-selection_auto-fill-up(1x)](https://user-images.githubusercontent.com/66200737/129249128-74fd1f18-6b01-4fd6-bb12-3bb84ab754c9.mp4)
  - 進行點選後，可以自由切換到其他包廂時段做選擇
    ![05-3-time-selection_cross-timeline(1.5x)](https://user-images.githubusercontent.com/66200737/129249236-ca28a0a3-bb87-4144-8b24-cd8ac342d815.mp4)
  - 防止往回選擇時間
    ![05-4-time-selection_prevent-opposite-direction-selection(1.5x)](https://user-images.githubusercontent.com/66200737/129249266-2b55b20a-4516-4c65-8929-4c27a3fc94b4.mp4)
  - 點擊兩下取消選取
    ![05-5-time-selection_click-two-times-to-canceled-selection(1.5x)](https://user-images.githubusercontent.com/66200737/129249306-8f11cb47-f340-48b0-8ee8-f7e9f5ace9e3.mp4)
  - 選擇區域跨過已預約時段時，選取無效
    ![05-6-time-selection_cannot-cross-reserved-region(1.5x)](https://user-images.githubusercontent.com/66200737/129249311-51a965bd-02e0-4a2c-af43-cb4f26572358.mp4)

- 訂購時修改預約時段 & 修改預約資料
  ![06-customer-modify-time-selection-or-info(2x)](https://user-images.githubusercontent.com/66200737/129249456-bd52ca8b-9bd7-4285-a47d-02e51029bba9.mp4)

- 顧客查看訂單狀況
  - 透過訂單編號查詢 (此段影片包含商家修改訂單的流程，以便對比前後查詢結果)
    ![09-1-check-order-status-after-status-changed-by-order-inquery(1.5x)](https://user-images.githubusercontent.com/66200737/129252098-3c0ba03a-4ff9-4eda-9502-11354e1f6829.mp4)
  - 透過預約系統查看時間表
    ![09-2-check-order-status-after-status-changed-by-timeline(1.5x)](https://user-images.githubusercontent.com/66200737/129252182-41a620d4-f603-4b51-ad57-3b562e7bef6c.mp4)

## feature (owner side)
- 商家登入
  ![03-member-login](https://user-images.githubusercontent.com/66200737/129248008-193d2b0d-8f81-4f12-b4b9-68cda521337a.mp4)
- 進入後台查看整體訂單現況
  - 查看訂單日曆
    ![07-1-check-orders-calendar(2x)](https://user-images.githubusercontent.com/66200737/129249764-00bce5b8-c813-46e9-843b-053d55ad9b08.mp4)
  - 查看上下個月份的預約
    ![07-2-check-another-month-orders(1.5x)](https://user-images.githubusercontent.com/66200737/129249786-1222e7c4-53ae-49e1-9d98-538bc93f984b.mp4)
  - 點開時間表
    ![07-3-open-the-timeline(1x, cut)](https://user-images.githubusercontent.com/66200737/129249818-483294d2-8759-4a02-b66b-6e0823f7e6e4.mp4)
  - 篩選日期
    ![07-4-choose-a-date(1x, cut)](https://user-images.githubusercontent.com/66200737/129249902-d8091e1d-6d2d-4aa7-a67a-493e863ccceb.mp4)
  - 篩選房間
    ![07-5-choose-a-room(1x)](https://user-images.githubusercontent.com/66200737/129249932-99a56f7e-2656-4f9e-ba62-a6d5f5e39931.mp4)
    
- 修改訂單狀態（打開時間表）
  訂單狀態以四種顏色代表：
  ```diff
  ! 已申請訂位 (咖啡色)：顧客未付款
  + 已確認預約 (綠色)：顧客已付款
  # 已取消訂單 (灰色)：顧客取消訂單
  - 時段有衝突 (紅色)：這筆訂單的申請時段和已確認預約的時段產生衝突
  ```
  - 已申請訂位 狀態改成 已確認預約
    ![08-1-modify-order-status-to-reserved(1x)](https://user-images.githubusercontent.com/66200737/129251483-1ced0288-4bbe-43bf-a3c7-d55582142ddf.mp4)
  - 衝突的訂單(紅色)禁止修改成確認預約
    ![08-2-modify-order-status-conflicted-cannot-choose-reserved(1x)](https://user-images.githubusercontent.com/66200737/129251520-40b5027c-3fc3-417d-905a-ef46f137f75e.mp4)
  - 已確認預約 狀態改回 已申請訂位 & 已預約狀態下，預約按鈕和確認按鈕禁止點擊
    ![08-3-modify-order-status-to-applied(1x)](https://user-images.githubusercontent.com/66200737/129251552-d818b880-07d4-432a-bfaa-a1f7d68fb8e7.mp4)
  - 已確認預約 狀態改成 已取消訂單
    ![08-4-modify-order-status-to-deleted(1x)](https://user-images.githubusercontent.com/66200737/129251583-5b311f06-2b4a-4756-8159-9a7575102b9a.mp4)  
  - 已取消的訂單無法再修改狀態
    ![08-5-modify-order-status-delected-cannot-be-modified(1x)](https://user-images.githubusercontent.com/66200737/129251605-f9166d15-651e-4c47-a127-3ba193933dab.mp4) 
  - 可以修改今天以後時間的訂單 & 時間表會同步更新成點擊的訂單的日期
    ![08-6-modify-order-status-from-now-on-and-update-timeline-date](https://user-images.githubusercontent.com/66200737/129251631-71194a34-7b42-47cf-b1f1-29c1a6f3e3fe.mp4)
  - 禁止修改過去時間的訂單
    ![08-7-modify-order-status-cannot-edit-order-before(1x)](https://user-images.githubusercontent.com/66200737/129251657-7e4b1da4-3abb-4ebc-943b-ee414d9adc03.mp4)
    
- 商家登出
![10-member-logout](https://user-images.githubusercontent.com/66200737/129252358-db857a77-da7d-45e9-8539-7114b2765011.mp4)
