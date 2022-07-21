function extention_loop() {

    var app = document.getElementById('app');
    if (app === null) {
        console.warn('Unable to locate required element! (app)');
        return;
    }

    var page = app.getElementsByClassName('page')[0];
    if (page === null) {
        console.warn('Unable to locate required element! (page)');
        return;
    }

    var container = page.getElementsByClassName('container-fluid')[0];
    if (container === null) {
        console.warn('Unable to locate required element! (container-fluid)');
        return;
    }

    var tables = container.getElementsByTagName('table');
    if (tables === null || tables.length <= 0) {
        console.warn('Unable to locate required element! (table)');
        return;
    }

    var title = tables[0].getElementsByTagName('tbody')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('td')[2].textContent;
        
    var active = tables.length >= 2;
    if (active) {

        var element = container.getElementsByTagName('h3')[0].getElementsByTagName('span')[0];
        if (element === null) {
            document.title = 'Lost Merchants | Left | 00:00:00';
        }
        else {
            document.title = 'Lost Merchants | Left | ' + element.textContent.replace('(Expire in ', '').replace(')', '');
        }

    }
    else {
        document.title = 'Lost Merchants | Next | ' + title;
    }

    setTimeout(extention_loop, 1000);

}

extention_loop();