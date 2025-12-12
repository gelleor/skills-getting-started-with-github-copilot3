document.addEventListener("DOMContentLoaded", () => {
  const midmarkReportsList = document.getElementById("midmark-reports-list");
  const activitiesList = document.getElementById("activities-list");
  const activitySelect = document.getElementById("activity");
  const signupForm = document.getElementById("signup-form");
  const messageDiv = document.getElementById("message");

  // Function to fetch Midmark reports starting with SW-
  async function fetchMidmarkReports() {
    try {
      const response = await fetch("/midmark-reports/sw");
      const reports = await response.json();

      // Clear loading message
      midmarkReportsList.innerHTML = "";

      // Check if there are any reports
      if (Object.keys(reports).length === 0) {
        midmarkReportsList.innerHTML = "<p>No Midmark reports found starting with SW-</p>";
        return;
      }

      // Populate reports list
      Object.entries(reports).forEach(([reportId, details]) => {
        const reportCard = document.createElement("div");
        reportCard.className = "activity-card";

        reportCard.innerHTML = `
          <h4>${reportId}</h4>
          <p><strong>Title:</strong> ${details.title}</p>
          <p><strong>Author:</strong> ${details.author}</p>
          <p><strong>Date:</strong> ${details.date}</p>
          <p><strong>Status:</strong> ${details.status}</p>
        `;

        midmarkReportsList.appendChild(reportCard);
      });
    } catch (error) {
      midmarkReportsList.innerHTML = "<p>Failed to load Midmark reports. Please try again later.</p>";
      console.error("Error fetching Midmark reports:", error);
    }
  }

  // Function to fetch activities from API
  async function fetchActivities() {
    try {
      const response = await fetch("/activities");
      const activities = await response.json();

      // Clear loading message
      activitiesList.innerHTML = "";

      // Populate activities list
      Object.entries(activities).forEach(([name, details]) => {
        const activityCard = document.createElement("div");
        activityCard.className = "activity-card";

        const spotsLeft = details.max_participants - details.participants.length;

        // Generate participants list HTML
        let participantsHTML = "";
        if (details.participants.length > 0) {
          participantsHTML = `
            <div class="participants-section">
              <strong>Participants:</strong>
              <ul class="participants-list">
                ${details.participants.map(p => `<li>${p}</li>`).join("")}
              </ul>
            </div>
          `;
        } else {
          participantsHTML = `
            <div class="participants-section no-participants">
              <em>No participants yet</em>
            </div>
          `;
        }

        activityCard.innerHTML = `
          <h4>${name}</h4>
          <p>${details.description}</p>
          <p><strong>Schedule:</strong> ${details.schedule}</p>
          <p><strong>Availability:</strong> ${spotsLeft} spots left</p>
          ${participantsHTML}
        `;

        activitiesList.appendChild(activityCard);

        // Add option to select dropdown
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        activitySelect.appendChild(option);
      });
    } catch (error) {
      activitiesList.innerHTML = "<p>Failed to load activities. Please try again later.</p>";
      console.error("Error fetching activities:", error);
    }
  }

  // Handle form submission
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const activity = document.getElementById("activity").value;

    try {
      const response = await fetch(
        `/activities/${encodeURIComponent(activity)}/signup?email=${encodeURIComponent(email)}`,
        {
          method: "POST",
        }
      );

      const result = await response.json();

      if (response.ok) {
        messageDiv.textContent = result.message;
        messageDiv.className = "success";
        signupForm.reset();
      } else {
        messageDiv.textContent = result.detail || "An error occurred";
        messageDiv.className = "error";
      }

      messageDiv.classList.remove("hidden");

      // Hide message after 5 seconds
      setTimeout(() => {
        messageDiv.classList.add("hidden");
      }, 5000);
    } catch (error) {
      messageDiv.textContent = "Failed to sign up. Please try again.";
      messageDiv.className = "error";
      messageDiv.classList.remove("hidden");
      console.error("Error signing up:", error);
    }
  });

  // Initialize app
  fetchMidmarkReports();
  fetchActivities();
});
