guard "shell" do
  block = lambda { `nanoc` }
  watch(/^(nanoc.yaml)|(Rules)/) { `nanoc`}
  watch(/^(layouts|content|static)\//) { `nanoc`}
end
