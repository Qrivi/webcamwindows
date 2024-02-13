const video = document.querySelector("video");

const render = () => {
  video.style.left = `${-window.screenX}px`;
  video.style.top = `${-window.screenY}px`;

  window.requestAnimationFrame(render);
};

const duplicate = () => {
  const randomX = Math.floor(Math.random() * window.screen.availWidth) - 400;
  const randomY = Math.floor(Math.random() * window.screen.availHeight) - 400;

  window.open(window.location.href, "_blank", `resizable=yes,width=400,height=400,left=${randomX},top=${randomY}`);
};

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    video.width = window.screen.availWidth;
    video.height = window.screen.availHeight;
    video.addEventListener("dblclick", duplicate);

    window.requestAnimationFrame(render);
  })
  .catch((error) => {
    window.alert("Error accessing media devices.", error);
  });
