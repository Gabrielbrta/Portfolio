export default function machineWritter(element) {
  const titleElementWords = document.querySelector(element).innerHTML.split('');
  const titleElement = document.querySelector(element);

  titleElement.innerText = '';
  titleElementWords.forEach((letra, index) => {
    setTimeout(() => {
      titleElement.innerHTML += letra;
    }, 150 * index);
  });
}
