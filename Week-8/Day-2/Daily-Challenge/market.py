class Farm:

    def __init__(self,name):
        self.name = name
        self.animal_dict = {}
        self.animals_list = []

    def get_animal_types(self):
        self.animals_list.sort()
        print(self.animals_list)

    def add_animal(self,key,value=1):
        if key in self.animal_dict:
            self.animal_dict[key] = self.animal_dict[key] + value
        else:
            self.animal_dict[key] = value
        
        if key in self.animals_list:
            return
        else:
            self.animals_list.append(key)
        
    def get_short_info(self):
        # Here I found a very nice way join all the object i the list to a string
        animal_list = "s, ".join(self.animals_list)
        ''' However i got stuck because I wanted the last animal in the list to say "and tigers"
            So what i did was I stored the last object into a variable. then I created a new variable with
            "and" the variable. then I used the replace method on the original variable and the used that in the print
            is there a better way way of doing this?  
        '''
        old_last_animal = self.animals_list[-1]
        new_last_animal = "and " + old_last_animal + "s."
        animal_list = animal_list.replace(old_last_animal, new_last_animal) 
        print(f"\n\nOn {self.name}s farm we have {animal_list}\n")
    
    def get_info(self):

        print(f"\n{self.name} Farm\n")

        for key,value in self.animal_dict.items():
            print(f"{key} : {value}")

        print("\nE-I-E-I-O\n")


macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.add_animal('tiger',13)

macdonald.get_info()
macdonald.get_animal_types()
macdonald.get_short_info()
