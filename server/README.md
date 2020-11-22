## the routes as follows

### step 1

first run the backend ```npm run dev```

and you can make post request to this route http://localhost:3001/api/files to send your file
I expect to see in the request body { myfile: + the file you want to upload } like the photo below

![image](/server/todo/Screenshot.png)

and you will recieve an object with the key file and it's value will be link you can use to get info in the download page, the download page should have a button to download the file and by clicking the button this gonna send another
request to another route which will automaticly download the file from the sever.

### step 2

the link that you recieved from step 1, you should send get request to it, this will bring you the file info from the database and it will be something like the photo below

![image](/server/todo/Screenshot2.png)

the data you will recieve from this request you should display it in the download page like the name of the file and the size, etc.

### step 3

the download button once clicked it should send a get request to this route http://localhost:3001/files/download/:uuid
where uuid param is the unique id that you recieved previously in step 2, and this make the server download the file immediately, just like the photo below

![image](/server/todo/Screenshot3.png)

### step 4

also you can send the file via email by making post request to this route http://localhost:3001/api/files/send with an object in the request body contain keys of uuid, emailTo and emailFrom just like the photo below

{
    "uuid": "2617430c-2601-4e9a-9b71-10fb02bd3548",
    "emailTo": "yousif.abozid@yahoo.com",
    "emailFrom": "yousifabozid9@gmail.com"
}

![image](/server/todo/Screenshot4.png)

and you will recieve { "success": "true" } if you never sent this file before, if not and you already send this file you will recieve { "error": "Email already sent" } just like the photo below

![image](/server/todo/Screenshot5.png)

and that's all for now I guess, maybe more things will be added soon, good luck 🤗😊💖