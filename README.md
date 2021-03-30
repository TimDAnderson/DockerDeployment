# DockerDeployment

Hello, I created this repo to teach myself docker deployment.

A docker-compose file creates two containers.  One is a mysql service based on a mysql:5.7 image, it is connected to a named volume for data persistence.  The second service is an ExpressJS app with port 3000 exposed to outside environment.  

After creating the containers the db is seeded with fake data and finally requests can be made to the server.  

If you find this repo useful please give it a like.
