module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: (genre) => {

    if (genre === "Horror") {
      return `<span for="img" aria-label="skull">💀</span>`;
    } else if (genre === "Fantasy") {
      return `<span for="img" aria-label="mermaid">🧜‍♀️</span>`;
    } else if (genre === "Mystery") {
      return `<span for="img" aria-label="mystery">🔍</span>`;
    } else if (genre === "Kids") {
      return `<span for="img" aria-label="kids">🍭</span>`;
  } else if (genre === "Classic") {
    return `<span for="img" aria-label="classic">📜</span>`;
  } else if (genre === "SciFi") {
    return `<span for="img" aria-label="scifi">👽</span>`;
}
  },


ifEquals:(arg1, arg2, options) => { 
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
}
};