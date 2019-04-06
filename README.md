# NETCORE WEB SERVICE

## Building REST API

I am working on an Azure Web Service that will host Rest API for my OneForALL LMS Application [link to OneForAll!](https://github.com/BlackFoxgamingstudio/OneForAll). The goal is to have the Python Flask application consume the .Net API's with this API geteway app. IT IS WORKING RIGHT NOW!:)

### Heres what I got:

## The Api GateWay PoCv1:

### Input
![Image of PoC test1](https://raw.githubusercontent.com/BlackFoxgamingstudio/NETCORE/master/test1.png)
![Image of PoC test3](https://raw.githubusercontent.com/BlackFoxgamingstudio/NETCORE/master/messager.png)
### Output
![Image of PoC test1](https://raw.githubusercontent.com/BlackFoxgamingstudio/NETCORE/master/RabbitMQ.png)
Above We are Testing a .NETCORE Web API that I can deploy to Azure. The first test needs to take project tasks to be used in Project views in the Oneforall app. 

![Image of PoC test2](https://raw.githubusercontent.com/BlackFoxgamingstudio/NETCORE/master/test2.png)
Next we are testing the route that host the JSON for each task created.

![Image of PoC test3](https://raw.githubusercontent.com/BlackFoxgamingstudio/NETCORE/master/test3.png)
This activity feed is fitered in a jinja2 template to only show Activity in the feed that have an "account" name that matches the Name of the project. this project has been created in the oneforall application to show how the Actvity Feed takes data from the .NET Api


## 1. Config
To run the oneforall poc and the Api gateway
  a.  Refrance Doc:
   
  b. .NETCore Command:
         ```dotnet run ToDoApi```
   
  c. python 3 run command:
          '''python localhost.py'''
  d. see api swagger page:
  
## 2. LMS
We want to allow you to learn from the community by watching videos in this LMS view. This view will be gamifyed in the next version of the application. The goal is to track the complations of your projects by others with points and badges. Our goals is to reward our community learners and leaders with badges, rewards, and jobs from the gaining of new skills from our classes of real projects and examples.

![Image of Project based LMS](https://raw.githubusercontent.com/BlackFoxgamingstudio/NETCORE/master/lmstest4.png)
## 3. R/D Workflow
When you watch your own or someone elses course around a project, you can create your own projects by login in. when you are login you can save your notes under some of the tabs you see in the lower half the each and every project view. save code you learn in each lession, or save a new workflow for a process you all ready know. THe hope is i have added a section to back appart your study in to smaller peaces for you to study and search later. or to be exported in the Admin Pannel ( see next section). or to even be shared in the API for integration with another tool.


![Image of users Workflow](https://raw.githubusercontent.com/BlackFoxgamingstudio/NETCORE/master/RDstudytest5.png)
## 4. Admin Pannel
In the image below you see the admin pannel to allow you to quickly edit your projects and its many parts. very helpful when you build your own LMS, or update and upload images or file links. (also see the File system tab in the admin pannel). In next version we will allow for dynamic storeboarding using this file system and a dynamic image selecter/uploader per each screen. 

![Image of PoC export and update classes and projects](https://raw.githubusercontent.com/BlackFoxgamingstudio/NETCORE/master/Admin_Pannel.png)
## 5. Google Sheets Integration
If the Admin Pannel is to slow. you can upload in bulk using the googlesheets intigration. blackfox empleyees have the abilty to mass upload any number of projects, code, workflow, keywords or task for any user for a professional service charge.

![Image of PoC export and update classes and projects](https://raw.githubusercontent.com/BlackFoxgamingstudio/NETCORE/master/GoglesheetsIntegration.png)

