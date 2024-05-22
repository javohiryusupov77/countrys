export function showSpinner(show, spinnerContainer) {
    if (show && spinnerContainer) {
      const spinner = document.createElement("div");
      spinner.className = 'spinner';
      spinnerContainer.append(spinner);
    } else if (show === false && spinnerContainer) {
      const spinner = spinnerContainer.querySelector(".spinner");
      spinner.remove();
    }
  }