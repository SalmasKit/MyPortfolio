/**
 * data.js
 * Centralized data for the entire portfolio
 */

export const educationData = [
    {
        id: "edu1",
        date: "2021 - 2027",
        titleKey: "edu_item1_title",
        orgKey: "edu_item1_org",
        descKey: "edu_item1_desc",
        hash: "ensa027",
        status: "2/2"
    },
    {
        id: "edu2",
        date: "2020 - 2021",
        titleKey: "edu_item2_title",
        orgKey: "edu_item2_org",
        descKey: "edu_item2_desc",
        hash: "bac2021",
        status: "2/2"
    }
];

export const experienceData = [
    {
        id: "exp1",
        number: "#1",
        titleKey: "exp_item1_title",
        orgKey: "exp_item1_org",
        descKey: "exp_item1_desc",
        dateKey: "exp_item1_date",
        hash: "amee825",
        certLink: "assets/docs/Certifs/Attestation de stage.pdf",
        detailsId: "amee",
        logo: "assets/images/amee.png"
    }
];

export const volunteerData = [
    {
        id: "vol1",
        node: "node::mdso_mentorship",
        orgKey: "vol_item1_org",
        titleKey: "vol_item1_title",
        descKey: "vol_item1_desc",
        logo: "assets/images/mdso.png",
        links: [
            { labelKey: "vol_btn_n8n", action: "n8n" },
            { labelKey: "vol_btn_certs", action: "cert" }
        ]
    },
    {
        id: "vol2",
        node: "node::clubgi_events",
        orgKey: "vol_item2_org",
        titleKey: "vol_item2_title",
        descKey: "vol_item2_desc",
        logo: "assets/images/giclub.png",
        links: [
            { labelKey: "vol_btn_events", action: "events" }
        ]
    }
];

