# Background
This project shares a common boilerplate for applications developed in the context of my lecture "Advanced Software Engineering" at DHBW STuttgart.

# Structure
This project folder contains code for an API- and WWW-server. Both run in a virtualized docker environment for which `docker-compose.yml` exists.

# Infrastruktur
NOTICE: Don't forget to previously configure a docker-machine and connect your CLI with it!

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
