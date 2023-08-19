const Add = {
  async init() {
  },

  _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      fetch('/data/DATA.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          error: false,
          message: 'Stories fetched successfully',
          listStory: [
            {
              id: 'story-FvU4u0Vp2S3PMsFg',
              name: 'Faisal Sulaiman',
              description:
                'In rhoncus lorem nec ex egestas mollis vel a mauris. Pellentesque vel diam at neque hendrerit bibendum. Quisque egestas, dolor eu semper dapibus, turpis neque.',
              photoUrl: 'https://source.unsplash.com/1200x700/?nature',
              createdAt: '2022-01-08T06:34:18.598Z',
            },
          ],
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log('Data has been posted');
          // this._goToDashboardPage();
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  },

  _getFormData() {
    const nameInput = document.querySelector('#validationCustomRecordName');
    const descriptionInput = document.querySelector('#validationCustomNotes');

    return {
      name: nameInput.value,
      description: descriptionInput.value,
    };
  },

  _updatePhotoPreview() {
    const evidenceImgChange = document.querySelector('#validationCustomEvidenceImgChange');
    const evidenceImgInput = document.querySelector('#validationCustomEvidence');

    const photo = evidenceImgInput.files[0];
    if (!photo) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      evidenceImgChange.parentElement.classList.remove('d-none');
      evidenceImgChange.style.backgroundImage = `url('${event.target.result}')`;
    };

    reader.readAsDataURL(photo);
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default Add;