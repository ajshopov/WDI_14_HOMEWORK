require 'pry'

class Queens
  def initialize(positions = nil)
    @positions = positions
    if !@positions.nil?
      if @positions[:white] == @positions[:black]
        raise(ArgumentError)
      end
    end
  end 

  

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
    board = ""
    i = 1
    while i<128
      # odd add zero
      if i.odd?
        board << '0'
      elsif i % 16 == 0
        board << "\n"
      else
        board << ' '
      end
      # even add space



      i += 1
    end
    return board
  end


end

binding.pry
puts 'end'