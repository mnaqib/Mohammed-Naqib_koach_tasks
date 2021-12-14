# Mohammed-Naqib_koach_tasks

Level 1 Task:
  Level tasks were pretty straight forward, so i have created two APIs Login Api and Registeration Api. To develop the APIs I have used ExpressJS, NodeJS and MongoDB.
  To develop Registeration API first i defined the models which will tell the DB what type of data to be allowed to insert into the database. After completing defining
  the model, then i developed the controller for the registration operation controller will have the main logic of what operation to perform for example create, delete etc.
  The controller function takes 2 parameters request and response, the request parameter will have all the parameters required for the operation and response parameter is 
  used to send response to the user. Once i completed developing controller then i defined the routes for the API calls, I have used express router to define the different
  paths. Once the routes have been defined next step was to write the connectDB function which will be used to connect to database.
  Then i created a cluster in Mongo atlas and used the MONGO_URL to connect the Express app to MongoDB database.
      Steps for developing Login Api were all similar and the database used for Login and Registration Api are same.
      
Level 2 Task:
   Similar to level 1 even level 2 task was pretty straight forward but instead it was a front end task. So to design the page i have used ReactJS framework. Using create-react-app
   npx command i got the boiler plate for my react app. First i did some cleanup by removing the unwanted files and the started developing a simple react app using which one can
   register or login and alert message pops up for successful login/register. Here i have used my previously developed APIs to handle the backend stuffs.
   To design my single page login-Register app i started with defining functional components for login and registering operations to style them i have used react-styled-component
   library. Once i completed my login and registration components then i designed a app component which would house both of the component inside it. To styled the app component
   too i have used react-styled-component library. after completing the front end app i have used react-hooks to take controlled inputs from the user and to render the alert messages
   and to perform backend api calls i have defined few functions. I have used axios library to perform the actual API calls to the bcakend APIs.
   
Level 3 Task:
    In level 3 task i have used python language to parse the json files. First i opened the json files inside my program and then read the files and converted them to python
    dictionary, then performed the operations on them to get the desired ouput. Once the output is found then I have dumped the dictionary to output json file. These operations
    were almost same for first and third parsing operations, but for the third since output had data from all three json files, I first converted the dictionary to list and then
    used a merge function to merge all three files to one and dumped the result in to a output file.
        In third parsing problem to sort them according to the clg_code i have used a function to split the code in to a string and integer and used the return value for a lamda
        function which was used as custom condition to sort the data and after sorting it was dumped to a json file.
        
Level 4 Task:
    The level 4 task is also simple and straight forward, here i have devloped an API which will be used to perform CRUD oprations on the json files data which will be stored in
    a database. To develop the API i have used ExpressJS, NodeJS and MongoDB, similar to level 1 tasks in this task first i have defined the models for students, groups and colleges
    then designed the controllers for each model to perform CRUD operations on them. After that i have defined routes for all of them they have multiple paths siince we have to
    perform CRUD operations. After completing routes i have wired them to Express app and then created a connectDB function to connect to MongoDB database. And since it was asked 
    to put all the data in json files into the database, i have used mongoimport --uri on each of the json files and stored them in database.
    
 
