const video = document.querySelector("video");

const render = () => {
  video.style.left = `${-window.screenX}px`;
  video.style.top = `${-window.screenY}px`;

  window.requestAnimationFrame(render);
};

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    video.width = window.screen.availWidth;
    video.height = window.screen.availHeight;

    window.requestAnimationFrame(render);
  })
  .catch((error) => {
    window.alert("Error accessing media devices.", error);
  });
