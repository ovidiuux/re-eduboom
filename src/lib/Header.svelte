<script>
    let scrolled = $state(false);
    let searchHeaderEnabled = $state(false);
    let searchTerm = $state("");
    let searchResults = $state();
    let isLoading = $state(false);

    const { color = "color-primary" } = $props();


    // Efect pentru a actualiza clasa body în funcție de headerEnabled și searchHeaderEnabled
    $effect(() => {
        const bodyElement = document.querySelector("body");
        if (bodyElement) {
       //     bodyElement.classList.toggle("header-only", headerEnabled || searchHeaderEnabled);
            bodyElement.classList.toggle("search-box", searchHeaderEnabled);
        }
    });


    $effect(() => {
        const handleScroll = () => {
            scrolled = winldow.scrollY > 20;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

   
    $effect(() => {
        if (searchTerm) {
            isLoading = true;
            fetch(`/api/lessons?q=${searchTerm}`)
                .then((response) => response.json())
                .then((data) => {
                    searchResults = data;
                    isLoading = false;
                })
                .catch((error) => {
                    console.error(error);
                    isLoading = false;
                });
        } else {
            searchResults = [];
            isLoading = false;
        }
    });
</script>

<header
    id="header"
    class={`${color}-2 ${scrolled ? "sticky-header" : ""} ${searchHeaderEnabled ? "is-header-nav-expanded" : ""}`}
    aria-label="Header principal"
>
    <div class="container-fluid fluid-side-padding not-signed-in">
        <div class="row justify-content-end">
            <div id="left-header-section" class="col-auto d-flex">
         
                <a href="/" id="header-logo" aria-label="Acasă">
                    <h3 style="color: white; padding-top: 0.26rem; font-size:1.89=rem">re-eduboom</h3>
                </a>
            </div>
            <a
                id="lesson-nav"
                class="col-12 col-md-auto"
                aria-label="Navigație lecții"
                href="/"
                target="_self"
                style="border: 0; background:transparent;"
            >
                <span
                    id="lesson-icon"
                    class="d-none d-md-flex lesson-nav-toggler"
                    aria-label="Lecții și teste"
                >
                    <svg role="img" aria-hidden="true">
                        <use
                            xlink:href="/assets/base/images/icons/sprite/symbol/icons-3bf35ebc.svg#lessons-menu"
                        />
                    </svg>
                </span>
                <span
                    class="text-white text-m-bold d-none d-md-flex lesson-nav-toggler"
                >
                    Lecții și teste
                </span>
              
            </a>
            <div id="watched-videos-counter" class="col-auto d-flex"></div>
              
            <div
                id="right-header-section"
                class="justify-content-end d-flex col-auto align-items-center text-right pl-0 order-4 pr-2 no-usersession"
            >
                <div
                    id="user-navigation"
                    class="d-flex h-100 align-items-center"
                >
                    <div id="icons-container" class="d-flex">
                        <button
                            style="border: 0; background:transparent;"
                            onclick={() =>
                                (searchHeaderEnabled = !searchHeaderEnabled)}
                            id="search-icon"
                            class="header-nav-toggler ml-1"
                            data-toggle-item="search-box"
                            aria-label="Căutare"
                        >
                            <svg role="img" aria-hidden="true">
                                <use
                                    xlink:href="/assets/base/images/icons/sprite/symbol/icons-3bf35ebc.svg#search-icon"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
        <div
            id="search-box"
            class={`search-not-logged search-box collapse header-nav w-100 text-center bg-tarra px-2 px-md-3 ${searchHeaderEnabled ? "show" : ""}`}
            aria-label="Căutare"
        >
    
            <div
                class="mt-2 mb-1 col-md-8 offset-md-2 p-0 search-field text-emma text-left"
            >
                <input
                    placeholder="Caută titlul lecției"
                    type="text"
                    id="searcher"
                    class="border-0 col-11 text-xs-regular p-0 text-emma ui-autocomplete-input"
                    autocomplete="off"
                    bind:value={searchTerm}
                    aria-label="Câutare lecții"
                />
                <span class="close-search d-none d-md-block"></span>
            </div>
        </div>
    </div>
</header>

<ul
    id="ui-id-1"
    tabIndex={0}
    class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front autocomplete-wrapper search-header-wrapper"
>
    {#each searchResults as result, index}
        <li class="col-12 col-md-8 offset-md-2 ui-menu-item">
            <a
                href={result.url}
                onclick={()=> setTimeout(()=>{
                      searchHeaderEnabled = false;
                      searchResults = [] 
                },300)}
                id="ui-id-58"
                class="ui-menu-item-wrapper"
            >
                <span class="text-xs-semibold text-emma">
                    <strong class="search-highlight">{result.value}</strong>
                </span>
                <br />
                <span class="text-xxs-bold text-jane">{result.category}</span>
                <span class="text-xxs-bold text-emma">{result.grade}</span>
                <br />
                <span class="text-xxs-semibold text-emma"></span>
            </a>
        </li>
    {/each}
</ul>
