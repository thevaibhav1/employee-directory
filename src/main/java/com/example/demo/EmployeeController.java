package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Map;

@Controller
public class EmployeeController {

  @GetMapping("/")
  public String index(Model model) {
    List<Map<String, String>> employees = List.of(
        Map.of("id", "EMP001", "firstName", "John", "lastName", "Doe", "email", "john@example.com", "department",
            "Engineering", "role", "Developer"),
        Map.of("id", "EMP002", "firstName", "Jane", "lastName", "Smith", "email", "jane@example.com", "department",
            "HR", "role", "Manager"));
    model.addAttribute("employees", employees);
    return "index";
  }

  @GetMapping("/add-edit")
  public String addEdit() {
    return "add_edit";
  }
}
