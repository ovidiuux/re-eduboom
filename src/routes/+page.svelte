<script>
    import Header from "$lib/Header.svelte";

</script>
<Header>
    
</Header>

<div id="lessons-page" data-category-id="" data-grade-id="">
    <div
        id="subheader"
        class="container-fluid fluid-side-padding color-primary"
    >
        <div class="row">
            <div class="col-12 col-md-9">
                <h1 class="text-tarra" id="lessons-main-title">
                    <span>Toate lecțiile video și testele</span>
                    <span class="ml-1 ml-md-2" id="selected-class"></span>
                </h1>
            </div>
        </div>
    </div>

    <section
        id="categories-matrix"
        class="container-fluid fluid-side-padding mb-4 mt-1 mt-md-2"
    >
        <ul id="all-videos-page" class="row nav categories-matrix">
            <li
                class="col-6 col-sm-3 col-md-12 matrix-category-1"
                itemscope=""
                itemtype="http://schema.org/SiteNavigationElement"
            >
                <a
                    itemprop="url"
                    class="to-category-page 1"
                    href="/lectii-pe-materii/matematica"
                    aria-label="Buton spre toate lecțiile după matematică"
                    title="                Lecții video după matematică            "
                    data-ga-click="matrix-click-category"
                >
                    <svg role="img" class="icon text-color-1">
                        <use
                            xlink:href="/assets/base/images/icons/categories/categories-e397de1b.svg#category-1"
                        ></use>
                    </svg>

                    <h4
                        itemprop="name"
                        id="matrix-category-matematica"
                        class="name"
                    >
                        Matematică
                    </h4>
                </a>

                <ul class="nav grade-links">
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica/3-clasa"
                            class="circle"
                            title="Lecții video după matematică_clasa a iii-a"
                            data-ga-click="matrix-click-class"
                        >
                            III
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica/4-clasa"
                            class="circle"
                            title="Lecții video după matematică_clasa a iv-a
"
                            data-ga-click="matrix-click-class"
                        >
                            IV
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica/5-clasa"
                            class="circle"
                            title="Lecții video după matematică_clasa a v-a"
                            data-ga-click="matrix-click-class"
                        >
                            V
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica/6-clasa"
                            class="circle"
                            title="Lecții video după matematică_clasa a vi-a"
                            data-ga-click="matrix-click-class"
                        >
                            VI
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica/7-clasa"
                            class="circle"
                            title="Lecții video după matematică_clasa a vii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica/8-clasa"
                            class="circle"
                            title="Lecții video după matematică_clasa a viii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VIII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica/9-clasa"
                            class="circle"
                            title="Lecții video după matematică_clasa a ix-a
"
                            data-ga-click="matrix-click-class"
                        >
                            IX
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica/10-clasa"
                            class="circle"
                            title="Lecții video după matematică_clasa a x-a
