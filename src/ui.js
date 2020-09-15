// UI class
class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.postCancel = document.querySelector('.post-cancel');
        this.forState = 'add';
    }

    // Show all posts
    showPosts(posts) {
        let output = '';

        posts.forEach(function (post) {
            output += `
        <div class="card mb-3">
            <div class="card-body">
                <h4 class="card-title">${post.title}</h4>
                <p class="card-text">${post.body}</p>
                <a href="#" class="edit card-link" data-id="${post.id}">
                    <i class="fa fa-pencil"></i>
                </a>
                <a href="#" class="delete card-link" data-id="${post.id}">
                <i class="fa fa-remove"></i>
            </a>
            </div>
        </div>
        `;
        });

        this.post.innerHTML = output;
    }

    // Show alert message
    showAlert(message, className) {
        this.clearAlert();

        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.postsContainer')
        // Get posts div
        const posts = document.querySelector('#posts');
        // Insert alert div
        container.insertBefore(div, posts);
        // Timeout
        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }

    // Clear alert message
    clearAlert() {
        // current alert
        const currentAlert = document.querySelector('.alert');
        // if alert remove
        if (currentAlert) {
            currentAlert.remove();
        }
    }
    // Clear all fields
    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    // Fill form to edit
    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;

        this.changeFormState('edit');
    }

    // Clear ID hidden values
    clearIdInput() {
        this.idInput.value = '';
    }

    // Change the form state
    changeFormState(type) {
        if (type === 'edit') {
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';
            this.postCancel.style = 'display: block'
        } else {
            this.postSubmit.textContent = 'Post It';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';
            // Remove cancel btn
            this.postCancel.style = 'display: none'
            if (document.querySelector('.post-cancel')) {
                this.postCancel.style = 'display: none'
            }
            // Clear ID from hidden field
            this.clearIdInput();
            // Clear text
            this.clearFields();
        }
    }
}

export const ui = new UI();