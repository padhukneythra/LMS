function openModal(title, details) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalBody").innerHTML = details;
    var modal = new bootstrap.Modal(document.getElementById("courseModal"));
    modal.show();
}