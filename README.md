
# Chat App

A real-time chat application built with **React**, **Firebase** for authentication and database, and styled using **CSS**. The app allows users to sign up, log in, send messages, and reset passwords, with all messages stored in Firebase Firestore. The app will be deployed on **Vercel** for public use.
## Live Demo

A live version of the app will be available at  [https://chat-app-react-firebase-eight.vercel.app/](https://chat-app-react-firebase-eight.vercel.app/)

## Screenshots
![1](https://github.com/user-attachments/assets/d0decd0d-0f2e-4f55-b015-0ac7c15c0bdc)
![2](https://github.com/user-attachments/assets/f2b48b20-2ed4-4859-b5fb-d6025396ffef)
![3](https://github.com/user-attachments/assets/4a4479a4-0f26-46e3-9861-bfdd2f6f57d1)
![4](https://github.com/user-attachments/assets/2dfe3e71-5d23-4493-a35f-9bfae0769b6d)



## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Users can sign up, log in, log out, and reset their passwords.
- **Real-time Messaging**: Send and receive messages in real time using Firebase Firestore.
- **User Profiles**: Each user can set up their profile, including their name, avatar, and bio.
- **Last Seen Feature**: Users can see when others were last online.
- **Responsive Design**: The app works across different screen sizes (mobile, tablet, desktop).







## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Firebase**: For backend services including Firestore, Authentication, and Storage.
- **CSS**: Styling the user interface.
- **Render**: Platform for deploying the app.

## Setup & Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/oayman0/chat-app-react-firebase

-   **Install dependencies**:
    
    bash
    
    Copy code
    
    `npm install` 
    
-   **Set up Firebase**:
    
    -   Go to Firebase Console and create a new project.
    -   Enable **Authentication** and **Firestore** in the Firebase dashboard.
    -   Create a `.env` file in your project root and add your Firebase configuration (as shown below).
-   **Environment Variables**: Add your Firebase credentials to a `.env` file as follows:
    

```
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id`
 ```


 2. **Run the development server**
```    
    npm run dev
   ```

3.  **Deploy on Render**:
    
    -   Sign up at [Render](https://render.com/).
    -   Connect your GitHub repository.
    -   Configure environment variables in the Render dashboard using the values from your `.env` file.
    -   Deploy the app and get a live link.

## Environment Variables

The project uses the following Firebase-related environment variables (added to `.env` file):
```
`REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id` 
```

## Usage

Once the project is set up and running, users can:

-   Sign up for a new account.
-   Log in with their email and password.
-   Reset their password via email if forgotten.
-   Send and receive real-time messages.
-   Customize their profile (name, avatar, bio).
-   View the last online status of other users.
