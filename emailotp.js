function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];
    let otp_val = Math.floor(Math.random() * 10000);
 
    let emailbody = `<h2>Your OTP is ${otp_val}</h2>`;
    Email.send({
        SecureToken: "417f6414-7605-4711-9538-5fcc460cce31",
        To: email.value,
        From: "romani2181.be22@chitkara.edu.in",
        Subject: "Email OTP using JavaScript",
        Body: emailbody,
    }).then(
        message => {
            if (message === "OK") {
                alert("OTP sent to your email " + email.value);
 
                otpverify.style.display = "flex";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp-btn');
 
                otp_btn.addEventListener('click', () => {
                    if (otp_inp.value == otp_val) {
                        alert("Email address verified...");
                    } else {
                        alert("Invalid OTP");
                    }
                });
            }
        }
    );
}
