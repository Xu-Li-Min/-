let districtSelect = document.querySelector('#districtSelect');

let xhr = new XMLHttpRequest();
xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97');
xhr.send();
xhr.onload = function(){
    let data = JSON.parse(xhr.responseText).result.records;
    console.log(data);
    // console.log(data.length);

    let resulta = data.filter((item,array) => array);
    
    console.log(resulta);
}