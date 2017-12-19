require 'pry'

# Arrays
# Starting with the following array...

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
# Access the second value in planeteers.

puts '1a'
puts planeteers[1]

# Add "Heart" to the end of planeteers.

planeteers.push('Heart')
puts '1b'
puts planeteers
# Remove "Captain Planet" from the array (without using a method).

planeteers -= ["Captain Planet"]
puts '1c'
puts planeteers
# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
# and save the result in a variable called heroes.

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = rangers + planeteers

puts '1d'
puts heroes

# Alphabetize the contents of heroes using a method. The Ruby documentation might help.

puts '1e'
puts heroes.sort
# Randomize the contents of heroes using a method. The Ruby documentation might help.

puts '1f'
puts heroes.shuffle

# Bonus
# Select a random element from heroes using a method. The Ruby documentation might help.

puts '1g'
puts heroes.sample

# Select all elements in heroes that begin with "B" using a method. The Ruby documentation might help.

puts '1h'
puts heroes.select { |x| x.start_with?('B') }



# Hashes
# Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of "Michelangelo", "Nunchuks" and true respectively.

ninja_turtle = {
  :name => 'Michelangelo',
  :weapon => 'Nunchuks',
  :radical => true
}

puts '2a'
puts ninja_turtle

# Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.

ninja_turtle[:age] = 25

puts '2b'
puts ninja_turtle

# Remove the radical key-value pair from ninja_turtle.

puts '2c'
ninja_turtle.delete(':radical')
puts ninja_turtle #review

# Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).

ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]
puts '2d'
puts ninja_turtle

# Access the first element of pizza_toppings.

# # Your answer here
# Produce an array containing all of ninja_turtle's keys using a method. The Ruby documentation might help.

# # Your answer here
# Bonus
# Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. The Ruby documentation might help.

# Your answer here

binding.pry

puts 'end program'