$(document).ready(function() {
  // Обработчик события клика на кнопку "Add"
  $('.button').click(function() {
      // Получаем значения из полей формы
      var username = $('#username').val();
      var password = $('#password').val();
      var role = $('input[name=radio]:checked').val(); // Получаем выбранное значение радио-кнопки

      // Создаем объект с данными для отправки на сервер
      var formData = {
          username: username,
          password: password,
          role: role
      };

      // Отправляем данные на сервер методом POST с помощью AJAX-запроса
      $.ajax({
          type: 'POST',
          url: 'URL_ВАШЕГО_СЕРВЕРА', // Укажите URL вашего сервера
          data: formData, // Данные для отправки
          success: function(response) {
              // Если запрос успешен, выводим сообщение об успешном добавлении пользователя
              alert('User added successfully!');
              // Очищаем поля формы
              $('#username').val('');
              $('#password').val('');
          },
          error: function(xhr, status, error) {
              // Если произошла ошибка при отправке запроса, выводим сообщение об ошибке
              alert('Error adding user: ' + error);
          }
      });
  });
});
