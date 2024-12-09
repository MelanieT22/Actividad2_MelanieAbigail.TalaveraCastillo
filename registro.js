document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = {
        id: document.getElementById('id').value,
        cedula: document.getElementById('cedula').value,
        name: document.getElementById('name').value,
        birthDate: document.getElementById('birthDate').value,
        city: document.getElementById('city').value
    };

    const userTable = document.getElementById('userTable');
    userTable.innerHTML += `
        <table>
            <tr>
                <td>${userData.id}</td>
                <td>${userData.cedula}</td>
                <td>${userData.name}</td>
                <td>${userData.birthDate}</td>
                <td>${userData.city}</td>
            </tr>
        </table>
    `;
});
