class Map
  attr_reader :result

  def initialize
    @result = []
  end

  def assign(k,v)
    pair_check = @result.index {|pair| pair[0] == k}
    if pair_check
      @result[pair_check][1] = v
    else
      @result << [k,v]
    end
  end

  def lookup(k)
    @result.each {|pair| return pair[1] if k == pair[0]}
  end

  def remove(k)
    @result.reject!{|pair| pair[0] == k}
    @result
  end

  def show
    @result.dup
  end

end
