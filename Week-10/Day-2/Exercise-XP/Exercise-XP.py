

'''
Here I am importing just the whole module and I must use the module name when calling the function
'''

# import operators

# print(operators.addOperater(5,6))

'''
Here I am importing just the functions from a module
'''
# from operators import addOperater, divideOperator

# print(addOperater(33,66))
# print(divideOperator(100,4))

# '''
# Giving an alias to the function 
# '''
# from operators import addOperater as add_op, divideOperator as divide_op 

# print (add_op(5,100))
# print(divide_op(100,5))

# '''
# Giving an alias to the module
# '''

# import operators as opp


# print(opp.addOperater(100,5))
# print(opp.divideOperator(100,5))

# Q2

# import random

# def get_user_input():
#     user_input = int(input("please enter a number from 1 to 10 ")) 
#     comp_num = random.randint(1,10)
#     if comp_num == user_input:
#         print(f"You have the same number{comp_num} as the comp {user_input}")


# get_user_input()


# Q3
'''
good description
https://www.javatpoint.com/python-program-to-generate-a-random-string
'''
import string
import random

s = 5

ran = "".join(random.choices(string.ascii_letters,  k = s)) 

print(ran)

