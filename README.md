# Reserve Your Singing Day

Provide an interactive interface (bilingual) for customers and merchants to exchange the reservation information.

<table>
  <tr>
    <td>
    For Customer
    </td>
    <td>
    Customers can view the current availability of reservations and proceed with the reservation process. After completion, they will receive an order number and can check the current status of their orders through the website.
    <br/>
    <img src="src/readmeImages/state3-customer-homepage.png" width="400px" height="300px">
    <img src="src/readmeImages/state3-customer-reserved-page.png" width="400px" height="300px">
  </td>
  </tr>
  <tr>
    <td>
    For Merchant
    </td>
    <td>
    In addition to the features that customers can use, merchants can also use the calendar to manage all current orders and adjust the order content.
    <br/>
    <img src="src/readmeImages/state3-merchant-CMS.png" width="400px" height="300px">
    <img src="src/readmeImages/state3-merchant-CMS-ordersWindow.png" width="150px" height="300px">
    </td>
  </tr>
</table>

<!-- 提供顧客與商家訂位資訊交流的互動介面（中英雙語系）。
顧客可以查看目前可訂位資訊，並進行訂位的手續，完成後會取得訂單編號，可以透過網頁查詢訂單目前的處理狀況。
商家除了顧客能使用的功能以外，還可以使用日曆的型態管理目前所有訂單，和調整訂單內容。 -->

<p align="center">
  <b>
    <table>
      <tr>
        <td>Demo(customer)</td>
        <td>http://3.15.89.71:3100</td>
        <td></td>
      </tr>
      <tr>
        <td>Demo(merchant)</td>
        <td>http://3.15.89.71:3100/memberSystem</td>
        <td>
          <b>Test Account (merchant)</b>
          <ul style="padding-left:1.2rem;">
            <li>Email: test1@gmail.com</li>
            <li>Password: test10000</li>
          </ul>
        </td>
      </tr> 
    </table>
  </b>
</p>

# Table of Contents

