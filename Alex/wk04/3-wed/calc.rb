require 'pry'

def add(num1,num2)
  return num1 + num2
end

def subtract(num1, num2)
  return num1 - num2
end

def multiply(num1, num2)
  return num1 * num2
end

def divide(num1, num2)
  return num1 / num2
end

cli_calc = 'a'

while cli_calc != 'q'
  
  #request two numbers with comma
  print "enter first number: "
  input1 = gets().to_i
  print "enter second number: "
  input2 = gets().to_i
  print "enter operator ( + - * / ): "
  operator = gets(). chomp()
  #request operation

  puts 'result: '

  case operator
    when '+'
      puts add(input1, input2)
    when '-'
      puts subtract(input1, input2)
    when '*'
      puts multiply(input1, input2)
    when '/'
      puts divide(input1, input2)
    else
      puts 'I dont recognise that symbol'
  end
  #call functions

print 'type q to quit or hit enter to run another complex calculation '
# type quit to quit
cli_calc = gets(). chomp()

end

# binding.pry

# puts 'end of program'