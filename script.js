document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");
    const resultDiv = document.getElementById("memberNames");

    button.addEventListener("click", function () {
        resultDiv.innerHTML = `
            <ul>
                <li>Duy</li>
                <li>Đạm</li>
                <li>Hành</li>
            </ul>
        `;
    });
});
