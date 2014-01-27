require 'open3'
require 'win32/open3' if RUBY_PLATFORM.match /win32/

class CoffeeFilter < Nanoc3::Filter
  identifier :coffee

  def run(content, params = {})
    output = ''
    error = ''
    command = 'coffee -s -p -l'
    Open3.popen3(command) do |stdin, stdout, stderr|
      stdin.puts content
      stdin.close
      output = stdout.read.strip
      error = stderr.read.strip
      [stdout, stderr].each { |io| io.close }
    end

    if error.length > 0
      raise("Compilation error:\n#{error}")
    else
      output
    end
  end
end
