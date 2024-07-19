const bar = document.getElementById('bar');
const cancel = document.getElementById('cancel');
const menuTopics = document.querySelector('.menu-topics')
bar.addEventListener('click', () => {
    cancel.style.display = "block";
    menuTopics.style.display = "block"
    bar.style.display = "none";
});
cancel.addEventListener('click', () => {
    bar.style.display = "block";
    cancel.style.display = "none";
    menuTopics.style.display = "none"
});
// const home = document.getElementById('home')
// home.addEventListener('click', () => {
//     window.location.href = '/index.html';
// });
// const artwork = document.getElementById('artwork')
// artwork.addEventListener('click', () => {
//     window.location.href = '/artworks.html';
// });
// const favourites = document.getElementById('favourites')
// favourites.addEventListener('click', () => {
//     window.location.href = '/favourites.html';
// });
// const subscription = document.getElementById('subscription')
// subscription.addEventListener('click', () => {
//     window.location.href = '/subscription.html';
// });
// const house = document.getElementById('house')
// house.addEventListener('click', () => {
//     window.location.href = '/index.html';
// });
// console.log('home', home,artwork,favourites,subscription,house)



document.addEventListener('DOMContentLoaded', () => {
    const frames = document.getElementById("loops");

    function fetchJSONData() {
        fetch("./main.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                let frameHTML = '';
                data.user.forEach((user) => {
                    frameHTML += `
                        <div class="card">
                            
                                <img id="top" src="${user.image}" alt="img">
                                <p class="heart-emoji">${user.emoji}</p>
                                <div class="text-comp">
                                <div class="image-name">
                                    <img src="${user.url}" alt="img" class="profile3">
                                    <p class="desc">${user.name}</p>
                                </div>
                                    <p class="style">${user.picname}</p>
                                    <p class="text-group3">${user.para}</p>
                                    <p class="text">${user.remix}</p>
                                </div>
                            
                        </div>
                    `;
                });
                frames.innerHTML = frameHTML;

                // Attach event listeners using event delegation
                frames.addEventListener('click', (event) => {
                    if (event.target.classList.contains('date') || event.target.classList.contains('block')) {
                        event.target.classList.toggle('active');
                    }
                });
            })
            .catch((error) => {
                console.error("Unable to fetch data:", error);
            });
    }

    // Call the function to fetch and display the data
    fetchJSONData();
});
const btn = document.querySelector(".btn");
const formSuccess = document.querySelector(".form-success");
const formContent = document.querySelector(".form-content");

btn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the form from submitting
    formSuccess.style.display = "block";
    formContent.style.display = "none";
});
const modal = document.querySelector(".modal");
modal.addEventListener("click", (event) =>{
    event.preventDefault(); // Prevent the form from submitting
        alert("Password cannot be submitted");
});

    const button4 = document.querySelector(".button4");
    const formFailure = document.querySelector(".form-failures");

    button4.addEventListener("click", (event) => {
        event.preventDefault();
        formFailure.style.display = "block";
    });