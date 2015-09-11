require "builder"
require 'json'


#### DATA

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)

# # Color Codes
# data.languages.each do |lang|
#   proxy "/#{lang["directory"]}.html", "/template.html", locals: { lang: lang }, ignore: true
# end



#### SITEMAP

# Sitemap generation
page "/sitemap.xml", layout: false



#### GLOBAL CONFIGURATION

# Pretty URLs
activate :directory_indexes


# Define asset paths
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'



#### DEVELOPMENT CONFIGURATION

configure :development do
  # Reload the browser automatically whenever files change
  activate :livereload
end



#### PRODUCTION CONFIGURATION

configure :build do

  # Enable cache buster
  activate :asset_hash

  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # GZIP files for even better compression
  activate :gzip, exts: %w(.js .css .html .htm .xml .txt)

  # Ignore DS_Store file
  ignore ".DS_Store"
end