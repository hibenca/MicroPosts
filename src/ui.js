class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.post = document.querySelector('#posts');
        this.post = document.querySelector('#posts');
        this.post = document.querySelector('#posts');
    }

showPosts(posts) {
    let output = '';

    posts.forEach(function(post) {
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


    clearAlert() {
        // current alert
        const currentAlert = document.querySelector('.alert');
        // if alert remove
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

}

export const ui = new UI();