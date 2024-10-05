from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello from Python!'

@app.route('/data')
def data():
    return {
        "Age": 22,
        "Travel": "Amtrak"
        }

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
