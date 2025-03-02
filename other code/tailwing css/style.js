// Toggle visibility of elements
function toggleVisibility(element, visibleClass, hiddenClass) {
    if (element.classList.contains(visibleClass)) {
        element.classList.remove(visibleClass);
        element.classList.add(hiddenClass);
    } else {
        element.classList.add(visibleClass);
        element.classList.remove(hiddenClass);
    }
}

// Toggle dropdown menu
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close popup
function closePopup() {
    const popup = document.getElementById("box211");
    toggleVisibility(popup, "box211-visible", "box211-hidden");
}

// Open popup
function openPopup() {
    const popup = document.getElementById("box211");
    toggleVisibility(popup, "box211-visible", "box211-hidden");
}

// Show shop section
function showShop() {
    const shop = document.getElementById("shop");
    shop.style.display = "block";
}

// Fetch and display user data
async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData([data]);
    } catch (error) {
        console.error('Error fetching user data:', error);
        alert("ID is incorrect or network error occurred");
    }
}

// Display user data
function displayData(data) {
    const dataContainer = document.querySelector('#data');
    const html = data.map(item => `
        <div>
            Id: ${item.id}<br>
            Name: ${item.name}<br>
            Email: ${item.email}<br>
            UserName: ${item.username}<br>
            Address:<br>
            Apartment: ${item.address.suite}<br>
            Street: ${item.address.street}<br>
            City: ${item.address.city}<br>
            Zipcode: ${item.address.zipcode}<br>
            Geo Lat: ${item.address.geo.lat}<br>
            Geo Lng: ${item.address.geo.lng}<br>
            Phone: ${item.phone}<br>
            Website: ${item.website}<br>
            Company: ${item.company.name}<br>
            Catch Phrase: ${item.company.catchPhrase}<br>
            BS: ${item.company.bs}<br>
        </div>
    `).join('');
    dataContainer.innerHTML = html;
}

// Event listeners for search
const searchButton = document.querySelector('.buttonimg2');
const inputField = document.querySelector('.input1');

searchButton.addEventListener('click', () => {
    const inputValue = inputField.value.trim();
    if (inputValue) {
        fetchUserData(inputValue);
    }
});

inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});

// Fetch and display all users on page load
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let html = '';
        data.forEach(user => {
            html += `
                <br> Id: ${user.id} <br>
                Name: ${user.name} <br>
                UserName: ${user.username}<br>
                Email: ${user.email} <br>
                Address:<br>
                Apartment: ${user.address.suite} <br>
                Street: ${user.address.street} <br>
                City: ${user.address.city} <br>
                Zipcode: ${user.address.zipcode} <br>
                Geo Lat: ${user.address.geo.lat} <br>
                Geo Lng: ${user.address.geo.lng} <br>
                Phone: ${user.phone} <br>
                Website: ${user.website} <br>
                Company: ${user.company.name}<br>
                Catch Phrase: ${user.company.catchPhrase}<br>
                BS: ${user.company.bs}<br>
                <br> <br> <br>
            `;
        });
        document.getElementById("data").innerHTML = html;
    })
    .catch(error => {
        console.error('Error fetching all users:', error);
        alert("Network error occurred while fetching all users");
    });