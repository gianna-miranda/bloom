# Bloom
## Solving Charlotte's economic mobility crisis
## App On Heroku

    $ https://lifesportshackathon.herokuapp.com/


# LifeSports Hackathon App

An database administration website built in react using API's to connect to a Mongo database.

## Requirements

You need git to clone the repository. You can get git from http://git-scm.com/.

A number of node.js tools are necessary to initialize and test the project. You must have node.js and its package manager `npm` installed. You can get them from http://nodejs.org/. The tools/modules used in this project are listed in package.json and include: 
* Express, 
* MongoDB
* Mongoose

For development, you will only need Node.js and a node global package `Yarn` installed in your environement.

- ### MongoDB
  The project uses MongoDB as a database. If you are on Mac and using Homebrew package manager the installation is as simple as `brew install mongodb`.

### Node

- #### Node installation on Windows

  Just go on [Official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

### Start the MongoDB server

First we need to create the `db` directory where the database files will live in. In your terminal navigate to the `root` of your system by doing `cd ..` until you reach the top directory. You can create the directory by running `sudo mkdir -p /data/db`. Now open a different tab in your terminal and run `mongod` to start the Mongo server.

## Install

    $ git clone https://github.com/gianna-miranda/bloom.git
    $ cd LifeSportsApp
    $ yarn install

## Running the project

    $ yarn start

## Simple build for production

    $ yarn build
    
## Authors

Gianna Miranda, Emmanuel Brown, Aj Blocker, Diana Hinojosa, Emily Hernandez

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
