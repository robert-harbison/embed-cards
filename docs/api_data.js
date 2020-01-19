define({ "api": [
  {
    "type": "get",
    "url": "/api/cards/user-card/:github_username",
    "title": "",
    "name": "GetUserCard",
    "group": "GithubCards",
    "description": "<p>Gets the user-card view for the specified user. (Usually used in iFrame)</p>",
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
            "description": "<p>Should the card use the vertical (true) or horizontal (false) layout.</p>"
          },
          {
            "group": "Card Settings",
            "type": "String",
            "optional": false,
            "field": "theme",
            "description": "<p>Should the card use the &quot;dark&quot; or &quot;light&quot; theme.</p>"
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
            "description": "<p>The Github user card.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/cardRoutes.js",
    "groupTitle": "GithubCards"
  }
] });
