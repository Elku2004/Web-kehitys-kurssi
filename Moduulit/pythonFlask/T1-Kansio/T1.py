from flask import Flask

app = Flask(__name__)
@app.route('/prime_number/<number1>')
def isItPrime(number1):
    i = 1
    response =  {
                "Number": int(number1),
                "isPrimeNumber": True
                }
    while i < response['Number']:
        if i != 1 and response['Number'] % i == 0:
            response['isPrimeNumber'] = False
        i += 1
    return response


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)