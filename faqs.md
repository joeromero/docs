---
layout: default
title: FAQs
---

# FAQs

## CartoDB technical questions

### How to add my own images to infowindows?

In order to use your own images for customizing your infowindows at CartoDB, go to the infowindow preferences menu and select "image header" in the Design option. Now you have to be sure you have a column in your dataset of type 'string' whose content must be the URL of the image you want to show in the header. Then, you have to place this column at first place in the infowindow preferences and, of course, you should also activate the specific column of the URL to be shown.

### What are  private maps?

We've decoupled table privacy from visualization privacy.
This way, users can create visualizations (maps) from private tables and make them public, so the map (and any information selected on the infowindows) can be shared without anyone being able to download the whole data.
Also, there are options for protecting visualizations with a password or keep them entirely private.

### How to print maps in CartoDB?

There is no direct way to get printed maps from CartoDB besides just grabbing a screenshot. You can do that pretty easily on a Mac or PC with a keyboard shortcut (cmd shift 3 in mac). Or, if you are looking at a public map you can just it 'print' in your browser and should be able to get it in a PDF.

### How can I delete layers or combine them?

You can just disable a legend from a layer by applying to it the "none" template. If you want to merge the legends, you will have to perform a "Custom legend". This option is available in the Template selector of the legends wizard.

### I have a column with the coordinates but my data is not georeferenced

​This is happening because you have both coordinates in the same column, and as you see in the wizard for georeferencing, it asks about two columns, one with longitude and another with the latitude.
​
​If you split this unique coordinates column in two, and apply again the georeferencing process by taking into account the both columns, your data will be georeferenced.


### What does the table quota mean for the different plans?

### How can I change the privacy of my tables without using the UI?

In order to change the privacy of an existing visualization to "With Link"/"Private"/"Public", you need to use our internal REST API, which is undocumented, but for now the only way to do programmatically this feature.

This is an example CUrl call to do it (for setting "With link" privacy, see constants below for the case of Public or Private):

curl -H 'Content-Type: application/json' -H 'Accept: application/json' -X PUT -d '{"privacy":"LINK"}' "http://__USERNAME_.cartodb.com/api/v1/viz/__VISUALIZATIONID__?api_key=__APIKEY__"

It is pretty self-explanatory, but basically you need to execute a PUT http call and set, using JSON, the "privacy" visualization field to the literal "LINK" (careful, it's case-sensitive).

The call will return a JSON containing all current visualization fields so you can check that indeed the privacy changed to "LINK".

Available values to use from the API:
​PUBLIC
​LINK
​PRIVATE


### How can I have interactivity in a torque layer?

For the moment, torque layers have no interactivity. The trick that you can do is to have two layers:

- One static layer where the marker opacity is really low (almost invisible) with infowindow enabled.

- One torque layer

In order to keep all points on the map, just use the cumulative option.

### How many layers can my visualization have?

### What are the geocoding credits?

### Which are the supported browsers?

You have to differentiate between the authoring tool which is the place where you perform the maps, which requires modern browsers, and the published maps, which people consume. Those maps actually work down to IE7 in most cases. 

### Which databases are supported by CartoDB?

CartoDB only supports PostgreSQL databases due to making heavy use of PostGIS advanced capabilities, so we don't support MongoDB.

### How can I map Twitter datastreams?

CartoDB has no tools for retrieving a stream of tweets. The Twitter data has to be retrieved by you, and then you can import it and visualize it easily in a map with CartoDB.  

### Can I calculate from/to routes with CartoDB?

### Why the size of my tables has increased after uploading them to CartoDB?

### Has CartoDB multi-user functionalities?

### I have a column with a GeoJSON, how can I set the_geom value to this?

UPDATE your_table SET the_geom = st_setsrid(ST_GeomFromGeoJSON(your_GeoJSON_column), 4326)

### Can I synchronize my tables in real time?

By using the feature of sync tables, the shortest automatic syncing interval is 1 hour, but you can force manually a synchronization each 15 minutes.

### I have topographical maps in jpg and pdf formats. How can I convert these to add as base layers on the map?

there is not a direct or easy way to do that from CartoDB. What I recommend you is to use CartoDB.js in combination with GMaps or Leaflet to create overlays with images.

Here you can find examples in both options:

Leaflet: http://leafletjs.com/reference.html#imageoverlay

GMaps: https://developers.google.com/maps/documentation/javascript/examples/overlay-simple

### What about the rights of the data I upload to CartoDB?

For general rights on content see: http://cartodb.com/terms#subscriber.

### Does CartoDB work offline?

Right now CartoDB cannot work without connection to the internet. The application uses several services and libraries that cannot be hosted locally.
All we can recommend you regarding this is to install the software yourself as it is open source.

### Can CartoDB display real time data from a SQL database connection?

Unfortunately, CartoDB doesn't allow reading data from a SQL connection in real time. Nevertheless, you can use the SQL API for writing data into CartoDB.


### How do I perform a map with information that changes in time?

### What are the geometries?

### Can I have different geometries in the same layer?

### How do I share a visualization?

## Styling your maps

### How can I customize a CartoDB visualization?

We have a Javascript API that you can use to embed maps on your site and play with their interactivity, and also a very powerful SQL API that lets you modify the information on your map and see it refreshed in real time, or do geospatial queries against the that information to find what you want to show.

Check this at: http://developers.cartodb.com/documentation/apis-overview.html

### How to create dotted lines in CartoDB?

It is possible with the property 'line-dasharray', example:

<pre>
#your_table_name{
   polygon-opacity: 0;
   line-color: #FF6600;
   line-width: 1;
   line-opacity: 0.8;
   line-dasharray: 10,4;
}
</pre>

Documentation: https://www.mapbox.com/carto/api/2.3.0/#line-dasharray

### How can I get rid of the white border of the points in the map?

Just go to the CartoCSS tag and look for this line:
​
​marker-line-width: 0;
​
​In your case, it will have a value different than 0, so you should just only give to it a zero-value. 

### How to modify the size of the marker in a non-bubble map?

​First of all, select on the wizard the Category map or the one you are interested in, and customize it to correspond to what you want to do referring categories.
​
​With respect of the size, you just should add this line to the CartoCSS window inside the general parameters of your table:
​
​ marker-width: [your_number_column]/1000;
​
​Notice that in the code it is divided by 1000 because the values of the column are very big. You can adjust this to your data by applying divisions or multiplications depending on how you want to visualize the points.


## Other CartoDB related questions

### I'm a student/researcher, do you offer discounts for education?

In CartoDB we have a special pricing for academic purposes. We offer a FREE Academy plan that allows you to have , as well as a discount of 20% in the rest of our plans. Pricing page for education can be found here: http://cartodb.com/academic

### Which are the special plans for journalism of CartoDB?
