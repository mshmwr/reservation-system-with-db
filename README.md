# Reserve Your Singing Day

Provide an interactive interface (bilingual) for customers and merchants to exchange the reservation information.

<table>
  <tr>
    <td>
    For Customer
    </td>
    <td>
    Customers can view the current availability of reservations and proceed with the reservation process. After completion, they will receive an order number and can check the current status of their orders through the website.
    </td>
  </tr>
  <tr>
    <td>
    For Merchant
    </td>
    <td>
    In addition to the features that customers can use, merchants can also use the calendar to manage all current orders and adjust the order content.
    </td>
  </tr>
</table>


<!-- 提供顧客與商家訂位資訊交流的互動介面（中英雙語系）。
顧客可以查看目前可訂位資訊，並進行訂位的手續，完成後會取得訂單編號，可以透過網頁查詢訂單目前的處理狀況。
商家除了顧客能使用的功能以外，還可以使用日曆的型態管理目前所有訂單，和調整訂單內容。 -->

////網頁截圖看這邊
<p align="center">
  <img src="src/utils/images/readmeImages/homepage.png" width="800px">
</p>

<p align="center">
  <b>
    Demo(customer): https://linkinterior.com.tw/
    Demo(merchant): http://
  </b>
</p>


<br/>
<p align="center">
  <b>Test Account (merchant)</b>
</p>
<p align="center">
  Email: test1@gmail.com
</p>
<p align="center">
  Password: test10000
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
    2. Automatically completes the color between the dots
    3. Don't have to cancel the original selection to reselect the time
    4. Prevent backward selection
    5. Double-click to deselect
    6. The selection is invalid when the selected area crosses the booked period

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

  | skill                     | description                                                                                                                          |
  | ------------------------- | -------------------------------------------------------------------------- |
  | React ( hook )            | SPA, reusable functional components, custom hooks                                            |
  | React Router              | SPA, public and private route set up                                                               	         |
  | Redux           			  | centralize the application's state                                                        	                 |
  | styled-components         | CSS-In-JS library for styling                                                                                |
  | BEM methodology | help creating reusable and modular components                 |
  | React-i18next kit       			| an internationalization-framework to localize the website 					 |
  | Prettier           	       | keep coding style consistent and better formatted                                                |
  | Reset.css         	    | reduce browser inconsistencies in things in development                                        |
  | webpack                | bundle JavaScript files and resources for usage      							 |
  | Node.js                  | Hosting for Back-End                                                                             				 |


# <a name="Features">Features Introduction</a>

## <a name="common-feature">Features (common)</a>

