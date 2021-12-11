
class AnagramChecker:
    def __init__(self):
        with open("C:/Users/Shmuel/Desktop/DI_Bootcamp/Week-10/Day-5/sowpods.txt") as f:    
            self.file_words = f.readlines()

            # for i in range(len(self.file_words)):
            #     self.file_words[i] = self.file_words[i].split("\n")[0]

            self.file_words = list(map(lambda s:s.strip(), self.file_words))

    def is_valid_word(self,user_word):
        '''Checking inputed word is a English word'''
        if user_word.upper() in self.file_words:
            return True
        else:
            return False

    def is_anagram_using_filter(self,u_word):
        '''
        Using a fliter I can check the words!
        '''
        word = sorted(u_word.upper())
        return list(filter(lambda x:sorted(x) == word, self.file_words))
        
    def is_anagram_using_loop(self,user_word):
        
        '''Different function doing the same thing'''
        anagram_list = []
        word_counter = sorted(user_word.upper())
        for dict_word in self.file_words:
            if word_counter == sorted(dict_word):
                anagram_list.append(dict_word)
        return(anagram_list)






'''
lambda str:str.strip() 

        == 

def method(str):
    str.strip()
'''