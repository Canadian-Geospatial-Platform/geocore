# OpenSearch #

The OpenSearch Search Repo is made of several different parts. The opensearch-s3-loader takes metadata from the metadata bucket and loads it into OpenSearch. It then sends PDF, DOCX, and JPEG URLs to the resource_parser Lambda / Gateway which then reaches out to the URL and grabs the resource and sends it through the process of indexing. OpenSearch needs to be created first manually to properly build it. Current Dev instance should be of the right size for GeoDiscovery Needs. 

The presentation for OpenSearch can be found here: https://www.canva.com/design/DAFdR5LVTF8/xdYGDT3jYD7zHWevnWpPkA/view?utm_content=DAFdR5LVTF8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

Chris Melnick-MacDonald
chris@indiciumx.com
