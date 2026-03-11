/* ========================
   CSS Variables & Global
   ======================== */

:root {
    --primary: #c9a84c;
    --secondary: #e8c96e;
    --accent: #a07830;
    --dark: #151c28;
    --darker: #0e1420;
    --light: #f0ead8;
    --text: #d8cebc;
    --card-bg: rgba(30, 40, 60, 0.7);
    --card-bg-alt: rgba(40, 30, 20, 0.4);
    --border: rgba(201, 168, 76, 0.2);
    --border-alt: rgba(160, 120, 48, 0.2);
    --muted: rgba(216, 206, 188, 0.5);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, var(--dark) 0%, #1a2540 100%);
    color: var(--text);
    overflow-x: hidden;
    position: relative;
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
        radial-gradient(circle at 20% 50%, rgba(201, 168, 76, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(160, 120, 48, 0.07) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
    animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
    0%, 100% {
        background:
            radial-gradient(circle at 20% 50%, rgba(201, 168, 76, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(160, 120, 48, 0.07) 0%, transparent 50%);
    }
    50% {
        background:
            radial-gradient(circle at 80% 50%, rgba(201, 168, 76, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(160, 120, 48, 0.07) 0%, transparent 50%);
    }
}

section {
    position: relative;
    z-index: 1;
}

/* ========================
   Navigation
   ======================== */

nav {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1.2rem 2rem;
    backdrop-filter: blur(10px);
    background: rgba(14, 20, 32, 0.9);
    border-bottom: 1px solid var(--border);
    z-index: 100;
    animation: slideDown 0.6s ease;
}

@keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -1px;
    text-decoration: none;
    display: inline-block;
    flex-shrink: 0;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav a {
    color: var(--text);
    text-decoration: none;
    font-size: 0.95rem;
    position: relative;
    transition: color 0.3s ease;
}

nav a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transition: width 0.3s ease;
}

nav a:hover { color: var(--primary); }
nav a:hover::after { width: 100%; }
nav a.active::after { width: 100%; }

/* Hamburger */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 4px;
    background: none;
    border: none;
}

.hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--primary);
    border-radius: 2px;
    transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ========================
   Hero Section
   ======================== */

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin-top: 60px;
}

