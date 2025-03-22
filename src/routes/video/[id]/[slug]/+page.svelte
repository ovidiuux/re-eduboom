<script>
    import Header from "$lib/Header.svelte";
    import HlsPlayer from "$lib/HlsPlayer.svelte";
    import { onMount } from "svelte";

    let watchNav = $state(false)

    $effect(() => {
    const navWrap = document.getElementById("watch-nav-wrap");
    if (navWrap) navWrap.className = watchNav ? "" : "collapse";
  });

  onMount(()=>{
    const uchase = document.getElementById("uchase-nav")
    if (uchase) uchase.style = `transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);`
  })
    const { data } = $props();
</script>

<Header color={data.color}></Header>
<div id="wrap">
    <div id="watch-page">
        <div
            id="object_page"
            class="video"
            itemScope
            itemType="http://schema.org/VideoObject"
        >
            <meta itemProp="thumbnailUrl" />
            <meta itemProp="audience" content="EducationalAudience" />
            <meta itemProp="educationalUse" content="school" />
            <div
                class={`container-fluid fluid-side-padding mb-1 content-subheader ${data.color}`}
            >
                <div class="row">
                    <div class="col-12">
                        <a
                            href="/lectii-pe-materii/limba-engleza-in-engleza/nivel-a2"
                            class="text-xxs-bold mt-2 d-inline-block"
                            id="videos-backlink"
                            data-ga-click="subheader-backlink"
                        >
                            <span class="arrow"></span>
                            {data.video_data.category}
                        </a>
                    </div>
                    <div class="col-12">
                        <h1
                            class="text-xs-bold fs-md-l text-tarra mb-3 mb-md-5 pt-1"
                            itemProp="name"
                        >
                            {data.video_data.title}
                        </h1>
                    </div>
                </div>
            </div>
            <div class="container-fluid fluid-side-padding">
                <div class="row justify-content-center" id="video-test-button">
                    <div class="col-6 align-items-center mb-1 button-item">
                        <div
                            class={`video-test-button-link d-flex justify-content-center align-items-center btn btn-md-lg btn-md w-100 h-100 rounded text-xs-bold fs-md-s
active ${data.color}`}
                        >
                            <span
                                id="video-state-icon"
                                class="video-test-icon d-inline-block mr-1"
                            >
                                <span
                                    class="content-state-icon content-state-not-started"
                                >
                                    <svg role="img" aria-hidden="true">
                                        <use
                                            xlink:href="/assets/base/images/icons/sprite/symbol/icons-3bf35ebc.svg#content-video"
                                        />
                                    </svg>
                                </span>
                            </span>
                            <span class="d-inline-block">Lecție video</span>
                        </div>
                    </div>
                    <div class="col-6 mb-1 button-item">
                        <a
                            href="/#"
                            data-ga-click="watch-header-test-button-click"
                            class="video-test-button-link d-flex justify-content-center align-items-center btn btn-md-lg btn-md w-100 h-100 rounded text-xs-bold fs-md-s
not-existing"
                        >
                            <span class="video-test-icon d-inline-block mr-1">
                                <span
                                    class="content-state-icon content-state-not-started content-not-existing"
                                >
                                    <svg role="img" aria-hidden="true">
                                        <use
                                            xlink:href="/assets/base/images/icons/sprite/symbol/icons-3bf35ebc.svg#content-test"
                                        />
                                    </svg>
                                </span>
                            </span>
                            <span class="d-inline-block">Test</span>
                        </a>
                        <span id="new-test-label">
                            <svg role="img" aria-hidden="true">
                                <use
                                    xlink:href="/assets/base/images/icons/sprite/symbol/icons-3bf35ebc.svg#new-test-ro_RO"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
                <a
                    href="#re-edu"
                    id="watch-nav-mobile-toggler"
                    class={`video-nav-toggler ${watchNav ? '' : 'collapsed'}`}
                    role="button"
                    onclick={()=> watchNav = !watchNav}
                    aria-expanded="false"
                    aria-controls="watch-nav-wrap"
                >
                    Navigare
                </a>

                <div class="row">
                    <div class="col-12 col-md-9 main-video-col">
                        <div
                            id="player-section"
                            class="d-flex border border-color-3"
                        >
                            {#if data.streaming_license_id}
                                <HlsPlayer
                                    key={data.streaming_license_id}
                                    videoSrc={"/api/m3u8/" +
                                        data.streaming_license_id}
                                    poster={data.image}
                                ></HlsPlayer>
                            {/if}
                        </div>
                    </div>
                    <div class="col-12 col-md-3 pl-md-1 side-nav-wrap">
                        {@html data.playlist}
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-9 order-md-1"></div>

                    <div
                        class="col-12 col-md-3 order-md-2 object-facebook mb-4 mt-1 mb-md-0 mt-md-2 loading-bar"
                        id="video-fb-like"
                    ></div>

                    <div class="col-12 col-md-9 order-md-3">
                        <div class="description mt-md-3 mb-md-6 mb-4">
                            <div
                                class="video-description-title text-l-bold text-jane pb-md-3 pb-2"
                            >
                                Descrierea lecției
                            </div>
                            <div
                                class="video-description-body body-xxs-regular"
                                itemprop="description"
                            >
                                {data.description}
                            </div>
                        </div>
                    </div>

                    <div
                        class="col-12 d-flex flex-column order-md-5 col-md-3 mt-md-2"
                    >
                        <div class="order-1 order-md-2 mb-3 mb-md-4 mt-md-2">
                            <div itemprop="about">
                                <div
                                    class="subcategories-title text-xs-bold text-kate pb-1"
                                >
                                    Capitol:
                                </div>

                                <div
                                    class="subcategories-body text-xs-semibold text-jane pb-3"
                                >
                                    {data.video_data.category}
                                </div>
                            </div>

                            <div
                                class="keywords-title text-xs-bold text-kate pb-1"
                            >
                                Cuvinte cheie:
                            </div>
                            <div
                                class="keywords-body text-xs-semibold text-jane"
                            >
                                <div class="keywords-list mt-0">
                                    {data.video_data.keywords}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
