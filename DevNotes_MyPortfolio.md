# My Portfolio Development Notes
==================================

# TO DO:

## Development
- <del>Develop static html to serve as base of the future dynamic file.
- <del>Start React project.
- <del>Add git repository.
- <del> Define the dynamic elements in a json file.
- <del> Determine which contents is inmutable, so that it is used from constants, and which is mutable, coming from the component state.
- <del> Develop initial approach to navigation, using only html basics.
- <del> Implement the navigation dynamically, using onClick.
- <del> Use the state and props to update the navigation.
- <del> Work on style implementation for the contents.
- <del> Solve the image import for svgs.<br>
		1. <del> Use a constant to load the image. Make an area in the json file for the images.<br>
		2. Make a function that maps the image addresses into an array, like in the original verstion.
- <del> Refactor the contacts in the json file and add the links.
- <del> Add the links to the Projects (also from json file)
- <del> Remove all console.logs used during development.
- <del> Finally, go error message by error message in the console and fix all of them. Console must be totally clean at the end.</del>
	1. Can't fix the error map message, since it comes from Chrome and seems to be a bug.

## CSS
- <del>Make grids using flexbox.
- <del>Make the cards using css only
- <del> Make a card with image and sepia on hover
- <del>Make the svg's gray to follow the project colors. Choose tone of gray.
- <del> Make the card cover the whole content and not each part and paragraph.
- <del> Fix the click on the navigation bar so that it goes to the childrem elements even if you click on an empty area.
- <del> Make the images in projects area close to the center
- <del> Check alternatives to text display.

## Layout
- Put the house symbol in a circle and recheck the gray.
- Make the favicon. Make it gray?
- Add my name to the page.

## Mobile refactoring
- <del> Transform what is side by side in the layout with top-botton. </del><br />
	Note: Yes, I know mobile should come first, but the differences to mobile are merely organizational (top-down instead of side by sice), so I did it desktop first.

## Animations and Effects
- __Soften the transition between the pages with react-spring.__<br>
 
1. Make a branch **pageTransitions** on git
2. add react-spring
3. Adapt the code

#====---->>> HERE NOW <<<----====#

# Refactoring
- <del> Refactor navigation into a single function in order to avoid the quirks of access directly to /about etc. OR, maybe, make a Component WIll mount that sets the navigation to invisible before the elements are loaded.
- <del> Refactor the website for mobile!!<br>
	1. Find the point of overflow in the mobile rendering of the house and About/Project background</del>.



## Final Stage
- Last checks:
	1. Should I remove sourceMap to take that error out?
- Add it to github.
- Add Google Analytics with React-ga
- Deploy it (Firebase).


### Future implementations
- Incorporate a blog, with a backend using Node.

# Personal Notes
Even though it looks simple, with a minimalist black-white look, the project behind the scenes involves quite a bit of React (states, props, functions) and a lot of CSS. My option was to minimize the use of external libraries, like bootstrap (that would make the rendering of the columns much easier, withoub the pletora of flexbox everywhere) in order to give it a smaller size/fast speed, using, as much as possible, native html and css functionalities. This is the guideline of the project. <br>
I know that it's a bit of an overkill to use React, since most, if not all, of this could be rendered in plain html+css+vanilaJS-or-jQuery, but the idea is to expand the project into a blog and incorporate other options (aligning also backend into the project) in the future. For that, I prefered the solid base of React from the very beginning, plus the fact that it helped me practice a little.
<br /><br />

# References and sources:

- For animating the page transitions with react: <br>
	1. https://www.youtube.com/watch?v=8s2S8lgrJys&t=922s (implements react-spring and uses functions) <br>
	2. https://www.react-spring.io <br>
	3. https://www.youtube.com/watch?v=NUQkajBdnmQ&t=216s (checking this one out) <br>
- For incorporating Analytics into the project.
	1. https://levelup.gitconnected.com/using-google-analytics-with-react-3d98d709399b
- For the firebase deploy tytorial:
	1. https://www.youtube.com/watch?v=rT-SwD2-8-4&t=58s
	2. 

