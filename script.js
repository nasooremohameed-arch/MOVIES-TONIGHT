const SUPABASE_URL = "https://eoljotwalafeoammucqy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY  ="sb_publishable_O2yn6QzIczqG0X351bZbaQ_uAUXl3U9";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

/* =========================================
   MOVIES TONIGHT
   MAIN JAVASCRIPT
   SUPABASE AUTH + LANGUAGE + THEME + SEARCH
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
       TRANSLATIONS
    ========================================= */

    const translations = {

        English: {
            home: "Home",
            movies: "Movies",
            series: "Series",
            watchTogether: "Watch Together",
            profile: "Profile",
            startWatching: "Start Watching",
            watchTogetherButton: "Watch Together",
            trending: "Trending Now",
            popular: "Popular Tonight",
            action: "Action",
            romance: "Romance",
            horror: "Horror",
            comedy: "Comedy",
            drama: "Drama",
            sciFi: "Sci-Fi",
            thriller: "Thriller",
            adventure: "Adventure",
            animation: "Animation",
            family: "Family",
            search: "Search movies and series",
            viewAll: "View All",
            account: "Account",
            settings: "Settings",
            notifications: "Notifications",
            privacy: "Privacy",
            help: "Help",
            deleteAccount: "Delete Account",
            logout: "Log Out",
            back: "Back",
            languageSubtitles: "Language & Subtitles",
            appLanguage: "App Language",
            subtitles: "Subtitles",
            audio: "Audio",
            save: "Save",
            savePreferences: "Save Preferences",
            saveSettings: "Save Settings",
            appearance: "Appearance",
            darkMode: "Dark mode",
            autoplay: "Autoplay",
            notificationSettings: "Notifications",
            searchLanguage: "🔎 Search Language",
            typeLanguage: "Type a language name...",
            roomCode: "Room Code",
            createRoom: "Create Room",
            joinRoom: "Join Room",
            login: "Login",
            signup: "Create Account",
            logIn: "Log In",
            createAccount: "Create Account",
            welcomeBack: "Welcome Back",
            signInDescription: "Sign in to your Movies Tonight account.",
            email: "Email",
            password: "Password",
            username: "Username",
            age: "Age",
            enterEmail: "Enter your email",
            enterPassword: "Enter your password",
            enterUsername: "Enter your username",
            enterAge: "Enter your age",
            createPassword: "Create a password",
            confirmPassword: "Confirm Password",
            confirmYourPassword: "Confirm your password",
            backToLogin: "Back to Login",
            creatingAccount: "Creating account...",
            loggingIn: "Logging in...",
            passwordTooShort: "Password must be at least 6 characters.",
            passwordMismatch: "Passwords do not match.",
            usernameRequired: "Please enter a username.",
            ageRequired: "Please enter your age.",
            ageInvalid: "Age must be between 13 and 120.",
            signupInvalid: "Please complete all fields.",
            accountCreated: "Account created successfully!",
            welcome: "WELCOME TO MOVIES TONIGHT",
            tagline: "Your place for movies, series and unforgettable nights.",
            support: "Contact Support",
            confirmDelete: "Delete My Account",
            original: "Original Language",
            english: "English",
            arabic: "Arabic",
            portuguese: "Portuguese",
            french: "French",
            spanish: "Spanish",
            german: "German",
            italian: "Italian",
            turkish: "Turkish",
            russian: "Russian",
            ukrainian: "Ukrainian",
            lithuanian: "Lietuvių",
            polish: "Polish",
            dutch: "Dutch",
            chinese: "Chinese",
            japanese: "Japanese",
            korean: "Korean",
            roomCreated: "Room created! Share this code with your friend: ",
            enterRoomCode: "Please enter a room code.",
            joiningRoom: "Joining room ",
            loginRequired: "Please enter your email and password.",
            invalidEmail: "Please enter a valid email address.",
            loginSuccess: "You are logged in successfully.",
            signupSuccess: "Account created successfully!",
            confirmEmail: "Account created! Please check your email to confirm your account.",
            loggedOut: "You have been logged out.",
            settingsSaved: "Settings saved successfully.",
            preferencesSaved: "Preferences saved successfully.",
            supportSoon: "Support contact will be available soon.",
            deleteConfirm: "Are you sure you want to delete your account?",
            deleteSubmitted: "Account deletion request submitted.",
            playbackSoon: "Movie playback will be connected here.",
            moreMoviesSoon: "More movies will be available here soon."
        },

        Arabic: {
            home: "الرئيسية",
            movies: "الأفلام",
            series: "المسلسلات",
            watchTogether: "مشاهدة معًا",
            profile: "الملف الشخصي",
            startWatching: "ابدأ المشاهدة",
            watchTogetherButton: "شاهد معًا",
            trending: "الأكثر رواجًا",
            popular: "الأكثر شعبية الليلة",
            action: "أكشن",
            romance: "رومانسي",
            horror: "رعب",
            comedy: "كوميديا",
            drama: "دراما",
            sciFi: "خيال علمي",
            thriller: "إثارة",
            adventure: "مغامرات",
            animation: "رسوم متحركة",
            family: "عائلي",
            search: "ابحث عن الأفلام والمسلسلات",
            viewAll: "عرض الكل",
            account: "الحساب",
            settings: "الإعدادات",
            notifications: "الإشعارات",
            privacy: "الخصوصية",
            help: "المساعدة",
            deleteAccount: "حذف الحساب",
            logout: "تسجيل الخروج",
            back: "رجوع",
            languageSubtitles: "اللغة والترجمة",
            appLanguage: "لغة التطبيق",
            subtitles: "الترجمة",
            audio: "الصوت",
            save: "حفظ",
            savePreferences: "حفظ التفضيلات",
            saveSettings: "حفظ الإعدادات",
            appearance: "المظهر",
            darkMode: "الوضع الليلي",
            autoplay: "التشغيل التلقائي",
            notificationSettings: "الإشعارات",
            searchLanguage: "🔎 البحث عن لغة",
            typeLanguage: "اكتب اسم اللغة...",
            roomCode: "رمز الغرفة",
            createRoom: "إنشاء غرفة",
            joinRoom: "انضمام للغرفة",
            login: "تسجيل الدخول",
            signup: "إنشاء حساب",
            logIn: "تسجيل الدخول",
            createAccount: "إنشاء حساب",
            welcomeBack: "مرحبًا بعودتك",
            signInDescription: "سجّل الدخول إلى حسابك في Movies Tonight.",
            email: "البريد الإلكتروني",
            password: "كلمة المرور",
            username: "اسم المستخدم",
            age: "العمر",
            enterEmail: "أدخل بريدك الإلكتروني",
            enterPassword: "أدخل كلمة المرور",
            enterUsername: "أدخل اسم المستخدم",
            enterAge: "أدخل عمرك",
            createPassword: "أنشئ كلمة مرور",
            confirmPassword: "تأكيد كلمة المرور",
            confirmYourPassword: "أعد كتابة كلمة المرور",
            backToLogin: "العودة لتسجيل الدخول",
            creatingAccount: "جاري إنشاء الحساب...",
            loggingIn: "جاري تسجيل الدخول...",
            passwordTooShort: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
            passwordMismatch: "كلمتا المرور غير متطابقتين.",
            usernameRequired: "الرجاء إدخال اسم المستخدم.",
            ageRequired: "الرجاء إدخال العمر.",
            ageInvalid: "العمر يجب أن يكون بين 13 و120.",
            signupInvalid: "الرجاء إكمال جميع الحقول.",
            accountCreated: "تم إنشاء الحساب بنجاح!",
            welcome: "مرحبًا بك في MOVIES TONIGHT",
            tagline: "مكانك للأفلام والمسلسلات والليالي التي لا تُنسى.",
            support: "تواصل مع الدعم",
            confirmDelete: "حذف حسابي",
            original: "اللغة الأصلية",
            english: "الإنجليزية",
            arabic: "العربية",
            portuguese: "البرتغالية",
            french: "الفرنسية",
            spanish: "الإسبانية",
            german: "الألمانية",
            italian: "الإيطالية",
            turkish: "التركية",
            russian: "الروسية",
            ukrainian: "الأوكرانية",
            lithuanian: "الليتوانية",
            polish: "البولندية",
            dutch: "الهولندية",
            chinese: "الصينية",
            japanese: "اليابانية",
            korean: "الكورية",
            roomCreated: "تم إنشاء الغرفة! شارك هذا الرمز مع صديقك: ",
            enterRoomCode: "الرجاء إدخال رمز الغرفة.",
            joiningRoom: "جاري الانضمام إلى الغرفة ",
            loginRequired: "الرجاء إدخال البريد الإلكتروني وكلمة المرور.",
            invalidEmail: "الرجاء إدخال بريد إلكتروني صحيح.",
            loginSuccess: "تم تسجيل دخولك بنجاح.",
            signupSuccess: "تم إنشاء الحساب بنجاح!",
            confirmEmail: "تم إنشاء الحساب! تحقق من بريدك الإلكتروني لتأكيد الحساب.",
            loggedOut: "تم تسجيل خروجك.",
            settingsSaved: "تم حفظ الإعدادات بنجاح.",
            preferencesSaved: "تم حفظ التفضيلات بنجاح.",
            supportSoon: "التواصل مع الدعم سيكون متاحًا قريبًا.",
            deleteConfirm: "هل أنت متأكد أنك تريد حذف حسابك؟",
            deleteSubmitted: "تم إرسال طلب حذف الحساب.",
            playbackSoon: "سيتم ربط تشغيل الفيلم هنا.",
            moreMoviesSoon: "ستتوفر المزيد من الأفلام هنا قريبًا."
        },

        Lithuanian: {
            home: "Pagrindinis",
            movies: "Filmai",
            series: "Serialai",
            watchTogether: "Žiūrėti kartu",
            profile: "Profilis",
            startWatching: "Pradėti žiūrėti",
            watchTogetherButton: "Žiūrėti kartu",
            trending: "Populiariausi",
            popular: "Populiaru šį vakarą",
            action: "Veiksmo",
            romance: "Romantika",
            horror: "Siaubo",
            comedy: "Komedija",
            drama: "Drama",
            sciFi: "Mokslinė fantastika",
            thriller: "Trileriai",
            adventure: "Nuotykiai",
            animation: "Animacija",
            family: "Šeimai",
            search: "Ieškoti filmų ir serialų",
            viewAll: "Rodyti visus",
            account: "Paskyra",
            settings: "Nustatymai",
            notifications: "Pranešimai",
            privacy: "Privatumas",
            help: "Pagalba",
            deleteAccount: "Ištrinti paskyrą",
            logout: "Atsijungti",
            back: "Atgal",
            languageSubtitles: "Kalba ir subtitrai",
            appLanguage: "Programėlės kalba",
            subtitles: "Subtitrai",
            audio: "Garsas",
            save: "Išsaugoti",
            savePreferences: "Išsaugoti pasirinkimus",
            saveSettings: "Išsaugoti nustatymus",
            appearance: "Išvaizda",
            darkMode: "Tamsus režimas",
            autoplay: "Automatinis paleidimas",
            notificationSettings: "Pranešimai",
            searchLanguage: "🔎 Ieškoti kalbos",
            typeLanguage: "Įveskite kalbos pavadinimą...",
            roomCode: "Kambario kodas",
            createRoom: "Sukurti kambarį",
            joinRoom: "Prisijungti",
            login: "Prisijungti",
            signup: "Sukurti paskyrą",
            logIn: "Prisijungti",
            createAccount: "Sukurti paskyrą",
            welcomeBack: "Sveiki sugrįžę",
            signInDescription: "Prisijunkite prie savo Movies Tonight paskyros.",
            email: "El. paštas",
            password: "Slaptažodis",
            username: "Naudotojo vardas",
            age: "Amžius",
            enterEmail: "Įveskite el. paštą",
            enterPassword: "Įveskite slaptažodį",
            enterUsername: "Įveskite naudotojo vardą",
            enterAge: "Įveskite savo amžių",
            createPassword: "Sukurkite slaptažodį",
            confirmPassword: "Patvirtinkite slaptažodį",
            confirmYourPassword: "Pakartokite slaptažodį",
            backToLogin: "Grįžti į prisijungimą",
            creatingAccount: "Kuriama paskyra...",
            loggingIn: "Jungiamasi...",
            passwordTooShort: "Slaptažodis turi būti bent 6 simbolių.",
            passwordMismatch: "Slaptažodžiai nesutampa.",
            usernameRequired: "Įveskite naudotojo vardą.",
            ageRequired: "Įveskite savo amžių.",
            ageInvalid: "Amžius turi būti nuo 13 iki 120 metų.",
            signupInvalid: "Užpildykite visus laukus.",
            accountCreated: "Paskyra sėkmingai sukurta!",
            welcome: "SVEIKI ATVYKĘ Į MOVIES TONIGHT",
            tagline: "Jūsų vieta filmams, serialams ir nepamirštamiems vakarams.",
            support: "Susisiekti su pagalba",
            confirmDelete: "Ištrinti mano paskyrą",
            original: "Originalo kalba",
            english: "Anglų",
            arabic: "Arabų",
            portuguese: "Portugalų",
            french: "Prancūzų",
            spanish: "Ispanų",
            german: "Vokiečių",
            italian: "Italų",
            turkish: "Turkų",
            russian: "Rusų",
            ukrainian: "Ukrainiečių",
            lithuanian: "Lietuvių",
            polish: "Lenkų",
            dutch: "Olandų",
            chinese: "Kinų",
            japanese: "Japonų",
            korean: "Korėjiečių",
            roomCreated: "Kambarys sukurtas! Pasidalykite šiuo kodu su draugu: ",
            enterRoomCode: "Įveskite kambario kodą.",
            joiningRoom: "Jungiamasi prie kambario ",
            loginRequired: "Įveskite el. paštą ir slaptažodį.",
            invalidEmail: "Įveskite galiojantį el. pašto adresą.",
            loginSuccess: "Sėkmingai prisijungėte.",
            signupSuccess: "Paskyra sėkmingai sukurta!",
            confirmEmail: "Paskyra sukurta! Patikrinkite el. paštą ir patvirtinkite paskyrą.",
            loggedOut: "Atsijungėte.",
            settingsSaved: "Nustatymai išsaugoti.",
            preferencesSaved: "Pasirinkimai išsaugoti.",
            supportSoon: "Pagalba bus pasiekiama netrukus.",
            deleteConfirm: "Ar tikrai norite ištrinti paskyrą?",
            deleteSubmitted: "Paskyros ištrynimo užklausa išsiųsta.",
            playbackSoon: "Filmų atkūrimas bus prijungtas čia.",
            moreMoviesSoon: "Daugiau filmų bus pasiekiama netrukus."
        },

        Russian: {
            home: "Главная",
            movies: "Фильмы",
            series: "Сериалы",
            watchTogether: "Смотреть вместе",
            profile: "Профиль",
            startWatching: "Начать просмотр",
            watchTogetherButton: "Смотреть вместе",
            trending: "В тренде",
            popular: "Популярное сегодня",
            action: "Боевики",
            romance: "Романтика",
            horror: "Ужасы",
            comedy: "Комедия",
            drama: "Драма",
            sciFi: "Фантастика",
            thriller: "Триллер",
            adventure: "Приключения",
            animation: "Анимация",
            family: "Семейные",
            search: "Поиск фильмов и сериалов",
            viewAll: "Показать все",
            account: "Аккаунт",
            settings: "Настройки",
            notifications: "Уведомления",
            privacy: "Конфиденциальность",
            help: "Помощь",
            deleteAccount: "Удалить аккаунт",
            logout: "Выйти",
            back: "Назад",
            languageSubtitles: "Язык и субтитры",
            appLanguage: "Язык приложения",
            subtitles: "Субтитры",
            audio: "Аудио",
            save: "Сохранить",
            savePreferences: "Сохранить настройки",
            saveSettings: "Сохранить настройки",
            appearance: "Оформление",
            darkMode: "Тёмный режим",
            autoplay: "Автовоспроизведение",
            notificationSettings: "Уведомления",
            searchLanguage: "🔎 Поиск языка",
            typeLanguage: "Введите название языка...",
            roomCode: "Код комнаты",
            createRoom: "Создать комнату",
            joinRoom: "Войти в комнату",
            login: "Войти",
            signup: "Создать аккаунт",
            logIn: "Войти",
            createAccount: "Создать аккаунт",
            welcomeBack: "С возвращением",
            signInDescription: "Войдите в свой аккаунт Movies Tonight.",
            email: "Электронная почта",
            password: "Пароль",
            username: "Имя пользователя",
            age: "Возраст",
            enterEmail: "Введите электронную почту",
            enterPassword: "Введите пароль",
            enterUsername: "Введите имя пользователя",
            enterAge: "Введите свой возраст",
            createPassword: "Создайте пароль",
            confirmPassword: "Подтвердите пароль",
            confirmYourPassword: "Повторите пароль",
            backToLogin: "Вернуться ко входу",
            creatingAccount: "Создание аккаунта...",
            loggingIn: "Выполняется вход...",
            passwordTooShort: "Пароль должен содержать не менее 6 символов.",
            passwordMismatch: "Пароли не совпадают.",
            usernameRequired: "Введите имя пользователя.",
            ageRequired: "Введите свой возраст.",
            ageInvalid: "Возраст должен быть от 13 до 120 лет.",
            signupInvalid: "Заполните все поля.",
            accountCreated: "Аккаунт успешно создан!",
            welcome: "ДОБРО ПОЖАЛОВАТЬ В MOVIES TONIGHT",
            tagline: "Ваше место для фильмов, сериалов и незабываемых вечеров.",
            support: "Связаться с поддержкой",
            confirmDelete: "Удалить мой аккаунт",
            original: "Оригинальный язык",
            english: "Английский",
            arabic: "Арабский",
            portuguese: "Португальский",
            french: "Французский",
            spanish: "Испанский",
            german: "Немецкий",
            italian: "Итальянский",
            turkish: "Турецкий",
            russian: "Русский",
            ukrainian: "Украинский",
            lithuanian: "Литовский",
            polish: "Польский",
            dutch: "Нидерландский",
            chinese: "Китайский",
            japanese: "Японский",
            korean: "Корейский",
            roomCreated: "Комната создана! Поделитесь этим кодом с другом: ",
            enterRoomCode: "Введите код комнаты.",
            joiningRoom: "Подключение к комнате ",
            loginRequired: "Введите электронную почту и пароль.",
            invalidEmail: "Введите правильный адрес электронной почты.",
            loginSuccess: "Вы успешно вошли.",
            signupSuccess: "Аккаунт успешно создан!",
            confirmEmail: "Аккаунт создан! Проверьте электронную почту для подтверждения.",
            loggedOut: "Вы вышли из аккаунта.",
            settingsSaved: "Настройки сохранены.",
            preferencesSaved: "Настройки языка сохранены.",
            supportSoon: "Связь с поддержкой скоро будет доступна.",
            deleteConfirm: "Вы уверены, что хотите удалить аккаунт?",
            deleteSubmitted: "Запрос на удаление аккаунта отправлен.",
            playbackSoon: "Воспроизведение фильма будет подключено здесь.",
            moreMoviesSoon: "Больше фильмов появится здесь позже."
        },

        Ukrainian: {
            home: "Головна",
            movies: "Фільми",
            series: "Серіали",
            watchTogether: "Дивитися разом",
            profile: "Профіль",
            startWatching: "Почати перегляд",
            watchTogetherButton: "Дивитися разом",
            trending: "У тренді",
            popular: "Популярне сьогодні",
            action: "Бойовик",
            romance: "Романтика",
            horror: "Жахи",
            comedy: "Комедія",
            drama: "Драма",
            sciFi: "Фантастика",
            thriller: "Трилер",
            adventure: "Пригоди",
            animation: "Анімація",
            family: "Сімейні",
            search: "Пошук фільмів і серіалів",
            viewAll: "Показати все",
            account: "Обліковий запис",
            settings: "Налаштування",
            notifications: "Сповіщення",
            privacy: "Конфіденційність",
            help: "Допомога",
            deleteAccount: "Видалити акаунт",
            logout: "Вийти",
            back: "Назад",
            languageSubtitles: "Мова та субтитри",
            appLanguage: "Мова застосунку",
            subtitles: "Субтитри",
            audio: "Аудіо",
            save: "Зберегти",
            savePreferences: "Зберегти налаштування",
            saveSettings: "Зберегти налаштування",
            appearance: "Вигляд",
            darkMode: "Темний режим",
            autoplay: "Автовідтворення",
            notificationSettings: "Сповіщення",
            searchLanguage: "🔎 Пошук мови",
            typeLanguage: "Введіть назву мови...",
            roomCode: "Код кімнати",
            createRoom: "Створити кімнату",
            joinRoom: "Приєднатися",
            login: "Увійти",
            signup: "Створити акаунт",
            logIn: "Увійти",
            createAccount: "Створити акаунт",
            welcomeBack: "З поверненням",
            signInDescription: "Увійдіть до свого акаунта Movies Tonight.",
            email: "Електронна пошта",
            password: "Пароль",
            username: "Ім'я користувача",
            age: "Вік",
            enterEmail: "Введіть електронну пошту",
            enterPassword: "Введіть пароль",
            enterUsername: "Введіть ім'я користувача",
            enterAge: "Введіть свій вік",
            createPassword: "Створіть пароль",
            confirmPassword: "Підтвердьте пароль",
            confirmYourPassword: "Повторіть пароль",
            backToLogin: "Повернутися до входу",
            creatingAccount: "Створення акаунта...",
            loggingIn: "Виконується вхід...",
            passwordTooShort: "Пароль має містити щонайменше 6 символів.",
            passwordMismatch: "Паролі не збігаються.",
            usernameRequired: "Введіть ім'я користувача.",
            ageRequired: "Введіть свій вік.",
            ageInvalid: "Вік має бути від 13 до 120 років.",
            signupInvalid: "Заповніть усі поля.",
            accountCreated: "Акаунт успішно створено!",
            welcome: "ЛАСКАВО ПРОСИМО ДО MOVIES TONIGHT",
            tagline: "Ваше місце для фільмів, серіалів та незабутніх вечорів.",
            support: "Зв'язатися з підтримкою",
            confirmDelete: "Видалити мій акаунт",
            original: "Оригінальна мова",
            english: "Англійська",
            arabic: "Арабська",
            portuguese: "Португальська",
            french: "Французька",
            spanish: "Іспанська",
            german: "Німецька",
            italian: "Італійська",
            turkish: "Турецька",
            russian: "Російська",
            ukrainian: "Українська",
            lithuanian: "Литовська",
            polish: "Польська",
            dutch: "Нідерландська",
            chinese: "Китайська",
            japanese: "Японська",
            korean: "Корейська",
            roomCreated: "Кімнату створено! Поділіться цим кодом із другом: ",
            enterRoomCode: "Введіть код кімнати.",
            joiningRoom: "Підключення до кімнати ",
            loginRequired: "Введіть електронну пошту та пароль.",
            invalidEmail: "Введіть правильну електронну адресу.",
            loginSuccess: "Ви успішно увійшли.",
            signupSuccess: "Акаунт успішно створено!",
            confirmEmail: "Акаунт створено! Перевірте електронну пошту для підтвердження.",
            loggedOut: "Ви вийшли з акаунта.",
            settingsSaved: "Налаштування збережено.",
            preferencesSaved: "Налаштування збережено.",
            supportSoon: "Підтримка буде доступна незабаром.",
            deleteConfirm: "Ви впевнені, що хочете видалити акаунт?",
            deleteSubmitted: "Запит на видалення акаунта надіслано.",
            playbackSoon: "Відтворення фільмів буде підключено тут.",
            moreMoviesSoon: "Більше фільмів буде доступно незабаром."
        },

        Portuguese: {
            home: "Início",
            movies: "Filmes",
            series: "Séries",
            watchTogether: "Assistir juntos",
            profile: "Perfil",
            startWatching: "Começar a assistir",
            watchTogetherButton: "Assistir juntos",
            trending: "Em alta",
            popular: "Popular esta noite",
            action: "Ação",
            romance: "Romance",
            horror: "Terror",
            comedy: "Comédia",
            drama: "Drama",
            sciFi: "Ficção científica",
            thriller: "Suspense",
            adventure: "Aventura",
            animation: "Animação",
            family: "Família",
            search: "Pesquisar filmes e séries",
            viewAll: "Ver tudo",
            account: "Conta",
            settings: "Configurações",
            notifications: "Notificações",
            privacy: "Privacidade",
            help: "Ajuda",
            deleteAccount: "Excluir conta",
            logout: "Sair",
            back: "Voltar",
            languageSubtitles: "Idioma e legendas",
            appLanguage: "Idioma do aplicativo",
            subtitles: "Legendas",
            audio: "Áudio",
            save: "Salvar",
            savePreferences: "Salvar preferências",
            saveSettings: "Salvar configurações",
            appearance: "Aparência",
            darkMode: "Modo escuro",
            autoplay: "Reprodução automática",
            notificationSettings: "Notificações",
            searchLanguage: "🔎 Pesquisar idioma",
            typeLanguage: "Digite o nome do idioma...",
            roomCode: "Código da sala",
            createRoom: "Criar sala",
            joinRoom: "Entrar na sala",
            login: "Entrar",
            signup: "Criar conta",
            logIn: "Entrar",
            createAccount: "Criar conta",
            welcomeBack: "Bem-vindo de volta",
            signInDescription: "Entre na sua conta Movies Tonight.",
            email: "E-mail",
            password: "Senha",
            username: "Nome de usuário",
            age: "Idade",
            enterEmail: "Digite seu e-mail",
            enterPassword: "Digite sua senha",
            enterUsername: "Digite seu nome de usuário",
            enterAge: "Digite sua idade",
            createPassword: "Crie uma senha",
            confirmPassword: "Confirmar senha",
            confirmYourPassword: "Confirme sua senha",
            backToLogin: "Voltar para o login",
            creatingAccount: "Criando conta...",
            loggingIn: "Entrando...",
            passwordTooShort: "A senha deve ter pelo menos 6 caracteres.",
            passwordMismatch: "As senhas não coincidem.",
            usernameRequired: "Digite um nome de usuário.",
            ageRequired: "Digite sua idade.",
            ageInvalid: "A idade deve estar entre 13 e 120 anos.",
            signupInvalid: "Preencha todos os campos.",
            accountCreated: "Conta criada com sucesso!",
            welcome: "BEM-VINDO AO MOVIES TONIGHT",
            tagline: "Seu lugar para filmes, séries e noites inesquecíveis.",
            support: "Entrar em contato com o suporte",
            confirmDelete: "Excluir minha conta",
            original: "Idioma original",
            english: "Inglês",
            arabic: "Árabe",
            portuguese: "Português",
            french: "Francês",
            spanish: "Espanhol",
            german: "Alemão",
            italian: "Italiano",
            turkish: "Turco",
            russian: "Russo",
            ukrainian: "Ucraniano",
            lithuanian: "Lituano",
            polish: "Polonês",
            dutch: "Holandês",
            chinese: "Chinês",
            japanese: "Japonês",
            korean: "Coreano",
            roomCreated: "Sala criada! Compartilhe este código com seu amigo: ",
            enterRoomCode: "Digite um código de sala.",
            joiningRoom: "Entrando na sala ",
            loginRequired: "Digite seu e-mail e senha.",
            invalidEmail: "Digite um endereço de e-mail válido.",
            loginSuccess: "Login realizado com sucesso.",
            signupSuccess: "Conta criada com sucesso!",
            confirmEmail: "Conta criada! Verifique seu e-mail para confirmar sua conta.",
            loggedOut: "Você saiu da conta.",
            settingsSaved: "Configurações salvas com sucesso.",
            preferencesSaved: "Preferências salvas com sucesso.",
            supportSoon: "O suporte estará disponível em breve.",
            deleteConfirm: "Tem certeza de que deseja excluir sua conta?",
            deleteSubmitted: "Solicitação de exclusão enviada.",
            playbackSoon: "A reprodução do filme será conectada aqui.",
            moreMoviesSoon: "Mais filmes estarão disponíveis aqui em breve."
        },

        French: {
            home: "Accueil",
            movies: "Films",
            series: "Séries",
            watchTogether: "Regarder ensemble",
            profile: "Profil",
            startWatching: "Commencer à regarder",
            watchTogetherButton: "Regarder ensemble",
            trending: "Tendances",
            popular: "Populaire ce soir",
            action: "Action",
            romance: "Romance",
            horror: "Horreur",
            comedy: "Comédie",
            drama: "Drame",
            sciFi: "Science-fiction",
            thriller: "Thriller",
            adventure: "Aventure",
            animation: "Animation",
            family: "Famille",
            search: "Rechercher des films et séries",
            viewAll: "Tout voir",
            account: "Compte",
            settings: "Paramètres",
            notifications: "Notifications",
            privacy: "Confidentialité",
            help: "Aide",
            deleteAccount: "Supprimer le compte",
            logout: "Se déconnecter",
            back: "Retour",
            languageSubtitles: "Langue et sous-titres",
            appLanguage: "Langue de l'application",
            subtitles: "Sous-titres",
            audio: "Audio",
            save: "Enregistrer",
            savePreferences: "Enregistrer les préférences",
            saveSettings: "Enregistrer les paramètres",
            appearance: "Apparence",
            darkMode: "Mode sombre",
            autoplay: "Lecture automatique",
            notificationSettings: "Notifications",
            searchLanguage: "🔎 Rechercher une langue",
            typeLanguage: "Tapez le nom d'une langue...",
            roomCode: "Code de la salle",
            createRoom: "Créer une salle",
            joinRoom: "Rejoindre la salle",
            login: "Connexion",
            signup: "Créer un compte",
            logIn: "Se connecter",
            createAccount: "Créer un compte",
            welcomeBack: "Bon retour",
            signInDescription: "Connectez-vous à votre compte Movies Tonight.",
            email: "E-mail",
            password: "Mot de passe",
            username: "Nom d'utilisateur",
            age: "Âge",
            enterEmail: "Entrez votre e-mail",
            enterPassword: "Entrez votre mot de passe",
            enterUsername: "Entrez votre nom d'utilisateur",
            enterAge: "Entrez votre âge",
            createPassword: "Créez un mot de passe",
            confirmPassword: "Confirmer le mot de passe",
            confirmYourPassword: "Confirmez votre mot de passe",
            backToLogin: "Retour à la connexion",
            creatingAccount: "Création du compte...",
            loggingIn: "Connexion...",
            passwordTooShort: "Le mot de passe doit contenir au moins 6 caractères.",
            passwordMismatch: "Les mots de passe ne correspondent pas.",
            usernameRequired: "Veuillez entrer un nom d'utilisateur.",
            ageRequired: "Veuillez entrer votre âge.",
            ageInvalid: "L'âge doit être compris entre 13 et 120 ans.",
            signupInvalid: "Veuillez remplir tous les champs.",
            accountCreated: "Compte créé avec succès !",
            welcome: "BIENVENUE SUR MOVIES TONIGHT",
            tagline: "Votre espace pour les films, séries et soirées inoubliables.",
            support: "Contacter le support",
            confirmDelete: "Supprimer mon compte",
            original: "Langue originale",
            english: "Anglais",
            arabic: "Arabe",
            portuguese: "Portugais",
            french: "Français",
            spanish: "Espagnol",
            german: "Allemand",
            italian: "Italien",
            turkish: "Turc",
            russian: "Russe",
            ukrainian: "Ukrainien",
            lithuanian: "Lituanien",
            polish: "Polonais",
            dutch: "Néerlandais",
            chinese: "Chinois",
            japanese: "Japonais",
            korean: "Coréen",
            roomCreated: "Salle créée ! Partagez ce code avec votre ami : ",
            enterRoomCode: "Veuillez entrer un code de salle.",
            joiningRoom: "Connexion à la salle ",
            loginRequired: "Veuillez entrer votre e-mail et votre mot de passe.",
            invalidEmail: "Veuillez entrer une adresse e-mail valide.",
            loginSuccess: "Vous êtes connecté.",
            signupSuccess: "Compte créé avec succès !",
            confirmEmail: "Compte créé ! Vérifiez votre e-mail pour confirmer votre compte.",
            loggedOut: "Vous êtes déconnecté.",
            settingsSaved: "Paramètres enregistrés.",
            preferencesSaved: "Préférences enregistrées.",
            supportSoon: "Le support sera bientôt disponible.",
            deleteConfirm: "Êtes-vous sûr de vouloir supprimer votre compte ?",
            deleteSubmitted: "Demande de suppression envoyée.",
            playbackSoon: "La lecture du film sera connectée ici.",
            moreMoviesSoon: "Plus de films seront disponibles ici bientôt."
        },

        Spanish: {
            home: "Inicio",
            movies: "Películas",
            series: "Series",
            watchTogether: "Ver juntos",
            profile: "Perfil",
            startWatching: "Empezar a ver",
            watchTogetherButton: "Ver juntos",
            trending: "Tendencias",
            popular: "Popular esta noche",
            action: "Acción",
            romance: "Romance",
            horror: "Terror",
            comedy: "Comedia",
            drama: "Drama",
            sciFi: "Ciencia ficción",
            thriller: "Suspenso",
            adventure: "Aventura",
            animation: "Animación",
            family: "Familia",
            search: "Buscar películas y series",
            viewAll: "Ver todo",
            account: "Cuenta",
            settings: "Configuración",
            notifications: "Notificaciones",
            privacy: "Privacidad",
            help: "Ayuda",
            deleteAccount: "Eliminar cuenta",
            logout: "Cerrar sesión",
            back: "Atrás",
            languageSubtitles: "Idioma y subtítulos",
            appLanguage: "Idioma de la aplicación",
            subtitles: "Subtítulos",
            audio: "Audio",
            save: "Guardar",
            savePreferences: "Guardar preferencias",
            saveSettings: "Guardar configuración",
            appearance: "Apariencia",
            darkMode: "Modo oscuro",
            autoplay: "Reproducción automática",
            notificationSettings: "Notificaciones",
            searchLanguage: "🔎 Buscar idioma",
            typeLanguage: "Escribe el nombre de un idioma...",
            roomCode: "Código de sala",
            createRoom: "Crear sala",
            joinRoom: "Unirse a la sala",
            login: "Iniciar sesión",
            signup: "Crear cuenta",
            logIn: "Iniciar sesión",
            createAccount: "Crear cuenta",
            welcomeBack: "Bienvenido de nuevo",
            signInDescription: "Inicia sesión en tu cuenta de Movies Tonight.",
            email: "Correo electrónico",
            password: "Contraseña",
            username: "Nombre de usuario",
            age: "Edad",
            enterEmail: "Introduce tu correo electrónico",
            enterPassword: "Introduce tu contraseña",
            enterUsername: "Introduce tu nombre de usuario",
            enterAge: "Introduce tu edad",
            createPassword: "Crea una contraseña",
            confirmPassword: "Confirmar contraseña",
            confirmYourPassword: "Confirma tu contraseña",
            backToLogin: "Volver al inicio de sesión",
            creatingAccount: "Creando cuenta...",
            loggingIn: "Iniciando sesión...",
            passwordTooShort: "La contraseña debe tener al menos 6 caracteres.",
            passwordMismatch: "Las contraseñas no coinciden.",
            usernameRequired: "Introduce un nombre de usuario.",
            ageRequired: "Introduce tu edad.",
            ageInvalid: "La edad debe estar entre 13 y 120 años.",
            signupInvalid: "Completa todos los campos.",
            accountCreated: "¡Cuenta creada correctamente!",
            welcome: "BIENVENIDO A MOVIES TONIGHT",
            tagline: "Tu lugar para películas, series y noches inolvidables.",
            support: "Contactar con soporte",
            confirmDelete: "Eliminar mi cuenta",
            original: "Idioma original",
            english: "Inglés",
            arabic: "Árabe",
            portuguese: "Portugués",
            french: "Francés",
            spanish: "Español",
            german: "Alemán",
            italian: "Italiano",
            turkish: "Turco",
            russian: "Ruso",
            ukrainian: "Ucraniano",
            lithuanian: "Lituano",
            polish: "Polaco",
            dutch: "Neerlandés",
            chinese: "Chino",
            japanese: "Japonés",
            korean: "Coreano",
            roomCreated: "¡Sala creada! Comparte este código con tu amigo: ",
            enterRoomCode: "Introduce un código de sala.",
            joiningRoom: "Uniéndose a la sala ",
            loginRequired: "Introduce tu correo electrónico y contraseña.",
            invalidEmail: "Introduce una dirección de correo válida.",
            loginSuccess: "Has iniciado sesión correctamente.",
            signupSuccess: "¡Cuenta creada correctamente!",
            confirmEmail: "¡Cuenta creada! Revisa tu correo electrónico para confirmar tu cuenta.",
            loggedOut: "Has cerrado sesión.",
            settingsSaved: "Configuración guardada correctamente.",
            preferencesSaved: "Preferencias guardadas correctamente.",
            supportSoon: "El soporte estará disponible pronto.",
            deleteConfirm: "¿Estás seguro de que quieres eliminar tu cuenta?",
            deleteSubmitted: "Solicitud de eliminación enviada.",
            playbackSoon: "La reproducción de películas se conectará aquí.",
            moreMoviesSoon: "Habrá más películas disponibles aquí pronto."
        },

        German: {
            home: "Startseite",
            movies: "Filme",
            series: "Serien",
            watchTogether: "Gemeinsam ansehen",
            profile: "Profil",
            startWatching: "Jetzt ansehen",
            watchTogetherButton: "Gemeinsam ansehen",
            trending: "Im Trend",
            popular: "Heute beliebt",
            action: "Action",
            romance: "Romantik",
            horror: "Horror",
            comedy: "Komödie",
            drama: "Drama",
            sciFi: "Science-Fiction",
            thriller: "Thriller",
            adventure: "Abenteuer",
            animation: "Animation",
            family: "Familie",
            search: "Filme und Serien suchen",
            viewAll: "Alle anzeigen",
            account: "Konto",
            settings: "Einstellungen",
            notifications: "Benachrichtigungen",
            privacy: "Datenschutz",
            help: "Hilfe",
            deleteAccount: "Konto löschen",
            logout: "Abmelden",
            back: "Zurück",
            languageSubtitles: "Sprache und Untertitel",
            appLanguage: "App-Sprache",
            subtitles: "Untertitel",
            audio: "Audio",
            save: "Speichern",
            savePreferences: "Einstellungen speichern",
            saveSettings: "Einstellungen speichern",
            appearance: "Darstellung",
            darkMode: "Dunkler Modus",
            autoplay: "Automatische Wiedergabe",
            notificationSettings: "Benachrichtigungen",
            searchLanguage: "🔎 Sprache suchen",
            typeLanguage: "Sprachnamen eingeben...",
            roomCode: "Raumcode",
            createRoom: "Raum erstellen",
            joinRoom: "Raum beitreten",
            login: "Anmelden",
            signup: "Konto erstellen",
            logIn: "Anmelden",
            createAccount: "Konto erstellen",
            welcomeBack: "Willkommen zurück",
            signInDescription: "Melde dich bei deinem Movies Tonight-Konto an.",
            email: "E-Mail",
            password: "Passwort",
            username: "Benutzername",
            age: "Alter",
            enterEmail: "E-Mail eingeben",
            enterPassword: "Passwort eingeben",
            enterUsername: "Benutzernamen eingeben",
            enterAge: "Alter eingeben",
            createPassword: "Passwort erstellen",
            confirmPassword: "Passwort bestätigen",
            confirmYourPassword: "Passwort bestätigen",
            backToLogin: "Zurück zur Anmeldung",
            creatingAccount: "Konto wird erstellt...",
            loggingIn: "Anmeldung...",
            passwordTooShort: "Das Passwort muss mindestens 6 Zeichen enthalten.",
            passwordMismatch: "Die Passwörter stimmen nicht überein.",
            usernameRequired: "Bitte Benutzernamen eingeben.",
            ageRequired: "Bitte Alter eingeben.",
            ageInvalid: "Das Alter muss zwischen 13 und 120 Jahren liegen.",
            signupInvalid: "Bitte alle Felder ausfüllen.",
            accountCreated: "Konto erfolgreich erstellt!",
            welcome: "WILLKOMMEN BEI MOVIES TONIGHT",
            tagline: "Dein Ort für Filme, Serien und unvergessliche Abende.",
            support: "Support kontaktieren",
            confirmDelete: "Mein Konto löschen",
            original: "Originalsprache",
            english: "Englisch",
            arabic: "Arabisch",
            portuguese: "Portugiesisch",
            french: "Französisch",
            spanish: "Spanisch",
            german: "Deutsch",
            italian: "Italienisch",
            turkish: "Türkisch",
            russian: "Russisch",
            ukrainian: "Ukrainisch",
            lithuanian: "Litauisch",
            polish: "Polnisch",
            dutch: "Niederländisch",
            chinese: "Chinesisch",
            japanese: "Japanisch",
            korean: "Koreanisch",
            roomCreated: "Raum erstellt! Teile diesen Code mit deinem Freund: ",
            enterRoomCode: "Bitte gib einen Raumcode ein.",
            joiningRoom: "Beitritt zum Raum ",
            loginRequired: "Bitte gib deine E-Mail und dein Passwort ein.",
            invalidEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
            loginSuccess: "Du wurdest erfolgreich angemeldet.",
            signupSuccess: "Konto erfolgreich erstellt!",
            confirmEmail: "Konto erstellt! Bitte überprüfe deine E-Mail zur Bestätigung.",
            loggedOut: "Du wurdest abgemeldet.",
            settingsSaved: "Einstellungen erfolgreich gespeichert.",
            preferencesSaved: "Einstellungen erfolgreich gespeichert.",
            supportSoon: "Der Support ist bald verfügbar.",
            deleteConfirm: "Möchtest du dein Konto wirklich löschen?",
            deleteSubmitted: "Anfrage zur Kontolöschung wurde gesendet.",
            playbackSoon: "Die Filmwiedergabe wird hier verbunden.",
            moreMoviesSoon: "Weitere Filme werden hier bald verfügbar sein."
        },

        Italian: {
            home: "Home",
            movies: "Film",
            series: "Serie",
            watchTogether: "Guarda insieme",
            profile: "Profilo",
            startWatching: "Inizia a guardare",
            watchTogetherButton: "Guarda insieme",
            trending: "Di tendenza",
            popular: "Popolari stasera",
            action: "Azione",
            romance: "Romantico",
            horror: "Horror",
            comedy: "Commedia",
            drama: "Drammatico",
            sciFi: "Fantascienza",
            thriller: "Thriller",
            adventure: "Avventura",
            animation: "Animazione",
            family: "Famiglia",
            search: "Cerca film e serie",
            viewAll: "Vedi tutto",
            account: "Account",
            settings: "Impostazioni",
            notifications: "Notifiche",
            privacy: "Privacy",
            help: "Aiuto",
            deleteAccount: "Elimina account",
            logout: "Esci",
            back: "Indietro",
            languageSubtitles: "Lingua e sottotitoli",
            appLanguage: "Lingua dell'app",
            subtitles: "Sottotitoli",
            audio: "Audio",
            save: "Salva",
            savePreferences: "Salva preferenze",
            saveSettings: "Salva impostazioni",
            appearance: "Aspetto",
            darkMode: "Modalità scura",
            autoplay: "Riproduzione automatica",
            notificationSettings: "Notifiche",
            searchLanguage: "🔎 Cerca lingua",
            typeLanguage: "Digita il nome di una lingua...",
            roomCode: "Codice stanza",
            createRoom: "Crea stanza",
            joinRoom: "Entra nella stanza",
            login: "Accedi",
            signup: "Crea account",
            logIn: "Accedi",
            createAccount: "Crea account",
            welcomeBack: "Bentornato",
            signInDescription: "Accedi al tuo account Movies Tonight.",
            email: "Email",
            password: "Password",
            username: "Nome utente",
            age: "Età",
            enterEmail: "Inserisci la tua email",
            enterPassword: "Inserisci la tua password",
            enterUsername: "Inserisci il tuo nome utente",
            enterAge: "Inserisci la tua età",
            createPassword: "Crea una password",
            confirmPassword: "Conferma password",
            confirmYourPassword: "Conferma la tua password",
            backToLogin: "Torna al login",
            creatingAccount: "Creazione account...",
            loggingIn: "Accesso...",
            passwordTooShort: "La password deve contenere almeno 6 caratteri.",
            passwordMismatch: "Le password non coincidono.",
            usernameRequired: "Inserisci un nome utente.",
            ageRequired: "Inserisci la tua età.",
            ageInvalid: "L'età deve essere compresa tra 13 e 120 anni.",
            signupInvalid: "Compila tutti i campi.",
            accountCreated: "Account creato con successo!",
            welcome: "BENVENUTO SU MOVIES TONIGHT",
            tagline: "Il tuo posto per film, serie e serate indimenticabili.",
            support: "Contatta il supporto",
            confirmDelete: "Elimina il mio account",
            original: "Lingua originale",
            english: "Inglese",
            arabic: "Arabo",
            portuguese: "Portoghese",
            french: "Francese",
            spanish: "Spagnolo",
            german: "Tedesco",
            italian: "Italiano",
            turkish: "Turco",
            russian: "Russo",
            ukrainian: "Ucraino",
            lithuanian: "Lituano",
            polish: "Polacco",
            dutch: "Olandese",
            chinese: "Cinese",
            japanese: "Giapponese",
            korean: "Coreano",
            roomCreated: "Stanza creata! Condividi questo codice con il tuo amico: ",
            enterRoomCode: "Inserisci un codice stanza.",
            joiningRoom: "Ingresso nella stanza ",
            loginRequired: "Inserisci email e password.",
            invalidEmail: "Inserisci un indirizzo email valido.",
            loginSuccess: "Accesso effettuato con successo.",
            signupSuccess: "Account creato con successo!",
            confirmEmail: "Account creato! Controlla la tua email per confermare l'account.",
            loggedOut: "Hai effettuato il logout.",
            settingsSaved: "Impostazioni salvate.",
            preferencesSaved: "Preferenze salvate.",
            supportSoon: "Il supporto sarà disponibile presto.",
            deleteConfirm: "Sei sicuro di voler eliminare il tuo account?",
            deleteSubmitted: "Richiesta di eliminazione inviata.",
            playbackSoon: "La riproduzione del film sarà collegata qui.",
            moreMoviesSoon: "Altri film saranno disponibili qui presto."
        },

        Turkish: {
            home: "Ana Sayfa",
            movies: "Filmler",
            series: "Diziler",
            watchTogether: "Birlikte İzle",
            profile: "Profil",
            startWatching: "İzlemeye Başla",
            watchTogetherButton: "Birlikte İzle",
            trending: "Trendler",
            popular: "Bu Akşam Popüler",
            action: "Aksiyon",
            romance: "Romantik",
            horror: "Korku",
            comedy: "Komedi",
            drama: "Dram",
            sciFi: "Bilim Kurgu",
            thriller: "Gerilim",
            adventure: "Macera",
            animation: "Animasyon",
            family: "Aile",
            search: "Film ve dizi ara",
            viewAll: "Tümünü Gör",
            account: "Hesap",
            settings: "Ayarlar",
            notifications: "Bildirimler",
            privacy: "Gizlilik",
            help: "Yardım",
            deleteAccount: "Hesabı Sil",
            logout: "Çıkış Yap",
            back: "Geri",
            languageSubtitles: "Dil ve Altyazılar",
            appLanguage: "Uygulama Dili",
            subtitles: "Altyazılar",
            audio: "Ses",
            save: "Kaydet",
            savePreferences: "Tercihleri Kaydet",
            saveSettings: "Ayarları Kaydet",
            appearance: "Görünüm",
            darkMode: "Karanlık Mod",
            autoplay: "Otomatik Oynatma",
            notificationSettings: "Bildirimler",
            searchLanguage: "🔎 Dil Ara",
            typeLanguage: "Dil adı yazın...",
            roomCode: "Oda Kodu",
            createRoom: "Oda Oluştur",
            joinRoom: "Odaya Katıl",
            login: "Giriş Yap",
            signup: "Hesap Oluştur",
            logIn: "Giriş Yap",
            createAccount: "Hesap Oluştur",
            welcomeBack: "Tekrar Hoş Geldiniz",
            signInDescription: "Movies Tonight hesabınıza giriş yapın.",
            email: "E-posta",
            password: "Şifre",
            username: "Kullanıcı adı",
            age: "Yaş",
            enterEmail: "E-postanızı girin",
            enterPassword: "Şifrenizi girin",
            enterUsername: "Kullanıcı adınızı girin",
            enterAge: "Yaşınızı girin",
            createPassword: "Bir şifre oluşturun",
            confirmPassword: "Şifreyi Onayla",
            confirmYourPassword: "Şifrenizi tekrar girin",
            backToLogin: "Girişe Dön",
            creatingAccount: "Hesap oluşturuluyor...",
            loggingIn: "Giriş yapılıyor...",
            passwordTooShort: "Şifre en az 6 karakter olmalıdır.",
            passwordMismatch: "Şifreler eşleşmiyor.",
            usernameRequired: "Lütfen kullanıcı adı girin.",
            ageRequired: "Lütfen yaşınızı girin.",
            ageInvalid: "Yaş 13 ile 120 arasında olmalıdır.",
            signupInvalid: "Lütfen tüm alanları doldurun.",
            accountCreated: "Hesap başarıyla oluşturuldu!",
            welcome: "MOVIES TONIGHT'A HOŞ GELDİNİZ",
            tagline: "Filmler, diziler ve unutulmaz geceler için yeriniz.",
            support: "Destekle İletişime Geç",
            confirmDelete: "Hesabımı Sil",
            original: "Orijinal Dil",
            english: "İngilizce",
            arabic: "Arapça",
            portuguese: "Portekizce",
            french: "Fransızca",
            spanish: "İspanyolca",
            german: "Almanca",
            italian: "İtalyanca",
            turkish: "Türkçe",
            russian: "Rusça",
            ukrainian: "Ukraynaca",
            lithuanian: "Litvanca",
            polish: "Lehçe",
            dutch: "Felemenkçe",
            chinese: "Çince",
            japanese: "Japonca",
            korean: "Korece",
            roomCreated: "Oda oluşturuldu! Bu kodu arkadaşınla paylaş: ",
            enterRoomCode: "Lütfen oda kodu girin.",
            joiningRoom: "Odaya katılınıyor ",
            loginRequired: "Lütfen e-posta ve şifrenizi girin.",
            invalidEmail: "Geçerli bir e-posta adresi girin.",
            loginSuccess: "Başarıyla giriş yaptınız.",
            signupSuccess: "Hesap başarıyla oluşturuldu!",
            confirmEmail: "Hesap oluşturuldu! Onaylamak için e-postanızı kontrol edin.",
            loggedOut: "Çıkış yaptınız.",
            settingsSaved: "Ayarlar başarıyla kaydedildi.",
            preferencesSaved: "Tercihler başarıyla kaydedildi.",
            supportSoon: "Destek yakında kullanılabilir olacak.",
            deleteConfirm: "Hesabınızı silmek istediğinizden emin misiniz?",
            deleteSubmitted: "Hesap silme talebi gönderildi.",
            playbackSoon: "Film oynatma buraya bağlanacak.",
            moreMoviesSoon: "Daha fazla film yakında burada olacak."
        }
    };

    /* =========================================
       LANGUAGE HELPERS
    ========================================= */

    const languageInfo = [
        {
            value: "English",
            names: [
                "English",
                "الإنجليزية",
                "Anglais",
                "Englisch",
                "Inglese",
                "Inglés"
            ]
        },
        {
            value: "Arabic",
            names: [
                "Arabic",
                "العربية",
                "Arabe",
                "Arabisch",
                "Arabo",
                "Árabe"
            ]
        },
        {
            value: "Lithuanian",
            names: [
                "Lithuanian",
                "Lietuvių",
                "Lietuvių kalba",
                "Lituanien",
                "Litauisch",
                "Lituano"
            ]
        },
        {
            value: "Russian",
            names: [
                "Russian",
                "Русский",
                "Російська",
                "Russe",
                "Russisch",
                "Russo"
            ]
        },
        {
            value: "Ukrainian",
            names: [
                "Ukrainian",
                "Українська",
                "Ukrainien",
                "Ukrainisch",
                "Ucraino"
            ]
        },
        {
            value: "Portuguese",
            names: [
                "Portuguese",
                "Português",
                "Portugais",
                "Portugiesisch",
                "Português"
            ]
        },
        {
            value: "French",
            names: [
                "French",
                "Français",
                "Französisch",
                "Francese",
                "Francés"
            ]
        },
        {
            value: "Spanish",
            names: [
                "Spanish",
                "Español",
                "Espagnol",
                "Spanisch",
                "Spagnolo"
            ]
        },
        {
            value: "German",
            names: [
                "German",
                "Deutsch",
                "Allemand",
                "Tedesco",
                "Alemán"
            ]
        },
        {
            value: "Italian",
            names: [
                "Italian",
                "Italiano",
                "Italien",
                "Italienisch",
                "Italiano"
            ]
        },
        {
            value: "Turkish",
            names: [
                "Turkish",
                "Türkçe",
                "Turc",
                "Türkisch",
                "Turco"
            ]
        },
        {
            value: "Polish",
            names: [
                "Polish",
                "Polski",
                "Polonais",
                "Polnisch",
                "Polacco"
            ]
        },
        {
            value: "Dutch",
            names: [
                "Dutch",
                "Nederlands",
                "Néerlandais",
                "Niederländisch",
                "Olandese"
            ]
        },
        {
            value: "Chinese",
            names: [
                "Chinese",
                "中文",
                "Chinois",
                "Chinesisch",
                "Cinese"
            ]
        },
        {
            value: "Japanese",
            names: [
                "Japanese",
                "日本語",
                "Japonais",
                "Japanisch",
                "Giapponese"
            ]
        },
        {
            value: "Korean",
            names: [
                "Korean",
                "한국어",
                "Coréen",
                "Koreanisch",
                "Coreano"
            ]
        }
    ];

    let currentLanguage =
        localStorage.getItem("appLanguage") || "English";

    function t(key) {

        const current =
            translations[currentLanguage] || translations.English;

        return current[key] ||
            translations.English[key] ||
            key;
    }

    /* =========================================
       ACCOUNT FORM ELEMENTS
    ========================================= */

    const loginForm =
        document.getElementById("loginForm");

    const signupForm =
        document.getElementById("signupForm");

    const showSignupButton =
        document.getElementById("showSignupButton");

    const showLoginButton =
        document.getElementById("showLoginButton");

    const createAccountButton =
        document.getElementById("createAccountButton");

    const signupUsername =
        document.getElementById("signupUsername");

    const signupAge =
        document.getElementById("signupAge");

    const signupEmail =
        document.getElementById("signupEmail");

    const signupPassword =
        document.getElementById("signupPassword");

    const signupConfirmPassword =
        document.getElementById("signupConfirmPassword");

    const signupMessage =
        document.getElementById("signupMessage");

    /* =========================================
       APPLY LANGUAGE
    ========================================= */

    function applyLanguage(language) {

        if (!translations[language]) {
            language = "English";
        }

        currentLanguage = language;

        localStorage.setItem(
            "appLanguage",
            language
        );

        document.querySelectorAll("[data-i18n]").forEach(function (element) {

            const key =
                element.getAttribute("data-i18n");

            element.textContent =
                t(key);

        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {

            const key =
                element.getAttribute("data-i18n-placeholder");

            element.placeholder =
                t(key);

        });

        /* -----------------------------------------
           SIGN UP FORM TEXT
        ----------------------------------------- */

        const signupUsernameLabel =
            document.querySelector('label[for="signupUsername"]');

        const signupAgeLabel =
            document.querySelector('label[for="signupAge"]');

        const signupEmailLabel =
            document.querySelector('label[for="signupEmail"]');

        const signupPasswordLabel =
            document.querySelector('label[for="signupPassword"]');

        const signupConfirmPasswordLabel =
            document.querySelector('label[for="signupConfirmPassword"]');

        if (signupUsernameLabel) {
            signupUsernameLabel.textContent =
                t("username");
        }

        if (signupAgeLabel) {
            signupAgeLabel.textContent =
                t("age");
        }

        if (signupEmailLabel) {
            signupEmailLabel.textContent =
                t("email");
        }

        if (signupPasswordLabel) {
            signupPasswordLabel.textContent =
                t("password");
        }

        if (signupConfirmPasswordLabel) {
            signupConfirmPasswordLabel.textContent =
                t("confirmPassword");
        }

        if (signupUsername) {
            signupUsername.placeholder =
                t("enterUsername");
        }

        if (signupAge) {
            signupAge.placeholder =
                t("enterAge");
        }

        if (signupEmail) {
            signupEmail.placeholder =
                t("enterEmail");
        }

        if (signupPassword) {
            signupPassword.placeholder =
                t("createPassword");
        }

        if (signupConfirmPassword) {
            signupConfirmPassword.placeholder =
                t("confirmYourPassword");
        }

        if (createAccountButton) {

            createAccountButton.innerHTML =
                "✨ " + t("createAccount");

        }

        if (showLoginButton) {

            showLoginButton.innerHTML =
                "← " + t("backToLogin");

        }

        const signupDescription =
            signupForm
                ? signupForm.querySelector("p")
                : null;

        if (signupDescription) {

            if (currentLanguage === "Arabic") {
                signupDescription.textContent =
                    "أنشئ حسابك الخاص في Movies Tonight.";
            } else if (currentLanguage === "Lithuanian") {
                signupDescription.textContent =
                    "Sukurkite savo Movies Tonight paskyrą.";
            } else if (currentLanguage === "Russian") {
                signupDescription.textContent =
                    "Создайте свой аккаунт Movies Tonight.";
            } else if (currentLanguage === "Ukrainian") {
                signupDescription.textContent =
                    "Створіть свій акаунт Movies Tonight.";
            } else if (currentLanguage === "Portuguese") {
                signupDescription.textContent =
                    "Crie sua própria conta Movies Tonight.";
            } else if (currentLanguage === "French") {
                signupDescription.textContent =
                    "Créez votre compte Movies Tonight.";
            } else if (currentLanguage === "Spanish") {
                signupDescription.textContent =
                    "Crea tu propia cuenta de Movies Tonight.";
            } else if (currentLanguage === "German") {
                signupDescription.textContent =
                    "Erstelle dein eigenes Movies Tonight-Konto.";
            } else if (currentLanguage === "Italian") {
                signupDescription.textContent =
                    "Crea il tuo account Movies Tonight.";
            } else if (currentLanguage === "Turkish") {
                signupDescription.textContent =
                    "Kendi Movies Tonight hesabınızı oluşturun.";
            } else {
                signupDescription.textContent =
                    "Create your own Movies Tonight account.";
            }

        }

        if (language === "Arabic") {

            document.documentElement.setAttribute(
                "dir",
                "rtl"
            );

            document.documentElement.setAttribute(
                "lang",
                "ar"
            );

        } else {

            document.documentElement.setAttribute(
                "dir",
                "ltr"
            );

            document.documentElement.setAttribute(
                "lang",
                language.toLowerCase()
            );

        }

        if (languageSelect) {

            languageSelect.value =
                language;

        }

        updateThemeText();

    }

    /* =========================================
       PAGE SYSTEM
    ========================================= */

    function showPage(pageId) {

        pages.forEach(function (page) {

            page.classList.remove(
                "active-page"
            );

        });

        const selectedPage =
            document.getElementById(pageId);

        if (selectedPage) {

            selectedPage.classList.add(
                "active-page"
            );

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

            const linkPage =
                link.getAttribute("data-page");

            if (linkPage === pageId) {

                link.classList.add("active");

            } else {

                link.classList.remove("active");

            }

        });

    }

    /* =========================================
       PROFILE
    ========================================= */

    if (profileButton && profileSection) {

        profileButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                profileSection.classList.toggle(
                    "show"
                );

            }
        );

    }

    if (closeProfile && profileSection) {

        closeProfile.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                profileSection.classList.remove(
                    "show"
                );

            }
        );

    }

    document.addEventListener(
        "click",
        function (event) {

            if (
                !profileSection ||
                !profileSection.classList.contains("show")
            ) {
                return;
            }

            if (
                !profileSection.contains(event.target) &&
                event.target !== profileButton &&
                (
                    !profileButton ||
                    !profileButton.contains(event.target)
                )
            ) {

                profileSection.classList.remove(
                    "show"
                );

            }

        }
    );

    /* =========================================
       TOP NAVIGATION
    ========================================= */

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const pageId =
                    link.getAttribute("data-page");

                if (!pageId) {
                    return;
                }

                showPage(pageId);
                setActiveNav(pageId);

            }
        );

    });

    /* =========================================
       PROFILE MENU NAVIGATION
    ========================================= */

    profileButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const pageId =
                    button.getAttribute(
                        "data-profile-page"
                    );

                if (!pageId) {
                    return;
                }

                if (profileSection) {

                    profileSection.classList.remove(
                        "show"
                    );

                }

                showPage(pageId);

                navLinks.forEach(function (link) {

                    link.classList.remove(
                        "active"
                    );

                });

            }
        );

    });

    /* =========================================
       START WATCHING
    ========================================= */

    const startWatching =
        document.getElementById(
            "startWatching"
        );

    if (startWatching) {

        startWatching.addEventListener(
            "click",
            function () {

                showPage("moviesPage");
                setActiveNav("moviesPage");

            }
        );

    }

    /* =========================================
       WATCH TOGETHER HOME
    ========================================= */

    const watchTogetherHome =
        document.getElementById(
            "watchTogetherHome"
        );

    if (watchTogetherHome) {

        watchTogetherHome.addEventListener(
            "click",
            function () {

                showPage("togetherPage");
                setActiveNav("togetherPage");

            }
        );

    }

    /* =========================================
       CREATE ROOM
    ========================================= */

    const createRoom =
        document.getElementById(
            "createRoom"
        );

    const roomCode =
        document.getElementById(
            "roomCode"
        );

    const roomMessage =
        document.getElementById(
            "roomMessage"
        );

    if (
        createRoom &&
        roomCode &&
        roomMessage
    ) {

        createRoom.addEventListener(
            "click",
            function () {

                const code =
                    Math.random()
                        .toString(36)
                        .substring(2, 8)
                        .toUpperCase();

                roomCode.value =
                    code;

                roomMessage.textContent =
                    t("roomCreated") +
                    code;

            }
        );

    }

    /* =========================================
       JOIN ROOM
    ========================================= */

    const joinRoom =
        document.getElementById(
            "joinRoom"
        );

    if (
        joinRoom &&
        roomCode &&
        roomMessage
    ) {

        joinRoom.addEventListener(
            "click",
            function () {

                const code =
                    roomCode.value
                        .trim()
                        .toUpperCase();

                if (code === "") {

                    roomMessage.textContent =
                        t("enterRoomCode");

                    return;

                }

                roomMessage.textContent =
                    t("joiningRoom") +
                    code +
                    "...";

            }
        );

    }

    if (roomCode && joinRoom) {

        roomCode.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    joinRoom.click();

                }

            }
        );

    }

    /* =========================================
       LOGIN ELEMENTS
    ========================================= */

    const loginButton =
        document.getElementById(
            "loginButton"
        );

    const emailInput =
        document.getElementById(
            "email"
        );

    const passwordInput =
        document.getElementById(
            "password"
        );

    const accountMessage =
        document.getElementById(
            "accountMessage"
        );

    /* =========================================
       SHOW SIGNUP FORM
    ========================================= */

    if (
        showSignupButton &&
        loginForm &&
        signupForm
    ) {

        showSignupButton.addEventListener(
            "click",
            function () {

                loginForm.style.display =
                    "none";

                signupForm.style.display =
                    "block";

                if (accountMessage) {
                    accountMessage.textContent =
                        "";
                }

                if (signupMessage) {
                    signupMessage.textContent =
                        "";
                }

                if (signupUsername) {
                    setTimeout(function () {
                        signupUsername.focus();
                    }, 100);
                }

            }
        );

    }

    /* =========================================
       BACK TO LOGIN
    ========================================= */

    if (
        showLoginButton &&
        loginForm &&
        signupForm
    ) {

        showLoginButton.addEventListener(
            "click",
            function () {

                signupForm.style.display =
                    "none";

                loginForm.style.display =
                    "block";

                if (signupMessage) {
                    signupMessage.textContent =
                        "";
                }

                if (accountMessage) {
                    accountMessage.textContent =
                        "";
                }

                if (signupUsername) {
                    signupUsername.value = "";
                }

                if (signupAge) {
                    signupAge.value = "";
                }

                if (signupEmail) {
                    signupEmail.value = "";
                }

                if (signupPassword) {
                    signupPassword.value = "";
                }

                if (signupConfirmPassword) {
                    signupConfirmPassword.value = "";
                }

                if (emailInput) {
                    setTimeout(function () {
                        emailInput.focus();
                    }, 100);
                }

            }
        );

    }

    /* =========================================
       LOGIN - SUPABASE
    ========================================= */

    if (
        loginButton &&
        emailInput &&
        passwordInput &&
        accountMessage
    ) {

        loginButton.addEventListener(
            "click",
            async function () {

                const email =
                    emailInput.value.trim();

                const password =
                    passwordInput.value;

                if (
                    email === "" ||
                    password === ""
                ) {

                    accountMessage.textContent =
                        t("loginRequired");

                    return;

                }

                if (
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                ) {

                    accountMessage.textContent =
                        t("invalidEmail");

                    return;

                }

                loginButton.disabled =
                    true;

                accountMessage.textContent =
                    t("loggingIn");

                const {
                    data,
                    error
                } =
                    await supabaseClient.auth.signInWithPassword({
                        email: email,
                        password: password
                    });

                if (error) {

                    accountMessage.textContent =
                        error.message;

                    loginButton.disabled =
                        false;

                    return;

                }

                if (data.session) {

                    accountMessage.textContent =
                        t("loginSuccess");

                    emailInput.value =
                        "";

                    passwordInput.value =
                        "";

                    setTimeout(
                        function () {

                            showPage(
                                "moviespage"
                            );

                            setActiveNav(
                                "moviespage"
                                
                            );

                        },
                        800
                    );

                }

                loginButton.disabled =
                    false;

            }
        );

    }

    /* =========================================
       CREATE ACCOUNT - SUPABASE
       USERNAME + AGE + EMAIL + PASSWORD
    ========================================= */

    if (
        createAccountButton &&
        signupUsername &&
        signupAge &&
        signupEmail &&
        signupPassword &&
        signupConfirmPassword &&
        signupMessage
    ) {

        createAccountButton.addEventListener(
            "click",
            async function () {

                const username =
                    signupUsername.value.trim();

                const ageText =
                    signupAge.value.trim();

                const email =
                    signupEmail.value.trim();

                const password =
                    signupPassword.value;

                const confirmPassword =
                    signupConfirmPassword.value;

                /* -----------------------------------------
                   USERNAME CHECK
                ----------------------------------------- */

                if (username === "") {

                    signupMessage.textContent =
                        t("usernameRequired");

                    signupUsername.focus();

                    return;

                }

                if (
                    username.length < 2 ||
                    username.length > 30
                ) {

                    signupMessage.textContent =
                        "Username must be between 2 and 30 characters.";

                    signupUsername.focus();

                    return;

                }

                /* -----------------------------------------
                   AGE CHECK
                ----------------------------------------- */

                if (ageText === "") {

                    signupMessage.textContent =
                        t("ageRequired");

                    signupAge.focus();

                    return;

                }

                const age =
                    Number(ageText);

                if (
                    !Number.isInteger(age) ||
                    age < 13 ||
                    age > 120
                ) {

                    signupMessage.textContent =
                        t("ageInvalid");

                    signupAge.focus();

                    return;

                }

                /* -----------------------------------------
                   EMAIL CHECK
                ----------------------------------------- */

                if (email === "") {

                    signupMessage.textContent =
                        t("invalidEmail");

                    signupEmail.focus();

                    return;

                }

                if (
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                ) {

                    signupMessage.textContent =
                        t("invalidEmail");

                    signupEmail.focus();

                    return;

                }

                /* -----------------------------------------
                   PASSWORD CHECK
                ----------------------------------------- */

                if (password.length < 6) {

                    signupMessage.textContent =
                        t("passwordTooShort");

                    signupPassword.focus();

                    return;

                }

                /* -----------------------------------------
                   CONFIRM PASSWORD
                ----------------------------------------- */

                if (
                    password !== confirmPassword
                ) {

                    signupMessage.textContent =
                        t("passwordMismatch");

                    signupConfirmPassword.focus();

                    return;

                }

                /* -----------------------------------------
                   CREATE ACCOUNT
                ----------------------------------------- */

                createAccountButton.disabled =
                    true;

                signupMessage.textContent =
                    t("creatingAccount");

                const {
                    data,
                    error
                } =
                    await supabaseClient.auth.signUp({

                        email: email,

                        password: password,

                        options: {

                            data: {

                                username: username,

                                age: age

                            }

                        }

                    });

                /* -----------------------------------------
                   ERROR
                ----------------------------------------- */

                if (error) {

                    signupMessage.textContent =
                        error.message;

                    createAccountButton.disabled =
                        false;

                    return;

                }

                /* -----------------------------------------
                   CLEAR PASSWORDS
                ----------------------------------------- */

                signupPassword.value =
                    "";

                signupConfirmPassword.value =
                    "";

                /* -----------------------------------------
                   SESSION CREATED
                ----------------------------------------- */

                if (data.session) {

                    signupMessage.textContent =
                        t("signupSuccess");

                    signupUsername.value =
                        "";

                    signupAge.value =
                        "";

                    signupEmail.value =
                        "";

                    setTimeout(
                        function () {

                            showPage(
                                "homePage"
                            );

                            setActiveNav(
                                "homePage"
                            );

                        },
                        1000
                    );

                } else {

                    /* -----------------------------------------
                       EMAIL CONFIRMATION ENABLED
                    ----------------------------------------- */

                    signupMessage.textContent =
                        t("confirmEmail");

                }

                createAccountButton.disabled =
                    false;

            }
        );

    }

    /* =========================================
       LOG OUT - SUPABASE
    ========================================= */

    const profileLogout =
        document.getElementById(
            "profileLogout"
        );

    if (profileLogout) {

        profileLogout.addEventListener(
            "click",
            async function () {

                if (profileSection) {

                    profileSection.classList.remove(
                        "show"
                    );

                }

                const {
                    error
                } =
                    await supabaseClient.auth.signOut();

                if (error) {

                    if (accountMessage) {

                        accountMessage.textContent =
                            error.message;

                    }

                    return;

                }

                showPage(
                    "accountPage"
                );

                navLinks.forEach(
                    function (link) {

                        link.classList.remove(
                            "active"
                        );

                    }
                );

                if (accountMessage) {

                    accountMessage.textContent =
                        t("loggedOut");

                }

                if (
                    loginForm &&
                    signupForm
                ) {

                    signupForm.style.display =
                        "none";

                    loginForm.style.display =
                        "block";

                }

            }
        );

    }

    /* =========================================
       CHECK CURRENT SESSION
    ========================================= */

    async function checkAuthSession() {

        const {
            data: {
                session
            }
        } =
            await supabaseClient.auth.getSession();

        if (session) {

            console.log(
                "Logged in:",
                session.user.email
            );

            console.log(
                "Username:",
                session.user.user_metadata?.username
            );

            console.log(
                "Age:",
                session.user.user_metadata?.age
            );

        } else {

            console.log(
                "No user logged in."
            );

        }

    }

    checkAuthSession();

    /* =========================================
       AUTH STATE LISTENER
    ========================================= */

    supabaseClient.auth.onAuthStateChange(
        function (
            event,
            session
        ) {

            if (session) {

                console.log(
                    "Authenticated:",
                    session.user.email
                );

            } else {

                console.log(
                    "User logged out."
                );

            }

        }
    );
