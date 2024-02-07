# README

## Deployment quirks

- the lambda name needs to change on every release to be correctly picked up by the cloudformation. this name change should be also reflected in the `geolocator-web-presence` cloudformation.
- this lambda function references files from an s3 bucket at runtime. Theses files need to be deployed manually when geolocator is updated. The name of the bucket is specified in the `geolocator-web-presence` cloudformation.
