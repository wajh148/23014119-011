// Function to toggle sidebar open/close
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");

    // Check if sidebar is currently open (width: 250px)
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0"; // Close sidebar
    } else {
        sidebar.style.width = "250px"; // Open sidebar
    }
}

// Function to close the sidebar when close button (X) is clicked
function closeMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0"; // Close sidebar
}

// Function to toggle the tournament options visibility
function toggleTournaments() {
    var tournamentOptions = document.getElementById("tournamentOptions");

    // Toggle visibility of tournament options
    if (tournamentOptions.style.display === "block") {
        tournamentOptions.style.display = "none"; // Hide options
    } else {
        tournamentOptions.style.display = "block"; // Show options
    }
}

// Optional: Ensure sidebar is initially hidden if the page is reloaded
document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0"; // Sidebar hidden initially
});

// Function to change the background color of the page
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Function to hide an element by id
function hideElementById(id) {
    var element = document.getElementById(id);
    element.style.display = "none";
}

// Function to show an element by id
function showElementById(id) {
    var element = document.getElementById(id);
    element.style.display = "block";
}

// Function to toggle visibility of a paragraph when clicked
function toggleParagraphVisibility() {
    var paragraph = document.getElementById("myParagraph");
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

function adjustForMobile() {
    if (window.innerWidth <= 768) { // Phone size
        document.body.classList.add("bg-blue-200"); // Background color change for mobile
        document.getElementById("sidebar").style.width = "0"; // Ensure sidebar is hidden on mobile
    } else {
        document.body.classList.remove("bg-blue-200");
    }
}

function adjustForLaptop() {
    if (window.innerWidth > 1024) { // Laptop size or larger
        document.body.classList.add("bg-green-200"); // Background color change for laptop
        document.getElementById("sidebar").style.width = "250px"; // Sidebar visible on laptop
    } else {
        document.body.classList.remove("bg-green-200");
    }
}
