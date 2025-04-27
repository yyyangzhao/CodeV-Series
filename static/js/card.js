document.addEventListener('DOMContentLoaded', () => {
    const showcaseContainer = document.getElementById('showcase-columns');
    // Select direct children columns
    const columns = showcaseContainer.querySelectorAll(':scope > .column.is-one-third');

    showcaseContainer.addEventListener('mouseenter', (event) => {
      // Only proceed if no column is currently expanded
      if (!showcaseContainer.classList.contains('expansion-active')) {
        const targetColumn = event.target.closest('#showcase-columns > .column.is-one-third');

        if (targetColumn) {
          // Mark container as active to lock the expansion
          showcaseContainer.classList.add('expansion-active');

          // Expand the target column and hide others
          columns.forEach(col => {
            if (col === targetColumn) {
              col.classList.add('is-expanded');
              col.classList.remove('is-sibling-hidden'); // Ensure it's visible
            } else {
              col.classList.add('is-sibling-hidden');
              col.classList.remove('is-expanded'); // Ensure others aren't expanded
            }
          });
        }
      }
    }, true); // Use capture phase

    showcaseContainer.addEventListener('mouseleave', () => {
      // Only reset if expansion was active
      if (showcaseContainer.classList.contains('expansion-active')) {
         // Mark container as inactive
        showcaseContainer.classList.remove('expansion-active');

        // Reset all columns: remove expansion and hidden states
        columns.forEach(col => {
          col.classList.remove('is-expanded');
          col.classList.remove('is-sibling-hidden');
        });
      }
    });

    // Optional: Prevent accidental text selection during hover/transitions
    showcaseContainer.addEventListener('mousedown', (event) => {
        if (!event.target.closest('pre, p, h1, h2, h3, h4, h5, h6')) {
             event.preventDefault();
        }
    });
  });