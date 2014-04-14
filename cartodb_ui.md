---
layout: default
title: The CartoDB UI
---

# What is CartoDB

CartoDB is a geospatial database on the cloud that allows for the storage and visualization of data on the web. Using CartoDB will allow you to quickly create map based visualizations. Here are a few ways you can use CartoDB:

* Upload, visualize, and manage your data using our web interface. Start at your [CartoDB dashboard][cartodb_login].

* Quickly create and customize maps that you can embed or share via public URL using the map embedding options.

* Analyze and integrate data you store on CartoDB into your applications using the [SQL API][sql_api].

* Create maps from your application [Maps API](maps_api).

* Create advanced integrations of CartoDB maps on your website or application using [CartoDB.js][cartodb_js]

<!-- invite to visit use cases and industries -->


# One-minute introduction

Your dashboard has two main sections: **tables** and **visualizations**. The steps to create a visualization of your data are simple:

1. Import your data
2. Visualize it
3. Share it (public or privately)

(You may even stop at step two as sharing is not mandatory. You may create a visualization to better understand your own data and keep it private.)

CartoDB lets you easily import your data from many different formats (Excel, CSV, XML, SHP, GeoJSON, etc.) and from different sources (your hard disk, Google Drive, Dropbox). It makes it easy to show your data on a map using our visual wizards. Our wizards enable you to select what type of visualization you want to create, define legends and infowindows (which are contextual pop-up windows associated with a data point or area) and select which information from your database you want to show.

After you have created your visualization with our web interface, you can keep it private, share it with your colleagues, or publish it to the web either by sharing its URL or embedding it in your blog or CMS.

In this guide we'll show you all the features and possibilities available to you from the CartoDB web interface. If you are ready to experiment with our powerful APIs then go to [CartoDB.js][cartodb_js] and [SQL API][sql_api].


# Tables

## Importing your data

CartoDB features a geospatial database which is a database capable of storing geospatial information such as geometry. When you import data into CartoDB, you are importing data into a standard database. Under the hood PostgreSQL is running with the geospatial extension PostGIS. If you've never heard of these open-source tools don't worry. Just remember (or tell your technical people) that CartoDB is fully compatible with these technologies.

