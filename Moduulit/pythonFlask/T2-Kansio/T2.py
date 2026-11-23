from flask import Flask, Response
import json

app = Flask(__name__)
@app.route('/translate/<word>')
def translateWord(word):
    englishWord = word.lower()
    try:
        with open("Moduulit/pythonFlask/T2-Kansio/dictionary.json", "r") as tiedosto:
            dictionary = json.load(tiedosto)
            finnish = dictionary[englishWord]
        answer = {
                "English": englishWord,
                "Finnish": finnish
                }
        return answer
    except KeyError:
        response = {
            "message": "Word not found",
            "status": 400
        }
        json_response = json.dumps(response)
        http_response = Response(response=json_response, status=400, mimetype="application/json")
        return http_response
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)