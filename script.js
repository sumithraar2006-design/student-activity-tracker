const activities = [
  {
    id: 1,
    name: "HTML5 Structure",
    desc: "Define semantic elements",
    status: "Pending"
  },
  {
    id: 2,
    name: "CSS3 Styling",
    desc: "Apply flexbox and glassmorphism",
    status: "Pending"
  },
  {
    id: 3,
    name: "JavaScript DOM",
    desc: "Manage task state and progress",
    status: "Pending"
  }
];

function renderTasks() {
  const container = document.getElementById("tasks-container");
  container.innerHTML = "";
  let completedCount = 0;

  activities.forEach((task) => {
    const isCompleted = task.status === "Completed";
    if (isCompleted) completedCount++;

    const card = document.createElement("div");
    card.className = `task-card ${isCompleted ? "completed" : ""}`;
    card.innerHTML = `
            <div class="task-info">
                <h4>${task.name}</h4>
                <p>${task.desc}</p>
                <strong>Status: ${task.status}</strong>
            </div>
            <button class="${
              isCompleted ? "completed-btn" : ""
            }" onclick="updateStatus(${task.id})">
                ${
                  isCompleted
                    ? '<i class="fas fa-check"></i> Done'
                    : '<i class="fas fa-circle"></i> Mark Done'
                }
            </button>
        `;
    container.appendChild(card);
  });

  const total = activities.length;
  const percent = (completedCount / total) * 100;
  document.getElementById(
    "progress-text"
  ).innerText = `${completedCount} out of ${total} activities completed`;
  document.getElementById("progress-fill").style.width = `${percent}%`;
}

function updateStatus(id) {
  const task = activities.find((t) => t.id === id);
  task.status = task.status === "Pending" ? "Completed" : "Pending";
  renderTasks();
}

renderTasks();
