

IMAGE = "ternau/bioimages-portal-ui"
TAG = $(shell git describe --dirty)

buildapp:
	docker run --rm -it -v $(CURDIR):/code -w /code -u 1000 node:12 npm run build

build: buildapp
	docker build -t $(IMAGE) .

test:
	docker run --rm -p 8080:8080 $(IMAGE)

push: build
	docker tag $(IMAGE) $(IMAGE):$(TAG)
	docker push $(IMAGE)
	docker push $(IMAGE):$(TAG)

.PHONY: buildapp build test push
