# NodeJs App for endpoint file upload to GCS

## Description

Rest Apis for endpoint file upload to Google Cloud Storage (GCS) with Node.js

Provide APIs for:

- uploading File to Google Cloud Storage bucket (restricted file size: 2MB)
- downloading File from server with the link
- getting list of Files’ information (file name & url)

## Project setup
```
npm install
```

### Run
```
node server.js
```

## Usage
| Methods | Urls              | Actions                        |
|---------|-------------------|--------------------------------|
| POST    | /upload           | upload a File                  |
| GET     | /files            | get List of Files (name & url) |
| GET     | /files/[filename] | download a File                |

### POST
![Example POST call](https://storage.googleapis.com/c22-pc418-bucket/postupload2.PNG)