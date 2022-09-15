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

## Update

If a user has already submitted metadata in some way, we can use the UUID to update that record.

## Plugin

If the user would like to add plugin configuration for use with viewer technologies, we use the UUID to update the record to include things such as         symbology, graphing configuration, and others.etc.

<html>
<style type="text/css">
  body {
    font-family: Trebuchet MS, sans-serif;
    font-size: 15px;
    color: #444;
    margin-right: 24px;
  }

  h1	{
    font-size: 25px;
  }
  h2	{
    font-size: 20px;
  }
  h3	{
    font-size: 16px;
    font-weight: bold;
  }
  hr	{
    height: 1px;
    border: 0;
    color: #ddd;
    background-color: #ddd;
  }

  .app-desc {
    clear: both;
    margin-left: 20px;
  }
  .param-name {
    width: 100%;
  }
  .license-info {
    margin-left: 20px;
  }

  .license-url {
    margin-left: 20px;
  }

  .model {
    margin: 0 0 0px 20px;
  }

  .method {
    margin-left: 20px;
  }

  .method-notes	{
    margin: 10px 0 20px 0;
    font-size: 90%;
    color: #555;
  }

  pre {
    padding: 10px;
    margin-bottom: 2px;
  }

  .http-method {
   text-transform: uppercase;
  }

  pre.get {
    background-color: #0f6ab4;
  }

  pre.post {
    background-color: #10a54a;
  }

  pre.put {
    background-color: #c5862b;
  }

  pre.delete {
    background-color: #a41e22;
  }

  .huge	{
    color: #fff;
  }

  pre.example {
    background-color: #f3f3f3;
    padding: 10px;
    border: 1px solid #ddd;
  }

  code {
    white-space: pre;
  }

  .nickname {
    font-weight: bold;
  }

  .method-path {
    font-size: 1.5em;
    background-color: #0f6ab4;
  }

  .up {
    float:right;
  }

  .parameter {
    width: 500px;
  }

  .param {
    width: 500px;
    padding: 10px 0 0 20px;
    font-weight: bold;
  }

  .param-desc {
    width: 700px;
    padding: 0 0 0 20px;
    color: #777;
  }

  .param-type {
    font-style: italic;
  }

  .param-enum-header {
  width: 700px;
  padding: 0 0 0 60px;
  color: #777;
  font-weight: bold;
  }

  .param-enum {
  width: 700px;
  padding: 0 0 0 80px;
  color: #777;
  font-style: italic;
  }

  .field-label {
    padding: 0;
    margin: 0;
    clear: both;
  }

  .field-items	{
    padding: 0 0 15px 0;
    margin-bottom: 15px;
  }

  .return-type {
    clear: both;
    padding-bottom: 10px;
  }

  .param-header {
    font-weight: bold;
  }

  .method-tags {
    text-align: right;
  }

  .method-tag {
    background: none repeat scroll 0% 0% #24A600;
    border-radius: 3px;
    padding: 2px 10px;
    margin: 2px;
    color: #FFF;
    display: inline-block;
    text-decoration: none;
  }
</style>
</head>
<body>


<div class="method-summary">Contribute plugin configuration to the system / Contribuer à la configuration du plugin sur le système (<span class="nickname">contribute</span>)</div>
<div class="method-notes">Contribute plugin configuration for a specific UUID to the system. Requires API Key. / Contribuer à la configuration du plug-in pour un UUID spécifique au système. Nécessite une clé API</div>

<h3 class="field-label">Request headers</h3>
<div class="field-items">
</div>   

<h3 class="field-label">Query Parameter / Paramètre de requêtes</h3>
<div class="field-items">
  <div class="param">uuid (optional/optionnel)</div>

        <div class="param-desc"><span class="param-type">Query Parameter / Paramètre de requête</span> &mdash; The UUID of the metadata item where Plugin Configuration is being added / L&#x27;UUID de l&#x27;élément de métadonnées où la configuration du plug-in est ajoutée </div>      <div class="param">plugin_config (optional/optionnel)</div>

        <div class="param-desc"><span class="param-type">Query Parameter / Paramètre de requête</span> &mdash; The JSON Plugin Configuration for GeoView. This should include all languages required as per standard Plugin Configuration Schema. </div>    </div>   


