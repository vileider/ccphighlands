//alert('ddddd');
/*
(<HTMLButtonElement>document.getElementById("fetch-button")).addEventListener('click', () =>{
    var fetchingTextPath =
    (<HTMLInputElement>document.getElementById("sending-data")).value;
    zapisz(fetchingTextPath);
    });
*/
var zapisz = function (tekst) {
    console.log('wczytaje1111');
    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ something: tekst })
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log('success:', data);
    })["catch"](function (error) {
        console.error('errorek:', error);
    });
};
