// Form validation and enable/disable logic
function validateForm() {
  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  const specialCharRegex = /^[^a-zA-Z0-9]/;
  const spaceRegex = /\s/;
  
  if (!name) {
    nameError.textContent = "Name is required";
    isValid = false;
  } else if (specialCharRegex.test(name)) {
    nameError.textContent = "First letter cannot be a special character";
    isValid = false;
  } else if (spaceRegex.test(name)) {
    nameError.textContent = "No spaces allowed";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // DOB validation
  const dob = document.getElementById("dob").value;
  const dobError = document.getElementById("dobError");
  const dobRegex = /^\d{2}-\d{2}-\d{4}$/;
  
  if (!dob) {
    dobError.textContent = "Date of Birth is required";
    isValid = false;
  } else if (!dobRegex.test(dob)) {
    dobError.textContent = "Invalid format. Use DD-MM-YYYY";
    isValid = false;
  } else {
    dobError.textContent = "";
  }

  // Gender validation
  const gender = document.querySelector('input[name="gender"]:checked');
  const genderError = document.getElementById("genderError");
  
  if (!gender) {
    genderError.textContent = "Please select gender";
    isValid = false;
  } else {
    genderError.textContent = "";
  }

  // Hobbies validation
  const hobbies = document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked');
  const hobbiesError = document.getElementById("hobbiesError");
  
  if (hobbies.length === 0) {
    hobbiesError.textContent = "Please select at least one hobby";
    isValid = false;
  } else {
    hobbiesError.textContent = "";
  }

  // Phone validation
  const phone = document.getElementById("phone").value.trim();
  const phoneError = document.getElementById("phoneError");
  const phoneRegex = /^\d{10}$/;
  
  if (!phone) {
    phoneError.textContent = "Phone number is required";
    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Must be exactly 10 digits";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  // Document validation (only required for new students, not edits)
  const documentInput = document.getElementById("document");
  const documentError = document.getElementById("documentError");
  const editingId = document.getElementById("editingId") ? document.getElementById("editingId").value : "";
  
  if (!editingId && (!documentInput.files || documentInput.files.length === 0)) {
    documentError.textContent = "Please upload Aadhar/PAN card";
    isValid = false;
  } else {
    documentError.textContent = "";
  }

  // Education validation
  const education = document.getElementById("education").value;
  const educationError = document.getElementById("educationError");
  
  if (!education) {
    educationError.textContent = "Please select mode of education";
    isValid = false;
  } else {
    educationError.textContent = "";
  }

  // Enable/disable save button
  const saveBtn = document.getElementById("saveBtn");
  if (isValid) {
    saveBtn.disabled = false;
    saveBtn.style.cursor = "pointer";
  } else {
    saveBtn.disabled = true;
    saveBtn.style.cursor = "not-allowed";
  }
  
  return isValid;
}

// Auto-format DOB with dashes
document.getElementById("dob").addEventListener("input", function(e) {
  let value = e.target.value.replace(/\D/g, "");
  
  if (value.length >= 2) {
    value = value.substring(0, 2) + "-" + value.substring(2);
  }
  if (value.length >= 5) {
    value = value.substring(0, 5) + "-" + value.substring(5, 9);
  }
  
  e.target.value = value;
  validateForm();
});

// Phone number - only digits
document.getElementById("phone").addEventListener("input", function(e) {
  e.target.value = e.target.value.replace(/\D/g, "");
  validateForm();
});

// Add event listeners for all form fields
document.getElementById("name").addEventListener("input", validateForm);
document.getElementById("email").addEventListener("input", validateForm);
document.getElementById("education").addEventListener("change", validateForm);
document.getElementById("document").addEventListener("change", validateForm);

document.querySelectorAll('input[name="gender"]').forEach(radio => {
  radio.addEventListener("change", validateForm);
});

document.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener("change", validateForm);
});

// ─── Edit Mode ───────────────────────────────────────────────────────────────

function editStudent(id) {
  closeAllDropdowns();

  fetch(`http://localhost:3000/students`)
    .then(res => res.json())
    .then(data => {
      const student = data.find(s => s.id === id);
      if (!student) return;

      // Populate form fields
      document.getElementById("name").value = student.name;
      document.getElementById("email").value = student.email;
      document.getElementById("dob").value = student.dob;
      document.getElementById("phone").value = student.phone;
      document.getElementById("education").value = student.education;

      // Set gender radio
      document.querySelectorAll('input[name="gender"]').forEach(radio => {
        radio.checked = radio.value === student.gender;
      });

      // Set hobbies checkboxes
      const hobbiesList = student.hobbies.split(", ").map(h => h.trim());
      document.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach(cb => {
        cb.checked = hobbiesList.includes(cb.value);
      });

      // Store editing id
      document.getElementById("editingId").value = id;

      // Update form UI
      document.querySelector(".form-container h2").textContent = "Edit Student";
      document.getElementById("saveBtn").textContent = "Update";
      document.getElementById("docNote").style.display = "block";

      // Scroll to form
      document.querySelector(".form-container").scrollIntoView({ behavior: "smooth" });

      validateForm();
    });
}

