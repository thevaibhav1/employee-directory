<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Add/Edit Employee</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <h1>Add/Edit Employee</h1>

  <form id="employee-form">
    <label>First Name:
      <input type="text" id="firstName" required>
    </label><br>

    <label>Last Name:
      <input type="text" id="lastName" required>
    </label><br>

    <label>Email:
      <input type="email" id="email" required>
    </label><br>

    <label>Department:
      <input type="text" id="department" required>
    </label><br>

    <label>Role:
      <input type="text" id="role" required>
    </label><br>

    <button type="submit">Save</button>
    <button type="button" onclick="cancel()">Cancel</button>
  </form>

  <script src="/js/add_edit.js"></script>
</body>
</html>
