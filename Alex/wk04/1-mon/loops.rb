require 'pry'

print('choose a maximum to guess up to ')
user_max = gets.to_i
random_number = rand(0..user_max)


puts("guess a number between 0 and #{user_max}")
guess = gets.to_i

while random_number != guess
  if guess < random_number
    puts('no way, guess higher!')
  else
    puts('not quite there, guess lower')
  end
  guess = gets.to_i
end

puts("correct! The number was #{random_number}")

# binding.pry

# puts('end of program')