"
                            data-ga-click="matrix-click-class"
                        >
                            X
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica/11-clasa"
                            class="circle"
                            title="Lecții video după matematică_clasa a xi-a"
                            data-ga-click="matrix-click-class"
                        >
                            XI
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica/12-clasa"
                            class="circle"
                            title="Lecții video după matematică_clasa a xii-a"
                            data-ga-click="matrix-click-class"
                        >
                            XII
                        </a>
                    </li>
                </ul>
            </li>

            <li
                class="col-6 col-sm-3 col-md-12 matrix-category-12"
                itemscope=""
                itemtype="http://schema.org/SiteNavigationElement"
            >
                <a
                    itemprop="url"
                    class="to-category-page 1"
                    href="/lectii-pe-materii/matematica-si-explorarea-mediului"
                    aria-label="Buton spre toate lecțiile după matematică și explorarea mediului"
                    title="                Lecții video după matematică și explorarea mediului            "
                    data-ga-click="matrix-click-category"
                >
                    <svg role="img" class="icon text-color-12">
                        <use
                            xlink:href="/assets/base/images/icons/categories/categories-e397de1b.svg#category-12"
                        ></use>
                    </svg>

                    <h4
                        itemprop="name"
                        id="matrix-category-matematica-si-explorarea-mediului"
                        class="name"
                    >
                        Matematică și explorarea mediului
                    </h4>
                </a>

                <ul class="nav grade-links">
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica-si-explorarea-mediului/clasa-pregatitoare"
                            class="circle"
                            title="Lecții video după matematică și explorarea mediului_clasa pregătitoare"
                            data-ga-click="matrix-click-class"
                        >
                            clasa pregătitoare
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica-si-explorarea-mediului/1-clasa"
                            class="circle"
                            title="Lecții video după matematică și explorarea mediului_clasa i"
                            data-ga-click="matrix-click-class"
                        >
                            I
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/matematica-si-explorarea-mediului/2-clasa"
                            class="circle"
                            title="Lecții video după matematică și explorarea mediului_clasa a ii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            II
                        </a>
                    </li>
                </ul>
            </li>

            <li
                class="col-6 col-sm-3 col-md-12 matrix-category-2"
                itemscope=""
                itemtype="http://schema.org/SiteNavigationElement"
            >
                <a
                    itemprop="url"
                    class="to-category-page 1"
                    href="/lectii-pe-materii/romanian-language"
                    aria-label="Buton spre toate lecțiile după limba și literatura română"
                    title="                Lecții video după limba și literatura română            "
                    data-ga-click="matrix-click-category"
                >
                    <svg role="img" class="icon text-color-2">
                        <use
                            xlink:href="/assets/base/images/icons/categories/categories-e397de1b.svg#category-2"
                        ></use>
                    </svg>

                    <h4
                        itemprop="name"
                        id="matrix-category-romanian-language"
                        class="name"
                    >
                        Limba și literatura română
                    </h4>
                </a>

                <ul class="nav grade-links">
                    <li class="">
                        <a
                            href="/lectii-pe-materii/romanian-language/3-clasa"
                            class="circle"
                            title="Lecții video după limba și literatura română_clasa a iii-a"
                            data-ga-click="matrix-click-class"
                        >
                            III
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/romanian-language/4-clasa"
                            class="circle"
                            title="Lecții video după limba și literatura română_clasa a iv-a
"
                            data-ga-click="matrix-click-class"
                        >
                            IV
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/romanian-language/5-clasa"
                            class="circle"
                            title="Lecții video după limba și literatura română_clasa a v-a"
                            data-ga-click="matrix-click-class"
                        >
                            V
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/romanian-language/6-clasa"
                            class="circle"
                            title="Lecții video după limba și literatura română_clasa a vi-a"
                            data-ga-click="matrix-click-class"
                        >
                            VI
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/romanian-language/7-clasa"
                            class="circle"
                            title="Lecții video după limba și literatura română_clasa a vii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/romanian-language/8-clasa"
                            class="circle"
                            title="Lecții video după limba și literatura română_clasa a viii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VIII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/romanian-language/9-clasa"
                            class="circle"
                            title="Lecții video după limba și literatura română_clasa a ix-a
"
                            data-ga-click="matrix-click-class"
                        >
                            IX
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/romanian-language/10-clasa"
                            class="circle"
                            title="Lecții video după limba și literatura română_clasa a x-a
