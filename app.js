function hero() {
  const container = document.getElementById("container");
  const image1 = document.querySelector(".image1");
  const image2 = document.querySelector(".image2");
  const image3 = document.querySelector(".image3");
  const image4 = document.querySelector(".image4");
  const image5 = document.querySelector(".image5");
  [image1, image2, image3, image4, image5].forEach(
    (el) => (el.style.transition = "transform 8s")
  );
  container.addEventListener("mousemove", (event) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const mouseXPercent = (event.clientX / windowWidth) * 100;
    const mouseYPercent = (event.clientY / windowHeight) * 100;

    mouseXPercent > 40
      ? (image4.style.transform = `translate(${100}px, ${100}px)`)
      : (image4.style.transform = "translate(0, 0)");

    mouseXPercent > 50
      ? (image2.style.transform = `translate(${100}px, ${0}px)`) &&
        (image5.style.transform = `translate(${100}px, ${80}px)`)
      : (image2.style.transform = "translate(0, 0)") &&
        (image5.style.transform = "translate(0, 0)");

    mouseXPercent > 60
      ? (image3.style.transform = `translate(${100}px, ${50}px)`)
      : (image3.style.transform = "translate(0, 0)");

    mouseXPercent > 70
      ? (image1.style.transform = `translate(${100}px, ${-50}px)`)
      : (image1.style.transform = "translate(0, 0)");
  });
}
hero();

function restartVideo() {
  const video = document.getElementById("my-video");
  video.currentTime = 0; // Нулиране на текущата позиция на видеото до началото
  video.play(); // Стартиране на видеото
}
restartVideo();

function meatCut() {
  console.log('here');
  const imgCut = document.getElementById("meatCut");
  const currSection = document.getElementsByClassName("detailsProduct")[0];
  console.log(currSection);

  currSection.addEventListener("mousemove", (ev) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const mouseXPercent = (ev.clientX / windowWidth) * 100;
    const mouseYPercent = (ev.clientY / windowHeight) * 100;
    console.log(mouseXPercent);
  });
}
meatCut();
