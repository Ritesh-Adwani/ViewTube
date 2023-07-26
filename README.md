# ViewTube

- This is a clone of YouTube, a video-sharing platform, where users can explore popular videos, watch videos, interact with comments, like videos, manage subscriptions, search for videos, and browse videos based on categories.
- The application utilizes Firebase authentication for user login with Google accounts.

## Features

**User Authentication:**

- Users can sign in using their Google accounts through Firebase authentication.

**Home Page:**

- The home page displays a collection of the most popular videos.
- Users can click on a video to watch it,which redirects them to the `Watch Screen` where they can view related videos, and access the comment section.
- Users can like videos to show their appreciation.

**Comment Section:**

- Users can comment on videos and engage in discussions.
- All Comments are displayed in a threaded format.

**Subscriptions:**

- Users can view their subscriptions and stay updated with new videos from their favorite channels.

**Search:**

- Users can search for videos or channels using keywords or phrases.
- The search feature provides relevant search results based on the user's query.

**Category Bar:**

- Users can browse videos based on specific categories.
- Clicking on a category in the category bar will display videos related to that category.

**Channel Page:**

- Clicking on a channel allows users to view the videos uploaded by that channel.
- Users can explore the content of individual channels and access videos directly.

## Technologies Used

**React:**

- A JavaScript library for building user interfaces.

**Firebase:**

- A backend service used for user authentication.

**YouTube Data API:**

- Used to fetch video data and related information.

**HTML/CSS:**

- Markup and styling for the application.

**JavaScript:**

- Programming language for building interactive functionalities.

**Redux:**

- State management library for managing application state.

## Setup and Installation

- Clone the repository from GitHub.
- Install the dependencies by running `npm install`.
- Create a Firebase project and configure Firebase authentication.
- Obtain a YouTube Data API key from the Google Developer Console.
- Update the Firebase and YouTube API configurations in the application.
- Run the application using `npm run dev`.
- Access the application in your web browser at localhost.

## Note:

- Sometimes the details might not be fetched properly or certain features won't work probably because of the API.
- Try logging out and then login again in such a case and might probably solve the issue
