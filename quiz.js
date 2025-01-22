// main.js

// Add basic interactivity for quizzes
document.getElementById('start-quiz').addEventListener('click', () => {
    alert('Starting the quiz...');
  });
  
  // Simulate progress tracking
  const progressTracker = document.getElementById('progress-tracker');
  
  // Dummy progress data
  const progressData = {
    "Lesson 1": "Completed",
    "Lesson 2": "In Progress",
    "Quiz 1": "Not Started",
  };
  
  // Render progress dynamically
  Object.entries(progressData).forEach(([item, status]) => {
    const progressItem = document.createElement('p');
    progressItem.textContent = `${item}: ${status}`;
    progressTracker.appendChild(progressItem);
  });
  