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


## Styling your maps

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

Documentation: https://www.mapbox.com/carto/api/2.3.0/#line-dasha...


## Other CartoDB related questions

### I'm a student/researcher, do you offer discounts for education?

In CartoDB we have a special pricing for academic purposes. We offer a FREE Academy plan that allows you to have , as well as a discount of 20% in the rest of our plans. Pricing page for education can be found here: http://cartodb.com/academic