"
                            data-ga-click="matrix-click-class"
                        >
                            X
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/romanian-language/11-clasa"
                            class="circle"
                            title="Lecții video după limba și literatura română_clasa a xi-a"
                            data-ga-click="matrix-click-class"
                        >
                            XI
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/romanian-language/12-clasa"
                            class="circle"
                            title="Lecții video după limba și literatura română_clasa a xii-a"
                            data-ga-click="matrix-click-class"
                        >
                            XII
                        </a>
                    </li>
                </ul>
            </li>

            <li
                class="col-6 col-sm-3 col-md-12 matrix-category-13"
                itemscope=""
                itemtype="http://schema.org/SiteNavigationElement"
            >
                <a
                    itemprop="url"
                    class="to-category-page 1"
                    href="/lectii-pe-materii/comunicare-in-limba-romana"
                    aria-label="Buton spre toate lecțiile după comunicare în limba română"
                    title="                Lecții video după comunicare în limba română            "
                    data-ga-click="matrix-click-category"
                >
                    <svg role="img" class="icon text-color-13">
                        <use
                            xlink:href="/assets/base/images/icons/categories/categories-e397de1b.svg#category-13"
                        ></use>
                    </svg>

                    <h4
                        itemprop="name"
                        id="matrix-category-comunicare-in-limba-romana"
                        class="name"
                    >
                        Comunicare în limba română
                    </h4>
                </a>

                <ul class="nav grade-links">
                    <li class="">
                        <a
                            href="/lectii-pe-materii/comunicare-in-limba-romana/clasa-pregatitoare"
                            class="circle"
                            title="Lecții video după comunicare în limba română_clasa pregătitoare"
                            data-ga-click="matrix-click-class"
                        >
                            clasa pregătitoare
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/comunicare-in-limba-romana/1-clasa"
                            class="circle"
                            title="Lecții video după comunicare în limba română_clasa i"
                            data-ga-click="matrix-click-class"
                        >
                            I
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/comunicare-in-limba-romana/2-clasa"
                            class="circle"
                            title="Lecții video după comunicare în limba română_clasa a ii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            II
                        </a>
                    </li>
                </ul>
            </li>

            <li
                class="col-6 col-sm-3 col-md-12 matrix-category-3"
                itemscope=""
                itemtype="http://schema.org/SiteNavigationElement"
            >
                <a
                    itemprop="url"
                    class="to-category-page 1"
                    href="/lectii-pe-materii/chemistry"
                    aria-label="Buton spre toate lecțiile după chimie"
                    title="                Lecții video după chimie            "
                    data-ga-click="matrix-click-category"
                >
                    <svg role="img" class="icon text-color-3">
                        <use
                            xlink:href="/assets/base/images/icons/categories/categories-e397de1b.svg#category-3"
                        ></use>
                    </svg>

                    <h4
                        itemprop="name"
                        id="matrix-category-chemistry"
                        class="name"
                    >
                        Chimie
                    </h4>
                </a>

                <ul class="nav grade-links">
                    <li class="">
                        <a
                            href="/lectii-pe-materii/chemistry/7-clasa"
                            class="circle"
                            title="Lecții video după chimie_clasa a vii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/chemistry/8-clasa"
                            class="circle"
                            title="Lecții video după chimie_clasa a viii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VIII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/chemistry/9-clasa"
                            class="circle"
                            title="Lecții video după chimie_clasa a ix-a
"
                            data-ga-click="matrix-click-class"
                        >
                            IX
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/chemistry/10-clasa"
                            class="circle"
                            title="Lecții video după chimie_clasa a x-a
"
                            data-ga-click="matrix-click-class"
                        >
                            X
                        </a>
                    </li>
                </ul>
            </li>

            <li
                class="col-6 col-sm-3 col-md-12 matrix-category-4"
                itemscope=""
                itemtype="http://schema.org/SiteNavigationElement"
            >
                <a
                    itemprop="url"
                    class="to-category-page 1"
                    href="/lectii-pe-materii/physics"
                    aria-label="Buton spre toate lecțiile după fizică"
                    title="                Lecții video după fizică            "
                    data-ga-click="matrix-click-category"
                >
                    <svg role="img" class="icon text-color-4">
                        <use
                            xlink:href="/assets/base/images/icons/categories/categories-e397de1b.svg#category-4"
                        ></use>
                    </svg>

                    <h4
                        itemprop="name"
                        id="matrix-category-physics"
                        class="name"
                    >
                        Fizică
                    </h4>
                </a>

                <ul class="nav grade-links">
                    <li class="">
                        <a
                            href="/lectii-pe-materii/physics/6-clasa"
                            class="circle"
                            title="Lecții video după fizică_clasa a vi-a"
                            data-ga-click="matrix-click-class"
                        >
                            VI
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/physics/7-clasa"
                            class="circle"
                            title="Lecții video după fizică_clasa a vii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/physics/8-clasa"
                            class="circle"
                            title="Lecții video după fizică_clasa a viii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VIII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/physics/9-clasa"
                            class="circle"
                            title="Lecții video după fizică_clasa a ix-a
