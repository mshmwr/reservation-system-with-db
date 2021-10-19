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
    <img src="src/readmeImages/state3-customer-homepage.png" width="300px" height="300px">
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
    <img src="src/readmeImages/state3-merchant-CMS.png" width="300px" height="300px">
    <img src="src/readmeImages/state3-merchant-CMS-ordersWindow.png" width="300px" height="300px">
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


https://user-images.githubusercontent.com/66200737/137831028-70bd4f23-5efe-419b-a949-fa6eb6ee345a.mp4



## <a name="customer-side-features"> Features (customer side)</a>

- [Reservation Process](#Reservation-Process)
- [Order Enquiry Process](#Order-Enquiry-Process)
- [Select Appointment Time](#Select-Appointment-Time)
- [Modify Appointment Information](#Modify-Appointment-Information)
- [Check Order Status](#Check-Order-Status)

### <a name="Reservation-Process"> :star: Reservation Process </a>

  <!-- 01-customer-reservation -->



https://user-images.githubusercontent.com/66200737/137830784-f87e2a2f-5709-4213-974b-c93e530e5aee.mp4







### <a name="Order-Enquiry-Process"> :star: Order Enquiry Process </a>

  <!-- 02-order-enquiry -->


https://user-images.githubusercontent.com/66200737/137830743-d5c93090-e0f6-406f-b9dd-729ff895163e.mp4




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


https://user-images.githubusercontent.com/66200737/137830761-dca4dc3f-5eaa-411c-a9d2-25c6f48a9b0a.mp4




2. Don't have to cancel the original selection when selecting another time
<!-- 05-2-time-selection_cross-timeline(1.5x) -->


https://user-images.githubusercontent.com/66200737/137830798-74325e98-993c-4188-a38e-602bd67e7eb6.mp4



3. Prevent backward selection
<!-- 05-3-time-selection_prevent-opposite-direction-selection(1.5x) -->


https://user-images.githubusercontent.com/66200737/137830808-e0b7010d-b718-4cb0-bcc8-bf2178930964.mp4



4. Double-click to deselect
<!-- 05-4-time-selection_click-two-times-to-canceled-selection(1.5x) -->


https://user-images.githubusercontent.com/66200737/137830816-e28b99c5-ae9f-4e74-826d-4bb0a026d65a.mp4



5. The selection is invalid when the selected area crosses the booked period
<!-- 05-5-time-selection_cannot-cross-reserved-region(1.5x) -->


https://user-images.githubusercontent.com/66200737/137830827-15142411-01bf-4c4a-bfdc-dbdd0ece6707.mp4



### <a name="Modify-Appointment-Information"> :star: Modify Appointment Information</a>

Change the appointment time and information when ordering

  <!-- 06-customer-modify-time-selection-or-info(2x) -->



https://user-images.githubusercontent.com/66200737/137830856-88447a87-e3ba-4581-a904-46f20fb14862.mp4



### <a name="Check-Order-Status"> :star: Check Order Status</a>

1. Check by searching order number
2. Check the schedule through the reservation system

---

1. Check by searching order number

   This video contains the order status modification process of the merchant, so that you can compare the difference between query results before and after status modification.

<!-- 09-1-check-order-status-after-status-changed-by-order-inquery(1.5x) -->


https://user-images.githubusercontent.com/66200737/137830870-fa2e096e-731a-458d-aa10-d1314cc5033d.mp4



2. Check the schedule through the reservation system
<!-- 09-2-check-order-status-after-status-changed-by-timeline(1.5x) -->


https://user-images.githubusercontent.com/66200737/137830878-4ea4d8ea-e35a-4c96-b72f-a3aecaefae5a.mp4



## <a name="merchant-side-features">Features (merchant side)</a>

- [Merchant Login](#Merchant-Login)
- [View All Orders Status In The CMS](#View-All-Orders-Status-In-The-CMS)
- [Modify Order Status](#Modify-order-status)
- [Merchant Logout](#Merchant-logout)

### <a name="Merchant-Login">:star: Merchant Login</a>

  <!-- 03-member-login -->


https://user-images.githubusercontent.com/66200737/137830889-87caff33-6418-4f82-87f6-1791bccde618.mp4



### <a name="View-All-Orders-Status-In-The-CMS">:star: View All Orders Status In The CMS</a>

<!-- 07-check-orders-calendar(2x) -->


https://user-images.githubusercontent.com/66200737/137830901-a1ffb280-d6e7-4882-aa95-09a804505908.mp4




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


https://user-images.githubusercontent.com/66200737/137830911-8ee24f2d-eec8-4d55-a027-c4280fcca921.mp4



2. If the order status is "Conflicted", it is forbidden to change it to the confirmed status
<!-- 08-2-modify-order-status-conflicted-cannot-choose-reserved(1x) -->


https://user-images.githubusercontent.com/66200737/137830916-18379bbb-0664-4e62-9991-94c42e40eeea.mp4



3. If the order status is "Reserved"
   1. Change order status from "Reserved" to "Applied"
   2. When select "Reserved" button, "Confirm" button cannot be clicked

<!-- 08-3-modify-order-status-to-applied(1x) -->


https://user-images.githubusercontent.com/66200737/137830926-bf2c459a-034c-4cfb-ab4d-4ac78f0ce7a1.mp4



4. Change order status from "Reserved" to "Cancelled"
<!-- 08-4-modify-order-status-to-deleted(1x) -->



https://user-images.githubusercontent.com/66200737/137830930-eb0f304b-aa2d-4777-be8c-7e286c276313.mp4


5. Cancelled orders cannot be modified.
<!-- 08-5-modify-order-status-delected-cannot-be-modified(1x) -->



https://user-images.githubusercontent.com/66200737/137830939-2e036f04-1c79-4ef1-802f-5177c9590673.mp4



6. Cannot change the past order status
<!-- 08-6-modify-order-status-cannot-edit-order-before(1x) -->


https://user-images.githubusercontent.com/66200737/137830953-34db1aa8-221a-4562-a4c0-f3fbfde39bcf.mp4



### <a name="Merchant-logout"> :star: Merchant Logout</a>

  <!-- 10-member-logout -->


https://user-images.githubusercontent.com/66200737/137830973-e2754a49-ee9b-485b-9192-3a2123d828b6.mp4


