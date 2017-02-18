# General
This is the API component of the starter project.
It is a slightly customized Spring Boot application.

# Configuration
`application.properties` contains default application configuration.
Use `application-integration.properties` to configure local docker integration and `application-production.properties` for production configuration in combination with `SPRING_PROFILES_ACTIVE=production` environment variable.

# Requirements
- JDK 
- gradle

# Building
Build this API application

	gradle build -x test

Deploying built package to tomcat running on docker infrastructure 

    gradle deployIntegration
    
Undeploy running webapp from docker infrastructure

    gradle undeployIntegration
    
# Runing dev
	gradle bootRun
	
# Testing
    gradle test
	
# Usage
`http://api.starter/health`

# Further reading & watching
## Spring boot
* https://www.youtube.com/watch?v=Ke7Tr4RgRTs

## Spring boot testing
* https://www.youtube.com/watch?v=a1lIdidABt0
* https://spring.io/blog/2016/04/15/testing-improvements-in-spring-boot-1-4
* https://github.com/spring-projects/spring-boot/tree/v1.4.0.M2/spring-boot-samples/spring-boot-sample-test

## Gradle
* https://www.youtube.com/watch?v=vxKN2VSqTMg
