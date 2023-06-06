module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: (genretag) => {
    const randomNum = Math.random();

    // Return a random emoji
    if (genretag === "Kids") {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (genretag === "") {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },

ifEquals:(arg1, arg2, options) => { 
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
}};
