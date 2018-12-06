# Omics Hub

Omics Hub is a social platform for data analytics, collaboration and building reproducible workflows.

## Getting started
- assuming node and npm are installed. 

```shell
$ git clone https://github.com/singha53/omics-hub.git
$ cd omics-hub/
$ npm install
$ npm run dev
```
### deploying to Heroku
```shell
$ heroku login
$ Email: <enter email>
$ Password: <password>
$ heroku create <enter app name>
$ heroku addons:create mongolab
$ git push heroku master
```
## Walkthroughs
### Landing page and Google OAuth
![GIF]()

### Submitting data using Redux Form
![GIF]()

### Data analytics using a dashboard
![GIF]()

## Programming/Scripting Languages
### Front-end
- React

### Back-end
- Express, Node, MongoDB

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome.

## Links

- Repository: https://github.com/singha53/omics-hub/
- Deployed site: https://omics-hub.herokuapp.com/

## Licensing

The code in this project is licensed under MIT license.
