document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('bar');
    const cancel = document.getElementById('cancel');
    const menuTopics = document.querySelector('.menu-topics');

    bar.addEventListener('click', () => {
        cancel.style.display = "block";
        menuTopics.style.display = "block";
        bar.style.display = "none";
    });

    cancel.addEventListener('click', () => {
        bar.style.display = "block";
        cancel.style.display = "none";
        menuTopics.style.display = "none";
    });

    // Fetch and display JSON data
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

                // Event delegation for dynamically created elements
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

    fetchJSONData();

    const btn = document.querySelector(".btn");
    const formSuccess = document.querySelector(".form-success");
    const formContent = document.querySelector(".form-content");

    btn.addEventListener("click", (event) => {
        event.preventDefault();
        formSuccess.style.display = "block";
        formContent.style.display = "none";
    });

    const modal = document.querySelector(".modal");
    modal.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Password cannot be submitted");
    });

    const button4 = document.querySelector(".button4");
    const formFailure = document.querySelector(".form-failures");

    button4.addEventListener("click", (event) => {
        event.preventDefault();
        formFailure.style.display = "block";
    });

    const icon = document.querySelector(".solid i");
    const dropdown = document.querySelector(".dropdown");

    icon.addEventListener("click", () => {
        dropdown.classList.toggle("hidden");
        dropdown.style.display = dropdown.classList.contains("hidden") ? "none" : "block";
    });

    const icons = document.querySelectorAll(".solid i");

    icons.forEach(icon => {
        icon.addEventListener("click", () => {
            const dropdown = icon.nextElementSibling;
            dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
        });
    });
});
