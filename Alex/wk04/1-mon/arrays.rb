require 'pry'

days_of_the_week = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'

part1 = days_of_the_week.split

part2 = part1.unshift(part1.pop)

part3 = Array.new(2)

part3[0] = part2[1, 5]
part3[1] = [part2[6], part2[0]] 

part4 = part3[0]

part5 = part4.sort

binding.pry

puts('end of program')