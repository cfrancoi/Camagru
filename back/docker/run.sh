#!/bin/bash
#TODO use some environment variables (for debug, config, etc)
cd /app/camagru

./mvnw -Dmaven.repo.local=/app/camagru/.mvn/repo spring-boot:run install