# Google Forms clone 

This project was created by Suraj Biswas. I have created this project as an assignment  on React Js and MongoDb.

## How to Install and run
1. Download the Project in Zip format(Tech-Weirdo-GoogleForm-master)
2. Extract the Zip file(Tech-Weirdo-GoogleForm-master) on your PC.
3. Run `npm i` inside (Tech-Weirdo-GoogleForm-master)
4. Run `npm start` to start the React server
5. Start a new cmd inside the (Tech-Weirdo-GoogleForm-master/Backend) and run the `node index.js`
6. Now open (http://localhost:3000/) inside your web browser

You can see a form like this->
![image](https://user-images.githubusercontent.com/68378377/113039035-d7776900-91b4-11eb-9ce3-fbc2613e8851.png)


You have fill up the form with Account Head Name and Account Head Type and then Submit->
![image](https://user-images.githubusercontent.com/68378377/113039063-e3fbc180-91b4-11eb-999a-b4e5f61a9be2.png)


Open the file (Tech-Weirdo-GoogleForm-master/Backend/Route/Form/formData.db) to see the responses of the client

If you want to change or Update the form, go to the (Tech-Weirdo-GoogleForm-master/Backend/Route/Form/data.db)

For example, now the file is

`{"formName":"Test Form","formDesc":"This is a Testing Form","data":[{"fieldname":"AccountHeadName","fieldplaceholder":"Account Head Name","fieldlabel":"Account Head Name","fieldrules":[{"required":true,"message":"This field is required"}],"fieldtype":"text"},{"fieldname":"AccountType","fieldplaceholder":"Account Type","fieldlabel":"Account Type","fieldrules":[],"fieldtype":"select","options":["Assets","Liabilities"]}],"_id":"LtMFs2EXXos2nSh5"}
`

To add a new text use:

`{"formName":"Test Form","formDesc":"This is a Testing Form","data":[{"fieldname":"AccountHeadName","fieldplaceholder":"Account Head Name","fieldlabel":"Account Head Name","fieldrules":[{"required":true,"message":"This field is required"}],"fieldtype":"text"},{"fieldname":"Address","fieldplaceholder":"Your Address","fieldlabel":"Address","fieldrules":[{"required":true,"message":"This field is required"}],"fieldtype":"text"},{"fieldname":"AccountType","fieldplaceholder":"Account Type","fieldlabel":"Account Type","fieldrules":[],"fieldtype":"select","options":["Assets","Liabilities"]}],"_id":"LtMFs2EXXos2nSh5"}
`

And save the file. Restart the server using (Ctrl+C & `node index.js`)

Now after reloading you will see this updated form

![image](https://user-images.githubusercontent.com/68378377/113038934-b878d700-91b4-11eb-9baf-671bebe732e8.png)


