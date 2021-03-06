# React Chitter Challenge - (weekend challenge 7)

[![Build Status](https://travis-ci.org/toddpla/frontend-api-challenge.svg?branch=master)](https://travis-ci.org/toddpla/frontend-api-challenge)

The scenario is similar to the [Chitter Challenge](https://github.com/makersacademy/chitter-challenge), except someone has already built a backend API for you and hosted it on Heroku.

Your task is to build a front-end single-page-app to interface with this API. You can do this in any framework you like, or in pure Javascript. [The API documentation is here.](https://github.com/makersacademy/chitter_api_backend)

Here are some interactions the API supports. Implement as many as you see fit.

* Creating Users
* Logging in
* Posting Peeps
* Viewing all Peeps *(I suggest you start here)*
* Viewing individual Peeps
* Deleting Peeps
* Liking Peeps
* Unliking Peeps

# structure
### [react](https://reactjs.org/) frontend | [express](https://expressjs.com/) server | [jest](https://jestjs.io/) + [enzyme](https://airbnb.io/enzyme/) testing | [travis](https://travis-ci.org/toddpla/frontend-api-challenge) build | [heroku](https://chitter-react.herokuapp.com/) deployment

# setup
installation with yarn recommended ```brew install yarn```

```sh
git clone https://github.com/toddpla/chitter-react.git

cd chitter-react

yarn install

yarn dev-server
```
app will be served to localhost:8080

# test

```sh
yarn test
```
