// Function to scroll smoothly to a specific section when a feature button is clicked
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Function to handle feature button clicks
function handleFeatureButtonClick(sectionId) {
    scrollToSection(sectionId);
}

// Add event listeners to feature buttons
document.addEventListener('DOMContentLoaded', function() {
    const featureButtons = document.querySelectorAll('.feature button');
    featureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = button.parentNode.id;
            handleFeatureButtonClick(sectionId);
        });
    });
});