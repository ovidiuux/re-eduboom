<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Hls from "hls.js";

  const { videoSrc, poster, key } = $props();

  let videoElement: HTMLVideoElement;
  let hlsInstance: Hls | null = null;

  const initializeHls = (src: string) => {
    if (!videoElement) return; // Verificăm dacă elementul video există

    if (Hls.isSupported()) {
      if (hlsInstance) {
        hlsInstance.destroy(); // Distrugem instanța existentă
        hlsInstance = null;
      }

      hlsInstance = new Hls();
      hlsInstance.loadSource(src);
      hlsInstance.attachMedia(videoElement);

      hlsInstance.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hlsInstance?.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hlsInstance?.recoverMediaError();
              break;
            default:
              hlsInstance?.destroy();
              hlsInstance = null;
              break;
          }
        }
      });
    } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
      videoElement.src = src;
    }
  };

  onMount(() => {
    initializeHls(videoSrc);

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
        hlsInstance = null;
      }
    };
  });

  onDestroy(() => {
    if (hlsInstance) {
      hlsInstance.destroy();
      hlsInstance = null;
    }
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