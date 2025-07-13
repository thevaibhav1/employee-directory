const form = document.getElementById("employee-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const employee = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    department: document.getElementById("department").value.trim(),
    role: document.getElementById("role").value.trim(),
  };

  if (
    !employee.firstName ||
    !employee.lastName ||
    !employee.email ||
    !employee.department ||
    !employee.role
  ) {
    alert("Please fill in all fields.");
    return;
  }

  console.log("Employee saved (in memory):", employee);
  alert("Employee saved in memory. (Check console log)");
  window.location.href = "/";
});

function cancel() {
  window.location.href = "/";
}
