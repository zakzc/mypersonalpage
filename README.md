# Zak Zangrando's Personal WebPage
==================================


## Objetive

This project develops my **Personal Webpage** aimed at displaying my CV and previous projects.

## How to:

Dev Mode: Go to a Terminal and run **npm start**. Since it is a React implementation, it will show the page at <localhost:3000> in any web browser.

Build: just access the webpage at: **address**.

## Technologies used:

This project was developed using:

- The usual HTML5 and CSS3,
- ReactJSj,


## TO DO:

#### Development
- <del>Develop static html to serve as base of the future dynamic file.
- <del>Start React project.
- <del>Add git repository.
- <del> Define the dynamic elements in a json file.
- <del> Determine which contents is inmutable, so that it is used from constants, and which is mutable, coming from the component state.
- <del> Develop initial approach to navigation, using only html basics.
- <del> Implement the navigation dynamically, using onClick.
- <del> Use the state and props to update the navigation.
- Work on style implementation for the contents.
	1. <del>Make grids using flexbox.
	2. <del>Make the cards using css only
	3. Make a card with image and contents on hover <---- HERE NOW
- Display the images dynamically into React from data in the json file <---- HERE NOW

#### Refactoring stage
- Refactor navigation into a single function in order to avoid the quirks of access directly to /about etc.
- Refactor the website for mobile access

#### Final Stage
- Add it to github.
- Deploy it.



## Personal Notes
Even though it looks simple, with a minimalist black-white look, the project behind the scenes involves quite a lot of React (states, props, functions) and CSS. My option was to minimize the use of external libraries, like bootstrap (that would make the rendering of the columns much easier, withoub the pletora of flexbox everywhere) in order to give it a smaller size/fast speed, using, as much as possible, native html and css functionalities. This is the guideline of the project.


------------------------------------------------------------------------


# React ReadMe file

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
