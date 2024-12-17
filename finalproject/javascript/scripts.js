document.addEventListener('DOMContentLoaded', () => {
  
  // Toggle dropdown visibility
  function toggleDropdown(event) {
    const dropdown = event.target.closest('.custom-dropdown');
    const options = dropdown.querySelector('.dropdown-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
  }

  // Select an option from the dropdown
  function selectOption(event) {
    const selectedOption = event.target;
    const dropdown = selectedOption.closest('.custom-dropdown');
    const label = dropdown.querySelector('.dropdown-label');

    // Update the label with the selected option text
    label.textContent = selectedOption.textContent;

    // Close the dropdown
    const options = dropdown.querySelector('.dropdown-options');
    options.style.display = 'none';

    // Store the selected value in the dropdown dataset
    dropdown.dataset.value = selectedOption.dataset.value;

    // If the selected dropdown is borough, update the page URL
    if (dropdown.id === 'borough-dropdown') {
      const selectedBorough = selectedOption.dataset.value;
      const baseURL = window.location.origin; // Get the base URL of the current site
      window.location.href = `../borough-pages/${selectedBorough}.html`; // Redirect to the corresponding borough page
    } else {
      // If it's not the borough dropdown, filter the programs based on selection
      filterPrograms();
    }
  }

  // Filter the programs based on selected filters
  function filterPrograms() {
    const discipline = document.getElementById('discipline-dropdown').dataset.value;
    const degree = document.getElementById('degree-dropdown').dataset.value;
    const borough = document.getElementById('borough-dropdown').dataset.value;

    const programCards = document.querySelectorAll('.program-card'); 

    programCards.forEach(card => {
      const disciplineValue = card.dataset.discipline;
      const degreeValue = card.dataset.degree;
      const boroughValue = card.dataset.borough;

      const matchesDiscipline = !discipline || disciplineValue === discipline;
      const matchesDegree = !degree || degreeValue === degree;
      const matchesBorough = !borough || boroughValue === borough;

      // Show or hide the card based on the selected filters
      if (matchesDiscipline && matchesDegree && matchesBorough) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Add event listeners to all dropdowns
  document.querySelectorAll('.custom-dropdown').forEach((dropdown) => {
    const label = dropdown.querySelector('.dropdown-label');
    const options = dropdown.querySelectorAll('.dropdown-options li');

    // Toggle dropdown visibility when the label is clicked
    label.addEventListener('click', toggleDropdown);

    // When an option is clicked, select it and apply the appropriate logic
    options.forEach((option) => {
      option.addEventListener('click', selectOption);
    });
  });

  // Initial filtering of programs (in case any options are preselected)
  filterPrograms();
});



document.addEventListener('DOMContentLoaded', () => {
  
  function toggleDropdown(event) {
    const dropdown = event.target.closest('.custom-dropdown');
    const options = dropdown.querySelector('.dropdown-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
  }

  
  function selectOption(event) {
    const selectedOption = event.target;
    const dropdown = selectedOption.closest('.custom-dropdown');
    const label = dropdown.querySelector('.dropdown-label');

    
    label.textContent = selectedOption.textContent;

    
    const options = dropdown.querySelector('.dropdown-options');
    options.style.display = 'none';

    
    dropdown.dataset.value = selectedOption.dataset.value;

    
    filterPrograms();
  }

  
  function filterPrograms() {
    const discipline = document.getElementById('discipline-dropdown').dataset.value;
    const degree = document.getElementById('degree-dropdown').dataset.value;
    const borough = document.getElementById('borough-dropdown').dataset.value;

    const programCards = document.querySelectorAll('.program-card'); 

    programCards.forEach(card => {
      const disciplineValue = card.dataset.discipline;
      const degreeValue = card.dataset.degree;
      const boroughValue = card.dataset.borough;

      const matchesDiscipline = !discipline || disciplineValue === discipline;
      const matchesDegree = !degree || degreeValue === degree;
      const matchesBorough = !borough || boroughValue === borough;

      
      if (matchesDiscipline && matchesDegree && matchesBorough) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  
  document.querySelectorAll('.custom-dropdown').forEach((dropdown) => {
    const label = dropdown.querySelector('.dropdown-label');
    const options = dropdown.querySelectorAll('.dropdown-options li');

    
    label.addEventListener('click', toggleDropdown);

    
    options.forEach((option) => {
      option.addEventListener('click', selectOption);
    });
  });

  
  filterPrograms();
});