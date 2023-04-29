# world-cities-json

An NPM module that contains a JSON array of world cities sourced from the [SimpleMaps World Cities Database](https://simplemaps.com/data/world-cities), created by the team at [Jet Set Expert](https://jetsetexpert.com).

## Features

- JSON array of world cities with the following fields:
  - city: The name of the city/town as a Unicode string (e.g. Goiânia).
  - city_ascii: city as an ASCII string (e.g. Goiania).
  - lat: The latitude of the city/town.
  - lng: The longitude of the city/town.
  - country: The name of the city/town's country.
  - iso2: The alpha-2 iso code of the country.
  - iso3: The alpha-3 iso code of the country.
  - admin_name: The name of the highest level administration region of the city/town (e.g. a US state or Canadian province).

## Sample JSON

```
[
  {
    "city": "Tokyo",
    "city_ascii": "Tokyo",
    "lat": "35.6897",
    "lng": "139.6922",
    "country": "Japan",
    "iso2": "JP",
    "iso3": "JPN",
    "admin_name": "Tōkyō",
    "capital": "primary",
    "population": "37732000",
    "id": "1392685764"
  },
  {
    "city": "Jakarta",
    "city_ascii": "Jakarta",
    "lat": "-6.1750",
    "lng": "106.8275",
    "country": "Indonesia",
    "iso2": "ID",
    "iso3": "IDN",
    "admin_name": "Jakarta",
    "capital": "primary",
    "population": "33756000",
    "id": "1360771077"
  },
  ...
```

## Installation

```bash
npm install cities-json
```

## Usage

```javascript
const { cities } = require("cities-json");

console.log(cities);
```

## Generating the cities.json file

To generate the cities.json file from a source CSV file, follow these steps:

1. Download the desired CSV file from the [SimpleMaps World Cities Database](https://simplemaps.com/data/world-cities).
2. Place the CSV file in the /data directory and name it "worldcities.csv" or use the --source command line option to provide a custom path.
3. Run the generate.js script:

```bash
node src/generate.js [--source path/to/your/csv]
```

## Source and License

Data is sourced from the [SimpleMaps World Cities Database](https://simplemaps.com/data/world-cities) and is licensed under the [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) (CC BY 4.0) license.

## Links & Resources

[Jet Set Expert](https://jetsetexpert.com)  
[cities-json on GitHub](https://github.com/jetsetexpert/cities-json)  
[world-cities-json on NPM](https://www.npmjs.com/package/world-cities-json)  
[world-cities-json on Aliyun](https://developer.aliyun.com/mirror/npm/package/world-cities-json)  
[world-cities-json on TAONPM](https://npmmirror.com/package/world-cities-json)  
[world-cities-json on jsDlivr](https://www.jsdelivr.com/package/npm/world-cities-json)  
[world-cities-json on Snyk](https://snyk.io/advisor/npm-package/world-cities-json)  
[world-cities-json on Libraries.io](https://libraries.io/npm/world-cities-json)  
[world-cities-json on RunKit](https://npm.runkit.com/world-cities-json)  
[world-cities-json on npm trends](https://www.npmtrends.com/world-cities-json)  
[world-cities-json on Package Phobia](https://packagephobia.com/result?p=world-cities-json)  
[world-cities-json on Skypack](https://www.skypack.dev/view/world-cities-json)  
[world-cities-json on CNPM](https://cnpmjs.org/package/world-cities-json)  
[world-cities-json on githubmemory](https://githubmemory.com/repo/javascriptutils/world-cities-json)  
[world-cities-json on npm.io](https://npm.io/package/world-cities-json)  
[world-cities-json on Pkg Stats](https://www.pkgstats.com/pkg:world-cities-json)

## Related Packages

[airports-json on GitHub](https://github.com/jetsetexpert/airports)  
[airports-json on NPM](https://www.npmjs.com/package/airports-json)
