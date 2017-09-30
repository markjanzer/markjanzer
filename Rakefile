require "rubygems"
require "aws-sdk"
require "fileutils"
require "httparty"

website = "v4.dixonandmoe.com"
bucket = "v4.dixonandmoe.com"

desc "build static pages"
task :build do
  puts "[INIT] >>>> Compiling static pages"
  system "middleman build > sync.txt"
end

desc "copy new gzipped files and clean the directory"
task :gzip do
  puts "[INIT] >>>> Copying gzipped files"

  uploads = []
  deletes = []

  changes = ["create  build/", "updated  build/"]
  removes = ["remove  build/"]

  File.readlines("sync.txt").each do |line|
    if changes.any? { |change| line.include? change }
      if line.include?("(")
        item = line.split("(").first.split("build/").last.strip
      else
        item = line.split("build/").last.strip
      end
      uploads << item.to_s
    elsif removes.any? { |remove| line.include? remove }
      unless line.include? ".gz"
        if line.include?("(")
          item = line.split("(").first.split("build/").last.strip
        else
          item = line.split("build/").last.strip
        end
        deletes << item.to_s
      end
    end
  end

  uploads.each do |file|
    path = "gzip/" + File.dirname(file)
    gz = file + ".gz"

    exts = [".css", ".js", ".html", ".htm", ".xml", ".txt"]

    unless File.directory?(path)
      FileUtils.mkdir_p("gzip/" + File.dirname(file))
    end

    if exts.include? File.extname(file)
      FileUtils.cp("build/#{gz}", "#{path}/#{File.basename(file)}")
    else
      FileUtils.cp("build/#{file}", "#{path}/#{File.basename(file)}")
    end
  end

  deletes.each do |file|
    FileUtils.rm_rf("gzip/" + file)
  end
end

desc "sync with s3 bucket"
task :sync do
  puts "[INIT] >>>> Syncing with S3"

  # sync css / js files
  system "aws --profile=dixonandmoe s3 sync gzip/ s3://#{bucket}/ --region us-west-1 --acl=public-read --delete --cache-control='max-age=2629000' --content-encoding='gzip' --exclude '*' --include '*.css' --exclude 'assets/fonts/*' --include '*.js'"

  # sync html / xml files
  system "aws --profile=dixonandmoe s3 sync gzip/ s3://#{bucket}/ --region us-west-1 --acl=public-read --delete --cache-control='max-age=0, no-cache' --content-encoding='gzip' --exclude '*' --include '*.html' --include '*.xml' --include '*.txt'"

  # sync image files
  system "aws --profile=dixonandmoe s3 sync gzip/ s3://#{bucket}/ --region us-west-1 --acl=public-read --delete --cache-control='max-age=2629000' --exclude '*' --include 'assets/images/*' --exclude 'assets/images/*.ico' --include '*.json'"

end

# Checks github to make sure you've pushed recent commit
def check_github
  check =  `git status -sb`
  if check.include? "ahead"
    puts "You need to commit to Github before deploying"
    return false
  else
    return true
  end
end

desc "pull, build, gzip and sync"
task :deploy do
  if check_github
    Rake::Task["build"].invoke
    Rake::Task["gzip"].invoke
    Rake::Task["sync"].invoke
  end
end

