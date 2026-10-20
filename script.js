document.getElementById("current-year").textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function createPlayer(container) {
  const videoId = container.dataset.videoId;
  const params = new URLSearchParams({
    enablejsapi: "1",
    rel: "0",
    playsinline: "1",
  });

  // Browsers only allow autoplay when the video is muted.
  if (!reduceMotion) {
    params.set("autoplay", "1");
    params.set("mute", "1");
    params.set("loop", "1");
    params.set("playlist", videoId); // needed for looping a single video
  }

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?${params}`;
  iframe.title = "Project video";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  container.replaceChildren(iframe);
}

function sendCommand(iframe, func) {
  iframe.contentWindow.postMessage(
    JSON.stringify({ event: "command", func, args: "" }),
    "*"
  );
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const container = entry.target;
      const iframe = container.querySelector("iframe");

      if (entry.isIntersecting) {
        if (!iframe) {
          createPlayer(container);
        } else if (!reduceMotion) {
          sendCommand(iframe, "playVideo");
        }
      } else if (iframe) {
        sendCommand(iframe, "pauseVideo");
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".project-video[data-video-id]").forEach((video) => {
  if (video.dataset.videoId) {
    observer.observe(video);
  }
});

// "About Me": opens on hover/focus via CSS, and on click/tap for touch screens
const aboutMe = document.querySelector(".about-me");

if (aboutMe) {
  const button = aboutMe.querySelector(".about-me-button");
  const setOpen = (open) => {
    aboutMe.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
  };

  button.addEventListener("click", () => {
    setOpen(!aboutMe.classList.contains("open"));
  });
  document.addEventListener("click", (event) => {
    if (!aboutMe.contains(event.target)) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}