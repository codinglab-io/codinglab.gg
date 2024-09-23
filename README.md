# Codinglab.gg

### Basically codinglab gaming related projects.

**What to find here ?**

- A pterodactyl dashboard panel to manage all game-servers.
- Game servers docker images that we use to play.
- Custom plugins and configurations for games we play.

## How to setup the pterodactyl panel

Open your github secrets and add the following:

- `CODINGLABGG_SSH_KEY` : The private key to connect to the server
- `CODINGLABGG_SSH_USER` : The user used to connect to the server (`pterodactyl`)
- `CODINGLABGG_SSH_HOST` : The host/ip of the server (`codinglab.gg`)
- `CODINGLABGG_SSH_CERT` : The public certificate of the server (`ssh-keyscan codinglab.gg`)

Then push to the repository, [the github `panel-deployment.yml` action](./.github/workflows/panel-deployment.yml) will deploy the panel to the server.

## How to setup a fresh game server

The panel and the game server are different entities. The panel is the dashboard to manage the game servers. The game servers are the actual servers where the games are running.

To setup a fresh game server, you need to run the wings agent on the server. The wings agent is the software that connects the game server to the panel.
