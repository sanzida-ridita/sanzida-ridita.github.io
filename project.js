function navigateTo(page) {
    // Add logic to navigate to the specified page
    console.log(`Redirecting to ${page} page...`);
}

document.getElementById('loginButton').addEventListener('click', function () {
    navigateTo('login');
});

document.getElementById('registerButton').addEventListener('click', function () {
    navigateTo('register');
});

// Remove the existing event listeners for feature boxes

// Add event listeners for each feature button
document.getElementById('findFriends').addEventListener('click', function () {
    navigateTo('findFriends');
});

document.getElementById('messageFriends').addEventListener('click', function () {
    navigateTo('messageFriends');
});

document.getElementById('findSubjects').addEventListener('click', function () {
    navigateTo('findSubjects');
});

document.getElementById('novelEnthusiasts').addEventListener('click', function () {
    navigateTo('novelEnthusiasts');
});
