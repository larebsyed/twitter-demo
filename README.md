# Twitter Demo

This project is a simplified front-end clone of Twitter built with React and styled with Tailwind CSS. It aims to demonstrate the basic functionalities of Twitter, such as tweeting and viewing tweets. This demo app works offline and uses PouchDB for local data storage, making it a great starting point for developers looking to understand how to build offline-first applications with React.

## Features

- **Tweeting**: Users can post new tweets.
- **Feed**: Users can view a list of all tweets.
- **Offline Support**: The app uses PouchDB to store data locally, allowing for offline functionality.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **PouchDB**: An open-source JavaScript database that allows you to store data locally.
## Project Structure

The `src` folder is organized into several directories, each serving a specific purpose in the project architecture:

- **`components`**: This directory contains reusable UI components (e.g., Hash, UserCard) that can be used throughout the application.

- **`contexts`**: Here, you'll find React Context files that are used to manage and distribute application state across the component tree without having to prop-drill.

- **`hooks`**: This folder includes custom React hooks that encapsulate reusable logic (e.g., useTweets to fetch and display tweets) to be shared across components.

- **`layout`**: Contains components that define the overall layout of the application, such as headers, footers, and navigation bars, ensuring a consistent look and feel across different pages.

- **`pages`**: This directory hosts the different pages of the application (e.g., Home, Profile), each representing a unique screen/view.

- **`utils`**: Utility functions and helpers (e.g., date formatting, PouchDB configurations) that are used across the application are stored here.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/larebsyed/twitter-demo.git
```
2. Install NPM packages
```sh
npm install
```
3. Start the development server
```sh
npm start
```

## Usage

After starting the development server, the app will be running on [http://localhost:3000](http://localhost:3000). You can start by posting a new tweet or browsing the feed of existing tweets.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Lareb Syed - lareb.khalil.syed@gmail.com

Project Link: [https://github.com/larebsyed/twitter-demo](https://github.com/larebsyed/twitter-demo)

---

