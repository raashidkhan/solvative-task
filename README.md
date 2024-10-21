# Places Search Application

This project is a React application that allows users to search for places using a search box. It utilizes the GeoDB API to fetch city data based on user input and displays the results in a responsive data table with pagination.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Available Scripts](#available-scripts)
- [Usage](#usage)
- [Learn More](#learn-more)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To get started with the application, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/raashidkhan/solvative-task.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Features

- **Search Functionality**: Users can search for places using a search box with debounce functionality to optimize API calls.
- **Responsive Data Table**: Displays search results in a table format that adapts to different screen sizes.
- **Pagination**: Users can navigate through pages of results, with a default of three items displayed per page.
- **Error Handling**: Displays loading indicators and error messages when fetching data.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Usage

1. Enter a city name or prefix in the search box.
2. The application will fetch and display matching results in a data table.
3. Use the pagination controls to navigate through the results.
4. Adjust the number of items displayed per page using the input field.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
