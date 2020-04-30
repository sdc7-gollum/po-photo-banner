# Project Overnight: Photo Banner Service

> The Photo Banner Service handles the display of photos and interactions to browse through photos. See a photo grid displaying up to 5 images, whereby hovering over one brings the photo into focus and dimming the others. Click into the photo to see more details and access other images for the record via an image carousel.

## Related Projects

  - https://github.com/project-overnight/po-description
  - https://github.com/project-overnight/po-reservations
  - https://github.com/project-overnight/po-reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

This module uses Port 9800

<!-- To seed the database
> npm run seed -->
To start up the server (webpack with babel)
> npm run build
To start up the client
> npm start

## Requirements

- mongoDB with Mongoose
- Express.js
- React with JSX
- Node.js

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react
npm install --save-dev nodemon jest
npm install --save mongodb mongoose express react react-dom
```

