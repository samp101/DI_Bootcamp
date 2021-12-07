# import datetime

# B_day = datetime.datetime.now()

# print(B_day.strftime("%c"))


# EX2

# import datetime

# present_date = datetime.datetime.now()
# future_date = datetime.datetime(2022,1,1)
# time_left =  future_date - present_date

# print(f"the 1rst of January is in {time_left}")

# Ex3
# import datetime

# def get_bday_date(year,month,day):
#     bday = datetime.datetime(year,month,day)
#     present_day = datetime.datetime.now()
#     days_alive = present_day - bday
#     print("you have been alive for ", days_alive)
#     print(f"you have been alive for {days_alive.total_seconds()//60} minutes")
    

# get_bday_date(1993,9,13)

# ex4

# import datetime

# def days_left_holiday():
#     present_date = datetime.datetime.now() 
#     purim_date_2022 = datetime.datetime(2022,2,25)
#     days_till_holiday = purim_date_2022 - present_date

#     print(days_till_holiday)


# days_left_holiday()


# from faker import Faker

# fake = Faker()

# list_of_dict= []

# def faker_info(x,list):

#     a=0
#     names_dict = {}

#     while a<x:
#         names_dict[a+1] = {}    
#         names_dict[a+1]["Name"] = fake.name()    
#         names_dict[a+1]["Address"] = fake.address()
#         names_dict[a+1]["DOB"] = fake.date()
#         a +=1
#     list.append(names_dict)
#     print(list)
    
# faker_info(5,list_of_dict)




