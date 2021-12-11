from anagram_checker import AnagramChecker 
import time





def validate(word):
    '''this gets it to be a letters and only one word
    by definition the isalpha method doesnt let you use spaces or numbers s there is no need to make a set length'''
    if word.isalpha():
        return word
    else:
        print("\n\nPlease pick a one word that has only letters!\n\n")
        menu()
def menu():
    ac = AnagramChecker()
    welcome_text = "Welcome to the Famous game of Anagrams\n"
    main_text = '''would you like to play?\nEnter "YES" to play and \"NO" to exit \n '''
    
    
    while True:
        choice = input("\n"+ '_'*len(welcome_text) + "\n" + welcome_text + main_text  + "\n").upper() 
        if choice in "NO":
            print("Ok your loss! Have a great day!")
            exit()
        elif choice in "YES":
            user_choice = input("\nplease enter a word!\n\n")
            validated_word = validate(user_choice)
            
            if validated_word:
                if ac.is_valid_word(validated_word):
                    time.sleep(1)
                    print(f'Your word is: {validated_word}')
                    time.sleep(1)
                    print("This is a valid English word")
                    anagrams = ac.is_anagram_using_filter(validated_word)
                    anagrams = ", ".join(anagrams)
                    time.sleep(1)
                    print("The Anagrams for you word are: " + anagrams.lower())
                    time.sleep(3)
                else:
                    print("\nThis isnt a valid English word")
                    time.sleep(3)











menu()