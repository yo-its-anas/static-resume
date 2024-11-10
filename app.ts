// Select the button and skills section
const toggleSkillsButton = document.getElementById('toggle-skills-btn')!;
const skillsSection = document.getElementById('skills-section')!;

// Function to toggle the visibility of the skills section
toggleSkillsButton.addEventListener('click', () => {
    // Check if skills section is visible
    if (skillsSection.style.display === 'none') {
        // Show the skills section
        skillsSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';  // Change button text
    } else {
        // Hide the skills section
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';  // Change button text
    }
});