(Oh, and by the way learning SQL is easy, fun, and lets you do some amazing things. But while you learn, you may still use our visualization tools, which doesn't make it necessary for you to have any prior technical knowledge.)

[SCREENSHOT TO DO: New Table modal window]

Importing your data is easy, and you have several ways of doing it. Pick your favorite!

1. **Upload a local file or URL**
2. **Sync using Google Drive**
3. **Sync using Dropbox**

The easiset of these is uploding your local file or pulling in a table from a specific URL. To upload a file, navigate to your Dashboard and click "New Table." In the window that pops up, just click on Select a File and find the data you want to work with. You can also paste a URL in this field, and CartoDB will upload that data.


### Syncing tables ###
In order to sync your tables via Google Drive or Dropbox, you start much the same way as when you're uploading your own file. Click "New Table" from your Dashboard, and then click on the tab for Google Drive data or Dropbox, depending on which one you want to use. 

From there, you will need to allow CartoDB to access your data so that we can display it for you. Once you select the file that you want to work with, you can choose how often CartoDB should sync the table. You can ask CartoDB to sync it every hour, day, week or month!

Once you pick your data, click "Create Table" and our importer will start building your CartoDB table. This should be a speedy import, but if you have tons of data, give it a few minutes to load. 


### Supported data formats

CartoDB supports a growing number of data-types and file formats.


We encourage you to compress all your files before importing them, supported compression and archiving formats are currently .ZIP and .GZ (also .TAR.GZ and .TGZ). Files will be decompressed and then imported based on the following table. If none of these type of files are found the import will fail.

<table>
  <tbody>
    <tr>
      <td>.CSV .TAB *</td>
      <td>Comma-separated values and Tab delimited file</td>
    </tr>
    <tr>
      <td>.SHP **</td>
      <td>ESRI shapefiles</td>
    </tr>
    <tr>
      <td>.KML, .KMZ</td>
      <td>Google Earth format</td>
    </tr>
    <tr>
      <td>.XLS, .XLSX ***</td>
      <td>Excel Spreadsheet</td>
    </tr>
    <tr>
      <td>.GEOJSON</td>
      <td>GeoJSON</td>
    </tr>
    <tr>
      <td>.GPX</td>
      <td>GPS eXchange Format</td>
    </tr>
    <tr>
      <td>.OSM, .BZ2</td>
      <td>Open Street Map dump</td>
    </tr>
    <tr>
      <td>.ODS</td>
      <td>OpenDocument Spreadsheet</td>
    </tr>
    <tr>
      <td>.SQL</td>
      <td>Experimental SQL format dumped from CartoDB</td>
    </tr>
  </tbody>
</table>

For tables, our preferred format is using a comma as separator and including column headers. We will only import first Sheet and the structure must be tabular, with first row being the column headers.

For shapefiles, we require the whole .zip file containing the .SHP, .DBF, .SHX and .PRJ all with same name.


## Manage your tables
You can look at the list of tables you have uploaded on your dashboard's landing page. You can search, order them by date modified or created, or tag them to organize them in a way that suits you! Each table has its own privacy settings, which you can change individually.

### Tables privacy settings
To change the privacy setting of a table, click the colored label right next to the table's name. There, you can choose "Private," "Anyone with a link," or "Public on the web." If it's Private, no one but you will be able to see the table. If it requires a link, only those who have the link will be able to find it. If it's public on the web, anyone can find it on your Public Page or roaming around the internet!

### Importer error codes


## Inside a table
Once you're inside your table, there are two ways for you two view your data: Table and Map View. You can toggle between the two views on the top right.

### Table
Table view is a view where you can see, filter, and query your raw data and see the results in a table format. The pull out pane on the right of your screen allows you to write your own SQL queries, apply basic filters, merge two uploaded tables, and add rows and columns. 

### Map view
In the map view, you can see what your data looks like spatially. You can apply SQL queries or filters on the view, style it using our wizards or your own CartoCSS, and create infowindows. 

In the Map View, you can style and filter your data to where you want it for your visualization, **but** the Map View is not the same as a shareable visualization. In order to create your visualization, click "Visualize" in the top right. Keep on reading for what you can do from there!

# Visualizations

## What is a visualization?

Vizualizations are the method CartoDB uses for publishing maps to the web. They may be created after you have imported at least one data table. You can create a new visualization by navigating to the "Visualizations" section of your CartoDB dashboard and then selecting on one or more layers to add to the visualization. 

Every visualization has at least two layers: a basemap layer (more on basemaps later) and the data you are overlaying on top of the base map. The data being overlayed in your visualization is directly linked to the data's table in the "tables" view. Any changes you make to your data's attribute information will be reflected in either view. All stylistic customizations made to a visualization are automatically saved (hey, we are on the cloud!), so you don't have to worry about losing your work. If you ever want to save a given visualization and keep working in a new version, you can duplicate it.


[SCREENSHOT TODO: Sidebar: Layers]

CartoDB uses layers to represent data over a basemap. Each visualization is composed of a basemap plus one or several layers of data. You can customize what and how data is shown in each layer - that is, you can customize each layer independently. You can also decide which layers are visible in a certain visualization.

So, to review: When you import data into CartoDB you are creating a table (or updating an existing one). You can turn this table in to a visualization. Inn each layer of the visualization, you have data linked from different tables. When you create a new layer in a visualization, you select the table that will be linked. By default, all data from that table will be shown in the visualization. With our visual tools you may filter what data will be shown (either using the SQL window or the filters - more on that later TODO link sections). You can also style the visualization however you like, using our wizards or your own CartoCSS.


## Visualization metadata

[SCREENSHOT TODO: Visualization header]

For each visualization you can edit the name, add a description, and add some tags to help keep them organized and discoverable.

[TODO: Update with new privacy options]


## Basemaps

### What is a basemap?

The basemap is the first layer of your visualization. Its is typically a graphical representation of the world showing natural and cultural features such as water bodies, topography, park areas, points of interest, geopolitical borders, roads, streets and sometimes buildings. With CartoDB you can choose between various basemap styles so you can focus on the best possible way of visualizing your data. You can import a custom base map through MapBox, XYZ, or WMS. If you want, you could also forgo a basemap and use either a solid background color or repeated image.


### Selecting your basemap

[SCREENSHOT TODO: Basemap selection]

When you first creatie a visualization, it will be given a default "Nokia Day" base map. To change the look of your basemap simply click on "Basemap" in the upper left of the dashboard and select an available style from the dropdown. You may add your own custom basemap in the "Add yours" option and then by linking to the URL for that basemap from MapBox, XYZ, or WMS. Finally, there are options for adding a solid color or a repeating image pattern instead of a basemap. All of these features give you a high level of customization when creating a map visualization.

CartoDB offers you a selection of basemaps you can use in your visualization. You may select any one of them, and your change will be applied immediately. You can change your basemap anytime and the rest of your layers will remain unchanged. Take some time to explore our different available basemaps. You'll be able to see that some of them have more detail (borders, roads, mountains) and other are more minimalistic. Choose the best one for the purpose of your visualization.


### Including an external basemap

[SCREENSHOT TODO: Add your Basemap modal window]

Apart from the default basemaps offered in CartoDB, you can integrate third-party basemaps to customize your visualizations even further. You have three options:

1. **TODO: Include a [Mapbox](http://www.mapbox.com) map**: Mapbox is a service which lets you customize your basemap. Create your own designed basemap with your colors and elements, and integrate easily in CartoDB. Just select the URL from your map and paste it in our configuration window.
2. XYZ template: TODO
3. WMS url TODO


### About map projections

The earth has an ellipsoid shape, but maps are representations of the earth on a flat surface. This means that some distortion must be applied in order to visualize the earth on a two-dimensional plane. During this process several types of distortions may occur and this impacts how map features are represented. The rules and methods used to distort the three-dimensional form of the earth into a two-dimensional representation is referred to as a [map projection](http://en.wikipedia.org/wiki/Map_projection). There are many types of projections used to represent the earth at various scales. Some depict the whole world, others a continent or country, and still others a region or state / province. Each type of projection attempts to preserve certain properties at the expense of others such as area, direction, shape and distance.

The majority of maps used in the web are using a variant of the [Mercator Projection](https://en.wikipedia.org/wiki/Mercator_projection), commonly referred to as the Web-Mercator. That is the projection you will be using when you create your visualizations in CartoDB. Changing the map projection is currently not feasible, as it would imply changing all the basemaps and all the information of how your data is stored in CartoDB.

You can learn more about map projections in Wikipedia, and read up on all the details about how CartoDB handles [projections internally](http://developers.cartodb.com/tutorials/projections.html).


## CartoDB Sidebar

[SCREENSHOT TODO: Sidebar]

The CartoDB sidebar is where are all the action is. From here you can access all the tools that will let you customize the way your data is displayed on your maps and in your tables. The CartoDB sidebar minimizes to the right, so you have the maximum space to view your map and data. If you want to use any tool in the sidebar simply click on the sidebar to expand it.

In the sidebar you will see all the layers that you have created for a visualization. By default you will have one layer and you may add layers to accomodate more data. For each layer, you will have the same tools to customize how your data will be displayed.

Next each feature in the sidebar will be explained:


### Custom SQL

[SQL](https://en.wikipedia.org/wiki/SQL) (structured query language) is the way that applications ask for data from a database. They can ask simple queries (*i.e.* "give me all records from this table"), queries that matches certain conditions (*i.e.*  "give me all records in which this field equals a certain value"), or more complex queries that combine data from two or more tables. As mentioned earlier, when you create a visualization and link a table to it by default all data will be displayed. You can write a custom SQL query or use our filters to only show certain parts of the data.

In this window you will be shown which query is currently being applied and you have the ability to modify it. When using our filters you will be able to see the query that has been produced from the applied filter (a fun way to learn SQL!).


### Wizards

CartoDB gives you full control of the style and presentation of your data. Some of the basic controls include coloring and line-width controls. You can access these by clicking on the "wizards" section of the CartoDB sidebar.

The wizards window lets you choose how your data is styled. Before we go further, we'd like to give a little introduction to each type of visualization.

* **Simple**:
  * The Simple visualization is exaclty what it sounds like, a basic display of your data. You can add lables, adjust the size and color of your points, and change the color and outline of your polygons, but there will be no conditional formatting. This is good for displaying basic data or for exploring your data. 
* **Cluster**:
	* The Cluster visualization works with point files to display "clusters" of points that are close in proximity. This is useful if you have a lot of points that are close to each other, and you want to simplify the way they display on the map. When you use this visualization, you will get a point with a number that represents how many points are in that area.
* **Choropleth**:
	* This changes the color of each feature based on a secondary numeric value from a column in your table that you choose. Parameters you can change include the color ramp and number of bins your data will be fit into. This is often most useful with polygon data, and you can use it to compare characteristics of regions, and areas. For example, choropleth mapping is often used to display things like income data by neighborhood or other area in a city.
* **Category**:
	* Category visualizations display your data points and polygons in different colors based on a secondary characteristic (not numeric value) in your table. For example, if your data is showing multiple kinds of a certain characteristic (*i.e.* residential areas, versus commercial or manufacturing), you would use the category wizard to change the color or style of each category you're interested in showing. When you first select Category, CartoDB will pick a column to display. You can change this if it doesn't pick the one you're most interested in showing! You can also change the colors and line strokes/colors in this visualization.  
* **Bubble**:
	* The Bubble visualization scales the radius of points in your data based on a secondary numeric value from a column in your table that you choose. Parameters you can change include the maximum and minimum size of your bubbles and the color schemes. This is good if you want to compare numerical values associated with a certain point, like population size of cities. Remember that it is not a useful visualization type if your data is in polygon form.
* **Intensity**:
	* The Intensity visualization approximates the density of your points by making areas where there are many points, or points overlap darker in color than areas with fewer points. This is useful when you have a point dataset with a large number of points, and when you want to show areas of higher "intensity" as opposed to those with lower intensity. One of the main advantages of this versus a heatmap is that if you start zooming, you can click on your points and get details in your infowindows.
* **Density**:
	* The Density visualization aggregates your data in hexagons and colors them based on the amount of data you have within each unit. Areas with more data points will be darker than those with fewer points. Note that when using a Density map, your infowindows will be disabled. If you want to show an approximation of density, but maintain infowindows, check out the Intensity visualization above.
* **Torque**:
	* Torque is the newest addition to the family, and it displays data with a temporal characteristic associated with it. Torque will take your points, and visualize them through time based on a column containing the time stamp. The full standard format of the date column is YYYY-DD-MMThh:mm:ssZ, but you can still visualize data that has just year, year/month, or year/month/day characteristics using Torque.

<!-- TODO when we have the corresponding lessons link to:
  In the Map Academy we have a lesson devoted to the theory of data visualizations
-->

When using the UI beware that different types of data enables or disables certain wizards. Play around a little bit and check how your data displays for each type of visualization, and how the tools to customize each visualization change.

Let's dig a little deeper in each of the available visualization wizards:

#### Simple

* **Marker fill**
* **Marker stroke**
* **Composite operation**
* **Label text**
  * **Label font**
  * **Label halo**
  * **Label offset**
  * **Label overlap**
  * **Label placement**

#### Cluster

* **Buckets**
* **Marker fill**
* **Marker stroke**
* **Marker size**
* **Label font**
* **Label halo**


#### Choropleth
#### Category
#### Bubble
#### Intensity
#### Density
#### Torque

### Infowindows

#### On click infowindows
#### On hover infowindows
#### Infowindows HTML styling


### CartoCSS

### Legends

#### Legends HTML styling


### Filters


## Options


## Share your visualization

### Publishing your maps
### Title and description
### Layer selector
### Sharing options
### Legends
### Brand removal





# Managing your data

## Filtering data
## Merging tables
## Geocoding data
## Exporting data
## Running SQL queries
### Table as query
### Creating indexes



# Common data


# Your account

## Quotas and billing
## Free trial and upgrading
## Deleting your account


# FAQs

## Supported browsers
## What is a map view
## Academic plans




[cartodb_login]: http://cartodb.com/login
[sql_api]: http://docs.cartodb.com/sql-api.html
[cartodb_js]: http://docs.cartodb.com/cartodb-js.html
