# Installation and Usage Guide for instaNation PopUps

This guide will walk you through the process of setting up and using instaNation PopUps. The following steps will ensure you have all the necessary tools installed, understand how to clone the project, customize it, test it locally, and compile it into executables for both Windows and Mac.

## Prerequisites

Before you begin, you need to install a few essential tools:

### Git
Git is a version control system that lets us manage the changes to our source code over time. To install Git:
- **Windows**: Download and install Git from [Git for Windows](https://gitforwindows.org/).
- **Mac**: Install Git by running `brew install git` in the terminal. If you don't have Homebrew installed, get it from [Homebrew](https://brew.sh/).

### Node.js and npm
Node.js is a runtime environment that allows you to run JavaScript on your computer. npm is a package manager for JavaScript. To install both:
- **Download** from [Node.js official website](https://nodejs.org/) and install the version labeled “LTS.”

## Cloning the Repository

To get a copy of the source code on your local machine, you'll need to clone the repository:
1. Open your terminal.
2. Choose or create a directory where you want the project placed.
3. Run the following command:
   ```bash
   git clone https://github.com/angelformica/instanationpopup.git

## Installing Dependencies

After cloning the repository, you need to install the project dependencies. These are libraries and tools required by the project.
1. Navigate to the project directory in your terminal:
   cd instanationpopup
2. Run the following command:
   ```bash
   npm install

## Customizing the Application

To customize the text in the application:
1. Open the `index.html` file in the project directory with a text editor (like Notepad or TextEdit).
2. Modify the text inside the `<p>` tag to change the message displayed in the popup.
3. Save the file after making your changes.

## Testing the Application

To test the application on your local machine:
1. Open your terminal.
2. Navigate to the project directory.
3. Run the following command to start the application:
   ```bash
   npm start

## Compiling the Application

To compile the application into executables for Windows and Mac:
1. **For Windows**:
   ```bash
   npx electron-packager . instaNationPopup --platform=win32 --arch=x64
2. **For Mac**:
   ```bash
   npx electron-packager . instaNationPopup --platform=darwin --arch=x64

After running these commands, you will find the compiled applications in the `instaNationPopup-win32-x64` and `instaNationPopup-darwin-x64` directories within your project folder, depending on the target OS.

## Conclusion

By following these steps, you should be able to get the instaNationPopup application running and customized to your liking on both Windows and Mac. If you encounter any issues, make sure all steps were followed correctly, or refer to the specific tool's documentation for more detailed information.

