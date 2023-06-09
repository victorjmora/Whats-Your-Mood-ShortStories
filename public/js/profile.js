const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#story-title').value.trim();
    const genreTag1 = document.querySelector('#form-select-1').value.trim();
    const text = document.querySelector('#story-text').value.trim();
    

    if (title && text && genreTag1 ) {//check for title, text and genretag before accepting a new story
      
      const response = await fetch(`/api/story`, {
        method: 'POST',
        body: JSON.stringify({ title, text, genreTag1 }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create story');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    console.log("reached delete button handler on front end");
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/story/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete story');
      }
    }
  };
  
  document
    .querySelector('.new-story-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.story-list')
    .addEventListener('click', delButtonHandler);
  