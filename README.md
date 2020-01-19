[WIP] Check back for updates.

### For Developers
# Get Started Locally
    - Clone Repo
    - Create dev.env file with required fields.

# Upcoming
    - Release of the Embed Cards api and website
    - Release of Embed Cards React npm package

# NPM Scripts
    - clean - Clean the distribution directory.
    - debug - Start the server in debug mode which will reload changes.
    - start - Start the server in normal mode using the dev.env.
    - build - Builds the server.
    - build:start - Builds and starts the server using the buld and start scripts.
    - gendocs - Generate API documentation

### Notes To Self
TODO:
    - Add prettier and husky for prettier on precommit
    - Make the api doc genrator run on commit
    - Test the max github bio length to make sure it looks good or cut it off.
    - Add a configurable character limit to bio's

### To Test
    - Does it work with gravitar and no profile picture

### Bugs
    - the css doesnt load fast enoguh can I preload the page? This may not be a problem in the iFrame?
    - When removing the company it should remove the border from the bottom of the info box

## .env File
Example dev.env:
```
PORT=4000
GITHUB_TOKEN=[token]
GITHUB_USERNAME=[username]
```