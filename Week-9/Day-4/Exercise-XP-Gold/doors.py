class Door:

    objs = 0
    num_of_doors = []


    def __init__(self,locked=False):
        Door.objs += 1
        Door.num_of_doors.append(self)
        self.id = Door.objs
        self.locked = locked

    @property
    def next_door(self):
        return Door.num_of_doors[self.id:]

    def can_enter_door(self,other_door):
        if self.locked == other_door.locked:
            return True






door1 = Door(True)
door2 = Door(False)
door3 = Door(True)
door4 = Door(False)

print(door1.next_door)
print(door2.next_door)
print(door3.next_door)

print(door1.can_enter_door(door3))



print(door1.id)



