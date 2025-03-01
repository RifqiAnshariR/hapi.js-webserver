# HAPI Webserver

Simple web server using Hapi.js.

## How to Run

1. Open the terminal and start the server with:
   ```sh
   npm run start

2. To test the /login endpoint use:
    ```sh
    curl -X POST "http://localhost:5000/login" -H "Content-Type: application/json" -d "{\"username\": \"john_doe\", \"reason\": \"Trying out Hapi.js\"}"
