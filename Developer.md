# Developer Document

There are 5 directories in the src folder.

## 1 action folder

In the action folder, according to the redux design pattern. We put all the logic and async call here. There are 3 actions, a api and a const file.

1.1 myProfileActions.js  

includes login and fetch/update/delete my profile data, search student by name

1.2 otherProfileActions.js 

includes fetch other students profile data

1.3 searchPageActions.js 

includes advance search data based on coop, school name and start/end term.

1.4 api.js 

includes all the const url address used for async call to the backend service

1.5 types.js

includes the cosnt action type used for redux dispatch


## 2 components folder
