(function (){

    var isNameValid, isZipValid, isEmailValid;

    var name = document.querySelector('#name'),
        email = document.querySelector('#email'),
        phone = document.querySelector('#phone'),
        cell = document.querySelector('#cell'),
        address = document.querySelector('#address'),
        number = document.querySelector('#number'),
        district = document.querySelector('#district'),
        city = document.querySelector('#city'),
        state = document.querySelector('#state'),
        phoneArea = document.querySelector('#phone-area'),
        cellArea = document.querySelector('#cell-area'),
        zipHead = document.querySelector('#zip-head'),
        zipTail = document.querySelector('#zip-tail'),
        form = document.querySelector('#signup'),
        buttonDelete = document.querySelector('#buttonDelete'),
        buttonSave = document.querySelector('#buttonSave');

    buttonSave.onclick = function () {
        save();
    };

    buttonDelete.onclick = function(){
        clear();
    };

    name.onchange = function(){
        checkName();
    };

    email.onchange = function(){
        checkEmail();
    };

    zipHead.onchange = function(){
        checkZip();
    };

    zipTail.onchange = function(){
        checkZip();
    };

    function resetFlags(){
        isNameValid = isZipValid = isEmailValid = false;
    }

    function getData(){
        var data = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            cell: cell.value,
            address: address.value,
            number: number.value,
            district: district.value,
            city: city.value,
            state: state.value,
            phoneArea: phoneArea.value,
            cellArea: cellArea.value,
            zip: zipHead.value + zipTail.value
        };

        return data;
    }

    function save(){

        localStorage.user = JSON.stringify(getData());

        sendData(localStorage.user);
    }

    function clear(){

        localStorage.removeItem('user');

        form.reset();

        resetFlags();

        checkForm();
    }

    function checkName(){

        isNameValid = name.value.search(' ') != -1 && name.value.length > 5;

        checkForm();
    }

    function checkEmail(){

        isEmailValid = email.value.search('@') != -1 && email.value.search('.com') != -1;

        checkForm();
    }

    function checkZip(){

        var zip = zipHead.value + zipTail.value;

        isZipValid = zip.match(/[0-9]{8}/);

        if(isZipValid){
            requestZip(zip);
        }

        checkForm();
    }

    function checkForm(){
        enableControls(isNameValid && isEmailValid && isZipValid);
    }

    function enableControls(value){
        buttonDelete.disabled = buttonSave.disabled = !value;
    }

    function requestZip(zip){

        var url = 'http://cep.correiocontrol.com.br/' + zip + '.json';

        var xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onload = function(){
            populateAddress(JSON.parse(xhr.responseText));
        };

        xhr.onerror = function(){
            alert('Failed');
        };

        xhr.send();
    }

    function sendData(data){
        var url = 'http://httpbin.org/post';

        var xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);

        xhr.onload = function(){

            alert('Saved');

            console.dir(JSON.parse(xhr.responseText));
        };

        xhr.onerror = function(){
            alert('Failed');
        };

        xhr.send(data);
    }

    function populateAddress(info){
        address.value = info.logradouro;
        district.value = info.bairro;
        state.value = info.uf;
        city.value = info.localidade;
    }

    resetFlags();

})();