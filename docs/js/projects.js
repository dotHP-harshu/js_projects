const projects = [
    {
        title: 'Accordion FAQ',
        description: 'An interactive FAQ section with expandable questions and answers.',
        image: 'images/projects/accodian.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/accodion/',
    },
    {
        title: 'Basic Calculator',
        description: 'A simple calculator that handles key events and logical operations in JavaScript.',
        image: 'images/projects/basic_calculator.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/basic_calculator/',
    },
    {
        title: 'Real-Time Character Counter',
        description: 'A tool that counts characters in real-time, showing the total typed, total allowed, and remaining characters.',
        image: 'images/projects/character_counter.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/character_counter/',
    },
    {
        title: 'Random Choice Picker',
        description: 'A JavaScript-based app that randomly selects a choice from a given input list.',
        image: 'images/projects/choice_picker.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/choice_picker/',
    },
    {
        title: 'Drag and Drop Image Uploader',
        description: 'A project demonstrating drag-and-drop functionality by allowing images to be dragged into empty boxes.',
        image: 'images/projects/drag_&_drop.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/drag_n_drop/',
    },
    {
        title: 'Emoji Catcher Game',
        description: 'A fun game where players catch randomly appearing emojis by clicking on them.',
        image: 'images/projects/emoji_picker.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/emoji_catcher/',
    },
    {
        title: 'Expense Tracker',
        description: 'An application for tracking expenses by inputting product names and prices, with a total expenses display.',
        image: 'images/projects/expense_tracker.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/expense_tracker/',
    },
    {
        title: 'GitHub Profile Finder',
        description: 'A tool using the GitHub API to fetch user profiles by their usernames.',
        image: 'images/projects/github_profile.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/github_profile/',
    },
    {
        title: 'Joke Generator',
        description: 'An API-based application that generates random jokes in both Hindi and English.',
        image: 'images/projects/joke_generator.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/joke_generator/',
    },
    {
        title: 'Marvel Image Gallery',
        description: 'An animated image gallery featuring hover effects using CSS.',
        image: 'images/projects/marvel_gallery.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/marvel_gallery/',
    },
    {
        title: 'Hover Button Animation',
        description: 'A project featuring a button that changes content upon hovering.',
        image: 'images/projects/moving_button.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/moving_button/',
    },
    {
        title: 'Multi-Screen Form',
        description: 'A multi-page form with navigation functionality without page reloads.',
        image: 'images/projects/multiscreen_form.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/multiscreen_form/',
    },
    {
        title: 'Music Player',
        description: 'A basic music player with controls for playing, pausing, and switching tracks.',
        image: 'images/projects/music_player.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/music_player/',
    },
    {
        title: 'Notes Application',
        description: 'A notes app for adding, deleting, and saving notes, with local storage for persistence.',
        image: 'images/projects/notes.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/notes/',
    },
    {
        title: 'Password Generator',
        description: 'A tool to generate random passwords with customizable settings.',
        image: 'images/projects/password_generator.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/password_generator/',
    },
    {
        title: 'Password Manager',
        description: 'A simple password manager for storing and deleting user credentials.',
        image: 'images/projects/password_manager.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/password_manager/',
    },
    {
        title: 'QR Code Generator',
        description: 'An API-based tool for generating QR codes for text or links.',
        image: 'images/projects/qr_code.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/qr_code/',
    },
    {
        title: 'Rotational Page',
        description: 'A creative page that rotates upon clicking a trigger and displays links.',
        image: 'images/projects/rotating_page.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/rotating_page/',
    },
    {
        title: 'Testimonial Slider',
        description: 'A slider displaying testimonials that change at regular intervals.',
        image: 'images/projects/testemonial_slider.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/testimonial_box/',
    },
    {
        title: 'Theme Changer',
        description: 'A theme switcher that remembers the selected theme even after reloading.',
        image: 'images/projects/theme_changer.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/theme_changer/',
    },
    {
        title: 'Tic Tac Toe Game',
        description: 'A classic tic tac toe game with options to reset and start new games.',
        image: 'images/projects/tic_tac_toe.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/tic_tac_toe/',
    },
    {
        title: 'To-Do List App',
        description: 'A to-do list application for adding, marking, and clearing tasks.',
        image: 'images/projects/to_do_list.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/to_do_lists/',
    },
    {
        title: 'Triangle Loader',
        description: 'A CSS-based preloader with triangle animations.',
        image: 'images/projects/triangle_loader.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/triagle_loader/',
    },
    {
        title: 'Weather App for UP',
        description: 'A weather application for districts in Uttar Pradesh, fetching data from an API.',
        image: 'images/projects/up_weather_app.png',
        tags: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/dotHP-harshu/js_projects/tree/main/',
        demo: 'https://dothp.bsite.net/js_projects/up_wheather_app/',
    }
];


function createProjectCard(project) {
    return `
        <article class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        <span>Code</span>
                    </a>
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        <span>Demo</span>
                    </a>
                </div>
            </div>
        </article>
    `;
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);