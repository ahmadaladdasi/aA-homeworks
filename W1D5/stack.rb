class Stack
  attr_reader :stack
   def initialize
     # create ivar to store stack here!
     @stack = []
   end

   def add(el)
     # adds an element to the stack
     @stack << el
   end

   def remove
     # removes one element from the stack
     @stack.pop
   end

   def show
     # return a copy of the stack
     puts @stack.reverse #prints the stack LIFO style
   end
 end
