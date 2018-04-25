# hoopstream

## Quick Overview

The idea behind this project is to show point differentials for specific games. This project will be using React and D3.js to display a graph for the point differentials, and relevant information will be queried with GraphQL and [nba.js](https://github.com/kshvmdn/nba.js)

## Why GraphQL?

REST API's have a set of endpoints that each return fixed data, whereas GraphQL has a single endpoint that returns flexible data. This is critical because the current NBA API Endpoints return massive objects, which will cause longer load times for clients. Generating GraphQL schemas on the server allows us to retrieve only the necessary data on our frontend. GraphQL also allows for subscriptions, meaning we can update our frontend data in real time. This will allow us to see live game score updates.
