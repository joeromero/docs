---
layout: default
title: Tips and tricks
---

# Tips and tricks



## SQL

### Common Table Expression

The Common Table Expression (CTE) is a really useful tool for making SQL more readable. It has a drawback if you are not 100% sure what you are doing, it puts constraints on the query planner. Unlike nested queries, CTEs force the order of execution to follow the way you write you queries. 

We **strong recommend not using CTE statements** in your CartoDB queries. This is expecially true in maps, where the Maps API wraps your queries in further query statements to optimize the creation of tiles from your data. If the query planner cannot access the full statement, it cannot make it fast! 