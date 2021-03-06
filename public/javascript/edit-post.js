async function editFormHandler(event) {
  event.preventDefault();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const sighting = document.querySelector('textarea[name="post-sighting"]').value;
  const description = document.querySelector('textarea[name="post-description"]').value;
  const datetime = document.querySelector('input[name="post-datetime"]').value;
  const location = document.querySelector('input[name="post-location"]').value;
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      sighting,
      description,
      datetime,
      location
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);