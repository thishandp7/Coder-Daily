PROJECT_NAME ?= coder-daily
ORG_NAME ?= thishandp7
REPO_NAME ?= coder-daily

APP_NAME := coder-daily

DOCKER_REGISTRY := docker.io

.PHONY: build tag publish clean tet

build:
	${INFO} "Pulling the latest image..."
	@ docker build --no-cache -t $(ORG_NAME)/$(PROJECT_NAME) .
	${INFO} "Running server service..."
	@ docker run --rm -e REACT_APP_API_URL='http://localhost:3000' -p 3000:3000 -d $(ORG_NAME)/$(PROJECT_NAME)

publish:
	${INFO} "Publishing server images..."
	@ docker push $(ORG_NAME)/$(PROJECT_NAME):latest
	${INFO} "published"

clean:
	${INFO} "Destroying development environment...."
	@ docker container kill $(ORG_NAME)/$(PROJECT_NAME)
	${INFO} "Cleaning old build artifacts..."


#colors
LIGHT_YELLOW := "\e[93m"
NO_COLOR := "\e[0m"

#Shell Functions
INFO := @bash -c '\
	printf $(LIGHT_YELLOW); \
	echo "=> $$1"; \
	printf $(NO_COLOR)' VALUE