function cancelEdit() {
  clearForm();
}

// ─── Add / Update ─────────────────────────────────────────────────────────────

function addStudent() {
  if (!validateForm()) {
    alert("Please fill all fields correctly!");
    return;
  }

  const editingId = document.getElementById("editingId").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const hobbies = Array.from(document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked'))
    .map(cb => cb.value).join(", ");
  const phone = document.getElementById("phone").value;
  const education = document.getElementById("education").value;
  const documentFile = document.getElementById("document").files[0];

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("dob", dob);
  formData.append("gender", gender);
  formData.append("hobbies", hobbies);
  formData.append("phone", phone);
  formData.append("education", education);
  if (documentFile) formData.append("document", documentFile);

  if (editingId) {
    // UPDATE existing student
    fetch(`http://localhost:3000/update/${editingId}`, {
      method: "PUT",
      body: formData
    })
    .then(res => res.text())
    .then(() => {
      alert("Student updated successfully!");
      loadStudents();
      clearForm();
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Error updating student!");
    });
  } else {
    // INSERT new student
    fetch("http://localhost:3000/add", {
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(() => {
      alert("Student added successfully!");
      loadStudents();
      clearForm();
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Error adding student!");
    });
  }
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("education").value = "";
  document.getElementById("document").value = "";
  document.getElementById("editingId").value = "";

  document.querySelectorAll('input[name="gender"]').forEach(r => r.checked = false);
  document.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('.error').forEach(e => e.textContent = "");

  document.querySelector(".form-container h2").textContent = "Student Form";
  document.getElementById("saveBtn").textContent = "Save";
  document.getElementById("saveBtn").disabled = true;
  document.getElementById("docNote").style.display = "none";
}

// ─── Load Students ────────────────────────────────────────────────────────────

function loadStudents() {
  fetch("http://localhost:3000/students")
    .then(res => res.json())
    .then(data => {
      let rows = "";
      data.forEach(s => {
        rows += `
          <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.email}</td>
            <td>${s.dob}</td>
            <td>${s.gender}</td>
            <td>${s.hobbies}</td>
            <td>${s.phone}</td>
            <td><a href="http://localhost:3000/download/${s.document_path}" class="download-link" download>Download</a></td>
            <td>${s.education}</td>
            <td>
              <div class="action-menu">
                <button class="dots-btn" onclick="toggleDropdown(event, ${s.id})">&#8942;</button>
                <div class="dropdown-menu" id="dropdown-${s.id}">
                  <button class="dropdown-item edit-item" onclick="editStudent(${s.id})">&#9998; Edit</button>
                  <button class="dropdown-item delete-item" onclick="showDeleteModal(${s.id})">&#128465; Delete</button>
                </div>
              </div>
            </td>
          </tr>`;
      });
      document.getElementById("tableData").innerHTML = rows;
    });
}

// ─── Dropdown ─────────────────────────────────────────────────────────────────

function toggleDropdown(event, id) {
  event.stopPropagation();
  closeAllDropdowns();
  const menu = document.getElementById(`dropdown-${id}`);
  menu.classList.toggle("show");
}

function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("show"));
}

document.addEventListener("click", closeAllDropdowns);

// ─── Custom Delete Modal ───────────────────────────────────────────────────────

function showDeleteModal(id) {
  closeAllDropdowns();
  const modal = document.getElementById("deleteModal");
  document.getElementById("deleteConfirmBtn").onclick = () => {
    deleteStudent(id);
    closeDeleteModal();
  };
  modal.style.display = "flex";
}

function closeDeleteModal() {
  document.getElementById("deleteModal").style.display = "none";
}

function deleteStudent(id) {
  fetch(`http://localhost:3000/delete/${id}`, {
    method: "DELETE"
  }).then(() => loadStudents());
}

// Show/hide cancel button based on edit state
  const observer = new MutationObserver(() => {
    const editingId = document.getElementById("editingId").value;
    document.getElementById("cancelBtn").style.display = editingId ? "block" : "none";
  });
  observer.observe(document.getElementById("editingId"), { attributes: true, attributeFilter: ["value"] });

// Patch setAttribute to trigger MutationObserver on value change via JS
  const originalEditingId = document.getElementById("editingId");
  const originalSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
  Object.defineProperty(originalEditingId, "value", {
    set(val) {
      originalSetter.call(this, val);
      this.setAttribute("data-val", val); // triggers observer via attribute
      document.getElementById("cancelBtn").style.display = val ? "block" : "none";
    },
    get() {
      return originalSetter ? this.getAttribute("data-val") || "" : "";
    }
  });

// ─── Init ─────────────────────────────────────────────────────────────────────

loadStudents();