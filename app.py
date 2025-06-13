from flask import Flask, render_template, request, redirect, url_for, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'app'

details = {
    "username": "",
    "mail": "",
    "passwd": ""
}

users = {}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/login', methods=['GET','POST'])
def login():
    if request.method == 'GET':
        data = request.get_json()
    email = data['email']
    password = data['password']
    user = users.get(email)
    if not user or not check_password_hash(user['password'], password):
        return jsonify({'success': False, 'message': 'Invalid credentials'}), 401
    session['user'] = user  # Save user info in session
    return jsonify({'success': True})
        #email = request.form.get('email')
        #password = request.form.get('password')
        #return redirect(url_for('dashboard', email=email, name=details['username']))
    #return render_template('Login.html')

@app.route('/api/signup', methods=['GET','POST'])
def signupform():
    data = request.get_json()
    gmail = data['email']
    if gmail in users:
        return jsonify({ "message": "user already exists" }), 400
    users[gmail] = {
        'name': data.get('name'),
        'email': gmail,
        'password': generate_password_hash(data.get('password'))
    }
    return jsonify({'message': 'successful'}), 200
    #details['mail'] = data.get('email')
    #details['passwd'] = data.get('password')
    #details['username'] = data.get('name')
    #return jsonify({
    #    "message": "Login was successful",
    #}), 200
    
@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/dashboard')
def dashboard():
    name = request.args.get('name')
    email = request.args.get('email')
    return render_template('dashboard.html', name=name, email=email)

@app.route('/test')
def test_page():
    return render_template('test.html')

@app.route('/api/test', methods=['POST'])
def test():
    data = request.get_json()
    maila = data.get('email')
    passw = data.get('password')
    print(maila, passw)
    if maila == 'eustace364@gmail.com' and passw == 'Menezman6860':
        return jsonify({
        "message": "Login was successful",
        "user": {
            "email": usercred["maila"],
            "passw": usercred["passw"]
        }
    }), 200
    else:
        return jsonify({'message': 'invalid email or password'}), 401

usercred = {
    "maila": "",
    "passw": ""
}

if __name__ == '__main__':
    app.run(debug=True)