let employees = [...document.querySelectorAll("tr[data-id]")].map((row) => ({
  id: row.dataset.id,
  firstName: row.children[0].innerText,
  lastName: row.children[1].innerText,
  email: row.children[2].innerText,
  department: row.children[3].innerText,
  role: row.children[4].innerText,
}));

const tbody = document.getElementById("employee-body");

document.getElementById("searchInput").addEventListener("input", applyFilters);

function applyFilters() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const filterFirstName = document
    .getElementById("filterFirstName")
    .value.toLowerCase();
  const filterDepartment = document
    .getElementById("filterDepartment")
    .value.toLowerCase();
  const filterRole = document.getElementById("filterRole").value.toLowerCase();

  tbody.innerHTML = "";

  employees.forEach((emp) => {
    const matchesSearch =
      emp.firstName.toLowerCase().includes(search) ||
      emp.lastName.toLowerCase().includes(search) ||
      emp.email.toLowerCase().includes(search);

    const matchesFilter =
      (!filterFirstName ||
        emp.firstName.toLowerCase().includes(filterFirstName)) &&
      (!filterDepartment ||
        emp.department.toLowerCase().includes(filterDepartment)) &&
      (!filterRole || emp.role.toLowerCase().includes(filterRole));

    if (matchesSearch && matchesFilter) {
      const row = document.createElement("tr");
      row.dataset.id = emp.id;
      row.innerHTML = `
        <td>${emp.firstName}</td>
        <td>${emp.lastName}</td>
        <td>${emp.email}</td>
        <td>${emp.department}</td>
        <td>${emp.role}</td>
        <td>
          <button onclick="editEmployee('${emp.id}')">Edit</button>
          <button onclick="deleteEmployee('${emp.id}')">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    }
  });
}

function clearFilters() {
  document.getElementById("searchInput").value = "";
  document.getElementById("filterFirstName").value = "";
  document.getElementById("filterDepartment").value = "";
  document.getElementById("filterRole").value = "";
  applyFilters();
}

function editEmployee(id) {
  alert("Edit " + id);
}

function deleteEmployee(id) {
  if (confirm(`Delete ${id}?`)) {
    employees = employees.filter((e) => e.id !== id);
    applyFilters();
  }
}

console.log("Employees loaded:", employees);
