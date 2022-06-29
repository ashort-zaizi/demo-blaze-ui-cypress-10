# demo-blaze-ui-cypress-10
This is a demo Cypress UI automation framework, using the new upgraded Cypress version 10. Includes BDD Cucumber tests

When cloning this repo you will need to manually make a change to the following file and line of code:-

File:-
node_modules/cypress-cucumber-preprocessor/lib/stepDefinitionPath.js

Make this change to this line:-

confStepDefinitions || `cypress${path.sep}integration`;
        
Change to:-     
confStepDefinitions || `cypress${path.sep}e2e`;
