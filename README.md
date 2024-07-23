# URL Shortener

## Introduction

This project is a complete URL shortener, which includes a backend built with Java and Spring Boot, a frontend built with React, and a PostgreSQL database. The project is dockerized for easy deployment and local development.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Use](#use)
- [Contribute](#contribute)
- [License](#license)

## Features

- **URL shortening:** Transform long URLs into short links.
- **Redirect:** Returns the short URL to automatically redirect to the original URL.
- **Persistence:** Saves URLs in a PostgreSQL database.
- **User Interface:** A simple and friendly UI developed with React.
- **URL Display:** Shows all URLs stored in a table.
- **Deleting URLs:** Allows you to delete specific URLs from the interface.
- **Dockerization:** Facilitates local deployment and development using Docker.

## Technologies Used

- **Backend:** Java, Spring Boot
- **Frontend:** JavaScript, React
- **Database:** PostgreSQL
- **Docker:** Docker, Docker Compose
- **Web Server:** Nginx

## Getting Started

### Requirements

- Docker and Docker Compose
- Java 17
- Maven
- Node.js and npm

### Clone the Repository

```sh
git clone https://github.com/SGDavid2719/URLShortener.git
cd URLShortener
```

### Setting

**Backend:** Configure the database properties in `backend/portfolio/src/main/resources/application.properties.`

```
spring.datasource.url=jdbc:postgresql://db:5432/urlshortener
spring.datasource.username=urluser
spring.datasource.password=urlpassword
spring.jpa.hibernate.ddl-auto=update
```

**Frontend:** No additional configuration required.

### Docker

Make sure you have Docker and Docker Compose installed. Then, run:

```sh
docker-compose up --build
```

This will build and lift the containers for the backend, frontend and database.

### Without Docker

If you prefer to run each component manually:

**Backend:**

```sh
cd backend\portfolio\
mvn clean install
mvn spring-boot:run
```

**Frontend:**

```sh
cd frontend\portfolio\
npm install
npm run dev
```

**Database:** Make sure PostgreSQL is running and configured correctly.

## Project Structure

```
url-shortener/
│
├── backend/portfolio
│   ├── src/
│   ├── target/
│   ├── Dockerfile
│   └── pom.xml
│
├── frontend/portfolio
│   ├── public/
│   ├── src/
│   ├── build/
│   ├── Dockerfile
│   └── package.json
│
└── docker-compose.yml
```

## Use

### Backend

The backend exposes the following endpoints:

- Shorten URL:

  - URL: /api/shorten
  - Method: POST
  - Body: { "longUrl": "http://example.com" }
  - Response: { "id": 1, "longUrl": "http://example.com", "shortCode": "abc123" }

- Redirect URL:

  - URL: /api/{shortCode}
  - Method: GET
  - Response: http://example.com

- Get all URLs:

  - URL: /api/urls
  - Method: GET
  - Response: [ { "id": 1, "longUrl": "http://example.com", "shortCode": "abc123" }, ... ]

- Delete URL:
  - URL: /api/urls/{id}
  - Method: DELETE
  - Response: 204 No Content

### Frontend

The frontend provides a simple interface to enter long URLs, receive short URLs, view all URLs stored in a table, and delete specific URLs. Access the frontend at `http://localhost:3000`.

## Contribute

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit: `git commit -m 'Add new functionality'`.
4. Push your changes to your fork: `git push origin feature/new-feature`.
5. Create a `Pull Request`.

## License

This project is licensed under the MIT License. For more details, see [LICENSE](https://github.com/SGDavid2719/URLShortener/blob/master/LICENSE)

## Contact

LinkedIn: [David Santomé Galván](https://www.linkedin.com/in/david-santom%C3%A9-galv%C3%A1n-8815021b8/)
