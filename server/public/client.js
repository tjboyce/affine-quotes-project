console.log('js has been loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQ has been loaded');
    
    $.ajax({
        url: '/quotes',
        method: 'GET'
    }).then(function (response){
        console.log('The quotes get request worked!!!!');
        console.log(response);
        for (let i = 0; i < response.length; i++) {
           // $('#tbody').append(response[i]);
            $('#tbody').append(`<br><tr><td>
                ${response[i].quote}
                </td>
                <td>
                ${response[i].author}
                </td></tr>`);  
        }
        
    });
    
    $('#tbody').append(`<br><tr><td>
            "be excellent to eachother. and party on dudes!"
                </td>
                <td>
           bill and teds excellent adventure.
                </td></tr>`);
}
