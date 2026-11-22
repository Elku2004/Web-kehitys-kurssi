from flask import Flask
import json

app = Flask(__name__)
@app.route('/translate/<word>')
def translateWord(word):
    with open("Moduulit/pythonFlask/T2-Kansio/dictionary.json", "r") as tiedosto:
        dictionary = json.load(tiedosto)
        finnish = dictionary[word]
    answer = {
            "English": word,
            "Finnish": finnish
            }
    return answer

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)