- [React Source Code](#react-source-code)
- [Used Skills](#used-skills)
- [Features Introduction](#Features)

  - [common](#common-feature)
    <details><summary>feature</summary><blockquote>
        a. Multi-language interface switching
    </blockquote></details>

  - [customer side](#customer-side-features)
    <details><summary> features</summary><blockquote>

    1. Reservation Process
    2. Order Enquiry Process

    <details><summary>c. Select Appointment Time (Introduce the click mode)</summary>

    <blockquote>

    1. Freedom to choose different packages
    2. Don't have to cancel the original selection to reselect the time
    3. Prevent backward selection
    4. Double-click to deselect
    5. The selection is invalid when the selected area crosses the booked period

    </blockquote></details>

    4.  Modify Appointment Information
    5.  Check Order Status
    </blockquote></details>

  - [merchant side](#merchant-side-features)
    <details><summary>features</summary><blockquote>

    1. Merchant Login
    2. View All Orders Status In The CMS

    <details><summary>c. Modify Order Status</summary>

    <blockquote>

    1. Change order status from "Applied" to "Confirmed"
    2. If the order status is "Conflicted", it is forbidden to change it to the confirmed status

    <details><summary>c. If the order status is "Applied"</summary><blockquote>

    1. Change order status from "Applied" to "Confirmed"
    2. "Reserved" button and "Confirmed" button are not allowed to be clicked

    </blockquote></details>

    4. Change order status from "Confirmed" to "Cancelled"
    5. Cancelled orders cannot be modified.
    6. The schedule and the calendar will be updated simultaneously according to the selected date
    7. Order status of past time cannot be modified

    </blockquote></details>
       
    4. Merchant Logout

    </blockquote>

    </details>

# <a name="react-source-code">React Source Code</a>

[react source code (github repository)](https://github.com/mshmwr/reservation-system)

# <a name="used-skills">Used Skills</a>

| skill             | description                                               |
| ----------------- | --------------------------------------------------------- |
| React ( hook )    | SPA, reusable functional components, custom hooks         |
| React Router      | SPA, public and private route set up                      |
| Redux             | centralize the application's state                        |
| styled-components | CSS-In-JS library for styling                             |
| BEM methodology   | help creating reusable and modular components             |
| React-i18next kit | an internationalization-framework to localize the website |
| Prettier          | keep coding style consistent and better formatted         |
| Reset.css         | reduce browser inconsistencies in things in development   |
| webpack           | bundle JavaScript files and resources for usage           |
| Node.js           | Hosting for Back-End                                      |

# <a name="Features">Features Introduction</a>

## <a name="common-feature">Features (common)</a>

- [Multi-language interface switching](#Multi-language-interface-switching)

### <a name="Multi-language-interface-switching"> :star: Multi-language Interface Switching</a>

  <!--04-customer-reservation(multiLang) -->

https://user-images.githubusercontent.com/66200737/137017474-8b02307a-b607-4332-b6c8-26a57e70676e.mp4

## <a name="customer-side-features"> Features (customer side)</a>

- [Reservation Process](#Reservation-Process)
- [Order Enquiry Process](#Order-Enquiry-Process)
- [Select Appointment Time](#Select-Appointment-Time)
- [Modify Appointment Information](#Modify-Appointment-Information)
- [Check Order Status](#Check-Order-Status)

### <a name="Reservation-Process"> :star: Reservation Process </a>

  <!-- 01-customer-reservation -->

https://user-images.githubusercontent.com/66200737/137017566-e65b7106-055e-44a7-9d09-7c16d014faa4.mp4

### <a name="Order-Enquiry-Process"> :star: Order Enquiry Process </a>

  <!-- 02-order-enquiry -->

https://user-images.githubusercontent.com/66200737/137017589-8ee1f5fb-ea13-4122-b571-a0c440c9a1b7.mp4

### <a name="Select-Appointment-Time"> :star: Select Appointment Time </a>

(Introduce the click mode)

1. Freedom to choose different packages
2. Don't have to cancel the original selection to reselect the time
3. Prevent backward selection
4. Double-click to deselect
5. The selection is invalid when the selected area crosses the booked period

---

1. Freedom to choose different rooms
<!-- 05-1-time-selection_normal -->

https://user-images.githubusercontent.com/66200737/137017703-a1e5de87-7369-4a0e-a1e4-4158399eb727.mp4

2. Don't have to cancel the original selection when selecting another time
<!-- 05-3-time-selection_cross-timeline(1.5x) -->

https://user-images.githubusercontent.com/66200737/137017712-707a92bd-122f-432f-be17-838a6d366c52.mp4

3. Prevent backward selection
<!-- 05-4-time-selection_prevent-opposite-direction-selection(1.5x) -->

https://user-images.githubusercontent.com/66200737/137017723-83bc956e-75a0-4010-8a91-d6876830affb.mp4

4. Double-click to deselect
<!-- 05-5-time-selection_click-two-times-to-canceled-selection(1.5x) -->

https://user-images.githubusercontent.com/66200737/137017733-85d23c92-b227-459a-b869-d675338b7d8e.mp4

5. The selection is invalid when the selected area crosses the booked period
<!-- 05-6-time-selection_cannot-cross-reserved-region(1.5x) -->

https://user-images.githubusercontent.com/66200737/137017745-71c9d0e5-72da-49a7-bdd3-c0fa0fe1aa68.mp4

### <a name="Modify-Appointment-Information"> :star: Modify Appointment Information</a>

Change the appointment time and information when ordering

  <!-- 06-customer-modify-time-selection-or-info(2x) -->

https://user-images.githubusercontent.com/66200737/137017810-7242716f-349d-4bab-bbda-82b5e63948ba.mp4

### <a name="Check-Order-Status"> :star: Check Order Status</a>

1. Check by searching order number
2. Check the schedule through the reservation system

---

1. Check by searching order number

   This video contains the order status modification process of the merchant, so that you can compare the difference between query results before and after status modification.

<!-- 09-1-check-order-status-after-status-changed-by-order-inquery(1.5x) -->

https://user-images.githubusercontent.com/66200737/137017812-ad526c30-2e84-40de-ad16-17feb29f0e4c.mp4

2. Check the schedule through the reservation system
<!-- 09-2-check-order-status-after-status-changed-by-timeline(1.5x) -->

https://user-images.githubusercontent.com/66200737/137017811-aee4a552-543f-4087-9568-780e5d439e02.mp4

## <a name="merchant-side-features">Features (merchant side)</a>

- [Merchant Login](#Merchant-Login)
- [View All Orders Status In The CMS](#View-All-Orders-Status-In-The-CMS)
- [Modify Order Status](#Modify-order-status)
- [Merchant Logout](#Merchant-logout)

### <a name="Merchant-Login">:star: Merchant Login</a>

  <!-- 03-member-login -->

https://user-images.githubusercontent.com/66200737/137017823-06467570-aa74-4839-8bda-818e85c2cdd6.mp4

### <a name="View-All-Orders-Status-In-The-CMS">:star: View All Orders Status In The CMS</a>

1. View Order Calendar
2. Click to open the schedule
3. Select the date
4. Select the room

---

1. View Order Calendar and previous/next month's appointments

<!-- 07-1-check-orders-calendar(2x) -->

https://user-images.githubusercontent.com/66200737/137017852-40accf09-9d08-495c-8fe8-d67525b91805.mp4

2. Click to open the schedule
<!-- 07-3-open-the-timeline(1x, cut) -->

https://user-images.githubusercontent.com/66200737/137017867-473285c2-c736-45dd-9971-7c5cddc84cc0.mp4

3. Select the date
<!-- 07-4-choose-a-date(1x, cut) -->

https://user-images.githubusercontent.com/66200737/137017875-95196ba4-411f-48da-904f-d1b150c58bde.mp4

4. Select the room
<!-- 07-5-choose-a-room(1x) -->

https://user-images.githubusercontent.com/66200737/137017903-c868f6e9-2fce-4bef-b6bf-cfb0a044c097.mp4

### <a name="Modify-order-status">:star: Modify order status (open schedule)</a>

Order status is represented by four colors:

<ul style="padding-top: 0.5rem; padding-bottom: 0.5rem; border: 1px solid;">
  <li><span style="color:BlanchedAlmond;">Reservation applied (brown): Customer has not paid</span></li>
  <li><span style="color:chartreuse;">Reservation confirmed (green): Customer has paid</span></li>
  <li><span style="color:LightGrey;">Cancelled order (grey): Customer cancelled the order</span></li>
  <li><span style="color:Red;">Orders Time Conflicted (red): The time of this order conflicts with the time of the confirmed order</span></li>
</ul>

1. Change order status from "Applied" to "Confirmed"
2. If the order status is "Conflicted", it is forbidden to change it to the confirmed status
3. If the order status is "Applied"
   1. Change order status from "Applied" to "Confirmed"
   2. "Reserved" button and "Confirmed" button are not allowed to be clicked
4. Change order status from "Confirmed" to "Cancelled"
5. Cancelled orders cannot be modified
6. Cannot change the past order status

---

1. Change order status from "Applied" to "Confirmed"
<!-- 08-1-modify-order-status-to-reserved(1x) -->

https://user-images.githubusercontent.com/66200737/137018257-01e9df57-61d5-4602-a753-6c56d417ee42.mp4

2. If the order status is "Conflicted", it is forbidden to change it to the confirmed status
<!-- 08-2-modify-order-status-conflicted-cannot-choose-reserved(1x) -->

https://user-images.githubusercontent.com/66200737/137018265-e061a54f-08f9-420e-b9b7-98c7ce513708.mp4

3. If the order status is "Reserved"
   1. Change order status from "Reserved" to "Applied"
   2. When select "Reserved" button, "Confirm" button cannot be clicked

<!-- 08-3-modify-order-status-to-applied(1x) -->

https://user-images.githubusercontent.com/66200737/137018275-a93da6da-9f44-4a57-a05b-a4d6447f1fd8.mp4

4. Change order status from "Reserved" to "Cancelled"
<!-- 08-4-modify-order-status-to-deleted(1x) -->

https://user-images.githubusercontent.com/66200737/137018307-e3cb33d5-07dd-4624-9514-be4f78ae032a.mp4

5. Cancelled orders cannot be modified.
<!-- 08-5-modify-order-status-delected-cannot-be-modified(1x) -->

https://user-images.githubusercontent.com/66200737/137018315-c2ad3e7c-98e6-43c4-b85c-88e64407cd9f.mp4

6. Cannot change the past order status
<!-- 08-6-modify-order-status-cannot-edit-order-before(1x) -->

https://user-images.githubusercontent.com/66200737/137018341-5585b705-33a5-4545-940a-a214ef7da990.mp4

### <a name="Merchant-logout"> :star: Merchant Logout</a>

  <!-- 10-member-logout -->

https://user-images.githubusercontent.com/66200737/137018384-a0da0641-949b-4976-a1ef-910d32596ae2.mp4
