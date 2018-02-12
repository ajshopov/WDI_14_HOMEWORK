class Phone

  def initialize(number)
   @number = number.scan(/[0-9]/).join('')
  end

  def number
    if @number.length == 11 && @number[0] == "1"
      @number = @number.slice(1..11)
    elsif @number.length == 11 || @number.length == 9
      return "0000000000"
    end
    return @number
  end

  def area_code
    @number[0..2]
  end

  def to_s
    "(#{area_code}) #{@number[3..5]}-#{@number[6..9]}"
  end
end