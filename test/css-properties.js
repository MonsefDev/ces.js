asyncTest('CSS Properties', function() {
    expect(6);

    ces.download('test.ces', function(source) {
        var body = document.querySelector('#qunit-fixture');

        var button = document.createElement('button');
        button.id = 'button';
        button.textContent = 'Button';
        body.appendChild(button);

        var paragraph = document.createElement('p');
        paragraph.id = 'paragraph';
        paragraph.textContent = 'Paragraph';
        body.appendChild(paragraph);

        var showButton = document.createElement('button');
        showButton.id = 'show';
        showButton.textContent = 'Show';
        body.appendChild(showButton);

        var par = document.createElement('p');
        par.id = 'par';
        par.style.display = 'none';
        par.textContent = 'Par';
        body.appendChild(par);

        var js = ces.ces2js(source, 'test.ces');
        ces.execute(js);

        equal(button.style.getPropertyValue('background-color'), '', 'Property background-color is not set.');
        equal(button.style.getPropertyValue('color'), '', 'Property color is not set.');

        trigger(button, 'click');

        equal(button.style.getPropertyValue('background-color'), 'blue', 'Property background-color is set to "blue".');
        equal(button.style.getPropertyValue('color'), 'red', 'Property color is set to "red".');

        equal(par.style.display, 'none', 'Property display is set to "none".');

        trigger(show, 'click');

        equal(par.style.display, 'block', 'Property display is set to "block".');

        start();
    });
});