# ALX Project 0x14 – MoviesDatabase API Documentation

## API Overview

The MoviesDatabase API provides a powerful interface to access detailed information about movies and TV shows. It enables developers to search titles, retrieve cast and crew, explore metadata, and fetch trending or filtered lists of content. The API delivers structured JSON responses that are ideal for frontend display and dynamic discovery platforms.

## Version

Current API Version: **v1 (RapidAPI)**

## Available Endpoints

- **GET /titles**  
  Returns a list of titles (movies, shows) with sorting and filtering options.

- **GET /titles/{id}**  
  Retrieves detailed metadata about a specific title by its unique ID.

- **GET /titles/search/title/{title}**  
  Searches for titles matching a specific name or keyword.

- **GET /titles/{id}/main_actors**  
  Returns the main actors associated with a given movie or show ID.

- **GET /genres**  
  Lists all available genres used to categorize titles.

- **GET /titles/year/{start}/{end}**  
  Filters results by a range of release years.

- **GET /titles/random**  
  Returns a randomly selected movie or show.

## Request and Response Format

### Example Request

```http
GET /titles/tt1375666/main_actors
Headers:
  x-rapidapi-key: YOUR_API_KEY
  x-rapidapi-host: moviesdatabase.p.rapidapi.com
