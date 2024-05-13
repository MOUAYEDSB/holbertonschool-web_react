# React Inline Styling

<img src='image/readme.jpg' title='redme'>

## Description
React inline styling refers to the practice of directly adding CSS styles to React components within the JSX code using a `style` attribute. This approach allows developers to apply styles directly to individual elements without using external CSS files. In React, inline styles are not written as a string but as an object with properties that correspond to CSS attributes. This method offers a high degree of control over the presentation of components, enabling specific styling changes to be made dynamically based on component state or props. However, it can lead to more verbose code and may impact performance if not managed properly, especially in larger applications where styles are frequently changed.

## Learning Objectives
- Understand the differences between using a CSS file and inline styling
- Learn how to use a CSS-in-JS tool like Aphrodite
- Explore applying conditions within JS to apply different styles
- Discover how to implement responsive design to show a different UI according to the screen size
- Learn how to create small animations within the app


## Tasks

### 0. Inline styling
- Copy over the `task_5` directory from the `0x04. React components` project (We’ll be using it as the base for this project)
- Rename the `task_5` directory to `task_0`
- Modify the `CourseListRow` component in `task_0/dashboard/src/CourseList/CourseListRow.js`:
  - Using inline styling, change the background color of a row to `#f5f5f5ab`
  - Using inline styling, change the background color of a header row to `#deb5b545`
- If needed, modify the test file so every test pass

### 1. Install Aphrodite
- Install Aphrodite using npm with: `npm install --save aphrodite`
- Modify the `App` component in `task_1/dashboard/src/App/App.js`:
  - Modify the component to use Aphrodite within the js file
  - Define the styling for the body and the footer within the file
  - Delete the file `App.css` and the import
- Modify the `BodySectionWithMarginBottom` component in `task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.js`:
  - Modify the component to use Aphrodite within the js file
  - Define the styling for the margin within the file
  - Delete the file `BodySection.css` and the import
- Modify the `CourseList` component in `task_1/dashboard/src/CourseList/CourseList.js`:
  - Modify the component to use Aphrodite within the js file
  - Define the styling for the list within the file
  - Remove the styling for the list within the `CourseList.css` file
- Modify the `Header` component in `task_1/dashboard/src/Header/Header.js`:
  - Modify the component to use Aphrodite within the js file
  - Define the styling for the logo and the header within the file
  - Delete the file `Header.css` and the import
- Modify the `Login` component in `task_1/dashboard/src/Login/Login.js`:
  - Modify the component to use Aphrodite within the js file
  - Define the styling for the margin within the file
  - Delete the file `Login.css` and the import
- Modify the `Notifications` component in `task_1/dashboard/src/Notifications/Notifications.js`:
  - Modify the component to use Aphrodite within the js file
  - Define the styling for the notifications panel within the file
  - Remove the styling for the notifications panel from the `Notifications.css`
- Make sure the test suites are still passing!

### 2. Conditionally applying style
- Modify the `NotificationItem` component in `task_2/dashboard/src/Notifications/NotificationItem.js`:
  - Modify the component to use Aphrodite within the js file
  - Define the styling for the urgent and default items
  - Using condition, apply the styling to the `li` element
  - Delete the `Notifications.css` file and remove any import
- Modify the `NotificationItem` test suite in `task_2/dashboard/src/Notifications/NotificationItem.test.js`:
  - Make sure that tests are still passing
- Modify the `CourseListRow` component in `task_2/dashboard/src/CourseList/CourseListRow.js`:
  - Modify the component to use Aphrodite within the js file
  - Define the styling for the different types of rows (default rows, header rows)
  - Define the styling for the different types of `th` elements
  - Delete the `CourseList.css` file and remove any import
- Modify the `CourseListRow` test suite in `task_2/dashboard/src/CourseList/CourseListRow.test.js`:
  - Make sure that tests are still passing
- Requirements:
  - Use conditions as much as you can, do not repeat elements
  - At this point, the UI should look exactly the same with the inline styling as it was with the CSS files

### 3. Responsive design
- Modify the `Login` component in `task_3/dashboard/src/Login/Login.js`:
  - Make sure that a label and an input are on each line
  - Make sure that the button is on a new line
  - The screen should look like the provided image
- Modify the `Notifications` component in `task_3/dashboard/src/Notifications/Notifications.js`:
  - When the panel is open, it should take over the entire screen
  - There should be no padding because of the `ul` element
  - The font size of the text should be 20px
- Modify the `NotificationItem` component in `task_3/dashboard/src/Notifications/NotificationItem.js`:
  - The item should take the entire screen width
  - A black border should be displayed at the bottom
  - The font size of the text should be 20px
  - The padding for the item should be 10px 8px
- Requirements:
  - When the notifications panel is open, the screen should look like the provided image

### 4. Animation
- In `task_4/dashboard/src/Notifications/Notifications.js`:
  - Create one object containing the CSS frames to make the opacity change from 0.5 to 1
  - Create one object containing the CSS frames to make the element bounce. You can play with translateY and alternate from 0px to -5px and 5px
  - Modify the styling for the menu item to:
    - Float on the right of the screen over every element
    - The background color should be `#fff8f8`
    - Show the pointer cursor when hovering the element
    - On hover, animate the element with the two new animations. The duration for the opacity change should be 1s, and the duration for the bouncing effect should be 0.5s. The animation should repeat 3 times only
  - When the list of notifications is visible, hide the menu item
- Requirements:
  - When the notifications panel is hovered or opened, the UI should look like the provided image

  ## Project Review

This project is reviewed based on the following criteria:

- Was the project set up correctly?
- Did you use Aphrodite in your project?
- Did you use conditions within JS to apply different styles?
- Did you use responsive design and make the application show a different UI according to the screen size?
- Did you create small animations within the app?

## Author
[Mouayed sabbagh](https://github.com/MOUAYEDSB)