<h3 class="field-label">Return Type / Type de retour</h3>
<div class="return-type">
  <a href="#plugin_config">plugin_config</a>

</div>

<!--Todo: process Response Object and its headers, schema, examples -->

<h3 class="field-label">Example Data / Exemple de données</h3>
<div class="example-data-content-type">Content-Type: application/json</div>
<pre class="example"><code>[ [ {
"uuid" : "21b821cf-0f1c-40ee-8925-eab12d357668"
}, {
"plugin_config" : "{ \"rangeSlider\": {\n      \"enable\": false,\n      \"open\": true,\n      \"controls\": [\n        \"lock\",\n        \"delay\"\n      ],\n      \"params\": {\n        \"type\": \"number\",\n        \"delay\": \"3000\",\n        \"rangeType\": \"dual\",\n        \"stepType\": \"dynamic\",\n        \"precision\": \"0\",\n        \"rangeInterval\": -1,\n        \"startRangeEnd\": false,\n        \"range\": {\n          \"min\": 0,\n          \"max\": 1\n        },\n        \"limit\": {\n          \"min\": 0,\n          \"max\": 1,\n          \"staticItems\": []\n        },\n        \"units\": \"\"\n      },\n      \"maximize\": true,\n      \"maximizeDesc\": true,\n      \"autorun\": false,\n      \"loop\": false,\n      \"reverse\": false,\n      \"lock\": false\n    },\n    \"coordInfo\": {\n      \"enable\": false\n    },\n    \"areasOfInterest\": {\n      \"enable\": false\n    },\n    \"chart\": {\n      \"enable\": true,\n      \"type\": \"line\",\n      \"title\": {\n        \"en\": \"Hi! - Airborne Radioactivity\",\n        \"fr\": \"Radioactivité de l'air\"\n      },\n      \"options\": {\n        \"colors\": \"\",\n        \"cutOut\": 0\n      },\n      \"axis\": {\n        \"xAxis\": {\n          \"title\": {\n            \"en\": \"Date\",\n            \"fr\": \"Date\"\n          },\n          \"type\": \"date\",\n          \"values\": \"\",\n          \"split\": \";\"\n        },\n        \"yAxis\": {\n          \"title\": {\n            \"en\": \"Concentration (mBq/m³)\",\n            \"fr\": \"Concentration (mBq/m³)\"\n          },\n          \"type\": \"linear\",\n          \"values\": \"\",\n          \"split\": \";\"\n        }\n      },\n      \"layers\": [\n        {\n          \"type\": \"link\",\n          \"details\": {\n            \"enabled\": false\n          },\n          \"id\": {\n            \"en\": \"Airborne Radioactivity***13d293f4\",\n            \"fr\": \"Radioactivité  de l'air***13d293f4\"\n          },\n          \"nameField\": {\n            \"en\": \"Location_Emplacement\",\n            \"fr\": \"Location_Emplacement\"\n          },\n          \"linkUrl\": {\n            \"en\": \"https://maps-cartes.services.geo.ca/server_serveur/rest/services/HC/airborne_radioactivity_chart_en/MapServer/3\",\n            \"fr\": \"https://maps-cartes.services.geo.ca/server_serveur/rest/services/HC/airborne_radioactivity_chart_fr/MapServer/3\"\n          },\n          \"linkField\": {\n            \"en\": \"Location_Emplacement\",\n            \"fr\": \"Location_Emplacement\"\n          },\n          \"data\": [\n            {\n              \"type\": \"combine\",\n              \"linkType\": \"multi\",\n              \"label\": {\n                \"type\": \"config\",\n                \"values\": {\n                  \"en\": \"Activity\",\n                  \"fr\": \"Activité\"\n                },\n                \"split\": \";\"\n              },\n              \"regex\": \"\\\\(|\\\\),\\\\(|\\\\)\",\n              \"split\": \",\",\n              \"prefix\": \"\",\n              \"suffix\": \"mBq/m³\",\n              \"link\": {\n                \"en\": \"Location_Emplacement\",\n                \"fr\": \"Location_Emplacement\"\n              },\n              \"date\": {\n                \"en\": \"CollectionStart_DebutPrelevement\",\n                \"fr\": \"CollectionStart_DebutPrelevement\"\n              },\n              \"measure\": {\n                \"en\": \"Activity_Activite_mBqm3\",\n                \"fr\": \"Activity_Activite_mBqm3\"\n              },\n              \"values\": {\n                \"en\": \"Radionuclide_Radionucleide\",\n                \"fr\": \"Radionuclide_Radionucleide\"\n              }\n            }\n          ]\n        }\n      ],\n      \"labelsPie\": {\n        \"type\": \"config\",\n        \"values\": \"\",\n        \"split\": \";\"\n      }\n    },\n    \"swiper\": {\n      \"enable\": false,\n      \"type\": \"vertical\",\n      \"keyboardOffset\": 10\n    },\n    \"draw\": {\n      \"enable\": false,\n      \"open\": true,\n      \"tools\": [\n        \"picker\",\n        \"point\",\n        \"polyline\",\n        \"polygon\",\n        \"edit\",\n        \"measure\",\n        \"extent\",\n        \"write\",\n        \"read\"\n      ]\n    },\n    \"thematicSlider\": {\n      \"enable\": false,\n      \"open\": true,\n      \"autorun\": false,\n      \"loop\": false,\n      \"description\": true,\n      \"slider\": true,\n      \"stack\": false,\n      \"legendStack\": true\n    }\n  }\n}"
} ], [ {
"uuid" : "21b821cf-0f1c-40ee-8925-eab12d357668"
}, {
"plugin_config" : "{ \"rangeSlider\": {\n      \"enable\": false,\n      \"open\": true,\n      \"controls\": [\n        \"lock\",\n        \"delay\"\n      ],\n      \"params\": {\n        \"type\": \"number\",\n        \"delay\": \"3000\",\n        \"rangeType\": \"dual\",\n        \"stepType\": \"dynamic\",\n        \"precision\": \"0\",\n        \"rangeInterval\": -1,\n        \"startRangeEnd\": false,\n        \"range\": {\n          \"min\": 0,\n          \"max\": 1\n        },\n        \"limit\": {\n          \"min\": 0,\n          \"max\": 1,\n          \"staticItems\": []\n        },\n        \"units\": \"\"\n      },\n      \"maximize\": true,\n      \"maximizeDesc\": true,\n      \"autorun\": false,\n      \"loop\": false,\n      \"reverse\": false,\n      \"lock\": false\n    },\n    \"coordInfo\": {\n      \"enable\": false\n    },\n    \"areasOfInterest\": {\n      \"enable\": false\n    },\n    \"chart\": {\n      \"enable\": true,\n      \"type\": \"line\",\n      \"title\": {\n        \"en\": \"Hi! - Airborne Radioactivity\",\n        \"fr\": \"Radioactivité de l'air\"\n      },\n      \"options\": {\n        \"colors\": \"\",\n        \"cutOut\": 0\n      },\n      \"axis\": {\n        \"xAxis\": {\n          \"title\": {\n            \"en\": \"Date\",\n            \"fr\": \"Date\"\n          },\n          \"type\": \"date\",\n          \"values\": \"\",\n          \"split\": \";\"\n        },\n        \"yAxis\": {\n          \"title\": {\n            \"en\": \"Concentration (mBq/m³)\",\n            \"fr\": \"Concentration (mBq/m³)\"\n          },\n          \"type\": \"linear\",\n          \"values\": \"\",\n          \"split\": \";\"\n        }\n      },\n      \"layers\": [\n        {\n          \"type\": \"link\",\n          \"details\": {\n            \"enabled\": false\n          },\n          \"id\": {\n            \"en\": \"Airborne Radioactivity***13d293f4\",\n            \"fr\": \"Radioactivité  de l'air***13d293f4\"\n          },\n          \"nameField\": {\n            \"en\": \"Location_Emplacement\",\n            \"fr\": \"Location_Emplacement\"\n          },\n          \"linkUrl\": {\n            \"en\": \"https://maps-cartes.services.geo.ca/server_serveur/rest/services/HC/airborne_radioactivity_chart_en/MapServer/3\",\n            \"fr\": \"https://maps-cartes.services.geo.ca/server_serveur/rest/services/HC/airborne_radioactivity_chart_fr/MapServer/3\"\n          },\n          \"linkField\": {\n            \"en\": \"Location_Emplacement\",\n            \"fr\": \"Location_Emplacement\"\n          },\n          \"data\": [\n            {\n              \"type\": \"combine\",\n              \"linkType\": \"multi\",\n              \"label\": {\n                \"type\": \"config\",\n                \"values\": {\n                  \"en\": \"Activity\",\n                  \"fr\": \"Activité\"\n                },\n                \"split\": \";\"\n              },\n              \"regex\": \"\\\\(|\\\\),\\\\(|\\\\)\",\n              \"split\": \",\",\n              \"prefix\": \"\",\n              \"suffix\": \"mBq/m³\",\n              \"link\": {\n                \"en\": \"Location_Emplacement\",\n                \"fr\": \"Location_Emplacement\"\n              },\n              \"date\": {\n                \"en\": \"CollectionStart_DebutPrelevement\",\n                \"fr\": \"CollectionStart_DebutPrelevement\"\n              },\n              \"measure\": {\n                \"en\": \"Activity_Activite_mBqm3\",\n                \"fr\": \"Activity_Activite_mBqm3\"\n              },\n              \"values\": {\n                \"en\": \"Radionuclide_Radionucleide\",\n                \"fr\": \"Radionuclide_Radionucleide\"\n              }\n            }\n          ]\n        }\n      ],\n      \"labelsPie\": {\n        \"type\": \"config\",\n        \"values\": \"\",\n        \"split\": \";\"\n      }\n    },\n    \"swiper\": {\n      \"enable\": false,\n      \"type\": \"vertical\",\n      \"keyboardOffset\": 10\n    },\n    \"draw\": {\n      \"enable\": false,\n      \"open\": true,\n      \"tools\": [\n        \"picker\",\n        \"point\",\n        \"polyline\",\n        \"polygon\",\n        \"edit\",\n        \"measure\",\n        \"extent\",\n        \"write\",\n        \"read\"\n      ]\n    },\n    \"thematicSlider\": {\n      \"enable\": false,\n      \"open\": true,\n      \"autorun\": false,\n      \"loop\": false,\n      \"description\": true,\n      \"slider\": true,\n      \"stack\": false,\n      \"legendStack\": true\n    }\n  }\n}"
} ] ]</code></pre>

