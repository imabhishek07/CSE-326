// ADDING EVENT LISTNER FOR FORM SUBMIT

document.getElementById('cta-form').addEventListener('submit', e => {
  e.preventDefault();

  // FINDING INPUTS

  const nameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email-id');

  // NOTIFING USER ABOUT FORM SUBMISSION

  const formSubmissionMsg = document.querySelector('.form-submission-msg');

  formSubmissionMsg.innerHTML = `Thanks ${nameInput.value} your request has been submitted`;

  nameInput.value = '';
  emailInput.value = '';

  setTimeout(() => {
    formSubmissionMsg.innerHTML = '';
  }, 3000);
});
