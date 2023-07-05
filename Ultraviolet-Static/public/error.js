"use strict";
const error = document.getElementById("px-error");
const errorCode = document.getElementById("px-error-code");
const registerButton = document.getElementById("px-register-sw");

if (location.pathname.startsWith(__uv$config.prefix)) {
  error.textContent = "Error: The service worker is not registered.";
  registerButton.classList.add("show");
}

registerButton.addEventListener("click", async () => {
  try {
    await registerSW();
    location.reload();
  } catch (err) {
    error.textContent = "Failed to register service worker, if you have an adblocker enabled it can interfere.";
    errorCode.textContent = err.toString();
    registerButton.classList.remove("show");
  }
});
