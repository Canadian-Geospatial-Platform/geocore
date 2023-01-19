---
layout: default
title: Additional Features / Caractéristiques supplémentaires
nav_order: 5
---

# Additional Features / Caractéristiques supplémentaires
{: .no_toc }

## Table of contents / Table des matières
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Contributions

In the process of replicating current functionality that is available with geonetwork, we have started to create a contribution API to allow users to contribute metadata to the system. This contribution workflow can occur in multiple ways:

## New Metadata

This is new metadata coming from the user with no system to system access requirements.

[View API Reference](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#contribute_new)

## Update

If a user has already submitted metadata in some way, we can use the UUID to update that record.

[View API Reference](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#contribute_update)

## Plugin

If the user would like to add plugin configuration for use with viewer technologies, we use the UUID to update the record to include things such as         symbology, graphing configuration, and others.etc.

[View API Reference](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#contribute_plugin)

## GeoNetwork

If you have a geonetwork instance, like our legacy system, you are able to use the CSW endpoint to capture your metadata and transform it into the geoCore format and into the geoCore system. This is an easy migration path for organizations that would like to adopt a cloud native solution.

[View API Reference](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#contribute_geonetwork)

# Authentication

Authentication for the system will be used to build out our community and contribution systems for [GEO.CA](https://geo.ca/). It will use the Government of Canada authentication system, but will also have the ability to authenticate with AWS Cognito, giving your organization the ability to customize the login experience if you choose to use the geoCore application.

# Featured, Foundational and thematic functionality

As we were building geoCore for use with [GEO.CA](https://geo.ca/), we needed a way to highlight certain records for display on the website. For this we created several AWS DynamoDB tables to keep track of which metadata records - by way of the UUID - are associated with a certain display property.

## Featured

Is used to highlight certain metadata records for display on the thematic pages of [GEO.CA](https://geo.ca/) such as [Administration](https://geo.ca/administration/index.html) and [Emergency](https://geo.ca/emergency/index.html).

[View API Reference](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#featured_ref)

## Foundational

We call the base information of Canada, that being the principal geospatial features such as roads, rails, and water as foundational layers. These are tagged using the DynamoDB table to be displayed on an unique [landing page](https://geo.ca/foundation-data/index.html).

[View API Reference](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#foundational_ref)

## Themes

We use a dynamoDB table to catagorize metadata records into themes that are not natively supported by ISO 19115 metadata standard, such as legal and emergency. For a full list of ISO 19115 theme mapping to the themes found at [GEO.CA](https://geo.ca/), please [click here](https://geo.ca/).

# Analytics

One of the biggest concerns when publishing mass amounts of information is the question if it's being used. To monitor and report on this, we created the analytics extension that allows for the tracking of three main analytics:

  1. Search - The analytics system records the searches that take place on the system. This allows us to gain valuable insights on what and when people are searching for specific geographic regions or keywords.
  2. Access - When a user accesses a record, either by viewing the footprint or by viewing the metadata record for the item.
  3. Use - When a use adds an item to a map, or clicks on one of the resources, we include that in our use analytics.

For [GEO.CA](https://geo.ca/) we use the combined total of Access and Use analytics as a north star metric of overall access to open geospatial content. This allows us to understand how access to Canada's geospatial information is growing through time, and we highly encourage the use of this metric for your organization as well.

[View API Reference](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#Analytics / Analytique)

---

# Contributions

Dans le processus de réplication des fonctionnalités actuelles disponibles avec geonetwork, nous avons commencé à créer une API de contribution pour permettre aux utilisateurs de contribuer des métadonnées au système. Ce flux de travail de contribution peut se produire de plusieurs manières :

## Nouvelles métadonnées

Il s'agit de nouvelles métadonnées provenant de l'utilisateur sans exigences d'accès de système à système.

[Afficher la référence de l'API](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#contribute_new)

## Mise à jour

Si un utilisateur a déjà soumis des métadonnées d'une manière ou d'une autre, nous pouvons utiliser l'UUID pour mettre à jour cet enregistrement.

[Afficher la référence de l'API](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#contribute_update)

## Brancher

Si l'utilisateur souhaite ajouter une configuration de plug-in à utiliser avec les technologies de visualisation, nous utilisons l'UUID pour mettre à jour l'enregistrement afin d'inclure des éléments tels que la symbologie, la configuration graphique, etc.

[Afficher la référence de l'API](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#contribute_plugin)

## GeoNetwork

Si vous avez une instance de géoréseau, comme notre ancien système, vous pouvez utiliser le point de terminaison CSW pour capturer vos métadonnées et les transformer au format geoCore et dans le système geoCore. Il s'agit d'une voie de migration facile pour les organisations qui souhaitent adopter une solution cloud native.

[Afficher la référence de l'API](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#contribute_geonetwork)

# Authentification

L'authentification pour le système sera utilisée pour développer nos systèmes communautaires et de contribution pour [GEO.CA](https://geo.ca/). Il utilisera le système d'authentification du gouvernement du Canada, mais aura également la capacité de s'authentifier avec AWS Cognito, donnant à votre organisation la possibilité de personnaliser l'expérience de connexion si vous choisissez d'utiliser l'application geoCore.

# Fonctionnalités en vedette, fondamentales et thématiques

Alors que nous développions geoCore pour une utilisation avec [GEO.CA](https://geo.ca/), nous avions besoin d'un moyen de mettre en évidence certains enregistrements à afficher sur le site Web. Pour cela, nous avons créé plusieurs tables AWS DynamoDB pour garder une trace des enregistrements de métadonnées - au moyen de l'UUID - qui sont associés à une certaine propriété d'affichage.

## Mis en exergue

Est utilisé pour mettre en évidence certains enregistrements de métadonnées à afficher sur les pages thématiques de [GEO.CA](https://geo.ca/) telles que [Administration](https://geo.ca/administration/index.html) et [Urgence](https://geo.ca/emergency/index.html).

[Afficher la référence de l'API](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#featured_ref)

## Fondamental

Nous appelons l'information de base du Canada, c'est-à-dire les principales caractéristiques géospatiales telles que les routes, les voies ferrées et l'eau en tant que couches fondamentales. Celles-ci sont étiquetées à l'aide de la table DynamoDB pour être affichées sur une [page de destination] unique (https://geo.ca/foundation-data/index.html).

[Afficher la référence de l'API](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#foundational_ref)

## Thèmes

Nous utilisons une table dynamoDB pour catégoriser les enregistrements de métadonnées dans des thèmes qui ne sont pas pris en charge de manière native par la norme de métadonnées ISO 19115, tels que juridique et d'urgence. Pour une liste complète des correspondances thématiques ISO 19115 avec les thèmes trouvés sur [GEO.CA](https://geo.ca/), veuillez [cliquer ici](https://geo.ca/).

# Analytique

L'une des plus grandes préoccupations lors de la publication de quantités massives d'informations est la question de savoir si elles sont utilisées. Pour surveiller et rendre compte de cela, nous avons créé l'extension d'analyse qui permet le suivi de trois analyses principales :

  1. Recherche - Le système d'analyse enregistre les recherches effectuées sur le système. Cela nous permet d'obtenir des informations précieuses sur quoi et quand les gens recherchent des régions géographiques ou des mots clés spécifiques.
  2. Accès - Lorsqu'un utilisateur accède à un enregistrement, soit en affichant l'empreinte, soit en affichant l'enregistrement de métadonnées pour l'élément.
  3. Utilisation - Lorsqu'une utilisation ajoute un élément à une carte ou clique sur l'une des ressources, nous l'incluons dans nos analyses d'utilisation.

Pour [GEO.CA](https://geo.ca/), nous utilisons le total combiné des analyses d'accès et d'utilisation comme métrique nord-étoile de l'accès global au contenu géospatial ouvert. Cela nous permet de comprendre comment l'accès à l'information géospatiale du Canada se développe au fil du temps, et nous encourageons fortement l'utilisation de cette mesure pour votre organisation également.

[Afficher la référence de l'API](https://canadian-geospatial-platform.github.io/geocore/docs/api-documentation/#Analytics / Analytique)
