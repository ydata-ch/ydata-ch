# Justfile for project commands

# Serve the Jekyll site with live reload
serve:
    jekyll serve --livereload

# Build the Jekyll site for production
build:
    jekyll build

# Clean the build output and installed dependencies
clean:
    rm -rf _site/ node_modules/ vendor/
