---
layout: default
title: geocore Format / Format geocore
nav_order: 2
---

# geocore Format / Format geocore
{: .no_toc }

## Table of contents / Table des matières
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Understanding the geocore format

As the Federal Geospatial Platform deals with not only the Harmonized North American Profile (HNAP) of ISO 19115, but different metadata standards from the provinces and territories, a flexible metadata storage format was created. The geoCore format is a standardless format that is able to store various metadata fields. It is based on the geoJSON format where the properties field of the geoJSON file stores the metadata for each record.

## Example of Format
The following is an example of the geoCore format:

```
{
  "type": "FeatureCollection",
    "features": [
      {
        "type":"Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [[[ west, south ], [ east, south ], [ east, north ], [ west, north ], [ west, south]]]},
        "properties": {
          "id": id,
          "title": {
            "en": title_en,
            "fr": title_fr
            },
          "description": {
            "en": description_en,
            "fr": description_fr
          },
          "keywords": {
            "en": keyword_String_en,
            "fr": keyword_String_fr
          },
          "topicCategory": topicCategory,
          "date": {
            "published": {
              "text": date_text_publication,
              "date": date_publication
            },
            "created": {
              "text": date_text_creation,
              "date": date_creation
            }
          },
          "spatialRepresentation": spatialRepresentation,
          "type": type,
          "geometry": boundingbox,
          "temporalExtent": {
            "begin": temporalExtent_begin,
            "end": temporalExtent_end
          },
          "refSys": refSys,
          "refSys_version": refSys_version,
          "status": status,
          "maintenance": maintenance,
          "metadataStandard": {
            "en": metadataStandard_en,
            "fr": metadataStandard_fr
          },
          "metadataStandardVersion": metadataStandardVersion,
          "graphicOverview": goArray,
          "distributionFormat_name": distributionFormat_name,
          "distributionFormat_format": distributionFormat_format,
          "useLimits": {
            "en": useLimits_en,
            "fr": useLimits_fr
          },
          "accessConstraints": accessConstraints,
          "otherConstraints": {
            "en": otherConstraints_en,
            "fr": otherConstraints_fr
          },
          "dateStamp": dateStamp,
          "dataSetURI": dataSetURI,
          "locale": {
            "language": locale_language,
            "country": locale_country,
            "encoding": locale_encoding
          },
          "language": language,
          "characterSet": characterSet,
          "environmentDescription": environmentDescription,
          "supplementalInformation": {
            "en": supplementalInformation_en,
            "fr": supplementalInformation_fr
          },
          "contact": contacts_Array,
          "credits": credits_Array,
          "cited": cited_Array,
          "distributor": dist_Array,
          "options": options_Array
          }
        }]}
```

## Extending the Format

This format can be easily expanded to include hundreds if not thousands of fields that you might want to include within your metadata, with only a simple code addition to allow it to be displayed or searched in the system.

---

# Comprendre le format geocore

Étant donné que la Plateforme géospatiale fédérale traite non seulement du Profil nord-américain harmonisé (HNAP) de la norme ISO 19115, mais également de différentes normes de métadonnées des provinces et territoires, un format flexible de stockage des métadonnées a été créé. Le format geoCore est un format sans standard capable de stocker divers champs de métadonnées. Il est basé sur le format geoJSON où le champ de propriétés du fichier geoJSON stocke les métadonnées pour chaque enregistrement.

## Exemple de Format
Voici un exemple du format geoCore :

```
{
  "type": "FeatureCollection",
    "features": [
      {
        "type":"Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [[[ west, south ], [ east, south ], [ east, north ], [ west, north ], [ west, south]]]},
        "properties": {
          "id": id,
          "title": {
            "en": title_en,
            "fr": title_fr
            },
          "description": {
            "en": description_en,
            "fr": description_fr
          },
          "keywords": {
            "en": keyword_String_en,
            "fr": keyword_String_fr
          },
          "topicCategory": topicCategory,
          "date": {
            "published": {
              "text": date_text_publication,
              "date": date_publication
            },
            "created": {
              "text": date_text_creation,
              "date": date_creation
            }
          },
          "spatialRepresentation": spatialRepresentation,
          "type": type,
          "geometry": boundingbox,
          "temporalExtent": {
            "begin": temporalExtent_begin,
            "end": temporalExtent_end
          },
          "refSys": refSys,
          "refSys_version": refSys_version,
          "status": status,
          "maintenance": maintenance,
          "metadataStandard": {
            "en": metadataStandard_en,
            "fr": metadataStandard_fr
          },
          "metadataStandardVersion": metadataStandardVersion,
          "graphicOverview": goArray,
          "distributionFormat_name": distributionFormat_name,
          "distributionFormat_format": distributionFormat_format,
          "useLimits": {
            "en": useLimits_en,
            "fr": useLimits_fr
          },
          "accessConstraints": accessConstraints,
          "otherConstraints": {
            "en": otherConstraints_en,
            "fr": otherConstraints_fr
          },
          "dateStamp": dateStamp,
          "dataSetURI": dataSetURI,
          "locale": {
            "language": locale_language,
            "country": locale_country,
            "encoding": locale_encoding
          },
          "language": language,
          "characterSet": characterSet,
          "environmentDescription": environmentDescription,
          "supplementalInformation": {
            "en": supplementalInformation_en,
            "fr": supplementalInformation_fr
          },
          "contact": contacts_Array,
          "credits": credits_Array,
          "cited": cited_Array,
          "distributor": dist_Array,
          "options": options_Array
          }
        }]}
```

## Extension du format

Ce format peut être facilement étendu pour inclure des centaines, voire des milliers de champs que vous pourriez vouloir inclure dans vos métadonnées, avec seulement un simple ajout de code pour lui permettre d'être affiché ou recherché dans le système.