"
                            data-ga-click="matrix-click-class"
                        >
                            IX
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/physics/10-clasa"
                            class="circle"
                            title="Lecții video după fizică_clasa a x-a
"
                            data-ga-click="matrix-click-class"
                        >
                            X
                        </a>
                    </li>
                </ul>
            </li>

            <li
                class="col-6 col-sm-3 col-md-12 matrix-category-5"
                itemscope=""
                itemtype="http://schema.org/SiteNavigationElement"
            >
                <a
                    itemprop="url"
                    class="to-category-page 1"
                    href="/lectii-pe-materii/biology"
                    aria-label="Buton spre toate lecțiile după biologie"
                    title="                Lecții video după biologie            "
                    data-ga-click="matrix-click-category"
                >
                    <svg role="img" class="icon text-color-5">
                        <use
                            xlink:href="/assets/base/images/icons/categories/categories-e397de1b.svg#category-5"
                        ></use>
                    </svg>

                    <h4
                        itemprop="name"
                        id="matrix-category-biology"
                        class="name"
                    >
                        Biologie
                    </h4>
                </a>

                <ul class="nav grade-links">
                    <li class="">
                        <a
                            href="/lectii-pe-materii/biology/5-clasa"
                            class="circle"
                            title="Lecții video după biologie_clasa a v-a"
                            data-ga-click="matrix-click-class"
                        >
                            V
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/biology/6-clasa"
                            class="circle"
                            title="Lecții video după biologie_clasa a vi-a"
                            data-ga-click="matrix-click-class"
                        >
                            VI
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/biology/7-clasa"
                            class="circle"
                            title="Lecții video după biologie_clasa a vii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/biology/8-clasa"
                            class="circle"
                            title="Lecții video după biologie_clasa a viii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VIII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/biology/9-clasa"
                            class="circle"
                            title="Lecții video după biologie_clasa a ix-a
"
                            data-ga-click="matrix-click-class"
                        >
                            IX
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/biology/10-clasa"
                            class="circle"
                            title="Lecții video după biologie_clasa a x-a
"
                            data-ga-click="matrix-click-class"
                        >
                            X
                        </a>
                    </li>
                </ul>
            </li>

            <li
                class="col-6 col-sm-3 col-md-12 matrix-category-15"
                itemscope=""
                itemtype="http://schema.org/SiteNavigationElement"
            >
                <a
                    itemprop="url"
                    class="to-category-page 1"
                    href="/lectii-pe-materii/istorie"
                    aria-label="Buton spre toate lecțiile după istorie"
                    title="                Lecții video după istorie            "
                    data-ga-click="matrix-click-category"
                >
                    <svg role="img" class="icon text-color-15">
                        <use
                            xlink:href="/assets/base/images/icons/categories/categories-e397de1b.svg#category-15"
                        ></use>
                    </svg>

                    <h4
                        itemprop="name"
                        id="matrix-category-istorie"
                        class="name"
                    >
                        Istorie
                    </h4>
                </a>

                <ul class="nav grade-links">
                    <li class="">
                        <a
                            href="/lectii-pe-materii/istorie/4-clasa"
                            class="circle"
                            title="Lecții video după istorie_clasa a iv-a
