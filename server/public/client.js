console.log('js has been loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQ has been loaded');
    $('#tbody').append(`<br><tr><td>
            "be excellent to eachother. and party on dudes!"
                </td><td>
           bill and teds excellent adventure.
                </td></tr>`);
}
