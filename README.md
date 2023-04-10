https://bjbaskar.github.io
testing

https://www.valaitamil.com/ootuka-manno-oliyizhai-yaamirappa-neetuka-manno-iraa-kural-1329.html


Ubuntu 20.04 LTS
docker
nginx
pm2
nextjs reactjs tailwindcss
68.183.179.24

docker
	.dockerignore
	Dockerfile - local / production
	docker_compose_local.yml / _prod
	
	docker-compose -f ./docker-compose.yml up --build -d nextjs
	
	docker exec -it f91fe02929f0 pm2 list
	 docker system df

	docker system prune
	docker system prune -a
	
	docker ps -a
	docker run -it --name sl mysql /bin/bashfvokrt
	docker images
	docker image rm -f <imageid>
	docker image rm -f image <imageid>
	docker run -dit --name <name> -p 8080:82-v "$PWD":/user.local.apache2/htdocs/httpd:2.4
	docker logs -f --tail 10 <ContianerID>
	
	CleanDocker logs 
	sudo sh -c 'truncate -s 0 $(docker system info | grep "Docker Root Dir" | cut -d ":" -f2 | cut -d " " -f2-)/containers/*/*-json.log';
    