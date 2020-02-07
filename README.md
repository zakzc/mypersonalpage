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
- React.JS.


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
- <del> Work on style implementation for the contents.
- Solve the image import for svgs.<br>
		1. Use a constant to load the image. Make an area in the json file for the images.<br>
		2. Make a function that maps the image addresses into an array, like in the original verstion.
- <del> Refactor the contacts in the json file and add the links.
- <del> Add the links to the Projects (also from json file)
- Remove all console.logs used during development.
- Finally, go error message by error message in the console and fix all of them. Console must be totally clean at the end.

#### CSS
- <del>Make grids using flexbox.
- <del>Make the cards using css only
- <del> Make a card with image and sepia on hover

- <del>Make the svg's gray to follow the project colors. Choose tone of gray.
- Soften the transition between the pages with css or some react alternative.
- <del> Make the card cover the whole content and not each part and paragraph.
- <del> Fix the click on the navigation bar so that it goes to the childrem elements even if you click on an empty area.
- Make the images in projects area close to the center
- Check alternatives to text display.

#### Refactoring stage
- Refactor navigation into a single function in order to avoid the quirks of access directly to /about etc. OR, maybe, make a Component WIll mount that sets the navigation to invisible before the elements are loaded. <==== HERE NOW
- **Refactor the website for mobile!!**

#### Final Stage
- Add it to github.
- Add Google Analytics.
- Deploy it.


### Future implementations
- Incorporate a blog, with a backend using Node.

On reload the constructur is making the SenddataBack make the nav tru again. Try to take it out as a fuction of on click only!!!!!



## Personal Notes
Even though it looks simple, with a minimalist black-white look, the project behind the scenes involves quite a bit of React (states, props, functions) and a lot of CSS. My option was to minimize the use of external libraries, like bootstrap (that would make the rendering of the columns much easier, withoub the pletora of flexbox everywhere) in order to give it a smaller size/fast speed, using, as much as possible, native html and css functionalities. This is the guideline of the project. <br>
I know that it's a bit of an overkill to use React, since most, if not all, of this could be rendered in plain html+css+vanilaJS-or-jQuery, but the idea is to expand the project into a blog and incorporate other options (aligning also backend into the project) in the future. For that, I prefered the solid base of React from the very beginning, plus the fact that it helped me practice a little.
<br>


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
