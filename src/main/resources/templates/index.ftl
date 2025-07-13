<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Employee Directory</title>
  <link rel="stylesheet" href="/styles.css">
 
</head>
<body>
  <h1>Employee Directory</h1>

  <!-- Search bar -->
  <input type="text" id="searchInput" placeholder="Search by name or email..." oninput="applyFilters()" />

  <!-- Filter sidebar/popup -->
  <div id="filterPanel">
    <label>First Name:
      <input type="text" id="filterFirstName" oninput="applyFilters()" />
    </label><br>
    <label>Department:
      <input type="text" id="filterDepartment" oninput="applyFilters()" />
    </label><br>
    <label>Role:
      <input type="text" id="filterRole" oninput="applyFilters()" />
    </label><br>
    <button onclick="clearFilters()">Clear Filters</button>
  </div>

  <table id="employee-table">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Department</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody id="employee-body">
      <#list employees as emp>
        <tr data-id="${emp.id}">
          <td>${emp.firstName}</td>
          <td>${emp.lastName}</td>
          <td>${emp.email}</td>
          <td>${emp.department}</td>
          <td>${emp.role}</td>
          <td>
            <button onclick="editEmployee('${emp.id}')">Edit</button>
            <button onclick="deleteEmployee('${emp.id}')">Delete</button>
          </td>
        </tr>
      </#list>
    </tbody>
  </table>

  <script src="/js/app.js"></script>
</body>
</html>
