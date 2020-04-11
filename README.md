# shopje
quickly shop with python, javascript

For consume API:

* [Go docs](docs/api_docs.md)

Requirements:
* Docker
* Docker Compose

Please do
```bash
docker-compose build
```
and then
```bash
docker-compose up
```

### Considerations
- Backend service is running in port 5000
- Frontend is running in port 3000
- For agility it has a sqllite db

Please visit your browser 
```
http://localhost:3000/
```

### TODO
- Quick Chat in Elixir

## How to Run Tests
Please do
```bash
docker-compose run --no-deps backend sh -euc '
    python -m pytest backend/backend/services/tests -v --disable-pytest-warnings
'
```

## E-R Backend Diagram
![ER](../master/img/er.png)
