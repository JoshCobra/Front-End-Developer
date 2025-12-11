# How do I set up a Node.js development environment?

To set up a Node.js development environment, follow these steps:
1. **Install Node.js**:
   - Go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version for your operating system (Windows, macOS, or Linux).
   - Run the installer and follow the prompts to complete the installation.

2. **Verify Installation**:
   - Open your terminal or command prompt.
    - Type `node -v` and press Enter. This command will display the installed Node.js version.
    - Type `npm -v` and press Enter. This command will display the installed npm (Node Package Manager) version.

3. **Set Up a Project Directory**:
    - Create a new directory for your Node.js project using the command:
      ```
      mkdir my-nodejs-project
      ```
    - Navigate into the project directory:
      ```
      cd my-nodejs-project
      ```

4. **Initialize a New Node.js Project**:
    - Run the following command to create a `package.json` file, which will manage your project's dependencies and scripts:
      ```
      npm init -y
      ```
    - This command creates a default `package.json` file in your project directory.

5. **Install a Code Editor**:
    - Download and install a code editor like Visual Studio Code (VS Code) from [https://code.visualstudio.com/](https://code.visualstudio.com/).
    - Open your project directory in the code editor.

6. **Install Additional Packages (Optional)**:
    - You can install additional Node.js packages using npm. For example, to install the Express framework, run:
      ```
      npm install express
      ```

7. **Create Your First Node.js File**:
    - Create a new file named `app.js` in your project directory.
    - Open `app.js` in your code editor and add the following code:
      ```javascript
      console.log('Hello, Node.js!');
      ```
    - Save the file.

8. **Run Your Node.js Application**:
    - In your terminal, run the following command to execute your Node.js application:
        ```
        node app.js
        ```
    - You should see the output `Hello, Node.js!` in the terminal.

Congratulations! You have successfully set up a Node.js development environment. You can now start building your Node.js applications.