require 'pry'

class Queens
  def initialize(positions = nil)
      @positions = positions
  end 

  board = []

  def white
    if !@positions.nil?
      @positions[:white]
    else
      [0,3]
    end
  end 

  def black
    if !@positions.nil?
      @positions[:black]
    else
      [7,3]
    end
  end

  def attack?
  end

  def to_s
  end

end

# binding.pry