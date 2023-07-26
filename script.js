function submitForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
    const messageInput = document.getElementById('message');
    const outputDiv = document.getElementById('output');
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const age = parseInt(ageInput.value.trim(), 10);
    const message = messageInput.value.trim();
  
    let isValid = true;
  
    if (name === '') {
      document.getElementById('nameError').innerText = 'Name is required';
      isValid = false;
    } else {
      document.getElementById('nameError').innerText = '';
    }
  
    if (email === '') {
      document.getElementById('emailError').innerText = 'Email is required';
      isValid = false;
    } else {
      document.getElementById('emailError').innerText = '';
    }
  
    if (isNaN(age) || age <= 0) {
      document.getElementById('ageError').innerText = 'Age must be a positive number';
      isValid = false;
    } else {
      document.getElementById('ageError').innerText = '';
    }
  
    if (message === '') {
      document.getElementById('messageError').innerText = 'Message is required';
      isValid = false;
    } else {
      document.getElementById('messageError').innerText = '';
    }
  
    if (isValid) {
      outputDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
  
      // Clear input fields after submission
      nameInput.value = '';
      emailInput.value = '';
      ageInput.value = '';
      messageInput.value = '';
    }
  }
  