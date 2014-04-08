---
layout: default
title: Maps API
---

# Maps API

The CartoDB Maps API allows you to generate maps based on data hosted in your CartoDB account and style them using CartoCSS. The API generates a XYZ based URL to fetch Web Mercator projected tiles using web clients like Leaflet, Google Maps, OpenLayers.

You can create two types of maps with the Maps API:

- Anonymous maps: Maps that can be created using your CartoDB public data. Any client can change the read-only SQL and CartoCSS parameters that generate the map tiles. These maps can be created from a JavaScript application alone and no authenticated calls are needed. See [this cartodb.js example.](http://developers.cartodb.com/documentation/cartodb-js.html#sec-7)

- Named maps: Maps that access to your private data. These maps require an owner to setup and modify any SQL and CartoCSS parameters and are not modifiable without new setup calls. 

## Quickstart

### Anonymous maps

Here is an example of how to create an anomymous map from JavaScript:

```javascript
var mapconfig = {
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

$.ajax({
     crossOrigin: true,
     type: 'POST',
     dataType: 'json',
     contentType: 'application/json',
     url: 'http://documentation.cartodb.com/api/v1/map',
     data: JSON.stringify(mapconfig),
     success: function(data) {
         var templateUrl = 'http://documentation.cartodb.com/api/v1/map/' + data.layergroupid + '{z}/{x}/{y}.png'
         console.log(templateUrl);
     }
})

```


### Named maps

Let's create a map using some private tables in CartoDB account.
The following call creates a map of European countries filled in the color white:

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

The map config needs to be sent to the Map API using an authenticated call. The call would be:

```bash
curl 'http://{account}.cartodb.com/api/v1/map/named' -H 'Content-Type: application/json' -d @mapconfig.json
```

The request will return JSON with the ```layergroupid``` and the ```timestamp``` of the last data modification. Here is an example:

```json
{
    "layergroupid":"c01a54877c62831bb51720263f91fb33:0",
    "last_updated":"1970-01-01T00:00:00.000Z"
}
```

You can use the ``layergroupid`` to create a URL template for accessing tiles on the client. We use the ```layergroupid``` from the example response above in this URL template:

```
http://documentation.cartodb.com/tiles/layergroup/c01a54877c62831bb51720263f91fb33:0/{z}/{x}/{y}.png
```



# General Concepts

The following concepts are the same for every endpoint in the API except when it's noted explicitly.

## Auth

By default, users do not have access to private tables in CartoDB. In order to create maps where private tables are involved, the user needs to use the API Key. Some of the endpoints also need the API Key to be included (e.g. creating a named map).

To execute an authorized request, api_key=YOURAPIKEY should be added to the request URL. The param can be also passed as POST param.

Please, be careful if you are using API Key as query param, always use HTTPS in those cases.

## Errors

Errors are reported using standard HTTP codes and also extended information encoded in json with this format
```
{
    "errors": [
        "access forbidden to table TABLE"
    ]
}
```

If you use JSONP 200 HTTP code is always returned so the javascript client can receive the error.

## CORS support

All the endpoints which might be accessed using a web browser add CORS headers and allow OPTIONS method.

# Maps API

## Anonymous Maps

This allows you to create a map given SQL and CartoCSS. It also allows you to add interaction capabilities using [UTF Grid.](https://github.com/mapbox/utfgrid-spec)

### Create

#### Definition
POST /api/v1/map

#### Params
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

#### Response
The response includes:

  - layergroupid: The ID for that map, used to componse the URL for the tiles, so the final URL is:
    http://{account}.cartodb.com/api/v1/map/:layergroupid/{z}/{x}/{y}.png
  - updated_at: The ISO date of the last time the data involved in the query was updated
  - metadata: (optional) Includes information about the layers. Some layers may not have this metadata
  - cdn_url: URLs to fetch the data using the best CDN for your zone


#### Example Request


```
curl 'http://documentation.cartodb.com/api/v1/map' -H 'Content-Type: application/json' -d @mapconfig.json
```

#### Example Response

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
For UTF grid tiles:

```
http://documentation.cartodb.com/api/v1/map/c01a54877c62831bb51720263f91fb33:0/:layer/{z}/{x}/{y}.grid.json
```

For attributes defined in ``attributes`` section:

```
http://documentation.cartodb.com/api/v1/map/c01a54877c62831bb51720263f91fb33:0/:layer/attributes/:feature_id
```

Which returns a JSON with the attributes defined, like:

```json
    { c: 1, d: 2 }
```

Notice UTF Grid and attributes endpoints need an intenger parameter, ``layer``. That number is the 0-base index of the layer inside the mapconfig. So in this case 0 returns the UTF grid tiles/attributes for layer 0 (the only one in that example mapconfig)


### Create JSONP
JSONP endpoint is provided in order to allow web browsers which don't support CORS

#### Definition
GET /api/v1/map?callback=method

#### Params

  - auth_token: (optional) If the named map needs authorization
  - config: Encoded JSON with the params for creating named maps (the variables defined in the template)
  - lmza: This attribute contains the same as config but LZMA compressed. It cannot be used at the same time as ``config``.
  - callback: JSON callback name

#### Example Request
'curl http://....'

#### Example Response
```json
{
}
```

### Remove
Anonymous maps can't be removed, they expire after some time, usually after five minutes. If a map expires and tiles are requested from it, an error will be raised. This could happen if an user leaves a map open and after some minutes tries to zoom. Creating the map again fixes the problem.


## Named Maps
Named maps are basically the same as anonymous maps but the mapconfig is stored in the server behind a name. The other big differences are that they allow you to create maps using private data, and users without an API Key can see them.

The main two differences compared to anonymous maps are:

- auth layer: This allows you to control who is able to see the map based on a token auth
- templates: Since the mapconfig is static it can contain some variables so the client con modify the map appearance using those variables.

Template maps are persistent, can only be created and deleted by the CartoDB user showing a valid API_KEY (see auth section).

### Create a New Map

#### Definition
POST /api/v1/map/named

#### Params
JSON payload:

```js
// template.json 
{
  version: '0.0.1',
  // there can be at most 1 template with the same name for any user 
  // valid names start with a letter and only contains letter, numbers
  // or underscores
  name: 'template_name', 

  auth: {
   method: 'token', // or "open" (the default if no "method" is given)
   valid_tokens: ['auth_token1','auth_token2'] // only (required and non empty) for 'token' method
  },

  // Variables not listed here are not substituted
  // Variable not provided at instantiation time trigger an error
  // A default is required for optional variables
  // Type specification is used for quoting, to avoid injections
  // see template format section below
  placeholders: {
      color: {
        type:'css_color',
        default:'red'
      },
      cartodb_id: {
        type:'number',
        default: 1
      }
  },

  // the layer list definition
  layergroup: {
   // this is the MapConfig explained in anonymous maps
   // see https://github.com/CartoDB/Windshaft/blob/0.19.1/doc/MapConfig-1.1.0.md)
   "version": "1.0.1",
   "layers": [{
    "type": "cartodb",
    "options": {
      "cartocss_version": "2.1.1", 
      "cartocss": "#layer { polygon-fill: <%= color %>; }",
      "sql": "select * from european_countries_e WHERE cartodb_id = <%= cartodb_id %>"
    }
   }]
  } 
}
```

##### Template Format

A templated layergroup would allow using placeholders in the "cartocss" and "sql" elements in the "option" field of any "layer" of a layergroup configuration

Valid placeholder names start with a letter and can only contain letters, numbers or underscores. They have to be written between ``<%= `` and `` %>`` strings in order to be replaced. Example: ``<%= my_color %>``.

The set of supported placeholders for a template will need to be explicitly defined specifying type and default value for each.

**Placeholder Types**

Placeholder type will determine the kind of escaping for the associated value. Supported types are:

 * sql_literal (internal single-quotes will be sql-escaped)
 * sql_ident (internal double-quotes will be sql-escaped)
 * number (can only contain numerical representation)
 * css_color (can only contain color names or hex-values)

Placeholder default values will be used when not provided at instantiation time and could be used to test validity of the template by creating a default instance.

Be careful selecting the template types and defining the template, some users could access.

#### Response

```
{
       "templateid":"name",
}
```


#### Example Request
This is the request needed to create the named map:

```sh
curl -X POST \
   -H 'Content-Type: application/json' \
   -d @template.json \
   'https://docs.cartodb.com/api/v1/named?api_key=APIKEY'
```


### Instantiating a template map

Instantiating a map allows you to get a temporal map to fetch tiles. That temporal map is an anonymous map.

#### Definition
POST /api/v1/named/:template_name

#### Params
- A JSON with the template parameters in the body

```json
// params.json
{
 color: '#ff0000',
 cartodb_id: 3
}
```
These depend on the variables allowed by the named map. If there are some variables missing it will raise an error (HTTP 400)

- auth_token: (optional) if the named map needs auth


#### Example Request
You can instantiate a template map by passing all required parameters with a POST to ``/api/v1/named/:template_name``.

Valid credentials will be needed if required by the template.

```js
// params.json
{
 color: '#ff0000',
 cartodb_id: 3
}
```

```sh
curl -X POST \
  -H 'Content-Type: application/json' \
  -d @params.json \
  'https://docs.cartodb.com/api/v1/template/@template_name?auth_token=AUTH_TOKEN'

```

The response look like this:

```js
{
   "layergroupid":"docs@fd2861af@c01a54877c62831bb51720263f91fb33:123456788",
   "last_updated":"2013-11-14T11:20:15.000Z"
}
```

Or, an error woulr return:

```js
{
   "error":"Some error string here"
}
```

You can then use the ``layergroupid`` for fetching tiles and grids as you would normally (see anonymous map section).  However, you'll still have to show the ``auth_token``, if required by the template.


### Using JSONP

There is also a special endpoint to be able to instantiate using JSONP (for old browsers).

#### Definition
GET /api/v1/named/:template_name/jsonp

#### Params
- auth_token: (optional) If the named map needs auth
- config: Encoded JSON with the params for creating named maps (the variables defined in the template)
- lmza: This attribute contains the same as config but LZMA compressed. It cannot be used at the same time than ``config``.
- callback: JSON callback name


#### Response 
```
callback(
       "layergroupid":"c01a54877c62831bb51720263f91fb33:0",
       "last_updated":"1970-01-01T00:00:00.000Z"
       "cdn_url": {
           "http": "http://cdb.com",
           "https": "https://cdb.com"
}
```
Take a look at the anonymous maps response format. Here it is the same but wrapped in a function call.


#### Example Request

```
curl 'https://docs.cartodb.com/api/v1/named/:template_name/jsonp?auth_token=AUTH_TOKEN&callback=function_name&config=template_params_json'
```

This takes the ``callback`` function (required), ``auth_token`` if the template needs auth, and ``config`` which is the variable for the template (in case it has variables). For example config may be created (using javascript).
```
url += "config=" + encodeURIComponent(
JSON.stringify({ color: 'red' });
```

The response is in this format:
```
jQuery17205720721024554223_1390996319118(
{
layergroupid: "dev@744bd0ed9b047f953fae673d56a47b4d:1390844463021.1401",
last_updated: "2014-01-27T17:41:03.021Z"
}
)
```


### Update an Existing Name

#### Definition
PUT /api/v1/map/:map_name

#### Params
Same params used to create a map

#### Response
Same as updating a map

#### Other Info
Updating a named map removes all the named map instances so they need to be instantiated again.

#### Example

You can update a signed template map with a PUT:

```sh
curl -X PUT \
   -H 'Content-Type: application/json' \
   -d @template.json \
   'https://docs.cartodb.com/tiles/template/:template_name?api_key=APIKEY'
```
A template with the same name will be updated, if any.

The response would be like this:
```js
{
   "template_id":"@template_name"
}
```

If a template with the same name does NOT exist, a 400 HTTP response is generated with an error in this format:

```js
{
   "error":"Some error string here"
}
```

Update of a template map implies removal all signatures from previous map instances.


### Remove 
Removes the specified template map from the server.

#### Definition
DELETE to ``/template/:template_name``:

#### Response
On success, a 204 (No Content) response would be issued.
Otherwise a 4xx response with this format will be returned:

```js
{
   "error":"Some error string here"
}
```

#### Other Info
Deletion of a template map will imply removal of all instance signatures.

#### Example

```sh
curl -X DELETE 'https://docs.cartodb.com/tiles/template/@template_name?auth_token=AUTH_TOKEN'
```


### Listing Available Templates

This allows you to get a list of available templates. 

#### Definition
GET /api/v1/map/named/

#### Params
 - api_key is required

#### Example
```sh
curl -X GET 'https://docs.cartodb.com/tiles/template?api_key=APIKEY'
```

The response would be like this:
```js
{
   "template_ids": ["@template_name1","@template_name2"]
}
```

Or, on error:

```js
{
   "error":"Some error string here"
}
```

### Getting a Specific Template
This gets the definition of a template

#### Definition
GET ``/api/v1/map/named/:template_name``.

#### Params
 - api_key is required

#### Example

```sh
curl -X GET 'https://docs.cartodb.com/tiles/template/@template_name?auth_token=AUTH_TOKEN'
```

The response will look like:
```js
{
   "template": {...}  // see template.json above
}
```

Or, on error:

```js
{
   "error":"Some error string here"
}
```




