const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#story-title').value.trim();
    //TODO: add a selector(s) for the genre tags
    //const needed_funding = document.querySelector('#project-funding').value.trim();
    const text = document.querySelector('#story-text').value.trim();
    //const author = req.session.username;
    //const dateUploaded = format_date(new Date);

    if (title && text) {
      const response = await fetch(`/api/story`, {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        //body: JSON.stringify({ title, text, author, dateUploaded }),
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
  