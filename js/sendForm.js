const form = document.querySelector(".form-test-drive");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const body = {};

    formData.append("form", form.classList.value);

    formData.forEach((value, field) => {
      body[field] = value;
    });

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Статус ошибки: ${response.status}`);
        }
      })
      .then((data) => {
        alert("Данные отправлены успешно!");
        form.reset();
      })
      .catch((error) => {
        alert("Ошибка отправки данных: " + error.message);
        console.error("Ошибка:", error);
      });
  });
}
