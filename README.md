# NodeJs REST API with Express & MySQL

## Description

Rest Apis for creating, retrieving, updating, deleting and searching wood type, integrate with database MySQL.

## Project setup
```
npm install
```

### Run
```
node server.js
```

## Usage
| Methods | Urls                    | Actions                                     |
|---------|-------------------------|---------------------------------------------|
| GET     | api/woodTypes           | get all wood item                           |
| GET     | api/woodTypes/:id       | get wood item by id                         |
| POST    | api/woodTypes           | add new wood item                           |
| PUT     | api/woodTypes/:id       | update wood item by id                      |
| DELETE  | api/woodTypes/:id       | remove wood item by id                      |
| DELETE  | api/woodTypes           | remove all wood item                        |
| GET     | api/woodTypes?name=[cn] | find all wood item which name contains 'cn' |