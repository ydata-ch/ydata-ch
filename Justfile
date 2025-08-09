# Justfile for project commands

# Install all project dependencies (Ruby and Node)
setup:
    bundle install
    npm install

# Serve the Jekyll site with live reload
serve:
    bundle exec jekyll serve --livereload

# Build the Jekyll site for production
build:
    bundle exec jekyll build

# Clean the build output and installed dependencies
clean:
    rm -rf _site/ node_modules/ vendor/
