<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Hls from "hls.js";

  const { videoSrc, poster, key } = $props();

  let videoElement: HTMLVideoElement;
  let hlsInstance: Hls;

  const initializeHls = (src: string) => {
    if (Hls.isSupported()) {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
      hlsInstance = new Hls();
      hlsInstance.loadSource(src);
      hlsInstance.attachMedia(videoElement);

      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("Video loaded and ready to play");
      });

      hlsInstance.on(Hls.Events.ERROR, (event, data) => {
        console.error("HLS error:", data);
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hlsInstance.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hlsInstance.recoverMediaError();
              break;
            default:
              hlsInstance.destroy();
              break;
          }
        }
      });
    } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
      videoElement.src = src;
      videoElement.addEventListener("loadedmetadata", () => {
        console.log("Video loaded and ready to play");
      });
    }
  };

  onMount(() => {
    initializeHls(videoSrc);

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  });

  // Svelte 5 effect to reinitialize HLS when videoSrc changes
  $effect(() => {
    if (videoSrc) {
      initializeHls(videoSrc);
    }
  });
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<video
  {poster}
  class="ucha-player play-button flowplayer use-play-1 has-poster is-starting is-seekable is-in-viewport is-loaded"
  controls
  autoplay
  bind:this={videoElement}
></video>

<style>
  video {
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
  }
</style>
