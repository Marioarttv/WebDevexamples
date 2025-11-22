document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const form = document.getElementById('prompt-form');
    const roleSelect = document.getElementById('role');
    const taskTypeInput = document.getElementById('task-type');
    const taskButtons = document.querySelectorAll('.select-btn');
    const contextInput = document.getElementById('context');
    const techCheckboxes = document.querySelectorAll('input[name="tech"]');
    const constraintCheckboxes = document.querySelectorAll('input[name="constraint"]');
    const output = document.getElementById('prompt-output');
    const copyBtn = document.getElementById('copy-btn');

    // Role Definitions
    const roles = {
        'expert-dev': 'Handele als erfahrener Senior Web Developer. Dein Code ist sauber, effizient und folgt Best Practices.',
        'tutor': 'Handele als geduldiger Informatik-Lehrer. Erkläre jeden Schritt einfach und verständlich für Anfänger.',
        'ui-designer': 'Handele als Kreativer UI/UX Designer. Fokus auf Ästhetik, Benutzerfreundlichkeit und modernes Design.',
        'debugger': 'Handele als Security & Bug Expert. Suche nach Fehlern, Sicherheitslücken und Edge Cases.'
    };

    // Task Definitions
    const tasks = {
        'create': 'AUFGABE:\nErstelle',
        'explain': 'AUFGABE:\nErkläre',
        'refactor': 'AUFGABE:\nOptimiere und Refactore',
        'debug': 'AUFGABE:\nFinde Fehler und debugge'
    };

    // Update Function
    function updatePrompt() {
        // 1. Role
        const role = roles[roleSelect.value];

        // 2. Task & Context
        const taskAction = tasks[taskTypeInput.value];
        const context = contextInput.value.trim() || '[Hier deine Beschreibung einfügen...]';
        
        // 3. Tech Stack
        const selectedTech = Array.from(techCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        
        const techString = selectedTech.length > 0 
            ? `TECH STACK:\n${selectedTech.join(', ')}` 
            : '';

        // 4. Constraints
        const selectedConstraints = Array.from(constraintCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => `- ${cb.nextElementSibling.innerText}`);
        
        const constraintsString = selectedConstraints.length > 0
            ? `ANFORDERUNGEN:\n${selectedConstraints.join('\n')}`
            : '';

        // Assemble Prompt
        const prompt = `${role}\n\n${taskAction} ${context}\n\n${techString ? techString + '\n\n' : ''}${constraintsString}`;

        output.textContent = prompt;
    }

    // Event Listeners
    
    // Task Buttons
    taskButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            taskButtons.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');
            // Update hidden input
            taskTypeInput.value = btn.dataset.value;
            updatePrompt();
        });
    });

    // Form Inputs
    form.addEventListener('input', updatePrompt);

    // Copy Button
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(output.textContent).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<span class="icon">✓</span> Kopiert!';
            copyBtn.style.backgroundColor = 'var(--accent)';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.backgroundColor = '';
            }, 2000);
        });
    });

    // Initial Update
    updatePrompt();
});
