# angularPoc
angular poc will have all the features with the examples 

#create repository using git credentials
https://github.com/
#configure user name password in Visual Studio Code to commit and push the code to remote origin
git config --global --get-all user.name 'username'

git config --global --get-all user.email 'email@email.com'

git config --global --get-all user.password  'password'

#create package.json to start local host
#Example
{
  "name": "angularpoc",
  "version": "1.0.0",
  "description": "demo project.",
  "scripts": {
    "lite": "lite-server –port 10001",
    "start": "npm run lite"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "angular": "^1.6.2",
    "lite-server": "^1.3.1"
  },
  "dependencies": {
    "angular": "^1.6.2"
  }
}

#after adding package.json 
npm install

# to start the server 
npm start

# to install angular package.json in the dependencies (this is for production)

npm install angular --save 

# to install angular package.json in the dev dependencies (this is development use)

npm install angular --save-dev

#start with angular module, controller, factory example

var myApp = angular.module('myApp',[])

myApp.controller('firstCntrl',function($scope, myFactory) {

    $scope.name= myFactory.getName();

})

myApp.factory('myFactory',factoryFunction);

factoryFunction() {
    var name = 'anand';

    function getName() {

        return name;

    } 

    return {
        getName: getName
    }
}
#index.html
<!doctype html>
##<html ng-app="myApp">
     <script src="node_modules/angular/angular.js"></script>
    <body>
        <h1 ng-controller="firstCntrl">Welcome page <span ng-bind='name'></span></h1>
    </body>
    </html>

#To run unit test cases
install nodejs v6
#install protractor
npm install -g protractor

webdriver-manager update

#need jdk to start webdriver manager

webdriver-manager start

##example 
describe('angularjs index page title check', function() {
  it('should match main heading', function() {
    browser.get('http://localhost:3000');

    //element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    //element(by.css('[value="add"]')).click();

   // var todoList = element.all(by.repeater('todo in todoList.todos'));
   // expect(todoList.count()).toEqual(3);
    //expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    //todoList.get(2).element(by.css('input')).click();
    element(by.css('.h1')).getText().then( function(new_text){
        expect('Welcome page anand rao tadela').toBe(new_text);
    });

  });
});

// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  capabilities: {
    'browserName': 'firefox'
    }
};

#to run test cases

protractor conf.js

## to run on specific browser
// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'firefox'
  }
}
#sass compiler
npm install sass

sass sass/style.scss css/style.css

#install jshint for javascript standards
npm install -g jshint