/* =========================================
   LOAD CURRENT USER PROFILE
========================================= */

async function loadUserProfile() {

    const {
        data: {
            session
        }
    } = await supabaseClient.auth.getSession();

    if (!session || !session.user) {
        return;
    }

    const user = session.user;

    const username =
        user.user_metadata?.username ||
        "User";

    const age =
        user.user_metadata?.age ||
        "--";

    const email =
        user.email ||
        "";

    const profileUsername =
        document.getElementById("profileUsername");

    const profileEmail =
        document.getElementById("profileEmail");

    const profileAge =
        document.getElementById("profileAge");

    if (profileUsername) {
        profileUsername.textContent = username;
    }

    if (profileEmail) {
        profileEmail.textContent = email;
    }

    if (profileAge) {
        profileAge.textContent = "Age: " + age;
    }

}


/* Load profile when the website starts */
loadUserProfile();


/* Update profile when login state changes */

supabaseClient.auth.onAuthStateChange(
    function (event, session) {

        if (session) {
            loadUserProfile();
        }

    }
);
    /* =========================================
       THEME SYSTEM
    ========================================= */

    const themeToggle =
        document.getElementById(
            "themeToggle"
        );

    function applyTheme(isDark) {

        document.body.classList.toggle(
            "light-theme",
            !isDark
        );

        localStorage.setItem(
            "theme",
            isDark
                ? "dark"
                : "light"
        );

        if (themeToggle) {

            themeToggle.checked =
                isDark;

        }

    }

    function updateThemeText() {

        if (!themeToggle) {
            return;
        }

        const label =
            themeToggle.closest("label");

        if (!label) {
            return;
        }

        const textElement =
            label.querySelector(
                "[data-i18n]"
            );

        if (textElement) {

            textElement.textContent =
                t("darkMode");

        }

    }

    const savedTheme =
        localStorage.getItem(
            "theme"
        );

    if (
        savedTheme === "light"
    ) {

        applyTheme(false);

    } else {

        applyTheme(true);

    }

    if (themeToggle) {

        themeToggle.addEventListener(
            "change",
            function () {

                applyTheme(
                    themeToggle.checked
                );

            }
        );

    }

    /* =========================================
       SETTINGS
    ========================================= */

    const saveSettings =
        document.getElementById(
            "saveSettings"
        );

    const settingsMessage =
        document.getElementById(
            "settingsMessage"
        );

    if (
        saveSettings &&
        settingsMessage
    ) {

        saveSettings.addEventListener(
            "click",
            function () {

                settingsMessage.textContent =
                    t("settingsSaved");

            }
        );

    }

    /* =========================================
       LANGUAGE SETTINGS
    ========================================= */

    const saveLanguage =
        document.getElementById(
            "saveLanguage"
        );

    const languageSelect =
        document.getElementById(
            "languageSelect"
        );

    const subtitleSelect =
        document.getElementById(
            "subtitleSelect"
        );

    const audioSelect =
        document.getElementById(
            "audioSelect"
        );

    const languageMessage =
        document.getElementById(
            "languageMessage"
        );

    if (languageSelect) {

        languageSelect.addEventListener(
            "change",
            function () {

                applyLanguage(
                    languageSelect.value
                );

            }
        );

    }

    if (saveLanguage) {

        saveLanguage.addEventListener(
            "click",
            function () {

                if (languageSelect) {

                    localStorage.setItem(
                        "appLanguage",
                        languageSelect.value
                    );

                    applyLanguage(
                        languageSelect.value
                    );

                }

                if (subtitleSelect) {

                    localStorage.setItem(
                        "subtitleLanguage",
                        subtitleSelect.value
                    );

                }

                if (audioSelect) {

                    localStorage.setItem(
                        "audioLanguage",
                        audioSelect.value
                    );

                }

                if (languageMessage) {

                    languageMessage.textContent =
                        t("preferencesSaved");

                }

            }
        );

    }

    /* =========================================
       LOAD SAVED LANGUAGE SETTINGS
    ========================================= */

    const savedLanguage =
        localStorage.getItem(
            "appLanguage"
        );

    const savedSubtitle =
        localStorage.getItem(
            "subtitleLanguage"
        );

    const savedAudio =
        localStorage.getItem(
            "audioLanguage"
        );

    if (
        languageSelect &&
        savedLanguage
    ) {

        const languageExists =
            Array.from(
                languageSelect.options
            ).some(
                function (option) {

                    return option.value ===
                        savedLanguage;

                }
            );

        if (languageExists) {

            languageSelect.value =
                savedLanguage;

        }

    }

    if (
        subtitleSelect &&
        savedSubtitle
    ) {

        subtitleSelect.value =
            savedSubtitle;

    }

    if (
        audioSelect &&
        savedAudio
    ) {

        audioSelect.value =
            savedAudio;

    }

    /* =========================================
       LANGUAGE SEARCH
    ========================================= */

    const languageSearch =
        document.getElementById(
            "languageSearch"
        );

    const languageSearchResults =
        document.getElementById(
            "languageSearchResults"
        );

    function renderLanguageResults(
        searchText
    ) {

        if (
            !languageSearchResults ||
            !languageSelect
        ) {

            return;

        }

        languageSearchResults.innerHTML =
            "";

        const query =
            searchText
                .trim()
                .toLowerCase();

        if (query === "") {
            return;
        }

        const results =
            languageInfo.filter(
                function (item) {

                    return item.names.some(
                        function (name) {

                            return name
                                .toLowerCase()
                                .includes(query);

                        }
                    );

                }
            );

        results.forEach(
            function (item) {

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                const nativeName =
                    item.names[1] ||
                    item.value;

                button.textContent =
                    item.value === "Lithuanian"
                        ? "Lietuvių — Lithuanian"
                        : nativeName +
                          " — " +
                          item.value;

                button.addEventListener(
                    "click",
                    function () {

                        languageSelect.value =
                            item.value;

                        applyLanguage(
                            item.value
                        );

                        languageSearch.value =
                            nativeName;

                        languageSearchResults.innerHTML =
                            "";

                    }
                );

                languageSearchResults.appendChild(
                    button
                );

            }
        );

        if (results.length === 0) {

            const noResult =
                document.createElement(
                    "div"
                );

            noResult.textContent =
                "No language found.";

            noResult.style.padding =
                "8px";

            noResult.style.color =
                "var(--text-muted)";

            languageSearchResults.appendChild(
                noResult
            );

        }

    }

    if (languageSearch) {

        languageSearch.addEventListener(
            "input",
            function () {

                renderLanguageResults(
                    languageSearch.value
                );

            }
        );

    }

    /* =========================================
       BACK BUTTONS
    ========================================= */

    const backButtons =
        document.querySelectorAll(
            "[data-back]"
        );

    backButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const pageId =
                        button.getAttribute(
                            "data-back"
                        );

                    if (!pageId) {
                        return;
                    }

                    showPage(pageId);
                    setActiveNav(pageId);

                }
            );

        }
    );

    /* =========================================
       HELP / SUPPORT
    ========================================= */

    const contactSupport =
        document.getElementById(
            "contactSupport"
        );

    if (contactSupport) {

        contactSupport.addEventListener(
            "click",
            function () {

                alert(
                    t("supportSoon")
                );

            }
        );

    }

    /* =========================================
       DELETE ACCOUNT
    ========================================= */

    const confirmDelete =
        document.getElementById(
            "confirmDelete"
        );

    const deleteMessage =
        document.getElementById(
            "deleteMessage"
        );

    if (
        confirmDelete &&
        deleteMessage
    ) {

        confirmDelete.addEventListener(
            "click",
            function () {

                const confirmed =
                    confirm(
                        t("deleteConfirm")
                    );

                if (confirmed) {

                    deleteMessage.textContent =
                        t("deleteSubmitted");

                }

            }
        );

    }

    /* =========================================
       SEARCH MOVIES
    ========================================= */

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const searchText =
                    searchInput.value
                        .trim()
                        .toLowerCase();

                const movieCards =
                    document.querySelectorAll(
                        ".movie-card"
                    );

                movieCards.forEach(
                    function (card) {

                        const titleElement =
                            card.querySelector(
                                "h3"
                            );

                        if (!titleElement) {
                            return;
                        }

                        const title =
                            titleElement
                                .textContent
                                .toLowerCase();

                        if (
                            title.includes(
                                searchText
                            )
                        ) {

                            card.style.display =
                                "";

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }

    /* =========================================
       MOVIE PLAY BUTTONS
    ========================================= */

    const moviePlayButtons =
        document.querySelectorAll(
            ".movie-hover button"
        );

    moviePlayButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    alert(
                        t("playbackSoon")
                    );

                }
            );

        }
    );

    /* =========================================
       VIEW ALL
    ========================================= */

    const viewAllButtons =
        document.querySelectorAll(
            ".view-all-button"
        );

    viewAllButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    alert(
                        t("moreMoviesSoon")
                    );

                }
            );

        }
    );

    /* =========================================
       ESC KEY
    ========================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                if (profileSection) {

                    profileSection.classList.remove(
                        "show"
                    );

                }

            }

        }
    );

    /* =========================================
       INITIAL LANGUAGE
    ========================================= */

    applyLanguage(
        savedLanguage || "English"
    );

    console.log(
        "MOVIES TONIGHT loaded successfully."
    );
