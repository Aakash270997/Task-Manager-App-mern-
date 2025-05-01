import { hideNotification } from "../redux/notificationSlice";

// hide notifiation after 3 second
export const hideNotify = (dispatch) => {
  setTimeout(() => {
    dispatch(hideNotification());
  }, 3000);
}


// click outside the modal function
export const modalClickEvent = (refEffect, stateUpdate) => {
  const handleClickOutSide = (e) => {
    if (refEffect.current && !refEffect.current.contains(e.target)) {
      stateUpdate("hidden");
    }
  };

  document.addEventListener("mousedown", handleClickOutSide);
  return () => {
    document.removeEventListener("mousedown", handleClickOutSide);
  }
}