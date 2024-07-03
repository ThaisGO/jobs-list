# Frontend Mentor - Job listings with filtering solution

This my version of the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt) challenge. 
Frontend Mentor challenges help you improve your coding skills by building realistic projects, I highly recommend it if you want to put your skills to the test!

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [The Project](#the-project)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Project setup](#project-setup)
  - [Compiles dev](#Compiles-and-hot-reloads-for-development)
  - [Compiles prod](#Compiles-and-minifies-for-production)

## Overview

This project consists of a simple list of jobs from various companies with a filter based on categories. 
It is also responsive to any device.
You can [check it out here](https://jobs-list-eight.vercel.app/) 

If you want to download the code, check the [Project setup](#project-setup) section.

### Screenshot
<!-- TODO -->
soon
![](./screenshot.jpg)

## The Project

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS framework
- [Json-serve](https://www.npmjs.com/package/json-server) - Mock API/Rest Tool
- [Axios](https://axios-http.com/docs/intro) - Simplified HTTP requests lib

### What I learned

This project had the purpose of applying some of the Vue 3 framework concepts like the composition API, components and how to structure the routes and views using vue architecture. It also aimed to learn how to call an API and use Promises, the Axios library was chosen simply because I wanted to try something diferent from the Fetch option.

The Json-Server was chosen to "host the database" and mock the API endpoint I needed.

### Useful resources

- [Axios Catch Errors](https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253) - This pattern of how to handle a lot of errors in Axios is simple and easy to understand.
- [Image path in Vue 3](https://medium.com/codex/static-vs-dynamic-images-paths-in-vue3-8f1e5628856d) - I had some stupid issues understanding static image paths in Vue(LOL) and this amazing article helped me a lot.
- [JSON Serve Vercel](https://github.com/kitloong/json-server-vercel) - This repository is just P-E-R-F-E-C-T if you need to host your Json serve mock in Vercel. It's worth taking a look at it  

## Author

- Website - [Thais](https://github.com/ThaisGO)
- Frontend Mentor - [@ThaisGO](https://www.frontendmentor.io/profile/ThaisGO)

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

