# Pterodactyl

Configuration files to deploy a pterodactyl panel and game servers.

## How to setup the pterodactyl panel

Open your github repo secrets and add the following:

Make sure your server is setup with docker and docker compose plugin, and your user can run docker commands.

run `docker-compose up -d` to start the panel.

You have to create your first user (admin) tho.
To do so, go into your github repo > actions > panel-create-user.yml > run workflow > and fill this form :
![image](docs/pterodactyl/panel-create-user-workflow.png)

## How to setup a fresh game server

First you need to create a Location, then a Node in the panel.

Click on `Nodes` > `Create New` > Fill the form with the server's informations.

Then you need to copy the Node Configuration `config.yml` from the panel.

To setup a fresh game server, you need to run the wings agent on the server.
The wings agent is the software that connects the game server to the panel.

```bash
cd wings;
cp .env.template .env;
# edit the .env file with your informations
docker compose up -d
```

Then you need to edit the `config.yml` file and replace the `token` with the one you got from the panel.
