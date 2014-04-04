---
layout: default
title: Maps API
---

# introduction

Maps API allows to generate maps based on the data hosted in your CartoDB account styling them with
CartoCSS. The API generates a ZXY web mercator based url to fetch tiles from it using a client like
Leaflet, Google Maps, OpenLayers and so on.

There are two types of maps:

- Anonymous maps: those maps that can be created using your public data. All clients have rights to
  it and can change SQL and CartoCSS that generates the map

- Named maps: maps that access to your private data and only the owner has the rights the modify the
  CartoCSS and the SQL.

## quickstart

The following call creates a map of european countries drawn in white:

```json
// mapconfig.json
{
    "version": "1.0.1",
    "layers": [{
        "type": "cartodb",
        "options": {
            "cartocss_version": "2.1.1",
            "cartocss": "#layer { polygon-fill: #FFF; }",
             "sql": "select * from european_countries_e"
        }
    }]
}
```

the call would be (documentation should be replaced with the cartodb username):
```bash
curl 'http://documentation.cartodb.com/api/v1/map' -H 'Content-Type: application/json' -d @mapconfig.json
```

it will return a json with the layergroup id and the timestamp of the last data modification:

```json
{
    "layergroupid":"c01a54877c62831bb51720263f91fb33:0",
    "last_updated":"1970-01-01T00:00:00.000Z"
}
```

With that ``layergroupid`` the url template to access the tiles can be created:

```
http://documentation.cartodb.com/tiles/layergroup/c01a54877c62831bb51720263f91fb33:0/{z}/{x}/{y}.png
```


# general concepts

The following concepts are the same for every endpoint in the API except it's noted explicitly.

## auth
By default the user don't have access to private tables in CartoDB, in order to create maps where
private tables are involved the user needs to use the API Key. Some of the endpoints also need that
API Key to be called, like named map creation.

To execute an authorized request just api_key=YOURAPIKEY should be added to the request url. The
param can be also passed as POST param.

Please, take care if you are using API Key as query param, always use https in those cases.

## errors

Error are reported using standard HTTP codes and also extended information encoded in json with this
format
```
{
    "errors": [
        "access forbidden to table TABLE"
    ]
}
```

If you use JSONP 200 HTTP code is always returned so the javascript client can receive the error

## CORS support

All the endpoints which migth be accessed using a web browser add CORS headers and allow OPTIONS
method.

# Maps API

## anonymous maps

Allow to create a map given SQL and CartoCSS. It also allows to add interaction capabilities using
[UTF Grid](https://github.com/mapbox/utfgrid-spec)

### create

#### definition
POST /api/v1/map

#### params
should be a [Mapconfig](https://github.com/CartoDB/Windshaft/blob/0.19.1/doc/MapConfig-1.1.0.md)
```
{
      "version": "1.0.1",
      "layers": [{
          "type": "cartodb",
          "options": {
              "cartocss_version": "2.1.1", 
              "cartocss": "#layer { polygon-fill: #FFF; }",
              "sql": "select * from european_countries_e",
              "interactivity": ["cartodb_id", "iso3"]
          }
      }]
}
```

#### response
the response includes:
    - layergroupid: id for that map, used to componse the url for the tiles, so the final url is:
      http://user.cartodb.com/api/v1/map/:layergroupid/{z}/{x}/{y}.png
    - updated_at: ISO date of the last time the data involved in the query was updated
    - metadata: (optional) includes information about the layers. Some layers may not have this
      metadata
    - cdn_url: urls to fetch the data using the best CDN for your zone

```
#### example request
```
curl 'http://documentation.cartodb.com/api/v1/map' -H 'Content-Type: application/json' -d @mapconfig.json
```
#### example response
```
{
       "layergroupid":"c01a54877c62831bb51720263f91fb33:0",
       "last_updated":"1970-01-01T00:00:00.000Z"
       "cdn_url": {
           "http": "http://cdb.com",
           "https": "https://cdb.com"
       }
}
```

The tiles can be accessed using:
```
http://documentation.cartodb.com/api/v1/map/c01a54877c62831bb51720263f91fb33:0/{z}/{x}/{y}.png
```
and utf grid ones

```
http://documentation.cartodb.com/api/v1/map/c01a54877c62831bb51720263f91fb33:0/:layer/{z}/{x}/{y}.grid.json
```

Notice UTF Grid tiles need an intenger parameter, ``layer``. That number is the 0-base index of the
layer inside the mapconfig. So in this case 0 returns the UTF grid tiles for layer 0 (the only one
in that mapconfig)


### create JSONP
JSONP endpoint is provided in order to allow web browsers which don't support CORS

#### definition
GET /api/v1/map?callback=method

#### params
it gets one of the following params
    - config: MapConfig json (url encoded)
    - lzma: same than config but lzma compressed (for long MapConfigs)

#### example request
'curl http://....'

#### example response
```json
{
}
```
### remove


## template maps
### create a new map
### update an existing name
### remove 
### list 
### instanciate
    explain here how to use jsonp



# SQL API
explain that it is used to get data from tables

## SQL endpoint

### fetching data
### writting data
### Query optimizations

## named queries

