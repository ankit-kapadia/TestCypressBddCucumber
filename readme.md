I have created a BDD Cucumber framework for the given tasks.
You can go to package.json to line number 6 "scripts": "cypress run --browser firefox" and change the browser. for now it accepts chrome/firefox/electron.
Below are paths for important folders:
1. Feature Files: cypress/integration/test.feature
2. StepDefinations: cypress/integration/test/test.js
3. Execution Reports will be generated in 'reports/cucumber-htmlreport.html/index.html'

To Run the tests:
1. Git clone the project on your machine to the desired location.
2. On the Terminal, go to the root directory of the project and execute 'npm test'.

To execute on docker please follow the following steps:
1. Install docker from https://docs.docker.com/get-docker/. 
2. Open Docker once on local.
3. Execute the following commands: 
    a. npm install
    b. docker run -it -v $PWD:<Present_Folder_Name> -w <Present_Folder_Name> -e cypress cypress/included:9.1.1


Note: The tests will run in headless mode.
