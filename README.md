# Background
This project shares a common boilerplate for applications developed in the context of my lecture "Advanced Software Engineering" at DHBW Stuttgart.

# Structure
This project folder contains code for an API- and WWW-server. Both run in a virtualized docker environment for which `docker-compose.yml` exists.

# Requirements 
Install docker environment, e.g. with __docker toolbox__ software package.

# Infrastructure
## Docker
We will use docker for infrastructure virtualization. 
Get comfortable with it.

### Docker machine
It is best to use a separate docker machine with this infrastructure requirements.
Create one machine with `docker-machine create` command and spend this machine at least 2 cores and 2GB memory for good performance.

### Docker compose
NOTICE: Don't forget to previously configure a __docker-machine__ and connect your CLI with it!

The docker configuration file is `docker-compose.yml`.

For the first docker infrastructure creation:

    docker-compose up
    
After this you can start the infrastructure later on with:
	
	docker-compose start
    
...and stop it with:

    docker-compose stop 
	
# Local integration environment
Add IP of your local docker machine to your `hosts` file with the names `starter` and `api.starter`.
	
# License
 [MIT](/LICENSE)

# Further reading & watching
## Docker 
* Learn Docker in 12 Minutes
https://www.youtube.com/watch?v=YFl2mCHdv24
* Docker for Developers - Part 1 - Docker Track
https://www.youtube.com/watch?v=SK0sqfVn7ls
