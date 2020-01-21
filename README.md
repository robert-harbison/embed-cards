[WIP] Check back for updates.

# Upcoming
    - Embed Cards api and website
    - Embed Cards React npm package
    - NPM Package Card
    - Stackoverflow Card
    - LinkedIn Card
    

### For Developers
# Get Started Locally
    - Clone Repo
    - Create dev.env file with required fields.

# NPM Scripts
    - clean - Clean the distribution directory.
    - debug - Start the server in debug mode which will reload changes.
    - start - Start the server in normal mode using the dev.env.
    - build - Builds the server.
    - build:start - Builds and starts the server using the buld and start scripts.
    - gendocs - Generate API documentation

# Notes To Developers
    - Type npm install to run the force resolve to fix the braces npm package vulnerability.

### Notes To Self
TODO:
    - Add prettier and husky for prettier on precommit
    - Make the api doc genrator run on commit
    - Add eslint
    - Add winston logger
    - Test the max github bio length to make sure it looks good or cut it off.
    - Add a configurable character limit to bio's
    - Can I recode the tempaltes for horiz and vertical to use a responsive patter so there isn't 2 templates? If so add option for width so its responsive.

### To Test
    - Does it work with gravitar and no profile picture

### Bugs
    - the css doesnt load fast enoguh can I preload the page? This may not be a problem in the iFrame?
    - When removing the company it should remove the border from the bottom of the info box

## .env File
Example dev.env:
```
PORT=[port by default 4000]
GITHUB_APP_ID=[appID]
```

## Certificates
- Create a folder in the main directory called 'ssl'
    - github.pem