export default {
  bind: (element, binding) => {
    console.log("arg:", binding.arg, "modifiers:", binding.modifiers);
    if (binding.arg !== "position") return;
    Object.keys(binding.modifiers).forEach((key) => {
      element.style[key] = "5px";
    });
    element.style.position = "absolute";
    // element.style.bottom = "5px";
    // element.style.right = "5px";
  },
};
