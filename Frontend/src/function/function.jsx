import { hideNotification } from "../redux/notificationSlice";

// hide notifiation after 3 second
export const hideNotify = (dispatch) => {
  setTimeout(() => {
    dispatch(hideNotification());
  }, 3000);
}


// click outside the modal function
// export const modalClickEvent = (refEffect, setShowAddTask) => {
//   const handleClickOutSide = (e) => {
//     if (refEffect.current && !refEffect.current.contains(e.target)) {
//       setShowAddTask(false);
//     }
//   };
//   console.log("click out side")
//   document.addEventListener("mousedown", handleClickOutSide);
//   return () => {
//     document.removeEventListener("mousedown", handleClickOutSide);
//   }
// }
export const modalClickEvent = (refEffect, stateUpdate) => {
  const handleClickOutSide = (e) => {
    if (refEffect.current && !refEffect.current.contains(e.target)) {
      stateUpdate(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutSide);

  return () => {
    document.removeEventListener("mousedown", handleClickOutSide);
  };
};
