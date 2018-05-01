# Developer Document

![stack Overflow](https://github.com/rexue70/profile/blob/master/src/image/developer.png)


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

There are 6 sub folders inside: Login, MyProfile, NorFound, OtherProfile, Search, TopBar

2.1 Login

Login page UI and valid email check.

2.2 MyProfile

insile MyProfile, it has one main MyProfile.js and 4 subComponent.(Coop, Intro, Picture, TabBar(About, Academic, ExtraExperience, Project, Skill))

2.3 NorFound

404 page we show it when user input a invalid url

2.4 OtherProfile

Very similar to Myprofile structure, the only difference is there is no edit button on the otherProfile page.

2.5 Searh

This is for advence search, very similar to public frontend. Please refer to public frontend for more detail explanation.

2.6 TopBar

The TopBar has SearchBox, Privacy setting component.

## 3 css folder

We put image page and login page css here. Other component UI we use "styled-components": "^3.2.3" to put the css inside each component for easier modify.

## 4 image folder

This is for static image like login and welcome page

## 5 reducers folder

There are 4 reducers: filter_group_reducer and student_filter_reducer(used for advanced search), myProfileReducer, otherProfileReducer.

According to the redux design pattern, reducer is only for setState(return a new state) to store, there is no logic inside. For example, myProfileReducer will get the object from action and replay the store with the new state.


# React Router for student frontend

"/myProfile" "/otherProfile" "/search" (need to login, otherwise will be kicked out to "/" page)

"/" (login page)

"*" 404 page, invalid url will be redirect here




