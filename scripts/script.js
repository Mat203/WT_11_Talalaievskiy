$(document).ready(function() {
    var data = [
        { name: 'John', birthdate: '2000-01-01' },
        { name: 'Jane', birthdate: '1999-01-01' },
        { name: 'Mike', birthdate: '1998-01-01' },
        { name: 'Emma', birthdate: '2001-01-01' },
        { name: 'Robert', birthdate: '1997-01-01' },
        { name: 'Olivia', birthdate: '2002-01-01' }
    ];

    function displayData() {
        var content = '';
        _.forEach(data, function(item) {
            content += '<p>Name: ' + item.name + ', Age: ' + dayjs().diff(item.birthdate, 'year') + '</p>';
        });
        $('#content').html(content);
    }

    displayData();

    $('#button1').click(function() {
        data = _.shuffle(data);
        displayData();
    });

    $('#button2').click(function() {
        data = _.sortBy(data, ['name']);
        displayData();
    });

    $('#button3').click(function() {
        _.forEach(data, function(item) {
            item.birthdate = dayjs(item.birthdate).add(1, 'year').format('YYYY-MM-DD');
        });
        displayData();
    });

    $('#button4').click(function() {
        _.forEach(data, function(item) {
            item.birthdate = dayjs(item.birthdate).subtract(1, 'year').format('YYYY-MM-DD');
        });
        displayData();
    });

    $('#button5').click(function() {
        _.forEach(data, function(item) {
            item.birthdate = dayjs().format('YYYY-MM-DD');
        });
        displayData();
    });

});
