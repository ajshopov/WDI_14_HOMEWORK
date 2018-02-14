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
    if black[0] == white[0] || black[1] == white[1] || black.inject(0, :+) == white.inject(0, :+) || black[1] - white[1] == black[0] - white[0]
      true else false end
  end

  def to_s
    board = ""
    black_marker = black[0] * 16 + black[1] * 2 + 1
    white_marker = white[0] * 16 + white[1] * 2 + 1
    i = 1
    while i<128
      if i == black_marker
        board << 'B'
      elsif i == white_marker
        board << 'W'
      # odd add zero
      elsif i.odd?
        board << 'O'
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

# binding.pry
# puts 'end'