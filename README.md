# Blog Post Management API with Node.js and Express

## Overview

This project is a blog post management application built with Node.js and Express. It provides a web interface for viewing, creating, editing, and deleting blog posts. The application interacts with an external blog API for managing posts and uses EJS templates for rendering the user interface.

## Features

- View a list of blog posts
- Create a new blog post
- Edit an existing blog post
- Delete a blog post
- Simple user interface using EJS templates

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/itsrajadarsh/blogPost.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd your-repository-name
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

## Configuration

Create a `.env` file in the root directory of the project to set up environment variables. You can configure it as follows:

```env
PORT=3000
API_URL=https://blog-api-server.vercel.app
```

- `PORT`: The port on which the Express server will run.
- `API_URL`: The base URL for the external blog API.

## Running the Application

To start the server, use:

```bash
npm start
```

The application will run on `http://localhost:3000`.

## Usage

### Routes

- **Home Page**
  
  - **URL:** `/`
  - **Method:** `GET`
  - **Description:** Fetches and displays a list of blog posts from the external API.

- **Create New Post Page**
  
  - **URL:** `/new`
  - **Method:** `GET`
  - **Description:** Displays a form for creating a new blog post.

- **Edit Post Page**
  
  - **URL:** `/edit/:id`
  - **Method:** `GET`
  - **Description:** Displays a form for editing an existing blog post with the given `id`.

- **Create a New Post**
  
  - **URL:** `/api/posts`
  - **Method:** `POST`
  - **Description:** Submits data to create a new blog post.

- **Update an Existing Post**
  
  - **URL:** `/api/posts/:id`
  - **Method:** `POST`
  - **Description:** Submits data to partially update the blog post with the given `id`.

- **Delete a Post**
  
  - **URL:** `/api/posts/delete/:id`
  - **Method:** `GET`
  - **Description:** Deletes the blog post with the given `id`.

### EJS Templates

- **`index.ejs`**: Renders the list of blog posts.
- **`modify.ejs`**: Renders the form for creating or editing a blog post.

## Error Handling

The application handles errors by sending a `500` status code with a relevant error message if an operation (fetch, create, update, delete) fails.

## Testing

Currently, there are no automated tests provided. Consider adding tests to ensure the reliability of the application.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a Pull Request.
7. And you are done.


## Contact

For any questions or suggestions, please reach out to adarshraj6113@gmail.com or open an issue on GitHub.
```
