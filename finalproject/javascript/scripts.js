document.addEventListener('DOMContentLoaded', () => {
    // Get filter elements
    const searchButton = document.getElementById('search-button');
    const disciplineFilter = document.getElementById('discipline-filter');
    const degreeFilter = document.getElementById('degree-filter');
    const boroughFilter = document.getElementById('borough-filter');
    const programCards = document.querySelectorAll('.program-card'); // All program cards
  
    // Function to filter programs based on selected filters
    function filterPrograms() {
      // Get the selected filter values
      const disciplineValue = disciplineFilter.value.toLowerCase();
      const degreeValue = degreeFilter.value.toLowerCase();
      const boroughValue = boroughFilter.value.toLowerCase();
  
      programCards.forEach(card => {
        const discipline = card.dataset.discipline.toLowerCase();  // Get discipline from data-attribute
        const degree = card.dataset.degree.toLowerCase();  // Get degree from data-attribute
        const borough = card.dataset.borough.toLowerCase();  // Get borough from data-attribute
  
        // Show or hide cards based on matching filters
        const matchesDiscipline = !disciplineValue || discipline.includes(disciplineValue);
        const matchesDegree = !degreeValue || degree.includes(degreeValue);
        const matchesBorough = !boroughValue || borough.includes(boroughValue);
  
        // If the card matches all selected filters, show it; else, hide it
        if (matchesDiscipline && matchesDegree && matchesBorough) {
          card.style.display = 'block';  // Show the card
        } else {
          card.style.display = 'none';  // Hide the card
        }
      });
    }
  
    // Trigger filtering when the user clicks the "Search" button
    searchButton.addEventListener('click', (event) => {
      event.preventDefault();  // Prevent form submission to stop page reload
      filterPrograms();  // Call filter function on search click
    });
  
    // Trigger filtering when any of the dropdown selections change
    disciplineFilter.addEventListener('change', filterPrograms);
    degreeFilter.addEventListener('change', filterPrograms);
    boroughFilter.addEventListener('change', filterPrograms);
  });
  