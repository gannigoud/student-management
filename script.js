const form = document.querySelector("#student-form");
const studentList = document.querySelector("#student-list");
const searchInput = document.querySelector("#search");
const count = document.querySelector("#student-count");
const emptyMessage = document.querySelector("#empty-message");

let students = JSON.parse(localStorage.getItem("students")) || [];

function saveStudents() {
  localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents(filter = "") {
  studentList.innerHTML = "";
  const query = filter.trim().toLowerCase();
  const visibleStudents = students.filter((student) =>
    `${student.name} ${student.email} ${student.course}`.toLowerCase().includes(query)
  );

  count.textContent = `${students.length} student${students.length === 1 ? "" : "s"}`;
  emptyMessage.hidden = visibleStudents.length > 0;
  emptyMessage.textContent = students.length === 0
    ? "No students yet. Add your first student above."
    : "No matching students found.";

  visibleStudents.forEach((student) => {
    const row = document.createElement("tr");
    [student.name, student.email, student.course].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.addEventListener("click", () => {
      students = students.filter((item) => item.id !== student.id);
      saveStudents();
      renderStudents(searchInput.value);
    });
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    studentList.appendChild(row);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const student = {
    id: crypto.randomUUID(),
    name: formData.get("name").trim(),
    email: formData.get("email").trim(),
    course: formData.get("course")
  };

  students.push(student);
  saveStudents();
  form.reset();
  renderStudents(searchInput.value);
});

searchInput.addEventListener("input", () => renderStudents(searchInput.value));
renderStudents();
