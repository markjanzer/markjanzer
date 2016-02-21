require "builder"
require 'json'


#### GLOBAL CONFIGURATION

# Global Variables
set :global_url,     "http://dixonandmoe.com"
set :global_name,    "Dixon & Moe"
set :global_email,   "alex@dixonandmoe.com"
set :global_domain,  "dixonandmoe.com"
set :global_twitter, "@dixonandmoe"

# Blog Variables
set :blog_title,    "Writing — Dixon & Moe"
set :blog_subtitle, "Design and Marketing"
set :blog_author,   "Dixon & Moe"

# Asset paths
set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :images_dir, "assets/images"

# Sitemap generation
page "/sitemap.xml", layout: false

# RSS feed
page "/feed.xml", layout: false

# Blog
page "/writing/*.html", layout: :layout_article

# Blog settings
activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.prefix = "writing"
  blog.permalink = "{title}.html"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  # blog.page_link = "page/{num}"
end

# Pretty URLs
activate :directory_indexes

# Define asset paths
set :css_dir,    'assets/stylesheets'
set :js_dir,     'assets/javascripts'
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