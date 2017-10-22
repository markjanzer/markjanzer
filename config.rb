require "sprockets/es6"

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Global Configuration

# Global variables
set :base_url,  "https://dixonandmoe.com"
set :base_name, "Dixon & Moe"
set :base_email, "hello@dixonandmoe.com"
set :base_imgix, "https://dixonandmoe.imgix.net"
set :base_domain, "dixonandmoe.com"
set :base_twitter, "@dixonandmoe"

# Pages with no layout
page "/*.xml",  layout: false
page "/*.json", layout: false
page "/*.txt",  layout: false
page "/rellax.html", layout: false

# Asset paths
set :css_dir,    "assets/stylesheets"
set :js_dir,     "assets/javascripts"
set :fonts_dir,  "assets/fonts"
set :images_dir, "assets/images"

# Use Sprockets for asset pipeline
activate :sprockets do |s|
  s.supported_output_extensions << '.es6'
end

# Pretty URLs
activate :directory_indexes

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Development Configuration

configure :development do

  # Config Variables
  config[:base_url] = "http://localhost:4567"

  # Reload the browser automatically whenever files change
  activate :livereload

end

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# Production Configuration

configure :build do

  # Enable cache buster
  activate :asset_hash, ignore: "assets/fonts/*"

  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # GZIP files for even better compression
  activate :gzip, exts: %w(.js .css .html .htm .xml .txt)

  # Ignore DS_Store file
  ignore ".DS_Store"

end