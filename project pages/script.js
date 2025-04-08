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
