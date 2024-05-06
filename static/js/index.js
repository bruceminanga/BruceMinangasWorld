
let currentStep = 1;
const totalSteps = document.querySelectorAll('.step').length;

function nextStep() {
  const currentStepElement = document.getElementById(`step${currentStep}`);
  currentStepElement.style.display = 'none';

  currentStep++;
  if (currentStep > totalSteps) {
    alert('Congratulations! You have completed the guide.');
    resetGuide();
    return;
  }

  const nextStepElement = document.getElementById(`step${currentStep}`);
  nextStepElement.style.display = 'block';
}

function resetGuide() {
  currentStep = 1;
  document.querySelectorAll('.step').forEach(step => {
    step.style.display = 'none';
  });
  document.getElementById('step1').style.display = 'block';
}

