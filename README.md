An API to book hotel rooms made using Node.js, Express.js and MongoDB

Functionalities:

•	Fetch available seats

•	Book seat

Note: two users can book seat simultaneously

Working of the application:

1.	Running addData.js to add 500 vacant seats

 ![1](https://user-images.githubusercontent.com/119438857/209950424-bdf9a8ba-891b-4268-b13b-6e052c8e710d.png)

 
500 documents have been entered into the database

![2](https://user-images.githubusercontent.com/119438857/209950425-112cb780-472b-4d10-ab08-8058b3d17b30.png)


2.	Running app.js and making a get request to see all the available seats

      ![3](https://user-images.githubusercontent.com/119438857/209950434-8b115ab4-d1f2-4ffb-a152-4437456adadf.png)

3.	Making a post request to prompt the user to enter which room they want to book.

 ![4](https://user-images.githubusercontent.com/119438857/209950443-d2f56495-b491-4b6b-a71b-7c83aa4b2408.png)

The status of the room changes to “booked”

 ![5](https://user-images.githubusercontent.com/119438857/209950504-c8547dc1-8228-4547-a1de-f5e754dba775.png)

4.	If we make another get request room 500 does not appear in the available list

 ![6](https://user-images.githubusercontent.com/119438857/209950512-cef785a4-8bd3-4a07-80c5-d14213c2e78e.png)

Hence, Room no. 500 has been booked for the user.

