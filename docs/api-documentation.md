---
layout: default
title: geoCore API Documentation / Documentation de l'API géoCore
nav_order: 6
---

<html>
  <head>
    <title>geoCore API / API geoCore</title>
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
        background-color: #808080;
      }
      
      pre.post {
        background-color: #808080;
      }
      
      pre.put {
        background-color: #808080;
      }
      
      pre.delete {
        background-color: #808080;
      }
      
      .huge	{
      	color: #808080;
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
        background-color: #808080;
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
        background: none repeat scroll 0% 0% #808080;
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
  <h1>geoCore API / API geoCore</h1>
    <div class="app-desc">geoCore API / API geoCore</div>
    <div class="app-desc">More information: <a href="https://helloreverb.com">https://helloreverb.com</a></div>
    <div class="app-desc">Contact Info: <a href="christopher.melnick-macdonald@canada.ca">christopher.melnick-macdonald@canada.ca</a></div>
    <div class="app-desc">Version: 1.0.0</div>
    <div class="app-desc">BasePath:/</div>
    <div class="license-info">Apache 2.0</div>
    <div class="license-url">http://www.apache.org/licenses/LICENSE-2.0.html</div>
  <h2>Access</h2>

  <h2><a name="__Methods">Methods</a></h2>
  [ Jump to <a href="#__Models">Models</a> ]

  <h3>Table of Contents </h3>
  <div class="method-summary"></div>
  <h4><a href="#Analytics / Analytique">Analytics / Analytique</a></h4>
  <ul>
  <li><a href="#putAnalytics"><code><span class="http-method">post</span> /analytics</code></a></li>
  <li><a href="#viewAnalytics1"><code><span class="http-method">get</span> /analytics/1</code></a></li>
  <li><a href="#viewAnalytics10"><code><span class="http-method">get</span> /analytics/10</code></a></li>
  <li><a href="#viewAnalytics11"><code><span class="http-method">get</span> /analytics/11</code></a></li>
  <li><a href="#viewAnalytics2"><code><span class="http-method">get</span> /analytics/2</code></a></li>
  <li><a href="#viewAnalytics3"><code><span class="http-method">get</span> /analytics/3</code></a></li>
  <li><a href="#viewAnalytics4"><code><span class="http-method">get</span> /analytics/4</code></a></li>
  <li><a href="#viewAnalytics5"><code><span class="http-method">get</span> /analytics/5</code></a></li>
  <li><a href="#viewAnalytics6"><code><span class="http-method">get</span> /analytics/6</code></a></li>
  <li><a href="#viewAnalytics7"><code><span class="http-method">get</span> /analytics/7</code></a></li>
  <li><a href="#viewAnalytics8"><code><span class="http-method">get</span> /analytics/8</code></a></li>
  <li><a href="#viewAnalytics9"><code><span class="http-method">get</span> /analytics/9</code></a></li>
  </ul>
  <h4><a href="#Community / Communaut">Community / Communaut</a></h4>
  <ul>
  <li><a href="#communityAdd"><code><span class="http-method">post</span> /community/add</code></a></li>
  <li><a href="#communityAddAnnouncements"><code><span class="http-method">post</span> /community/announcements/add</code></a></li>
  <li><a href="#communityAddData"><code><span class="http-method">post</span> /community/data/add</code></a></li>
  <li><a href="#communityAddMember"><code><span class="http-method">post</span> /community/add_member</code></a></li>
  <li><a href="#communityAddResource"><code><span class="http-method">post</span> /community/resources/add</code></a></li>
  <li><a href="#communityDeleteAnnouncements"><code><span class="http-method">post</span> /community/announcements/delete</code></a></li>
  <li><a href="#communityDeleteData"><code><span class="http-method">post</span> /community/data/delete</code></a></li>
  <li><a href="#communityDeleteMember"><code><span class="http-method">post</span> /community/delete_member</code></a></li>
  <li><a href="#communityDeleteResource"><code><span class="http-method">post</span> /community/resource/delete</code></a></li>
  <li><a href="#communityEdit"><code><span class="http-method">post</span> /community/edit</code></a></li>
  <li><a href="#communityEditAnnouncements"><code><span class="http-method">post</span> /community/announcements/edit</code></a></li>
  <li><a href="#communityEditMember"><code><span class="http-method">post</span> /community/edit_member</code></a></li>
  <li><a href="#communityEditResource"><code><span class="http-method">post</span> /community/resources/edit</code></a></li>
  <li><a href="#communityGet"><code><span class="http-method">get</span> /community/get</code></a></li>
  <li><a href="#communityGetAnnouncements"><code><span class="http-method">get</span> /community/announcements/get</code></a></li>
  <li><a href="#communityGetData"><code><span class="http-method">get</span> /community/data/get</code></a></li>
  <li><a href="#communityGetMember"><code><span class="http-method">get</span> /community/get_member</code></a></li>
  <li><a href="#communityGetResources"><code><span class="http-method">get</span> /community/resources/get</code></a></li>
  <li><a href="#myCommunityGetAnnouncements"><code><span class="http-method">get</span> /community/my_community/announcements</code></a></li>
  <li><a href="#myCommunityGetData"><code><span class="http-method">get</span> /community/my_community/data</code></a></li>
  <li><a href="#myCommunityGetResources"><code><span class="http-method">get</span> /community/my_community/resources</code></a></li>
  </ul>
  <h4><a href="#Contribute / Contribuer">Contribute / Contribuer</a></h4>
  <ul>
  <li><a href="#contribute"><code><span class="http-method">post</span> /contribute/plugin</code></a></li>
  <li><a href="#geonetwork"><code><span class="http-method">post</span> /contribute/geonetwork</code></a></li>
  <li><a href="#new"><code><span class="http-method">post</span> /contribute/new</code></a></li>
  <li><a href="#update"><code><span class="http-method">post</span> /contribute/update</code></a></li>
  </ul>
  <h4><a href="#Save / Sauvegarder">Save / Sauvegarder</a></h4>
  <ul>
  <li><a href="#addSavedRecord"><code><span class="http-method">post</span> /saved_records/add</code></a></li>
  <li><a href="#addSavedSearch"><code><span class="http-method">post</span> /saved_search/add</code></a></li>
  <li><a href="#deleteSavedRecord"><code><span class="http-method">post</span> /saved_records/delete</code></a></li>
  <li><a href="#deleteSavedSearch"><code><span class="http-method">post</span> /saved_search/delete</code></a></li>
  <li><a href="#getSavedRecord"><code><span class="http-method">get</span> /saved_records/get</code></a></li>
  <li><a href="#getSavedSearch"><code><span class="http-method">get</span> /saved_search/get</code></a></li>
  </ul>
  <h4><a href="#Search / Recherche">Search / Recherche</a></h4>
  <ul>
  <li><a href="#featured"><code><span class="http-method">get</span> /featured</code></a></li>
  <li><a href="#foundational"><code><span class="http-method">get</span> /foundational</code></a></li>
  <li><a href="#geo"><code><span class="http-method">get</span> /geo</code></a></li>
  <li><a href="#id"><code><span class="http-method">get</span> /id</code></a></li>
  </ul>
  <h4><a href="#TranslateTraduire">Translate / Traduire</a></h4>
  <ul>
  <li><a href="#translate"><code><span class="http-method">get</span> /translate</code></a></li>
  </ul>

  <h1><a name="Analytics / Analytique">Analytics / Analytique</a></h1>
  <div class="method"><a name="putAnalytics"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /analytics</code></pre></div>
    <div class="method-summary">Post analytics event to system / Enregistrer l'événement analytique dans le système (<span class="nickname">putAnalytics</span>)</div>
    <div class="method-notes">Adds an Analytical event to the system / Ajoute un événement analytique au système      Requires API Key / Nécessite une clé API</div>


    <h3 class="field-label">Consumes</h3>
    This API call consumes the following media types via the <span class="header">Content-Type</span> request header:
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Request body</h3>
    <div class="field-items">
      <div class="param">body <a href="#putanalytics_inner">putanalytics_inner</a> (optional)</div>
      
            <div class="param-desc"><span class="param-type">Body Parameter</span> &mdash; Post analytics event </div>
                </div>  <!-- field-items -->

    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">search (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record search term used / Enregistrement du terme de recherche utilisé </div>      <div class="param">theme (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record theme filter used / Enregistrer le filtre thématique utilisé </div>      <div class="param">filter (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record type filter used / Filtre de type d&#x27;enregistrement utilisé </div>      <div class="param">geo (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record geospatial bounding box used for search / Enregistrer la zone de délimitation géospatiale utilisée pour la recherche </div>      <div class="param">uuid (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record the UUID of accessed resource data / Enregistrer l&#x27;UUID des données accédées </div>      <div class="param">resource (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record the resouce of accessed data / Enregistrer la ressource des données consultées </div>      <div class="param">resource_type (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record the resource type of accessed data / Enregistrer le type de ressource des données consultées </div>      <div class="param">loc (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record location of analytics event / Enregistrer l&#x27;emplacement de l&#x27;événement analytique </div>      <div class="param">lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record language of event / Enregistrer la langue de l&#x27;événement </div>      <div class="param">type (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record type of analytics / Enregistrer le type d&#x27;analyse </div>      <div class="param">org (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record organisation of accessed data / Organisation de l&#x27;enregistrement des données consultées </div>      <div class="param">foundational (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record if dataset is foundational / Enregistrer si l&#x27;ensemble de données est fondamental </div>      <div class="param">type_filter (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record if type filter was used / Enregistrer si le filtre de type a été utilisé </div>    </div>  <!-- field-items -->



    <!--Todo: process Response Object and its headers, schema, examples -->



    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">201</h4>
    item created
        <a href="#"></a>
    <h4 class="field-label">400</h4>
    invalid input, object invalid
        <a href="#"></a>
    <h4 class="field-label">409</h4>
    an existing item already exists
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="viewAnalytics1"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /analytics/1</code></pre></div>
    <div class="method-summary">Top 10 Searches last month / Les 10 principales recherches du mois dernier (<span class="nickname">viewAnalytics1</span>)</div>
    <div class="method-notes">What are the top 10 searches in the last month? No parameters are required / Quelles sont les 10 principales recherches effectuées au cours du dernier mois ? Aucun paramètre n'est requis</div>







    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#getanalytics1">getanalytics1</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "Items" : [ {
    "search" : "Caribou",
    "count" : 45
  }, {
    "search" : "Salmon",
    "count" : 28
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Analytics results for the Top 10 Search Results in the last month / Résultats d&#x27;analyse pour les 10 premiers résultats de recherche du mois dernier
        <a href="#getanalytics1">getanalytics1</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="viewAnalytics10"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /analytics/10</code></pre></div>
    <div class="method-summary">Item Accessed last 30 days and all time / Article consulté au cours des 30 derniers jours et tout le temps (<span class="nickname">viewAnalytics10</span>)</div>
    <div class="method-notes">How many times has this record been accessed in the last month and all time? / Combien de fois cet enregistrement a-t-il été consulté au cours du dernier mois et en tout temps ?</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Language of result / Langue du résultat </div>      <div class="param">uuid (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; UUID of the record / UUID de l&#x27;enregistrement </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#getanalytics10">getanalytics10</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "Items" : [ {
    "30" : 4,
    "all" : 14
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Analytics results for record accessed last 30 days and all time / Résultats analytiques pour les enregistrements consultés au cours des 30 derniers jours et tout au long de l&#x27;année.
        <a href="#getanalytics10">getanalytics10</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="viewAnalytics11"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /analytics/11</code></pre></div>
    <div class="method-summary">Count of total number of datasets and organization / Compte du nombre total d'ensembles de données et d'organisation (<span class="nickname">viewAnalytics11</span>)</div>
    <div class="method-notes">Number of Datasets and Contributors in total, or in a theme. / Nombre d'ensembles de données et de contributeurs au total, ou dans un thème.</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">theme (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Theme of data / Thème de la data </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#getanalytics11">getanalytics11</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "Items" : [ {
    "total" : 6254,
    "organizations" : 35
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Number of Datasets and Contributors in total, or in a theme. / Nombre d&#x27;ensembles de données et de contributeurs au total, ou dans un thème.
        <a href="#getanalytics11">getanalytics11</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="viewAnalytics2"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /analytics/2</code></pre></div>
    <div class="method-summary">Number of Searches last month / Nombre de recherches effectuées le mois dernier (<span class="nickname">viewAnalytics2</span>)</div>
    <div class="method-notes">How many searches have been conducted in the last month? No parameters are required / Combien de recherches ont été effectuées au cours du dernier mois ? Aucun paramètre n'est requis</div>







    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#getanalytics2">getanalytics2</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "Items" : [ {
    "searches" : 2341
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Analytics results for the number of searches in the last month / Résultats d&#x27;analyse du nombre de recherches effectuées au cours du dernier mois
        <a href="#getanalytics2">getanalytics2</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="viewAnalytics3"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /analytics/3</code></pre></div>
    <div class="method-summary">Number of Accesses last month / Nombre d'accès le mois dernier (<span class="nickname">viewAnalytics3</span>)</div>
    <div class="method-notes">How many times did geospatial content get accessed in the last month? No parameters are required / Combien de fois le contenu géospatial a-t-il été consulté au cours du dernier mois ? Aucun paramètre n'est requis</div>







    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#getanalytics3">getanalytics3</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "Items" : [ {
    "accesses" : 1488
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Analytics results for the number of accesses in the last month / Résultats de l&#x27;analyse du nombre d&#x27;accès au cours du dernier mois
        <a href="#getanalytics3">getanalytics3</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="viewAnalytics4"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /analytics/4</code></pre></div>
    <div class="method-summary">Top 10 Accessed last month / Top 10 des accès du mois dernier (<span class="nickname">viewAnalytics4</span>)</div>
    <div class="method-notes">What is the top 10 accessed / used content in the last month? No parameters are required / Quels sont les 10 contenus les plus consultés / utilisés au cours du dernier mois ? Aucun paramètre n'est requis</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Language of result / Langue du résultat </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#getanalytics4">getanalytics4</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "Items" : [ {
    "accesses" : 14,
    "id" : "004de02c-19f1-4da0-9af8-33f893e41972",
    "title" : "Indices of disadvantaged",
    "coordinates" : [ [ [ -79.6, 45 ], [ -57, 45 ], [ -57, 62.6 ], [ -79.6, 62.6 ], [ -79.6, 45 ] ] ],
    "description" : "The Ministry of Education (MEQ) calculates two indices of disadvantage annually for the 69 language school boards.",
    "publication_date" : "undefined",
    "keywords" : "Low income, IMSE, SFR, Settlement unit, Government information",
    "topicCategory" : "geoscientificInformation",
    "organisation" : "Government and Municipalities of Quebec"
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Analytics results for the Top 10 accessed or used in the last month  / Résultats d&#x27;analyse pour le Top 10 des accès ou utilisations du mois dernier
        <a href="#getanalytics4">getanalytics4</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="viewAnalytics5"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /analytics/5</code></pre></div>
    <div class="method-summary">Top 10 Accessed all time / Les 10 meilleurs accès de tous les temps (<span class="nickname">viewAnalytics5</span>)</div>
    <div class="method-notes">What is the top 10 accessed / used content of all time? No parameters are required / Quel est le top 10 des contenus les plus consultés/utilisés de tous les temps ? Aucun paramètre n'est requis</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Language of result / Langue du résultat </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#getanalytics5">getanalytics5</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "Items" : [ {
    "accesses" : 14,
    "id" : "004de02c-19f1-4da0-9af8-33f893e41972",
    "title" : "Indices of disadvantaged",
    "coordinates" : [ [ [ -79.6, 45 ], [ -57, 45 ], [ -57, 62.6 ], [ -79.6, 62.6 ], [ -79.6, 45 ] ] ],
    "description" : "The Ministry of Education (MEQ) calculates two indices of disadvantage annually for the 69 language school boards.",
    "publication_date" : "undefined",
    "keywords" : "Low income, IMSE, SFR, Settlement unit, Government information",
    "topicCategory" : "geoscientificInformation",
    "organisation" : "Government and Municipalities of Quebec"
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Analytics results for the Top 10 accessed or used all time / Résultats d&#x27;analyse pour le Top 10 des accès ou utilisations les plus fréquents
        <a href="#getanalytics5">getanalytics5</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="viewAnalytics6"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /analytics/6</code></pre></div>
    <div class="method-summary">Number of Searches previous month / Nombre de recherches le mois précédent (<span class="nickname">viewAnalytics6</span>)</div>
    <div class="method-notes">How many searches have been conducted in the previous month? No parameters are required / Combien de recherches ont été effectuées au cours du mois précédent ? Aucun paramètre n'est requis</div>







    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#getanalytics6">getanalytics6</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "Items" : [ {
    "searches" : 1488
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Analytics results for the number of searches previous month / Résultats d&#x27;analyse pour le nombre de recherches du mois précédent
        <a href="#getanalytics6">getanalytics6</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="viewAnalytics7"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /analytics/7</code></pre></div>
    <div class="method-summary">Number of Accesses previous month / Nombre d'accès au mois précédent (<span class="nickname">viewAnalytics7</span>)</div>
    <div class="method-notes">How many times did geospatial content get accessed in the previous month? No parameters are required / Combien de fois le contenu géospatial a-t-il été consulté au cours du mois précédent ? Aucun paramètre n'est requis</div>







    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#getanalytics7">getanalytics7</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "Items" : [ {
    "accesses" : 148
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Analytics results for the number of accesses previous month / Résultats d&#x27;analyse du nombre d&#x27;accès au mois précédent
        <a href="#getanalytics7">getanalytics7</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="viewAnalytics8"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /analytics/8</code></pre></div>
    <div class="method-summary">Top 10 Accessed in theme all time / Les 10 meilleurs accès au thème de tous les temps (<span class="nickname">viewAnalytics8</span>)</div>
    <div class="method-notes">What is the top 10 accessed / used content in theme? / Quel est le contenu le plus consulté / utilisé dans le thème ?</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Language of result / Langue du résultat </div>      <div class="param">theme (required)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Theme of data / Thème de la data </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#getanalytics8">getanalytics8</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "Items" : [ {
    "accesses" : 14,
    "id" : "004de02c-19f1-4da0-9af8-33f893e41972",
    "title" : "Indices of disadvantaged",
    "coordinates" : [ [ [ -79.6, 45 ], [ -57, 45 ], [ -57, 62.6 ], [ -79.6, 62.6 ], [ -79.6, 45 ] ] ],
    "description" : "The Ministry of Education (MEQ) calculates two indices of disadvantage annually for the 69 language school boards.",
    "publication_date" : "undefined",
    "keywords" : "Low income, IMSE, SFR, Settlement unit, Government information",
    "topicCategory" : "geoscientificInformation",
    "organisation" : "Government and Municipalities of Quebec"
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Analytics results for the Top 10 accessed or used in theme / Résultats d&#x27;analyse pour le Top 10 des accès ou utilisations dans le thème
        <a href="#getanalytics8">getanalytics8</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="viewAnalytics9"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /analytics/9</code></pre></div>
    <div class="method-summary">Top 10 Accessed by contributor all time / Top 10 des accès par contributeur de tous les temps (<span class="nickname">viewAnalytics9</span>)</div>
    <div class="method-notes">What is the top 10 accessed / used content by contributor? / Quels sont les 10 contenus les plus consultés/utilisés par les contributeurs ?</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Language of result / Langue du résultat </div>      <div class="param">org (required)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Organizational owner of data / Propriétaire organisationnel des données </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#getanalytics9">getanalytics9</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>[ {
  "Items" : [ {
    "accesses" : 14,
    "id" : "004de02c-19f1-4da0-9af8-33f893e41972",
    "title" : "Indices of disadvantaged",
    "coordinates" : [ [ [ -79.6, 45 ], [ -57, 45 ], [ -57, 62.6 ], [ -79.6, 62.6 ], [ -79.6, 45 ] ] ],
    "description" : "The Ministry of Education (MEQ) calculates two indices of disadvantage annually for the 69 language school boards.",
    "publication_date" : "undefined",
    "keywords" : "Low income, IMSE, SFR, Settlement unit, Government information",
    "topicCategory" : "geoscientificInformation",
    "organisation" : "Government and Municipalities of Quebec"
  } ]
}, {
  "Items" : [ {
    "accesses" : 14,
    "id" : "004de02c-19f1-4da0-9af8-33f893e41972",
    "title" : "Indices of disadvantaged",
    "coordinates" : [ [ [ -79.6, 45 ], [ -57, 45 ], [ -57, 62.6 ], [ -79.6, 62.6 ], [ -79.6, 45 ] ] ],
    "description" : "The Ministry of Education (MEQ) calculates two indices of disadvantage annually for the 69 language school boards.",
    "publication_date" : "undefined",
    "keywords" : "Low income, IMSE, SFR, Settlement unit, Government information",
    "topicCategory" : "geoscientificInformation",
    "organisation" : "Government and Municipalities of Quebec"
  } ]
} ]</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Analytics results for the Top 10 accessed or used by contributor / Résultats d&#x27;analyse pour le Top 10 des accès ou utilisations par contributeur
        <a href="#getanalytics9">getanalytics9</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <h1><a name="Community / Communaut">Community / Communaut</a></h1>
  <div class="method"><a name="communityAdd"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/add</code></pre></div>
    <div class="method-summary">Add community information / Ajouter des informations sur la communauté (<span class="nickname">communityAdd</span>)</div>
    <div class="method-notes">Add community information to the system. Requires API key. / Ajoutez des informations sur la communauté au système. Nécessite une clé API.</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">name (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The name of the community / Le nom de la communauté </div>      <div class="param">description (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The description of the community. / La description de la communauté. </div>      <div class="param">keywords (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Community keywords and topics that will help members find communities of interest to them. / Mots-clés et sujets de la communauté qui aideront les membres à trouver les communautés qui les intéressent. </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_add">community_add</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "keywords" : [ {
    "en" : "History, Imagery, Historical, Historical Research, Research, Change",
    "fr" : "Histoire, Imagerie, Historique, Recherche historique, Recherche, Changement"
  }, {
    "en" : "History, Imagery, Historical, Historical Research, Research, Change",
    "fr" : "Histoire, Imagerie, Historique, Recherche historique, Recherche, Changement"
  } ],
  "name" : [ {
    "en" : "Historical Imagery",
    "fr" : "Imagerie historique"
  }, {
    "en" : "Historical Imagery",
    "fr" : "Imagerie historique"
  } ],
  "description" : [ {
    "en" : "A community for those who are interested in the historical imagery of Canada",
    "fr" : "Une communauté pour ceux qui s'intéressent à l'imagerie historique du Canada"
  }, {
    "en" : "A community for those who are interested in the historical imagery of Canada",
    "fr" : "Une communauté pour ceux qui s'intéressent à l'imagerie historique du Canada"
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Add a community to the system / Ajouter une communauté au système
        <a href="#community_add">community_add</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityAddAnnouncements"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/announcements/add</code></pre></div>
    <div class="method-summary">Add announcement to community / Ajouter une annonce à la communauté (<span class="nickname">communityAddAnnouncements</span>)</div>
    <div class="method-notes">Add announcement to community / Ajouter une annonce à la communauté</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">communityId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; community Id of the community the announcement is being added to. / ID de communauté de la communauté à laquelle l&#x27;annonce est ajoutée. </div>      <div class="param">announcement (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Announcement that is being added to the community / Annonce ajoutée à la communauté </div>      <div class="param">userId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; userId who is making the announcement / userId qui fait l&#x27;annonce </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_announcement_add">community_announcement_add</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "communityId" : "communityId",
  "userId" : "userId",
  "announcement" : [ {
    "en" : "New Data added!",
    "fr" : "Nouvelles données ajoutées!"
  }, {
    "en" : "New Data added!",
    "fr" : "Nouvelles données ajoutées!"
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Add an announcement to a community in the system / Ajouter une annonce à une communauté dans le système
        <a href="#community_announcement_add">community_announcement_add</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityAddData"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/data/add</code></pre></div>
    <div class="method-summary">Add data to community / Ajouter des données à la communauté (<span class="nickname">communityAddData</span>)</div>
    <div class="method-notes">Add data to community / Ajouter des données à la communauté</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">communityId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; community Id of the community the data is being added to. / ID de communauté de la communauté à laquelle les données sont ajoutées. </div>      <div class="param">uuid (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; uuid of the data that is being added to the system / uuid des données ajoutées au système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_data_add">community_data_add</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "communityId" : "communityId",
  "uuid" : "uuid"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Add data to community / Ajouter des données à la communauté
        <a href="#community_data_add">community_data_add</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityAddMember"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/add_member</code></pre></div>
    <div class="method-summary">Add member to community / Ajouter un membre à la communauté (<span class="nickname">communityAddMember</span>)</div>
    <div class="method-notes">Add member's userId to community role table in the system. Requires API key. / Ajoutez l'ID utilisateur du membre à la table des rôles de la communauté dans le système. Nécessite une clé API.</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">userId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Id of the user to be added in the system / Identifiant de l&#x27;utilisateur à ajouter dans le système </div>      <div class="param">role (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Role of the user to be added in the system / Rôle de l&#x27;utilisateur à ajouter dans le système </div>      <div class="param">communityId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; CommunityId of the community that the user is being added to / CommunityId de la communauté à laquelle l&#x27;utilisateur est ajouté </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_add_member">community_add_member</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "role" : "role",
  "communityId" : "communityId",
  "userId" : "userId"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Add a member to a community in the system / Ajouter un membre à une communauté dans le système
        <a href="#community_add_member">community_add_member</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityAddResource"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/resources/add</code></pre></div>
    <div class="method-summary">Add resource to community / Ajouter une ressource à la communauté (<span class="nickname">communityAddResource</span>)</div>
    <div class="method-notes">Add external resource to the community. Requires API key. / Ajouter une ressource externe à la communauté. Nécessite une clé API.</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">communityId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; community Id of the community the resource is being added to. / ID de communauté de la communauté à laquelle la ressource est ajoutée. </div>      <div class="param">resource_link (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Link to the resource that is being added / Lien vers la ressource qui est ajoutée </div>      <div class="param">resource_name (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Name of the resource that is being added / Nom de la ressource qui est ajoutée </div>      <div class="param">resource_description (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; description of the resource that is being added / description de la ressource ajoutée </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_resource_add">community_resource_add</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "resource_link" : [ {
    "en" : "https://www.nrcan.gc.ca/science-and-data/science-and-research/earth-sciences/geography/topographic-information/geobase-surface-water-program-geeau/20969",
    "fr" : "https://www.rncan.gc.ca/science-et-donnees/science-et-recherche/sciences-terre/geographie/information-topographique/programme-geobase-eaux-surface-geeau/20970?_gl=1*t4mr4t*_ga*Mjc4MzY2MDMuMTY3MzUzMjU4OA..*_ga_C2N57Y7DX5*MTY3NDA5NTY3OS4xLjAuMTY3NDA5NTY3OS4wLjAuMA.."
  }, {
    "en" : "https://www.nrcan.gc.ca/science-and-data/science-and-research/earth-sciences/geography/topographic-information/geobase-surface-water-program-geeau/20969",
    "fr" : "https://www.rncan.gc.ca/science-et-donnees/science-et-recherche/sciences-terre/geographie/information-topographique/programme-geobase-eaux-surface-geeau/20970?_gl=1*t4mr4t*_ga*Mjc4MzY2MDMuMTY3MzUzMjU4OA..*_ga_C2N57Y7DX5*MTY3NDA5NTY3OS4xLjAuMTY3NDA5NTY3OS4wLjAuMA.."
  } ],
  "resource_description" : [ {
    "en" : "With 20% of the world's total freshwater resources, Canada has a responsibility to do it right. That is why the GeoBase Surface Water Program (GeEAU) of Natural Resources Canada (NRCan) is deploying its resources to provide data, services and expertise to address water issues.",
    "fr" : "Comme il abrite 20% des ressources mondiales en eau douce, le Canada a le devoir de bien faire les choses. C’est pourquoi le Programme GéoBase des eaux de surface (GéEAU) de Ressources naturelles Canada (RNCan) déploie ses ressources pour fournir des données, des services et son expertise au service des enjeux liés à l’eau."
  }, {
    "en" : "With 20% of the world's total freshwater resources, Canada has a responsibility to do it right. That is why the GeoBase Surface Water Program (GeEAU) of Natural Resources Canada (NRCan) is deploying its resources to provide data, services and expertise to address water issues.",
    "fr" : "Comme il abrite 20% des ressources mondiales en eau douce, le Canada a le devoir de bien faire les choses. C’est pourquoi le Programme GéoBase des eaux de surface (GéEAU) de Ressources naturelles Canada (RNCan) déploie ses ressources pour fournir des données, des services et son expertise au service des enjeux liés à l’eau."
  } ],
  "communityId" : "12345",
  "resource_name" : [ {
    "en" : "GeoBase Surface Water Program (GeEAU)",
    "fr" : "Programme GéoBase des eaux de surface (GéEAU)"
  }, {
    "en" : "GeoBase Surface Water Program (GeEAU)",
    "fr" : "Programme GéoBase des eaux de surface (GéEAU)"
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Add a resource to a community in the system / Ajouter une ressource à une communauté dans le système
        <a href="#community_resource_add">community_resource_add</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityDeleteAnnouncements"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/announcements/delete</code></pre></div>
    <div class="method-summary">Delete announcement from community / Supprimer l'annonce de la communauté (<span class="nickname">communityDeleteAnnouncements</span>)</div>
    <div class="method-notes">Delete announcement from community / Supprimer l'annonce de la communauté</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">key (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Key of the announcement in the community / Clé de l&#x27;annonce dans la communauté </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_delete_announcement">community_delete_announcement</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "key" : "key"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Delete announcement / Supprimer l&#x27;annonce
        <a href="#community_delete_announcement">community_delete_announcement</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityDeleteData"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/data/delete</code></pre></div>
    <div class="method-summary">Delete data from community / Supprimer les données de la communauté (<span class="nickname">communityDeleteData</span>)</div>
    <div class="method-notes">Delete data from community / Supprimer les données de la communauté</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">key (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Key of the data in the community / Clé des données dans la communauté </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_delete_data">community_delete_data</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "key" : "key"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Delete data from community / Supprimer les données de la communauté
        <a href="#community_delete_data">community_delete_data</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityDeleteMember"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/delete_member</code></pre></div>
    <div class="method-summary">Delete member from community / Supprimer un membre de la communauté (<span class="nickname">communityDeleteMember</span>)</div>
    <div class="method-notes">Delete member from community / Supprimer un membre de la communauté</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">key (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Key of the member in the community role table / Clé du membre dans la table des rôles de la communauté </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_delete_member">community_delete_member</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "key" : "key"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Delete community member / Supprimer un membre de la communauté
        <a href="#community_delete_member">community_delete_member</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityDeleteResource"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/resource/delete</code></pre></div>
    <div class="method-summary">Delete resource from community / Supprimer la ressource de la communauté (<span class="nickname">communityDeleteResource</span>)</div>
    <div class="method-notes">Delete resource from community / Supprimer la ressource de la communauté</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">key (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Key of the resource in the community / Clé de la ressource dans la communauté </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_delete_resource">community_delete_resource</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "key" : "key"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Delete Resource / Supprimer la ressource
        <a href="#community_delete_resource">community_delete_resource</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityEdit"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/edit</code></pre></div>
    <div class="method-summary">Edit community information / Modifier les informations de la communauté (<span class="nickname">communityEdit</span>)</div>
    <div class="method-notes">Edit community information in the system. Requires API key. / Modifier les informations de la communauté dans le système. Nécessite une clé API.</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">name (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The name of the community / Le nom de la communauté </div>      <div class="param">description (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The description of the community. / La description de la communauté. </div>      <div class="param">keywords (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Community keywords and topics that will help members find communities of interest to them. / Mots-clés et sujets de la communauté qui aideront les membres à trouver les communautés qui les intéressent. </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_edit">community_edit</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "keywords" : [ {
    "en" : "History, Imagery, Historical, Historical Research, Research, Change",
    "fr" : "Histoire, Imagerie, Historique, Recherche historique, Recherche, Changement"
  }, {
    "en" : "History, Imagery, Historical, Historical Research, Research, Change",
    "fr" : "Histoire, Imagerie, Historique, Recherche historique, Recherche, Changement"
  } ],
  "name" : [ {
    "en" : "Historical Imagery",
    "fr" : "Imagerie historique"
  }, {
    "en" : "Historical Imagery",
    "fr" : "Imagerie historique"
  } ],
  "description" : [ {
    "en" : "A community for those who are interested in the historical imagery of Canada",
    "fr" : "Une communauté pour ceux qui s'intéressent à l'imagerie historique du Canada"
  }, {
    "en" : "A community for those who are interested in the historical imagery of Canada",
    "fr" : "Une communauté pour ceux qui s'intéressent à l'imagerie historique du Canada"
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Edit a community in the system / Modifier une communauté dans le système
        <a href="#community_edit">community_edit</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityEditAnnouncements"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/announcements/edit</code></pre></div>
    <div class="method-summary">Edit announcement in community / Modifier l'annonce dans la communauté (<span class="nickname">communityEditAnnouncements</span>)</div>
    <div class="method-notes">Edit announcement in community / Modifier l'annonce dans la communauté</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">key (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; key of the announcement that is being edited / clé de l&#x27;annonce en cours d&#x27;édition </div>      <div class="param">announcement (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Announcement that is being added to the community / Annonce ajoutée à la communauté </div>      <div class="param">userId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; userId who is making the announcement / userId qui fait l&#x27;annonce </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_announcement_edit">community_announcement_edit</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "userId" : "userId",
  "key" : "key",
  "announcement" : [ {
    "en" : "New Data added!",
    "fr" : "Nouvelles données ajoutées!"
  }, {
    "en" : "New Data added!",
    "fr" : "Nouvelles données ajoutées!"
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Edit a community announcement / Modifier une annonce communautaire
        <a href="#community_announcement_edit">community_announcement_edit</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityEditMember"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/edit_member</code></pre></div>
    <div class="method-summary">Add member to community / Ajouter un membre à la communauté (<span class="nickname">communityEditMember</span>)</div>
    <div class="method-notes">Edit member's role in the community role table in the system. Requires API key. / Modifiez le rôle du membre dans le tableau des rôles de la communauté dans le système. Nécessite une clé API.</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">key (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; uuid of the user in the community roles table / uuid de l&#x27;utilisateur dans la table des rôles de la communauté </div>      <div class="param">role (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Role of the user to be edited in the system / Rôle de l&#x27;utilisateur à modifier dans le système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_edit_member">community_edit_member</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "role" : "role",
  "key" : "key"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Edit member role in the community / Modifier le rôle de membre dans la communauté
        <a href="#community_edit_member">community_edit_member</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityEditResource"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /community/resources/edit</code></pre></div>
    <div class="method-summary">Edit resource in community / Modifier la ressource dans la communauté (<span class="nickname">communityEditResource</span>)</div>
    <div class="method-notes">Edit external resource in the community. Requires API key. / Modifier la ressource externe dans la communauté. Nécessite une clé API.</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">key (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; key of the resource that is being edited / clé de la ressource en cours d&#x27;édition </div>      <div class="param">resource_link (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Link to the resource that is being edited / Lien vers la ressource en cours de modification </div>      <div class="param">resource_name (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Name of the resource that is being edited / Nom de la ressource en cours de modification </div>      <div class="param">resource_description (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; description of the resource that is being edited / description de la ressource en cours d&#x27;édition </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_resource_edit">community_resource_edit</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "resource_link" : [ {
    "en" : "https://www.nrcan.gc.ca/science-and-data/science-and-research/earth-sciences/geography/topographic-information/geobase-surface-water-program-geeau/20969",
    "fr" : "https://www.rncan.gc.ca/science-et-donnees/science-et-recherche/sciences-terre/geographie/information-topographique/programme-geobase-eaux-surface-geeau/20970?_gl=1*t4mr4t*_ga*Mjc4MzY2MDMuMTY3MzUzMjU4OA..*_ga_C2N57Y7DX5*MTY3NDA5NTY3OS4xLjAuMTY3NDA5NTY3OS4wLjAuMA.."
  }, {
    "en" : "https://www.nrcan.gc.ca/science-and-data/science-and-research/earth-sciences/geography/topographic-information/geobase-surface-water-program-geeau/20969",
    "fr" : "https://www.rncan.gc.ca/science-et-donnees/science-et-recherche/sciences-terre/geographie/information-topographique/programme-geobase-eaux-surface-geeau/20970?_gl=1*t4mr4t*_ga*Mjc4MzY2MDMuMTY3MzUzMjU4OA..*_ga_C2N57Y7DX5*MTY3NDA5NTY3OS4xLjAuMTY3NDA5NTY3OS4wLjAuMA.."
  } ],
  "resource_description" : [ {
    "en" : "With 20% of the world's total freshwater resources, Canada has a responsibility to do it right. That is why the GeoBase Surface Water Program (GeEAU) of Natural Resources Canada (NRCan) is deploying its resources to provide data, services and expertise to address water issues.",
    "fr" : "Comme il abrite 20% des ressources mondiales en eau douce, le Canada a le devoir de bien faire les choses. C’est pourquoi le Programme GéoBase des eaux de surface (GéEAU) de Ressources naturelles Canada (RNCan) déploie ses ressources pour fournir des données, des services et son expertise au service des enjeux liés à l’eau."
  }, {
    "en" : "With 20% of the world's total freshwater resources, Canada has a responsibility to do it right. That is why the GeoBase Surface Water Program (GeEAU) of Natural Resources Canada (NRCan) is deploying its resources to provide data, services and expertise to address water issues.",
    "fr" : "Comme il abrite 20% des ressources mondiales en eau douce, le Canada a le devoir de bien faire les choses. C’est pourquoi le Programme GéoBase des eaux de surface (GéEAU) de Ressources naturelles Canada (RNCan) déploie ses ressources pour fournir des données, des services et son expertise au service des enjeux liés à l’eau."
  } ],
  "resource_name" : [ {
    "en" : "GeoBase Surface Water Program (GeEAU)",
    "fr" : "Programme GéoBase des eaux de surface (GéEAU)"
  }, {
    "en" : "GeoBase Surface Water Program (GeEAU)",
    "fr" : "Programme GéoBase des eaux de surface (GéEAU)"
  } ],
  "key" : "key"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Edit a community resource / Modifier une ressource communautaire
        <a href="#community_resource_edit">community_resource_edit</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityGet"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /community/get</code></pre></div>
    <div class="method-summary">Get community information / Obtenir des informations sur la communauté (<span class="nickname">communityGet</span>)</div>
    <div class="method-notes">Get community information from the system. Requires API key. / Obtenez des informations sur la communauté à partir du système. Nécessite une clé API.</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">communityId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Id of the Community used in the system / Identifiant de la communauté utilisé dans le système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_add">community_add</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "keywords" : [ {
    "en" : "History, Imagery, Historical, Historical Research, Research, Change",
    "fr" : "Histoire, Imagerie, Historique, Recherche historique, Recherche, Changement"
  }, {
    "en" : "History, Imagery, Historical, Historical Research, Research, Change",
    "fr" : "Histoire, Imagerie, Historique, Recherche historique, Recherche, Changement"
  } ],
  "name" : [ {
    "en" : "Historical Imagery",
    "fr" : "Imagerie historique"
  }, {
    "en" : "Historical Imagery",
    "fr" : "Imagerie historique"
  } ],
  "description" : [ {
    "en" : "A community for those who are interested in the historical imagery of Canada",
    "fr" : "Une communauté pour ceux qui s'intéressent à l'imagerie historique du Canada"
  }, {
    "en" : "A community for those who are interested in the historical imagery of Canada",
    "fr" : "Une communauté pour ceux qui s'intéressent à l'imagerie historique du Canada"
  } ]
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Get a community in the system / Obtenir une communauté dans le système
        <a href="#community_add">community_add</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityGetAnnouncements"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /community/announcements/get</code></pre></div>
    <div class="method-summary">Get community announcements / Recevez les annonces de la communauté (<span class="nickname">communityGetAnnouncements</span>)</div>
    <div class="method-notes">Get community announcements / Recevez les annonces de la communauté</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">communityId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Id of the Community used in the system / Identifiant de la communauté utilisé dans le système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_get_announcement">community_get_announcement</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "communityId" : "communityId"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Get community announcements / Recevez les annonces de la communauté
        <a href="#community_get_announcement">community_get_announcement</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityGetData"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /community/data/get</code></pre></div>
    <div class="method-summary">Get community data / Obtenir les données de la communauté (<span class="nickname">communityGetData</span>)</div>
    <div class="method-notes">Get community data / Obtenir les données de la communauté</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">communityId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Id of the Community used in the system / Identifiant de la communauté utilisé dans le système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_get_data">community_get_data</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "communityId" : "communityId"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Get community data / Obtenir les données de la communauté
        <a href="#community_get_data">community_get_data</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityGetMember"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /community/get_member</code></pre></div>
    <div class="method-summary">Get members of a community / Obtenir des membres d'une communauté (<span class="nickname">communityGetMember</span>)</div>
    <div class="method-notes">Get members of a community from communityId / Obtenir les membres d'une communauté à partir de communityId</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">communityId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Id of the Community used in the system / Identifiant de la communauté utilisé dans le système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_get_member">community_get_member</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "communityId" : "communityId"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Get community members / Obtenir des membres de la communauté
        <a href="#community_get_member">community_get_member</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="communityGetResources"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /community/resources/get</code></pre></div>
    <div class="method-summary">Get community resources / Obtenir des ressources communautaires (<span class="nickname">communityGetResources</span>)</div>
    <div class="method-notes">Get community resources / Obtenir des ressources communautaires</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">communityId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Id of the Community used in the system / Identifiant de la communauté utilisé dans le système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#community_get_resource">community_get_resource</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "communityId" : "communityId"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Get community resources / Obtenir des ressources communautaires
        <a href="#community_get_resource">community_get_resource</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="myCommunityGetAnnouncements"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /community/my_community/announcements</code></pre></div>
    <div class="method-summary">Get community announcements for user / Recevez les annonces de la communauté pour l'utilisateur (<span class="nickname">myCommunityGetAnnouncements</span>)</div>
    <div class="method-notes">Get community announcements for user / Recevez les annonces de la communauté pour l'utilisateur</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">userId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; userId in the system / ID utilisateur dans le système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#my_community_get_announcements">my_community_get_announcements</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "userId" : "userId"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Get community announcements for user / Recevez les annonces de la communauté pour l&#x27;utilisateur
        <a href="#my_community_get_announcements">my_community_get_announcements</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="myCommunityGetData"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /community/my_community/data</code></pre></div>
    <div class="method-summary">Get community data for user / Obtenir les données de la communauté pour l'utilisateur (<span class="nickname">myCommunityGetData</span>)</div>
    <div class="method-notes">Get community data for user / Obtenir les données de la communauté pour l'utilisateur</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">userId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; userId in the system / ID utilisateur dans le système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#my_community_get_data">my_community_get_data</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "userId" : "userId"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Get community data for user / Obtenir les données de la communauté pour l&#x27;utilisateur
        <a href="#my_community_get_data">my_community_get_data</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="myCommunityGetResources"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /community/my_community/resources</code></pre></div>
    <div class="method-summary">Get community resources for user / Obtenir des ressources communautaires pour l'utilisateur (<span class="nickname">myCommunityGetResources</span>)</div>
    <div class="method-notes">Get community resources for user / Obtenir des ressources communautaires pour l'utilisateur</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">userId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; userId in the system / ID utilisateur dans le système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#my_community_get_resources">my_community_get_resources</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "userId" : "userId"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Get community resources for user / Obtenir des ressources communautaires pour l&#x27;utilisateur
        <a href="#my_community_get_resources">my_community_get_resources</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <h1><a name="Contribute / Contribuer">Contribute / Contribuer</a></h1>
  <div class="method"><a name="contribute"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /contribute/plugin</code></pre></div>
    <div class="method-summary">Contribute plugin configuration to the system / Contribuer à la configuration du plugin sur le système (<span class="nickname">contribute</span>)</div>
    <div class="method-notes">Contribute plugin configuration for a specific UUID to the system. Requires API Key. / Contribuer à la configuration du plug-in pour un UUID spécifique au système. Nécessite une clé API</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">uuid (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The UUID of the metadata item where Plugin Configuration is being added / L&#x27;UUID de l&#x27;élément de métadonnées où la configuration du plug-in est ajoutée </div>      <div class="param">plugin_config (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The JSON Plugin Configuration for GeoView. This should include all languages required as per standard Plugin Configuration Schema. </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#plugin_config">plugin_config</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
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

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    The plugin configuration associated with an UUID / La configuration du plugin associée à un UUID
        <a href="#plugin_config">plugin_config</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="geonetwork"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /contribute/geonetwork</code></pre></div>
    <div class="method-summary">Contribute plugin configuration to the system / Contribuer à la configuration du plugin sur le système (<span class="nickname">geonetwork</span>)</div>
    <div class="method-notes">Contribute plugin configuration for a specific UUID to the system. Requires API Key. / Contribuer à la configuration du plug-in pour un UUID spécifique au système. Nécessite une clé API</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">uuid (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The UUID of the metadata item from the geonetwork instance / L&#x27;UUID de l&#x27;élément de métadonnées de l&#x27;instance de géoréseau </div>      <div class="param">source_code (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The source code provided to you&#x27;re geonetwork instance by the geocore team. / Le code source fourni à votre instance geonetwork par l&#x27;équipe geocore. </div>      <div class="param">item (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The Geonetwork JSON File to be added to the system. / Le fichier Geonetwork JSON à ajouter au système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#geonetwork">geonetwork</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>[ [ {
  "uuid" : "21b821cf-0f1c-40ee-8925-eab12d357668"
}, {
  "source_code" : 1213
}, {
  "item" : "{\n    \"@xmlns\": \"http://www.isotc211.org/2005/gmd\",\n    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n    \"@xmlns:gfc\": \"http://www.isotc211.org/2005/gfc\",\n    \"@xmlns:gmd\": \"http://www.isotc211.org/2005/gmd\",\n    \"@xmlns:gmi\": \"http://www.isotc211.org/2005/gmi\",\n    \"@xmlns:gml\": \"http://www.opengis.net/gml/3.2\",\n    \"@xmlns:gmx\": \"http://www.isotc211.org/2005/gmx\",\n    \"@xmlns:gsr\": \"http://www.isotc211.org/2005/gsr\",\n    \"@xmlns:gss\": \"http://www.isotc211.org/2005/gss\",\n    \"@xmlns:gts\": \"http://www.isotc211.org/2005/gts\",\n    \"@xmlns:srv\": \"http://www.isotc211.org/2005/srv\",\n    \"@xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n    \"@xsi:schemaLocation\": \"http://www.isotc211.org/2005/gmd http://nap.geogratis.gc.ca/metadata/tools/schemas/metadata/can-cgsb-171.100-2009-a/gmd/gmd.xsd http://www.isotc211.org/2005/srv http://nap.geogratis.gc.ca/metadata/tools/schemas/metadata/can-cgsb-171.100-2009-a/srv/srv.xsd http://www.geconnections.org/nap/napMetadataTools/napXsd/napm http://nap.geogratis.gc.ca/metadata/tools/schemas/metadata/can-cgsb-171.100-2009-a/napm/napm.xsd\",\n    \"gmd:fileIdentifier\": {\n        \"gco:CharacterString\": {\n            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n            \"#text\": \"000183ed-8864-42f0-ae43-c4313a860720\"\n        }\n    },\n    \"gmd:language\": {\n        \"gco:CharacterString\": {\n            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n            \"#text\": \"eng; CAN\"\n        }\n    },\n    \"gmd:characterSet\": {\n        \"gmd:MD_CharacterSetCode\": {\n            \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_95\",\n            \"@codeListValue\": \"RI_458\",\n            \"#text\": \"utf8; utf8\"\n        }\n    },\n    \"gmd:hierarchyLevel\": {\n        \"gmd:MD_ScopeCode\": {\n            \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_108\",\n            \"@codeListValue\": \"RI_623\",\n            \"#text\": \"series; série\"\n        }\n    },\n    \"gmd:contact\": {\n        \"gmd:CI_ResponsibleParty\": {\n            \"gmd:individualName\": {\n                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                \"@gco:nilReason\": \"missing\",\n                \"gco:CharacterString\": null\n            },\n            \"gmd:organisationName\": {\n                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                \"gco:CharacterString\": {\n                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                    \"#text\": \"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\"\n                },\n                \"gmd:PT_FreeText\": {\n                    \"gmd:textGroup\": {\n                        \"gmd:LocalisedCharacterString\": {\n                            \"@locale\": \"#fra\",\n                            \"#text\": \"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\"\n                        }\n                    }\n                }\n            },\n            \"gmd:positionName\": {\n                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                \"@gco:nilReason\": \"missing\",\n                \"gco:CharacterString\": null,\n                \"gmd:PT_FreeText\": {\n                    \"gmd:textGroup\": {\n                        \"gmd:LocalisedCharacterString\": {\n                            \"@locale\": \"#fra\"\n                        }\n                    }\n                }\n            },\n            \"gmd:contactInfo\": {\n                \"gmd:CI_Contact\": {\n                    \"gmd:phone\": {\n                        \"gmd:CI_Telephone\": {\n                            \"gmd:voice\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"1-855-525-9293\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"1-855-525-9293\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:facsimile\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"@gco:nilReason\": \"missing\",\n                                \"gco:CharacterString\": null\n                            }\n                        }\n                    },\n                    \"gmd:address\": {\n                        \"gmd:CI_Address\": {\n                            \"gmd:deliveryPoint\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"580 Booth Street\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"580 rue Booth\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:city\": {\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Ottawa\"\n                                }\n                            },\n                            \"gmd:administrativeArea\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Ontario\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Ontario\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:postalCode\": {\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"K1A 0E4\"\n                                }\n                            },\n                            \"gmd:country\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Canada\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Canada\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:electronicMailAddress\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"NRCan.questions.RNCan@canada.ca\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"NRCan.questions.RNCan@canada.ca\"\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    },\n                    \"gmd:onlineResource\": {\n                        \"gmd:CI_OnlineResource\": {\n                            \"gmd:linkage\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"@gco:nilReason\": \"missing\",\n                                \"gmd:URL\": null\n                            },\n                            \"gmd:protocol\": {\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"http\"\n                                }\n                            }\n                        }\n                    },\n                    \"gmd:hoursOfService\": {\n                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                        \"@gco:nilReason\": \"missing\",\n                        \"gco:CharacterString\": null,\n                        \"gmd:PT_FreeText\": {\n                            \"gmd:textGroup\": {\n                                \"gmd:LocalisedCharacterString\": {\n                                    \"@locale\": \"#fra\"\n                                }\n                            }\n                        }\n                    }\n                }\n            },\n            \"gmd:role\": {\n                \"gmd:CI_RoleCode\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90\",\n                    \"@codeListValue\": \"RI_414\",\n                    \"#text\": \"pointOfContact; contact\"\n                }\n            }\n        }\n    },\n    \"gmd:dateStamp\": {\n        \"gco:DateTime\": {\n            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n            \"#text\": \"2021-09-24T13:44:48\"\n        }\n    },\n    \"gmd:metadataStandardName\": {\n        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n        \"gco:CharacterString\": {\n            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n            \"#text\": \"North American Profile of ISO 19115:2003 - Geographic information - Metadata\"\n        },\n        \"gmd:PT_FreeText\": {\n            \"gmd:textGroup\": {\n                \"gmd:LocalisedCharacterString\": {\n                    \"@locale\": \"#fra\",\n                    \"#text\": \"Profil nord-américain de la norme ISO 19115:2003 - Information géographique - Métadonnées\"\n                }\n            }\n        }\n    },\n    \"gmd:metadataStandardVersion\": {\n        \"gco:CharacterString\": {\n            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n            \"#text\": \"CAN/CGSB-171.100-2009\"\n        }\n    },\n    \"gmd:dataSetURI\": {\n        \"@gco:nilReason\": \"missing\",\n        \"gco:CharacterString\": null\n    },\n    \"gmd:locale\": {\n        \"gmd:PT_Locale\": {\n            \"@id\": \"fra\",\n            \"gmd:languageCode\": {\n                \"gmd:LanguageCode\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_116\",\n                    \"@codeListValue\": \"fra\",\n                    \"#text\": \"French; Français\"\n                }\n            },\n            \"gmd:country\": {\n                \"gmd:Country\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_117\",\n                    \"@codeListValue\": \"CAN\",\n                    \"#text\": \"Canada; Canada\"\n                }\n            },\n            \"gmd:characterEncoding\": {\n                \"gmd:MD_CharacterSetCode\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_95\",\n                    \"@codeListValue\": \"RI_458\",\n                    \"#text\": \"utf8; utf8\"\n                }\n            }\n        }\n    },\n    \"gmd:referenceSystemInfo\": {\n        \"gmd:MD_ReferenceSystem\": {\n            \"gmd:referenceSystemIdentifier\": {\n                \"gmd:RS_Identifier\": {\n                    \"gmd:code\": {\n                        \"gco:CharacterString\": {\n                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                            \"#text\": \"EPSG:3978\"\n                        }\n                    },\n                    \"gmd:codeSpace\": {\n                        \"gco:CharacterString\": {\n                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                            \"#text\": \"http://www.epsg-registry.org\"\n                        }\n                    },\n                    \"gmd:version\": {\n                        \"gco:CharacterString\": {\n                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                            \"#text\": \"8.9.2\"\n                        }\n                    }\n                }\n            }\n        }\n    },\n    \"gmd:identificationInfo\": {\n        \"gmd:MD_DataIdentification\": {\n            \"gmd:citation\": {\n                \"gmd:CI_Citation\": {\n                    \"gmd:title\": {\n                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                        \"gco:CharacterString\": {\n                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                            \"#text\": \"Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                        },\n                        \"gmd:PT_FreeText\": {\n                            \"gmd:textGroup\": {\n                                \"gmd:LocalisedCharacterString\": {\n                                    \"@locale\": \"#fra\",\n                                    \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                }\n                            }\n                        }\n                    },\n                    \"gmd:date\": [\n                        {\n                            \"gmd:CI_Date\": {\n                                \"gmd:date\": {\n                                    \"gco:Date\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"2019-04-12\"\n                                    }\n                                },\n                                \"gmd:dateType\": {\n                                    \"gmd:CI_DateTypeCode\": {\n                                        \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_87\",\n                                        \"@codeListValue\": \"RI_366\",\n                                        \"#text\": \"creation; création\"\n                                    }\n                                }\n                            }\n                        },\n                        {\n                            \"gmd:CI_Date\": {\n                                \"gmd:date\": {\n                                    \"gco:Date\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"2021-02\"\n                                    }\n                                },\n                                \"gmd:dateType\": {\n                                    \"gmd:CI_DateTypeCode\": {\n                                        \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_87\",\n                                        \"@codeListValue\": \"RI_368\",\n                                        \"#text\": \"revision; révision\"\n                                    }\n                                }\n                            }\n                        },\n                        {\n                            \"gmd:CI_Date\": {\n                                \"gmd:date\": {\n                                    \"gco:Date\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"2020-02-27\"\n                                    }\n                                },\n                                \"gmd:dateType\": {\n                                    \"gmd:CI_DateTypeCode\": {\n                                        \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_87\",\n                                        \"@codeListValue\": \"RI_367\",\n                                        \"#text\": \"publication; publication\"\n                                    }\n                                }\n                            }\n                        }\n                    ],\n                    \"gmd:citedResponsibleParty\": {\n                        \"gmd:CI_ResponsibleParty\": {\n                            \"gmd:individualName\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"@gco:nilReason\": \"missing\",\n                                \"gco:CharacterString\": null\n                            },\n                            \"gmd:organisationName\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:positionName\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"@gco:nilReason\": \"missing\",\n                                \"gco:CharacterString\": null,\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:contactInfo\": {\n                                \"gmd:CI_Contact\": {\n                                    \"gmd:phone\": {\n                                        \"gmd:CI_Telephone\": {\n                                            \"gmd:voice\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"1-855-525-9293\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"1-855-525-9293\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:facsimile\": {\n                                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                \"@gco:nilReason\": \"missing\",\n                                                \"gco:CharacterString\": null\n                                            }\n                                        }\n                                    },\n                                    \"gmd:address\": {\n                                        \"gmd:CI_Address\": {\n                                            \"gmd:deliveryPoint\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"580 Booth Street\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"580 rue Booth\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:city\": {\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"Ottawa\"\n                                                }\n                                            },\n                                            \"gmd:administrativeArea\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"Ontario\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"Ontario\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:postalCode\": {\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"K1A 0E4\"\n                                                }\n                                            },\n                                            \"gmd:country\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"Canada\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"Canada\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:electronicMailAddress\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"NRCan.questions.RNCan@canada.ca\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"NRCan.questions.RNCan@canada.ca\"\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:onlineResource\": {\n                                        \"gmd:CI_OnlineResource\": {\n                                            \"gmd:linkage\": {\n                                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                \"@gco:nilReason\": \"missing\",\n                                                \"gmd:URL\": null\n                                            },\n                                            \"gmd:protocol\": {\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"http\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:hoursOfService\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"@gco:nilReason\": \"missing\",\n                                        \"gco:CharacterString\": null,\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:role\": {\n                                \"gmd:CI_RoleCode\": {\n                                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90\",\n                                    \"@codeListValue\": \"RI_414\",\n                                    \"#text\": \"pointOfContact; contact\"\n                                }\n                            }\n                        }\n                    }\n                }\n            },\n            \"gmd:abstract\": {\n                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                \"gco:CharacterString\": {\n                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                    \"#text\": \"This dataset is produced and published annually by Natural Resources Canada. It contains a variety of statistics on Canada’s mineral production, and provides the geographic locations of significant metallic, nonmetallic and coal mines, oil sands mines, selected metallurgical works and gas fields for the provinces and territories of Canada.\\n\\nRelated product:\\n- **[Top 100 Exploration Projects](https://open.canada.ca/data/en/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**\"\n                },\n                \"gmd:PT_FreeText\": {\n                    \"gmd:textGroup\": {\n                        \"gmd:LocalisedCharacterString\": {\n                            \"@locale\": \"#fra\",\n                            \"#text\": \"Ce jeu de données est produit et publié annuellement par Ressources naturelles Canada. Il contient une variété de statistiques sur la production de minéraux du Canada et montre l’emplacement géographique des principaux champs de gaz, certaines activités métallurgiques, mines de minéraux métalliques, non métalliques et de charbon, et mines de sables bitumineux dans les provinces et les territoires du Canada.\\n\\nProduit connexe:\\n- **[Les 100 principaux projets d'exploration](https://open.canada.ca/data/fr/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**\"\n                        }\n                    }\n                }\n            },\n            \"gmd:status\": {\n                \"gmd:MD_ProgressCode\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_106\",\n                    \"@codeListValue\": \"RI_593\",\n                    \"#text\": \"completed; complété\"\n                }\n            },\n            \"gmd:resourceMaintenance\": {\n                \"gmd:MD_MaintenanceInformation\": {\n                    \"gmd:maintenanceAndUpdateFrequency\": {\n                        \"gmd:MD_MaintenanceFrequencyCode\": {\n                            \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_102\",\n                            \"@codeListValue\": \"RI_539\",\n                            \"#text\": \"annually; annuel\"\n                        }\n                    }\n                }\n            },\n            \"gmd:graphicOverview\": {\n                \"gmd:MD_BrowseGraphic\": {\n                    \"gmd:fileName\": {\n                        \"gco:CharacterString\": {\n                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                            \"#text\": \"http://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/Thumbnail/900A.png\"\n                        }\n                    }\n                }\n            },\n            \"gmd:descriptiveKeywords\": [\n                {\n                    \"gmd:MD_Keywords\": {\n                        \"gmd:keyword\": [\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"mineralization\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"minéralisation\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"mineral occurrences\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"indices minéralisés\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"mines\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"mines\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"hydrocarbons\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"hydrocarbures\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"fossil fuels\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"combustibles fossiles\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"industrial minerals\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"minéraux industriels\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"metallic minerals\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"minéraux métalliques\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"economic geology\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"géologie économique\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"mineral deposits\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"gisements minéraux\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"exploration and deposit appraisal\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"exploration et mise en valeur de gisements\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"nonmetallic minerals\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"minéraux non métalliques\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"oil\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"pétrole\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"gas\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"gaz\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"hydrocarbons\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"hydrocarbures\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"refineries\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"raffineries\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"smelters\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"fonderies\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"mineral processing\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"traitement des minerais\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"ferroalloy\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"ferro-alliages\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"automobile shredders\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"déchiqueteurs d'automobiles\"\n                                        }\n                                    }\n                                }\n                            }\n                        ],\n                        \"gmd:type\": {\n                            \"gmd:MD_KeywordTypeCode\": {\n                                \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_101\",\n                                \"@codeListValue\": \"RI_528\",\n                                \"#text\": \"theme; thème\"\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_Keywords\": {\n                        \"gmd:keyword\": [\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Steel\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Acier\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Gas industry\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Industrie gazière\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Coal\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Charbon\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Earth sciences\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Sciences de la terre\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Oil sands\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Sables bitumineux\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Recycling\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Recyclage\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Metals\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Métal\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Minerals\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Minerai\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Mining industry\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Industrie minière\"\n                                        }\n                                    }\n                                }\n                            }\n                        ],\n                        \"gmd:type\": {\n                            \"gmd:MD_KeywordTypeCode\": {\n                                \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_101\",\n                                \"@codeListValue\": \"RI_528\",\n                                \"#text\": \"theme; thème\"\n                            }\n                        },\n                        \"gmd:thesaurusName\": {\n                            \"gmd:CI_Citation\": {\n                                \"gmd:title\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Government of Canada Core Subject Thesaurus\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Thésaurus des sujets de base du gouvernement du Canada\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:date\": [\n                                    {\n                                        \"gmd:CI_Date\": {\n                                            \"gmd:date\": {\n                                                \"gco:Date\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"2004\"\n                                                }\n                                            },\n                                            \"gmd:dateType\": {\n                                                \"gmd:CI_DateTypeCode\": {\n                                                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_87\",\n                                                    \"@codeListValue\": \"RI_366\",\n                                                    \"#text\": \"creation; création\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    {\n                                        \"gmd:CI_Date\": {\n                                            \"gmd:date\": {\n                                                \"gco:Date\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"2016-07-04\"\n                                                }\n                                            },\n                                            \"gmd:dateType\": {\n                                                \"gmd:CI_DateTypeCode\": {\n                                                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_87\",\n                                                    \"@codeListValue\": \"RI_367\",\n                                                    \"#text\": \"publication; publication\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                ],\n                                \"gmd:citedResponsibleParty\": {\n                                    \"gmd:CI_ResponsibleParty\": {\n                                        \"gmd:organisationName\": {\n                                            \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                            \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                            \"gco:CharacterString\": {\n                                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                \"#text\": \"Government of Canada; Library and Archives Canada\"\n                                            },\n                                            \"gmd:PT_FreeText\": {\n                                                \"gmd:textGroup\": {\n                                                    \"gmd:LocalisedCharacterString\": {\n                                                        \"@locale\": \"#fra\",\n                                                        \"#text\": \"Gouvernement du Canada; Bibliothèque et Archives Canada\"\n                                                    }\n                                                }\n                                            }\n                                        },\n                                        \"gmd:role\": {\n                                            \"gmd:CI_RoleCode\": {\n                                                \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90\",\n                                                \"@codeListValue\": \"RI_409\",\n                                                \"#text\": \"custodian; conservateur\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            ],\n            \"gmd:resourceConstraints\": {\n                \"gmd:MD_LegalConstraints\": {\n                    \"gmd:useLimitation\": {\n                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                        \"gco:CharacterString\": {\n                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                            \"#text\": \"Open Government Licence - Canada (http://open.canada.ca/en/open-government-licence-canada)\"\n                        },\n                        \"gmd:PT_FreeText\": {\n                            \"gmd:textGroup\": {\n                                \"gmd:LocalisedCharacterString\": {\n                                    \"@locale\": \"#fra\",\n                                    \"#text\": \"Licence du gouvernement ouvert - Canada (http://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada)\"\n                                }\n                            }\n                        }\n                    },\n                    \"gmd:accessConstraints\": {\n                        \"gmd:MD_RestrictionCode\": {\n                            \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_107\",\n                            \"@codeListValue\": \"RI_606\",\n                            \"#text\": \"license; licence\"\n                        }\n                    },\n                    \"gmd:useConstraints\": {\n                        \"gmd:MD_RestrictionCode\": {\n                            \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_107\",\n                            \"@codeListValue\": \"RI_606\",\n                            \"#text\": \"license; licence\"\n                        }\n                    },\n                    \"gmd:otherConstraints\": {\n                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                        \"@gco:nilReason\": \"missing\",\n                        \"gco:CharacterString\": null,\n                        \"gmd:PT_FreeText\": {\n                            \"gmd:textGroup\": {\n                                \"gmd:LocalisedCharacterString\": {\n                                    \"@locale\": \"#fra\"\n                                }\n                            }\n                        }\n                    }\n                }\n            },\n            \"gmd:spatialRepresentationType\": {\n                \"gmd:MD_SpatialRepresentationTypeCode\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_109\",\n                    \"@codeListValue\": \"RI_635\",\n                    \"#text\": \"vector; vecteur\"\n                }\n            },\n            \"gmd:language\": [\n                {\n                    \"gco:CharacterString\": {\n                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                        \"#text\": \"eng\"\n                    }\n                },\n                {\n                    \"gco:CharacterString\": {\n                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                        \"#text\": \"fra\"\n                    }\n                }\n            ],\n            \"gmd:characterSet\": {\n                \"gmd:MD_CharacterSetCode\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_95\",\n                    \"@codeListValue\": \"RI_458\",\n                    \"#text\": \"utf8; utf8\"\n                }\n            },\n            \"gmd:topicCategory\": {\n                \"gmd:MD_TopicCategoryCode\": \"economy\"\n            },\n            \"gmd:environmentDescription\": {\n                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                \"@gco:nilReason\": \"missing\",\n                \"gco:CharacterString\": null\n            },\n            \"gmd:extent\": [\n                {\n                    \"gmd:EX_Extent\": {\n                        \"gmd:temporalElement\": {\n                            \"gmd:EX_TemporalExtent\": {\n                                \"gmd:extent\": {\n                                    \"gml:TimePeriod\": {\n                                        \"@xmlns:gml\": \"http://www.opengis.net/gml/3.2\",\n                                        \"@gml:id\": \"d3157936e866\",\n                                        \"gml:beginPosition\": \"2020-01\",\n                                        \"gml:endPosition\": \"2020-12\"\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:EX_Extent\": {\n                        \"gmd:geographicElement\": {\n                            \"gmd:EX_GeographicBoundingBox\": {\n                                \"gmd:westBoundLongitude\": {\n                                    \"gco:Decimal\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"-141.003\"\n                                    }\n                                },\n                                \"gmd:eastBoundLongitude\": {\n                                    \"gco:Decimal\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"-52.6174\"\n                                    }\n                                },\n                                \"gmd:southBoundLatitude\": {\n                                    \"gco:Decimal\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"41.6755\"\n                                    }\n                                },\n                                \"gmd:northBoundLatitude\": {\n                                    \"gco:Decimal\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"83.1139\"\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            ],\n            \"gmd:supplementalInformation\": {\n                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                \"@gco:nilReason\": \"missing\",\n                \"gco:CharacterString\": null\n            }\n        }\n    },\n    \"gmd:distributionInfo\": {\n        \"gmd:MD_Distribution\": {\n            \"gmd:distributionFormat\": [\n                {\n                    \"gmd:MD_Format\": {\n                        \"gmd:name\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"ESRI REST\"\n                            }\n                        },\n                        \"gmd:version\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"10.7.1\"\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_Format\": {\n                        \"gmd:name\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"WMS\"\n                            }\n                        },\n                        \"gmd:version\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"1.3.0\"\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_Format\": {\n                        \"gmd:name\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"MXD\"\n                            }\n                        },\n                        \"gmd:version\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"10.7.1\"\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_Format\": {\n                        \"gmd:name\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"FGDB/GDB\"\n                            }\n                        },\n                        \"gmd:version\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"10.7\"\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_Format\": {\n                        \"gmd:name\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"PDF\"\n                            }\n                        },\n                        \"gmd:version\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"N/A\"\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_Format\": {\n                        \"gmd:name\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"SHP\"\n                            }\n                        },\n                        \"gmd:version\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"N/A\"\n                            }\n                        }\n                    }\n                }\n            ],\n            \"gmd:distributor\": {\n                \"gmd:MD_Distributor\": {\n                    \"gmd:distributorContact\": {\n                        \"gmd:CI_ResponsibleParty\": {\n                            \"gmd:individualName\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"@gco:nilReason\": \"missing\",\n                                \"gco:CharacterString\": null\n                            },\n                            \"gmd:organisationName\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:positionName\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"@gco:nilReason\": \"missing\",\n                                \"gco:CharacterString\": null,\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:contactInfo\": {\n                                \"gmd:CI_Contact\": {\n                                    \"gmd:phone\": {\n                                        \"gmd:CI_Telephone\": {\n                                            \"gmd:voice\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"1-855-525-9293\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"1-855-525-9293\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:facsimile\": {\n                                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                \"@gco:nilReason\": \"missing\",\n                                                \"gco:CharacterString\": null\n                                            }\n                                        }\n                                    },\n                                    \"gmd:address\": {\n                                        \"gmd:CI_Address\": {\n                                            \"gmd:deliveryPoint\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"580 Booth Street\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"580 rue Booth\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:city\": {\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"Ottawa\"\n                                                }\n                                            },\n                                            \"gmd:administrativeArea\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"Ontario\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"Ontario\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:postalCode\": {\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"K1A 0E4\"\n                                                }\n                                            },\n                                            \"gmd:country\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"Canada\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"Canada\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:electronicMailAddress\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"NRCan.questions.RNCan@canada.ca\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"NRCan.questions.RNCan@canada.ca\"\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:onlineResource\": {\n                                        \"gmd:CI_OnlineResource\": {\n                                            \"gmd:linkage\": {\n                                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                \"@gco:nilReason\": \"missing\",\n                                                \"gmd:URL\": null\n                                            },\n                                            \"gmd:protocol\": {\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"http\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:hoursOfService\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"@gco:nilReason\": \"missing\",\n                                        \"gco:CharacterString\": null,\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:role\": {\n                                \"gmd:CI_RoleCode\": {\n                                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90\",\n                                    \"@codeListValue\": \"RI_412\",\n                                    \"#text\": \"distributor; distributeur\"\n                                }\n                            }\n                        }\n                    }\n                }\n            },\n            \"gmd:transferOptions\": [\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": [\n                            {\n                                \"@xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                                \"@xlink:role\": \"urn:xml:lang:fra-CAN\",\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_fr/MapServer/1\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"ESRI REST: Map Server\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Web Service;ESRI REST;fra\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Service Web;ESRI REST;fra\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/900A_and_top_100_fr/MapServer/WMSServer?request=GetCapabilities&service=WMS\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"HTTPS\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Web Service;WMS;fra\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Service Web;WMS;fra\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/900A_and_top_100_en/MapServer/WMSServer?request=GetCapabilities&service=WMS\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"HTTPS\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Web Service;WMS;eng\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Service Web;WMS;eng\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://www.nrcan.gc.ca/science-data/science-research/earth-sciences/earth-sciences-resources/earth-sciences-federal-programs/map-900a/8790\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"HTTPS\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Map 900A web page\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Page web de la carte 900A\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Supporting Document;HTML;eng\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Document de soutien;HTML;eng\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://www.rncan.gc.ca/science-data/science-research/earth-sciences/earth-sciences-resources/earth-sciences-federal-programs/carte-900a/8791\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"HTTPS\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Map 900A web page\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Page web de la carte 900A\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Supporting Document;HTML;fra\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Document de soutien;HTML;fra\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://atlas.gc.ca/mins/en/index.html\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"HTTPS\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"The Atlas of Canada - Minerals and Mining Web Map\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"L'Atlas du Canada - Carte web des ressources minérales et l'activité minière\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Application;Web App;eng\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Application;Web App;eng\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://atlas.gc.ca/mins/fr/index.html\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"HTTPS\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"The Atlas of Canada - Minerals and Mining Web Map\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"L'Atlas du Canada - Carte web des ressources minérales et l'activité minière\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Application;Web App;fra\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Application;Web App;fra\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        ]\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": null\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A.gdb.zip\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"HTTPS\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Vector dataset of the 900A map\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Jeu de données vectorielles de la carte 900A\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Dataset;FGDB/GDB;eng,fra\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Données;FGDB/GDB;eng,fra\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_en.mxd\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"HTTPS\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"ArcMap project file of the 900A web map\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Projet ArcMap de la cartographie web de 900A\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Supporting Document;MXD;eng\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Document de soutien;MXD;eng\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_fr.mxd\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"HTTPS\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"ArcMap project file of the 900A web map\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Projet ArcMap de la cartographie web de 900A\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Supporting Document;MXD;fra\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Document de soutien;MXD;fra\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_70th_shape.zip\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"HTTPS\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Vector dataset of the 900A map\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Jeu de données vectorielles de la carte 900A\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Dataset;SHP;eng,fra\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Données;SHP;eng,fra\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_English.pdf\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"HTTPS\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Supporting Document;PDF;eng\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Document de soutien;PDF;eng\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_French.pdf\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"HTTPS\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Supporting Document;PDF;fra\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Document de soutien;PDF;fra\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"@xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                            \"@xlink:role\": \"urn:xml:lang:eng-CAN\",\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_en/MapServer/1\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"ESRI REST: Map Server\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Web Service;ESRI REST;eng\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Service Web;ESRI REST;eng\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": null\n                }\n            ]\n        }\n    }\n}\n\n"
} ], [ {
  "uuid" : "21b821cf-0f1c-40ee-8925-eab12d357668"
}, {
  "source_code" : 1213
}, {
  "item" : "{\n    \"@xmlns\": \"http://www.isotc211.org/2005/gmd\",\n    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n    \"@xmlns:gfc\": \"http://www.isotc211.org/2005/gfc\",\n    \"@xmlns:gmd\": \"http://www.isotc211.org/2005/gmd\",\n    \"@xmlns:gmi\": \"http://www.isotc211.org/2005/gmi\",\n    \"@xmlns:gml\": \"http://www.opengis.net/gml/3.2\",\n    \"@xmlns:gmx\": \"http://www.isotc211.org/2005/gmx\",\n    \"@xmlns:gsr\": \"http://www.isotc211.org/2005/gsr\",\n    \"@xmlns:gss\": \"http://www.isotc211.org/2005/gss\",\n    \"@xmlns:gts\": \"http://www.isotc211.org/2005/gts\",\n    \"@xmlns:srv\": \"http://www.isotc211.org/2005/srv\",\n    \"@xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n    \"@xsi:schemaLocation\": \"http://www.isotc211.org/2005/gmd http://nap.geogratis.gc.ca/metadata/tools/schemas/metadata/can-cgsb-171.100-2009-a/gmd/gmd.xsd http://www.isotc211.org/2005/srv http://nap.geogratis.gc.ca/metadata/tools/schemas/metadata/can-cgsb-171.100-2009-a/srv/srv.xsd http://www.geconnections.org/nap/napMetadataTools/napXsd/napm http://nap.geogratis.gc.ca/metadata/tools/schemas/metadata/can-cgsb-171.100-2009-a/napm/napm.xsd\",\n    \"gmd:fileIdentifier\": {\n        \"gco:CharacterString\": {\n            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n            \"#text\": \"000183ed-8864-42f0-ae43-c4313a860720\"\n        }\n    },\n    \"gmd:language\": {\n        \"gco:CharacterString\": {\n            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n            \"#text\": \"eng; CAN\"\n        }\n    },\n    \"gmd:characterSet\": {\n        \"gmd:MD_CharacterSetCode\": {\n            \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_95\",\n            \"@codeListValue\": \"RI_458\",\n            \"#text\": \"utf8; utf8\"\n        }\n    },\n    \"gmd:hierarchyLevel\": {\n        \"gmd:MD_ScopeCode\": {\n            \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_108\",\n            \"@codeListValue\": \"RI_623\",\n            \"#text\": \"series; série\"\n        }\n    },\n    \"gmd:contact\": {\n        \"gmd:CI_ResponsibleParty\": {\n            \"gmd:individualName\": {\n                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                \"@gco:nilReason\": \"missing\",\n                \"gco:CharacterString\": null\n            },\n            \"gmd:organisationName\": {\n                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                \"gco:CharacterString\": {\n                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                    \"#text\": \"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\"\n                },\n                \"gmd:PT_FreeText\": {\n                    \"gmd:textGroup\": {\n                        \"gmd:LocalisedCharacterString\": {\n                            \"@locale\": \"#fra\",\n                            \"#text\": \"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\"\n                        }\n                    }\n                }\n            },\n            \"gmd:positionName\": {\n                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                \"@gco:nilReason\": \"missing\",\n                \"gco:CharacterString\": null,\n                \"gmd:PT_FreeText\": {\n                    \"gmd:textGroup\": {\n                        \"gmd:LocalisedCharacterString\": {\n                            \"@locale\": \"#fra\"\n                        }\n                    }\n                }\n            },\n            \"gmd:contactInfo\": {\n                \"gmd:CI_Contact\": {\n                    \"gmd:phone\": {\n                        \"gmd:CI_Telephone\": {\n                            \"gmd:voice\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"1-855-525-9293\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"1-855-525-9293\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:facsimile\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"@gco:nilReason\": \"missing\",\n                                \"gco:CharacterString\": null\n                            }\n                        }\n                    },\n                    \"gmd:address\": {\n                        \"gmd:CI_Address\": {\n                            \"gmd:deliveryPoint\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"580 Booth Street\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"580 rue Booth\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:city\": {\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Ottawa\"\n                                }\n                            },\n                            \"gmd:administrativeArea\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Ontario\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Ontario\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:postalCode\": {\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"K1A 0E4\"\n                                }\n                            },\n                            \"gmd:country\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Canada\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Canada\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:electronicMailAddress\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"NRCan.questions.RNCan@canada.ca\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"NRCan.questions.RNCan@canada.ca\"\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    },\n                    \"gmd:onlineResource\": {\n                        \"gmd:CI_OnlineResource\": {\n                            \"gmd:linkage\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"@gco:nilReason\": \"missing\",\n                                \"gmd:URL\": null\n                            },\n                            \"gmd:protocol\": {\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"http\"\n                                }\n                            }\n                        }\n                    },\n                    \"gmd:hoursOfService\": {\n                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                        \"@gco:nilReason\": \"missing\",\n                        \"gco:CharacterString\": null,\n                        \"gmd:PT_FreeText\": {\n                            \"gmd:textGroup\": {\n                                \"gmd:LocalisedCharacterString\": {\n                                    \"@locale\": \"#fra\"\n                                }\n                            }\n                        }\n                    }\n                }\n            },\n            \"gmd:role\": {\n                \"gmd:CI_RoleCode\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90\",\n                    \"@codeListValue\": \"RI_414\",\n                    \"#text\": \"pointOfContact; contact\"\n                }\n            }\n        }\n    },\n    \"gmd:dateStamp\": {\n        \"gco:DateTime\": {\n            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n            \"#text\": \"2021-09-24T13:44:48\"\n        }\n    },\n    \"gmd:metadataStandardName\": {\n        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n        \"gco:CharacterString\": {\n            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n            \"#text\": \"North American Profile of ISO 19115:2003 - Geographic information - Metadata\"\n        },\n        \"gmd:PT_FreeText\": {\n            \"gmd:textGroup\": {\n                \"gmd:LocalisedCharacterString\": {\n                    \"@locale\": \"#fra\",\n                    \"#text\": \"Profil nord-américain de la norme ISO 19115:2003 - Information géographique - Métadonnées\"\n                }\n            }\n        }\n    },\n    \"gmd:metadataStandardVersion\": {\n        \"gco:CharacterString\": {\n            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n            \"#text\": \"CAN/CGSB-171.100-2009\"\n        }\n    },\n    \"gmd:dataSetURI\": {\n        \"@gco:nilReason\": \"missing\",\n        \"gco:CharacterString\": null\n    },\n    \"gmd:locale\": {\n        \"gmd:PT_Locale\": {\n            \"@id\": \"fra\",\n            \"gmd:languageCode\": {\n                \"gmd:LanguageCode\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_116\",\n                    \"@codeListValue\": \"fra\",\n                    \"#text\": \"French; Français\"\n                }\n            },\n            \"gmd:country\": {\n                \"gmd:Country\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_117\",\n                    \"@codeListValue\": \"CAN\",\n                    \"#text\": \"Canada; Canada\"\n                }\n            },\n            \"gmd:characterEncoding\": {\n                \"gmd:MD_CharacterSetCode\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_95\",\n                    \"@codeListValue\": \"RI_458\",\n                    \"#text\": \"utf8; utf8\"\n                }\n            }\n        }\n    },\n    \"gmd:referenceSystemInfo\": {\n        \"gmd:MD_ReferenceSystem\": {\n            \"gmd:referenceSystemIdentifier\": {\n                \"gmd:RS_Identifier\": {\n                    \"gmd:code\": {\n                        \"gco:CharacterString\": {\n                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                            \"#text\": \"EPSG:3978\"\n                        }\n                    },\n                    \"gmd:codeSpace\": {\n                        \"gco:CharacterString\": {\n                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                            \"#text\": \"http://www.epsg-registry.org\"\n                        }\n                    },\n                    \"gmd:version\": {\n                        \"gco:CharacterString\": {\n                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                            \"#text\": \"8.9.2\"\n                        }\n                    }\n                }\n            }\n        }\n    },\n    \"gmd:identificationInfo\": {\n        \"gmd:MD_DataIdentification\": {\n            \"gmd:citation\": {\n                \"gmd:CI_Citation\": {\n                    \"gmd:title\": {\n                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                        \"gco:CharacterString\": {\n                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                            \"#text\": \"Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                        },\n                        \"gmd:PT_FreeText\": {\n                            \"gmd:textGroup\": {\n                                \"gmd:LocalisedCharacterString\": {\n                                    \"@locale\": \"#fra\",\n                                    \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                }\n                            }\n                        }\n                    },\n                    \"gmd:date\": [\n                        {\n                            \"gmd:CI_Date\": {\n                                \"gmd:date\": {\n                                    \"gco:Date\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"2019-04-12\"\n                                    }\n                                },\n                                \"gmd:dateType\": {\n                                    \"gmd:CI_DateTypeCode\": {\n                                        \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_87\",\n                                        \"@codeListValue\": \"RI_366\",\n                                        \"#text\": \"creation; création\"\n                                    }\n                                }\n                            }\n                        },\n                        {\n                            \"gmd:CI_Date\": {\n                                \"gmd:date\": {\n                                    \"gco:Date\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"2021-02\"\n                                    }\n                                },\n                                \"gmd:dateType\": {\n                                    \"gmd:CI_DateTypeCode\": {\n                                        \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_87\",\n                                        \"@codeListValue\": \"RI_368\",\n                                        \"#text\": \"revision; révision\"\n                                    }\n                                }\n                            }\n                        },\n                        {\n                            \"gmd:CI_Date\": {\n                                \"gmd:date\": {\n                                    \"gco:Date\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"2020-02-27\"\n                                    }\n                                },\n                                \"gmd:dateType\": {\n                                    \"gmd:CI_DateTypeCode\": {\n                                        \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_87\",\n                                        \"@codeListValue\": \"RI_367\",\n                                        \"#text\": \"publication; publication\"\n                                    }\n                                }\n                            }\n                        }\n                    ],\n                    \"gmd:citedResponsibleParty\": {\n                        \"gmd:CI_ResponsibleParty\": {\n                            \"gmd:individualName\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"@gco:nilReason\": \"missing\",\n                                \"gco:CharacterString\": null\n                            },\n                            \"gmd:organisationName\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:positionName\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"@gco:nilReason\": \"missing\",\n                                \"gco:CharacterString\": null,\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:contactInfo\": {\n                                \"gmd:CI_Contact\": {\n                                    \"gmd:phone\": {\n                                        \"gmd:CI_Telephone\": {\n                                            \"gmd:voice\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"1-855-525-9293\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"1-855-525-9293\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:facsimile\": {\n                                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                \"@gco:nilReason\": \"missing\",\n                                                \"gco:CharacterString\": null\n                                            }\n                                        }\n                                    },\n                                    \"gmd:address\": {\n                                        \"gmd:CI_Address\": {\n                                            \"gmd:deliveryPoint\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"580 Booth Street\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"580 rue Booth\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:city\": {\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"Ottawa\"\n                                                }\n                                            },\n                                            \"gmd:administrativeArea\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"Ontario\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"Ontario\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:postalCode\": {\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"K1A 0E4\"\n                                                }\n                                            },\n                                            \"gmd:country\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"Canada\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"Canada\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:electronicMailAddress\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"NRCan.questions.RNCan@canada.ca\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"NRCan.questions.RNCan@canada.ca\"\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:onlineResource\": {\n                                        \"gmd:CI_OnlineResource\": {\n                                            \"gmd:linkage\": {\n                                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                \"@gco:nilReason\": \"missing\",\n                                                \"gmd:URL\": null\n                                            },\n                                            \"gmd:protocol\": {\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"http\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:hoursOfService\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"@gco:nilReason\": \"missing\",\n                                        \"gco:CharacterString\": null,\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:role\": {\n                                \"gmd:CI_RoleCode\": {\n                                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90\",\n                                    \"@codeListValue\": \"RI_414\",\n                                    \"#text\": \"pointOfContact; contact\"\n                                }\n                            }\n                        }\n                    }\n                }\n            },\n            \"gmd:abstract\": {\n                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                \"gco:CharacterString\": {\n                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                    \"#text\": \"This dataset is produced and published annually by Natural Resources Canada. It contains a variety of statistics on Canada’s mineral production, and provides the geographic locations of significant metallic, nonmetallic and coal mines, oil sands mines, selected metallurgical works and gas fields for the provinces and territories of Canada.\\n\\nRelated product:\\n- **[Top 100 Exploration Projects](https://open.canada.ca/data/en/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**\"\n                },\n                \"gmd:PT_FreeText\": {\n                    \"gmd:textGroup\": {\n                        \"gmd:LocalisedCharacterString\": {\n                            \"@locale\": \"#fra\",\n                            \"#text\": \"Ce jeu de données est produit et publié annuellement par Ressources naturelles Canada. Il contient une variété de statistiques sur la production de minéraux du Canada et montre l’emplacement géographique des principaux champs de gaz, certaines activités métallurgiques, mines de minéraux métalliques, non métalliques et de charbon, et mines de sables bitumineux dans les provinces et les territoires du Canada.\\n\\nProduit connexe:\\n- **[Les 100 principaux projets d'exploration](https://open.canada.ca/data/fr/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**\"\n                        }\n                    }\n                }\n            },\n            \"gmd:status\": {\n                \"gmd:MD_ProgressCode\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_106\",\n                    \"@codeListValue\": \"RI_593\",\n                    \"#text\": \"completed; complété\"\n                }\n            },\n            \"gmd:resourceMaintenance\": {\n                \"gmd:MD_MaintenanceInformation\": {\n                    \"gmd:maintenanceAndUpdateFrequency\": {\n                        \"gmd:MD_MaintenanceFrequencyCode\": {\n                            \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_102\",\n                            \"@codeListValue\": \"RI_539\",\n                            \"#text\": \"annually; annuel\"\n                        }\n                    }\n                }\n            },\n            \"gmd:graphicOverview\": {\n                \"gmd:MD_BrowseGraphic\": {\n                    \"gmd:fileName\": {\n                        \"gco:CharacterString\": {\n                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                            \"#text\": \"http://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/Thumbnail/900A.png\"\n                        }\n                    }\n                }\n            },\n            \"gmd:descriptiveKeywords\": [\n                {\n                    \"gmd:MD_Keywords\": {\n                        \"gmd:keyword\": [\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"mineralization\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"minéralisation\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"mineral occurrences\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"indices minéralisés\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"mines\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"mines\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"hydrocarbons\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"hydrocarbures\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"fossil fuels\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"combustibles fossiles\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"industrial minerals\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"minéraux industriels\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"metallic minerals\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"minéraux métalliques\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"economic geology\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"géologie économique\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"mineral deposits\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"gisements minéraux\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"exploration and deposit appraisal\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"exploration et mise en valeur de gisements\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"nonmetallic minerals\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"minéraux non métalliques\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"oil\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"pétrole\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"gas\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"gaz\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"hydrocarbons\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"hydrocarbures\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"refineries\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"raffineries\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"smelters\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"fonderies\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"mineral processing\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"traitement des minerais\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"ferroalloy\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"ferro-alliages\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"automobile shredders\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"déchiqueteurs d'automobiles\"\n                                        }\n                                    }\n                                }\n                            }\n                        ],\n                        \"gmd:type\": {\n                            \"gmd:MD_KeywordTypeCode\": {\n                                \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_101\",\n                                \"@codeListValue\": \"RI_528\",\n                                \"#text\": \"theme; thème\"\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_Keywords\": {\n                        \"gmd:keyword\": [\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Steel\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Acier\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Gas industry\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Industrie gazière\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Coal\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Charbon\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Earth sciences\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Sciences de la terre\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Oil sands\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Sables bitumineux\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Recycling\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Recyclage\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Metals\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Métal\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Minerals\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Minerai\"\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Mining industry\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Industrie minière\"\n                                        }\n                                    }\n                                }\n                            }\n                        ],\n                        \"gmd:type\": {\n                            \"gmd:MD_KeywordTypeCode\": {\n                                \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_101\",\n                                \"@codeListValue\": \"RI_528\",\n                                \"#text\": \"theme; thème\"\n                            }\n                        },\n                        \"gmd:thesaurusName\": {\n                            \"gmd:CI_Citation\": {\n                                \"gmd:title\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Government of Canada Core Subject Thesaurus\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Thésaurus des sujets de base du gouvernement du Canada\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:date\": [\n                                    {\n                                        \"gmd:CI_Date\": {\n                                            \"gmd:date\": {\n                                                \"gco:Date\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"2004\"\n                                                }\n                                            },\n                                            \"gmd:dateType\": {\n                                                \"gmd:CI_DateTypeCode\": {\n                                                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_87\",\n                                                    \"@codeListValue\": \"RI_366\",\n                                                    \"#text\": \"creation; création\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    {\n                                        \"gmd:CI_Date\": {\n                                            \"gmd:date\": {\n                                                \"gco:Date\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"2016-07-04\"\n                                                }\n                                            },\n                                            \"gmd:dateType\": {\n                                                \"gmd:CI_DateTypeCode\": {\n                                                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_87\",\n                                                    \"@codeListValue\": \"RI_367\",\n                                                    \"#text\": \"publication; publication\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                ],\n                                \"gmd:citedResponsibleParty\": {\n                                    \"gmd:CI_ResponsibleParty\": {\n                                        \"gmd:organisationName\": {\n                                            \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                            \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                            \"gco:CharacterString\": {\n                                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                \"#text\": \"Government of Canada; Library and Archives Canada\"\n                                            },\n                                            \"gmd:PT_FreeText\": {\n                                                \"gmd:textGroup\": {\n                                                    \"gmd:LocalisedCharacterString\": {\n                                                        \"@locale\": \"#fra\",\n                                                        \"#text\": \"Gouvernement du Canada; Bibliothèque et Archives Canada\"\n                                                    }\n                                                }\n                                            }\n                                        },\n                                        \"gmd:role\": {\n                                            \"gmd:CI_RoleCode\": {\n                                                \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90\",\n                                                \"@codeListValue\": \"RI_409\",\n                                                \"#text\": \"custodian; conservateur\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            ],\n            \"gmd:resourceConstraints\": {\n                \"gmd:MD_LegalConstraints\": {\n                    \"gmd:useLimitation\": {\n                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                        \"gco:CharacterString\": {\n                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                            \"#text\": \"Open Government Licence - Canada (http://open.canada.ca/en/open-government-licence-canada)\"\n                        },\n                        \"gmd:PT_FreeText\": {\n                            \"gmd:textGroup\": {\n                                \"gmd:LocalisedCharacterString\": {\n                                    \"@locale\": \"#fra\",\n                                    \"#text\": \"Licence du gouvernement ouvert - Canada (http://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada)\"\n                                }\n                            }\n                        }\n                    },\n                    \"gmd:accessConstraints\": {\n                        \"gmd:MD_RestrictionCode\": {\n                            \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_107\",\n                            \"@codeListValue\": \"RI_606\",\n                            \"#text\": \"license; licence\"\n                        }\n                    },\n                    \"gmd:useConstraints\": {\n                        \"gmd:MD_RestrictionCode\": {\n                            \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_107\",\n                            \"@codeListValue\": \"RI_606\",\n                            \"#text\": \"license; licence\"\n                        }\n                    },\n                    \"gmd:otherConstraints\": {\n                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                        \"@gco:nilReason\": \"missing\",\n                        \"gco:CharacterString\": null,\n                        \"gmd:PT_FreeText\": {\n                            \"gmd:textGroup\": {\n                                \"gmd:LocalisedCharacterString\": {\n                                    \"@locale\": \"#fra\"\n                                }\n                            }\n                        }\n                    }\n                }\n            },\n            \"gmd:spatialRepresentationType\": {\n                \"gmd:MD_SpatialRepresentationTypeCode\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_109\",\n                    \"@codeListValue\": \"RI_635\",\n                    \"#text\": \"vector; vecteur\"\n                }\n            },\n            \"gmd:language\": [\n                {\n                    \"gco:CharacterString\": {\n                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                        \"#text\": \"eng\"\n                    }\n                },\n                {\n                    \"gco:CharacterString\": {\n                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                        \"#text\": \"fra\"\n                    }\n                }\n            ],\n            \"gmd:characterSet\": {\n                \"gmd:MD_CharacterSetCode\": {\n                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_95\",\n                    \"@codeListValue\": \"RI_458\",\n                    \"#text\": \"utf8; utf8\"\n                }\n            },\n            \"gmd:topicCategory\": {\n                \"gmd:MD_TopicCategoryCode\": \"economy\"\n            },\n            \"gmd:environmentDescription\": {\n                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                \"@gco:nilReason\": \"missing\",\n                \"gco:CharacterString\": null\n            },\n            \"gmd:extent\": [\n                {\n                    \"gmd:EX_Extent\": {\n                        \"gmd:temporalElement\": {\n                            \"gmd:EX_TemporalExtent\": {\n                                \"gmd:extent\": {\n                                    \"gml:TimePeriod\": {\n                                        \"@xmlns:gml\": \"http://www.opengis.net/gml/3.2\",\n                                        \"@gml:id\": \"d3157936e866\",\n                                        \"gml:beginPosition\": \"2020-01\",\n                                        \"gml:endPosition\": \"2020-12\"\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:EX_Extent\": {\n                        \"gmd:geographicElement\": {\n                            \"gmd:EX_GeographicBoundingBox\": {\n                                \"gmd:westBoundLongitude\": {\n                                    \"gco:Decimal\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"-141.003\"\n                                    }\n                                },\n                                \"gmd:eastBoundLongitude\": {\n                                    \"gco:Decimal\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"-52.6174\"\n                                    }\n                                },\n                                \"gmd:southBoundLatitude\": {\n                                    \"gco:Decimal\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"41.6755\"\n                                    }\n                                },\n                                \"gmd:northBoundLatitude\": {\n                                    \"gco:Decimal\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"83.1139\"\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            ],\n            \"gmd:supplementalInformation\": {\n                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                \"@gco:nilReason\": \"missing\",\n                \"gco:CharacterString\": null\n            }\n        }\n    },\n    \"gmd:distributionInfo\": {\n        \"gmd:MD_Distribution\": {\n            \"gmd:distributionFormat\": [\n                {\n                    \"gmd:MD_Format\": {\n                        \"gmd:name\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"ESRI REST\"\n                            }\n                        },\n                        \"gmd:version\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"10.7.1\"\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_Format\": {\n                        \"gmd:name\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"WMS\"\n                            }\n                        },\n                        \"gmd:version\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"1.3.0\"\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_Format\": {\n                        \"gmd:name\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"MXD\"\n                            }\n                        },\n                        \"gmd:version\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"10.7.1\"\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_Format\": {\n                        \"gmd:name\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"FGDB/GDB\"\n                            }\n                        },\n                        \"gmd:version\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"10.7\"\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_Format\": {\n                        \"gmd:name\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"PDF\"\n                            }\n                        },\n                        \"gmd:version\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"N/A\"\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_Format\": {\n                        \"gmd:name\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"SHP\"\n                            }\n                        },\n                        \"gmd:version\": {\n                            \"gco:CharacterString\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"#text\": \"N/A\"\n                            }\n                        }\n                    }\n                }\n            ],\n            \"gmd:distributor\": {\n                \"gmd:MD_Distributor\": {\n                    \"gmd:distributorContact\": {\n                        \"gmd:CI_ResponsibleParty\": {\n                            \"gmd:individualName\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"@gco:nilReason\": \"missing\",\n                                \"gco:CharacterString\": null\n                            },\n                            \"gmd:organisationName\": {\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"gco:CharacterString\": {\n                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                    \"#text\": \"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\"\n                                },\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\",\n                                            \"#text\": \"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:positionName\": {\n                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                \"@gco:nilReason\": \"missing\",\n                                \"gco:CharacterString\": null,\n                                \"gmd:PT_FreeText\": {\n                                    \"gmd:textGroup\": {\n                                        \"gmd:LocalisedCharacterString\": {\n                                            \"@locale\": \"#fra\"\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:contactInfo\": {\n                                \"gmd:CI_Contact\": {\n                                    \"gmd:phone\": {\n                                        \"gmd:CI_Telephone\": {\n                                            \"gmd:voice\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"1-855-525-9293\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"1-855-525-9293\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:facsimile\": {\n                                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                \"@gco:nilReason\": \"missing\",\n                                                \"gco:CharacterString\": null\n                                            }\n                                        }\n                                    },\n                                    \"gmd:address\": {\n                                        \"gmd:CI_Address\": {\n                                            \"gmd:deliveryPoint\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"580 Booth Street\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"580 rue Booth\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:city\": {\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"Ottawa\"\n                                                }\n                                            },\n                                            \"gmd:administrativeArea\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"Ontario\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"Ontario\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:postalCode\": {\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"K1A 0E4\"\n                                                }\n                                            },\n                                            \"gmd:country\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"Canada\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"Canada\"\n                                                        }\n                                                    }\n                                                }\n                                            },\n                                            \"gmd:electronicMailAddress\": {\n                                                \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                                \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"NRCan.questions.RNCan@canada.ca\"\n                                                },\n                                                \"gmd:PT_FreeText\": {\n                                                    \"gmd:textGroup\": {\n                                                        \"gmd:LocalisedCharacterString\": {\n                                                            \"@locale\": \"#fra\",\n                                                            \"#text\": \"NRCan.questions.RNCan@canada.ca\"\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:onlineResource\": {\n                                        \"gmd:CI_OnlineResource\": {\n                                            \"gmd:linkage\": {\n                                                \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                \"@gco:nilReason\": \"missing\",\n                                                \"gmd:URL\": null\n                                            },\n                                            \"gmd:protocol\": {\n                                                \"gco:CharacterString\": {\n                                                    \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                                    \"#text\": \"http\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:hoursOfService\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"@gco:nilReason\": \"missing\",\n                                        \"gco:CharacterString\": null,\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            \"gmd:role\": {\n                                \"gmd:CI_RoleCode\": {\n                                    \"@codeList\": \"http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90\",\n                                    \"@codeListValue\": \"RI_412\",\n                                    \"#text\": \"distributor; distributeur\"\n                                }\n                            }\n                        }\n                    }\n                }\n            },\n            \"gmd:transferOptions\": [\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": [\n                            {\n                                \"@xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                                \"@xlink:role\": \"urn:xml:lang:fra-CAN\",\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_fr/MapServer/1\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"ESRI REST: Map Server\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Web Service;ESRI REST;fra\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Service Web;ESRI REST;fra\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/900A_and_top_100_fr/MapServer/WMSServer?request=GetCapabilities&service=WMS\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"HTTPS\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Web Service;WMS;fra\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Service Web;WMS;fra\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/900A_and_top_100_en/MapServer/WMSServer?request=GetCapabilities&service=WMS\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"HTTPS\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Web Service;WMS;eng\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Service Web;WMS;eng\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://www.nrcan.gc.ca/science-data/science-research/earth-sciences/earth-sciences-resources/earth-sciences-federal-programs/map-900a/8790\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"HTTPS\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Map 900A web page\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Page web de la carte 900A\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Supporting Document;HTML;eng\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Document de soutien;HTML;eng\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://www.rncan.gc.ca/science-data/science-research/earth-sciences/earth-sciences-resources/earth-sciences-federal-programs/carte-900a/8791\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"HTTPS\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Map 900A web page\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Page web de la carte 900A\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Supporting Document;HTML;fra\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Document de soutien;HTML;fra\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://atlas.gc.ca/mins/en/index.html\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"HTTPS\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"The Atlas of Canada - Minerals and Mining Web Map\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"L'Atlas du Canada - Carte web des ressources minérales et l'activité minière\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Application;Web App;eng\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Application;Web App;eng\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            },\n                            {\n                                \"gmd:CI_OnlineResource\": {\n                                    \"gmd:linkage\": {\n                                        \"gmd:URL\": \"https://atlas.gc.ca/mins/fr/index.html\"\n                                    },\n                                    \"gmd:protocol\": {\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"HTTPS\"\n                                        }\n                                    },\n                                    \"gmd:name\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"The Atlas of Canada - Minerals and Mining Web Map\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"L'Atlas du Canada - Carte web des ressources minérales et l'activité minière\"\n                                                }\n                                            }\n                                        }\n                                    },\n                                    \"gmd:description\": {\n                                        \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                        \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                        \"gco:CharacterString\": {\n                                            \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                            \"#text\": \"Application;Web App;fra\"\n                                        },\n                                        \"gmd:PT_FreeText\": {\n                                            \"gmd:textGroup\": {\n                                                \"gmd:LocalisedCharacterString\": {\n                                                    \"@locale\": \"#fra\",\n                                                    \"#text\": \"Application;Web App;fra\"\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        ]\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": null\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A.gdb.zip\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"HTTPS\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Vector dataset of the 900A map\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Jeu de données vectorielles de la carte 900A\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Dataset;FGDB/GDB;eng,fra\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Données;FGDB/GDB;eng,fra\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_en.mxd\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"HTTPS\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"ArcMap project file of the 900A web map\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Projet ArcMap de la cartographie web de 900A\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Supporting Document;MXD;eng\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Document de soutien;MXD;eng\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_fr.mxd\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"HTTPS\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"ArcMap project file of the 900A web map\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Projet ArcMap de la cartographie web de 900A\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Supporting Document;MXD;fra\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Document de soutien;MXD;fra\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_70th_shape.zip\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"HTTPS\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Vector dataset of the 900A map\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Jeu de données vectorielles de la carte 900A\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Dataset;SHP;eng,fra\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Données;SHP;eng,fra\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_English.pdf\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"HTTPS\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Supporting Document;PDF;eng\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Document de soutien;PDF;eng\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_French.pdf\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"HTTPS\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Supporting Document;PDF;fra\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Document de soutien;PDF;fra\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": {\n                        \"gmd:onLine\": {\n                            \"@xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                            \"@xlink:role\": \"urn:xml:lang:eng-CAN\",\n                            \"gmd:CI_OnlineResource\": {\n                                \"gmd:linkage\": {\n                                    \"gmd:URL\": \"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_en/MapServer/1\"\n                                },\n                                \"gmd:protocol\": {\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"ESRI REST: Map Server\"\n                                    }\n                                },\n                                \"gmd:name\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\"\n                                            }\n                                        }\n                                    }\n                                },\n                                \"gmd:description\": {\n                                    \"@xmlns:xsi\": \"http://www.w3.org/2001/XMLSchema-instance\",\n                                    \"@xsi:type\": \"gmd:PT_FreeText_PropertyType\",\n                                    \"gco:CharacterString\": {\n                                        \"@xmlns:gco\": \"http://www.isotc211.org/2005/gco\",\n                                        \"#text\": \"Web Service;ESRI REST;eng\"\n                                    },\n                                    \"gmd:PT_FreeText\": {\n                                        \"gmd:textGroup\": {\n                                            \"gmd:LocalisedCharacterString\": {\n                                                \"@locale\": \"#fra\",\n                                                \"#text\": \"Service Web;ESRI REST;eng\"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                },\n                {\n                    \"gmd:MD_DigitalTransferOptions\": null\n                }\n            ]\n        }\n    }\n}\n\n"
} ] ]</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Add a geonetwork JSON file to the system / Ajouter un fichier JSON de géoréseau au système
        <a href="#geonetwork">geonetwork</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="new"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /contribute/new</code></pre></div>
    <div class="method-summary">Add Metadata to the system / Ajouter des métadonnées dans le système (<span class="nickname">new</span>)</div>
    <div class="method-notes">Add Metadata to the system Requires API Key. / Ajouter des métadonnées au système nécessite une clé API.</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">source_key (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; If you are posting from an external system to geoCore, we will provide you a source key to include in new metadata events. We will use your source key and your system&#x27;s uuid as the uuid for geoCore. </div>      <div class="param">id (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; If you are posting from an external system to geoCore, we will use your system&#x27;s source key along with your system&#x27;s uuid to create an unique uuid for geoCore. If you are posting to geoCore from your source system, we will provide you geoCore&#x27;s UUID in the response to a successful post request. </div>      <div class="param">coordinates (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The coordinates of the item / Les coordonnées de l&#x27;article </div>      <div class="param">title_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The title in english of the item / Le titre en anglais de l&#x27;article </div>      <div class="param">title_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The title in french of the item / Le titre en français de l&#x27;article </div>      <div class="param">description_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The description in english of the item / La description en anglais de l&#x27;article </div>      <div class="param">description_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The description in french of the item / La description en français de l&#x27;article </div>      <div class="param">keywords_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The keywords in english of the item / Les mots-clés en anglais de l&#x27;article </div>      <div class="param">keywords_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The keywords in french of the item / Les mots-clés en français de l&#x27;article </div>      <div class="param">topicCategory (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The Topic Category of the item / La catégorie de sujet de l&#x27;élément </div>      <div class="param">date_published_text (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The published date text of the item / Le texte de la date de publication de l&#x27;élément </div>      <div class="param">date_published_date (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The published date date of the item / La date de publication de l&#x27;élément </div>      <div class="param">date_created_text (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The created date text of the item / Le texte de la date de création de l&#x27;élément </div>      <div class="param">date_created_date (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The created date date of the item / La date de création de l&#x27;élément </div>      <div class="param">spatialRepresentation (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The spatial representation of the item / La représentation spatiale de l&#x27;article </div>      <div class="param">type (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The type of the item / Le type de l&#x27;article </div>      <div class="param">geometry (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The geometry of the item / La géométrie de l&#x27;article </div>      <div class="param">temporalExtent_begin (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The beginning date of the temporal extent of the item / Date de début de l&#x27;étendue temporelle de l&#x27;élément </div>      <div class="param">temporalExtent_end (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The end date of the temporal extent of the item / La date de fin de l&#x27;étendue temporelle de l&#x27;élément </div>      <div class="param">refSys (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The reference system of the item / Le référentiel de l&#x27;article </div>      <div class="param">refSys_version (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The reference system version of the item / La version du système de référence de l&#x27;article </div>      <div class="param">status (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The status of the item / Le statut de l&#x27;article </div>      <div class="param">maintenance (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The maintenance of the item / L&#x27;entretien de l&#x27;article </div>      <div class="param">metadataStandard_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The metadata standard in english of the item / La norme de métadonnées en anglais de l&#x27;article </div>      <div class="param">metadataStandard_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The metadata standard in french of the item / La norme de métadonnées en français de l&#x27;article </div>      <div class="param">metadataStandardVersion (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The metadata standard version of the item / La version standard des métadonnées de l&#x27;élément </div>      <div class="param">graphicOverview (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The graphic overviews of the item  / Les aperçus graphiques de l&#x27;article </div>      <div class="param">distributionFormat_name (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The distribution format name of the item / Le nom du format de distribution de l&#x27;élément </div>      <div class="param">distributionFormat_format (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The distribution format format of the item / Le format de distribution de l&#x27;article </div>      <div class="param">useLimits_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The use limits in english of the item / Les limites d&#x27;utilisation en anglais de l&#x27;article </div>      <div class="param">useLimits_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The use limits in french of the item / Les limites d&#x27;utilisation en français de l&#x27;article </div>      <div class="param">accessConstraints (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The access constraints of the item / Les contraintes d&#x27;accès de l&#x27;article </div>      <div class="param">otherConstraints_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The other constraints in english of the item / Les autres contraintes en anglais de l&#x27;article </div>      <div class="param">otherConstraints_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The other constraints in french of the item / Les autres contraintes en français de l&#x27;article </div>      <div class="param">dateStamp (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The date stamp of the item / Le cachet dateur de l&#x27;article </div>      <div class="param">dataSetURI (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The data set uri of the item / L&#x27;URI de l&#x27;ensemble de données de l&#x27;élément </div>      <div class="param">locale_language (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The locale language of the item / La langue locale de l&#x27;élément </div>      <div class="param">locale_country (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The locale country of the item / Le pays local de l&#x27;élément </div>      <div class="param">locale_encoding (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The locale encoding of the item / L&#x27;encodage local de l&#x27;élément </div>      <div class="param">language (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The language of the item / La langue de l&#x27;article </div>      <div class="param">characterSet (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The characterSet of the item / Le jeu de caractères de l&#x27;élément </div>      <div class="param">environmentDescription (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The environment description of the item / La description de l&#x27;environnement de l&#x27;élément </div>      <div class="param">supplementalInformation_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The supplemental information in english of the item / Les informations supplémentaires en anglais de l&#x27;article </div>      <div class="param">supplementalInformation_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The supplemental information in french of the item / Les informations complémentaires en français de l&#x27;article </div>      <div class="param">contact (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The contact array of the item / Le tableau de contact de l&#x27;élément </div>      <div class="param">credits (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The credits array of the item / Le tableau des crédits de l&#x27;élément </div>      <div class="param">cited (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The cited array of the item / Le tableau cité de l&#x27;élément </div>      <div class="param">distributor (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The distributor array of the item / Le tableau de distribution de l&#x27;article </div>      <div class="param">options (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The options array of the item / Le tableau d&#x27;options de l&#x27;élément </div>      <div class="param">plugins (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The plugins array of the item / Le tableau de plugins de l&#x27;élément </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#new">new</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>[ [ {
  "id" : "000183ed-8864-42f0-ae43-c4313a860720",
  "coordinates" : [ [ [ -141.003, 41.6755 ], [ -52.6174, 41.6755 ], [ -52.6174, 83.1139 ], [ -141.003, 83.1139 ], [ -141.003, 41.6755 ] ] ],
  "title_en" : "Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)",
  "title_fr" : "Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)",
  "description_en" : "This dataset is produced and published annually by Natural Resources Canada. It contains a variety of statistics on Canada’s mineral production, and provides the geographic locations of significant metallic, nonmetallic and coal mines, oil sands mines, selected metallurgical works and gas fields for the provinces and territories of Canada.Related product:- **[Top 100 Exploration Projects](https://open.canada.ca/data/en/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "description_fr" : "Ce jeu de données est produit et publié annuellement par Ressources naturelles Canada. Il contient une variété de statistiques sur la production de minéraux du Canada et montre l’emplacement géographique des principaux champs de gaz, certaines activités métallurgiques, mines de minéraux métalliques, non métalliques et de charbon, et mines de sables bitumineux dans les provinces et les territoires du Canada.Produit connexe:- **[Les 100 principaux projets d'exploration](https://open.canada.ca/data/fr/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "date_published_text" : "published",
  "date_published_date" : "2020-02-27T00:00:00.000Z",
  "keywords_en" : "mineralization, mineral occurrences, mines, hydrocarbons, fossil fuels, industrial minerals, metallic minerals, economic geology, mineral deposits, exploration and deposit appraisal, nonmetallic minerals, oil, gas, hydrocarbons, refineries, smelters, mineral processing, ferroalloy, automobile shredders, Coal, Earth sciences, Oil sands, Recycling, Metals, Minerals, Mining industry, Gas industry, Steel,",
  "keywords_fr" : "minéralisation, indices minéralisés, mines, hydrocarbures, combustibles fossiles, minéraux industriels, minéraux métalliques, géologie économique, gisements minéraux, exploration et mise en valeur de gisements, minéraux non métalliques, pétrole, gaz, hydrocarbures, raffineries, fonderies, traitement des minerais, ferro-alliages, déchiqueteurs d'automobiles, Acier, Industrie gazière, Charbon, Sciences de la terre, Sables bitumineux, Recyclage, Métal, Minerai, Industrie minière",
  "options" : "\"\"[{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;FGDB/GDB;eng,fra\\\"\",\\\"\"fr\\\"\":\\\"\"Données;FGDB/GDB;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A.gdb.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_en.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_fr.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;SHP;eng,fra\\\" ,\\\"\"fr\\\"\":\\\"\"Données;SHP;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_70th_shape.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_English.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_French.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"ESRI REST: Map Server\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Web Service;ESRI REST;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Service Web;ESRI REST;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_en/MapServer/1\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"}]\"\"",
  "contact" : "\\\"\\\"[{\\\\\\\"\\\"country\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\"},\\\\\\\"\\\"address\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"580 Booth Street\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"580 rue Booth\\\\\\\"\\\"},\\\\\\\"\\\"role\\\\\\\"\\\":\\\\\\\"\\\"pointOfContact; contact\\\\\\\"\\\",\\\\\\\"\\\"individual\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"pt\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\"},\\\\\\\"\\\"city\\\\\\\"\\\":\\\\\\\"\\\"Ottawa\\\\\\\"\\\",\\\\\\\"\\\"organisation\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\\\\\\\"\\\"},\\\\\\\"\\\"telephone\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\"},\\\\\\\"\\\"onlineresource\\\\\\\"\\\":{\\\\\\\"\\\"onlineresource\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_description\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_name\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_protocol\\\\\\\"\\\":\\\\\\\"\\\"http\\\\\\\"\\\"},\\\\\\\"\\\"postalcode\\\\\\\"\\\":\\\\\\\"\\\"K1A 0E4\\\\\\\"\\\",\\\\\\\"\\\"hoursofservice\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"position\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"fax\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"email\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\"}}]\\\"\\\"\"",
  "topicCategory" : "economy",
  "date_created_text" : "created",
  "date_created_date" : "2021-02",
  "spatialRepresentation" : "vector; vecteur",
  "type" : "series; série",
  "temporalExtent" : { },
  "refSys" : "EPSG:3978",
  "refSys_version" : "8.9.2",
  "status" : "completed; complété",
  "maintenance" : "annually; annuel",
  "metadataStandard_en" : "North American Profile of ISO 19115:2003 - Geographic information - Metadata",
  "metadataStandard_fr" : "Profil nord-américain de la norme ISO 19115:2003 - Information géographique - Métadonnées",
  "metadataStandardVersion" : "CAN/CGSB-171.100-2009",
  "graphicOverview" : [ [ "\\\"\\\"http//ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/Thumbnail/900A.png\\\"\\\"", null, null, null ] ],
  "distributionFormat_name" : "N/A",
  "distributionFormat_format" : "N/A",
  "useLimits_en" : "Open Government Licence - Canada (http://open.canada.ca/en/open-government-licence-canada)",
  "useLimits_fr" : "Licence du gouvernement ouvert - Canada (http://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada)",
  "accessConstraints" : "license; licence",
  "otherConstraints" : "N/A",
  "dateStamp" : "2021-02-23T20:32:05.000Z",
  "dataSetURI" : "N/A",
  "locale" : { },
  "language" : "eng; CAN",
  "characterSet" : "utf8; utf8",
  "environmentDescription" : "N/A",
  "supplementalInformation_en" : "N/A",
  "supplementalInformation_fr" : "N/A",
  "credits" : [ ],
  "distributor" : [ [ null, [ null, null ], [ "Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\ \"\\\"NRCan.questions.RNCan@canada.ca\\\"\\\"" ], [ null, null, "\\\"\\\"http\\\"\\\"", null ], null, "\\\"\\\"distributor; distributeur\\\"\\\"" ] ]
} ], [ {
  "id" : "000183ed-8864-42f0-ae43-c4313a860720",
  "coordinates" : [ [ [ -141.003, 41.6755 ], [ -52.6174, 41.6755 ], [ -52.6174, 83.1139 ], [ -141.003, 83.1139 ], [ -141.003, 41.6755 ] ] ],
  "title_en" : "Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)",
  "title_fr" : "Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)",
  "description_en" : "This dataset is produced and published annually by Natural Resources Canada. It contains a variety of statistics on Canada’s mineral production, and provides the geographic locations of significant metallic, nonmetallic and coal mines, oil sands mines, selected metallurgical works and gas fields for the provinces and territories of Canada.Related product:- **[Top 100 Exploration Projects](https://open.canada.ca/data/en/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "description_fr" : "Ce jeu de données est produit et publié annuellement par Ressources naturelles Canada. Il contient une variété de statistiques sur la production de minéraux du Canada et montre l’emplacement géographique des principaux champs de gaz, certaines activités métallurgiques, mines de minéraux métalliques, non métalliques et de charbon, et mines de sables bitumineux dans les provinces et les territoires du Canada.Produit connexe:- **[Les 100 principaux projets d'exploration](https://open.canada.ca/data/fr/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "date_published_text" : "published",
  "date_published_date" : "2020-02-27T00:00:00.000Z",
  "keywords_en" : "mineralization, mineral occurrences, mines, hydrocarbons, fossil fuels, industrial minerals, metallic minerals, economic geology, mineral deposits, exploration and deposit appraisal, nonmetallic minerals, oil, gas, hydrocarbons, refineries, smelters, mineral processing, ferroalloy, automobile shredders, Coal, Earth sciences, Oil sands, Recycling, Metals, Minerals, Mining industry, Gas industry, Steel,",
  "keywords_fr" : "minéralisation, indices minéralisés, mines, hydrocarbures, combustibles fossiles, minéraux industriels, minéraux métalliques, géologie économique, gisements minéraux, exploration et mise en valeur de gisements, minéraux non métalliques, pétrole, gaz, hydrocarbures, raffineries, fonderies, traitement des minerais, ferro-alliages, déchiqueteurs d'automobiles, Acier, Industrie gazière, Charbon, Sciences de la terre, Sables bitumineux, Recyclage, Métal, Minerai, Industrie minière",
  "options" : "\"\"[{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;FGDB/GDB;eng,fra\\\"\",\\\"\"fr\\\"\":\\\"\"Données;FGDB/GDB;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A.gdb.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_en.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_fr.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;SHP;eng,fra\\\" ,\\\"\"fr\\\"\":\\\"\"Données;SHP;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_70th_shape.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_English.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_French.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"ESRI REST: Map Server\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Web Service;ESRI REST;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Service Web;ESRI REST;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_en/MapServer/1\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"}]\"\"",
  "contact" : "\\\"\\\"[{\\\\\\\"\\\"country\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\"},\\\\\\\"\\\"address\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"580 Booth Street\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"580 rue Booth\\\\\\\"\\\"},\\\\\\\"\\\"role\\\\\\\"\\\":\\\\\\\"\\\"pointOfContact; contact\\\\\\\"\\\",\\\\\\\"\\\"individual\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"pt\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\"},\\\\\\\"\\\"city\\\\\\\"\\\":\\\\\\\"\\\"Ottawa\\\\\\\"\\\",\\\\\\\"\\\"organisation\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\\\\\\\"\\\"},\\\\\\\"\\\"telephone\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\"},\\\\\\\"\\\"onlineresource\\\\\\\"\\\":{\\\\\\\"\\\"onlineresource\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_description\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_name\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_protocol\\\\\\\"\\\":\\\\\\\"\\\"http\\\\\\\"\\\"},\\\\\\\"\\\"postalcode\\\\\\\"\\\":\\\\\\\"\\\"K1A 0E4\\\\\\\"\\\",\\\\\\\"\\\"hoursofservice\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"position\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"fax\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"email\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\"}}]\\\"\\\"\"",
  "topicCategory" : "economy",
  "date_created_text" : "created",
  "date_created_date" : "2021-02",
  "spatialRepresentation" : "vector; vecteur",
  "type" : "series; série",
  "temporalExtent" : { },
  "refSys" : "EPSG:3978",
  "refSys_version" : "8.9.2",
  "status" : "completed; complété",
  "maintenance" : "annually; annuel",
  "metadataStandard_en" : "North American Profile of ISO 19115:2003 - Geographic information - Metadata",
  "metadataStandard_fr" : "Profil nord-américain de la norme ISO 19115:2003 - Information géographique - Métadonnées",
  "metadataStandardVersion" : "CAN/CGSB-171.100-2009",
  "graphicOverview" : [ [ "\\\"\\\"http//ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/Thumbnail/900A.png\\\"\\\"", null, null, null ] ],
  "distributionFormat_name" : "N/A",
  "distributionFormat_format" : "N/A",
  "useLimits_en" : "Open Government Licence - Canada (http://open.canada.ca/en/open-government-licence-canada)",
  "useLimits_fr" : "Licence du gouvernement ouvert - Canada (http://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada)",
  "accessConstraints" : "license; licence",
  "otherConstraints" : "N/A",
  "dateStamp" : "2021-02-23T20:32:05.000Z",
  "dataSetURI" : "N/A",
  "locale" : { },
  "language" : "eng; CAN",
  "characterSet" : "utf8; utf8",
  "environmentDescription" : "N/A",
  "supplementalInformation_en" : "N/A",
  "supplementalInformation_fr" : "N/A",
  "credits" : [ ],
  "distributor" : [ [ null, [ null, null ], [ "Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\ \"\\\"NRCan.questions.RNCan@canada.ca\\\"\\\"" ], [ null, null, "\\\"\\\"http\\\"\\\"", null ], null, "\\\"\\\"distributor; distributeur\\\"\\\"" ] ]
} ] ]</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Add Metadata to the System / Ajouter des métadonnées au système
        <a href="#new">new</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="update"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /contribute/update</code></pre></div>
    <div class="method-summary">Update Metadata in the system / Mettre à jour les métadonnées dans le système (<span class="nickname">update</span>)</div>
    <div class="method-notes">Update metadata for a specific UUID in the system Requires API Key. / Mettre à jour les métadonnées d'un UUID spécifique dans le système. Nécessite une clé API.</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">uuid (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The UUID of the metadata item where metadata is being updated / L&#x27;UUID de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">coordinates (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The coordinates of the metadata item where metadata is being updated / Les coordonnées de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">title_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The title in english of the metadata item where metadata is being updated / Le titre en anglais de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">title_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The title in french of the metadata item where metadata is being updated / Le titre en français de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">description_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The description in english of the metadata item where metadata is being updated / La description en anglais de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">description_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The description in french of the metadata item where metadata is being updated / La description en français de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">keywords_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The keywords in english of the metadata item where metadata is being updated / Les mots-clés en anglais de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">keywords_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The keywords in french of the metadata item where metadata is being updated / Les mots-clés en français de la rubrique de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">topicCategory (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The Topic Category of the metadata item where metadata is being updated / La catégorie de sujet de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">date_published_text (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The published date text of the metadata item where metadata is being updated / Le texte de la date de publication de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">date_published_date (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The published date date of the metadata item where metadata is being updated / La date de publication date de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">date_created_text (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The created date text of the metadata item where metadata is being updated / Le texte de la date de création de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">date_created_date (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The created date date of the metadata item where metadata is being updated / La date de création date de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">spatialRepresentation (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The spatial representation of the metadata item where metadata is being updated / La représentation spatiale de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">type (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The type of the metadata item where metadata is being updated / Le type de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">geometry (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The geometry of the metadata item where metadata is being updated / La géométrie de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">temporalExtent_begin (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The beginning date of the temporal extent of the metadata item where metadata is being updated / Date de début de l&#x27;étendue temporelle de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">temporalExtent_end (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The end date of the temporal extent of the metadata item where metadata is being updated / La date de fin de l&#x27;étendue temporelle de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">refSys (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The reference system of the metadata item where metadata is being updated / Le système de référence de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">refSys_version (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The reference system version of the metadata item where metadata is being updated / La version du système de référence de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">status (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The status of the metadata item where metadata is being updated / Le statut de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">maintenance (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The maintenance of the metadata item where metadata is being updated / La maintenance de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">metadataStandard_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The metadata standard in english of the metadata item where metadata is being updated / La norme de métadonnées en anglais de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">metadataStandard_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The metadata standard in french of the metadata item where metadata is being updated / Le standard de métadonnées en français de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">metadataStandardVersion (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The metadata standard version of the metadata item where metadata is being updated / La version standard des métadonnées de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">graphicOverview (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The graphic overviews of the metadata item where metadata is being updated / Les aperçus graphiques de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">distributionFormat_name (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The distribution format name of the metadata item where metadata is being updated / Le nom du format de distribution de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">distributionFormat_format (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The distribution format format of the metadata item where metadata is being updated / Le format de format de distribution de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">useLimits_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The use limits in english of the metadata item where metadata is being updated / Les limites d&#x27;utilisation en anglais de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">useLimits_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The use limits in french of the metadata item where metadata is being updated / Les limites d&#x27;utilisation en français de la rubrique de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">accessConstraints (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The access constraints of the metadata item where metadata is being updated / Les contraintes d&#x27;accès de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">otherConstraints_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The other constraints in english of the metadata item where metadata is being updated / Les autres contraintes en anglais de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">otherConstraints_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The other constraints in french of the metadata item where metadata is being updated / Les autres contraintes en français de la rubrique de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">dateStamp (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The date stamp of the metadata item where metadata is being updated / L&#x27;horodatage de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">dataSetURI (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The data set uri of the metadata item where metadata is being updated / L&#x27;URI de l&#x27;ensemble de données de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">locale_language (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The locale language of the metadata item where metadata is being updated / La langue locale de l&#x27;élément de métadonnées dans lequel les métadonnées sont mises à jour </div>      <div class="param">locale_country (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The locale country of the metadata item where metadata is being updated / Le pays local de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">locale_encoding (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The locale encoding of the metadata item where metadata is being updated / Le codage local de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">language (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The language of the metadata item where metadata is being updated / La langue de l&#x27;élément de métadonnées dans lequel les métadonnées sont mises à jour </div>      <div class="param">characterSet (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The characterSet of the metadata item where metadata is being updated / Le jeu de caractères de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">environmentDescription (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The environment description of the metadata item where metadata is being updated / La description de l&#x27;environnement de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">supplementalInformation_en (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The supplemental information in english of the metadata item where metadata is being updated / Les informations supplémentaires en anglais de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">supplementalInformation_fr (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The supplemental information in french of the metadata item where metadata is being updated / Les informations complémentaires en français de la rubrique de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">contact (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The contact array of the metadata item where metadata is being updated / Le tableau de contacts de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">credits (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The credits array of the metadata item where metadata is being updated / Le tableau des crédits de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">cited (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The cited array of the metadata item where metadata is being updated / Le tableau cité de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">distributor (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The distributor array of the metadata item where metadata is being updated / Le tableau de distribution de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">options (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The options array of the metadata item where metadata is being updated / Le tableau d&#x27;options de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>      <div class="param">plugins (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; The plugins array of the metadata item where metadata is being updated / Le tableau de plugins de l&#x27;élément de métadonnées où les métadonnées sont mises à jour </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#update">update</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>[ [ {
  "id" : "000183ed-8864-42f0-ae43-c4313a860720",
  "coordinates" : [ [ [ -141.003, 41.6755 ], [ -52.6174, 41.6755 ], [ -52.6174, 83.1139 ], [ -141.003, 83.1139 ], [ -141.003, 41.6755 ] ] ],
  "title_en" : "Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)",
  "title_fr" : "Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)",
  "description_en" : "This dataset is produced and published annually by Natural Resources Canada. It contains a variety of statistics on Canada’s mineral production, and provides the geographic locations of significant metallic, nonmetallic and coal mines, oil sands mines, selected metallurgical works and gas fields for the provinces and territories of Canada.Related product:- **[Top 100 Exploration Projects](https://open.canada.ca/data/en/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "description_fr" : "Ce jeu de données est produit et publié annuellement par Ressources naturelles Canada. Il contient une variété de statistiques sur la production de minéraux du Canada et montre l’emplacement géographique des principaux champs de gaz, certaines activités métallurgiques, mines de minéraux métalliques, non métalliques et de charbon, et mines de sables bitumineux dans les provinces et les territoires du Canada.Produit connexe:- **[Les 100 principaux projets d'exploration](https://open.canada.ca/data/fr/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "date_published_text" : "published",
  "date_published_date" : "2020-02-27T00:00:00.000Z",
  "keywords_en" : "mineralization, mineral occurrences, mines, hydrocarbons, fossil fuels, industrial minerals, metallic minerals, economic geology, mineral deposits, exploration and deposit appraisal, nonmetallic minerals, oil, gas, hydrocarbons, refineries, smelters, mineral processing, ferroalloy, automobile shredders, Coal, Earth sciences, Oil sands, Recycling, Metals, Minerals, Mining industry, Gas industry, Steel,",
  "keywords_fr" : "minéralisation, indices minéralisés, mines, hydrocarbures, combustibles fossiles, minéraux industriels, minéraux métalliques, géologie économique, gisements minéraux, exploration et mise en valeur de gisements, minéraux non métalliques, pétrole, gaz, hydrocarbures, raffineries, fonderies, traitement des minerais, ferro-alliages, déchiqueteurs d'automobiles, Acier, Industrie gazière, Charbon, Sciences de la terre, Sables bitumineux, Recyclage, Métal, Minerai, Industrie minière",
  "options" : "\"\"[{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;FGDB/GDB;eng,fra\\\"\",\\\"\"fr\\\"\":\\\"\"Données;FGDB/GDB;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A.gdb.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_en.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_fr.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;SHP;eng,fra\\\" ,\\\"\"fr\\\"\":\\\"\"Données;SHP;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_70th_shape.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_English.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_French.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"ESRI REST: Map Server\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Web Service;ESRI REST;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Service Web;ESRI REST;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_en/MapServer/1\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"}]\"\"",
  "contact" : "\\\"\\\"[{\\\\\\\"\\\"country\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\"},\\\\\\\"\\\"address\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"580 Booth Street\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"580 rue Booth\\\\\\\"\\\"},\\\\\\\"\\\"role\\\\\\\"\\\":\\\\\\\"\\\"pointOfContact; contact\\\\\\\"\\\",\\\\\\\"\\\"individual\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"pt\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\"},\\\\\\\"\\\"city\\\\\\\"\\\":\\\\\\\"\\\"Ottawa\\\\\\\"\\\",\\\\\\\"\\\"organisation\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\\\\\\\"\\\"},\\\\\\\"\\\"telephone\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\"},\\\\\\\"\\\"onlineresource\\\\\\\"\\\":{\\\\\\\"\\\"onlineresource\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_description\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_name\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_protocol\\\\\\\"\\\":\\\\\\\"\\\"http\\\\\\\"\\\"},\\\\\\\"\\\"postalcode\\\\\\\"\\\":\\\\\\\"\\\"K1A 0E4\\\\\\\"\\\",\\\\\\\"\\\"hoursofservice\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"position\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"fax\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"email\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\"}}]\\\"\\\"\"",
  "topicCategory" : "economy",
  "date_created_text" : "created",
  "date_created_date" : "2021-02",
  "spatialRepresentation" : "vector; vecteur",
  "type" : "series; série",
  "temporalExtent" : { },
  "refSys" : "EPSG:3978",
  "refSys_version" : "8.9.2",
  "status" : "completed; complété",
  "maintenance" : "annually; annuel",
  "metadataStandard_en" : "North American Profile of ISO 19115:2003 - Geographic information - Metadata",
  "metadataStandard_fr" : "Profil nord-américain de la norme ISO 19115:2003 - Information géographique - Métadonnées",
  "metadataStandardVersion" : "CAN/CGSB-171.100-2009",
  "graphicOverview" : [ [ "\\\"\\\"http//ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/Thumbnail/900A.png\\\"\\\"", null, null, null ] ],
  "distributionFormat_name" : "N/A",
  "distributionFormat_format" : "N/A",
  "useLimits_en" : "Open Government Licence - Canada (http://open.canada.ca/en/open-government-licence-canada)",
  "useLimits_fr" : "Licence du gouvernement ouvert - Canada (http://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada)",
  "accessConstraints" : "license; licence",
  "otherConstraints" : "N/A",
  "dateStamp" : "2021-02-23T20:32:05.000Z",
  "dataSetURI" : "N/A",
  "locale" : { },
  "language" : "eng; CAN",
  "characterSet" : "utf8; utf8",
  "environmentDescription" : "N/A",
  "supplementalInformation_en" : "N/A",
  "supplementalInformation_fr" : "N/A",
  "credits" : [ ],
  "distributor" : [ [ null, [ null, null ], [ "Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\ \"\\\"NRCan.questions.RNCan@canada.ca\\\"\\\"" ], [ null, null, "\\\"\\\"http\\\"\\\"", null ], null, "\\\"\\\"distributor; distributeur\\\"\\\"" ] ]
} ], [ {
  "id" : "000183ed-8864-42f0-ae43-c4313a860720",
  "coordinates" : [ [ [ -141.003, 41.6755 ], [ -52.6174, 41.6755 ], [ -52.6174, 83.1139 ], [ -141.003, 83.1139 ], [ -141.003, 41.6755 ] ] ],
  "title_en" : "Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)",
  "title_fr" : "Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)",
  "description_en" : "This dataset is produced and published annually by Natural Resources Canada. It contains a variety of statistics on Canada’s mineral production, and provides the geographic locations of significant metallic, nonmetallic and coal mines, oil sands mines, selected metallurgical works and gas fields for the provinces and territories of Canada.Related product:- **[Top 100 Exploration Projects](https://open.canada.ca/data/en/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "description_fr" : "Ce jeu de données est produit et publié annuellement par Ressources naturelles Canada. Il contient une variété de statistiques sur la production de minéraux du Canada et montre l’emplacement géographique des principaux champs de gaz, certaines activités métallurgiques, mines de minéraux métalliques, non métalliques et de charbon, et mines de sables bitumineux dans les provinces et les territoires du Canada.Produit connexe:- **[Les 100 principaux projets d'exploration](https://open.canada.ca/data/fr/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "date_published_text" : "published",
  "date_published_date" : "2020-02-27T00:00:00.000Z",
  "keywords_en" : "mineralization, mineral occurrences, mines, hydrocarbons, fossil fuels, industrial minerals, metallic minerals, economic geology, mineral deposits, exploration and deposit appraisal, nonmetallic minerals, oil, gas, hydrocarbons, refineries, smelters, mineral processing, ferroalloy, automobile shredders, Coal, Earth sciences, Oil sands, Recycling, Metals, Minerals, Mining industry, Gas industry, Steel,",
  "keywords_fr" : "minéralisation, indices minéralisés, mines, hydrocarbures, combustibles fossiles, minéraux industriels, minéraux métalliques, géologie économique, gisements minéraux, exploration et mise en valeur de gisements, minéraux non métalliques, pétrole, gaz, hydrocarbures, raffineries, fonderies, traitement des minerais, ferro-alliages, déchiqueteurs d'automobiles, Acier, Industrie gazière, Charbon, Sciences de la terre, Sables bitumineux, Recyclage, Métal, Minerai, Industrie minière",
  "options" : "\"\"[{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;FGDB/GDB;eng,fra\\\"\",\\\"\"fr\\\"\":\\\"\"Données;FGDB/GDB;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A.gdb.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_en.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_fr.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;SHP;eng,fra\\\" ,\\\"\"fr\\\"\":\\\"\"Données;SHP;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_70th_shape.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_English.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_French.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"ESRI REST: Map Server\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Web Service;ESRI REST;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Service Web;ESRI REST;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_en/MapServer/1\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"}]\"\"",
  "contact" : "\\\"\\\"[{\\\\\\\"\\\"country\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\"},\\\\\\\"\\\"address\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"580 Booth Street\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"580 rue Booth\\\\\\\"\\\"},\\\\\\\"\\\"role\\\\\\\"\\\":\\\\\\\"\\\"pointOfContact; contact\\\\\\\"\\\",\\\\\\\"\\\"individual\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"pt\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\"},\\\\\\\"\\\"city\\\\\\\"\\\":\\\\\\\"\\\"Ottawa\\\\\\\"\\\",\\\\\\\"\\\"organisation\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\\\\\\\"\\\"},\\\\\\\"\\\"telephone\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\"},\\\\\\\"\\\"onlineresource\\\\\\\"\\\":{\\\\\\\"\\\"onlineresource\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_description\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_name\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_protocol\\\\\\\"\\\":\\\\\\\"\\\"http\\\\\\\"\\\"},\\\\\\\"\\\"postalcode\\\\\\\"\\\":\\\\\\\"\\\"K1A 0E4\\\\\\\"\\\",\\\\\\\"\\\"hoursofservice\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"position\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"fax\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"email\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\"}}]\\\"\\\"\"",
  "topicCategory" : "economy",
  "date_created_text" : "created",
  "date_created_date" : "2021-02",
  "spatialRepresentation" : "vector; vecteur",
  "type" : "series; série",
  "temporalExtent" : { },
  "refSys" : "EPSG:3978",
  "refSys_version" : "8.9.2",
  "status" : "completed; complété",
  "maintenance" : "annually; annuel",
  "metadataStandard_en" : "North American Profile of ISO 19115:2003 - Geographic information - Metadata",
  "metadataStandard_fr" : "Profil nord-américain de la norme ISO 19115:2003 - Information géographique - Métadonnées",
  "metadataStandardVersion" : "CAN/CGSB-171.100-2009",
  "graphicOverview" : [ [ "\\\"\\\"http//ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/Thumbnail/900A.png\\\"\\\"", null, null, null ] ],
  "distributionFormat_name" : "N/A",
  "distributionFormat_format" : "N/A",
  "useLimits_en" : "Open Government Licence - Canada (http://open.canada.ca/en/open-government-licence-canada)",
  "useLimits_fr" : "Licence du gouvernement ouvert - Canada (http://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada)",
  "accessConstraints" : "license; licence",
  "otherConstraints" : "N/A",
  "dateStamp" : "2021-02-23T20:32:05.000Z",
  "dataSetURI" : "N/A",
  "locale" : { },
  "language" : "eng; CAN",
  "characterSet" : "utf8; utf8",
  "environmentDescription" : "N/A",
  "supplementalInformation_en" : "N/A",
  "supplementalInformation_fr" : "N/A",
  "credits" : [ ],
  "distributor" : [ [ null, [ null, null ], [ "Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\ \"\\\"NRCan.questions.RNCan@canada.ca\\\"\\\"" ], [ null, null, "\\\"\\\"http\\\"\\\"", null ], null, "\\\"\\\"distributor; distributeur\\\"\\\"" ] ]
} ] ]</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    The metadata ipdated information associated with an UUID / Les informations actualisées des métadonnées associées à un UUID
        <a href="#update">update</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <h1><a name="Save / Sauvegarder">Save / Sauvegarder</a></h1>
  <div class="method"><a name="addSavedRecord"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /saved_records/add</code></pre></div>
    <div class="method-summary">Save a record for an user / Enregistrer un enregistrement pour un utilisateur (<span class="nickname">addSavedRecord</span>)</div>
    <div class="method-notes">Save a record for an user / Enregistrer un enregistrement pour un utilisateur</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">userId (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; user Id of the user the data is being added to. / ID utilisateur de l&#x27;utilisateur auquel les données sont ajoutées. </div>      <div class="param">uuid (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; uuid of the data that is being added to the system / uuid des données ajoutées au système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#saved_record_add">saved_record_add</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "userId" : "userId",
  "uuid" : "uuid"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Save a record for an user / Enregistrer un enregistrement pour un utilisateur
        <a href="#saved_record_add">saved_record_add</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="addSavedSearch"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /saved_search/add</code></pre></div>
    <div class="method-summary">Add saved search for a user to the system / Ajouter une recherche enregistrée pour un utilisateur au système (<span class="nickname">addSavedSearch</span>)</div>
    <div class="method-notes">Add saved search for a user to the system / Ajouter une recherche enregistrée pour un utilisateur au système</div>


    <h3 class="field-label">Consumes</h3>
    This API call consumes the following media types via the <span class="header">Content-Type</span> request header:
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Request body</h3>
    <div class="field-items">
      <div class="param">body <a href="#saved_search_add_inner">saved_search_add_inner</a> (optional)</div>
      
            <div class="param-desc"><span class="param-type">Body Parameter</span> &mdash; Add saved search for a user to the system / Ajouter une recherche enregistrée pour un utilisateur au système </div>
                </div>  <!-- field-items -->

    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">search (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record search term used / Enregistrement du terme de recherche utilisé </div>      <div class="param">theme (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record theme filter used / Enregistrer le filtre thématique utilisé </div>      <div class="param">filter (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record type filter used / Filtre de type d&#x27;enregistrement utilisé </div>      <div class="param">geo (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record geospatial bounding box used for search / Enregistrer la zone de délimitation géospatiale utilisée pour la recherche </div>      <div class="param">uuid (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record the UUID of accessed resource data / Enregistrer l&#x27;UUID des données accédées </div>      <div class="param">lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record language of event / Enregistrer la langue de l&#x27;événement </div>      <div class="param">org (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record organisation of accessed data / Organisation de l&#x27;enregistrement des données consultées </div>      <div class="param">foundational (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record if dataset is foundational / Enregistrer si l&#x27;ensemble de données est fondamental </div>      <div class="param">type_filter (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Record if type filter was used / Enregistrer si le filtre de type a été utilisé </div>    </div>  <!-- field-items -->



    <!--Todo: process Response Object and its headers, schema, examples -->



    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">201</h4>
    Add saved search for a user to the system / Ajouter une recherche enregistrée pour un utilisateur au système
        <a href="#"></a>
    <h4 class="field-label">400</h4>
    invalid input, object invalid
        <a href="#"></a>
    <h4 class="field-label">409</h4>
    an existing item already exists
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="deleteSavedRecord"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /saved_records/delete</code></pre></div>
    <div class="method-summary">Delete a saved a record for an user / Supprimer un enregistrement enregistré pour un utilisateur (<span class="nickname">deleteSavedRecord</span>)</div>
    <div class="method-notes">Delete a saved a record for an user / Supprimer un enregistrement enregistré pour un utilisateur</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">key (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; key of the saved record that is to be deleted / clé de l&#x27;enregistrement sauvegardé qui doit être supprimé </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#saved_record_delete">saved_record_delete</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "key" : "key"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Delete a saved a record for an user / Supprimer un enregistrement enregistré pour un utilisateur
        <a href="#saved_record_delete">saved_record_delete</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="deleteSavedSearch"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /saved_search/delete</code></pre></div>
    <div class="method-summary">Delete a saved a search for an user / Supprimer une recherche enregistrée pour un utilisateur (<span class="nickname">deleteSavedSearch</span>)</div>
    <div class="method-notes">Delete a saved a search for an user / Supprimer une recherche enregistrée pour un utilisateur</div>




    <h3 class="field-label">Request headers</h3>
    <div class="field-items">
    </div>  <!-- field-items -->

    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">key (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; key of the saved search that is to be deleted / clé de la recherche enregistrée à supprimer </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#saved_search_delete">saved_search_delete</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "key" : "key"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Delete a saved a search for an user / Supprimer une recherche enregistrée pour un utilisateur
        <a href="#saved_search_delete">saved_search_delete</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="getSavedRecord"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /saved_records/get</code></pre></div>
    <div class="method-summary">Get saved records for an user / Obtenir des enregistrements enregistrés pour un utilisateur (<span class="nickname">getSavedRecord</span>)</div>
    <div class="method-notes">Get saved records for an user / Obtenir des enregistrements enregistrés pour un utilisateurr</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">uuid (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; uuid of the data that is being added to the system / uuid des données ajoutées au système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#saved_record_get">saved_record_get</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "userId" : "userId"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Get saved records for an user / Obtenir des enregistrements enregistrés pour un utilisateur
        <a href="#saved_record_get">saved_record_get</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="getSavedSearch"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /saved_search/get</code></pre></div>
    <div class="method-summary">Get saved search for an user / Obtenir une recherche enregistrée pour un utilisateur (<span class="nickname">getSavedSearch</span>)</div>
    <div class="method-notes">Get saved search for an user / Obtenir une recherche enregistrée pour un utilisateur</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">uuid (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; uuid of the data that is being added to the system / uuid des données ajoutées au système </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#saved_search_get">saved_search_get</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "userId" : "userId"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Get saved search for an user / Obtenir une recherche enregistrée pour un utilisateur
        <a href="#saved_search_get">saved_search_get</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <h1><a name="Search / Recherche">Search / Recherche</a></h1>
  <div class="method"><a name="featured"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /featured</code></pre></div>
    <div class="method-summary">Query Featured Datasets / Interroger les jeux de données en vedette (<span class="nickname">featured</span>)</div>
    <div class="method-notes">Query datasets that have been tagged as Featured / Interroger les ensembles de données qui ont été étiquetés comme &quot;Featured&quot;.</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Language of result / Langue du résultat </div>      <div class="param">theme (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Theme filtering is based on the standard theme list of the CGP. You can pass one or many values to the API by separating the theme code with a comma. E.g. “administration, legal, society”. The following codes can be used - administration, economy, environment, imagery, infrastructure, science, society, legal, and emergency. / Le filtrage des thèmes est basé sur la liste de thèmes standard du CGP. Vous pouvez transmettre une ou plusieurs valeurs à l&#x27;API en séparant le code du thème par une virgule. Par exemple, administration, juridique, société. Les codes suivants peuvent être utilisés - administration, économie, environnement, imagerie, infrastructure, science, société, juridique et urgence. </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#featured">featured</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>[ [ {
  "id" : "000183ed-8864-42f0-ae43-c4313a860720",
  "coordinates" : [ [ [ -141.003, 41.6755 ], [ -52.6174, 41.6755 ], [ -52.6174, 83.1139 ], [ -141.003, 83.1139 ], [ -141.003, 41.6755 ] ] ],
  "title" : "Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)",
  "description" : "This dataset is produced and published annually by Natural Resources Canada. It contains a variety of statistics on Canada’s mineral production, and provides the geographic locations of significant metallic, nonmetallic and coal mines, oil sands mines, selected metallurgical works and gas fields for the provinces and territories of Canada.Related product:- **[Top 100 Exploration Projects](https://open.canada.ca/data/en/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "published" : "2020-02-27T00:00:00.000Z",
  "keywords" : "mineralization, mineral occurrences, mines, hydrocarbons, fossil fuels, industrial minerals, metallic minerals, economic geology, mineral deposits, exploration and deposit appraisal, nonmetallic minerals, oil, gas, hydrocarbons, refineries, smelters, mineral processing, ferroalloy, automobile shredders, Coal, Earth sciences, Oil sands, Recycling, Metals, Minerals, Mining industry, Gas industry, Steel,",
  "options" : "\"\"[{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;FGDB/GDB;eng,fra\\\"\",\\\"\"fr\\\"\":\\\"\"Données;FGDB/GDB;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A.gdb.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_en.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_fr.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;SHP;eng,fra\\\" ,\\\"\"fr\\\"\":\\\"\"Données;SHP;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_70th_shape.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_English.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_French.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"ESRI REST: Map Server\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Web Service;ESRI REST;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Service Web;ESRI REST;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_en/MapServer/1\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"}]\"\"",
  "contact" : "\\\"\\\"[{\\\\\\\"\\\"country\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\"},\\\\\\\"\\\"address\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"580 Booth Street\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"580 rue Booth\\\\\\\"\\\"},\\\\\\\"\\\"role\\\\\\\"\\\":\\\\\\\"\\\"pointOfContact; contact\\\\\\\"\\\",\\\\\\\"\\\"individual\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"pt\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\"},\\\\\\\"\\\"city\\\\\\\"\\\":\\\\\\\"\\\"Ottawa\\\\\\\"\\\",\\\\\\\"\\\"organisation\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\\\\\\\"\\\"},\\\\\\\"\\\"telephone\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\"},\\\\\\\"\\\"onlineresource\\\\\\\"\\\":{\\\\\\\"\\\"onlineresource\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_description\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_name\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_protocol\\\\\\\"\\\":\\\\\\\"\\\"http\\\\\\\"\\\"},\\\\\\\"\\\"postalcode\\\\\\\"\\\":\\\\\\\"\\\"K1A 0E4\\\\\\\"\\\",\\\\\\\"\\\"hoursofservice\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"position\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"fax\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"email\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\"}}]\\\"\\\"\"",
  "created" : "2021-02",
  "spatialRepresentation" : "vector; vecteur",
  "type" : "series; série",
  "temporalExtent" : { },
  "graphicOverview" : [ [ "\\\"\\\"http//ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/Thumbnail/900A.png\\\"\\\"", null, null, null ] ],
  "language" : "eng; CAN"
} ], [ {
  "id" : "000183ed-8864-42f0-ae43-c4313a860720",
  "coordinates" : [ [ [ -141.003, 41.6755 ], [ -52.6174, 41.6755 ], [ -52.6174, 83.1139 ], [ -141.003, 83.1139 ], [ -141.003, 41.6755 ] ] ],
  "title" : "Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)",
  "description" : "This dataset is produced and published annually by Natural Resources Canada. It contains a variety of statistics on Canada’s mineral production, and provides the geographic locations of significant metallic, nonmetallic and coal mines, oil sands mines, selected metallurgical works and gas fields for the provinces and territories of Canada.Related product:- **[Top 100 Exploration Projects](https://open.canada.ca/data/en/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "published" : "2020-02-27T00:00:00.000Z",
  "keywords" : "mineralization, mineral occurrences, mines, hydrocarbons, fossil fuels, industrial minerals, metallic minerals, economic geology, mineral deposits, exploration and deposit appraisal, nonmetallic minerals, oil, gas, hydrocarbons, refineries, smelters, mineral processing, ferroalloy, automobile shredders, Coal, Earth sciences, Oil sands, Recycling, Metals, Minerals, Mining industry, Gas industry, Steel,",
  "options" : "\"\"[{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;FGDB/GDB;eng,fra\\\"\",\\\"\"fr\\\"\":\\\"\"Données;FGDB/GDB;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A.gdb.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_en.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_fr.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;SHP;eng,fra\\\" ,\\\"\"fr\\\"\":\\\"\"Données;SHP;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_70th_shape.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_English.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_French.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"ESRI REST: Map Server\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Web Service;ESRI REST;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Service Web;ESRI REST;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_en/MapServer/1\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"}]\"\"",
  "contact" : "\\\"\\\"[{\\\\\\\"\\\"country\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\"},\\\\\\\"\\\"address\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"580 Booth Street\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"580 rue Booth\\\\\\\"\\\"},\\\\\\\"\\\"role\\\\\\\"\\\":\\\\\\\"\\\"pointOfContact; contact\\\\\\\"\\\",\\\\\\\"\\\"individual\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"pt\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\"},\\\\\\\"\\\"city\\\\\\\"\\\":\\\\\\\"\\\"Ottawa\\\\\\\"\\\",\\\\\\\"\\\"organisation\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\\\\\\\"\\\"},\\\\\\\"\\\"telephone\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\"},\\\\\\\"\\\"onlineresource\\\\\\\"\\\":{\\\\\\\"\\\"onlineresource\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_description\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_name\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_protocol\\\\\\\"\\\":\\\\\\\"\\\"http\\\\\\\"\\\"},\\\\\\\"\\\"postalcode\\\\\\\"\\\":\\\\\\\"\\\"K1A 0E4\\\\\\\"\\\",\\\\\\\"\\\"hoursofservice\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"position\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"fax\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"email\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\"}}]\\\"\\\"\"",
  "created" : "2021-02",
  "spatialRepresentation" : "vector; vecteur",
  "type" : "series; série",
  "temporalExtent" : { },
  "graphicOverview" : [ [ "\\\"\\\"http//ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/Thumbnail/900A.png\\\"\\\"", null, null, null ] ],
  "language" : "eng; CAN"
} ] ]</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    The metadata associated with foundational datasets / Les métadonnées associées aux ensembles de données fondamentales
        <a href="#featured">featured</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="foundational"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /foundational</code></pre></div>
    <div class="method-summary">Query Foundational Datasets / Interroger les ensembles de données de base (<span class="nickname">foundational</span>)</div>
    <div class="method-notes">Query datasets that have been tagged as Foundational / Interroger les ensembles de données qui ont été étiquetés comme fondateurs.</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Language of result / Langue du résultat </div>      <div class="param">theme (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Theme filtering is based on the standard theme list of the CGP. You can pass one or many values to the API by separating the theme code with a comma. E.g. “administration, legal, society”. The following codes can be used - administration, economy, environment, imagery, infrastructure, science, society, legal, and emergency. / Le filtrage des thèmes est basé sur la liste de thèmes standard du CGP. Vous pouvez transmettre une ou plusieurs valeurs à l&#x27;API en séparant le code du thème par une virgule. Par exemple, administration, juridique, société. Les codes suivants peuvent être utilisés - administration, économie, environnement, imagerie, infrastructure, science, société, juridique et urgence. </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#foundational">foundational</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>[ [ {
  "id" : "000183ed-8864-42f0-ae43-c4313a860720",
  "coordinates" : [ [ [ -141.003, 41.6755 ], [ -52.6174, 41.6755 ], [ -52.6174, 83.1139 ], [ -141.003, 83.1139 ], [ -141.003, 41.6755 ] ] ],
  "title" : "Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)",
  "description" : "This dataset is produced and published annually by Natural Resources Canada. It contains a variety of statistics on Canada’s mineral production, and provides the geographic locations of significant metallic, nonmetallic and coal mines, oil sands mines, selected metallurgical works and gas fields for the provinces and territories of Canada.Related product:- **[Top 100 Exploration Projects](https://open.canada.ca/data/en/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "published" : "2020-02-27T00:00:00.000Z",
  "keywords" : "mineralization, mineral occurrences, mines, hydrocarbons, fossil fuels, industrial minerals, metallic minerals, economic geology, mineral deposits, exploration and deposit appraisal, nonmetallic minerals, oil, gas, hydrocarbons, refineries, smelters, mineral processing, ferroalloy, automobile shredders, Coal, Earth sciences, Oil sands, Recycling, Metals, Minerals, Mining industry, Gas industry, Steel,",
  "options" : "\"\"[{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;FGDB/GDB;eng,fra\\\"\",\\\"\"fr\\\"\":\\\"\"Données;FGDB/GDB;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A.gdb.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_en.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_fr.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;SHP;eng,fra\\\" ,\\\"\"fr\\\"\":\\\"\"Données;SHP;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_70th_shape.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_English.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_French.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"ESRI REST: Map Server\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Web Service;ESRI REST;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Service Web;ESRI REST;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_en/MapServer/1\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"}]\"\"",
  "contact" : "\\\"\\\"[{\\\\\\\"\\\"country\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\"},\\\\\\\"\\\"address\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"580 Booth Street\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"580 rue Booth\\\\\\\"\\\"},\\\\\\\"\\\"role\\\\\\\"\\\":\\\\\\\"\\\"pointOfContact; contact\\\\\\\"\\\",\\\\\\\"\\\"individual\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"pt\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\"},\\\\\\\"\\\"city\\\\\\\"\\\":\\\\\\\"\\\"Ottawa\\\\\\\"\\\",\\\\\\\"\\\"organisation\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\\\\\\\"\\\"},\\\\\\\"\\\"telephone\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\"},\\\\\\\"\\\"onlineresource\\\\\\\"\\\":{\\\\\\\"\\\"onlineresource\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_description\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_name\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_protocol\\\\\\\"\\\":\\\\\\\"\\\"http\\\\\\\"\\\"},\\\\\\\"\\\"postalcode\\\\\\\"\\\":\\\\\\\"\\\"K1A 0E4\\\\\\\"\\\",\\\\\\\"\\\"hoursofservice\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"position\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"fax\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"email\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\"}}]\\\"\\\"\"",
  "created" : "2021-02",
  "spatialRepresentation" : "vector; vecteur",
  "type" : "series; série",
  "temporalExtent" : { },
  "graphicOverview" : [ [ "\\\"\\\"http//ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/Thumbnail/900A.png\\\"\\\"", null, null, null ] ],
  "language" : "eng; CAN"
} ], [ {
  "id" : "000183ed-8864-42f0-ae43-c4313a860720",
  "coordinates" : [ [ [ -141.003, 41.6755 ], [ -52.6174, 41.6755 ], [ -52.6174, 83.1139 ], [ -141.003, 83.1139 ], [ -141.003, 41.6755 ] ] ],
  "title" : "Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)",
  "description" : "This dataset is produced and published annually by Natural Resources Canada. It contains a variety of statistics on Canada’s mineral production, and provides the geographic locations of significant metallic, nonmetallic and coal mines, oil sands mines, selected metallurgical works and gas fields for the provinces and territories of Canada.Related product:- **[Top 100 Exploration Projects](https://open.canada.ca/data/en/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "published" : "2020-02-27T00:00:00.000Z",
  "keywords" : "mineralization, mineral occurrences, mines, hydrocarbons, fossil fuels, industrial minerals, metallic minerals, economic geology, mineral deposits, exploration and deposit appraisal, nonmetallic minerals, oil, gas, hydrocarbons, refineries, smelters, mineral processing, ferroalloy, automobile shredders, Coal, Earth sciences, Oil sands, Recycling, Metals, Minerals, Mining industry, Gas industry, Steel,",
  "options" : "\"\"[{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;FGDB/GDB;eng,fra\\\"\",\\\"\"fr\\\"\":\\\"\"Données;FGDB/GDB;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A.gdb.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_en.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_fr.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;SHP;eng,fra\\\" ,\\\"\"fr\\\"\":\\\"\"Données;SHP;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_70th_shape.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_English.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_French.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"ESRI REST: Map Server\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Web Service;ESRI REST;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Service Web;ESRI REST;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_en/MapServer/1\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"}]\"\"",
  "contact" : "\\\"\\\"[{\\\\\\\"\\\"country\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\"},\\\\\\\"\\\"address\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"580 Booth Street\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"580 rue Booth\\\\\\\"\\\"},\\\\\\\"\\\"role\\\\\\\"\\\":\\\\\\\"\\\"pointOfContact; contact\\\\\\\"\\\",\\\\\\\"\\\"individual\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"pt\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\"},\\\\\\\"\\\"city\\\\\\\"\\\":\\\\\\\"\\\"Ottawa\\\\\\\"\\\",\\\\\\\"\\\"organisation\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\\\\\\\"\\\"},\\\\\\\"\\\"telephone\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\"},\\\\\\\"\\\"onlineresource\\\\\\\"\\\":{\\\\\\\"\\\"onlineresource\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_description\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_name\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_protocol\\\\\\\"\\\":\\\\\\\"\\\"http\\\\\\\"\\\"},\\\\\\\"\\\"postalcode\\\\\\\"\\\":\\\\\\\"\\\"K1A 0E4\\\\\\\"\\\",\\\\\\\"\\\"hoursofservice\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"position\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"fax\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"email\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\"}}]\\\"\\\"\"",
  "created" : "2021-02",
  "spatialRepresentation" : "vector; vecteur",
  "type" : "series; série",
  "temporalExtent" : { },
  "graphicOverview" : [ [ "\\\"\\\"http//ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/Thumbnail/900A.png\\\"\\\"", null, null, null ] ],
  "language" : "eng; CAN"
} ] ]</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    The metadata associated with foundational datasets / Les métadonnées associées aux ensembles de données fondamentales
        <a href="#foundational">foundational</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="geo"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /geo</code></pre></div>
    <div class="method-summary">Geospatial and Keyword Search / Recherche géospatiale et par mots-clés (<span class="nickname">geo</span>)</div>
    <div class="method-notes">The API will take the keyword parameter and query the metadata fields applicable for keyword search. If the geospatial search is selected, the results are then ran through a geospatial intersect query based on the bounding box created from the north, east, south, and west parameters. The results returned are all metadata records containing the keyword that intersect with the bounding box. The result is an array of JSON objects. The API is bilingual, and passing the parameter of lang of en or fr will return the appropriate results. To support pagination, the API will now accept a min and max number for number of rows to start at or end at. By default, the data is returned for the first 10 rows, if you would like to request the next ten results, set min to 11 and max to 21. You must provide a number for both min and max to be provided accurate results.Theme filtering is now available based on the standard theme list of the CGP. You can pass one or many values to the API by separating the theme code with a comma. E.g. “administration, legal, society”. In this version, the total count for the number of rows is available in the return as “total”. This was created to enable pagination.Organisation filtering is now available based on the following value list. You can pass one or many values to the API by separating the values with a “|”. E.g. - “Canadian Space Agency|National Defence”. Type filtering is now available based on the following value list. You can pass one or many values to the API by separating the values with a “|”. E.g. - “Dataset|Collection”. Foundational filtering is now available. By passing “true” to the API only results for the query that have been tagged as a foundational layer will be returned. / L'API prendra le paramètre du mot-clé et interrogera les champs de métadonnées applicables à la recherche par mot-clé. Si la recherche géospatiale est sélectionnée, les résultats sont ensuite soumis à une requête d'intersection géospatiale basée sur le rectangle de délimitation créé à partir des paramètres nord, est, sud et ouest. Les résultats renvoyés sont tous les enregistrements de métadonnées contenant le mot-clé qui se croisent avec le rectangle de délimitation. Le résultat est un tableau d'objets JSON. L'API est bilingue, et le fait de passer le paramètre de langue en ou fr renverra les résultats appropriés. Pour prendre en charge la pagination, l'API accepte désormais un nombre minimal et maximal de lignes pour le nombre de lignes de départ ou de fin. Par défaut, les données sont renvoyées pour les 10 premières lignes, si vous souhaitez demander les dix résultats suivants, définissez min à 11 et max à 21. Vous devez fournir un nombre à la fois pour min et max pour obtenir des résultats précis.Le filtrage par thème est maintenant disponible sur la base de la liste de thèmes standard du CGP. Vous pouvez transmettre une ou plusieurs valeurs à l'API en séparant le code du thème par une virgule. Par exemple, &quot;administration, juridique, société&quot;. Dans cette version, le compte total pour le nombre de lignes est disponible dans le retour comme &quot;total&quot;. Le filtrage des organisations est maintenant disponible sur la base de la liste de valeurs suivante. Vous pouvez passer une ou plusieurs valeurs à l'API en séparant les valeurs par un &quot;|&quot;. Par exemple : &quot;Agence spatiale canadienne|Défense nationale&quot;. Le filtrage par type est désormais disponible sur la base de la liste de valeurs suivante. Vous pouvez transmettre une ou plusieurs valeurs à l'API en les séparant par un &quot;|&quot;. Par exemple : &quot;Dataset|Collection&quot;. Le filtrage fondamental est désormais disponible. En passant &quot;true&quot; à l'API, seuls les résultats de la requête qui ont été étiquetés comme couche de base seront renvoyés.</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">keyword_only (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; For keyword only searches, pass the value of true or false / Pour les recherches par mot-clé uniquement, passez la valeur true ou false. </div>      <div class="param">keyword (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Keyword used for querying / Mot clé utilisé pour l&#x27;interrogation </div>      <div class="param">lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Language of result / Langue du résultat </div>      <div class="param">min (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Minimum row number for returned results / Nombre minimal de lignes pour les résultats retournés </div>      <div class="param">max (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Maximum row number for returned results / Nombre maximal de lignes pour les résultats retournés </div>      <div class="param">theme (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Theme filtering is based on the standard theme list of the CGP. You can pass one or many values to the API by separating the theme code with a comma. E.g. “administration, legal, society”. The following codes can be used - administration, economy, environment, imagery, infrastructure, science, society, legal, and emergency. / Le filtrage des thèmes est basé sur la liste de thèmes standard du CGP. Vous pouvez transmettre une ou plusieurs valeurs à l&#x27;API en séparant le code du thème par une virgule. Par exemple, administration, juridique, société. Les codes suivants peuvent être utilisés - administration, économie, environnement, imagerie, infrastructure, science, société, juridique et urgence. </div>      <div class="param">org (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Organisation filtering is now available based on the following value list. You can pass one or many values to the API by separating the values with a “|”. E.g. - “Canadian Space Agency|National Defence”.The following are the codes for organisations - Agriculture and Agri-Food Canada, Canadian Food Inspection Agency, Canadian Northern Economic Development Agency, Canadian Nuclear Safety Commission, Canadian Space Agency, Crown-Indigenous Relations and Northern Affairs Canada, Elections Canada, Employment and Social Development Canada, Environment and Climate Change Canada, Fisheries and Oceans Canada, Government of Alberta, Government of British Columbia, Government of Manitoba, Government and Municipalities of Quebec, Government of New Brunswick, Government of Newfoundland and Labrador, Government of Northwest territories, Government of Nova Scotia, Government of Nunavut, Government of Ontario, Government of Prince Edward Island, Government of Saskatchewan, Government of Yukon, Health Canada, Impact Assessment Agency of Canada, National Defence, National Research Council Canada, Natural Resources Canada, Parks Canada, Public Health Agency of Canada, Public Safety Canada, Statistics Canada, Transport Canada, Veterans Affairs / Le filtrage des organisations est désormais disponible sur la base de la liste de valeurs suivante. Vous pouvez transmettre une ou plusieurs valeurs à l&#x27;API en les séparant par un &amp;quot;|&amp;quot;. Voici les codes des organisations - Agence canadienne d&#x27;inspection des aliments, Agence Canadienne de Développement économique du Nord, Agence d&#x27;évaluation d&#x27;impact du Canada, Agence de la santé publique du Canada, Agence spatiale canadienne, Agriculture et Agroalimentaire Canada, Anciens combattants, Commission canadienne de sûreté nucléaire, Conseil national de recherches du Canada, Défense nationale, Élections Canada, Emploi et Développement social Canada, Environnement et Changement climatique Canada, Gouvernement de l&#x27;Alberta, Gouvernement de l&#x27;Île-du-Prince-Édouard, Gouvernement de l&#x27;Ontario, Gouvernement de la Colombie-Britannique, Gouvernement de la Nouvelle-Écosse, Gouvernement de la Saskatchewan, Gouvernement de Terre-Neuve et du Labrador, Gouvernement des Territoires du Nord-Ouest, Gouvernement du Manitoba, Gouvernement du Nouveau-Brunswick, Gouvernement du Nunavut, Gouvernement du Yukon, Gouvernement et municipalités du Québec, Parcs Canada, Pêches et Océans Canada, Relations Couronne-Autochtones et Affaires du Nord Canada, Ressources naturelles Canada, Santé Canada, Sécurité publique Canada, Statistique Canada, Transports Canada. </div>      <div class="param">type (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Type filtering is based on the following value list. You can pass one or many values to the API by separating the values with a “|”. E.g. - “Dataset|Collection”. The following are the codes for type - Dataset, Collection, Application, API, Community, Service. / Le filtrage des types est basé sur la liste de valeurs suivante. Vous pouvez transmettre une ou plusieurs valeurs à l&#x27;API en séparant les valeurs par un &amp;quot;|&amp;quot;. Par exemple, &amp;quot;Dataset|Collection&amp;quot;. Voici les codes pour le type - Ensemble de données, Collection, Application, API, Communauté, Service. </div>      <div class="param">foundational (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; By passing “true” to the API only results for the query that have been tagged as a foundational layer will be returned. / En passant &amp;quot;true&amp;quot; à l&#x27;API, seuls les résultats de la requête qui ont été marqués comme couche de base seront retournés. </div>      <div class="param">north (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Northern Bounding Box - Required if keyword_only is false / Boîte englobante du nord - Requis si keyword_only est false </div>      <div class="param">east (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Eastern Bounding Box - Required if keyword_only is false / Boîte de délimitation de l&#x27;Est - Requis si keyword_only est false </div>      <div class="param">south (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Southern Bounding Box - Required if keyword_only is false  / Boîte de délimitation sud - Requis si keyword_only est false </div>      <div class="param">west (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Western Bounding Box - Required if keyword_only is false  / Boîte d&#x27;encerclement ouest - Requis si keyword_only est false </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#search">search</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>[ [ {
  "row_num" : 5,
  "id" : "fedfaa95-2370-4df9-ac19-9ee3f188e0ca",
  "coordinates" : [ [ [ -139.23618, 47.576862 ], [ -110.34537, 47.576862 ], [ -110.34537, 60.61815 ], [ -139.23618, 60.61815 ], [ -139.23618, 47.576862 ] ] ],
  "title" : "BCGS 1:10,000 Grid",
  "description" : "BCGS 1:10,000 scale grid. The British Columbia Geographic System is a geographic system in which the coverage in minutes and seconds of longitude is double the coverage in minutes and seconds of latitude for sheets at all scales",
  "published" : "2011-03-09T00:00:00.000Z",
  "keywords" : "Canada, NTS, basemap, geoscientific map, topographic map, Government information,",
  "options" : "\\\"\\\"[{\\\\\\\"\\\"protocol\\\\\\\"\\\":\\\\\\\"\\\"HTTPS\\\\\\\"\\\",\\\\\\\"\\\"name\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"BC Geographic Warehouse Custom Download\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Téléchargement personnalisé de BC Geographic Warehouse\\\\\\\"\\\"},\\\\\\\"\\\"description\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Dataset;HTML;eng\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Données;HTML;eng\\\\\\\"\\\"},\\\\\\\"\\\"url\\\\\\\"\\\":\\\\\\\"\\\"https://catalogue.data.gov.bc.ca/dataset/bcgs-1-10-000-grid/resource/3f6723e0-81e4-437e-ba03-b45c80a7bbc8\\\\\\\"\\\"},{\\\\\\\"\\\"protocol\\\\\\\"\\\":\\\\\\\"\\\"HTTP\\\\\\\"\\\",\\\\\\\"\\\"name\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"KML Network Link\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Liaison réseau KML\\\\\\\"\\\"},\\\\\\\"\\\"description\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Dataset;KML;eng\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Données;KML;eng\\\\\\\"\\\"},\\\\\\\"\\\"url\\\\\\\"\\\":\\\\\\\"\\\"https://openmaps.gov.bc.ca/kml/geo/layers/whse_basemapping.bcgs_10k_grid_loader.kml\\\\\\\"\\\"},{\\\\\\\"\\\"protocol\\\\\\\"\\\":\\\\\\\"\\\"OGC:WMS\\\\\\\"\\\",\\\\\\\"\\\"name\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"BCGS 1:10,000 Grid\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Grille BCGS 1:10 000\\\\\\\"\\\"},\\\\\\\"\\\"description\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Web Service;WMS;eng\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Service Web;WMS;eng\\\\\\\"\\\"},\\\\\\\"\\\"url\\\\\\\"\\\":\\\\\\\"\\\"https://openmaps.gov.bc.ca/geo/pub/WHSE_BASEMAPPING.BCGS_10K_GRID/ows?service=WMS&request=GetCapabilities&layers=pub:WHSE_BASEMAPPING.BCGS_10K_GRID&legend_format=image/png&feature_info_type=text/plain\\\\\\\"\\\"},{\\\\\\\"\\\"protocol\\\\\\\"\\\":\\\\\\\"\\\"OGC:WMS\\\\\\\"\\\",\\\\\\\"\\\"name\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"BCGS 1:10,000 Grid\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Grille BCGS 1:10 000\\\\\\\"\\\"},\\\\\\\"\\\"description\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Web Service;WMS;eng\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Service Web;WMS;eng\\\\\\\"\\\"},\\\\\\\"\\\"url\\\\\\\"\\\":\\\\\\\"\\\"https://openmaps.gov.bc.ca/geo/pub/WHSE_BASEMAPPING.BCGS_10K_GRID/ows?service=WMS&request=GetCapabilities&layers=pub:WHSE_BASEMAPPING.BCGS_10K_GRID&legend_format=image/png&feature_info_type=text/plain\\\\\\\"\\\"},{\\\\\\\"\\\"protocol\\\\\\\"\\\":\\\\\\\"\\\"HTTPS\\\\\\\"\\\",\\\\\\\"\\\"name\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"British Columbia Geoportal\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Géoportail de la Colombie-Britannique\\\\\\\"\\\"},\\\\\\\"\\\"description\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Dataset;HTML;eng\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Données;HTML;eng\\\\\\\"\\\"},\\\\\\\"\\\"url\\\\\\\"\\\":\\\\\\\"\\\"https://catalogue.data.gov.bc.ca/dataset/bcgs-1-10-000-grid\\\\\\\"\\\"}]\\\"\\\"",
  "contact" : "\\\"\\\"[{\\\\\\\"\\\"country\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"address\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"role\\\\\\\"\\\":\\\\\\\"\\\"pointOfContact; contact\\\\\\\"\\\",\\\\\\\"\\\"individual\\\\\\\"\\\":\\\\\\\"\\\"GeoBC Inquiries\\\\\\\"\\\",\\\\\\\"\\\"pt\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"city\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"organisation\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Government of British Columbia; Government of British Columbia; Natural Resources\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Gouvernement de la Colombie-Britannique; Gouvernement de la Colombie-Britannique; Ressources naturelles\\\\\\\"\\\"},\\\\\\\"\\\"telephone\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"onlineresource\\\\\\\"\\\":{\\\\\\\"\\\"onlineresource\\\\\\\"\\\":\\\\\\\"\\\"https://data.gov.bc.ca/\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_description\\\\\\\"\\\":\\\\\\\"\\\"DataBC encourages and enables the strategic management and sharing of data across the government enterprise and with the public.\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_name\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_protocol\\\\\\\"\\\":\\\\\\\"\\\"HTTPS\\\\\\\"\\\"},\\\\\\\"\\\"postalcode\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"hoursofservice\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"position\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"fax\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"email\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"GeoBCInfo@gov.bc.ca\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"GeoBCInfo@gov.bc.ca\\\\\\\"\\\"}}]\\\"\\\"",
  "topicCategory" : "boundaries",
  "created" : "2004-07-13T00:00:00.000Z",
  "spatialRepresentation" : "grid; grille",
  "type" : "dataset; jeuDonnées",
  "temporalExtent" : { },
  "graphicOverview" : "[[\"\"https://raw.githubusercontent.com/federal-geospatial-platform/fgp-metadata-proxy/master/images/resampled/britishcolumbia.png\"\",null,null,null]]",
  "language" : "eng; CAN",
  "organisation" : "Government of British Columbia; Government of British Columbia; Natural Resources",
  "total" : 153
} ], [ {
  "row_num" : 5,
  "id" : "fedfaa95-2370-4df9-ac19-9ee3f188e0ca",
  "coordinates" : [ [ [ -139.23618, 47.576862 ], [ -110.34537, 47.576862 ], [ -110.34537, 60.61815 ], [ -139.23618, 60.61815 ], [ -139.23618, 47.576862 ] ] ],
  "title" : "BCGS 1:10,000 Grid",
  "description" : "BCGS 1:10,000 scale grid. The British Columbia Geographic System is a geographic system in which the coverage in minutes and seconds of longitude is double the coverage in minutes and seconds of latitude for sheets at all scales",
  "published" : "2011-03-09T00:00:00.000Z",
  "keywords" : "Canada, NTS, basemap, geoscientific map, topographic map, Government information,",
  "options" : "\\\"\\\"[{\\\\\\\"\\\"protocol\\\\\\\"\\\":\\\\\\\"\\\"HTTPS\\\\\\\"\\\",\\\\\\\"\\\"name\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"BC Geographic Warehouse Custom Download\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Téléchargement personnalisé de BC Geographic Warehouse\\\\\\\"\\\"},\\\\\\\"\\\"description\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Dataset;HTML;eng\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Données;HTML;eng\\\\\\\"\\\"},\\\\\\\"\\\"url\\\\\\\"\\\":\\\\\\\"\\\"https://catalogue.data.gov.bc.ca/dataset/bcgs-1-10-000-grid/resource/3f6723e0-81e4-437e-ba03-b45c80a7bbc8\\\\\\\"\\\"},{\\\\\\\"\\\"protocol\\\\\\\"\\\":\\\\\\\"\\\"HTTP\\\\\\\"\\\",\\\\\\\"\\\"name\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"KML Network Link\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Liaison réseau KML\\\\\\\"\\\"},\\\\\\\"\\\"description\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Dataset;KML;eng\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Données;KML;eng\\\\\\\"\\\"},\\\\\\\"\\\"url\\\\\\\"\\\":\\\\\\\"\\\"https://openmaps.gov.bc.ca/kml/geo/layers/whse_basemapping.bcgs_10k_grid_loader.kml\\\\\\\"\\\"},{\\\\\\\"\\\"protocol\\\\\\\"\\\":\\\\\\\"\\\"OGC:WMS\\\\\\\"\\\",\\\\\\\"\\\"name\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"BCGS 1:10,000 Grid\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Grille BCGS 1:10 000\\\\\\\"\\\"},\\\\\\\"\\\"description\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Web Service;WMS;eng\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Service Web;WMS;eng\\\\\\\"\\\"},\\\\\\\"\\\"url\\\\\\\"\\\":\\\\\\\"\\\"https://openmaps.gov.bc.ca/geo/pub/WHSE_BASEMAPPING.BCGS_10K_GRID/ows?service=WMS&request=GetCapabilities&layers=pub:WHSE_BASEMAPPING.BCGS_10K_GRID&legend_format=image/png&feature_info_type=text/plain\\\\\\\"\\\"},{\\\\\\\"\\\"protocol\\\\\\\"\\\":\\\\\\\"\\\"OGC:WMS\\\\\\\"\\\",\\\\\\\"\\\"name\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"BCGS 1:10,000 Grid\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Grille BCGS 1:10 000\\\\\\\"\\\"},\\\\\\\"\\\"description\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Web Service;WMS;eng\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Service Web;WMS;eng\\\\\\\"\\\"},\\\\\\\"\\\"url\\\\\\\"\\\":\\\\\\\"\\\"https://openmaps.gov.bc.ca/geo/pub/WHSE_BASEMAPPING.BCGS_10K_GRID/ows?service=WMS&request=GetCapabilities&layers=pub:WHSE_BASEMAPPING.BCGS_10K_GRID&legend_format=image/png&feature_info_type=text/plain\\\\\\\"\\\"},{\\\\\\\"\\\"protocol\\\\\\\"\\\":\\\\\\\"\\\"HTTPS\\\\\\\"\\\",\\\\\\\"\\\"name\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"British Columbia Geoportal\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Géoportail de la Colombie-Britannique\\\\\\\"\\\"},\\\\\\\"\\\"description\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Dataset;HTML;eng\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Données;HTML;eng\\\\\\\"\\\"},\\\\\\\"\\\"url\\\\\\\"\\\":\\\\\\\"\\\"https://catalogue.data.gov.bc.ca/dataset/bcgs-1-10-000-grid\\\\\\\"\\\"}]\\\"\\\"",
  "contact" : "\\\"\\\"[{\\\\\\\"\\\"country\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"address\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"role\\\\\\\"\\\":\\\\\\\"\\\"pointOfContact; contact\\\\\\\"\\\",\\\\\\\"\\\"individual\\\\\\\"\\\":\\\\\\\"\\\"GeoBC Inquiries\\\\\\\"\\\",\\\\\\\"\\\"pt\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"city\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"organisation\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Government of British Columbia; Government of British Columbia; Natural Resources\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Gouvernement de la Colombie-Britannique; Gouvernement de la Colombie-Britannique; Ressources naturelles\\\\\\\"\\\"},\\\\\\\"\\\"telephone\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"onlineresource\\\\\\\"\\\":{\\\\\\\"\\\"onlineresource\\\\\\\"\\\":\\\\\\\"\\\"https://data.gov.bc.ca/\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_description\\\\\\\"\\\":\\\\\\\"\\\"DataBC encourages and enables the strategic management and sharing of data across the government enterprise and with the public.\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_name\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_protocol\\\\\\\"\\\":\\\\\\\"\\\"HTTPS\\\\\\\"\\\"},\\\\\\\"\\\"postalcode\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"hoursofservice\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"position\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"fax\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"email\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"GeoBCInfo@gov.bc.ca\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"GeoBCInfo@gov.bc.ca\\\\\\\"\\\"}}]\\\"\\\"",
  "topicCategory" : "boundaries",
  "created" : "2004-07-13T00:00:00.000Z",
  "spatialRepresentation" : "grid; grille",
  "type" : "dataset; jeuDonnées",
  "temporalExtent" : { },
  "graphicOverview" : "[[\"\"https://raw.githubusercontent.com/federal-geospatial-platform/fgp-metadata-proxy/master/images/resampled/britishcolumbia.png\"\",null,null,null]]",
  "language" : "eng; CAN",
  "organisation" : "Government of British Columbia; Government of British Columbia; Natural Resources",
  "total" : 153
} ] ]</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Query Results / Résultats des requêtes
        <a href="#search">search</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="id"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /id</code></pre></div>
    <div class="method-summary">Query by ID / Requête par ID (<span class="nickname">id</span>)</div>
    <div class="method-notes">Query metadata holdings by the UUID of the metadata / Interroger les fonds de métadonnées par l'UUID des métadonnées</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; Language of result / Langue du résultat </div>      <div class="param">id (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; UUID of the metadata / L&#x27;UUID des métadonnées </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#id">id</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>[ [ {
  "id" : "000183ed-8864-42f0-ae43-c4313a860720",
  "coordinates" : [ [ [ -141.003, 41.6755 ], [ -52.6174, 41.6755 ], [ -52.6174, 83.1139 ], [ -141.003, 83.1139 ], [ -141.003, 41.6755 ] ] ],
  "title" : "Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)",
  "description" : "This dataset is produced and published annually by Natural Resources Canada. It contains a variety of statistics on Canada’s mineral production, and provides the geographic locations of significant metallic, nonmetallic and coal mines, oil sands mines, selected metallurgical works and gas fields for the provinces and territories of Canada.Related product:- **[Top 100 Exploration Projects](https://open.canada.ca/data/en/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "published" : "2020-02-27T00:00:00.000Z",
  "keywords" : "mineralization, mineral occurrences, mines, hydrocarbons, fossil fuels, industrial minerals, metallic minerals, economic geology, mineral deposits, exploration and deposit appraisal, nonmetallic minerals, oil, gas, hydrocarbons, refineries, smelters, mineral processing, ferroalloy, automobile shredders, Coal, Earth sciences, Oil sands, Recycling, Metals, Minerals, Mining industry, Gas industry, Steel,",
  "options" : "\"\"[{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;FGDB/GDB;eng,fra\\\"\",\\\"\"fr\\\"\":\\\"\"Données;FGDB/GDB;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A.gdb.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_en.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_fr.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;SHP;eng,fra\\\" ,\\\"\"fr\\\"\":\\\"\"Données;SHP;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_70th_shape.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_English.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_French.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"ESRI REST: Map Server\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Web Service;ESRI REST;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Service Web;ESRI REST;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_en/MapServer/1\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"}]\"\"",
  "contact" : "\\\"\\\"[{\\\\\\\"\\\"country\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\"},\\\\\\\"\\\"address\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"580 Booth Street\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"580 rue Booth\\\\\\\"\\\"},\\\\\\\"\\\"role\\\\\\\"\\\":\\\\\\\"\\\"pointOfContact; contact\\\\\\\"\\\",\\\\\\\"\\\"individual\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"pt\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\"},\\\\\\\"\\\"city\\\\\\\"\\\":\\\\\\\"\\\"Ottawa\\\\\\\"\\\",\\\\\\\"\\\"organisation\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\\\\\\\"\\\"},\\\\\\\"\\\"telephone\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\"},\\\\\\\"\\\"onlineresource\\\\\\\"\\\":{\\\\\\\"\\\"onlineresource\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_description\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_name\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_protocol\\\\\\\"\\\":\\\\\\\"\\\"http\\\\\\\"\\\"},\\\\\\\"\\\"postalcode\\\\\\\"\\\":\\\\\\\"\\\"K1A 0E4\\\\\\\"\\\",\\\\\\\"\\\"hoursofservice\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"position\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"fax\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"email\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\"}}]\\\"\\\"\"",
  "topicCategory" : "economy",
  "created" : "2021-02",
  "spatialRepresentation" : "vector; vecteur",
  "type" : "series; série",
  "temporalExtent" : { },
  "refSys" : "EPSG:3978",
  "refSys_version" : "8.9.2",
  "status" : "completed; complété",
  "maintenance" : "annually; annuel",
  "metadataStandard" : "North American Profile of ISO 19115:2003 - Geographic information - Metadata",
  "metadataStandardVersion" : "CAN/CGSB-171.100-2009",
  "graphicOverview" : [ [ "\\\"\\\"http//ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/Thumbnail/900A.png\\\"\\\"", null, null, null ] ],
  "distributionFormat_name" : "N/A",
  "distributionFormat_format" : "N/A",
  "useLimits" : "Open Government Licence - Canada (http://open.canada.ca/en/open-government-licence-canada)",
  "accessConstraints" : "license; licence",
  "otherConstraints" : "N/A",
  "dateStamp" : "2021-02-23T20:32:05.000Z",
  "dataSetURI" : "N/A",
  "locale" : { },
  "language" : "eng; CAN",
  "characterSet" : "utf8; utf8",
  "environmentDescription" : "N/A",
  "supplementalInformation" : "N/A",
  "credits" : [ ],
  "distributor" : [ [ null, [ null, null ], [ "Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\ \"\\\"NRCan.questions.RNCan@canada.ca\\\"\\\"" ], [ null, null, "\\\"\\\"http\\\"\\\"", null ], null, "\\\"\\\"distributor; distributeur\\\"\\\"" ] ]
} ], [ {
  "id" : "000183ed-8864-42f0-ae43-c4313a860720",
  "coordinates" : [ [ [ -141.003, 41.6755 ], [ -52.6174, 41.6755 ], [ -52.6174, 83.1139 ], [ -141.003, 83.1139 ], [ -141.003, 41.6755 ] ] ],
  "title" : "Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)",
  "description" : "This dataset is produced and published annually by Natural Resources Canada. It contains a variety of statistics on Canada’s mineral production, and provides the geographic locations of significant metallic, nonmetallic and coal mines, oil sands mines, selected metallurgical works and gas fields for the provinces and territories of Canada.Related product:- **[Top 100 Exploration Projects](https://open.canada.ca/data/en/dataset/b64179f3-ea0f-4abb-9cc5-85432fc958a0)**",
  "published" : "2020-02-27T00:00:00.000Z",
  "keywords" : "mineralization, mineral occurrences, mines, hydrocarbons, fossil fuels, industrial minerals, metallic minerals, economic geology, mineral deposits, exploration and deposit appraisal, nonmetallic minerals, oil, gas, hydrocarbons, refineries, smelters, mineral processing, ferroalloy, automobile shredders, Coal, Earth sciences, Oil sands, Recycling, Metals, Minerals, Mining industry, Gas industry, Steel,",
  "options" : "\"\"[{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;FGDB/GDB;eng,fra\\\"\",\\\"\"fr\\\"\":\\\"\"Données;FGDB/GDB;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A.gdb.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_en.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"ArcMap project file of the 900A web map\\\"\",\\\"\"fr\\\"\":\\\"\"Projet ArcMap de la cartographie web de 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;MXD;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;MXD;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_and_top_100_fr.mxd\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Vector dataset of the 900A map\\\"\",\\\"\"fr\\\"\":\\\"\"Jeu de données vectorielles de la carte 900A\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Dataset;SHP;eng,fra\\\" ,\\\"\"fr\\\"\":\\\"\"Données;SHP;eng,fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900A_70th_shape.zip\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_English.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"HTTPS\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Supporting Document;PDF;fra\\\"\",\\\"\"fr\\\"\":\\\"\"Document de soutien;PDF;fra\\\"\"},\\\"\"url\\\"\":\\\"\"https://ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/900a_70th_French.pdf\\\"\"},{\\\"\"protocol\\\"\":\\\"\"ESRI REST: Map Server\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"Mineral Areas, Producing Mines, and Oil and Gas Fields (900A)\\\"\",\\\"\"fr\\\"\":\\\"\"Principales régions minières, principales mines productrices, principaux champs de pétrole et de gaz (900A)\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"Web Service;ESRI REST;eng\\\"\",\\\"\"fr\\\"\":\\\"\"Service Web;ESRI REST;eng\\\"\"},\\\"\"url\\\"\":\\\"\"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/900A_and_top_100_en/MapServer/1\\\"\"},{\\\"\"protocol\\\"\":\\\"\"null\\\"\",\\\"\"name\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"description\\\"\":{\\\"\"en\\\"\":\\\"\"null\\\"\",\\\"\"fr\\\"\":\\\"\"null\\\"\"},\\\"\"url\\\"\":\\\"\"null\\\"\"}]\"\"",
  "contact" : "\\\"\\\"[{\\\\\\\"\\\"country\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Canada\\\\\\\"\\\"},\\\\\\\"\\\"address\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"580 Booth Street\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"580 rue Booth\\\\\\\"\\\"},\\\\\\\"\\\"role\\\\\\\"\\\":\\\\\\\"\\\"pointOfContact; contact\\\\\\\"\\\",\\\\\\\"\\\"individual\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"pt\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Ontario\\\\\\\"\\\"},\\\\\\\"\\\"city\\\\\\\"\\\":\\\\\\\"\\\"Ottawa\\\\\\\"\\\",\\\\\\\"\\\"organisation\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"Gouvernement du Canada; Ressources naturelles Canada; Secteur des terres et des minéraux\\\\\\\"\\\"},\\\\\\\"\\\"telephone\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"1-855-525-9293\\\\\\\"\\\"},\\\\\\\"\\\"onlineresource\\\\\\\"\\\":{\\\\\\\"\\\"onlineresource\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_description\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_name\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"onlineresource_protocol\\\\\\\"\\\":\\\\\\\"\\\"http\\\\\\\"\\\"},\\\\\\\"\\\"postalcode\\\\\\\"\\\":\\\\\\\"\\\"K1A 0E4\\\\\\\"\\\",\\\\\\\"\\\"hoursofservice\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"position\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\"},\\\\\\\"\\\"fax\\\\\\\"\\\":\\\\\\\"\\\"null\\\\\\\"\\\",\\\\\\\"\\\"email\\\\\\\"\\\":{\\\\\\\"\\\"en\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\",\\\\\\\"\\\"fr\\\\\\\"\\\":\\\\\\\"\\\"NRCan.questions.RNCan@canada.ca\\\\\\\"\\\"}}]\\\"\\\"\"",
  "topicCategory" : "economy",
  "created" : "2021-02",
  "spatialRepresentation" : "vector; vecteur",
  "type" : "series; série",
  "temporalExtent" : { },
  "refSys" : "EPSG:3978",
  "refSys_version" : "8.9.2",
  "status" : "completed; complété",
  "maintenance" : "annually; annuel",
  "metadataStandard" : "North American Profile of ISO 19115:2003 - Geographic information - Metadata",
  "metadataStandardVersion" : "CAN/CGSB-171.100-2009",
  "graphicOverview" : [ [ "\\\"\\\"http//ftp.maps.canada.ca/pub/nrcan_rncan/Mining-industry_Industrie-miniere/900A_and_top_100/Thumbnail/900A.png\\\"\\\"", null, null, null ] ],
  "distributionFormat_name" : "N/A",
  "distributionFormat_format" : "N/A",
  "useLimits" : "Open Government Licence - Canada (http://open.canada.ca/en/open-government-licence-canada)",
  "accessConstraints" : "license; licence",
  "otherConstraints" : "N/A",
  "dateStamp" : "2021-02-23T20:32:05.000Z",
  "dataSetURI" : "N/A",
  "locale" : { },
  "language" : "eng; CAN",
  "characterSet" : "utf8; utf8",
  "environmentDescription" : "N/A",
  "supplementalInformation" : "N/A",
  "credits" : [ ],
  "distributor" : [ [ null, [ null, null ], [ "Government of Canada; Natural Resources Canada; Lands and Minerals Sector\\ \"\\\"NRCan.questions.RNCan@canada.ca\\\"\\\"" ], [ null, null, "\\\"\\\"http\\\"\\\"", null ], null, "\\\"\\\"distributor; distributeur\\\"\\\"" ] ]
} ] ]</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    The metadata associated with the UUID / Les métadonnées associées à l&#x27;UUID
        <a href="#id">id</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>
  <h1><a name="TranslateTraduire">Translate / Traduire</a></h1>
  <div class="method"><a name="translate"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /translate</code></pre></div>
    <div class="method-summary">translate text to given language / traduire un texte dans une langue donnée (<span class="nickname">translate</span>)</div>
    <div class="method-notes">translate text to given language / traduire un texte dans une langue donnée</div>





    <h3 class="field-label">Query parameters</h3>
    <div class="field-items">
      <div class="param">text (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; text to be translated / texte à traduire </div>      <div class="param">from_lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; from text language / du langage textuel </div>      <div class="param">to_lang (optional)</div>
      
            <div class="param-desc"><span class="param-type">Query Parameter</span> &mdash; to text language / au langage textuel </div>    </div>  <!-- field-items -->


    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#translate">translate</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "from_lang" : "from_lang",
  "to_lang" : "to_lang",
  "text" : "text"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    translate text to given language / traduire un texte dans une langue donnée
        <a href="#translate">translate</a>
    <h4 class="field-label">400</h4>
    bad input parameters
        <a href="#"></a>
  </div> <!-- method -->
  <hr/>

  <h2><a name="__Models">Models</a></h2>
  [ Jump to <a href="#__Methods">Methods</a> ]

  <h3>Table of Contents</h3>
  <ol>
    <li><a href="#community_add"><code>community_add</code></a></li>
    <li><a href="#community_add_description"><code>community_add_description</code></a></li>
    <li><a href="#community_add_keywords"><code>community_add_keywords</code></a></li>
    <li><a href="#community_add_member"><code>community_add_member</code></a></li>
    <li><a href="#community_add_name"><code>community_add_name</code></a></li>
    <li><a href="#community_announcement_add"><code>community_announcement_add</code></a></li>
    <li><a href="#community_announcement_add_announcement"><code>community_announcement_add_announcement</code></a></li>
    <li><a href="#community_announcement_edit"><code>community_announcement_edit</code></a></li>
    <li><a href="#community_data_add"><code>community_data_add</code></a></li>
    <li><a href="#community_delete_announcement"><code>community_delete_announcement</code></a></li>
    <li><a href="#community_delete_data"><code>community_delete_data</code></a></li>
    <li><a href="#community_delete_member"><code>community_delete_member</code></a></li>
    <li><a href="#community_delete_resource"><code>community_delete_resource</code></a></li>
    <li><a href="#community_edit"><code>community_edit</code></a></li>
    <li><a href="#community_edit_member"><code>community_edit_member</code></a></li>
    <li><a href="#community_get_announcement"><code>community_get_announcement</code></a></li>
    <li><a href="#community_get_data"><code>community_get_data</code></a></li>
    <li><a href="#community_get_member"><code>community_get_member</code></a></li>
    <li><a href="#community_get_resource"><code>community_get_resource</code></a></li>
    <li><a href="#community_resource_add"><code>community_resource_add</code></a></li>
    <li><a href="#community_resource_add_resource_description"><code>community_resource_add_resource_description</code></a></li>
    <li><a href="#community_resource_add_resource_link"><code>community_resource_add_resource_link</code></a></li>
    <li><a href="#community_resource_add_resource_name"><code>community_resource_add_resource_name</code></a></li>
    <li><a href="#community_resource_edit"><code>community_resource_edit</code></a></li>
    <li><a href="#featured"><code>featured</code></a></li>
    <li><a href="#foundational"><code>foundational</code></a></li>
    <li><a href="#foundational_inner"><code>foundational_inner</code></a></li>
    <li><a href="#geonetwork"><code>geonetwork</code></a></li>
    <li><a href="#geonetwork_inner"><code>geonetwork_inner</code></a></li>
    <li><a href="#getanalytics1"><code>getanalytics1</code></a></li>
    <li><a href="#getanalytics10"><code>getanalytics10</code></a></li>
    <li><a href="#getanalytics10_inner"><code>getanalytics10_inner</code></a></li>
    <li><a href="#getanalytics11"><code>getanalytics11</code></a></li>
    <li><a href="#getanalytics11_inner"><code>getanalytics11_inner</code></a></li>
    <li><a href="#getanalytics1_inner"><code>getanalytics1_inner</code></a></li>
    <li><a href="#getanalytics2"><code>getanalytics2</code></a></li>
    <li><a href="#getanalytics2_inner"><code>getanalytics2_inner</code></a></li>
    <li><a href="#getanalytics3"><code>getanalytics3</code></a></li>
    <li><a href="#getanalytics3_inner"><code>getanalytics3_inner</code></a></li>
    <li><a href="#getanalytics4"><code>getanalytics4</code></a></li>
    <li><a href="#getanalytics4_inner"><code>getanalytics4_inner</code></a></li>
    <li><a href="#getanalytics5"><code>getanalytics5</code></a></li>
    <li><a href="#getanalytics6"><code>getanalytics6</code></a></li>
    <li><a href="#getanalytics7"><code>getanalytics7</code></a></li>
    <li><a href="#getanalytics8"><code>getanalytics8</code></a></li>
    <li><a href="#getanalytics9"><code>getanalytics9</code></a></li>
    <li><a href="#getanalytics9_inner"><code>getanalytics9_inner</code></a></li>
    <li><a href="#id"><code>id</code></a></li>
    <li><a href="#id_inner"><code>id_inner</code></a></li>
    <li><a href="#my_community_get_announcements"><code>my_community_get_announcements</code></a></li>
    <li><a href="#my_community_get_data"><code>my_community_get_data</code></a></li>
    <li><a href="#my_community_get_resources"><code>my_community_get_resources</code></a></li>
    <li><a href="#new"><code>new</code></a></li>
    <li><a href="#plugin_config"><code>plugin_config</code></a></li>
    <li><a href="#plugin_config_inner"><code>plugin_config_inner</code></a></li>
    <li><a href="#putanalytics"><code>putanalytics</code></a></li>
    <li><a href="#putanalytics_inner"><code>putanalytics_inner</code></a></li>
    <li><a href="#saved_record_add"><code>saved_record_add</code></a></li>
    <li><a href="#saved_record_delete"><code>saved_record_delete</code></a></li>
    <li><a href="#saved_record_get"><code>saved_record_get</code></a></li>
    <li><a href="#saved_search_add"><code>saved_search_add</code></a></li>
    <li><a href="#saved_search_add_inner"><code>saved_search_add_inner</code></a></li>
    <li><a href="#saved_search_delete"><code>saved_search_delete</code></a></li>
    <li><a href="#saved_search_get"><code>saved_search_get</code></a></li>
    <li><a href="#search"><code>search</code></a></li>
    <li><a href="#search_inner"><code>search_inner</code></a></li>
    <li><a href="#translate"><code>translate</code></a></li>
    <li><a href="#update"><code>update</code></a></li>
    <li><a href="#update_inner"><code>update_inner</code></a></li>
  </ol>

  <div class="model">
    <h3><a name="community_add"><code>community_add</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">name (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_add_name">array[community_add_name]</a></span>  </div>
<div class="param">description (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_add_description">array[community_add_description]</a></span>  </div>
<div class="param">keywords (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_add_keywords">array[community_add_keywords]</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_add_description"><code>community_add_description</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: A community for those who are interested in the historical imagery of Canada</span></div>
<div class="param">fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: Une communauté pour ceux qui s&#x27;intéressent à l&#x27;imagerie historique du Canada</span></div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_add_keywords"><code>community_add_keywords</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: History, Imagery, Historical, Historical Research, Research, Change</span></div>
<div class="param">fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: Histoire, Imagerie, Historique, Recherche historique, Recherche, Changement</span></div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_add_member"><code>community_add_member</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">userId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">role (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">communityId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_add_name"><code>community_add_name</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: Historical Imagery</span></div>
<div class="param">fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: Imagerie historique</span></div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_announcement_add"><code>community_announcement_add</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">communityId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">userId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">announcement (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_announcement_add_announcement">array[community_announcement_add_announcement]</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_announcement_add_announcement"><code>community_announcement_add_announcement</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: New Data added!</span></div>
<div class="param">fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: Nouvelles données ajoutées!</span></div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_announcement_edit"><code>community_announcement_edit</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">key (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">userId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">announcement (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_announcement_add_announcement">array[community_announcement_add_announcement]</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_data_add"><code>community_data_add</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">communityId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">uuid (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_delete_announcement"><code>community_delete_announcement</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">key (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_delete_data"><code>community_delete_data</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">key (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_delete_member"><code>community_delete_member</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">key (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_delete_resource"><code>community_delete_resource</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">key (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_edit"><code>community_edit</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">name (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_add_name">array[community_add_name]</a></span>  </div>
<div class="param">description (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_add_description">array[community_add_description]</a></span>  </div>
<div class="param">keywords (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_add_keywords">array[community_add_keywords]</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_edit_member"><code>community_edit_member</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">key (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">role (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_get_announcement"><code>community_get_announcement</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">communityId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_get_data"><code>community_get_data</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">communityId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_get_member"><code>community_get_member</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">communityId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_get_resource"><code>community_get_resource</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">communityId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_resource_add"><code>community_resource_add</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">communityId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: 12345</span></div>
<div class="param">resource_link (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_resource_add_resource_link">array[community_resource_add_resource_link]</a></span>  </div>
<div class="param">resource_name (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_resource_add_resource_name">array[community_resource_add_resource_name]</a></span>  </div>
<div class="param">resource_description (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_resource_add_resource_description">array[community_resource_add_resource_description]</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_resource_add_resource_description"><code>community_resource_add_resource_description</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: With 20% of the world&#x27;s total freshwater resources, Canada has a responsibility to do it right. That is why the GeoBase Surface Water Program (GeEAU) of Natural Resources Canada (NRCan) is deploying its resources to provide data, services and expertise to address water issues.</span></div>
<div class="param">fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: Comme il abrite 20% des ressources mondiales en eau douce, le Canada a le devoir de bien faire les choses. C’est pourquoi le Programme GéoBase des eaux de surface (GéEAU) de Ressources naturelles Canada (RNCan) déploie ses ressources pour fournir des données, des services et son expertise au service des enjeux liés à l’eau.</span></div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_resource_add_resource_link"><code>community_resource_add_resource_link</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: https://www.nrcan.gc.ca/science-and-data/science-and-research/earth-sciences/geography/topographic-information/geobase-surface-water-program-geeau/20969</span></div>
<div class="param">fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: https://www.rncan.gc.ca/science-et-donnees/science-et-recherche/sciences-terre/geographie/information-topographique/programme-geobase-eaux-surface-geeau/20970?_gl&#x3D;1*t4mr4t*_ga*Mjc4MzY2MDMuMTY3MzUzMjU4OA..*_ga_C2N57Y7DX5*MTY3NDA5NTY3OS4xLjAuMTY3NDA5NTY3OS4wLjAuMA..</span></div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_resource_add_resource_name"><code>community_resource_add_resource_name</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: GeoBase Surface Water Program (GeEAU)</span></div>
<div class="param">fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: Programme GéoBase des eaux de surface (GéEAU)</span></div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="community_resource_edit"><code>community_resource_edit</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">key (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">resource_link (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_resource_add_resource_link">array[community_resource_add_resource_link]</a></span>  </div>
<div class="param">resource_name (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_resource_add_resource_name">array[community_resource_add_resource_name]</a></span>  </div>
<div class="param">resource_description (optional)</div><div class="param-desc"><span class="param-type"><a href="#community_resource_add_resource_description">array[community_resource_add_resource_description]</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="featured"><code>featured</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="foundational"><code>foundational</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="foundational_inner"><code>foundational_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">id (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">coordinates (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">title (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">description (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">published (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">keywords (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">options (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">contact (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">created (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">spatialRepresentation (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">type (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">temporalExtent (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">graphicOverview (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">language (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="geonetwork"><code>geonetwork</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="geonetwork_inner"><code>geonetwork_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">uuid (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">source_code (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">item (optional)</div><div class="param-desc"><span class="param-type"><a href="#object">Object</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics1"><code>getanalytics1</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics10"><code>getanalytics10</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics10_inner"><code>getanalytics10_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">30 (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">all (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics11"><code>getanalytics11</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics11_inner"><code>getanalytics11_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">total (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">organizations (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics1_inner"><code>getanalytics1_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">search (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">count (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics2"><code>getanalytics2</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics2_inner"><code>getanalytics2_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">searches (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics3"><code>getanalytics3</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics3_inner"><code>getanalytics3_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">accesses (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics4"><code>getanalytics4</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics4_inner"><code>getanalytics4_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">accesses (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">id (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">title (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">coordinates (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">publication_date (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">keywords (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">topicCategory (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">organisation (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics5"><code>getanalytics5</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics6"><code>getanalytics6</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics7"><code>getanalytics7</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics8"><code>getanalytics8</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics9"><code>getanalytics9</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="getanalytics9_inner"><code>getanalytics9_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">accesses (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">id (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">title (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">coordinates (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">publication_date (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">keywords (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">topicCategory (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">organisation (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="id"><code>id</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="id_inner"><code>id_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">id (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">coordinates (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">title (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">description (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">published (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">keywords (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">options (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">contact (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">created (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">spatialRepresentation (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">type (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">temporalExtent (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">graphicOverview (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">language (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">topicCategory (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">refSys (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">refSys_version (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">status (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">maintenance (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">metadataStandard (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">distributionFormat_name (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">distributionFormat_format (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">useLimits (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">accessConstraints (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">otherConstraints (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">dateStamp (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">dataSetURI (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">locale (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">characterSet (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">environmentDescription (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">supplementalInformation (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">credits (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">distributor (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="my_community_get_announcements"><code>my_community_get_announcements</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">userId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="my_community_get_data"><code>my_community_get_data</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">userId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="my_community_get_resources"><code>my_community_get_resources</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">userId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="new"><code>new</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="plugin_config"><code>plugin_config</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="plugin_config_inner"><code>plugin_config_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">uuid (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">plugin_config (optional)</div><div class="param-desc"><span class="param-type"><a href="#object">Object</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="putanalytics"><code>putanalytics</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="putanalytics_inner"><code>putanalytics_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">search (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">theme (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">filter (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">geo (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">uuid (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">resource (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">resource_type (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">loc (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">lang (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">type (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">org (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">foundational (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">type_filter (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="saved_record_add"><code>saved_record_add</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">userId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">uuid (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="saved_record_delete"><code>saved_record_delete</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">key (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="saved_record_get"><code>saved_record_get</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">userId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="saved_search_add"><code>saved_search_add</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="saved_search_add_inner"><code>saved_search_add_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">search (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">theme (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">filter (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">geo (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">uuid (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">lang (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">org (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">foundational (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">type_filter (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="saved_search_delete"><code>saved_search_delete</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">key (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="saved_search_get"><code>saved_search_get</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">userId (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="search"><code>search</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="search_inner"><code>search_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">row_num (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">id (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">coordinates (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">title (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">description (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">published (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">keywords (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">options (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">contact (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">created (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">spatialRepresentation (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">type (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">type_filter (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">temporalExtent (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">graphicOverview (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">language (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">total (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="translate"><code>translate</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">text (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">from_lang (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">to_lang (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="update"><code>update</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
          </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="update_inner"><code>update_inner</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">coordinates (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">title_en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">title_fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">description_en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">description_fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">keywords_en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">keywords_fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">topicCategory (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">date_published_text (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">date_published_date (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">date_created_text (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">date_created_date (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">spatialRepresentation (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">type (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">geometry (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">temporalExtent_begin (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">temporalExtent_end (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">refSys (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">refSys_version (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">status (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">maintenance (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">metadataStandard_en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">metadataStandard_fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">metadataStandardVersion (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">graphicOverview (optional)</div><div class="param-desc"><span class="param-type"><a href="#object">Object</a></span>  </div>
<div class="param">distributionFormat_name (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">distributionFormat_format (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">useLimits_en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">useLimits_fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">accessConstraints (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">otherConstraints_en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">otherConstraints_fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">dateStamp (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">dataSetURI (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">locale_language (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">locale_country (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">locale_encoding (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">language (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">characterSet (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">environmentDescription (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">supplementalInformation_en (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">supplementalInformation_fr (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
<div class="param">contact (optional)</div><div class="param-desc"><span class="param-type"><a href="#object">Object</a></span>  </div>
<div class="param">credits (optional)</div><div class="param-desc"><span class="param-type"><a href="#object">Object</a></span>  </div>
<div class="param">cited (optional)</div><div class="param-desc"><span class="param-type"><a href="#object">Object</a></span>  </div>
<div class="param">distributor (optional)</div><div class="param-desc"><span class="param-type"><a href="#object">Object</a></span>  </div>
<div class="param">options (optional)</div><div class="param-desc"><span class="param-type"><a href="#object">Object</a></span>  </div>
<div class="param">plugins (optional)</div><div class="param-desc"><span class="param-type"><a href="#object">Object</a></span>  </div>
    </div>  <!-- field-items -->
  </div>
  </body>
</html>