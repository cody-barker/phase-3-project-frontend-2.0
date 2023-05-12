# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# phase-3-project-frontend-2.0


/**
   * Deliverables
   * [x]Use Active Record
   * [x] At least two models with a one-to-many relationship
   * [x] Create and use at least Create and Read actions in Sinatra for both models
   * [x] Full CRUD for one model
   * [x] Update action should use a pre-filled form with the existing values for the object.
   * [x] On submission of the update form, the object should update/re-render
   * [x] Build a React front end that interacts with the API to perform CRUD actions
   * [x] Proper front end state management. Do NOT rely on GET requests to update state.
   * [x] RESTful routes
   * [x] Use JSON responses to get new data. Don't rely on filtering state or separate fetch requests. 
   * [x] Include some validation so farms can't be duplicated if all fields match
   * [x] Clear fields for add a bed after submission
   * [x] Include some validation so beds can't be created if the farm doesn't exist
   * [] Include Update option for Beds
   * [] Update farm by id instead of name
   * [] Write some interesting queries
   * 
   * Features
   * - The API has a farms table and an associated beds table. A farm has many beds, and a   bed belongs to a farm.
   * - A user can create new farms and new beds.
   * - A user can view tables of all farms and all beds.
   * - A user can update a farm.
   * - A user can delete farms and beds.
   * 
   * Component Hierachy
   * App
   *    NavBar
   *    CropTable (READ)
   *      TableRow (DELETE)
   *    AddAFarmOrBed (CREATE)
   *    UpdateAFarmOrBed (UPDATE)
   *    RemoveFarm (DELETE)
   */ 