"
                            data-ga-click="matrix-click-class"
                        >
                            IV
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/istorie/5-clasa"
                            class="circle"
                            title="Lecții video după istorie_clasa a v-a"
                            data-ga-click="matrix-click-class"
                        >
                            V
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/istorie/6-clasa"
                            class="circle"
                            title="Lecții video după istorie_clasa a vi-a"
                            data-ga-click="matrix-click-class"
                        >
                            VI
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/istorie/7-clasa"
                            class="circle"
                            title="Lecții video după istorie_clasa a vii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/istorie/8-clasa"
                            class="circle"
                            title="Lecții video după istorie_clasa a viii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VIII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/istorie/9-clasa"
                            class="circle"
                            title="Lecții video după istorie_clasa a ix-a
"
                            data-ga-click="matrix-click-class"
                        >
                            IX
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/istorie/10-clasa"
                            class="circle"
                            title="Lecții video după istorie_clasa a x-a
"
                            data-ga-click="matrix-click-class"
                        >
                            X
                        </a>
                    </li>
                </ul>
            </li>

            <li
                class="col-6 col-sm-3 col-md-12 matrix-category-6"
                itemscope=""
                itemtype="http://schema.org/SiteNavigationElement"
            >
                <a
                    itemprop="url"
                    class="to-category-page 1"
                    href="/lectii-pe-materii/geografie"
                    aria-label="Buton spre toate lecțiile după geografie"
                    title="                Lecții video după geografie            "
                    data-ga-click="matrix-click-category"
                >
                    <svg role="img" class="icon text-color-6">
                        <use
                            xlink:href="/assets/base/images/icons/categories/categories-e397de1b.svg#category-6"
                        ></use>
                    </svg>

                    <h4
                        itemprop="name"
                        id="matrix-category-geografie"
                        class="name"
                    >
                        Geografie
                    </h4>
                </a>

                <ul class="nav grade-links">
                    <li class="">
                        <a
                            href="/lectii-pe-materii/geografie/4-clasa"
                            class="circle"
                            title="Lecții video după geografie_clasa a iv-a
"
                            data-ga-click="matrix-click-class"
                        >
                            IV
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/geografie/5-clasa"
                            class="circle"
                            title="Lecții video după geografie_clasa a v-a"
                            data-ga-click="matrix-click-class"
                        >
                            V
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/geografie/6-clasa"
                            class="circle"
                            title="Lecții video după geografie_clasa a vi-a"
                            data-ga-click="matrix-click-class"
                        >
                            VI
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/geografie/7-clasa"
                            class="circle"
                            title="Lecții video după geografie_clasa a vii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/geografie/8-clasa"
                            class="circle"
                            title="Lecții video după geografie_clasa a viii-a
"
                            data-ga-click="matrix-click-class"
                        >
                            VIII
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/geografie/9-clasa"
                            class="circle"
                            title="Lecții video după geografie_clasa a ix-a
"
                            data-ga-click="matrix-click-class"
                        >
                            IX
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/geografie/10-clasa"
                            class="circle"
                            title="Lecții video după geografie_clasa a x-a
"
                            data-ga-click="matrix-click-class"
                        >
                            X
                        </a>
                    </li>
                </ul>
            </li>

            <li
                class="col-6 col-sm-3 col-md-12 matrix-category-9"
                itemscope=""
                itemtype="http://schema.org/SiteNavigationElement"
            >
                <a
                    itemprop="url"
                    class="to-category-page 1"
                    href="/lectii-pe-materii/stiinte-ale-naturii"
                    aria-label="Buton spre toate lecțiile după științe ale naturii"
                    title="                Lecții video după științe ale naturii            "
                    data-ga-click="matrix-click-category"
                >
                    <svg role="img" class="icon text-color-9">
                        <use
                            xlink:href="/assets/base/images/icons/categories/categories-e397de1b.svg#category-9"
                        ></use>
                    </svg>

                    <h4
                        itemprop="name"
                        id="matrix-category-stiinte-ale-naturii"
                        class="name"
                    >
                        Științe ale naturii
                    </h4>
                </a>

                <ul class="nav grade-links">
                    <li class="">
                        <a
                            href="/lectii-pe-materii/stiinte-ale-naturii/3-clasa"
                            class="circle"
                            title="Lecții video după științe ale naturii_clasa a iii-a"
                            data-ga-click="matrix-click-class"
                        >
                            III
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/stiinte-ale-naturii/4-clasa"
                            class="circle"
                            title="Lecții video după științe ale naturii_clasa a iv-a