/* =========================================
   REAL USER PROFILE SYSTEM
   PROFILE + AVATAR + EDIT + PASSWORD
========================================= */

const profileBox = document.querySelector(".profile-box");

if (profileBox) {

    const profileAvatar =
        profileBox.querySelector(".profile-avatar");

    /* -----------------------------------------
       CREATE REAL PROFILE AREA
    ----------------------------------------- */

    const realProfile = document.createElement("div");

    realProfile.id = "realProfileArea";

    realProfile.innerHTML = `
        <div id="profileUserCard">

            <div id="realProfileAvatar"
                 style="
                    width:90px;
                    height:90px;
                    border-radius:50%;
                    overflow:hidden;
                    margin:0 auto 12px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background:#222;
                    color:white;
                    font-size:32px;
                    font-weight:bold;
                 ">
                👤
            </div>

            <div style="text-align:center;">

                <h3 id="realProfileUsername"
                    style="margin:5px 0;">
                    Guest
                </h3>

                <p id="realProfileEmail"
                   style="
                      margin:4px 0;
                      opacity:.7;
                      word-break:break-word;
                   ">
                    Not logged in
                </p>

                <p id="realProfileAge"
                   style="
                      margin:4px 0 14px;
                      opacity:.7;
                   ">
                </p>

            </div>

            <div style="
                display:flex;
                gap:8px;
                justify-content:center;
                flex-wrap:wrap;
                margin-bottom:18px;
            ">

                <button
                    type="button"
                    id="editProfileButton">
                    ✏️ Edit Profile
                </button>

                <button
                    type="button"
                    id="changePasswordButton">
                    🔐 Change Password
                </button>

            </div>

        </div>

        <div id="profileEditArea"
             style="display:none;">

            <h3 style="margin-bottom:15px;">
                ✏️ Edit Profile
            </h3>

            <label style="display:block;margin-bottom:6px;">
                Username
            </label>

            <input
                id="editProfileUsername"
                type="text"
                maxlength="30"
                placeholder="Username"
                style="width:100%;box-sizing:border-box;margin-bottom:12px;"
            >

            <label style="display:block;margin-bottom:6px;">
                Age
            </label>

            <input
                id="editProfileAge"
                type="number"
                min="13"
                max="120"
                placeholder="Age"
                style="width:100%;box-sizing:border-box;margin-bottom:12px;"
            >

            <label style="display:block;margin-bottom:6px;">
                Profile Photo
            </label>

            <input
                id="profilePhotoInput"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                style="width:100%;margin-bottom:14px;"
            >

            <div style="
                display:flex;
                gap:8px;
                flex-wrap:wrap;
            ">

                <button
                    type="button"
                    id="saveProfileButton">
                    💾 Save Profile
                </button>

                <button
                    type="button"
                    id="cancelEditProfileButton">
                    Cancel
                </button>

            </div>

            <p
                id="profileEditMessage"
                style="margin-top:12px;">
            </p>

        </div>

        <div id="passwordEditArea"
             style="display:none;">

            <h3 style="margin-bottom:15px;">
                🔐 Change Password
            </h3>

            <input
                id="newProfilePassword"
                type="password"
                minlength="6"
                placeholder="New password"
                style="width:100%;box-sizing:border-box;margin-bottom:12px;"
            >

            <input
                id="confirmProfilePassword"
                type="password"
                minlength="6"
                placeholder="Confirm new password"
                style="width:100%;box-sizing:border-box;margin-bottom:14px;"
            >

            <div style="
                display:flex;
                gap:8px;
                flex-wrap:wrap;
            ">

                <button
                    type="button"
                    id="saveProfilePasswordButton">
                    🔐 Save Password
                </button>

                <button
                    type="button"
                    id="cancelPasswordButton">
                    Cancel
                </button>

            </div>

            <p
                id="passwordEditMessage"
                style="margin-top:12px;">
            </p>

        </div>
    `;

    const profileHeader =
        profileBox.querySelector(".profile-header");

    if (profileHeader) {
        profileHeader.insertAdjacentElement(
            "afterend",
            realProfile
        );
    } else {
        profileBox.prepend(realProfile);
    }

    /* -----------------------------------------
       PROFILE ELEMENTS
    ----------------------------------------- */

    const realProfileAvatar =
        document.getElementById(
            "realProfileAvatar"
        );

    const realProfileUsername =
        document.getElementById(
            "realProfileUsername"
        );

    const realProfileEmail =
        document.getElementById(
            "realProfileEmail"
        );

    const realProfileAge =
        document.getElementById(
            "realProfileAge"
        );

    const editProfileButton =
        document.getElementById(
            "editProfileButton"
        );

    const changePasswordButton =
        document.getElementById(
            "changePasswordButton"
        );

    const profileEditArea =
        document.getElementById(
            "profileEditArea"
        );

    const passwordEditArea =
        document.getElementById(
            "passwordEditArea"
        );

    const editProfileUsername =
        document.getElementById(
            "editProfileUsername"
        );

    const editProfileAge =
        document.getElementById(
            "editProfileAge"
        );

    const profilePhotoInput =
        document.getElementById(
            "profilePhotoInput"
        );

    const saveProfileButton =
        document.getElementById(
            "saveProfileButton"
        );

    const cancelEditProfileButton =
        document.getElementById(
            "cancelEditProfileButton"
        );

    const profileEditMessage =
        document.getElementById(
            "profileEditMessage"
        );

    const newProfilePassword =
        document.getElementById(
            "newProfilePassword"
        );

    const confirmProfilePassword =
        document.getElementById(
            "confirmProfilePassword"
        );

    const saveProfilePasswordButton =
        document.getElementById(
            "saveProfilePasswordButton"
        );

    const cancelPasswordButton =
        document.getElementById(
            "cancelPasswordButton"
        );

    const passwordEditMessage =
        document.getElementById(
            "passwordEditMessage"
        );

    /* -----------------------------------------
       AVATAR HELPER
    ----------------------------------------- */

    function setProfileAvatar(
        user
    ) {

        if (!realProfileAvatar) {
            return;
        }

        const avatarUrl =
            user?.user_metadata?.avatar_url;

        if (avatarUrl) {

            realProfileAvatar.innerHTML = `
                <img
                    src="${avatarUrl}"
                    alt="Profile"
                    style="
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    "
                >
            `;

        } else {

            const username =
                user?.user_metadata?.username ||
                user?.email ||
                "U";

            const firstLetter =
                username
                    .trim()
                    .charAt(0)
                    .toUpperCase();

            realProfileAvatar.textContent =
                firstLetter || "👤";

        }

        /* Also update the old profile avatar */
        if (profileAvatar) {

            if (avatarUrl) {

                profileAvatar.innerHTML = `
                    <img
                        src="${avatarUrl}"
                        alt="Profile"
                        style="
                            width:100%;
                            height:100%;
                            object-fit:cover;
                            border-radius:50%;
                        "
                    >
                `;

            } else {

                profileAvatar.textContent =
                    "👤";

            }

        }

    }

    /* -----------------------------------------
       UPDATE PROFILE UI
    ----------------------------------------- */

    async function updateRealProfile(
        user
    ) {

        if (!user) {

            if (realProfileUsername) {
                realProfileUsername.textContent =
                    "Guest";
            }

            if (realProfileEmail) {
                realProfileEmail.textContent =
                    "Not logged in";
            }

            if (realProfileAge) {
                realProfileAge.textContent =
                    "";
            }

            setProfileAvatar(null);

            return;

        }

        const metadata =
            user.user_metadata || {};

        const username =
            metadata.username ||
            "User";

        const age =
            metadata.age || "";

        if (realProfileUsername) {

            realProfileUsername.textContent =
                username;

        }

        if (realProfileEmail) {

            realProfileEmail.textContent =
                user.email || "";

        }

        if (realProfileAge) {

            realProfileAge.textContent =
                age
                    ? "Age: " + age
                    : "";

        }

        if (editProfileUsername) {

            editProfileUsername.value =
                username;

        }

        if (editProfileAge) {

            editProfileAge.value =
                age;

        }

        setProfileAvatar(user);

    }

    /* -----------------------------------------
       OPEN EDIT PROFILE
    ----------------------------------------- */

    if (editProfileButton) {

        editProfileButton.addEventListener(
            "click",
            async function () {

                const {
                    data
                } =
                    await supabaseClient.auth.getUser();

                if (!data.user) {

                    alert(
                        "Please log in first."
                    );

                    return;

                }

                if (profileEditArea) {

                    profileEditArea.style.display =
                        "block";

                }

                if (passwordEditArea) {

                    passwordEditArea.style.display =
                        "none";

                }

                updateRealProfile(
                    data.user
                );

            }
        );

    }

    /* -----------------------------------------
       OPEN CHANGE PASSWORD
    ----------------------------------------- */

    if (changePasswordButton) {

        changePasswordButton.addEventListener(
            "click",
            async function () {

                const {
                    data
                } =
                    await supabaseClient.auth.getUser();

                if (!data.user) {

                    alert(
                        "Please log in first."
                    );

                    return;

                }

                if (passwordEditArea) {

                    passwordEditArea.style.display =
                        "block";

                }

                if (profileEditArea) {

                    profileEditArea.style.display =
                        "none";

                }

                if (newProfilePassword) {
                    newProfilePassword.value = "";
                }

                if (confirmProfilePassword) {
                    confirmProfilePassword.value = "";
                }

                if (passwordEditMessage) {
                    passwordEditMessage.textContent = "";
                }

            }
        );

    }

    /* -----------------------------------------
       CANCEL EDIT PROFILE
    ----------------------------------------- */

    if (cancelEditProfileButton) {

        cancelEditProfileButton.addEventListener(
            "click",
            function () {

                if (profileEditArea) {

                    profileEditArea.style.display =
                        "none";

                }

                if (profileEditMessage) {

                    profileEditMessage.textContent =
                        "";

                }

            }
        );

    }

    /* -----------------------------------------
       CANCEL PASSWORD
    ----------------------------------------- */

    if (cancelPasswordButton) {

        cancelPasswordButton.addEventListener(
            "click",
            function () {

                if (passwordEditArea) {

                    passwordEditArea.style.display =
                        "none";

                }

                if (passwordEditMessage) {

                    passwordEditMessage.textContent =
                        "";

                }

            }
        );

    }

    /* -----------------------------------------
       SAVE PROFILE
    ----------------------------------------- */

    if (saveProfileButton) {

        saveProfileButton.addEventListener(
            "click",
            async function () {

                const {
                    data: userData,
                    error: userError
                } =
                    await supabaseClient.auth.getUser();

                if (
                    userError ||
                    !userData.user
                ) {

                    if (profileEditMessage) {

                        profileEditMessage.textContent =
                            "Please log in first.";

                    }

                    return;

                }

                const user =
                    userData.user;

                const username =
                    editProfileUsername
                        ? editProfileUsername.value.trim()
                        : "";

                const age =
                    editProfileAge
                        ? Number(
                            editProfileAge.value
                          )
                        : 0;

                if (
                    username.length < 2 ||
                    username.length > 30
                ) {

                    profileEditMessage.textContent =
                        "Username must be between 2 and 30 characters.";

                    return;

                }

                if (
                    !Number.isInteger(age) ||
                    age < 13 ||
                    age > 120
                ) {

                    profileEditMessage.textContent =
                        "Age must be between 13 and 120.";

                    return;

                }

                saveProfileButton.disabled =
                    true;

                profileEditMessage.textContent =
                    "Saving profile...";

                let avatarUrl =
                    user.user_metadata?.avatar_url ||
                    null;

                /* -----------------------------------------
                   UPLOAD PROFILE PHOTO
                ----------------------------------------- */

                if (
                    profilePhotoInput &&
                    profilePhotoInput.files &&
                    profilePhotoInput.files.length > 0
                ) {

                    const file =
                        profilePhotoInput.files[0];

                    const allowedTypes = [
                        "image/jpeg",
                        "image/png",
                        "image/webp"
                    ];

                    if (
                        !allowedTypes.includes(
                            file.type
                        )
                    ) {

                        profileEditMessage.textContent =
                            "Please choose JPG, PNG or WEBP.";

                        saveProfileButton.disabled =
                            false;

                        return;

                    }

                    if (
                        file.size >
                        5 * 1024 * 1024
                    ) {

                        profileEditMessage.textContent =
                            "Image must be smaller than 5 MB.";

                        saveProfileButton.disabled =
                            false;

                        return;

                    }

                    const extension =
                        file.name
                            .split(".")
                            .pop()
                            .toLowerCase();

                    const filePath =
                        user.id +
                        "/avatar-" +
                        Date.now() +
                        "." +
                        extension;

                    const {
                        error: uploadError
                    } =
                        await supabaseClient
                            .storage
                            .from("avatars")
                            .upload(
                                filePath,
                                file,
                                {
                                    cacheControl: "3600",
                                    upsert: false
                                }
                            );

                    if (uploadError) {

                        profileEditMessage.textContent =
                            "Photo upload failed: " +
                            uploadError.message;

                        saveProfileButton.disabled =
                            false;

                        return;

                    }

                    const {
                        data: publicData
                    } =
                        supabaseClient
                            .storage
                            .from("avatars")
                            .getPublicUrl(
                                filePath
                            );

                    avatarUrl =
                        publicData.publicUrl;

                }

                /* -----------------------------------------
                   UPDATE USER METADATA
                ----------------------------------------- */

                const {
                    data: updatedData,
                    error: updateError
                } =
                    await supabaseClient.auth.updateUser({

                        data: {

                            username: username,

                            age: age,

                            avatar_url: avatarUrl

                        }

                    });

                if (updateError) {

                    profileEditMessage.textContent =
                        updateError.message;

                    saveProfileButton.disabled =
                        false;

                    return;

                }

                await updateRealProfile(
                    updatedData.user
                );

                profileEditMessage.textContent =
                    "Profile updated successfully!";

                if (profilePhotoInput) {

                    profilePhotoInput.value =
                        "";

                }

                setTimeout(
                    function () {

                        if (profileEditArea) {

                            profileEditArea.style.display =
                                "none";

                        }

                        if (profileEditMessage) {

                            profileEditMessage.textContent =
                                "";

                        }

                    },
                    1200
                );

                saveProfileButton.disabled =
                    false;

            }
        );

    }

    /* -----------------------------------------
       CHANGE PASSWORD
    ----------------------------------------- */

    if (saveProfilePasswordButton) {

        saveProfilePasswordButton.addEventListener(
            "click",
            async function () {

                const newPassword =
                    newProfilePassword
                        ? newProfilePassword.value
                        : "";

                const confirmPassword =
                    confirmProfilePassword
                        ? confirmProfilePassword.value
                        : "";

                if (
                    newPassword.length < 6
                ) {

                    passwordEditMessage.textContent =
                        "Password must be at least 6 characters.";

                    return;

                }

                if (
                    newPassword !==
                    confirmPassword
                ) {

                    passwordEditMessage.textContent =
                        "Passwords do not match.";

                    return;

                }

                saveProfilePasswordButton.disabled =
                    true;

                passwordEditMessage.textContent =
                    "Changing password...";

                const {
                    error
                } =
                    await supabaseClient.auth.updateUser({

                        password:
                            newPassword

                    });

                if (error) {

                    passwordEditMessage.textContent =
                        error.message;

                    saveProfilePasswordButton.disabled =
                        false;

                    return;

                }

                passwordEditMessage.textContent =
                    "Password changed successfully!";

                newProfilePassword.value =
                    "";

                confirmProfilePassword.value =
                    "";

                setTimeout(
                    function () {

                        if (passwordEditArea) {

                            passwordEditArea.style.display =
                                "none";

                        }

                        if (passwordEditMessage) {

                            passwordEditMessage.textContent =
                                "";

                        }

                    },
                    1500
                );

                saveProfilePasswordButton.disabled =
                    false;

            }
        );

    }

    /* -----------------------------------------
       LOAD PROFILE ON START
    ----------------------------------------- */

    async function loadRealProfile() {

        const {
            data
        } =
            await supabaseClient.auth.getUser();

        await updateRealProfile(
            data.user || null
        );

    }

    loadRealProfile();

    /* -----------------------------------------
       UPDATE PROFILE AFTER LOGIN / LOGOUT
    ----------------------------------------- */

    supabaseClient.auth.onAuthStateChange(
        function (
            event,
            session
        ) {

            setTimeout(
                function () {

                    updateRealProfile(
                        session
                            ? session.user
                            : null
                    );

                },
                0
            );

        }
    );

}
});