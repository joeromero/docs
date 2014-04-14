---
layout: default
title: Tips and tricks
---

# Tips and tricks

## Charts & Graphs

It is definitely possible to create charts and graphs using CartoDB. For the timebeing, you'll need to use a combination of CartoDB.js and a third-party JavaScript library. If you are a fan of D3, you can definitely take advantage of the SQL API to query and format data to make graphs pretty easily. Another libary that we like is [Chart.js](http://www.chartjs.org/). Using Chart.js with the SQL API is as straight-forward as it gets. [Take a look](http://bl.ocks.org/andrewxhill/9134155).

## SQL

### Common Table Expression

The Common Table Expression (CTE) is a really useful tool for making SQL more readable. It has a drawback if you are not 100% sure what you are doing, it puts constraints on the query planner. Unlike nested queries, CTEs force the order of execution to follow the way you write you queries. 

We **strong recommend not using CTE statements** in your CartoDB queries. This is expecially true in maps, where the Maps API wraps your queries in further query statements to optimize the creation of tiles from your data. If the query planner cannot access the full statement, it cannot make it fast! 