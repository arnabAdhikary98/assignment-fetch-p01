const fetchUsers = async () => {
    const response = await fetch('https://reqres.in/api/users?page=1');
    const dataFromApi = await response.json();

    const users = dataFromApi.data;

    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = ''; // Clear previous data

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('userCard');

        const avatar = document.createElement('img');
        avatar.src = user.avatar;
        avatar.alt = `${user.first_name} ${user.last_name}'s avatar`;
        avatar.classList.add('userAvatar');

        const name = document.createElement('p');
        name.textContent = `${user.first_name} ${user.last_name}`;

        const email = document.createElement('p');
        email.textContent = user.email;

        userCard.appendChild(avatar);
        userCard.appendChild(name);
        userCard.appendChild(email);

        userContainer.appendChild(userCard);
    });
};

const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', fetchUsers);
