document.getElementById('signup').style.backgroundColor = '#610094';
document.getElementById('save').style.display = 'none';

//function for five star review
var output = " ";
for (i = 0; i < 5; i++) {
    output += "<i class='fas fa-star'></i>"
} 
document.getElementById("rating0").innerHTML = output;
document.getElementById("rating1").innerHTML = output;
document.getElementById("rating2").innerHTML = output;
document.getElementById("rating3").innerHTML = output;
document.getElementById("rating4").innerHTML = output;
document.getElementById("rating5").innerHTML = output;
document.getElementById("rating6").innerHTML = output;
document.getElementById("rating7").innerHTML = output;
document.getElementById("rating8").innerHTML = output;
document.getElementById("rating9").innerHTML = output;
document.getElementById("rating10").innerHTML = output;
document.getElementById("rating11").innerHTML = output;
document.getElementById("rating13").innerHTML = output;
document.getElementById("rating14").innerHTML = output;
document.getElementById("rating15").innerHTML = output;
document.getElementById("rating17").innerHTML = output;

/**Display the python courses */
function displaypython() {
    document.getElementById('python').style.display = '';
    document.getElementById('javascript').style.display = 'none';
    document.getElementById('web').style.display = 'none';
}
/**display the javascript courses */
function displayjs() {
    document.getElementById('javascript').style.display = 'block';
    document.getElementById('python').style.display = 'none';
    document.getElementById('web').style.display = 'none';
}
/**display the web development courses */
function displayweb() {
    document.getElementById('web').style.display = 'block';
    document.getElementById('javascript').style.display = 'none';
    document.getElementById('python').style.display = 'none';
}
/**change and edit profile */
function profileedit(id) {
    document.getElementById('fname').readOnly = false;
    document.getElementById('dob').readOnly = false;
    document.getElementById('num').readOnly = false;
    document.getElementById('profile-email').readOnly = false;
    document.getElementById('save').style.display = '';
    id.style.display='none';
}
function saveedit(id) {
    document.getElementById('fname').readOnly = true;
    document.getElementById('dob').readOnly = true;
    document.getElementById('num').readOnly = true;
    document.getElementById('profile-email').readOnly = true;
    document.getElementById('edit').style.display = '';
    id.style.display='none';
}


//signup function
async function signupform() {
    
            const email= document.getElementById('email').value;
            const password= document.getElementById('password').value;
            const name= document.getElementById('name').value;
        
            try {
                const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email,password,name })
            });
            const data = await response.json();
            if (response.ok) {
                document.getElementById('sign').style.display = 'none';
                document.getElementById('success').style.display = 'block';
            }
            else {
                alert(data.message);
            }
        }
            catch (error) {
                alert('Problem encountered: ');
                console.error('Error:', error);
            }
        }