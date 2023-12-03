# Artica Analytics Using Cubejs Dashboards

Using Golang to store events in postgress DB. Event is when user lands on frontend and clicks any button. To tack user information like ip,region,user_agent and more using `https://ipapi.co/json/` to fetch data

### [analytics-backend](analytics-backend/README.md)

Small GO backend that exposes a REST end point to consume events and stores them into PostgreSQL.

### [analytics-cubejs](analytics-cubejs/README.md)

[Cube.js](https://cube.dev/) API with the schema for the events.

### [analytics-frontend](analytics-frontend/README.md)

Very simple Javascript file that capture clicks and page views and send them to the backend using the REST end point.
