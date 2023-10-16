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
            content += '<p>Name: ' + item.name + ', Age: ' + dayjs().diff(item.birthdate, 'year') + ', Birthdate: ' + item.birthdate+'</p>';
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
            var newBirthdate = moment(item.birthdate).add(1, 'year');
            if (moment().diff(newBirthdate, 'years') >= 0) {
                item.birthdate = newBirthdate.format('YYYY-MM-DD');
            }
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

    $('#button6').click(function() {
        _.forEach(data, function(item) {
            var newBirthdate = moment(item.birthdate).add(1, 'months');
            if (moment().diff(newBirthdate, 'years') >= 0) {
                item.birthdate = newBirthdate.format('YYYY-MM-DD');
            }
        });
        displayData();
    });
    

    $('#button7').click(function() {
        _.forEach(data, function(item) {
            item.birthdate = moment(item.birthdate).subtract(1, 'months').format('YYYY-MM-DD');
        });
        displayData();
    });

    $('#button8').click(function() {
        _.forEach(data, function(item) {
            item.birthdate = moment(item.birthdate).startOf('year').format('YYYY-MM-DD');
        });
        displayData();
    });

    $('#button9').click(function() {
        _.forEach(data, function(item) {
            item.birthdate = moment(item.birthdate).endOf('year').format('YYYY-MM-DD');
        });
        displayData();
    });

    $('#button10').click(function() {
        _.forEach(data, function(item) {
            item.birthdate = moment(item.birthdate, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
        });
        displayData();
    });    

    $('#button11').click(function() {
        var randomIndex = _.random(0, data.length - 1);
        data.splice(randomIndex, 1);
        displayData();
    });

});
