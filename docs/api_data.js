define({ "api": [
  {
    "type": "get",
    "url": "/cards/github/repo-card/:owner/:repo",
    "title": "",
    "name": "GetRepoCard",
    "group": "Github",
    "description": "<p>Gets the repo-card view for the specified repo. (Usually used in iFrame).</p>",
    "parameter": {
      "fields": {
        "Include Info": [
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeCreatedBy",
            "description": "<p>Should the users username be included.</p>"
          },
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeForks",
            "description": "<p>Should the follower count be included.</p>"
          },
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeWatchers",
            "description": "<p>Should the users gist count be included.</p>"
          },
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeStars",
            "description": "<p>Should the users bio be included.</p>"
          },
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeDescription",
            "description": "<p>Should the users repo count be included.</p>"
          },
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeLicense",
            "description": "<p>Should the users company be included.</p>"
          }
        ],
        "Card Settings": [
          {
            "group": "Card Settings",
            "type": "String",
            "optional": false,
            "field": "theme",
            "description": "<p>Should the card use the &quot;dark&quot; or &quot;light&quot; theme. This can be left out. Defaults to light.</p>"
          },
          {
            "group": "Card Settings",
            "type": "String",
            "optional": false,
            "field": "showFullname",
            "description": "<p>Should we show the fullname or short name. (Defaults to true)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTML",
            "optional": false,
            "field": "EmbeddableCardPage",
            "description": "<p>The Github repo card. (Usually used in a iFrame)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/github/cardRoutes.js",
    "groupTitle": "Github"
  },
  {
    "type": "get",
    "url": "/cards/github/user-card/:github_username",
    "title": "",
    "name": "GetUserCard",
    "group": "Github",
    "description": "<p>Gets the user-card view for the specified user. (Usually used in iFrame). If company or bio is left out it will be disabled automatically.</p>",
    "parameter": {
      "fields": {
        "Include Info": [
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeName",
            "description": "<p>Should the users name be included.</p>"
          },
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeUsername",
            "description": "<p>Should the users username be included.</p>"
          },
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeFollowers",
            "description": "<p>Should the follower count be included.</p>"
          },
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeGists",
            "description": "<p>Should the users gist count be included.</p>"
          },
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeBio",
            "description": "<p>Should the users bio be included.</p>"
          },
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeRepos",
            "description": "<p>Should the users repo count be included.</p>"
          },
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeCompany",
            "description": "<p>Should the users company be included.</p>"
          },
          {
            "group": "Include Info",
            "type": "Boolean",
            "optional": false,
            "field": "includeAvatar",
            "description": "<p>Should the users avatar be included.</p>"
          }
        ],
        "Card Settings": [
          {
            "group": "Card Settings",
            "type": "Boolean",
            "optional": false,
            "field": "isVertical",
            "description": "<p>Should the card use the vertical (true) or horizontal (false) layout. This can be left out. Defaults to vertical.</p>"
          },
          {
            "group": "Card Settings",
            "type": "String",
            "optional": false,
            "field": "theme",
            "description": "<p>Should the card use the &quot;dark&quot; or &quot;light&quot; theme. This can be left out. Defaults to light.</p>"
          },
          {
            "group": "Card Settings",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>Should the card be &quot;normal&quot; or &quot;large&quot; size. This can be left out. Currently only works on vertical layouts. Defaults to normal.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTML",
            "optional": false,
            "field": "EmbeddableCardPage",
            "description": "<p>The Github user card. (Usually used in a iFrame)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/github/cardRoutes.js",
    "groupTitle": "Github"
  }
] });
