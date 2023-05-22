# Server side programming in Node with Express

# Node

# Node Module

    # A module is a file

# require - A function, (import)

# module.exports - (export)

---

# Intro to Express

    # Initialize a new node project
        - npm init -y
        - npm install <dependencies>

# Vocabulary

    # Route
        * An event listener for http requests

    # Endpoint
        * "/item" "/user"
    # Port
        * localhost:9000/

# Nodemon

    * npm install -g nodemon

# Intro to REST API architecture

# REST - Representational State Transfer

# Resource - Single item (object) in a database

/user

# Collection - A collection of similar items in a database

    /users

# Base (root) URL - http://amazon.com/

# API Endpoint - http://amazon.com/movies/

# Parameters - /movies/:movieId

# Query (query string) - /movies?genre=action&year=1999

# Client - Frontend

# Server - Intermediary

# Request Method - CRUD - GET POST PUT DELETE

# Middleware - a function that fires on the inbetween

# Request Body (req.body)

# UUID - creates unique IDs

- npm install uuid

# Express Router - Enables to modularize our routes in express

# Modular file organization