.hero-content {
    text-align: center;
    max-width: 800px;
    animation: fadeInUp 1s ease 0.2s both;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.hero h1 {
    font-size: clamp(2rem, 8vw, 4.5rem);
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.1;
    background: linear-gradient(135deg, var(--primary), var(--secondary), #f0d890);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -2px;
}

.hero p {
    font-size: 1.25rem;
    color: var(--text);
    margin-bottom: 2rem;
    line-height: 1.6;
    opacity: 0.9;
}

/* ========================
   Buttons
   ======================== */

.cta-button {
    display: inline-block;
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: var(--darker);
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(201, 168, 76, 0.25);
    cursor: pointer;
    border: none;
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.3s ease;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(201, 168, 76, 0.4);
}

.cta-button:hover::before { left: 100%; }

/* ========================
   Section Titles
   ======================== */

.section-title {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 3rem;
    text-align: center;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* ========================
   About Section
   ======================== */

.about {
    padding: 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-text h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary);
}

.about-text p {
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    opacity: 0.9;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.skill-tag {
    background: rgba(201, 168, 76, 0.1);
    border: 1px solid var(--primary);
    color: var(--primary);
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.skill-tag:hover {
    background: rgba(201, 168, 76, 0.2);
    transform: translateY(-2px);
}

.about-images {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}

.about-img {
    width: 280px;
    height: 280px;
    object-fit: contain;
    transition: all 0.3s ease;
    filter: drop-shadow(0 10px 25px rgba(201, 168, 76, 0.15));
}

.sys-img { width: 320px; height: 320px; }
.sys-img:hover {
    transform: translateY(-10px) scale(1.05);
    filter: drop-shadow(0 15px 35px rgba(201, 168, 76, 0.3));
}

.comp-img { width: 320px; height: 320px; }
.comp-img:hover {
    transform: translateY(10px) scale(1.05);
    filter: drop-shadow(0 15px 35px rgba(160, 120, 48, 0.3));
}

/* ========================
   Profile Photo
   ======================== */

.profile-photo-wrap {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 2rem;
}

.profile-photo-ring {
    position: relative;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
    box-shadow: 0 0 25px rgba(201, 168, 76, 0.35), 0 0 60px rgba(160, 120, 48, 0.15);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.profile-photo-ring:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(201, 168, 76, 0.55), 0 0 80px rgba(160, 120, 48, 0.3);
}

.profile-photo {
    width: 100%; height: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    border: 3px solid var(--dark);
}

/* ========================
   Projects Section
   ======================== */

.projects {
    padding: 6rem 2rem;
    background: linear-gradient(180deg, transparent 0%, rgba(201, 168, 76, 0.04) 100%);
}

.projects-container {
    max-width: 1200px;
    margin: 0 auto;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.project-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 15px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    animation: slideUp 0.6s ease;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);
}

@keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.project-card::before {
    content: '';
    position: absolute;
    top: -1px; left: -1px; right: -1px; bottom: -1px;
    background: linear-gradient(45deg, var(--primary), var(--secondary), var(--accent));
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 15px;
}

.project-card:hover {
    transform: translateY(-8px);
    border-color: rgba(201, 168, 76, 0.4);
    box-shadow: 0 12px 40px rgba(201, 168, 76, 0.15);
}

.project-card:hover::before { opacity: 0.1; }

.project-icon { font-size: 2.5rem; margin-bottom: 1rem; }

.project-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--primary);
}

.project-card p {
    font-size: 0.9rem;
    line-height: 1.6;
    opacity: 0.85;
    margin-bottom: 1.5rem;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.project-tag {
    background: rgba(201, 168, 76, 0.12);
    color: var(--secondary);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.78rem;
    border: 1px solid rgba(201, 168, 76, 0.25);
}

.project-link {
    display: inline-block;
    margin-top: 1rem;
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.project-link:hover {
    color: var(--secondary);
    transform: translateX(5px);
}

/* ========================
   Contact Section
   ======================== */

.contact {
    padding: 6rem 2rem;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
}

.contact > p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.social-link {
    width: 50px; height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(201, 168, 76, 0.1);
    border: 1px solid var(--primary);
    border-radius: 50%;
    color: var(--primary);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.2rem;
}

.social-link:hover {
    background: var(--primary);
    color: var(--darker);
    transform: translateY(-5px);
}

/* ========================
   Contact Info Cards
   ======================== */

.contact-cards {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.contact-card {
    padding: 1.5rem;
    border-radius: 15px;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
}

.contact-card-email {
    background: rgba(201, 168, 76, 0.06);
    border: 1px solid rgba(201, 168, 76, 0.18);
}

.contact-card-email:hover {
    background: rgba(201, 168, 76, 0.14);
    transform: translateY(-3px);
    border-color: rgba(201, 168, 76, 0.45);
}

.contact-card-location {
    background: rgba(160, 120, 48, 0.06);
    border: 1px solid rgba(160, 120, 48, 0.18);
    cursor: default;
}

.contact-card-location:hover {
    background: rgba(160, 120, 48, 0.12);
    transform: translateY(-3px);
    border-color: rgba(160, 120, 48, 0.45);
}

.contact-card-icon {
    width: 48px; height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.contact-card-icon-email {
    background: linear-gradient(135deg, rgba(201, 168, 76, 0.2), rgba(160, 120, 48, 0.2));
    border: 1px solid rgba(201, 168, 76, 0.3);
}

.contact-card-icon-location {
    background: linear-gradient(135deg, rgba(160, 120, 48, 0.2), rgba(201, 168, 76, 0.2));
    border: 1px solid rgba(160, 120, 48, 0.3);
}

.contact-card-label {
    font-size: 0.72rem;
    color: var(--muted);
    margin-bottom: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.contact-card-value-email {
    color: var(--primary);
    font-size: 0.88rem;
    font-weight: 500;
    word-break: break-all;
}

.contact-card-value-location {
    color: var(--secondary);
    font-size: 0.88rem;
    font-weight: 500;
}

/* ========================
   Video Modal
   ======================== */

.video-modal {
    display: none;
    position: fixed;
    z-index: 999;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background: rgba(5, 8, 16, 0.92);
    backdrop-filter: blur(5px);
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    animation: fadeIn 0.3s ease;
}

.video-modal.active { display: flex; }

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.video-content {
    width: 100%;
    max-width: 900px;
    background: var(--dark);
    padding: 2rem;
    border-radius: 15px;
    border: 1px solid var(--border);
    position: relative;
    box-shadow: 0 20px 60px rgba(201, 168, 76, 0.15);
    animation: slideInUp 0.3s ease;
}

@keyframes slideInUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.video-title {
    color: var(--primary);
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    text-align: center;
    padding-right: 3rem;
}

.close-video {
    position: absolute;
    top: 1rem; right: 1rem;
    color: var(--primary);
    font-size: 1.8rem;
    cursor: pointer;
    background: rgba(201, 168, 76, 0.1);
    border: none;
    width: 44px; height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    padding: 0;
    line-height: 1;
}

.close-video:hover {
    background: rgba(201, 168, 76, 0.2);
    transform: rotate(90deg);
}

#videoFrame { border-radius: 10px; display: block; }

/* Email modal inputs */
.email-input {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: rgba(201, 168, 76, 0.05);
    color: var(--text);
    font-size: 1rem;
    outline: none;
    width: 100%;
    transition: border-color 0.2s;
    font-family: inherit;
}

.email-input:focus {
    border-color: var(--primary);
    background: rgba(201, 168, 76, 0.08);
}

.email-input::placeholder { color: var(--muted); }

/* ========================
   Image Slideshow Modal
   ======================== */

.slideshow-modal {
    display: none;
    position: fixed;
    z-index: 999;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background: rgba(5, 8, 16, 0.92);
    backdrop-filter: blur(5px);
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    animation: fadeIn 0.3s ease;
}

.slideshow-modal.active { display: flex; }

.slideshow-content {
    width: 100%;
    max-width: 900px;
    background: var(--dark);
    padding: 2rem;
    border-radius: 15px;
    border: 1px solid var(--border);
    position: relative;
    box-shadow: 0 20px 60px rgba(201, 168, 76, 0.15);
    animation: slideInUp 0.3s ease;
}

.slideshow-title {
    color: var(--primary);
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    text-align: center;
    padding-right: 3rem;
}

.close-slideshow {
    position: absolute;
    top: 1rem; right: 1rem;
    color: var(--primary);
    font-size: 1.8rem;
    cursor: pointer;
    background: rgba(201, 168, 76, 0.1);
    border: none;
    width: 44px; height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    padding: 0;
    line-height: 1;
}

.close-slideshow:hover {
    background: rgba(201, 168, 76, 0.2);
    transform: rotate(90deg);
}

.slideshow-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.slideshow-image {
    width: 100%;
    height: auto;
    max-height: 460px;
    border-radius: 10px;
    object-fit: contain;
    display: block;
}

.slideshow-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
}

.slide-btn {
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: var(--darker);
    border: none;
    width: 46px; height: 46px;
    border-radius: 50%;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-weight: 700;
}

.slide-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(201, 168, 76, 0.35);
}

.slide-btn:active { transform: scale(0.95); }

.image-name {
    color: var(--primary);
    font-size: 0.9rem;
    font-weight: 600;
    min-width: 130px;
    text-align: center;
    padding: 0.4rem 0.9rem;
    background: rgba(201, 168, 76, 0.1);
    border-radius: 20px;
    border: 1px solid rgba(201, 168, 76, 0.2);
}

.slideshow-dots { display: flex; justify-content: center; gap: 0.5rem; }

.dots-container {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
}

.dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    background: rgba(201, 168, 76, 0.3);
    border: 1px solid rgba(201, 168, 76, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
}

.dot.active {
    background: var(--primary);
    width: 28px;
    border-radius: 5px;
    transform: scale(1.1);
}

.dot:hover { background: rgba(201, 168, 76, 0.6); }

/* ========================
   Footer
   ======================== */

footer {
    text-align: center;
    padding: 2rem;
    border-top: 1px solid var(--border);
    color: var(--text);
    opacity: 0.7;
    margin-top: 3rem;
}

/* ========================
   Responsive — Desktop: overlapping layout
   ======================== */

@media (min-width: 1024px) {
    .about-images {
        position: relative;
        display: block;
        aspect-ratio: 1 / 1.15;
        height: auto;
    }
    .about-img { position: absolute; }
    .sys-img { top: 0; left: 0; z-index: 2; }
    .comp-img { bottom: 0; right: 0; z-index: 1; }
}

/* ========================
   Responsive — Tablet
   ======================== */

@media (max-width: 1023px) {
    .about-grid { grid-template-columns: 1fr; gap: 3rem; }

    .about-images {
        position: static;
        max-width: 350px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
    }

    .about-img { position: static; width: 200px; height: 200px; }
    .sys-img { width: 220px; height: 220px; }
    .comp-img { width: 220px; height: 220px; }

    .hero h1 { font-size: 2.5rem; }
    .section-title { font-size: 2.2rem; }

    .projects-grid { grid-template-columns: 1fr 1fr; }

    .social-links { gap: 1rem; }
    .video-content { padding: 1.5rem; }
    #videoFrame { height: 320px; }
}

/* ========================
   Responsive — Mobile
   ======================== */

@media (max-width: 768px) {
    /* Nav */
    .hamburger { display: flex; }

    nav ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        flex-direction: column;
        gap: 0;
        background: rgba(14, 20, 32, 0.98);
        border-bottom: 1px solid var(--border);
        padding: 0.5rem 0;
    }

    nav ul.open { display: flex; }

    nav ul li a {
        display: block;
        padding: 0.9rem 2rem;
        font-size: 1rem;
        border-bottom: 1px solid rgba(201, 168, 76, 0.08);
    }

    nav ul li:last-child a { border-bottom: none; }

    /* Hero */
    .hero { padding: 1.5rem; }
    .hero h1 { font-size: clamp(1.8rem, 7vw, 2.8rem); letter-spacing: -1px; }
    .hero p { font-size: 1rem; }

    /* About */
    .about { padding: 4rem 1.5rem; }
    .about-text h3 { font-size: 1.3rem; }
    .about-text p { font-size: 0.95rem; }
    .profile-photo-ring { width: 130px; height: 130px; }

    .about-images { max-width: 280px; }
    .about-img { width: 160px; height: 160px; }
    .sys-img { width: 175px; height: 175px; }
    .comp-img { width: 175px; height: 175px; }

    /* Section titles */
    .section-title { font-size: 1.8rem; margin-bottom: 2rem; }

    /* Projects */
    .projects { padding: 4rem 1.5rem; }
    .projects-grid { grid-template-columns: 1fr; gap: 1.25rem; }
    .project-card { padding: 1.5rem; }

    /* Contact */
    .contact { padding: 4rem 1.5rem; }
    .contact-cards { grid-template-columns: 1fr; }

    /* Modals */
    .video-modal,
    .slideshow-modal { padding: 1rem; align-items: flex-end; }

    .video-content,
    .slideshow-content {
        padding: 1.25rem;
        border-radius: 16px 16px 0 0;
        max-height: 90vh;
        overflow-y: auto;
    }

    #videoFrame { height: 220px; }
    .slideshow-image { max-height: 300px; }

    .slideshow-controls { gap: 1rem; }
    .image-name { min-width: 100px; font-size: 0.8rem; }

    /* CTA button */
    .cta-button { padding: 0.85rem 2rem; font-size: 0.95rem; }
}

@media (max-width: 400px) {
    nav { padding: 1rem 1.2rem; }
    .logo { font-size: 1.2rem; }
    .hero h1 { font-size: 1.7rem; }
    .about { padding: 3rem 1rem; }
    .projects { padding: 3rem 1rem; }
    .contact { padding: 3rem 1rem; }
    .contact-card { padding: 1rem; gap: 0.75rem; }
    .contact-card-icon { width: 40px; height: 40px; border-radius: 10px; }
    .contact-card-value-email { font-size: 0.78rem; }
}