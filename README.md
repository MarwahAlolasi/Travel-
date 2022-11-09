# Travel App


This project requires you to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs. Given that this is the Capstone project, it's highly encouraged for you to go above and beyond, adding additional functionality and customization to truly stand out with a project you are proud to have at the top of your portfolio!

<br>
By clicking "DELETE", trips can be deleted.

## Technologies Used

-   JavaScript
-   Node.js / Express.js
-   Day.js
-   nanoid
-   axios
-   Webpack
-   HTML / SCSS
-   Jest
-   supertest
-   Workbox
-   [GeoNames API](http://www.geonames.org/)
-   [Weatherbit.io](https://www.weatherbit.io/)
-   [pixabay](https://pixabay.com/api/docs/#)

## Getting Started

### Prerequisites

Make sure Node and npm are installed from the terminal

```bash
 node -v
 npm -v
```

---

### Installation

1. Fork this repo into your own GitHub

2. Clone the repo to your local machine

```bash
# Change to the desired directory
cd <desired-directory>

# Clone the repo
git clone https://github.com/MarwahAlolasi

# Change to the project directory
 cd tripplanner
```

3. Install dependencies

```bash
npm install
```



4. Sign up for API keys at:

-   [GeoNames API](http://www.geonames.org/)
-   [Weatherbit.io](https://www.weatherbit.io/)
-   [pixabay](https://pixabay.com/api/docs/#)

5. Configure environment variables using dotenv package
    1. Install the dotenv package
    ```bash
    npm install dotenv
    ```
    2. Create a new `.env` file in the root of your project
    3. Fill the `.env` file with your API keys like this:
    ```bash
    API_KEY=**************************
    username=**************************
    apikey=**************************
    ```
6. Run the app in development mode at http://localhost:8080/, in production mode at http://localhost:8080/
   <br>
   **_Port will be varied if you change it at step 4_**
   <br>
   | Command | Action |
   | :------------: | :-----------: |
   | `npm run prod` | Build project |
   | `npm start` | Run project |
   | `npm run dev` | Run DevServer |
