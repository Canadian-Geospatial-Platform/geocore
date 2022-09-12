---
layout: default
title: Home
nav_order: 1
description: "Geocore is an open source cloud native geospatial catalog hosted on AWS"
permalink: /
---

# An Open Source, Cloud Native Geospatial Catalog.
{: .fs-9 }

The geocore geospatial library is a cloud-first solution for search, discovery, and dissemination of geospatial content. Building on the ideas of open source geospatial catalogs such as geonetwork and spatial temporal asset catalogs (STAC), we have combined the best practices and flexibility of these technologies for the cloud age. It is built using Amazon Web Services’s managed services as microservices to reduce overall cost of development and maintenance. The flexibility of this system lies in the geocore storage format. The geocore format is an extended [geoJSON](https://geojson.org/) that allows the user to not only provide geospatial information about the content, but all the required and optional metadata associated with the item.
{: .fs-6 .fw-300 }

[View in action](https://app.geo.ca/){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [View it on GitHub](https://canadian-geospatial-platform.github.io/GeoCore/){: .btn .fs-5 .mb-4 .mb-md-0 }

# Foundational Architecture

We store individual geoCore files for each item in an Amazon s3 bucket. To allow for faster search, we combine these individual files into a [parquet file](https://parquet.apache.org/). Once the parquet file is created and stored in another Amazon s3 bucket, we use [AWS Glue](https://aws.amazon.com/glue/) and [AWS Athena](https://aws.amazon.com/athena/). AWS Athena and AWS Glue work together to enable SQL queries against non-SQL data. This allows us to create sql like tables in athena using this parquet file. We can access AWS Athena with sql queries to search and discover our metadata records in the geocore data lake.

To enable the scalability of the system, we use AWS Lambda functions to carry out the main tasks of the system. This allows us to scale the system to millions of concurrent activities without endangering the functionality of the system. We use AWS lambda primarily as microservices, where one lambda function does one function, and that one function really well. It can be accessed with AWS API Gateway using AWS Cloudfront and security to enable the best protection of the system.

This lays out the foundational architecture of the geoCore system, now we will describe the additional and optional functions that we have created in the system to power [GEO.CA](https://geo.ca/).

## Overview

![This is an image](/assets/geocore.png)



# Additional features

## Contributions

In the process of replicating current functionality that is available with geonetwork, we have started to create a contribution API to allow users to contribute metadata to the system. This contribution workflow can occur in multiple ways:

  1. New Metadata - This is new metadata coming from the user with no system to system access requirements.
  2. Update - If a user has already submitted metadata in some way, we can use the UUID to update that record.
  3. Plugin - If the user would like to add plugin configuration for use with viewer technologies, we use the UUID to update the record to include things such as         symbology, graphing configuration, and others.etc.
  4. GeoNetwork - If you have a geonetwork instance, like our legacy system, you are able to use the CSW endpoint to capture your metadata and transform it into the geoCore format and into the geoCore system. This is an easy migration path for organizations that would like to adopt a cloud native solution.

## Authentication

Authentication for the system will be used to build out our community and contribution systems for [GEO.CA](https://geo.ca/). It will use the Government of Canada authentication system, but will also have the ability to authenticate with AWS Cognito, giving your organization the ability to customize the login experience if you choose to use the geoCore application.

## Featured, Foundational and thematic functionality

As we were building geoCore for use with [GEO.CA](https://geo.ca/), we needed a way to highlight certain records for display on the website. For this we created several AWS DynamoDB tables to keep track of which metadata records - by way of the UUID - are associated with a certain display property.

For example:

  - Featured - Is used to highlight certain metadata records for display on the thematic pages of [GEO.CA](https://geo.ca/) such as [Administration](https://geo.ca/administration/index.html) and [Emergency](https://geo.ca/emergency/index.html).
  - Foundational - We call the base information of Canada, that being the principal geospatial features such as roads, rails, and water as foundational layers. These are tagged using the DynamoDB table to be displayed on an unique [landing page](https://geo.ca/foundation-data/index.html).
  - Themes - We use a dynamoDB table to catagorize metadata records into themes that are not natively supported by ISO 19115 metadata standard, such as legal and emergency. For a full list of ISO 19115 theme mapping to the themes found at [GEO.CA](https://geo.ca/), please [click here](https://geo.ca/).

## Analytics

One of the biggest concerns when publishing mass amounts of information is the question if it's being used. To monitor and report on this, we created the analytics extension that allows for the tracking of three main analytics:

  1. Search - The analytics system records the searches that take place on the system. This allows us to gain valuable insights on what and when people are searching for specific geographic regions or keywords.
  2. Access - When a user accesses a record, either by viewing the footprint or by viewing the metadata record for the item.
  3. Use - When a use adds an item to a map, or clicks on one of the resources, we include that in our use analytics.

For [GEO.CA](https://geo.ca/) we use the combined total of Access and Use analytics as a north star metric of overall access to open geopsatial content. This allows us to understand how access to Canada's geospatial information is growing through time, and we highly encourage the use of this metric for your organization as well.


### License

GeoCore is distributed by an [MIT license](https://github.com/canadian-geospatial-platform/GeoCore/tree/main/LICENSE.txt).
