const SUPABASE_URL = "ضع Project URL هنا";
const SUPABASE_PUBLISHABLE_KEY = "ضع Publishable key هنا";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
/* =========================================
   MOVIES TONIGHT
   MAIN JAVASCRIPT
   VERSION: LANGUAGE + THEME + SEARCH
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
            email: "Email",
            password: "Password",
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
            signupSoon: "Account creation will be available soon.",
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
            email: "البريد الإلكتروني",
            password: "كلمة المرور",
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
            signupSoon: "إنشاء الحساب سيكون متاحًا قريبًا.",
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
            email: "El. paštas",
            password: "Slaptažodis",
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
            signupSoon: "Paskyros kūrimas bus pasiekiamas netrukus.",
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
            email: "Электронная почта",
            password: "Пароль",
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
            signupSoon: "Создание аккаунта скоро будет доступно.",
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
            searchLanguage: "🔎 Пошук мови",
            typeLanguage: "Введіть назву мови...",
            roomCode: "Код кімнати",
            createRoom: "Створити кімнату",
            joinRoom: "Приєднатися",
            login: "Увійти",
            signup: "Створити акаунт",
            email: "Електронна пошта",
            password: "Пароль",
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
            signupSoon: "Створення акаунта буде доступне незабаром.",
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
            searchLanguage: "🔎 Pesquisar idioma",
            typeLanguage: "Digite o nome do idioma...",
            roomCode: "Código da sala",
            createRoom: "Criar sala",
            joinRoom: "Entrar na sala",
            login: "Entrar",
            signup: "Criar conta",
            email: "E-mail",
            password: "Senha",
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
            signupSoon: "A criação de contas estará disponível em breve.",
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
            searchLanguage: "🔎 Rechercher une langue",
            typeLanguage: "Tapez le nom d'une langue...",
            roomCode: "Code de la salle",
            createRoom: "Créer une salle",
            joinRoom: "Rejoindre la salle",
            login: "Connexion",
            signup: "Créer un compte",
            email: "E-mail",
            password: "Mot de passe",
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
            signupSoon: "La création de compte sera bientôt disponible.",
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
            searchLanguage: "🔎 Buscar idioma",
            typeLanguage: "Escribe el nombre de un idioma...",
            roomCode: "Código de sala",
            createRoom: "Crear sala",
            joinRoom: "Unirse a la sala",
            login: "Iniciar sesión",
            signup: "Crear cuenta",
            email: "Correo electrónico",
            password: "Contraseña",
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
            signupSoon: "La creación de cuentas estará disponible pronto.",
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
            searchLanguage: "🔎 Sprache suchen",
            typeLanguage: "Sprachnamen eingeben...",
            roomCode: "Raumcode",
            createRoom: "Raum erstellen",
            joinRoom: "Raum beitreten",
            login: "Anmelden",
            signup: "Konto erstellen",
            email: "E-Mail",
            password: "Passwort",
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
            signupSoon: "Die Kontoerstellung ist bald verfügbar.",
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
            searchLanguage: "🔎 Cerca lingua",
            typeLanguage: "Digita il nome di una lingua...",
            roomCode: "Codice stanza",
            createRoom: "Crea stanza",
            joinRoom: "Entra nella stanza",
            login: "Accedi",
            signup: "Crea account",
            email: "Email",
            password: "Password",
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
            signupSoon: "La creazione dell'account sarà disponibile presto.",
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
            searchLanguage: "🔎 Dil Ara",
            typeLanguage: "Dil adı yazın...",
            roomCode: "Oda Kodu",
            createRoom: "Oda Oluştur",
            joinRoom: "Odaya Katıl",
            login: "Giriş Yap",
            signup: "Hesap Oluştur",
            email: "E-posta",
            password: "Şifre",
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
            signupSoon: "Hesap oluşturma yakında kullanılabilir olacak.",
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
        { value: "English", names: ["English", "الإنجليزية", "Anglais", "Englisch", "Inglese", "Inglés"] },
        { value: "Arabic", names: ["Arabic", "العربية", "Arabe", "Arabisch", "Arabo", "Árabe"] },
        { value: "Lithuanian", names: ["Lithuanian", "Lietuvių", "Lietuvių kalba", "Lituanien", "Litauisch", "Lituano"] },
        { value: "Russian", names: ["Russian", "Русский", "Російська", "Russe", "Russisch", "Russo"] },
        { value: "Ukrainian", names: ["Ukrainian", "Українська", "Ukrainien", "Ukrainisch", "Ucraino"] },
        { value: "Portuguese", names: ["Portuguese", "Português", "Portugais", "Portugiesisch", "Português"] },
        { value: "French", names: ["French", "Français", "Französisch", "Francese", "Francés"] },
        { value: "Spanish", names: ["Spanish", "Español", "Espagnol", "Spanisch", "Spagnolo"] },
        { value: "German", names: ["German", "Deutsch", "Allemand", "Tedesco", "Alemán"] },
        { value: "Italian", names: ["Italian", "Italiano", "Italien", "Italienisch", "Italiano"] },
        { value: "Turkish", names: ["Turkish", "Türkçe", "Turc", "Türkisch", "Turco"] },
        { value: "Polish", names: ["Polish", "Polski", "Polonais", "Polnisch", "Polacco"] },
        { value: "Dutch", names: ["Dutch", "Nederlands", "Néerlandais", "Niederländisch", "Olandese"] },
        { value: "Chinese", names: ["Chinese", "中文", "Chinois", "Chinesisch", "Cinese"] },
        { value: "Japanese", names: ["Japanese", "日本語", "Japonais", "Japanisch", "Giapponese"] },
        { value: "Korean", names: ["Korean", "한국어", "Coréen", "Koreanisch", "Coreano"] }
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
       APPLY LANGUAGE
    ========================================= */

    function applyLanguage(language) {

        if (!translations[language]) {
            language = "English";
        }

        currentLanguage = language;

        localStorage.setItem("appLanguage", language);


        const current =
            translations[language] || translations.English;


        document.querySelectorAll("[data-i18n]").forEach(function (element) {

            const key =
                element.getAttribute("data-i18n");

            if (current[key]) {
                element.textContent = current[key];
            } else if (translations.English[key]) {
                element.textContent = translations.English[key];
            }

        });


        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {

            const key =
                element.getAttribute("data-i18n-placeholder");

            if (current[key]) {
                element.placeholder = current[key];
            } else if (translations.English[key]) {
                element.placeholder = translations.English[key];
            }

        });


        const rtlLanguages = [
            "Arabic"
        ];


        if (rtlLanguages.includes(language)) {

            document.documentElement.setAttribute("dir", "rtl");
            document.documentElement.setAttribute("lang", "ar");

        } else {

            document.documentElement.setAttribute("dir", "ltr");
            document.documentElement.setAttribute(
                "lang",
                language.toLowerCase()
            );

        }


        if (languageSelect) {
            languageSelect.value = language;
        }


        updateThemeText();
    }


    /* =========================================
       PAGE SYSTEM
    ========================================= */

    function showPage(pageId) {

        pages.forEach(function (page) {
            page.classList.remove("active-page");
        });

        const selectedPage =
            document.getElementById(pageId);

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


    document.addEventListener("click", function (event) {

        if (!profileSection ||
            !profileSection.classList.contains("show")) {
            return;
        }

        if (
            !profileSection.contains(event.target) &&
            event.target !== profileButton &&
            (!profileButton || !profileButton.contains(event.target))
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

            const pageId =
                link.getAttribute("data-page");

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

            const pageId =
                button.getAttribute("data-profile-page");

            if (!pageId) {
                return;
            }

            if (profileSection) {
                profileSection.classList.remove("show");
            }

            showPage(pageId);

            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });

        });

    });


    /* =========================================
       START WATCHING
    ========================================= */

    const startWatching =
        document.getElementById("startWatching");

    if (startWatching) {

        startWatching.addEventListener("click", function () {

            showPage("moviesPage");
            setActiveNav("moviesPage");

        });

    }


    /* =========================================
       WATCH TOGETHER HOME
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
                t("roomCreated") + code;

        });

    }


    /* =========================================
       JOIN ROOM
    ========================================= */

    const joinRoom =
        document.getElementById("joinRoom");

    if (joinRoom && roomCode && roomMessage) {

        joinRoom.addEventListener("click", function () {

            const code =
                roomCode.value.trim().toUpperCase();

            if (code === "") {

                roomMessage.textContent =
                    t("enterRoomCode");

                return;
            }

            roomMessage.textContent =
                t("joiningRoom") + code + "...";

        });

    }


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
                    t("loginRequired");

                return;
            }


            if (!email.includes("@")) {

                accountMessage.textContent =
                    t("invalidEmail");

                return;
            }


            accountMessage.textContent =
                t("loginSuccess");

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
                t("signupSoon");

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
                    t("loggedOut");

            }

        });

    }


    /* =========================================
       THEME SYSTEM
    ========================================= */

    const themeToggle =
        document.getElementById("themeToggle");


    function applyTheme(isDark) {

        document.body.classList.toggle(
            "light-theme",
            !isDark
        );

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );


        if (themeToggle) {
            themeToggle.checked = isDark;
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
            label.querySelector("[data-i18n]");

        if (textElement) {
            textElement.textContent = t("darkMode");
        }

    }


    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "light") {

        applyTheme(false);

    } else {

        applyTheme(true);

    }


    if (themeToggle) {

        themeToggle.addEventListener("change", function () {

            applyTheme(themeToggle.checked);

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
                t("settingsSaved");

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


    if (languageSelect) {

        languageSelect.addEventListener("change", function () {

            applyLanguage(
                languageSelect.value
            );

        });

    }


    if (saveLanguage) {

        saveLanguage.addEventListener("click", function () {

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

        });

    }


    /* =========================================
       LOAD SAVED LANGUAGE SETTINGS
    ========================================= */

    const savedLanguage =
        localStorage.getItem("appLanguage");

    const savedSubtitle =
        localStorage.getItem("subtitleLanguage");

    const savedAudio =
        localStorage.getItem("audioLanguage");


    if (languageSelect && savedLanguage) {

        const languageExists =
            Array.from(languageSelect.options)
                .some(function (option) {
                    return option.value === savedLanguage;
                });

        if (languageExists) {
            languageSelect.value = savedLanguage;
        }

    }


    if (subtitleSelect && savedSubtitle) {
        subtitleSelect.value = savedSubtitle;
    }


    if (audioSelect && savedAudio) {
        audioSelect.value = savedAudio;
    }


    /* =========================================
       LANGUAGE SEARCH
    ========================================= */

    const languageSearch =
        document.getElementById("languageSearch");

    const languageSearchResults =
        document.getElementById("languageSearchResults");


    function renderLanguageResults(searchText) {

        if (!languageSearchResults ||
            !languageSelect) {
            return;
        }


        languageSearchResults.innerHTML = "";


        const query =
            searchText.trim().toLowerCase();


        if (query === "") {
            return;
        }


        const results =
            languageInfo.filter(function (item) {

                return item.names.some(function (name) {

                    return name
                        .toLowerCase()
                        .includes(query);

                });

            });


        results.forEach(function (item) {

            const button =
                document.createElement("button");

            button.type = "button";


            const nativeName =
                item.names[1] || item.value;


            button.textContent =
                item.value === "Lithuanian"
                    ? "Lietuvių — Lithuanian"
                    : nativeName + " — " + item.value;


            button.addEventListener("click", function () {

                languageSelect.value =
                    item.value;

                applyLanguage(
                    item.value
                );

                languageSearch.value =
                    nativeName;

                languageSearchResults.innerHTML =
                    "";

            });


            languageSearchResults.appendChild(button);

        });


        if (results.length === 0) {

            const noResult =
                document.createElement("div");

            noResult.textContent =
                "No language found.";

            noResult.style.padding = "8px";
            noResult.style.color = "var(--text-muted)";

            languageSearchResults.appendChild(noResult);

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
                t("supportSoon")
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
                    t("deleteConfirm")
                );


            if (confirmed) {

                deleteMessage.textContent =
                    t("deleteSubmitted");

            }

        });

    }


    /* =========================================
       SEARCH MOVIES
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
                t("playbackSoon")
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
                t("moreMoviesSoon")
            );

        });

    });


    /* =========================================
       ESC KEY
    ========================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (profileSection) {
                profileSection.classList.remove("show");
            }

        }

    });


    /* =========================================
       INITIAL LANGUAGE
    ========================================= */

    applyLanguage(
        savedLanguage || "English"
    );


    console.log(
        "MOVIES TONIGHT loaded successfully."
    );

});