# Background
This project shares a common boilerplate for applications developed in the context of my lecture "Advanced Software Engineering" at DHBW Stuttgart.

# Structure
This project folder contains code for an API- and WWW-server. Both run in a virtualized docker environment for which `docker-compose.yml` exists.

# Requirements 
Install docker environment, e.g. with __docker toolbox__ software package or corresponding suites for linux or MacOS.

# Infrastructure
## Docker
We will use docker for infrastructure virtualization. 
Get comfortable with it.

### Docker machine
It is best to use a separate docker machine with this infrastructure requirements.
Create one machine with `docker-machine create` command and spend this machine at least 2 cores and 2GB memory for good performance.

### Docker compose
NOTICE: Don't forget to previously configure a __docker-machine__ and connect your CLI with it using `eval $(docker-machine env ...)` command!

The docker configuration file is `docker-compose.yml` and defines 

For the first docker infrastructure creation:

    docker-compose up
    
After this you can start the infrastructure later on with (no provisioning):
	
	docker-compose start
    
...and stop it with (no deletion):

    docker-compose stop 
	
If you want to bury your docker containers use:

	docker-compose down
	
# Local integration environment
Add the IP of this corresponding docker machine to your `hosts` file with the names `www.starter` and `api.starter`.
You can use `docker-machine ip ...` to retrieve the machine's current IP address. 

# For setup instructions for development environment read further READMEs of subfolders!
[www](/www/README.md)
[api](/api/README.md)

# License
 [MIT](/LICENSE)

# Further reading & watching
## Docker 
* Learn Docker in 12 Minutes
https://www.youtube.com/watch?v=YFl2mCHdv24
* Docker for Developers - Part 1 - Docker Track
https://www.youtube.com/watch?v=SK0sqfVn7ls