<h3 class="field-label">Produces / Produit</h3>
This API call produces the following media types according to the <span class="header">Accept</span> request header;
the media type will be conveyed by the <span class="header">Content-Type</span> response header. / Cet appel d'API produit les types de média suivants selon l'en-tête de requête <span class="header">Accept</span> ; le type de média sera transmis par l'en-tête de réponse <span class="header">Content-Type</span>.
<ul>
  <li><code>application/json</code></li>
</ul>

<h3 class="field-label">Responses / Réponses</h3>
<h4 class="field-label">200</h4>
The plugin configuration associated with an UUID / La configuration du plugin associée à un UUID
    <a href="#plugin_config">plugin_config</a>
<h4 class="field-label">400</h4>
bad input parameters / mauvais paramètres d'entrée
    <a href="#"></a>
</div> <!-- method -->

</body>
</html>

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

---

# Contributions

Dans le processus de réplication des fonctionnalités actuelles disponibles avec geonetwork, nous avons commencé à créer une API de contribution pour permettre aux utilisateurs de contribuer des métadonnées au système. Ce flux de travail de contribution peut se produire de plusieurs manières :

## Nouvelles métadonnées

Il s'agit de nouvelles métadonnées provenant de l'utilisateur sans exigences d'accès de système à système.

## Mise à jour

