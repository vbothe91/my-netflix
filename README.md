# My Nextflix setup
- App created using create-react-app
- Removed unnecessary code
- Installed tailwind
- Created Components folder and added initial components
- install react-router-dom and added setup for home and browse page
- Sign In form
- Sign Up form
- Form Validation
- React useRef hook
- Firebase setup
- Hosted application to the firebase
- Added sign up logic
- Added sign in logic
- Added redux toolkit to store user data
- Added logout logic
- Added user update logic
- Bugfix for route restrictions
- Unsubscribed onAuthStateChanged callback if component unmount.

- Movie datails
    - created account for TMDB
    - get API credentials.. 
    - Make PlayNow Movies api.. 
    - createdpalyNowMovies slice and stored data in redux
    - Created custom hook for above api call
    - Show title and overview

- Show movie trailer in background
    - Select first moviefrom play list movies.
    - API call for fetching first selected movievideos
    - Filtered trailer videos
    - Stored trailer data in redux.
    - Created custom hook for api call
    - Use embed code with fetched video id
    - fix background video UI

- Movie list for diffrent categories.
- Added api check if data already present inredux.
- Added folder strucure