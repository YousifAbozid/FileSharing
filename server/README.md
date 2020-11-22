## the routes as follows

first run the backend ```npm run dev```

and you can make post request to this route http://localhost:3001/api/files to send your file
I expect to see in the request body { myfile: + the file you want to upload } like the photo below

[image](/todo/Screenshot.png)

and you will recieve an object with the key file and it's value will be link to the download page,
the download page should have a button to download the file and by clicking the button this gonna send another
request to another route which will automaticly download the file from the sever.