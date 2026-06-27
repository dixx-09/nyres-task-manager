const API_URL = "http://localhost:5000/api/tasks";

// 🔐 Get token
function getToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first ❌");
    window.location.href = "index.html";
    return null;
  }

  return token;
}


// ================= LOAD TASKS =================
async function loadTasks() {
  const taskList = document.getElementById("taskList");
  const token = getToken();
  if (!token) return;

  try {
    const res = await fetch(API_URL, {
      headers: {
        "Authorization": "Bearer " + token 
      }
    });

    const data = await res.json();

    taskList.innerHTML = "";

    if (data.length === 0) {
      taskList.innerHTML = "<p>No tasks found</p>";
      return;
    }

    data.forEach(task => {
      const div = document.createElement("div");
      div.classList.add("task");

      div.innerHTML = `
        <span style="text-decoration:${task.completed ? "line-through" : "none"}">
          ${task.title}
        </span>

        <button onclick="toggleTask('${task._id}')">
          ${task.completed ? "Undo" : "Complete"}
        </button>

        <button onclick="deleteTask('${task._id}')">Delete</button>
      `;

      taskList.appendChild(div);
    });

  } catch (err) {
    console.error("Error loading tasks:", err);
    taskList.innerHTML = "<p>Error loading tasks</p>";
  }
}


// ================= ADD TASK =================
const form = document.getElementById("taskForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const token = getToken();
    if (!token) return;

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token   // ✅ CORRECT
        },
        body: JSON.stringify({ title }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Task added successfully ✅");
        window.location.href = "tasks.html";
      } else {
        alert(data.message || "Failed ❌");
      }

    } catch (err) {
      console.error("Error:", err);
      alert("Server error ❌");
    }
  });
}


// ================= TOGGLE TASK =================
async function toggleTask(id) {
  const token = getToken();
  if (!token) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + token   // ✅ FIXED
      }
    });

    if (!res.ok) throw new Error("Toggle failed");

    loadTasks();
  } catch (err) {
    console.error("Error updating task:", err);
  }
}


// ================= DELETE TASK =================
async function deleteTask(id) {
  const token = getToken();
  if (!token) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + token   // ✅ FIXED
      }
    });

    if (!res.ok) throw new Error("Delete failed");

    loadTasks();
  } catch (err) {
    console.error("Error deleting task:", err);
  }
}