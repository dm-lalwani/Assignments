function updateClock() {
    const clockElement = document.querySelector('.clock');
    const dateElement = document.querySelector('.date');
    const amPmElement = document.querySelector('.amPm');
  
    const now = new Date();
  
    // Format time in 12-hour format
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format, 0 becomes 12
    const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    const amPmString = `${amPm}`;
  
    // Format date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
  
    // Update elements
    clockElement.textContent = timeString;
    dateElement.textContent = dateString;
    amPmElement.textContent = amPmString;
  }
  
  // Initial update
  updateClock();
  
  // Update clock every second
  setInterval(updateClock, 1000);
  