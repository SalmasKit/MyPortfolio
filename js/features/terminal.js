/**
 * terminal.js
 * Handles the interactive CLI/Terminal logic
 */

export function initTerminal() {
    const cliInput = document.getElementById('cli-input');
    const cliOutput = document.getElementById('cli-output');
    const cliOverlay = document.getElementById('cli-overlay');
    const cliFab = document.getElementById('cli-fab');

    if (!cliInput || !cliOutput || !cliOverlay || !cliFab) return;

    function toggleCLI(clearContent = false) {
        const isVisible = cliOverlay.style.display === 'flex';
        cliOverlay.style.display = isVisible ? 'none' : 'flex';
        
        if (!isVisible) {
            cliInput.focus();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            if (clearContent) {
                if (cliOutput) cliOutput.innerHTML = '';
                if (cliInput) cliInput.value = '';
            }
        }
    }

    function toggleMaximize() {
        const modal = document.querySelector('.cli-modal');
        if (!modal) return;
        const isMaximized = modal.style.maxWidth === '100%';
        modal.style.maxWidth = isMaximized ? '800px' : '100%';
        modal.style.height = isMaximized ? '70vh' : '95vh';
        modal.style.borderRadius = isMaximized ? '10px' : '0';
    }

    // Expose to window for any surviving inline handlers
    window.toggleCLI = toggleCLI;
    window.toggleMaximize = toggleMaximize;

    cliFab.addEventListener('click', () => toggleCLI(false));

    // Attach to Windows-style buttons (specifically in the CLI header)
    const winBtns = document.querySelectorAll('.cli-header .win-btn');
    if (winBtns.length >= 3) {
        winBtns[0].addEventListener('click', () => toggleCLI(false));      // Minimize (keep)
        winBtns[1].addEventListener('click', toggleMaximize);               // Maximize
        winBtns[2].addEventListener('click', () => toggleCLI(true));       // Close (clear)
    }

    const commands = {
        help: () => {
            const lang = document.documentElement.lang || 'en';
            const c = translations[lang];
            return `${c.cli_help_title} \n` +
                `- whoami: ${c.cli_help_whoami}\n` +
                `- status: ${c.cli_help_status}\n` +
                `- skills: ${c.cli_help_skills}\n` +
                `- projects: ${c.cli_help_projects}\n` +
                `- ls <project>: ${c.cli_help_ls}\n` +
                `- contact: ${c.cli_help_contact}\n` +
                `- clear: ${c.cli_help_clear}\n` +
                `- exit: ${c.cli_help_exit}`;
        },
        whoami: () => translations[document.documentElement.lang || 'en'].cli_whoami,
        status: () => translations[document.documentElement.lang || 'en'].cli_status,
        skills: () => translations[document.documentElement.lang || 'en'].cli_skills,
        projects: () => translations[document.documentElement.lang || 'en'].cli_projects,
        ls: (arg) => {
            const lang = document.documentElement.lang || 'en';
            const c = translations[lang];
            if (!arg) return c.cli_ls_usage;
            const projectKey = `cli_ls_${arg.toLowerCase()}`;
            return c[projectKey] || c.cli_not_found.replace('{cmd}', arg);
        },
        contact: () => translations[document.documentElement.lang || 'en'].cli_contact,
        clear: () => { cliOutput.innerHTML = ''; return ''; },
        exit: () => { toggleCLI(); return translations[document.documentElement.lang || 'en'].cli_exit; }
    };

    cliInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const fullInput = cliInput.value.trim().toLowerCase();
            const parts = fullInput.split(' ');
            const cmd = parts[0];
            const arg = parts[1];

            if (!fullInput) return;

            const line = document.createElement('div');
            line.className = 'cli-line user';
            line.innerHTML = `<span class="cli-prompt">PS C:\\Users\\Salma></span> ${fullInput}`;
            cliOutput.appendChild(line);

            let response = "";
            const lang = document.documentElement.lang || 'en';

            if (commands[cmd]) response = commands[cmd](arg);
            else response = translations[lang].cli_not_found.replace('{cmd}', cmd);

            if (response) {
                const outLine = document.createElement('div');
                outLine.className = 'cli-line';
                outLine.innerHTML = response.replace(/\\n/g, '<br>');
                cliOutput.appendChild(outLine);
            }

            cliInput.value = '';
            const cliBody = document.getElementById('cli-body');
            if (cliBody) cliBody.scrollTop = cliBody.scrollHeight;
        }
    });
}
