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

1. Local file or URL
2. Google Drive
3. Dropbox


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

A visualization is the combination of a basemap (more later) and your data. So once you have your data imported (the data you want to visualize) it will just show up on a map, and there you have your first visualization! This visualization will simply represent your points or polygons over the default map, with no customization whatsoever. From this point on, you can start customising how your visualization will look: the basemap, the type of map, assigning colors, creating infowindows, animating your data over a timeline with Torque... 

All customizations you make on your visualization are automatically saved (hey, we are on the cloud!), so you don't have to worry about loosing your work. If you ever want to save a given visualization and keep working in a new version, you can duplicate it. 


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

Apart from the default basemaps offered in CartoDB, you can integrate third-party basemaps. 


### About map projections



## CartoDB Sidebar 

### Custom SQL

### Wizards

#### Simple
#### Choropleth 
#### Clustered
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