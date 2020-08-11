# docker-compose-laravel
A pretty simplified docker-compose workflow that sets up a LEMP network of containers for local Laravel development. You can view the full article that inspired this repo [here](https://medium.com/@aschmelyun).


## Usage

To get started, make sure you have [Docker installed](https://docs.docker.com/docker-for-mac/install/) on your system, and then clone this repository.

The shipboard laravel project is inside `shipboard` folder. If you don't want to used the docker then you can just ignore other folder and work into shipboard folder. 
**For Using Docker**
And for docker run `docker-compose up -d --build` which will build your docker images and start the container. Open up your browser of choice to [http://localhost:8082](http://localhost:8080) and you should see your Laravel app running as intended. 

**New:** Three new containers have been added that handle Composer, NPM, and Artisan commands without having to have these platforms installed on your local computer. Use the following command templates from your project root, modifiying them to fit your particular use case:

- `docker-compose run --rm composer update`
- `docker-compose run --rm npm run dev`
- `docker-compose run --rm artisan migrate` 
- `sudo docker exec -it mysql_yukatel bash`
- `sudo docker-compose run --rm php vendor/bin/phpunit`

Containers created and their ports (if used) are as follows:

- **nginx** - `:8082`
- **mysql** - `:33062`
- **php** - `:9002`
- **npm**
- **composer**
- **artisan**

## Persistent MySQL Storage

By default, whenever you bring down the docker-compose network, your MySQL data will be removed after the containers are destroyed. If you would like to have persistent data that remains after bringing containers down and back up, do the following:

1. Create a `mysql` folder in the project root, alongside the `nginx` and `shipboard` folders.
2. Under the mysql service in your `docker-compose.yml` file, add the following lines:

```
volumes:
  - ./mysql:/var/lib/mysql
```