Si un utilisateur a déjà soumis des métadonnées d'une manière ou d'une autre, nous pouvons utiliser l'UUID pour mettre à jour cet enregistrement.

## Brancher

Si l'utilisateur souhaite ajouter une configuration de plug-in à utiliser avec les technologies de visualisation, nous utilisons l'UUID pour mettre à jour l'enregistrement afin d'inclure des éléments tels que la symbologie, la configuration graphique, etc.

## GeoNetwork

Si vous avez une instance de géoréseau, comme notre ancien système, vous pouvez utiliser le point de terminaison CSW pour capturer vos métadonnées et les transformer au format geoCore et dans le système geoCore. Il s'agit d'une voie de migration facile pour les organisations qui souhaitent adopter une solution cloud native.

# Authentification

L'authentification pour le système sera utilisée pour développer nos systèmes communautaires et de contribution pour [GEO.CA](https://geo.ca/). Il utilisera le système d'authentification du gouvernement du Canada, mais aura également la capacité de s'authentifier avec AWS Cognito, donnant à votre organisation la possibilité de personnaliser l'expérience de connexion si vous choisissez d'utiliser l'application geoCore.

# Fonctionnalités en vedette, fondamentales et thématiques

Alors que nous développions geoCore pour une utilisation avec [GEO.CA](https://geo.ca/), nous avions besoin d'un moyen de mettre en évidence certains enregistrements à afficher sur le site Web. Pour cela, nous avons créé plusieurs tables AWS DynamoDB pour garder une trace des enregistrements de métadonnées - au moyen de l'UUID - qui sont associés à une certaine propriété d'affichage.

## Mis en exergue

Est utilisé pour mettre en évidence certains enregistrements de métadonnées à afficher sur les pages thématiques de [GEO.CA](https://geo.ca/) telles que [Administration](https://geo.ca/administration/index.html) et [Urgence](https://geo.ca/emergency/index.html).

## Fondamental

Nous appelons l'information de base du Canada, c'est-à-dire les principales caractéristiques géospatiales telles que les routes, les voies ferrées et l'eau en tant que couches fondamentales. Celles-ci sont étiquetées à l'aide de la table DynamoDB pour être affichées sur une [page de destination] unique (https://geo.ca/foundation-data/index.html).

## Thèmes

Nous utilisons une table dynamoDB pour catégoriser les enregistrements de métadonnées dans des thèmes qui ne sont pas pris en charge de manière native par la norme de métadonnées ISO 19115, tels que juridique et d'urgence. Pour une liste complète des correspondances thématiques ISO 19115 avec les thèmes trouvés sur [GEO.CA](https://geo.ca/), veuillez [cliquer ici](https://geo.ca/).

# Analytique

L'une des plus grandes préoccupations lors de la publication de quantités massives d'informations est la question de savoir si elles sont utilisées. Pour surveiller et rendre compte de cela, nous avons créé l'extension d'analyse qui permet le suivi de trois analyses principales :

  1. Recherche - Le système d'analyse enregistre les recherches effectuées sur le système. Cela nous permet d'obtenir des informations précieuses sur quoi et quand les gens recherchent des régions géographiques ou des mots clés spécifiques.
  2. Accès - Lorsqu'un utilisateur accède à un enregistrement, soit en affichant l'empreinte, soit en affichant l'enregistrement de métadonnées pour l'élément.
  3. Utilisation - Lorsqu'une utilisation ajoute un élément à une carte ou clique sur l'une des ressources, nous l'incluons dans nos analyses d'utilisation.

Pour [GEO.CA](https://geo.ca/), nous utilisons le total combiné des analyses d'accès et d'utilisation comme métrique nord-étoile de l'accès global au contenu géospatial ouvert. Cela nous permet de comprendre comment l'accès à l'information géospatiale du Canada se développe au fil du temps, et nous encourageons fortement l'utilisation de cette mesure pour votre organisation également.