- [Multi-language interface switching](#Multi-language-interface-switching)

### <a name="Multi-language-interface-switching"> :star: Multi-language Interface Switching</a>
<details><summary>
    <!--04-customer-reservation(multiLang) -->

  https://user-images.githubusercontent.com/66200737/129253435-ad2e9f8a-679c-40ea-9b0d-9ef3daad7c9c.mp4

</summary></details>
## <a name="customer-side-features"> Features (customer side)</a>

- [Reservation Process](#Reservation-Process)
- [Order Enquiry Process](#Order-Enquiry-Process)
- [Select Appointment Time](#Select-Appointment-Time)
- [Modify Appointment Information](#Modify-Appointment-Information)
- [Check Order Status](#Check-Order-Status)

### <a name="Reservation-Process"> :star: Reservation Process </a>

  <!-- 01-customer-reservation -->

https://user-images.githubusercontent.com/66200737/129253745-8fa3f9aa-9c09-4d10-aa0a-e1d2d8e9837a.mp4

### <a name="Order-Enquiry-Process"> :star: Order Enquiry Process </a>

  <!-- 02-order-enquiry -->

https://user-images.githubusercontent.com/66200737/129253782-ab842a3d-be0a-4d9b-bd75-ccf8244daa47.mp4

### <a name="Select-Appointment-Time"> :star: Select Appointment Time </a>

(Introduce the click mode)

1. Freedom to choose different packages
2. Automatically completes the color between the dots
3. Don't have to cancel the original selection to reselect the time
4. Prevent backward selection
5. Double-click to deselect
6. The selection is invalid when the selected area crosses the booked period

---

1. Freedom to choose different rooms
<!-- 05-1-time-selection_normal -->

https://user-images.githubusercontent.com/66200737/129253806-198c2a90-b9a4-4c3a-a9dd-9e0b69af631f.mp4

2. Automatically completes the color between the dots
<!--05-2-time-selection_auto-fill-up(1x) -->

https://user-images.githubusercontent.com/66200737/129253842-fb1b473b-c645-473b-bf64-e716573d47d0.mp4

3. Don't have to cancel the original selection to reselect the time
<!-- 05-3-time-selection_cross-timeline(1.5x) -->

https://user-images.githubusercontent.com/66200737/129253860-7a6df0e4-d0e8-464e-b2e3-719b6e4ae5a7.mp4

4. Prevent backward selection
<!-- 05-4-time-selection_prevent-opposite-direction-selection(1.5x) -->

https://user-images.githubusercontent.com/66200737/129253892-3ec521d1-ed32-437c-a8fe-d1a04d1aba2d.mp4

5. Double-click to deselect
<!-- 05-5-time-selection_click-two-times-to-canceled-selection(1.5x) -->

https://user-images.githubusercontent.com/66200737/129253943-e86b4880-b893-468f-be6b-c4f06227d730.mp4

6. The selection is invalid when the selected area crosses the booked period
<!-- 05-6-time-selection_cannot-cross-reserved-region(1.5x) -->

https://user-images.githubusercontent.com/66200737/129253979-6718772e-e4c4-4e2b-816f-1f2a3adfd0ab.mp4

### <a name="Modify-Appointment-Information"> :star: Modify Appointment Information</a>

Change the appointment time and information when ordering

  <!-- 06-customer-modify-time-selection-or-info(2x) -->

https://user-images.githubusercontent.com/66200737/129254020-7ecaf899-78d3-40f0-bfd5-ee872760fb17.mp4

### <a name="Check-Order-Status"> :star: Check Order Status</a>

1. Check by searching order number
2. Check the schedule through the reservation system

---

1. Check by searching order number

   This video contains the order status modification process of the merchant, so that you can compare the difference between query results before and after status modification.

<!-- 09-1-check-order-status-after-status-changed-by-order-inquery(1.5x) -->

https://user-images.githubusercontent.com/66200737/129254091-4192f2d1-9c42-482c-85e4-3faa2a0652c9.mp4

2. Check the schedule through the reservation system
<!-- 09-2-check-order-status-after-status-changed-by-timeline(1.5x) -->

https://user-images.githubusercontent.com/66200737/129254112-63d4689c-4138-49ac-a2d5-0bf1d168bea5.mp4

## <a name="merchant-side-features">Features (merchant side)</a>

- [Merchant Login](#Merchant-Login)
- [View All Orders Status In The CMS](#View-All-Orders-Status-In-The-CMS)
- [Modify Order Status](#Modify-order-status)
- [Merchant Logout](#Merchant-logout)

### <a name="Merchant-Login">:star: Merchant Login</a>

  <!-- 03-member-login -->

https://user-images.githubusercontent.com/66200737/129254179-31dad0af-7739-432f-90b8-22dcc543743a.mp4

### <a name="View-All-Orders-Status-In-The-CMS">:star: View All Orders Status In The CMS</a>

1. View Order Calendar
2. View previous and next month's appointments
3. Click to open the schedule
4. Select the date
5. Select the room

---

1. View Order Calendar

<!-- 07-1-check-orders-calendar(2x) -->

https://user-images.githubusercontent.com/66200737/129254211-b42b7042-5fda-45ed-bff3-1cb9907b59c6.mp4

2. View previous and next month's appointments
<!-- 07-2-check-another-month-orders(1.5x) -->

https://user-images.githubusercontent.com/66200737/129254250-b5dec55f-2f74-4c49-934d-917da4aeab65.mp4

3. Click to open the schedule
<!-- 07-3-open-the-timeline(1x, cut) -->

https://user-images.githubusercontent.com/66200737/129254297-8d5ef35a-4f57-4dd2-a451-0489c72cbe8a.mp4

4. Select the date
<!-- 07-4-choose-a-date(1x, cut) -->

https://user-images.githubusercontent.com/66200737/129254330-bb576540-647f-4751-8b48-685e749cba43.mp4

5. Select the room
<!-- 07-5-choose-a-room(1x) -->

https://user-images.githubusercontent.com/66200737/129254344-b002051c-0ebb-4058-ae85-351d2c83dff7.mp4

### <a name="Modify-order-status">:star: Modify order status (open schedule)</a>

Order status is represented by four colors:

```diff
! Reservation applied (brown): Customer has not paid
+ Reservation confirmed (green): Customer has paid
# Cancelled order (grey): Customer cancelled the order
- Orders Time Conflicted (red): The time of this order conflicts with the time of the confirmed order
```

1. Change order status from "Applied" to "Confirmed"
2. If the order status is "Conflicted", it is forbidden to change it to the confirmed status
3. If the order status is "Applied"
   1. Change order status from "Applied" to "Confirmed"
   2. "Reserved" button and "Confirmed" button are not allowed to be clicked
4. Change order status from "Confirmed" to "Cancelled"
5. Cancelled orders cannot be modified.
6. The schedule and the calendar will be updated simultaneously according to the selected date
7. Order status of past time cannot be modified

---

1. Change order status from "Applied" to "Confirmed"
<!-- 08-1-modify-order-status-to-reserved(1x) -->

https://user-images.githubusercontent.com/66200737/129254386-de3957af-f025-441c-a421-9b7e95a0c46e.mp4

2. If the order status is "Conflicted", it is forbidden to change it to the confirmed status
<!-- 08-2-modify-order-status-conflicted-cannot-choose-reserved(1x) -->

https://user-images.githubusercontent.com/66200737/129254413-94334e51-eb37-493e-a918-914aaff1a2e3.mp4

3. If the order status is "Reserved"
   1. Change order status from "Applied" to "Confirmed"
   2. "Reserved" button and "Confirmed" button are not allowed to be clicked

<!-- 08-3-modify-order-status-to-applied(1x) -->

https://user-images.githubusercontent.com/66200737/129254431-644190b2-80b5-4e95-a897-b562dee30a7c.mp4

4. Change order status from "Reserved" to "Cancelled"
<!-- 08-4-modify-order-status-to-deleted(1x) -->

https://user-images.githubusercontent.com/66200737/129254462-f35c2224-f4b2-4792-ad9f-0c8f93d8c771.mp4

5. Cancelled orders cannot be modified.
<!-- 08-5-modify-order-status-delected-cannot-be-modified(1x) -->

https://user-images.githubusercontent.com/66200737/129254489-547917ce-9fc8-4a4a-aa2f-221b5ddd33a6.mp4

6. The schedule and the calendar will be updated simultaneously according to the selected date
<!-- 08-6-modify-order-status-from-now-on-and-update-timeline-date -->

https://user-images.githubusercontent.com/66200737/129254517-d1a2632c-929a-43de-88a2-ca124581c1c7.mp4

7. Order status of past time cannot be modified
<!-- 08-7-modify-order-status-cannot-edit-order-before(1x) -->

https://user-images.githubusercontent.com/66200737/129254550-fefcd2ff-0646-463c-9c5f-7f27ba22fb3d.mp4

### <a name="Merchant-logout"> :star: Merchant Logout</a>

  <!-- 10-member-logout -->

https://user-images.githubusercontent.com/66200737/129254594-8a8bfc75-7223-4f33-bb20-7d33e6365b62.mp4
