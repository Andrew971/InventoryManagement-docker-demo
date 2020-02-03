## Deployment Guide

### Requirements

#### Build-time

- Docker (>= 17.12.0, recommended: 18.09.0)
- Docker Compose (>= 1.21.0, recommended: 1.23.1)

#### Run-time

- Docker (>= 19.03.5)

### Running Production environement 

Just run with `make up`.

### Build the Docker images and run on another host

1. run `make export`
2. copy generated images from `images` directory to the remote host
3. use `docker load` to load these images
4. run both containers within the same Docker network

## Acceptance Criteria


## developing

Just run `make dev`.
run in browser : 
  localhost:3000 (for Api)
connect to Mongodb: 
  localhost:27017
  database: Treez-demo-development 
## Testing

Just run `make dev`.
connect to Mongodb: 
  localhost:27017
  database: Treez-demo-test 

## Production

Just run `make up`.
run in browser : 
  localhost:8080 (for Api)
connect to Mongodb: 
  localhost:27017
  database: Treez-demo

## Tasks

### Stage 0 - Preparation

- [X] ~~Clarify requirements~~
- [X] ~~Define data schema~~
- [X] ~~Architectural pattern review~~
- [X] ~~Access Pattern for back-end~~

### Stage 1 - MVP

- [X] ~~Backend Skeleton~~
  - [X] ~~ Mock database structure~~
  - [x] ~~ HTTP Endpoint (Order and Inventory endpoint) ~~
  - [x] ~~Integration of database ~~
  - [-] ~~ Stream Event after Order Placement (increasing and decreasing
    inventory) ~~
  - [-] ~~ Other endpoint implementation ~~
  - [-] ~~ E2E Test integration (mocha, chai)~~
  - [-] ~~ Cleaning code ~~
  - [-] ~~ Documentation ~~