export const techStack = [
    {
        id: "lan",
        file: "core_languages.json",
        icon: "fa-file-code",
        color: "#f43f5e",
        categoryKey: "tech_cat_lan",
        items: [
            { name: "Java", icon: "fab fa-java" },
            { name: "Python", icon: "fab fa-python" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "PHP", icon: "fab fa-php" },
            { name: "C#", icon: "fas fa-hashtag" },
            { name: "HTML5/CSS3", icon: "fab fa-html5" }
        ]
    },
    {
        id: "fw",
        file: "frameworks.json",
        icon: "fa-layer-group",
        color: "#10b981",
        categoryKey: "tech_cat_fw",
        items: [
            { name: "Spring Boot", icon: "fas fa-leaf" },
            { name: "React.js", icon: "fab fa-react" },
            { name: "Symfony", icon: "fab fa-php" },
            { name: "Android SDK", icon: "fab fa-android" },
            { name: "JavaEE", icon: "fab fa-java" },
            { name: "JavaFX", icon: "fas fa-desktop" }
        ]
    },
    {
        id: "db",
        file: "databases.json",
        icon: "fa-database",
        color: "#0ea5e9",
        categoryKey: "tech_cat_db",
        items: [
            { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
            { name: "MySQL", icon: "devicon-mysql-plain" },
            { name: "SQLite", icon: "devicon-sqlite-plain" },
            { name: "Room", icon: "fas fa-box" },
            { name: "Firebase", icon: "fas fa-fire" }
        ]
    },
    {
        id: "sys",
        file: "infrastructure.json",
        icon: "fa-server",
        color: "#f59e0b",
        categoryKey: "tech_cat_sys_net",
        items: [
            { name: "Docker (Containers)", icon: "fab fa-docker" },
            { name: "Virtual Machines", icon: "fas fa-server" },
            { name: "Linux (Ubuntu, Debian)", icon: "fab fa-linux" },
            { name: "Systems Administration", icon: "fas fa-terminal" },
            { name: "Network Basics", icon: "fas fa-network-wired" }
        ]
    },
    {
        id: "ai",
        file: "ai_data.json",
        icon: "fa-brain",
        color: "#6366f1",
        categoryKey: "tech_cat8",
        items: [
            { name: "Deep Learning", icon: "fas fa-network-wired" },
            { name: "Machine Learning", icon: "fas fa-brain" },
            { name: "Computer Vision", icon: "fas fa-eye" },
            { name: "Scikit-learn", icon: "fas fa-microchip" },
            { name: "Pandas/NumPy", icon: "fas fa-chart-bar" }
        ]
    },
    {
        id: "dev",
        file: "tools.json",
        icon: "fa-tools",
        color: "#d946ef",
        categoryKey: "tech_cat_tools",
        subCategories: [
            {
                key: "tech_cat_ides",
                items: [
                    { name: "JetBrains / VS Code", icon: "fas fa-code" },
                    { name: "Android Studio", icon: "fab fa-android" },
                    { name: "Jupyter / Google Colab", icon: "fas fa-book-open" }
                ]
            },
            {
                key: "tech_cat_versioning",
                items: [
                    { name: "Git / GitHub / GitLab", icon: "fab fa-git-alt" },
                    { name: "n8n", icon: "fas fa-robot" },
                    { name: "Postman", icon: "fas fa-rocket" },
                    { name: "Bruno", icon: "fas fa-paw" }
                ]
            },
            {
                key: "tech_cat_testing",
                items: [
                    { name: "JUnit", icon: "fas fa-vial" },
                    { name: "Mockito", icon: "fas fa-bug" },
                    { name: "JaCoCo", icon: "fas fa-shield-alt" }
                ]
            },
            {
                key: "tech_cat_design",
                items: [
                    { name: "UML", icon: "fas fa-project-diagram" },
                    { name: "Merise", icon: "fas fa-sitemap" },
                    { name: "Figma", icon: "fab fa-figma" },
                    { name: "Canva", icon: "fas fa-paint-brush" }
                ]
            }
        ]
    },
    {
        id: "soft",
        file: "soft_skills.json",
        icon: "fa-users",
        color: "#a855f7",
        categoryKey: "tech_cat3",
        subCategories: [
            {
                key: "tech_cat7",
                items: [
                    { name: "Agile", icon: "fas fa-tasks" },
                    { name: "Scrum", icon: "fas fa-sync" },
                    { name: "Jira", icon: "fab fa-jira" }
                ]
            },
            {
                key: "tech_cat3",
                items: [
                    { name: "Communication", icon: "fas fa-comments" },
                    { name: "Teamwork", icon: "fas fa-users" },
                    { name: "Problem Solving", icon: "fas fa-lightbulb" },
                    { name: "Adaptability", icon: "fas fa-random" }
                ]
            },
            {
                key: "lang_label",
                items: [
                    { name: "Arabic (Native)", icon: "fas fa-language" },
                    { name: "French (B2)", icon: "fas fa-language" },
                    { name: "English (C1)", icon: "fas fa-language" }
                ]
            }
        ]
    }
];

export const projectData = [
    {
        id: "afriqai",
        category: "web",
        techs: ["Spring Boot 3", "FastAPI", "React", "Generative AI"],
        github: "https://github.com/SalmasKit/Afriqai",
        comingSoon: true
    },
    {
        id: "portfolio",
        category: "web",
        img: "assets/images/Apps/Portfolio/portfolio_mockup.png",
        techs: ["Vanilla JS", "GSAP", "CSS3"],
        github: "https://github.com/SalmasKit/MyPortfolio"
    },
    {
        id: "proj1",
        category: "web",
        techs: ["Spring Boot", "React", "PostgreSQL"],
        gitlab: "https://gitlab.com/formations2026/gera-back",
        comingSoon: true
    },
    {
        id: "chatbot",
        category: "ai",
        img: "assets/images/Apps/Chatbotmso/chatbot_mso.png",
        techs: ["FastAPI", "Vite", "Hugging Face"],
        gitlab: "https://gitlab.com/chatbot-mso/Chatbot-mso"
    },
    {
        id: "soukify",
        category: "mobile",
        imgs: ["assets/images/Apps/Soukify/Soukify3.jpeg", "assets/images/Apps/Soukify/Soukify.jpeg", "assets/images/Apps/Soukify/Soukify2.jpeg"],
        techs: ["Android", "Java", "Firebase"],
        github: "https://github.com/SalmasKit/SoukifyApp"
    },
    {
        id: "stockify",
        category: "web",
        img: "assets/images/Apps/Stockify/Stockify.png",
        techs: ["Symfony 7", "PHP 8.2", "MySQL"],
        github: "https://github.com/SalmasKit/StockifyApp"
    },
    {
        id: "proj4",
        category: "ai",
        img: "assets/images/Apps/Mouvementdetection/MouvementDetection.png",
        techs: ["Python", "OpenCV", "NumPy"],
        github: "https://github.com/SalmasKit/MotionDetectionApp"
    },
    {
        id: "proj5",
        category: "ai",
        img: "assets/images/Apps/Cbir/Cbir.png",
        techs: ["Scikit-learn", "Pandas", "NumPy"],
        github: "https://github.com/SalmasKit/QueryPix-CBIRApp"
    },
    {
        id: "quiz",
        category: "mobile",
        imgs: ["assets/images/Apps/Quiz/quiz3.jpeg", "assets/images/Apps/Quiz/quiz.jpeg", "assets/images/Apps/Quiz/quiz2.jpeg"],
        techs: ["Android", "Java", "Room DB"],
        github: "https://github.com/SalmasKit/QuizApp.git"
    },
    {
        id: "amee",
        category: "web",
        img: "assets/images/Apps/Econgeamee/eCongeAmee.png",
        techs: ["PHP", "MySQL", "JavaScript"]
    },
    {
        id: "proj6",
        category: "desktop",
        img: "assets/images/Apps/Shifaa/Shifaa.png",
        techs: ["JavaFX 21", "MySQL", "OpenPDF"],
        github: "https://github.com/SalmasKit/ShifaaApp"
    },
    {
        id: "proj7",
        category: "desktop",
        img: "assets/images/Apps/Baytalhikma/bayt_al_hikma.png",
        techs: ["Python", "Streamlit", "Pandas"],
        github: "https://github.com/SalmasKit/BaytAlHikmaApp"
    }
];

export const certData = [
    {
        id: "cert_agentic",
        category: "ai",
        org: "Sololearn",
        icon: "fas fa-robot",
        date: "Apr 2026",
        verifyId: "CC-HSWFG6Z7",
        pdf: "assets/docs/Certifs/Agentic Workflows.pdf",
        techs: ["AI", "LLM", "Agents"]
    },
    {
        id: "cert_java_inter",
        category: "dev",
        org: "Sololearn",
        icon: "fab fa-java",
        date: "Apr 2026",
        verifyId: "CC-KWY8R7QD",
        pdf: "assets/docs/Certifs/Java Intermediate.pdf",
        techs: ["Java", "OOP"]
    },
    {
        id: "cert5",
        category: "ai",
        org: "Sololearn",
        icon: "fas fa-brain",
        date: "Apr 2026",
        verifyId: "CC-SVM1YAQD",
        pdf: "assets/docs/Certifs/PromptEngineering.pdf",
        techs: ["AI", "NLP", "Prompting"]
    },
    {
        id: "cert_docker",
        category: "infra",
        org: "Simplilearn",
        icon: "fab fa-docker",
        date: "Mar 2026",
        verifyId: "10024321",
        pdf: "assets/docs/Certifs/DockerCertificate.pdf",
        techs: ["Docker", "Containers"]
    },
    {
        id: "cert1",
        category: "db",
        org: "freeCodeCamp",
        icon: "fas fa-database",
        date: "Mar 2026",
        verifyId: "fcc-ad52db15-a244-49e1-a870-b86928a540ac-rdv9",
        pdf: "assets/docs/Certifs/relational-databases-v9.pdf",
        techs: ["SQL", "PostgreSQL"]
    },
    {
        id: "cert_junit",
        category: "dev",
        org: "Simplilearn",
        icon: "fas fa-vial",
        date: "Apr 2026",
        verifyId: "10152757",
        pdf: "assets/docs/Certifs/JUnit.pdf",
        techs: ["JUnit", "TDD", "Java"]
    },
    {
        id: "cert2",
        category: "dev",
        org: "HackerRank",
        icon: "fas fa-laptop-code",
        date: "Mar 2026",
        verifyId: "D1EFFDE4738E",
        pdf: "assets/docs/Certifs/java_basic_certificate.pdf",
        techs: ["Java", "Data Structures"]
    },
    {
        id: "cert3",
        category: "infra",
        org: "Simplilearn",
        icon: "fas fa-server",
        date: "Mar 2026",
        verifyId: "10021035",
        pdf: "assets/docs/Certifs/DevOps 101.pdf",
        techs: ["DevOps", "CI/CD", "Infrastructure"]
    },
    {
        id: "cert4",
        category: "db",
        org: "HackerRank",
        icon: "fas fa-table",
        date: "Mar 2026",
        verifyId: "D2EFFDE4738E",
        pdf: "assets/docs/Certifs/sql_intermediate certificate.pdf",
        techs: ["SQL", "Query Optimization"]
    }
];
