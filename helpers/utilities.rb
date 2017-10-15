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

  def image_srcset(image_src)
    srcset = ""
    image_host = config.base_imgix
    ["320","640","750","960","1280","1600","1920","2240","2560","2880"].each_with_index do |size, index|
      if index != 9
        src = "#{image_host}#{image_path(image_src)}?q=75&w=#{size} #{size}w, "
      else
        src = "#{image_host}#{image_path(image_src)}?q=75&w=#{size} #{size}w"
      end
        # src = image_host + image_src + "?q=75&w=" + size + " " + size + "w"
      # end
      srcset.concat(src)
    end
    return srcset
  end
end