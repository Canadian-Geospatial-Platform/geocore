---
layout: default
title: Additional Features
nav_order: 5
---

# Additional Features
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Contributions

In the process of replicating current functionality that is available with geonetwork, we have started to create a contribution API to allow users to contribute metadata to the system. This contribution workflow can occur in multiple ways:

## New Metadata

This is new metadata coming from the user with no system to system access requirements.

## Update

If a user has already submitted metadata in some way, we can use the UUID to update that record.

## Plugin

If the user would like to add plugin configuration for use with viewer technologies, we use the UUID to update the record to include things such as         symbology, graphing configuration, and others.etc.

## GeoNetwork

If you have a geonetwork instance, like our legacy system, you are able to use the CSW endpoint to capture your metadata and transform it into the geoCore format and into the geoCore system. This is an easy migration path for organizations that would like to adopt a cloud native solution.

# Authentication

Authentication for the system will be used to build out our community and contribution systems for [GEO.CA](https://geo.ca/). It will use the Government of Canada authentication system, but will also have the ability to authenticate with AWS Cognito, giving your organization the ability to customize the login experience if you choose to use the geoCore application.

# Featured, Foundational and thematic functionality

As we were building geoCore for use with [GEO.CA](https://geo.ca/), we needed a way to highlight certain records for display on the website. For this we created several AWS DynamoDB tables to keep track of which metadata records - by way of the UUID - are associated with a certain display property.

## Featured

Is used to highlight certain metadata records for display on the thematic pages of [GEO.CA](https://geo.ca/) such as [Administration](https://geo.ca/administration/index.html) and [Emergency](https://geo.ca/emergency/index.html).

## Foundational

We call the base information of Canada, that being the principal geospatial features such as roads, rails, and water as foundational layers. These are tagged using the DynamoDB table to be displayed on an unique [landing page](https://geo.ca/foundation-data/index.html).

## Themes

We use a dynamoDB table to catagorize metadata records into themes that are not natively supported by ISO 19115 metadata standard, such as legal and emergency. For a full list of ISO 19115 theme mapping to the themes found at [GEO.CA](https://geo.ca/), please [click here](https://geo.ca/).

# Analytics

One of the biggest concerns when publishing mass amounts of information is the question if it's being used. To monitor and report on this, we created the analytics extension that allows for the tracking of three main analytics:

  1. Search - The analytics system records the searches that take place on the system. This allows us to gain valuable insights on what and when people are searching for specific geographic regions or keywords.
  2. Access - When a user accesses a record, either by viewing the footprint or by viewing the metadata record for the item.
  3. Use - When a use adds an item to a map, or clicks on one of the resources, we include that in our use analytics.

For [GEO.CA](https://geo.ca/) we use the combined total of Access and Use analytics as a north star metric of overall access to open geospatial content. This allows us to understand how access to Canada's geospatial information is growing through time, and we highly encourage the use of this metric for your organization as well.
