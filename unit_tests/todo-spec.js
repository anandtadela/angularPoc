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

