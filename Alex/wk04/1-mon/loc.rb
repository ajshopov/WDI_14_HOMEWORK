require 'pry'

print "enter file name: "
file_name = gets.chop

number_of_lines = IO.readlines(file_name)
puts("lines: #{number_of_lines.length}")

# binding.pry

# puts('end of program')