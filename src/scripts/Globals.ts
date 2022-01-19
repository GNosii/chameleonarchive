import $ from 'cash-dom';

/**
 * Create an toast notification.
 * @param msg Message to display.
 */
function createToast(msg: string) {
  var toast = document.createElement('div');
  toast.innerText = msg;
  toast.classList.add('toast');

  $('body').append(toast);
  $('.toast').addClass('show');

  setTimeout(() => {
    $('.toast').remove();
  }, 3000);
}

export { createToast };
