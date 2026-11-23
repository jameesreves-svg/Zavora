
function submitSupport() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !subject || !message) {
        alert("Please fill all fields");
        return;
    }

    let requests = JSON.parse(
        localStorage.getItem("zavoraSupport") || "[]"
    );

    requests.push({
        name: name,
        email: email,
        subject: subject,
        message: message,
        date: new Date().toLocaleString()
    });

    localStorage.setItem(
        "zavoraSupport",
        JSON.stringify(requests)
    );

    alert("Support request saved successfully!");

}
