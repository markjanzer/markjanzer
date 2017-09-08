module Utilities
  
  # Active link_to
  def active_link_to(*args, &block)

    # Check for block
    url_idx = block_given? ? 0 : 1
    options_idx = block_given? ? 1 : 2

    # Get the url
    page = current_page.url

    # Set the url
    url = args[url_idx]

    # Get the parent url
    unless page == "/" || page == ""
      parent_url = "/" + page.to_s.split("/")[1] + "/"
    end

    options = args[options_idx] || {}
    options[:class] ||= ""

    if (url == page || url == parent_url)
      options[:class] << " is-active"
      args[options_idx] = options
    end
    
    link_to(*args, &block)
  end
end