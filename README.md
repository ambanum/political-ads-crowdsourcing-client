# Political-ads-legality

Allow citizens to assess the legality of political advertisement on digital platforms in the context of the European elections.

> Permettre aux citoyens d'évaluer la légalité de la publicité politique sur les plateformes numériques dans le contexte des élections européennes.

This product focuses on political advertisement on Facebook and France but we intend to extend it to more sources. Your contributions are more than welcome.

This website displays ads that social network operators classify as political, i.e. that directly support a candidate, or that are related to a major issue of interest in the 2019 European elections (environment, immigration…).

## Motivation

Since the beginning of May 2019, Facebook allows users to search its advertising library to access political and public-interest advertising and provides a [detailed report](https://www.facebook.com/ads/library/report/) for each country of the European Union.
Nevertheless, this evaluation is now entirely delegated to private actors, and it seems important to help them better characterize what is relevant to the political debate or “of general interest”.
We would like to allow all citizens to ensure that election propaganda complies with the rules.
Moreover, by storing this data independently of its supplier, we guarantee its integrity over time.

We also make [available all the advertisements we have collected](https://disinfo.quaidorsay.fr/ads/dumps/) for each country of the European Union in the form of data sets in JSON format in order to allow them to be reused as simply as possible. Moreover, this exposure of data is currently the only way for people without a certified Facebook developer account and technical know-how to access the data.

- - -

## Development

This project is built on top of [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate).

### Installation

```sh
git clone https://github.com/ambanum/political-ads-legality.git
cd political-ads-legality
npm install
```

The backend server [`political-ads-scraper`](https://github.com/ambanum/political-ads-scraper) is required.

### Usage

Start the server

```sh
npm start
```

## Deployment

Modify the production configuration file `config/production.js` with the URL of your API endpoint:

```
const config = {
  apiUrl: 'https://<YOUR_SERVER>/api/politicals-ads/1.0',
};

module.exports = config;
```

Modify values of `SERVER` and `APP_DIR` variables in the script `/internals/scripts/deploy.sh`.
- `SERVER` is username and the hostname of your server where the script will connect to copy the built application
- `APP_DIR` is the target directory in your server where the built app will be copied

For example:
```sh
…
SERVER=my_user@my_host.fr
APP_DIR=/home/my_user/target_directory_for_the_app/
…
```

Build the application and copy file to your server:

```sh
npm run build
```

On your server, you can simply serve the built application as a set of static files.
For example, you can do this with Nginx by adding these lines to your configuration file:

```
    …
    location /political-ads {
        alias /home/user/political-ads/build/;
        index index.html;
        try_files $uri $uri/ index.html =404;
    }
    …
```

- - -

## License

EUPL v1.2: akin to an AGPL, but more readable and translated and legally binding into all languages of the EU. [Recap](https://choosealicense.com/licenses/eupl-1.2/).
