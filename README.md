# WeatherAI Dashboard

Live Demo: https://weatheraico.netlify.app/

A modern weather application built with React, Vite, Bootstrap, React Router, and TanStack Query. The application provides current weather conditions, hourly forecasts, 7-day forecasts, and account usage information from the WeatherAI API.

## Features

### Current Weather

- Current temperature
- Feels-like temperature
- Humidity
- Wind speed and gusts
- Wind direction
- UV Index
- Last updated timestamp
- Weather condition icon

### Hourly Forecast

- 24-hour forecast
- Temperature
- Feels-like temperature
- Humidity
- Wind speed and gusts
- UV Index
- Rain probability

### 7-Day Forecast

- Daily minimum and maximum temperatures
- Sunrise and sunset times
- Rain probability
- Rainfall amount
- Maximum wind speed
- Weather condition icons

### Search

- Search weather by city name
- Dynamic weather updates

### Account Usage

- API plan information
- Request usage statistics
- AI request usage statistics
- Remaining request quota
- Billing period information

### User Experience

- Responsive design
- Mobile-friendly navigation
- Glassmorphism-inspired weather cards
- Loading indicators
- Error handling
- Data caching with TanStack Query

---

## Technologies Used

- React
- Vite
- React Router DOM
- TanStack Query
- Bootstrap 5
- Axios
- WeatherAI API

---

## Project Structure

```text
src/
│
├── api/
│   └── weather.js
│
├── components/
│   ├── common/
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   │
│   └── weather/
│       ├── CurrentWeatherCard.jsx
│       ├── ForecastList.jsx
│       └── HourlyForecast.jsx
│
├── hooks/
│   ├── useWeather.js
│
│
├── pages/
│   ├── CurrentPage.jsx
│   ├── HourlyPage.jsx
│   ├── ForecastPage.jsx
│   └── AccountPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

### Clone the repository

git clone <repository-url>
cd frontend

### Install dependencies

npm install

### Create environment variables

Create a .env file in the project root:
VITE_WEATHER_AI_API_KEY=your_api_key_here

### Running Locally

npm run dev

Application runs at:
http://localhost:5173

## Challenges and Solutions

### 1. API Integration

**Challenge:**
During deployment, the application encountered Cross-Origin Resource Sharing (CORS) issues when attempting to make direct requests from the React frontend to the WeatherAI API. While the application worked correctly in development, requests were blocked in production because the API did not allow requests from the deployed frontend domain.

**Solution:**
To address this issue, a Netlify redirect configuration was implemented using a netlify.toml file. The redirect acts as a proxy between the frontend and the WeatherAI API, allowing requests to be routed through Netlify instead of calling the external API directly from the browser. This approach resolved the CORS restrictions while maintaining a clean API integration..

---

### 2. State Management with TanStack Query

**Challenge:**
Managing weather data across multiple pages (Current Weather, Hourly Forecast, and 7-Day Forecast) can become complex when handling loading states, errors, caching, and refetching manually.

**Solution:**
TanStack Query was implemented to manage server state. It automatically handles data fetching, caching, background updates, and synchronization across components. This reduced boilerplate code and improved application performance.

**Benefits:**

- Simplified data fetching logic
- Automatic caching
- Reduced API requests
- Built-in loading and error states
- Improved scalability

---

### 3. Responsive Design Implementation

**Challenge:**
Users may access the application from desktops, tablets, and mobile devices with varying screen sizes.

**Solution:**
Bootstrap 5 was used to create responsive layouts and navigation components. Additional styling was applied using inline styles and custom design patterns to ensure forecast cards, weather information, and navigation elements adapt smoothly across devices.

**Responsive Features:**

- Mobile-friendly navigation menu
- Horizontal scrolling forecast cards
- Flexible Bootstrap grid layouts
- Responsive weather information cards

---

### 4. Handling Loading and Error States

**Challenge:**
Weather data retrieval depends on network availability and external API responses. Poor handling of loading and error states can negatively impact user experience.

**Solution:**
The application provides clear visual feedback during data retrieval using loading spinners and informative error messages when requests fail. This ensures users always understand the current state of the application.

**Implemented Features:**

- Loading spinners during API requests
- User-friendly error messages
- Conditional rendering for data availability
- Graceful failure handling

---

### 5. API Usage Optimization Through Caching

**Challenge:**
Frequent API requests can increase response times and consume available request quotas, especially when navigating between pages.

**Solution:**
TanStack Query caching was used to store previously fetched weather data. When users revisit pages or navigate between tabs, cached data is displayed immediately while fresh data is fetched in the background when necessary.

**Benefits:**

- Faster page transitions
- Reduced API consumption
- Improved user experience
- Lower network overhead

---

### Lessons Learned

Throughout the development process, several software engineering principles were reinforced, including component reusability, separation of concerns, efficient state management, API optimization, and responsive user interface design. The project demonstrated how modern React tools such as TanStack Query and React Router can be combined to create a scalable and maintainable application architecture.

## Author

#### Patrick Kipngetich Bett

#### Full Stack Software Engineer
