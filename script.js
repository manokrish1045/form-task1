document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const dataTable = document.getElementById('dataTable');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const foods = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(checkbox => checkbox.value);
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        const newRow = dataTable.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);

        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = address;
        cell4.innerHTML = pincode;
        cell5.innerHTML = gender;
        cell6.innerHTML = foods.join(', ');
        cell7.innerHTML = state;
        cell8.innerHTML = country;

        form.reset();
    });
});
