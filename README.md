
<!-- ABOUT THE PROJECT -->

## About The Project

<img src="https://github.com/fthyavuz/images/blob/main/getWeatherIndex.png" width="300" height="200">

This application provides to get the weather via browser by entering a location. Usage of application was described below.Also it return error message while it can not reach internet connection, entering wrong location. When a user enter a wrong url, it return back 404 page

### Built With

[express - version 4.17.1](https://www.npmjs.com/package/express)\
[hbs - version 4.2.0](https://www.npmjs.com/package/hbs)\
[postman-request - version 2.88.1](https://www.npmjs.com/package/postman-request)

<!-- GETTING STARTED -->
## Getting Started

This is a simple express application. Aim is learning node.js and usage of other third party package

### Prerequisites

* npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Keys at

* Signup and get free an acces_key weather info\
[weatherstack.com](https://weatherstack.com/)
* Signup and get free an access_token for location info\
[mapbox.com](https://www.mapbox.com/)

2. Clone the repo

   ```sh
   git clone https://github.com/fthyavuz/web-server
   ```

3. Install NPM packages

   ```sh
   npm install
   ```

4. Create a dev.env file on your same project folder and enter your API KEYS in this file

   ```
   ACCESS_KEY_WEATHER=ENTER-YOUR-API-KEY-weatherstack.com
   ```

   ```
   ACCESS_KEY_MAP=ENTER-YOUR-API-KEY-mapbox.com
   ```
<img src="https://github.com/fthyavuz/images/blob/main/getWeatherEnv.png" width="300" height="200">

5. To start server locally

   ```
   npm run dev
   ```
  If everything is ok , You should a message on the console as 'The Server is up on YOUR_PORT'

## Usage

Open your browser and enter below URL
http://localhost:YOUR_PORT

You should see a screen like this

<img src="https://github.com/fthyavuz/images/blob/main/istanbulWeather.png" width="400" height="200">

Enter a location you want , and press search button, program should return back weather of the location

You can visit production version of application with below link\
http://yavuz-weather-application.herokuapp.com/

## Roadmap

  - [ ] Add a find location button and get weather
  - [ ] Add a table for the weater of the next week

See the [open issues](https://github.com/fthyavuz/web-server/issues) for a full list of proposed features (and known issues)

## Acknowledgments

* [udemy.com](https://www.udemy.com)
* [Andrew Mead - Lecturer on udemy](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/)
* [freecodecamp](https://freecodecamp.org/)
* [stacoverflow](https://stackoverflow.com/)
* [heroku](https://heroku.com/)
