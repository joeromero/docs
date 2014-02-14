# What is CartoDB

CartoDB is a tool to create map visualizations on the web. It features a geospatial database on the cloud that allows for the storage and visualization of data in your browser. Using CartoDB will allow you to quickly create map based visualizations. Here are a few ways you can use CartoDB:

* Upload, visualize, and manage your data using our web interface. Start at your [CartoDB dashboard][cartodb_login].

* Quickly create and customize maps that you can embed or share via public URL using the map embedding options.

* Analyze and integrate data you store on CartoDB into your applications using the [SQL API][sql_api].

* Create advanced integrations of CartoDB maps on your website or application using [CartoDB.js][cartodb_js]

<!-- invite to visit use cases and industries -->


# 1 minute introduction

Your dashboard has two main sections: **tables** and **visualizations**. The steps to create a visualization of your data are simple: 

1. Import your data
2. Visualize it
3. Share it (public or privately)

(you can even stop at #2, sharing is not mandatory, you may create a visualization to better understand your own data)

CartoDB lets you easily import your data in many different formats (Excel, CSV, XML, SHP...) and from different sources (your hard disk, Google Drive, Dropbox...), and makes it plain easy to show it on a map it using our visual wizards. With our wizards you can select what type of visualization you want to create, and you can define legends and infowindows (contextual modal windows associated with a data point or area) and select which information from your database you want to show. 

After you have created your visualization with our web interface, you can keep it private, share it with our colleagues, or publish it to the web, sharing its own URL or embeding it in your blog or CMS. 

In this guide we'll show you all features and posibilities from the CartoDB web interface (if you are ready to mess up with our powerful APIs, go check [CartoDB.js][cartodb_js] and [SQL API][sql_api])


# Tables

## Import your data

CartoDB features a geospatial database. That is a database which is capable of storing geospatial information. So when you are importing data into CartoDB, you are just importing data into a standard database. The underneath technology for the database is PostgreSQL with the geospatial extension PostGIS. Don't worry, you don't need to know about SQL, PostgreSQL or PostGIS. Just remember (or tell your technical people, in case you need) that CartoDB if fully compatible with these technologies. 

(Oh, and learning some SQL is easy, fun, and lets you create some amazing things. But while you learn, you can use our visual tools, which don't make it necessary for you to have any prior technical knowledge)

[SCREENSHOT TODO: New Table modal window]

Importing your data is dead easy, and you have several ways of doing it. Pick your favourite! 

1. **Local file or URL** 
2. **Google Drive**
3. **Dropbox**


### Sync tables ###




### Suported data formats

CartoDB supports a growing number of data-types and file formats. 


We encourage you to compress all your files before importing them, supported compression and archiving formats are currently .ZIP and .GZ (also .TAR.GZ and .TGZ). Files will be decompressed and then import based on the following table. If none of these type of files are found the importer will fail.

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

* Prefered format is using "," as separator, column headers.
** We require the ZIP to come with .SHP, .DBF, .SHX and .PRJ all with same name.
*** We will only import first Sheet and the structure must be tabular, with first row being the column headers.



## Manage your tables

### Tables privacy settings

### Importer error codes


## Inside a table

### Table

### Map view




# Visualizations

## What is a visualization

A visualization is the combination of a basemap (more later) and your data. Once you have your data imported (the data you want to visualize) it will just show up on a map, and there you have your first visualization! This visualization will simply represent your points or polygons over the default map, with no customization whatsoever. From this point on, you can start customising how your visualization will look: the basemap, the type of map, assigning colors, creating infowindows, animating your data over a timeline with Torque... 

All customizations you make on your visualization are automatically saved (hey, we are on the cloud!), so you don't have to worry about loosing your work. If you ever want to save a given visualization and keep working in a new version, you can duplicate it. 

[SCREENSHOT TODO: Sidebar: Layers]

CartoDB uses layers to represent data over your selected basemap. Each visualization is composed of a basemap plus a layer or several layers of data. You can customize what and how data is shown in each layer - that is, you can customize each layer independently. You can decide which layers are visible in a certain visualization. 

When you import data into CartoDB you are creating a table (or updating an existing one). Then, in each layer you have data linked from a table. When you create a new layer you select the table that will be linked. By default, all data from that table will be shown in the visualization. With our visual tools you can filter what data will be shown (either using the SQL window or the filters - more on that later TODO link sections). You can use two or more tables to create the representation of the data that you want to show. 




## Visualization metadata

[SCREENSHOT TODO: Visualization header]

For each visualization you can edit its name, add a description, and add some tags that will help you keep them organized and discoverable. 

[TODO: Update with new privacy options]


## Basemaps

### What is a basemap

The basemap is the first layer of content that is part of your visualization. Its a basic graphical representation of the world showing earth and sea, and can contain several other data: physical nature elements, geopolitical borders, roads, streets and even buildings. With CartoDB you can select between several basemaps so you can focus on the best possible way of visualizing your data.


### Selecting your basemap

[SCREENSHOT TODO: Basemap selection]

CartoDB offers you by default a selection of basemaps you can use in your visualization. You can select any one of them, and you can see how your visualization changes in real time. You can come in  any moment and change your basemap: the rest of your data will keep appearing in the same place, only with a new basemap in the background. Take a time to explore our different available basemaps. You'll be able to see that some of them have more detail (borders, roads, mountains) and other are more minimalistic. Choose the best one for the purpose of your visualization.


### Including an external basemap

[SCREENSHOT TODO: Add your Basemap modal window]

Apart from the default basemaps offered in CartoDB, you can integrate third-party basemaps to customize your visualizations even further. You have three ways: 

- **Including a [Mapbox](http://www.mapbox.com) map**: Mapbox is a service which lets you customize your basemap. Create your own designed basemap with your colors and elements, and integrate easily in CartoDB. Just select the URL from your map and paste it in our configuration window.
- XYZ template: TODO 
- WMS url TODO 


### About map projections

Earth is spheric (well, almost), but maps are laid out in a flat surface. Because of this, some distortion must be applied in order to visualize in a flat surface the spheric earth. Several distortions might be applied, and this impacts how elements are represented. This distortion is what a projection is. There exists several projections, several distortions used to represent the earth. 

The majority of maps used in the web are using the [Mercator Projection](https://en.wikipedia.org/wiki/Mercator_projection), and that is the projection you will be using when you create your visualizations in CartoDB. Changing the map projection is not feasible, as it would imply changing all the basemaps and all the information of how your data is stored in CartoDB. 

You can learn more about map projections in Wikipedia, and know all the details about how internally CartoDB [handles projections](http://developers.cartodb.com/tutorials/projections.html).


## CartoDB Sidebar 

[SCREENSHOT TODO: Sidebar]

The CartoDB sidebar is where are all the action is. From here you can access all the tools that will let you customize your visualization and the way your data is shown in your maps. The CartoDB sidebar minimizes to the left, so you have the maximum space to view your map and data. If you want to use any tool sitting in the sidebar, you just need to click in the sidebar.

In the sidebar you will see all the layers that you have created for a visualization. By default you will have one layer, and you create more layers to acomodate more data. For each layer, you will have all the tools to customize how your data will be displayed. 


Now, what you will find in the sidebar for each layer: 


### Custom SQL

[SQL](https://en.wikipedia.org/wiki/SQL) (structured query language) is the way that applications ask for data to a database. They can ask simple queries (give me all records from this table), queries that matches certain conditions (give me all records in which this field equals a certain value), or more complex queries which mixes data from two or more tables. As talked before, when you create a layer and link a table to it, by default all data will be shown. You can write a custom SQL query or use our filters to only show certain data. 

In this window you will be shown which query is being applied, and modify it. If you use our filters, you will be able to see here what query has produced the applied filter (a fun way to learn SQL!).


### Wizards

TODO Merge info @ http://developers.cartodb.com/documentation/using-cartodb.html#sec-4

The wizards window lets you choose the style of the visualization of your data. Before we go further, we'd like to give a little introduction to each type of visualization, and when, what for and how you should use each type.

* **Simple**: 
  * What
  * When to use it
  * Type of data
* **Cluster**: 
* **Choropleth **: 
* **Category**: 
* **Bubble **: 
* **Intensity**: 
* **Density**: 
* **Torque**: 

<!-- TODO when we have the corresponding lessons link to:  
  In the Map Academy we have a lesson devoted to the theory of data visualizations
-->

When using the UI beware that different types of data enables or disables certain wizards. For starters, lets asume that you are working with data that is represented as points (the simplest one). Play around a little bit and check how your data displays for each type of visualization, and how the tools to customize each visualization change. Then, lets dig a little deeper in each of the available visualization wizards: 

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