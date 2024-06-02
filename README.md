# React CRUD App with JSON Server

This is a simple CRUD (Create, Read, Update, Delete) application built with React for the frontend and JSON Server to simulate a backend REST API. The purpose of this application is to demonstrate how to perform CRUD operations using React components and interact with a simulated backend server using JSON Server.

## Features

- **Create:** Add new users to the system.
- **Read:** View a list of users and their details.
- **Update:** Modify user information.
- **Delete:** Remove users from the system.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- Install your preferred code editor on your local machine e.g VS Code, Sublime, Atom
- Basic understanding of React.js and REST APIs.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/CletsyMedia/CRUD_OPS.git
    ```

2. Navigate into the project directory:

    ```bash
    cd CRUD_OPS
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

## Usage

1. Start the JSON Server and target the json directory to simulate the backend:

    ```bash
    json-server --watch src/components/DataBase/db.json
    ```

   This will start the JSON Server with the data stored in `db.json` file.

2. Start the React application with vite command:

    ```bash
    npm run dev
    ```

   This will start the development server for the React application. The app will be accessible at `http://localhost:3000`.

3. You can now perform CRUD operations on the application:

   - **Create:** Click on the "Add +" button, fill in the user details, and click "Add".
   - **Read/View:** The list of users will be displayed on the homepage.
   - **Update:** Click on the "Edit" button next to a user, make the necessary changes, and click "Update".
   - **Delete:** Click on the "Delete" button next to a user to remove them from the system.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or feature requests, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [MIT License](LICENSE) file for details.

© 2024 CletsyMedia. All rights reserved.

## Acknowledgments

- This project was inspired by the need to demonstrate CRUD operations in a React application.
- Special thanks to JSON Server for providing a simple way to mock a REST API.
