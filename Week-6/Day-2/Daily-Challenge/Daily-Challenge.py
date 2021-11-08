import random
userString = input("please write a string which is 10 characters long. ")
userStringLength = len(userString)

if userStringLength < 10:
    print("string not long enough")
elif userStringLength > 10:
    print("Your string is to long")
print(userString[0],userString[userStringLength-1])

b = "";

for a in userString:
    b += a
    print(b)

newWord = "".join(random.sample(userString,len(userString)))
print(newWord)
