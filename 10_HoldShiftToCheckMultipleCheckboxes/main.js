window.onload = function() {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', checkboxClick);
  });

  let checkedBox = null;
  function checkboxClick(e) {
    // If we're unchecking a box, it doesn't count.
    if (!this.checked) {
      // If this unchecked box was the checked box, it isn't
      // any more.
      if (this === checkedBox) checkedBox = null;
      return true;
    }

    // If we check a checkbox without shift, record which one
    // it is.
    if (!e.shiftKey) {
      checkedBox = this;
      return true;
    }

    // If we haven't identified the first checked box,
    // there's no work to do.
    if (!checkedBox) return true;

    // If the checkedBox and this one are the same box, are
    // the same, there are none between the two boxes, so
    // return.
    if (checkedBox === this) return true;

    let checkThisBox = false;

    checkboxes.forEach(checkbox => {
      // Toggle automatically checking the box when we get to
      // either of the checked boxes.
      if (checkbox === checkedBox || checkbox === this) {
        checkThisBox = !checkThisBox;
      }
      // checkThisBox will only be true if we've reached the
      // first box in the range and haven't yet reached the
      // last one.
      if (checkThisBox) checkbox.checked = true;
    });
  }
}