"
                            data-ga-click="matrix-click-class"
                        >
                            IV
                        </a>
                    </li>
                </ul>
            </li>

            <li
                class="col-6 col-sm-3 col-md-12 matrix-category-14"
                itemscope=""
                itemtype="http://schema.org/SiteNavigationElement"
            >
                <a
                    itemprop="url"
                    class="to-category-page 1"
                    href="/lectii-pe-materii/limba-engleza-in-engleza"
                    aria-label="Buton spre toate lecțiile după limba engleză în engleză"
                    title="                Lecții video după limba engleză în engleză            "
                    data-ga-click="matrix-click-category"
                >
                    <svg role="img" class="icon text-color-14">
                        <use
                            xlink:href="/assets/base/images/icons/categories/categories-e397de1b.svg#category-14"
                        ></use>
                    </svg>

                    <h4
                        itemprop="name"
                        id="matrix-category-limba-engleza-in-engleza"
                        class="name"
                    >
                        Limba engleză în engleză
                    </h4>
                </a>

                <ul class="nav grade-links">
                    <li class="">
                        <a
                            href="/lectii-pe-materii/limba-engleza-in-engleza/incepatori"
                            class="circle"
                            title="Lecții video după limba engleză în engleză_începători"
                            data-ga-click="matrix-click-class"
                        >
                            Începători
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/limba-engleza-in-engleza/nivel-a1"
                            class="circle"
                            title="Lecții video după limba engleză în engleză_nivel a1"
                            data-ga-click="matrix-click-class"
                        >
                            A1
                        </a>
                    </li>
                    <li class="">
                        <a
                            href="/lectii-pe-materii/limba-engleza-in-engleza/nivel-a2"
                            class="circle"
                            title="Lecții video după limba engleză în engleză_nivel a2"
                            data-ga-click="matrix-click-class"
                        >
                            A2
                        </a>
                    </li>
                    <li class="">
                        <div class="circle disabled" title="În curând!">B1</div>
                    </li>
                    <li class="">
                        <div class="circle disabled" title="În curând!">B2</div>
                    </li>
                </ul>
            </li>

            <li
                class="col-6 col-sm-3 col-md-12 matrix-category-7"
                itemscope=""
                itemtype="http://schema.org/SiteNavigationElement"
            >
                <a
                    itemprop="url"
                    class="to-category-page 1"
                    href="/lectii-pe-materii/valoros-si-interesant"
                    aria-label="Buton spre toate lecțiile după valoros și interesant"
                    title="                Lecții video după valoros și interesant            "
                    data-ga-click="matrix-click-category"
                >
                    <svg role="img" class="icon text-color-7">
                        <use
                            xlink:href="/assets/base/images/icons/categories/categories-e397de1b.svg#category-7"
                        ></use>
                    </svg>

                    <h4
                        itemprop="name"
                        id="matrix-category-valoros-si-interesant"
                        class="name"
                    >
                        Valoros și interesant
                    </h4>
                </a>

                <a
                    class="circle to-all-lessons"
                    href="/lectii-pe-materii/valoros-si-interesant"
                    title="Lecții video după valoros și interesant"
                    data-ga-click="matrix-click-category"
                >
                    Toate lecțiile
                </a>
            </li>
        </ul>
    </section>
</div>
