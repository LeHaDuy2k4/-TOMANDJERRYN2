document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");
    const resultDiv = document.getElementById("memberNames");

    button.addEventListener("click", function () {
        resultDiv.innerHTML = `
            <ul>
                <li>
                    <strong>Hành</strong><br>
                    <img src="images/hanh.jpg" alt="Hành" width="120">
                </li>
            </ul>
        `;
    });
});
