---
layout: default
title: Architecture
nav_order: 4
---

# Foundational Architecture
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Foundational Architecture

We store individual geoCore files for each item in an Amazon s3 bucket. To allow for faster search, we combine these individual files into a [parquet file](https://parquet.apache.org/). Once the parquet file is created and stored in another Amazon s3 bucket, we use [AWS Glue](https://aws.amazon.com/glue/) and [AWS Athena](https://aws.amazon.com/athena/). AWS Athena and AWS Glue work together to enable SQL queries against non-SQL data. This allows us to create sql like tables in athena using this parquet file. We can access AWS Athena with sql queries to search and discover our metadata records in the geocore data lake.

To enable the scalability of the system, we use AWS Lambda functions to carry out the main tasks of the system. This allows us to scale the system to millions of concurrent activities without endangering the functionality of the system. We use AWS lambda primarily as microservices, where one lambda function does one function, and that one function really well. It can be accessed with AWS API Gateway using AWS Cloudfront and security to enable the best protection of the system.

This lays out the foundational architecture of the geoCore system, now we will describe the additional and optional functions that we have created in the system to power [GEO.CA](https://geo.ca/).

## Architecture Overview

![This is an image](/assets/images/geocore.png)
