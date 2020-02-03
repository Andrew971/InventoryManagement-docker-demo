PROJNAME := Treez-demo

export: images/api.tar

images/%.tar: $(wildcard docker/$(basename $(notdir $@))/**) \
              $(wildcard $(basename $(notdir $@))/**)
	mkdir -p images
	docker build --tag  $(PROJNAME)-$(basename $(notdir $@)) \
               --file docker/Dockerfile .
	docker save --output $@ $(PROJNAME)-$(basename $(notdir $@))

up: 
	docker-compose --project-name $(PROJNAME) \
								-f ./docker/docker-compose.yml down && \
	docker-compose --project-name $(PROJNAME) \
								-f ./docker/docker-compose.yml \
								-f ./docker/prod/docker-compose.prod.yml \
								build --pull --no-cache && \
	docker-compose --project-name $(PROJNAME) \
								-f ./docker/docker-compose.yml \
								-f ./docker/prod/docker-compose.prod.yml \
								up --no-deps 
dev: 
	docker-compose --project-name $(PROJNAME) \
								-f ./docker/docker-compose.yml \
								-f ./docker/dev/docker-compose.dev.yml \
								down && \
	docker-compose --project-name $(PROJNAME) \
								-f ./docker/docker-compose.yml \
								-f ./docker/dev/docker-compose.dev.yml \
								build --pull --no-cache && \
	docker-compose --project-name $(PROJNAME) \
								-f ./docker/docker-compose.yml \
								-f ./docker/dev/docker-compose.dev.yml \
								up --no-deps 
test: 
	docker-compose --project-name $(PROJNAME) \
								-f ./docker/docker-compose.yml down && \
	docker-compose --project-name $(PROJNAME) \
								-f ./docker/docker-compose.yml \
								-f ./docker/test/docker-compose.test.yml \
								build --pull --no-cache && \
	docker-compose --project-name $(PROJNAME) \
								-f ./docker/docker-compose.yml \
								-f ./docker/test/docker-compose.test.yml \
								up --no-deps 

clean:
	rm -rf images
