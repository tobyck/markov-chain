import random, requests, math, time
def markov_chain(prompt, length):
    training_data = requests.get("https://raw.githubusercontent.com/TobyCK/markov-chain-training/main/Training/dataset1.txt").text.split(" ")
    final = prompt
    options_length = 0
    last_word = final.split(" ")[-1]
    if last_word in training_data:
        for i in range(length):
            last_word = final.split(" ")[-1]
            options = []
            for j in range(len(training_data)):
                if training_data[j] == last_word:
                    options_length += 1
            for k in range(len(training_data)):
                if training_data[k] == last_word:     
                    if training_data[k+1] in prompt:
                        for l in range(math.ceil(options_length/10)):
                            options.append(training_data[k+1])
                    else:
                        options.append(training_data[k+1])
            print(options)
            final += " " + random.choice(options)
    else:
        print("Sorry, I don't know that word.")
    return final
print(markov_chain("The quick brown fox jumps over the", 50))
