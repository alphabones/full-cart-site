### How to work on this here sauce

```bash
git clone git@github.com:alphabones/full-cart-site.git
cd full-cart-site
git submodule update --init --recursive
yarn
foreman start
```

Great you are hacking around. Look in here for styles:

```
themes/agency/assets/scss/
```

Most everything else is in `config.toml` for now. Need to do a little more work to tighten things up.

### How to deploy this here sauce

There are two repos associated with this thing: 
- One for this full repo 
- One that is used as a host repo from whence the Github Pages site is served (hint: it's a submodule of this repo)

To deploy (read:publish) changes to the site, you would follow these kind of steps:
- Run `hugo` to update your `public/` dir with the latest static content
- Go into the submodule dir, add all the ∆s and commit with a message like "Site build" or something
- Push the submodule to the remote

For convenience there's a script to do that. Just run this guy:

```bash
./deploy.sh
```
