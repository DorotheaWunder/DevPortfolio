document.getElementById("current-year").textContent = new Date().getFullYear();

document.querySelectorAll(".project-video[data-video-id]").forEach((video) => {
  const videoId = video.dataset.videoId;

  if (!videoId) {
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.title = "Project video";
  iframe.loading = "lazy";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  video.replaceChildren(iframe);
});
