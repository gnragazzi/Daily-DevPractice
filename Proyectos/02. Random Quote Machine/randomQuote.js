const textDOM = document.getElementById("text");
const authorDOM = document.getElementById("author");

export default async (url) => {
  const response = await fetch(url);
  let data = await response.json();
  const { text, author } = data.quotes[0];
  authorDOM.textContent = author;
  textDOM.textContent = text;
};
