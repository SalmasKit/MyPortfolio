const translations = {
    en: {
        nav_intro: "Intro",
        nav_edu: "Education",
        nav_journey: "Journey",
        nav_volunteer: "Volunteer",
        nav_stack: "Kit",
        nav_work: "Work",
        nav_certs: "Credentials",
        nav_contact: "Contact",
        hero_status: "Seeking 1-2 Month PFA Internship • Starting 01/07",
        hero_status_p1: "SEEKING A 1-2 MONTH PFA INTERNSHIP",
        hero_status_p2: "STARTING 01/07",
        hero_status_ready: "STATUS: READY",
        hero_subtitle: "Software engineering student at Ensa Oujda",
        hero_desc: "Passionate about building <span>complete, meaningful applications</span> — from the logic behind the scenes to the interfaces people actually use. I enjoy the full process of creating software: <span>understanding a problem</span>, thinking through a solution, and bringing it to life in a way that feels <span>polished and purposeful</span>. I'm always exploring new technologies and pushing myself to get better, and I look forward to channeling that curiosity into <span>real-world projects</span> that make a difference.",
        hero_cta_projects: "View Projects",
        hero_cta_resume: "Get Resume",
        resume_title: "Curriculum Vitae",
        resume_download: "Download",
        resume_file: "assets/docs/Resumes/Resume_eng.pdf",
        resume_name: "Salma_Barrak_Resume_ENG.pdf",
        sec_edu: "Academic Foundation",
        edu_tab_eng: "Engineering",
        edu_tab_bac: "Baccalaureate",
        edu_item1_title: "Engineering Degree in Computer Science (AI Option)",
        edu_item1_org: "National School of Applied Sciences - Oujda (ENSAO)",
        edu_item1_date: "2021 - 2027 (Expected)",
        edu_item1_desc: "<li>Deepening expertise in Software Engineering, Artificial Intelligence, and Distributed Systems.</li><li>Current Rank: 4th Year Engineering Student.</li>",
        edu_item2_title: "High School Diploma in Mathematical Sciences A",
        edu_item2_org: "Hassan Ibn Tabit High School - Zaio",
        edu_item2_date: "2020 - 2021",
        edu_item2_desc: "<li>Graduated with \"Honors\".</li><li>Focused on Advanced Mathematics and Physics.</li>",
        sec_exp: "Professional Path",
        exp_item1_title: "Full-Stack Development Intern",
        exp_item1_org: "AMEE - Rabat",
        exp_item1_date: "07/2025 - 08/2025",
        exp_item1_desc: "<li>Conceived and developed an HR management web app with real-time dashboards.</li><li>Automated document flows.</li><li>Tech Stack: PHP, MySQL, JavaScript.</li>",
        exp_btn_cert: "View Certificate",
        sec_volunteer: "Impact & Volunteering",
        vol_item1_title: "Mentor & Workshop Animator",
        vol_item1_org: "Oriental Science House",
        vol_item1_date: "09/2024",
        vol_item1_desc: "<li>Facilitated immersive workshops in Artificial Intelligence, Deep Learning, and n8n automation.</li><li>Engineered physical models and \"maquettes\" to translate complex scientific theories into intuitive concepts for younger learners.</li>",
        vol_item2_title: "Technical Organization",
        vol_item2_org: "Club GI ENSAO",
        vol_item2_date: "09/2024",
        vol_item2_desc: "<li>Orchestrated large-scale club events and high-stakes technical competitions.</li><li>Authored technical and promotional content for the club's digital presence.</li><li>Mentored junior students, guiding them through technical challenges and club integration.</li>",
        sec_tech: "Engineering Kit",
        tech_cat1: "Languages",
        tech_cat2: "Frameworks & Libraries",
        tech_cat3: "Human Capital",
        tech_cat4: "Dev Tools & IDEs",
        tech_cat5: "AI & Data Science",
        tech_cat6: "Databases & Infrastructure",
        tech_cat7: "Agile & Project Management",
        tech_cat8: "Soft Skills",
        tech_cat_db: "Databases",
        tech_cat_sys: "Infrastructure",
        tech_cat_ai: "Artificial Intelligence",
        tech_cat_data: "Data Science",
        tech_ai_ml: "Machine Learning",
        tech_ai_dl: "Deep Learning",
        tech_ai_cv: "Computer Vision",
        tech_ai_sklearn: "Scikit-learn",
        tech_ai_pandas: "Pandas/NumPy",
        ide_explorer: "EXPLORER",
        ide_workspace: "Workspace",
        ide_category: "category",
        ide_stack: "stack",
        ide_folder: "engineering_kit",
        file_lan: "core_languages.json",
        file_fw: "frameworks.json",
        file_db: "databases.json",
        file_sys: "infrastructure.json",
        file_ai: "ai_data.json",
        file_dev: "tools.json",
        file_soft: "soft_skills.json",
        tech_cat_lan: "Languages",
        tech_cat_fw: "Frameworks & Libraries",
        tech_cat_sys_net: "Systems & Networks",
        tech_docker: "Docker (Containers)",
        tech_vms: "Virtual Machines",
        tech_sysadmin: "Systems Administration",
        tech_net: "Network Basics",
        tech_cat_ides: "ides_environments",
        tech_cat_versioning: "versioning_apis",
        tech_cat_testing: "testing_qa",
        tech_cat_design: "design_architecture",
        soft_agile: "Agile",
        soft_scrum: "Scrum",
        soft_jira: "Jira",
        soft_communication: "Communication",
        soft_teamwork: "Teamwork",
        soft_problem_solving: "Problem Solving",
        soft_adaptability: "Adaptability",
        lang_label: "Languages",
        lang_arabic: "Arabic (Native)",
        lang_french: "French (B2)",
        lang_english: "English (C1)",
        sec_projects: "Engineering Feats",
        proj_challenge: "Challenge:",
        proj_solution: "Solution:",
        proj_btn_details: "See Details",
        proj_source: "Source",
        proj_coming_soon: "Coming Soon",
        filter_all: "All",
        filter_web: "Web Apps",
        filter_ai: "AI & ML",
        filter_mobile: "Mobile",
        filter_desktop: "Desktop",
        filter_dev: "Development",
        filter_infra: "DevOps & Cloud",
        filter_db: "Databases",
        proj1_title: "Jira Clone Pro",
        proj1_desc: "Building a robust back-end for real-time task management with RESTful API integrity.",
        proj1_sol: "Implemented high test coverage (Mockito/JUnit) and scalable PostgreSQL architecture.",
        proj1_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Jira Clone Pro is a high-integrity project management backend designed to mirror the complex workflow capabilities of enterprise-grade Agile tools. It focuses on absolute data consistency, real-time task transitions, and a strictly enforced RESTful API architecture to ensure a scalable and predictable development environment.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-tasks"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Agile Lifecycle</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Complete management of epics, stories, and tasks with state-driven transitions and priority hierarchies.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-vial"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">TDD Excellence</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Strict Test-Driven Development using Mockito and JUnit, ensuring 90%+ coverage for all critical business logic.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-database"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Relational Integrity</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">A highly optimized PostgreSQL schema utilizing advanced indexing and constraints for sub-millisecond query performance.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-project-diagram"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">RESTful Blueprint</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Level 3 HATEOAS-compliant API design with robust error handling and standardized response envelopes.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Built using the Spring ecosystem for enterprise reliability and modern reactive standards:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Spring Boot 3 & Data JPA:</strong> Leveraging Hibernate for efficient object-relational mapping and transaction management.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Security & JWT:</strong> Stateless authentication layer ensuring secure communication between front-end and API endpoints.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Maven & CI/CD:</strong> Standardized build pipelines with automated quality gates and dependency vulnerability scanning.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        stockify_title: "Stockify - Inventory Hub",
        stockify_desc: "A professional inventory management system built with Symfony 7.4 for tracking products, transactions, and stock operations.",
        stockify_sol: "Utilized Symfony 7, Doctrine ORM, and TailwindCSS 4 to create a sub-second analytical data pipeline.",
        stockify_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Stockify is a professional, high-performance inventory management system designed to bring sub-second analytical depth to stock tracking. Built with a modern PHP stack, it provides businesses with a robust suite of tools to manage product volatility, automate restock cycles, and maintain full accountability through detailed transaction auditing.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-line"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Analytical Dashboard</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Real-time overview of inventory health, featuring automated low-stock alerts and key performance metrics.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-exchange-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Stock Operations</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Specialized workflows for restocks and donations, ensuring every item movement is logged with precision.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-history"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Transaction Ledger</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">A permanent, immutable history of all stock changes for full transparency and simplified auditing.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-user-shield"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">RBAC Security</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Role-based access control with secure account activation, profile management, and session safety.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Architected with a focus on data integrity and high performance using the Symfony framework:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Symfony 7.4 + Doctrine:</strong> Leveraging advanced ORM mapping and sub-second analytical query optimization.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>TailwindCSS 4.x:</strong> A custom-designed, mobile-first interface optimized for rapid navigation across devices.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>UX Turbo & Stimulus:</strong> Integrated modern JavaScript components for seamless, SPA-like page transitions without reloads.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj3_title: "Soukify - Marketplace",
        proj3_desc: "Bridging the gap between traditional Moroccan artisans and digital consumers while handling geolocation, real-time chat, and media-heavy catalogs on mobile.",
        proj3_sol: "Architected with Android SDK and Firebase using the MVVM design pattern.",
        proj3_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Soukify is a comprehensive mobile application designed to promote and sell Moroccan craftsmanship. It bridges the gap between traditional artisans and digital consumers by offering a dedicated e-commerce platform with smart geolocation, direct artisan-to-customer chat, and an ecosystem that preserves cultural heritage while empowering local creators.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-map-marked-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Geo-Discovery</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Built with OpenStreetMap (osmdroid) to discover artisan workshops by proximity without relying on expensive APIs.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-line"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Artisan Hub</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Comprehensive shop management allowing artisans to add products and view analytics.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-comments"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Real-time Chat</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Integrated chat connecting buyers and sellers directly, powered by Firebase and push notifications.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-cloud-upload-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Media Optimization</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Adaptive image compression via Cloudinary for fast loading even on 3G networks.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Developed for the Android ecosystem focusing on scalability and user engagement:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Java & MVVM:</strong> Clean separation of concerns ensuring a testable and maintainable mobile codebase.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Firebase Backend:</strong> Leveraging real-time database and authentication for seamless user interactions.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>OpenStreetMap API:</strong> Providing advanced mapping features with zero license costs and high customization.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj_chatbot_title: "Chatbot-mso - Gov Assistant",
        proj_chatbot_desc: "A multilingual AI chatbot that answers citizens' questions on Moroccan administrative procedures in Arabic, French, and Darija.",
        proj_chatbot_sol: "Full-stack FastAPI + Vite engine powered by Hugging Face LLMs, a local vector DB, Tesseract OCR, and Docker orchestration.",
        proj_chatbot_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Chatbot-mso is a full-stack RAG-powered chatbot that makes Moroccan administrative procedures instantly accessible — in Arabic, French, and Darija. Citizens can ask real questions like <em>"Comment obtenir un extrait d'acte de naissance ?"</em> or <em>"كيف أحصل على جواز السفر البيومتري؟"</em> and receive accurate, context-grounded answers drawn from a local vector knowledge base.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-language"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Trilingual RAG</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Handles citizen queries in Arabic, French, and Darija using a local vector DB for fast, semantically accurate context retrieval.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-file-image"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Image OCR Upload</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Users can upload official document images; the backend extracts text via Tesseract OCR and feeds it into the LLM context window.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-exchange-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Swappable LLM Backend</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Defaults to the Hugging Face Router; easily switch to an OpenAI-compatible service via a single env variable and import swap.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-shipping-fast"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Docker One-Command Deploy</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">A single <code>start.sh</code> script builds the data pipeline if needed, then spins up all containers — frontend on :8080, backend on :8000.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Built as a modular, containerized AI pipeline with a clean separation between retrieval, inference, and presentation layers:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>FastAPI + Vite:</strong> Async Python backend paired with a blazing-fast Vite frontend for sub-second UI interactions.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Local Vector DB:</strong> Pre-built embeddings (downloadable) enable instant retrieval without rebuilding a 2-hour data pipeline.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Hugging Face Router:</strong> Production-ready LLM calls via HF Inference API, with a modular <code>llm_service</code> pattern allowing zero-friction OpenAI migration.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj4_title: "Vision Security Engine",
        proj4_desc: "Real-time background subtraction for motion capture under varying lighting.",
        proj4_sol: "Engineered an OpenCV-based pipeline in Python with Streamlit visuals.",
        proj4_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Vision Security Engine is a high-performance, real-time motion detection system designed for advanced surveillance and motion capture. It leverages state-of-the-art background subtraction algorithms to isolate movement from complex backgrounds, providing security professionals with a configurable and interactive tool for both live feeds and recorded media.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-video"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Dual Input Modes</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Seamlessly process high-definition video files or connect to live webcam feeds for real-time security monitoring.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-brain"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Triple Detection Engine</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Choose between MOG2 (Gaussian Mixture), KNN (K-Nearest Neighbors), or Frame Differencing based on lighting conditions.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-columns"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Quad-View Interface</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Four simultaneous views: Original feed, Binary motion mask, Extracted objects, and Bounding box tracking.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-line"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Live Telemetry</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Real-time performance metrics including FPS tracking, object counts, and processing progress bars.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Engineered with a modular Python architecture optimized for low-latency computer vision tasks:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>OpenCV Pipeline:</strong> Advanced morphological operations and binary thresholding for noise reduction and shadow detection.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>OOP Design:</strong> Highly modular class structure with specialized processors for file-based and stream-based data.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Streamlit Dashboard:</strong> A reactive web frontend for dynamic parameter tuning (variance thresholds, kernel sizes).</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj_quiz_title: "Tech Quiz Pro: IT Mastery Edition",
        proj_quiz_desc: "A high-performance Android quiz application designed for developers and IT professionals.",
        proj_quiz_sol: "Built with Java using MVVM, Room Database for local persistence, and a 'System Build' analysis engine.",
        proj_quiz_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Tech Quiz Pro is a professional-grade Android application designed to test and master technical depth across 8 specialized IT tracks. It combines a premium "IT Console" aesthetic with a high-capacity data engine to provide developers with a rigorous evaluation of their 'system stability' in various technologies.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-terminal"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">8 specialized Tracks</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Master 350+ curated challenges across HTML5, CSS3, JS (ES6+), Java, SQL, Git, General CS, and Cyber Security.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-stopwatch"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Technical Marathons</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">High-capacity 50-question sessions designed to simulate intense technical interviews and test endurance.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-microchip"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">System Build Analysis</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Post-quiz summaries presented as a 'Build Log' with compilation points, accuracy tracking, and error detection.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-palette"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">IT Console Aesthetic</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Premium Glassmorphism UI with neon-cyan accents, floating components, and a dedicated dark-mode environment.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Built with a modern Android architecture to ensure high performance and data integrity:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>MVVM + LiveData:</strong> Robust state management ensuring reactive UI updates and lifecycle awareness.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Room Persistence:</strong> Atomic batch-insertion of question pools for high-speed offline access.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Dynamic Engine:</strong> JSON asset management for localized data and Retrofit 2 for dynamic API fallbacks.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj5_title: "QueryPix - CBIR System",
        proj5_desc: "A modern Content-Based Image Retrieval system built for searching and retrieving similar images from the Corel-1000 dataset.",
        proj5_sol: "Developed a similarity search engine using OpenCV, NumPy, and Scikit-learn with a Streamlit interface.",
        proj5_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    QueryPix is a modern Content-Based Image Retrieval (CBIR) system designed to search and retrieve visually similar images from the extensive Corel-1000 dataset. By leveraging advanced computer vision techniques and multiple feature extraction methods, it provides an intuitive web interface for high-precision visual similarity discovery.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-search-plus"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Multi-Method Extraction</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Supports RGB, HSV, and Lab color spaces with configurable histogram bins (up to 128) for varying levels of detail.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-ruler-combined"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Diverse Metrics</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Includes Swain-Ballard Intersection, Euclidean, Manhattan, and Chi-square distances for versatile similarity analysis.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-tachometer-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Pre-computed Engine</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Features an optimized backend using pre-calculated descriptors (descriptors.json) for sub-second retrieval times.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-bar"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Visual Scoring</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Real-time results with color-coded similarity indicators (Green/Yellow/Red) and interactive data tables.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Built with a professional Python stack optimized for computer vision and interactive data apps:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>OpenCV & NumPy:</strong> High-speed image processing and vector operations for efficient distance calculations.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Streamlit Engine:</strong> Modern reactive frontend for seamless image uploading and parameter configuration.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Plotly Integration:</strong> Advanced visualization for results distribution and similarity scoring trends.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj6_title: "Shifaa - Healthcare Hub",
        proj6_desc: "Managing complex relationships between patients, doctors, and treatments with high data integrity.",
        proj6_sol: "Developed a full-stack JavaFX desktop suite using DAOs for MySQL persistence and OpenPDF for medical reporting.",
        proj6_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Shifaa is a comprehensive healthcare management system built with JavaFX. It streamlines medical operations by providing a centralized desktop suite for managing user sessions, patient records, doctor schedules, and treatment tracking with robust data integrity and reporting capabilities.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-user-injured"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Patient Records</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Add, edit, and search complete patient profiles, maintaining high data integrity across medical histories.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-user-md"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Doctor & Appointments</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Manage doctor profiles, and schedule patient appointments with conflict prevention and tracking.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-pills"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Treatment Tracking</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Log and monitor patient treatments, prescriptions, and medical interventions securely.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-file-pdf"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">PDF Reporting</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Generate structured medical reports directly from the application data using OpenPDF.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Built utilizing <strong>Java 11+</strong> and the <strong>JavaFX 21</strong> framework for a native desktop experience, following solid design principles:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>DAO Pattern:</strong> Clean data access objects separating MySQL persistence logic from business logic.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Security & State:</strong> Secure login with persistent session management across UI controllers.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Build Automation:</strong> Managed entirely by Maven, handling dependencies like \`mysql-connector-java\` and \`openpdf\`.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj7_title: "Bayt Al Hikma - Library System",
        proj7_desc: "Designing a unified library engine with triple interface support (Web, Desktop, CLI) for complex book and member logic.",
        proj7_sol: "Built with Python, Streamlit, and Tkinter, featuring real-time data visualization and persistent file storage.",
        proj7_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Bayt Al Hikma is a modern library management system built with Python, offering seamless web-based, desktop, and CLI interfaces. Designed to streamline book lending, member management, and library operations, it provides librarians with flexible UI options and powerful data analytics.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-layer-group"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Triple Interface</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Freedom to choose between a modern Streamlit Web Interface, a native Tkinter Desktop GUI, or a traditional Command-Line console.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-book-reader"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Library Operations</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Complete book and member management with automated loan systems, availability tracking, and borrowing quota enforcements.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-pie"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Visual Analytics</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Real-time statistics dashboard featuring genre distribution charts, popular author rankings, and monthly borrowing trends using Matplotlib & Seaborn.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-history"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Audit Trail</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Comprehensive activity feed and historical logging ensuring full traceability for all lending and return operations.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Engineered in <strong>Python 3.7+</strong> using modern data tools, the system is designed with a clear separation of logic and presentation:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Data Processing:</strong> Utilizes <code>Pandas</code> for robust manipulation and filtering of library databases.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Data Persistence:</strong> Text and CSV file-based persistence (<code>livres.txt</code>, <code>historique.csv</code>) ensures lightweight data portability without a database server.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Error Handling:</strong> Custom Python exception classes (e.g. <code>LivreIndisponibleError</code>, <code>QuotaEmpruntDepasseError</code>) cleanly manage edge cases and business rules.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj_portfolio_title: "Interactive Digital Portfolio",
        proj_portfolio_desc: "Designing a high-performance, multilingual hub with immersive animations and real-time localized content.",
        proj_portfolio_sol: "Built with Vanilla JS and GSAP, featuring custom carousels and smooth scroll-driven visuals.",
        proj_portfolio_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    This Interactive Digital Portfolio is a high-performance hub designed to showcase technical mastery through immersive user experiences. It transcends the static nature of traditional portfolios by integrating advanced animation physics, real-time localized state management, and custom-engineered visuals that respond to every user interaction.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-cube"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Orbital Motion System</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">A custom CSS/JS orbital system featuring revolving dynamic text paths and multi-layered perspective shifts.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-globe"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Real-time Localization</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Dynamic I18next integration for seamless switching between English and French without page reloads.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-mouse-pointer"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Reactive Cursor Lab</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Advanced pointer-tracking physics and magnetic button effects powered by GSAP.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-mobile-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Fluid Responsiveness</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Sophisticated CSS Grid and Flexbox layouts that adapt to all screen sizes while maintaining visual depth.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Optimized for performance and aesthetic excellence using a modern frontend architecture:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Vanilla JS & GSAP:</strong> Zero-dependency core logic with GSAP ScrollTrigger for orchestrated cinematic sequences.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Modular CSS System:</strong> Pure Vanilla CSS with advanced variables (Design Tokens) for a cohesive and dynamic theme engine.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Lighthouse Optimized:</strong> High-performance assets, semantic HTML5, and optimized rendering loops for 95+ performance scores.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj_amee_title: "eCongé AMEE - HR Management",
        proj_amee_desc: "Modernizing HR workflows for a government agency by automating leave tracking and document management.",
        proj_amee_sol: "Developed a full-stack PHP/MySQL portal with automated email notifications, interactive calendars, and admin analytics.",
        proj_afriqai_title: "AfriqAI Feedback Analyzer",
        proj_afriqai_desc: "A specialized AI module integrated into the AfriqAI ecosystem for real-time feedback analysis and platform maintenance.",
        proj_afriqai_sol: "Developed a FastAPI (Python) microservice module while managing the core Spring Boot 3.4 application maintenance.",
        proj_afriqai_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Module Overview
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    The Feedback Analyzer is a critical module added to the <strong>AfriqAI</strong> web application. It automates the processing of participant feedback using an independent AI microservice, while ensuring the underlying event management platform remains robust through continuous maintenance and optimization.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-tools"></i> Maintenance & Evolution
                </h3>
                <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-sync" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Legacy Support:</strong> Ongoing maintenance of the Spring Boot 3.4 core to ensure stability and security across the entire ecosystem.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-puzzle-piece" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Modular Integration:</strong> Designed as a separate microservice to allow for feature expansion without disrupting existing event workflows.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core AI Features
                </h3>
                <div style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); display: grid; gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-brain"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Sentiment Analysis</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Real-time classification of feedback into POSITIVE, NEGATIVE, or NEUTRAL categories via advanced Generative AI.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-tags"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Smart Categorization</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Automatic sorting of feedback into LOGISTICS, SPEAKER, or CONTENT themes for targeted reporting.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Architecture
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">A polyglot microservice stack optimized for maintainability:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Spring Boot & Java 21:</strong> Core platform handling security (JWT) and centralized persistence via PostgreSQL 15.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>FastAPI & Python 3.11:</strong> High-performance AI microservice for trilingual analysis (FR/EN/ES).</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj_amee_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    eCongé AMEE is a comprehensive web application developed to digitize and optimize the leave management process for the Moroccan Agency for Energy Efficiency. It centralizes the submission, validation, and tracking of leave requests, providing a dedicated Employee Space for managing requests and an advanced HR Space for supervising leaves, sick days, and staff balances.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-user-clock"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Employee Portal</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Intuitive dashboard for submitting leave requests with automatic calculation of working days, excluding weekends and holidays.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-users-cog"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">HR Management Hub</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Comprehensive tools for validating requests, tracking sick leaves with medical certificates, and managing the personnel hierarchy.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-pie"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Interactive Analytics</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Real-time charts and dashboards utilizing Chart.js to monitor leave distributions, monthly trends, and absenteeism indicators.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-file-export"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Automated Reports</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Generation and export of detailed leave summaries and official documents in Word and Excel formats.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Built natively in <strong>PHP 8</strong> using an <strong>MVC architecture</strong> for robust separation of concerns, ensuring maintainability and scalability:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Security First:</strong> Implemented prepared SQL statements, XSS/CSRF protections, and secure password hashing.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Responsive Frontend:</strong> Crafted with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript (ES6+) for a seamless cross-device experience.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Advanced Integrations:</strong> Utilized Composer for dependency management, incorporating PHPMailer for automated notifications, and PhpSpreadsheet/PhpWord for dynamic document generation.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        sec_certs: "Validated Expertise",
        cert_docker_title: "Docker Essentials",
        cert_docker_desc: "In-depth understanding of Docker containers, images, layering, and container orchestration workflows.",
        cert1_title: "Relational Database",
        cert1_desc: "Mastery of SQL, PostgreSQL, and relational data modeling through advanced project implementation.",
        cert2_title: "Java (Basic)",
        cert2_desc: "Demonstrated proficiency in core Java concepts, including data structures, inheritance, and algorithmic logic.",
        cert3_title: "DevOps 101",
        cert3_desc: "Understanding DevOps principles, CI/CD pipelines, and infrastructure operations.",
        cert4_title: "SQL Intermediate",
        cert4_desc: "Advanced SQL queries, subqueries, and database optimization.",
        cert5_title: "Prompt Engineering",
        cert5_desc: "Mastering prompt design, few-shot learning, and interaction strategies with Large Language Models.",
        cert_java_inter_title: "Java Intermediate",
        cert_java_inter_desc: "Mastery of advanced OOP (inheritance, abstraction, interfaces), the Collections Framework, Exception Handling, Multithreading & Concurrency, and File I/O.",
        cert_agentic_title: "Agentic Workflows",
        cert_agentic_desc: "Designing autonomous AI systems using agentic patterns (Reflection, Planning, Multi-Agent), Tool Use & Function Calling, and LLM workflow evaluation.",
        cert_show: "Show Credential",
        sec_contact: "Get in Touch",
        contact_prompt: "Have a question, a project, or just want to say hi? I'd love to hear from you.",
        form_name: "Full Name",
        form_email: "Your Email Address",
        form_msg: "Your message...",
        form_send: "Execute Send",
        form_sending: "Sending...",
        form_success: "Mission Accomplished!",
        footer_copy: "&copy; 2026 SALMA BARRAK | Learning every day. Sharing projects as I grow.",
        resume_title: "Curriculum Vitae",
        resume_download: "Download",
        confirm_title: "Ready to send?",
        confirm_subtitle: "Your message will be delivered to Salma Barrak.",
        confirm_cancel: "Cancel",
        confirm_send: "Confirm & Send",
        confirm_name: "Name",
        confirm_email: "Email",
        confirm_msg: "Message",
        soft_communication: "Communication",
        soft_teamwork: "Teamwork",
        soft_problem_solving: "Problem Solving",
        soft_adaptability: "Adaptability",
        soft_agile: "Agile",
        soft_scrum: "Scrum",
        soft_jira: "Jira",
        contact_email_label: "Email",
        contact_phone_label: "Phone",
        lang_label: "Languages",
        lang_arabic: "Arabic (Native)",
        lang_french: "French (B2)",
        lang_english: "English (C1)",
        quote_text: "\"And my success can only come from Allah.\"",
        vol_btn_n8n: "n8n Workflows",
        vol_btn_certs: "View Certificates",
        gallery_n8n_title: "n8n Workflows",
        gallery_n8n_desc: "Here are some of the automated data pipelines and logic flows I engineered using n8n for our workshops:",
        gallery_cert_title: "Volunteer Certificates",
        gallery_cert_desc: "Certifications of appreciation and achievement from the Oriental Science House.",
        gallery_events_title: "Events Gallery",
        gallery_events_desc: "A showcase of large-scale club events and high-stakes technical competitions I attended or orchestrated.",
        vol_btn_events: "View Event Gallery",
        stat_projects: "11+ Engineering Projects",
        stat_certs: "8 Validated Certifications",
        stat_techs: "15+ Technologies Mastered",
        stat_intern: "1 Professional Internship",
        cli_intro: "Type 'help' to see available commands. Welcome to Salma's Interactive Lab.",
        cli_help_title: "Available commands:",
        cli_help_whoami: "A quick introduction",
        cli_help_status: "Check current availability",
        cli_help_skills: "View my technical expertise",
        cli_help_projects: "List featured applications",
        cli_help_ls: "More detail (e.g. 'ls stockify')",
        cli_help_contact: "Get contact info",
        cli_help_clear: "Wipe terminal screen",
        cli_help_exit: "Close terminal session",
        cli_whoami: "Software Engineering student at ENSA Oujda, passionate about software development & IA. Currently seeking a 1-2 month PFA internship (from July 1st) to apply my skills in architecture and automation. I write logic that scales and build systems that matter—always a student, even when building.",
        cli_status: "Available for a 1-2 month PFA Internship starting July 1st, 2026. Looking for opportunities in Backend, Full-Stack, or AI Development.",
        cli_skills: "Core: Java, Python, JavaScript, PHP.\\nArchitectural Focus: Spring Boot, Symfony 7, FastAPI, Docker, PostgreSQL, n8n.",
        cli_projects: "Notable work: Jira Clone Pro, Chatbot-mso, Stockify, Soukify Marketplace, Tech Quiz Pro, Vision Security Engine.",
        cli_ls_usage: "Usage: ls <project> (Try: jira, chatbot, stockify, soukify, quiz, portfolio)",
        cli_not_found: "Command not found: {cmd}. Type 'help' for options.",
        cli_exit: "Closing session...",
        cli_contact: "Email: salmabarrak26@gmail.com | LinkedIn: /in/salma-barrak | location: Morocco",
        cli_ls_jira: "Jira Clone Pro | High-performance task management with real-time API integrity.\\n- Stack: Spring Boot, React, PostgreSQL, Mockito/JUnit.",
        cli_ls_chatbot: "Chatbot-mso | Multilingual Gov RAG System for administrative automation.\\n- Stack: FastAPI, Vite, Hugging Face LLMs, Tesseract OCR.",
        cli_ls_stockify: "Stockify - Inventory Hub | Sub-second analytical data pipeline for stock volatility.\\n- Stack: Symfony 7, Doctrine, PHP, MySQL, CSS3.",
        cli_ls_soukify: "Soukify Marketplace | Geolocation-integrated mobile Android app with complex interactions.\\n- Stack: Java, Android SDK, Firebase, MVVM Pattern.",
        cli_ls_quiz: "Tech Quiz Pro | High-performance IT quiz engine with 350+ tracks & analytics.\\n- Stack: Java, Room Database, MVVM Architecture.",
        cli_ls_portfolio: "Interactive Portfolio | Custom interactive developer showcase with real-time localization.\\n- Stack: Vanilla JS, Three.js, GSAP, High-End CSS3.",
        proj_stockify_title: "Stockify - Inventory Hub",
        proj_stockify_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-boxes"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Stockify is a professional, high-performance inventory management system built to handle complex stock volatility. It provides a comprehensive suite of tools for tracking products, automated transaction logging, and real-time analytical dashboards.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-microchip"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-tachometer-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Analytical Dashboard</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Real-time overview of inventory status, including low-stock alerts and movement metrics.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-history"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Transaction Ledger</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Automated history of every stock change (RESTOCK, DONATION) for full accountability.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-shield-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">RBAC Security</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Role-based access control (Admin/User) to secure critical inventory operations.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-hand-holding-heart"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Donation Workflow</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Specialized tracking for stock removal intended for social contributions.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-layer-group"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Built with <strong>Symfony 7</strong> and <strong>PHP 8.2</strong>, prioritizing sub-second data processing and relational integrity:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Doctrine ORM:</strong> Complex relational mapping and optimized database queries.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>TailwindCSS:</strong> Modern, responsive interface built with utility-first CSS.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj_soukify_title: "Soukify - Marketplace",
        proj_soukify_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Project Vision
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Soukify is a comprehensive mobile application designed to promote and sell Moroccan handicrafts. It bridges the gap between traditional artisans and digital consumers by providing a dedicated e-commerce platform with smart geolocation, direct artisan-client chat, and an ecosystem that preserves cultural heritage while empowering local creators.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Core Features
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-map-marked-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Geo-Discovery</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Built with OpenStreetMap (osmdroid) to discover artisan workshops by proximity without relying on costly APIs.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-line"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Artisan Hub</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Complete store management allowing artisans to add products, manage stock, and view performance analytics.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-comments"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Real-time Chat</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Integrated chat connecting buyers and sellers directly, powered by Firebase and push notifications.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-cloud-upload-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Media Optimization</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Adaptive image compression via Cloudinary for fast loading even on limited 3G networks.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Technical Blueprint
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Built natively in <strong>Java</strong> using the <strong>MVVM pattern</strong> for robust separation of concerns. The architecture leverages a hybrid sync strategy:</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Firebase Ecosystem:</strong> Real-time database synchronization, authentication, and cloud functions.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>NoSQL Storage:</strong> Firestore for flexible, hierarchical artisanal product data.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Offline Capability:</strong> SharedPreferences and Room-inspired patterns for resilient data access.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        revolving_text: "BUILD • AUTOMATÉ • LEARN • DEPLOY • SOLVE • INNOVATE • BUILD • AUTOMATÉ • LEARN •"
    },
    fr: {
        nav_intro: "Intro",
        nav_edu: "Éducation",
        nav_journey: "Parcours",
        nav_volunteer: "Bénévolat",
        nav_stack: "Kit",
        nav_work: "Projets",
        nav_certs: "Certifs",
        nav_contact: "Contact",
        hero_status: "Recherche de stage PFA 1-2 mois • Début 01/07",
        hero_status_p1: "RECHERCHE UN STAGE PFA DE 1-2 MOIS",
        hero_status_p2: "DÉBUT LE 01/07",
        hero_status_ready: "STATUT: DISPONIBLE",
        hero_subtitle: "Étudiante en génie informatique à l'Ensa Oujda",
        hero_desc: "Passionnée par la création d'<span>applications complètes et stimulantes</span> — de la logique de l'ombre aux interfaces que les gens utilisent réellement. J'aime tout le processus de création de logiciels : <span>comprendre un problème</span>, réfléchir à une solution et lui donner vie de manière <span>soignée et réfléchie</span>. J'explore constamment de <span>nouvelle technologies</span> et je cherche toujours à progresser à travers des <span>projets concrets</span> qui font la différence.",
        hero_cta_projects: "Voir Projets",
        hero_cta_resume: "Mon CV",
        resume_title: "Curriculum Vitae",
        resume_download: "Télécharger",
        resume_file: "assets/docs/Resumes/Resume_fr.pdf",
        resume_name: "Salma_Barrak_Resume_FR.pdf",
        sec_edu: "Fondation Académique",
        edu_tab_eng: "Ingénierie",
        edu_tab_bac: "Baccalauréat",
        edu_item1_title: "Diplôme d'Ingénieur en Informatique (Option IA)",
        edu_item1_org: "École Nationale des Sciences Appliquées - Oujda (ENSAO)",
        edu_item1_date: "2021 - 2027 (Prévu)",
        edu_item1_desc: "<li>Approfondissement en Génie Informatique, IA et Systèmes Distribués.</li><li>Rang actuel : Étudiante en 4ème année.</li>",
        edu_item2_title: "Baccalauréat en Sciences Mathématiques A",
        edu_item2_org: "Lycée Hassan Ibn Tabit - Zaio",
        edu_item2_date: "2020 - 2021",
        edu_item2_desc: "<li>Diplômée avec mention \"Bien\".</li><li>Focus sur les Mathématiques Avancées et la Physique.</li>",
        sec_exp: "Parcours Professionnel",
        exp_item1_title: "Stagiaire Développeur Full-Stack",
        exp_item1_org: "AMEE - Rabat",
        exp_item1_date: "07/2025 - 08/2025",
        exp_item1_desc: "<li>Conception d'une application RH avec tableaux de bord en temps réel.</li><li>Automatisation des flux de documents.</li><li>Stack : PHP, MySQL, JavaScript.</li>",
        exp_btn_cert: "Voir le Certificat",
        sec_volunteer: "Impact & Bénévolat",
        vol_item1_title: "Mentor & Animateur d'Atelier",
        vol_item1_org: "Maison de Sciences de l'Oriental",
        vol_item1_date: "09/2024",
        vol_item1_desc: "<li>Ateliers immersifs en IA, Deep Learning et automatisation n8n.</li><li>Conception de maquettes physiques pour vulgariser des théories complexes auprès des jeunes.</li>",
        vol_item2_title: "Organisation Technique",
        vol_item2_org: "Club GI ENSAO",
        vol_item2_date: "09/2024",
        vol_item2_desc: "<li>Organisation d'événements et de compétitions techniques.</li><li>Rédaction de contenus techniques et promotionnels pour le club.</li><li>Mentorat des étudiants plus jeunes, les guidant à travers les défis techniques et l'intégration au club.</li>",
        sec_tech: "Kit d'Ingénierie",
        tech_cat1: "Langages",
        tech_cat2: "Frameworks & Bibliothèques",
        tech_cat3: "Capital Humain",
        tech_cat4: "Outils de Dev & IDEs",
        tech_cat5: "IA & Data Science",
        tech_cat6: "Bases de données & Infrastructure",
        tech_cat7: "Agile & Gestion de Projet",
        tech_cat8: "Soft Skills",
        tech_cat_db: "Bases de Données",
        tech_cat_sys: "Infrastructure",
        tech_cat_ai: "Intelligence Artificielle",
        tech_cat_data: "Science des Données",
        tech_ai_ml: "Machine Learning",
        tech_ai_dl: "Deep Learning",
        tech_ai_cv: "Vision par Ordinateur",
        tech_ai_sklearn: "Scikit-learn",
        tech_ai_pandas: "Pandas/NumPy",
        ide_explorer: "EXPLORATEUR",
        ide_workspace: "Espace de travail",
        ide_category: "catégorie",
        ide_stack: "technologies",
        ide_folder: "kit_ingenierie",
        file_lan: "langages.json",
        file_fw: "frameworks.json",
        file_db: "bases_donnees.json",
        file_sys: "infrastructure.json",
        file_ai: "ia_donnees.json",
        file_dev: "outils_dev.json",
        file_soft: "soft_skills.json",

        tech_cat_lan: "Langages",
        tech_cat_fw: "Frameworks & Bibliothèques",
        tech_cat_sys_net: "Systèmes & Réseaux",
        tech_docker: "Docker (Conteneurs)",
        tech_vms: "Machines Virtuelles",
        tech_sysadmin: "Administration Système",
        tech_net: "Base Réseaux",
        tech_cat_ides: "ides_environnements",
        tech_cat_versioning: "versioning_apis",
        tech_cat_testing: "tests_qa",
        tech_cat_design: "conception_architecture",
        soft_agile: "Agile",
        soft_scrum: "Scrum",
        soft_jira: "Jira",
        soft_communication: "Communication",
        soft_teamwork: "Travail d'équipe",
        soft_problem_solving: "Résolution de problèmes",
        soft_adaptability: "Adaptabilité",
        lang_label: "Langues",
        lang_arabic: "Arabe (Natif)",
        lang_french: "Français (B2)",
        lang_english: "Anglais (C1)",

        sec_projects: "Réalisations",
        proj_challenge: "Défi :",
        proj_solution: "Solution :",
        proj_btn_details: "Voir Détails",
        proj_source: "Source",
        proj_coming_soon: "Bientôt disponible",
        filter_all: "Tous",
        filter_web: "Web Apps",
        filter_ai: "IA & ML",
        filter_mobile: "Mobile",
        filter_desktop: "Desktop",
        filter_dev: "Développement",
        filter_infra: "DevOps & Cloud",
        filter_db: "Bases de données",
        proj1_title: "Jira Clone Pro",
        proj1_desc: "Construction d'un backend robuste pour la gestion de tâches en temps réel.",
        proj1_sol: "Mise en œuvre d'une couverture de test élevée (Mockito/JUnit) et d'une architecture PostgreSQL.",
        proj1_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Vision du Projet
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Jira Clone Pro est un backend de gestion de projet de haute intégrité conçu pour refléter les capacités de flux de travail complexes des outils Agile d'entreprise. Il se concentre sur une cohérence absolue des données, des transitions de tâches en temps réel et une architecture API RESTful strictement appliquée pour garantir un environnement de développement évolutif et prévisible.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques Clés
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-tasks"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Cycle de Vie Agile</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Gestion complète des epics, stories et tâches avec des transitions pilotées par état et des hiérarchies de priorité.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-vial"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Excellence TDD</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Développement piloté par les tests (TDD) strict avec Mockito et JUnit, garantissant une couverture de 90%+.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-database"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Intégrité Relationnelle</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Schéma PostgreSQL optimisé utilisant des index avancés et des contraintes pour des performances de requête ultra-rapides.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-project-diagram"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Schéma RESTful</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Conception API conforme au niveau 3 HATEOAS avec gestion des erreurs robuste et enveloppes de réponse standardisées.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Schéma Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Construit avec l'écosystème Spring pour une fiabilité d'entreprise et des standards réactifs modernes :</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Spring Boot 3 & Data JPA :</strong> Utilisation de Hibernate pour un mapping objet-relationnel efficace et la gestion des transactions.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Sécurité & JWT :</strong> Couche d'authentification sans état garantissant des communications sécurisées entre le frontend et l'API.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Maven & CI/CD :</strong> Pipelines de build standardisés avec des tests de qualité automatisés et scan de vulnérabilités.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        stockify_title: "Stockify - Hub d'Inventaire",
        stockify_desc: "Un système de gestion d'inventaire professionnel construit avec Symfony 7.4 pour le suivi des produits et des stocks.",
        stockify_sol: "Utilisation de Symfony 7, Doctrine ORM et TailwindCSS 4 pour créer un pipeline de données analytiques rapide.",
        stockify_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Vision du Projet
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Stockify est un système professionnel de gestion d'inventaire haute performance conçu pour apporter une profondeur analytique ultra-rapide au suivi des stocks. Construit avec une stack PHP moderne, il offre aux entreprises une suite robuste d'outils pour gérer la volatilité des produits, automatiser les cycles de réapprovisionnement et maintenir une responsabilité totale grâce à un audit détaillé des transactions.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques Clés
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-line"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Tableau de Bord Analytique</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Aperçu en temps réel de la santé de l'inventaire, avec alertes automatiques de stock faible et indicateurs de performance clés.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-exchange-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Opérations de Stock</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Flux de travail spécialisés pour les réapprovisionnements et les dons, garantissant que chaque mouvement est enregistré avec précision.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-history"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Registre des Transactions</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Un historique permanent et immuable de tous les changements de stock pour une transparence totale et un audit simplifié.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-user-shield"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Sécurité RBAC</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Contrôle d'accès basé sur les rôles avec activation sécurisée des comptes, gestion des profils et sécurité des sessions.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Schéma Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Architecturé avec un focus sur l'intégrité des données et la haute performance via le framework Symfony :</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Symfony 7.4 + Doctrine :</strong> Utilisation du mapping ORM avancé et optimisation des requêtes analytiques ultra-rapides.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>TailwindCSS 4.x :</strong> Interface mobile-first conçue sur mesure, optimisée pour une navigation rapide sur tous les appareils.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>UX Turbo & Stimulus :</strong> Intégration de composants JavaScript modernes pour des transitions de page fluides sans rechargement.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj3_title: "Soukify - Marketplace",
        proj3_desc: "Combler le fossé entre les artisans marocains traditionnels et les consommateurs digitaux, tout en gérant la géolocalisation, le chat en temps réel et des catalogues riches en médias.",
        proj3_sol: "Architecturé avec SDK Android et Firebase via le pattern MVVM.",
        proj3_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Vision du Projet
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Soukify est une application mobile complète conçue pour promouvoir et vendre l'artisanat marocain. Elle comble le fossé entre les artisans traditionnels et les consommateurs numériques en offrant une plateforme de commerce électronique dédiée avec géolocalisation intelligente, chat direct artisan-client et un écosystème qui préserve l'héritage culturel tout en autonomisant les créateurs locaux.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques Clés
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-map-marked-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Géo-Découverte</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Construit avec OpenStreetMap (osmdroid) pour découvrir les ateliers d'artisans par proximité sans dépendre d'API coûteuses.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-line"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Hub Artisan</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Gestion complète de la boutique permettant aux artisans d'ajouter des produits et de consulter les analyses.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-comments"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Chat Temps Réel</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Chat intégré reliant directement acheteurs et vendeurs, propulsé par Firebase et notifications push.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-cloud-upload-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Optimisation Média</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Compression d'image adaptative via Cloudinary pour un chargement rapide même sur les réseaux 3G.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Schéma Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Développé pour l'écosystème Android avec un focus sur la scalabilité et l'engagement utilisateur :</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Java & MVVM :</strong> Séparation propre des responsabilités assurant un codebase mobile testable et maintenable.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Backend Firebase :</strong> Utilisation de la base de données temps réel et de l'authentification pour des interactions fluides.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>API OpenStreetMap :</strong> Fournit des fonctionnalités de cartographie avancées avec zéro coût de licence et haute personnalisation.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj_chatbot_title: "Chatbot-mso - Assistant Admin",
        proj_chatbot_desc: "Un chatbot IA multilingue qui répond aux questions des citoyens sur les procédures administratives marocaines en arabe, français et darija.",
        proj_chatbot_sol: "Moteur full-stack FastAPI + Vite alimenté par les LLMs Hugging Face, une base vectorielle locale, OCR Tesseract et Docker.",
        proj_chatbot_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Vision du Projet
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Chatbot-mso est un chatbot RAG full-stack qui rend les procédures administratives marocaines instantanément accessibles — en arabe, français et darija. Les citoyens peuvent poser des vraies questions comme <em>"Comment obtenir un extrait d'acte de naissance ?"</em> ou <em>"كيف أحصل على جواز السفر البيومتري؟"</em> et recevoir des réponses précises issues d'une base de connaissances vectorielle locale.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques Clés
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-language"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">RAG Trilingue</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Traite les questions des citoyens en arabe, français et darija grâce à une base vectorielle locale pour une récupération sémantique précise.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-file-image"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">OCR sur Image</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Les utilisateurs peuvent uploader des images de documents officiels ; le backend extrait le texte via Tesseract OCR et l'injecte dans le contexte du LLM.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-exchange-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Backend LLM Interchangeable</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Par défaut sur le Hugging Face Router ; basculez vers OpenAI via une seule variable d'environnement et un échange d'import modulaire.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-shipping-fast"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Déploiement Docker Unifié</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Un seul script <code>start.sh</code> construit le pipeline de données si nécessaire, puis lance tous les conteneurs — frontend sur :8080, backend sur :8000.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Schéma Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Construit comme un pipeline IA modulaire et conteneurisé avec une séparation nette entre récupération, inférence et présentation :</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>FastAPI + Vite :</strong> Backend Python asynchrone couplé à un frontend Vite ultra-rapide pour des interactions UI en moins d'une seconde.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Base Vectorielle Locale :</strong> Embeddings pré-construits (téléchargeables) permettant une récupération instantanée sans reconstruire un pipeline de 2 heures.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Hugging Face Router :</strong> Appels LLM via l'API d'inférence HF, avec un pattern <code>llm_service</code> modulaire permettant une migration OpenAI sans friction.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj4_title: "Vision Security Engine",
        proj4_desc: "Soustraction de fond pour la capture de mouvement en temps réel.",
        proj4_sol: "Pipeline basé sur OpenCV en Python avec visualisation Streamlit.",
        proj4_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Vision du Projet
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Vision Security Engine est un système de détection de mouvement en temps réel haute performance conçu pour la surveillance avancée et la capture de mouvement. Il exploite des algorithmes de soustraction de fond de pointe pour isoler le mouvement des arrière-plans complexes, offrant aux professionnels de la sécurité un outil configurable et interactif pour les flux en direct et les médias enregistrés.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques Clés
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-video"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Modes d'Entrée Duo</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Traitez de manière fluide des fichiers vidéo haute définition ou connectez-vous à des flux webcam en direct pour une surveillance en temps réel.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-brain"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Triple Moteur de Détection</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Choisissez entre MOG2 (Mélange de Gaussiennes), KNN (K-Plus Proches Voisins) ou Frame Differencing selon les conditions d'éclairage.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-columns"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Interface Quadruple Vue</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Quatre vues simultanées : flux original, masque de mouvement binaire, objets extraits et suivi par boîtes englobantes.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-line"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Télémétrie en Direct</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Métriques de performance en temps réel incluant le suivi du FPS, le nombre d'objets et les barres de progression.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Schéma Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Conçu avec une architecture Python modulaire optimisée pour les tâches de vision par ordinateur à faible latence :</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Pipeline OpenCV :</strong> Opérations morphologiques avancées et seuillage binaire pour la réduction du bruit et la détection d'ombres.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Conception Orientée Objet :</strong> Structure de classes hautement modulaire avec des processeurs spécialisés pour les fichiers et les flux de données.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Dashboard Streamlit :</strong> Une interface web réactive pour le réglage dynamique des paramètres (seuils de variance, tailles de noyau).</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj_quiz_title: "Tech Quiz Pro : IT Mastery Edition",
        proj_quiz_desc: "Une application de quiz Android haute performance conçue pour les développeurs et les professionnels de l'informatique.",
        proj_quiz_sol: "Développé en Java avec MVVM, Room Database pour la persistance locale et un moteur d'analyse 'System Build'.",
        proj_quiz_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Vision du Projet
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Tech Quiz Pro est une application Android de niveau professionnel conçue pour tester et maîtriser la profondeur technique sur 8 parcours informatiques spécialisés. Elle combine une esthétique premium "Console IT" avec un moteur de données haute performance pour offrir aux développeurs une évaluation rigoureuse de leur 'stabilité système' dans diverses technologies.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques Clés
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-terminal"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">8 Parcours Spécialisés</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Maîtrisez plus de 350 défis sur HTML5, CSS3, JS (ES6+), Java, SQL, Git, Informatique Générale et Cybersécurité.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-stopwatch"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Marathons Techniques</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Sessions de 50 questions conçues pour simuler des entretiens techniques intenses et tester votre endurance.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-microchip"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Analyse de Build Système</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Résumés post-quiz présentés comme un 'Journal de Build' avec points de compilation et détection d'erreurs.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-palette"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Esthétique Console IT</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Interface Glassmorphism premium avec accents néon-cyan, composants flottants et mode sombre dédié.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Schéma Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Construit avec une architecture Android moderne pour garantir haute performance et intégrité des données :</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>MVVM + LiveData :</strong> Gestion d'état robuste garantissant des mises à jour réactives de l'interface.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Persistance Room :</strong> Insertion par lots atomiques des questions pour un accès hors ligne ultra-rapide.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Moteur Dynamique :</strong> Gestion des actifs JSON pour les données localisées et Retrofit 2 pour les API fallbacks.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj5_title: "QueryPix - CBIR System",
        proj5_desc: "Un système moderne de recherche d'images par le contenu (CBIR) conçu pour rechercher et récupérer des images similaires.",
        proj5_sol: "Développement d'un moteur de recherche par similitude utilisant OpenCV, NumPy et Scikit-learn avec une interface Streamlit.",
        proj5_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Vision du Projet
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    QueryPix est un système moderne de recherche d'images par le contenu (CBIR) conçu pour rechercher et récupérer des images visuellement similaires dans l'important Dataset Corel-1000. En exploitant des techniques avancées de vision par ordinateur et plusieurs méthodes d'extraction de caractéristiques, il offre une interface web intuitive pour une découverte de similitudes visuelles de haute précision.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques Clés
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-search-plus"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Extraction Multi-Méthodes</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Supporte les espaces colorimétriques RGB, HSV et Lab avec des bacs d'histogramme configurables (jusqu'à 128) pour différents niveaux de détail.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-ruler-combined"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Métriques Diversifiées</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Inclut l'intersection Swain-Ballard, les distances Euclidienne, Manhattan et Chi-carré pour une analyse de similitude polyvalente.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-tachometer-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Moteur Pré-calculé</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Dispose d'un backend optimisé utilisant des descripteurs pré-calculés (descriptors.json) pour des temps de récupération inférieurs à la seconde.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-bar"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Scoring Visuel</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Résultats en temps réel avec indicateurs de similitude par code couleur (Vert/Jaune/Rouge) et tableaux de données interactifs.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Schéma Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Construit avec une stack Python professionnelle optimisée pour la vision par ordinateur et les applications de données interactives :</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>OpenCV & NumPy :</strong> Traitement d'image ultra-rapide et opérations vectorielles pour des calculs de distance efficaces.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Moteur Streamlit :</strong> Frontend réactif moderne pour le téléchargement d'images et la configuration des paramètres sans couture.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Intégration Plotly :</strong> Visualisation avancée pour la distribution des résultats et les tendances des scores de similitude.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj6_title: "Shifaa - Healthcare Hub",
        proj6_desc: "Gestion des relations complexes entre patients, médecins et traitements.",
        proj6_sol: "Suite desktop JavaFX avec DAOs pour la persistance MySQL et rapports médicaux via OpenPDF.",
        proj6_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Vision du Projet
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Shifaa est un système complet de gestion de la santé construit avec JavaFX. Il simplifie les opérations médicales en fournissant une suite desktop centralisée pour la gestion des sessions utilisateurs, des dossiers patients, des plannings médicaux et du suivi des traitements, avec une intégrité des données et des capacités de reporting robustes.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques Clés
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-user-injured"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Dossiers Patients</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Ajout, édition et recherche de profils patients complets, tout en maintenant une haute intégrité des antécédents médicaux.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-user-md"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Médecins & RDV</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Gestion des profils des médecins et planification des rendez-vous avec prévention des conflits.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-pills"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Suivi des Traitements</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Enregistrement et suivi sécurisé des traitements, prescriptions et interventions médicales.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-file-pdf"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Rapports PDF</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Génération de rapports médicaux structurés directement depuis les données de l'application avec OpenPDF.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Schéma Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Construit avec <strong>Java 11+</strong> et le framework <strong>JavaFX 21</strong> pour une expérience desktop native, en suivant des principes de conception solides :</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Pattern DAO :</strong> Séparation propre de la logique d'accès aux données MySQL de la logique métier.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Sécurité & État :</strong> Connexion sécurisée avec gestion de session persistante entre les contrôleurs UI.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Automatisation :</strong> Gestion intégrale par Maven, incluant les dépendances \`mysql-connector-java\` et \`openpdf\`.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj7_title: "Bayt Al Hikma - Gestion de Bibliothèque",
        proj7_desc: "Conception d'un moteur de bibliothèque unifié avec triple interface (Web, Desktop, CLI) pour la gestion d'emprunts.",
        proj7_sol: "Développement en Python avec Streamlit et Tkinter, intégrant des visualisations de données en temps réel.",
        proj7_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Vision du Projet
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Bayt Al Hikma est un système moderne de gestion de bibliothèque construit avec Python, offrant des interfaces web, desktop et en ligne de commande. Conçu pour rationaliser le prêt de livres, la gestion des membres et les opérations de la bibliothèque, il offre aux bibliothécaires des options d'interface flexibles et des analyses de données puissantes.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques Clés
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-layer-group"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Triple Interface</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Liberté de choisir entre une interface web moderne Streamlit, une GUI desktop native Tkinter, ou une console traditionnelle en ligne de commande.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-book-reader"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Opérations de Bibliothèque</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Gestion complète des livres et des membres avec systèmes de prêt automatisés, suivi des disponibilités et application des quotas d'emprunt.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-pie"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Analytique Visuelle</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Tableau de bord de statistiques en temps réel avec graphiques de répartition par genre, classements des auteurs et tendances mensuelles d'emprunt via Matplotlib & Seaborn.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-history"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Piste d'Audit</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Flux d'activités complet et journalisation historique assurant une traçabilité totale pour toutes les opérations de prêt et de retour.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Schéma Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Conçu en <strong>Python 3.7+</strong> avec des outils de données modernes, le système repose sur une séparation claire entre logique et présentation :</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Traitement de Données :</strong> Utilisation de <code>Pandas</code> pour une manipulation et un filtrage robustes des bases de données.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Persistance des Données :</strong> Sauvegarde basée sur des fichiers texte et CSV (<code>livres.txt</code>, <code>historique.csv</code>) assurant une portabilité légère sans serveur de base de données.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Gestion des Erreurs :</strong> Classes d'exceptions Python personnalisées (ex: <code>LivreIndisponibleError</code>) pour gérer proprement les règles métier et les cas particuliers.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj_portfolio_title: "Portfolio Digital Interactif",
        proj_portfolio_desc: "Conception d'un hub multilingue haute performance avec des animations immersives et un contenu localisé en temps réel.",
        proj_portfolio_sol: "Construit avec Vanilla JS et GSAP, avec des carrousels personnalisés et des visuels fluides pilotés par le défilement.",
        proj_portfolio_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Vision du Projet
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Ce portfolio digital interactif est un hub numérique haute performance conçu pour démontrer la maîtrise technique à travers des expériences utilisateur immersives. Il transcende la nature statique des portfolios traditionnels en intégrant une physique d'animation avancée, une gestion d'état localisée en temps réel et des visuels conçus sur mesure qui répondent à chaque interaction de l'utilisateur.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques Clés
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-cube"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Système Orbital de Mouvement</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Système orbital CSS/JS personnalisé avec des chemins de texte dynamiques tournants et des changements de perspective multi-couches.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-globe"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Localisation Réelle</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Intégration dynamique d'I18next pour un basculement fluide entre l'anglais et le français sans rechargement de page.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-mouse-pointer"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Labo Curseur Réactif</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Physique avancée de suivi du pointeur et effets de boutons magnétiques propulsés par GSAP.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-mobile-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Réactivité Fluide</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Layouts CSS Grid et Flexbox sophistiqués s'adaptant à toutes les tailles d'écran tout en maintenant la profondeur visuelle.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Schéma Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Optimisé pour la performance et l'excellence esthétique via une architecture frontend moderne :</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Vanilla JS & GSAP :</strong> Logique centrale sans dépendance avec GSAP ScrollTrigger pour des séquences cinématiques orchestrées.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Système CSS Modulaire :</strong> Utilisation avancée de variables CSS pour un moteur de thème cohérent et dynamique.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Optimisé Lighthouse :</strong> Assets haute performance, HTML5 sémantique et boucles de rendu optimisées pour des scores 95+.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj_amee_title: "eCongé AMEE - Gestion RH",
        proj_amee_desc: "Modernisation des flux RH pour une agence nationale en automatisant le suivi des congés et la gestion documentaire.",
        proj_amee_sol: "Développement d'un portail full-stack PHP/MySQL avec notifications par e-mail, calendrier interactif et dashboards RH.",
        proj_afriqai_title: "AfriqAI Feedback Analyzer",
        proj_afriqai_desc: "Module IA spécialisé intégré à l'écosystème AfriqAI pour l'analyse des feedbacks et la maintenance de la plateforme.",
        proj_afriqai_sol: "Développement d'un module microservice FastAPI (Python) et maintenance continue de l'application Spring Boot 3.4.",
        proj_afriqai_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Aperçu du Module
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Le Feedback Analyzer est un module critique ajouté à l'application web <strong>AfriqAI</strong>. Il automatise le traitement des retours participants via un microservice IA indépendant, tout en assurant la robustesse de la plateforme de gestion d'événements par une maintenance et une optimisation continues.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-tools"></i> Maintenance & Évolution
                </h3>
                <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-sync" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Support Legacy :</strong> Maintenance continue du cœur Spring Boot 3.4 pour garantir stabilité et sécurité sur tout l'écosystème.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-puzzle-piece" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Intégration Modulaire :</strong> Conçu comme un microservice séparé pour permettre l'ajout de fonctionnalités sans perturber les flux existants.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques IA
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-brain"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Analyse de Sentiment</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Classification en temps réel via des modèles de langage de pointe (POSITIF/NÉGATIF/NEUTRE).</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-tags"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Catégorisation</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Tri automatique par thèmes (LOGISTIQUE, INTERVENANT, CONTENU) pour des rapports ciblés.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Architecture Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Spring Boot & Java 21 :</strong> Gère la sécurité et la persistance centralisée.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>FastAPI & Python 3.11 :</strong> Microservice IA haute performance.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        proj_amee_modal_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Vision du Projet
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    eCongé AMEE est une application web complète développée pour dématérialiser et optimiser le processus de gestion des congés pour l'Agence Marocaine pour l'Efficacité Énergétique. Elle centralise la soumission, la validation et le suivi des demandes, offrant un Espace Employé dédié et un Espace RH avancé pour superviser les congés, les arrêts maladie et les soldes du personnel.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques Clés
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-user-clock"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Portail Employé</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Tableau de bord intuitif pour soumettre des demandes avec calcul automatique des jours ouvrables, excluant week-ends et jours fériés.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-users-cog"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Hub de Gestion RH</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Outils complets pour valider les demandes, suivre les arrêts maladie avec certificats, et gérer la hiérarchie du personnel.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-pie"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Analytique Interactive</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Graphiques en temps réel avec Chart.js pour surveiller la répartition des congés, les tendances mensuelles et l'absentéisme.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-file-export"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Rapports Automatisés</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Génération et export de récapitulatifs détaillés et documents officiels aux formats Word et Excel.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Schéma Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Construit nativement en <strong>PHP 8</strong> avec une <strong>architecture MVC</strong> pour une séparation robuste des responsabilités, assurant maintenabilité et scalabilité :</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Priorité Sécurité :</strong> Implémentation de requêtes SQL préparées, protections XSS/CSRF, et hachage sécurisé des mots de passe.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Frontend Responsive :</strong> Conçu avec HTML5, CSS3, Bootstrap 5, et JavaScript natif (ES6+) pour une expérience multi-appareils fluide.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Intégrations Avancées :</strong> Utilisation de Composer pour la gestion des dépendances, incluant PHPMailer pour les notifications, et PhpSpreadsheet/PhpWord pour la génération de documents.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        sec_certs: "Expertise Validée",
        cert_docker_title: "Docker Fondamentaux",
        cert_docker_desc: "Compréhension approfondie des conteneurs, des images, des couches Docker et de l'orchestration.",
        cert1_title: "Base de Données Relationnelle",
        cert1_desc: "Maîtrise de SQL, PostgreSQL et modélisation de données par la pratique de projets avancés.",
        cert2_title: "Java (Basique)",
        cert2_desc: "Compétences prouvées en Java : structures de données, héritage et logique algorithmique.",
        cert3_title: "DevOps 101",
        cert3_desc: "Compréhension des principes DevOps, des pipelines CI/CD et des opérations d'infrastructure.",
        cert4_title: "SQL Intermédiaire",
        cert4_desc: "Requêtes SQL avancées, sous-requêtes et optimisation de bases de données.",
        cert5_title: "Prompt Engineering",
        cert5_desc: "Maîtrise de la conception de prompts, du few-shot learning et des stratégies d'interaction avec les LLMs.",
        cert_java_inter_title: "Java Intermédiaire",
        cert_java_inter_desc: "Maîtrise de la POO avancée (héritage, abstraction, interfaces), du Framework Collections, de la gestion des exceptions, du multithreading & concurrence, et des entrées/sorties fichiers.",
        cert_agentic_title: "Workflows Agentiques",
        cert_agentic_desc: "Conception de systèmes IA autonomes avec les patterns agentiques (Réflexion, Planification, Multi-Agents), l'appel d'outils & Function Calling, et l'évaluation de workflows LLM.",
        cert_show: "Voir Diplôme",
        sec_contact: "Contactez-moi",
        contact_prompt: "Une question, un projet ou simplement un message ? Je serais ravie d'échanger avec vous.",
        form_name: "Nom complet",
        form_email: "Votre adresse email",
        form_msg: "Votre message...",
        form_send: "Envoyer",
        form_sending: "Envoi en cours...",
        form_success: "Mission Accomplie !",
        footer_copy: "&copy; 2026 SALMA BARRAK | Apprentissage quotidien. Partage de projets au fil de ma progression.",
        resume_title: "Curriculum Vitae",
        resume_download: "Télécharger",
        confirm_title: "Prêt à envoyer ?",
        confirm_subtitle: "Votre message sera délivré à Salma Barrak.",
        confirm_cancel: "Annuler",
        confirm_send: "Confirmer & Envoyer",
        confirm_name: "Nom",
        confirm_email: "Email",
        confirm_msg: "Message",
        soft_communication: "Communication",
        soft_teamwork: "Travail d'équipe",
        soft_problem_solving: "Résolution de problèmes",
        soft_adaptability: "Adaptabilité",
        soft_agile: "Agile",
        soft_scrum: "Scrum",
        soft_jira: "Jira",
        contact_email_label: "Email",
        contact_phone_label: "Téléphone",
        lang_label: "Langues",
        lang_arabic: "Arabe (Maternel)",
        lang_french: "Français (B2)",
        lang_english: "Anglais (C1)",
        quote_text: "\"Et ma réussite ne dépend que d'Allah.\"",
        vol_btn_n8n: "Workflows n8n",
        vol_btn_certs: "Voir Certificats",
        gallery_n8n_title: "Workflows n8n",
        gallery_n8n_desc: "Voici quelques-uns des pipelines de données et flux logiques automatisés que j'ai conçus avec n8n pour nos ateliers :",
        gallery_cert_title: "Certificats de Bénévolat",
        gallery_cert_desc: "Certificats d'appréciation et de reconnaissance délivrés par la Maison des Sciences de l'Oriental.",
        gallery_events_title: "Galerie des Événements",
        gallery_events_desc: "Un aperçu des événements de club à grande échelle et des compétitions techniques auxquels j'ai participé ou que j'ai organisés.",
        vol_btn_events: "Voir la Galerie d'Événements",
        stat_projects: "Plus de 11 Projets d'Ingénierie",
        stat_certs: "8 Certifications Validées",
        stat_techs: "Plus de 15 Technologies Maîtrisées",
        stat_intern: "1 Stage Professionnel",
        cli_intro: "Tapez 'help' pour voir les commandes disponibles. Bienvenue dans le Lab Interactif de Salma.",
        cli_help_title: "Commandes disponibles :",
        cli_help_whoami: "Une introduction rapide",
        cli_help_status: "Vérifier la disponibilité actuelle",
        cli_help_skills: "Voir mon expertise technique",
        cli_help_projects: "Lister les applications phares",
        cli_help_ls: "Plus de détails (ex: 'ls stockify')",
        cli_help_contact: "Infos de contact",
        cli_help_clear: "Effacer l'écran du terminal",
        cli_help_exit: "Fermer la session du terminal",
        cli_whoami: "Étudiante en Génie Informatique à l'ENSA Oujda, passionnée par le développement logiciel & IA. Actuellement à la recherche d'un stage PFA de 1-2 mois (à partir du 1er juillet) pour appliquer mes compétences en architecture et automatisation. Je conçois des systèmes évolutifs et porteurs de sens.",
        cli_status: "Disponible pour un stage PFA de 1-2 mois à partir du 1er juillet 2026. Ouverte aux opportunités en Backend, Full-Stack ou IA.",
        cli_skills: "Core : Java, Python, JavaScript, PHP.\\nFocus Architecture : Spring Boot, Symfony 7, FastAPI, Docker, PostgreSQL, n8n.",
        cli_projects: "Projets notables : Jira Clone Pro, Chatbot-mso, Stockify, Soukify Marketplace, Tech Quiz Pro, Vision Security Engine.",
        cli_ls_usage: "Utilisation : ls <projet> (Essayez : jira, chatbot, stockify, soukify, quiz, portfolio)",
        cli_not_found: "Commande non trouvée : {cmd}. Tapez 'help' pour voir les options.",
        cli_exit: "Fermeture de la session...",
        cli_contact: "Email : salmabarrak26@gmail.com | LinkedIn : /in/salma-barrak | Lieu : Maroc",
        cli_ls_jira: "Jira Clone Pro | Gestion de tâches haute performance avec intégrité API en temps réel.\\n- Stack : Spring Boot, React, PostgreSQL, Mockito/JUnit.",
        cli_ls_chatbot: "Chatbot-mso | Système RAG multilingue pour l'automatisation administrative.\\n- Stack : FastAPI, Vite, Hugging Face LLMs, Tesseract OCR.",
        cli_ls_stockify: "Stockify - Inventory Hub | Pipeline de données analytiques pour la volatilité des stocks.\\n- Stack : Symfony 7, Doctrine, PHP, MySQL, CSS3.",
        cli_ls_soukify: "Soukify Marketplace | Application Android mobile géolocalisée avec interactions complexes.\\n- Stack : Java, Android SDK, Firebase, Pattern MVVM.",
        cli_ls_quiz: "Tech Quiz Pro | Moteur de quiz IT haute performance avec plus de 350 défis.\\n- Stack : Java, Room Database, Architecture MVVM.",
        cli_ls_portfolio: "Portfolio Interactif | Showcase développeur interactif avec localisation en temps réel.\\n- Stack : Vanilla JS, Three.js, GSAP, CSS3 haut de gamme.",
        proj_stockify_title: "Stockify - Hub d'Inventaire",
        proj_stockify_desc: `
            <h3 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size: 1.2rem;">À propos du Projet</h3>
            <p>Stockify est un système de gestion d'inventaire professionnel et performant construit avec Symfony 7.4 et TailwindCSS. Il offre une suite complète d'outils pour le suivi des produits, des catégories, des transactions et la gestion des opérations de stock telles que les réapprovisionnements et les dons.</p>
            <h3 style="color: var(--text-primary); margin-top: 1.5rem; margin-bottom: 0.5rem; font-size: 1.2rem;">✨ Caractéristiques Clés</h3>
            <ul style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
                <li><strong>Tableau de Bord Complet :</strong> Aperçu en temps réel de l'état de votre inventaire, y compris les alertes de stock faible et les indicateurs clés.</li>
                <li><strong>Gestion des Produits et Catégories :</strong> Capacités CRUD complètes pour la gestion de votre catalogue d'inventaire.</li>
                <li><strong>Opérations de Réapprovisionnement :</strong> Ajoutez facilement du stock aux produits existants avec un enregistrement automatisé des transactions.</li>
                <li><strong>Suivi des Dons :</strong> Gérez les sorties de stock pour les dons avec des flux de travail dédiés et un audit complet.</li>
                <li><strong>Registre des Transactions :</strong> Un historique détaillé de chaque changement de stock (RÉAPPROVISIONNEMENT, DON, etc.) pour une traçabilité totale.</li>
                <li><strong>Gestion Sécurisée des Utilisateurs :</strong> Contrôle d'accès basé sur les rôles (Admin/Utilisateur), inscription et gestion des profils.</li>
            </ul>
        `,
        proj_soukify_title: "Soukify - Marché Artisanal",
        proj_soukify_desc: `
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-bullseye"></i> Vision du Projet
                </h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">
                    Soukify est une application mobile complète conçue pour promouvoir et vendre l'artisanat marocain. Elle comble le fossé entre les artisans traditionnels et les consommateurs numériques en offrant une plateforme de commerce électronique dédiée avec géolocalisation intelligente, chat direct artisan-client et un écosystème qui préserve l'héritage culturel tout en autonomisant les créateurs locaux.
                </p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-1); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-star"></i> Caractéristiques Clés
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-map-marked-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Géo-Découverte</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Construit avec OpenStreetMap (osmdroid) pour découvrir les ateliers d'artisans par proximité sans dépendre d'API coûteuses.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-chart-line"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Hub Artisan</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Gestion complète de la boutique permettant aux artisans d'ajouter des produits et de consulter les analyses.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-comments"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Chat Temps Réel</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Chat intégré reliant directement acheteurs et vendeurs, propulsé par Firebase et notifications push.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="color: var(--accent-1); font-size: 1.5rem; margin-bottom: 0.8rem;"><i class="fas fa-cloud-upload-alt"></i></div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Optimisation Média</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Compression d'image adaptative via Cloudinary pour un chargement rapide même sur les réseaux 3G.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 style="color: var(--accent-1); margin-bottom: 0.8rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-cogs"></i> Schéma Technique
                </h3>
                <div style="background: rgba(139, 92, 246, 0.05); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-1);">
                    <p style="margin-bottom: 1rem; color: var(--text-secondary);">Construit nativement en <strong>Java</strong> avec le pattern <strong>MVVM</strong>. L'architecture utilise une stratégie hybride :</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Écosystème Firebase :</strong> Synchronisation temps réel, authentification et fonctions cloud.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Stockage NoSQL :</strong> Firestore pour des données produits artisanaux flexibles et hiérarchiques.</span>
                        </li>
                        <li style="display: flex; align-items: flex-start; gap: 0.8rem;">
                            <i class="fas fa-check-circle" style="color: var(--accent-1); margin-top: 0.2rem;"></i>
                            <span><strong>Capacité Hors-ligne :</strong> Patrons SharedPreferences et inspirés de Room pour un accès résilient.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        revolving_text: "CONSTRUIRE • AUTOMATISER • APPRENDRE • DÉPLOYER • RÉSOUDRE • INNOVER • CONSTRUIRE • AUTOMATISER •"
    }
};
