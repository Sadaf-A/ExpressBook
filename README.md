# Hotel Room Booking API - ExpressBook

A Node.js, Express.js, and MongoDB-based API for booking hotel rooms.

## Features

- Fetch available rooms
- Book rooms (allowing simultaneous booking by two users)

## Application Workflow

| Step | Description | Screenshot |
| --- | --- | --- |
| 1. | Run `addData.js` to populate the database with 500 vacant rooms. | ![Step 1 Screenshot](https://user-images.githubusercontent.com/119438857/209950424-bdf9a8ba-891b-4268-b13b-6e052c8e710d.png) |
| | 500 room documents have been added to the database. | ![Step 1 Result](https://user-images.githubusercontent.com/119438857/209950425-112cb780-472b-4d10-ab08-8058b3d17b30.png) |
| 2. | Start the application by running `app.js` and make a GET request to view available rooms. | ![Step 2 Screenshot](https://user-images.githubusercontent.com/119438857/209950434-8b115ab4-d1f2-4ffb-a152-4437456adadf.png) |
| 3. | To book a room, make a POST request and specify the desired room number. | ![Step 3 Screenshot](https://user-images.githubusercontent.com/119438857/209950443-d2f56495-b491-4b6b-a71b-7c83aa4b2408.png) |
| | The room status changes to "booked." | ![Step 3 Result](https://user-images.githubusercontent.com/119438857/209950504-c8547dc1-8228-4547-a1de-f5e754dba775.png) |
| 4. | When making another GET request, the booked room (e.g., Room 500) will not appear in the available list. | ![Step 4 Screenshot](https://user-images.githubusercontent.com/119438857/209950512-cef785a4-8bd3-4a07-80c5-d14213c2e78e.png) |
| | Room No. 500 has been successfully booked. | |
