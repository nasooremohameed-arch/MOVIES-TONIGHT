/* =========================================
   MOVIES TONIGHT
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ELEMENTS
    ========================================= */

    const profileButton = document.getElementById("profileButton");
    const profileSection = document.getElementById("profileSection");
    const closeProfile = document.getElementById("closeProfile");

    const navLinks = document.querySelectorAll(".nav-link");
    const profileButtons = document.querySelectorAll("[data-profile-page]");
    const pages = document.querySelectorAll(".page");


    /* =========================================
       PAGE SYSTEM
    ========================================= */

    function showPage(pageId) {

        pages.forEach(function (page) {
            page.classList.remove("active-page");
        });

        const selectedPage = document.getElementById(pageId);

        if (selectedPage) {
            selectedPage.classList.add("active-page");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    function setActiveNav(pageId) {

        navLinks.forEach(function (link) {

            const linkPage = link.getAttribute("data-page");

            if (linkPage === pageId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }

        });
    }


    /* =========================================
       PROFILE OPEN / CLOSE
    ========================================= */

    if (profileButton && profileSection) {

        profileButton.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            profileSection.classList.toggle("show");

        });

    }


    if (closeProfile && profileSection) {

        closeProfile.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            profileSection.classList.remove("show");

        });

    }


    /* =========================================
       CLOSE PROFILE WHEN CLICKING OUTSIDE
    ========================================= */

    document.addEventListener("click", function (event) {

        if (!profileSection || !profileSection.classList.contains("show")) {
            return;
        }

        if (
            !profileSection.contains(event.target) &&
            event.target !== profileButton &&
            !profileButton.contains(event.target)
        ) {

            profileSection.classList.remove("show");

        }

    });


    /* =========================================
       TOP NAVIGATION
    ========================================= */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const pageId = link.getAttribute("data-page");

            if (!pageId) {
                return;
            }

            showPage(pageId);

            setActiveNav(pageId);

        });

    });


    /* =========================================
       PROFILE MENU NAVIGATION
    ========================================= */

    profileButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const pageId = button.getAttribute("data-profile-page");

            if (!pageId) {
                return;
            }

            if (profileSection) {
                profileSection.classList.remove("show");
            }

            showPage(pageId);

            /*
                When opening a page from Profile,
                remove active state from Movies / Series /
                Watch Together because the user is now
                inside the Profile area.
            */

            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });

        });

    });


    /* =========================================
       START WATCHING
    ========================================= */

    const startWatching = document.getElementById("startWatching");

    if (startWatching) {

        startWatching.addEventListener("click", function () {

            showPage("moviesPage");
            setActiveNav("moviesPage");

        });

    }


    /* =========================================
       WATCH TOGETHER HOME BUTTON
    ========================================= */

    const watchTogetherHome =
        document.getElementById("watchTogetherHome");

    if (watchTogetherHome) {

        watchTogetherHome.addEventListener("click", function () {

            showPage("togetherPage");
            setActiveNav("togetherPage");

        });

    }


    /* =========================================
       CREATE ROOM
    ========================================= */

    const createRoom =
        document.getElementById("createRoom");

    const roomCode =
        document.getElementById("roomCode");

    const roomMessage =
        document.getElementById("roomMessage");


    if (createRoom && roomCode && roomMessage) {

        createRoom.addEventListener("click", function () {

            const code =
                Math.random()
                    .toString(36)
                    .substring(2, 8)
                    .toUpperCase();

            roomCode.value = code;

            roomMessage.textContent =
                "Room created! Share this code with your friend: " + code;

        });

    }


    /* =========================================
       JOIN ROOM
    ========================================= */

    const joinRoom =
        document.getElementById("joinRoom");

    if (joinRoom && roomCode && roomMessage) {

        joinRoom.addEventListener("click", function () {

            const code = roomCode.value.trim().toUpperCase();

            if (code === "") {

                roomMessage.textContent =
                    "Please enter a room code.";

                return;
            }

            roomMessage.textContent =
                "Joining room " + code + "...";

        });

    }


    /* =========================================
       ROOM CODE - ENTER KEY
    ========================================= */

    if (roomCode && joinRoom) {

        roomCode.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                joinRoom.click();
            }

        });

    }


    /* =========================================
       LOGIN
    ========================================= */

    const loginButton =
        document.getElementById("loginButton");

    const emailInput =
        document.getElementById("email");

    const passwordInput =
        document.getElementById("password");

    const accountMessage =
        document.getElementById("accountMessage");


    if (
        loginButton &&
        emailInput &&
        passwordInput &&
        accountMessage
    ) {

        loginButton.addEventListener("click", function () {

            const email =
                emailInput.value.trim();

            const password =
                passwordInput.value.trim();


            if (email === "" || password === "") {

                accountMessage.textContent =
                    "Please enter your email and password.";

                return;
            }


            if (!email.includes("@")) {

                accountMessage.textContent =
                    "Please enter a valid email address.";

                return;
            }


            accountMessage.textContent =
                "You are logged in successfully.";

        });

    }


    /* =========================================
       CREATE ACCOUNT
    ========================================= */

    const signupButton =
        document.getElementById("signupButton");


    if (signupButton && accountMessage) {

        signupButton.addEventListener("click", function () {

            accountMessage.textContent =
                "Account creation will be available soon.";

        });

    }


    /* =========================================
       LOG OUT
    ========================================= */

    const profileLogout =
        document.getElementById("profileLogout");


    if (profileLogout) {

        profileLogout.addEventListener("click", function () {

            if (profileSection) {
                profileSection.classList.remove("show");
            }

            showPage("accountPage");

            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });


            if (accountMessage) {

                accountMessage.textContent =
                    "You have been logged out.";

            }

        });

    }


    /* =========================================
       SETTINGS
    ========================================= */

    const saveSettings =
        document.getElementById("saveSettings");

    const settingsMessage =
        document.getElementById("settingsMessage");


    if (saveSettings && settingsMessage) {

        saveSettings.addEventListener("click", function () {

            settingsMessage.textContent =
                "Settings saved successfully.";

        });

    }


    /* =========================================
       LANGUAGE SETTINGS
    ========================================= */

    const saveLanguage =
        document.getElementById("saveLanguage");

    const languageSelect =
        document.getElementById("languageSelect");

    const subtitleSelect =
        document.getElementById("subtitleSelect");

    const audioSelect =
        document.getElementById("audioSelect");

    const languageMessage =
        document.getElementById("languageMessage");


    if (
        saveLanguage &&
        languageSelect &&
        subtitleSelect &&
        audioSelect &&
        languageMessage
    ) {

        saveLanguage.addEventListener("click", function () {

            const language =
                languageSelect.value;

            const subtitle =
                subtitleSelect.value;

            const audio =
                audioSelect.value;


            localStorage.setItem(
                "appLanguage",
                language
            );

            localStorage.setItem(
                "subtitleLanguage",
                subtitle
            );

            localStorage.setItem(
                "audioLanguage",
                audio
            );


            languageMessage.textContent =
                "Preferences saved successfully.";

        });


        /* Load saved preferences */

        const savedLanguage =
            localStorage.getItem("appLanguage");

        const savedSubtitle =
            localStorage.getItem("subtitleLanguage");

        const savedAudio =
            localStorage.getItem("audioLanguage");


        if (savedLanguage) {
            languageSelect.value = savedLanguage;
        }

        if (savedSubtitle) {
            subtitleSelect.value = savedSubtitle;
        }

        if (savedAudio) {
            audioSelect.value = savedAudio;
        }

    }


    /* =========================================
       BACK BUTTONS
    ========================================= */

    const backButtons =
        document.querySelectorAll("[data-back]");


    backButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const pageId =
                button.getAttribute("data-back");

            if (!pageId) {
                return;
            }

            showPage(pageId);
            setActiveNav(pageId);

        });

    });


    /* =========================================
       HELP / SUPPORT
    ========================================= */

    const contactSupport =
        document.getElementById("contactSupport");


    if (contactSupport) {

        contactSupport.addEventListener("click", function () {

            alert(
                "Support contact will be available soon."
            );

        });

    }


    /* =========================================
       DELETE ACCOUNT
    ========================================= */

    const confirmDelete =
        document.getElementById("confirmDelete");

    const deleteMessage =
        document.getElementById("deleteMessage");


    if (confirmDelete && deleteMessage) {

        confirmDelete.addEventListener("click", function () {

            const confirmed =
                confirm(
                    "Are you sure you want to delete your account?"
                );


            if (confirmed) {

                deleteMessage.textContent =
                    "Account deletion request submitted.";

            }

        });

    }


    /* =========================================
       SEARCH
    ========================================= */

    const searchInput =
        document.getElementById("searchInput");


    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchText =
                searchInput.value
                    .trim()
                    .toLowerCase();


            const movieCards =
                document.querySelectorAll(".movie-card");


            movieCards.forEach(function (card) {

                const titleElement =
                    card.querySelector("h3");


                if (!titleElement) {
                    return;
                }


                const title =
                    titleElement.textContent
                        .toLowerCase();


                if (title.includes(searchText)) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }


    /* =========================================
       MOVIE PLAY BUTTONS
    ========================================= */

    const moviePlayButtons =
        document.querySelectorAll(".movie-hover button");


    moviePlayButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            alert(
                "Movie playback will be connected here."
            );

        });

    });


    /* =========================================
       VIEW ALL
    ========================================= */

    const viewAllButtons =
        document.querySelectorAll(".view-all-button");


    viewAllButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert(
                "More movies will be available here soon."
            );

        });

    });


    /* =========================================
       ESC KEY
       Close Profile
    ========================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (profileSection) {
                profileSection.classList.remove("show");
            }

        }

    });

});