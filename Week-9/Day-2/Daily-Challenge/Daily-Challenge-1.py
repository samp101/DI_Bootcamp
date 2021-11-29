from typing import List


class Circle:
    CIRCLE_LIST = []

    def __init__(self,radius,diameter):
        if radius:
            diameter = radius * 2
        if diameter:
            radius = diameter//2
        else:
            print("error")    

        self.radius = radius
        self.diameter = diameter

    def get_total_area(self):
        total_area = round(3.14 * self.radius**2,)
        # print(f"The area of a circle which radius is {self.radius} is {total_area} ")
        # return total_area = round(total_area,1)
        return total_area 

    def get_two_circles(self,other_circle):
        total_area_of_circles =  self.get_total_area() + other_circle.get_total_area()
        print(f"The total area of the two inputed circles is {total_area_of_circles} ")
    
    def bigger_circle(self,other_circle):
        if self.get_total_area() > other_circle.get_total_area():
            print(f"circle A whichs TA is {self.get_total_area()} is bigger then circle B which TA is {other_circle.get_total_area()}")
        elif self.get_total_area() < other_circle.get_total_area():
            print(f"circle B whichs TA is {other_circle.get_total_area()}  is bigger then circle A which TA is {self.get_total_area()}")
        else: 
            print(f"circle A and Circle B are equal with a TA of {self.get_total_area()}")
    def check_if_equal(self,other_circle):
        if self.get_total_area()  == other_circle.get_total_area():
            print(f"WOOW the two circles have a equal TA!!!")
        else:
            print("the 2 circles do not equal each other")
    # I had issues with this part
    @classmethod
    def put_in_list(cls,other_circle):
        Circle.CIRCLE_LIST.append(other_circle)
        print(Circle.CIRCLE_LIST)

c = Circle(1,3)
b = Circle(15, 30)
print(c.radius)
print(c.diameter)
print(b.radius)
print(b.diameter)
print(c.get_total_area())
c.get_two_circles(b)
c.bigger_circle(b)
c.check_if_equal(b)
c.put_in_list(b)

a = [1,2,3,4,5]
print(a)