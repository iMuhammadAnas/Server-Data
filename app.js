let card = document.getElementById('colum1');
fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(function (json) {
        console.log("chala")
        for (let i = 0; i < json.users.length; i++) {
            let remove = 'size=50x50';
            let profileImage = json.users[i].image;
            let pi = profileImage.replace(remove,"");
            let fullName = json.users[i].firstName + ' ' + json.users[i].lastName;
            let age = json.users[i].age;
            let gender = json.users[i].gender;
            let phoneNo = json.users[i].phone;
            let email = json.users[i].email;

            const parent = document.createElement('div');
            console.log(parent)
            
            parent.innerHTML = 
            `<div class="card">
            <div class="foo">
            <img src="${pi}" style="width: 150px;height: auto;padding-top: 5px;">
            </div>
            <h2>${fullName}</h2>
            <p>Age : ${age}</p>
            <p>Gnder : ${gender}</p>
            <p>Contact no : ${phoneNo}</p>
            <p>Email : ${email}</p>
            <button>View More Details</button>
            </div>`

            card.appendChild(parent);
        }
    });