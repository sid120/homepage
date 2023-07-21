<!-- NOTE: I used FontAwesome Icons for this project
Check them out at fontawesome.com -->

<div class="container">
  <input type="radio" name="pages" class="page-1" id="page-1" checked>
  <input type="radio" name="pages" class="page-2" id="page-2">
  <input type="radio" name="pages" class="page-3" id="page-3">
  <input type="radio" name="pages" class="page-4" id="page-4">
  <input type="checkbox" class="sidebar-toggle" name="sidebar-toggle" id="sidebar-toggle">
  <nav class="sidebar">
    <div class="logo">Company</div>
    <input type="radio" name="sidebar-buttons" class="btn-1" id="btn-1" checked>
    <input type="radio" name="sidebar-buttons" class="btn-2" id="btn-2">
    <input type="radio" name="sidebar-buttons" class="btn-3" id="btn-3">
    <input type="radio" name="sidebar-buttons" class="btn-4" id="btn-4">
    <div class="sections">
      <ul class="sidebar-items">
        <li class="sidebar-item"><label for="btn-1" class="sidebar-button home">
            <svg viewBox="0 0 640 512" class="sidebar-icon smspace">
              <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
            </svg>
            Home</label></li>
        <li class="sidebar-item"><label for="btn-2" class="sidebar-button clients">
            <svg viewBox="0 0 640 512" class="sidebar-icon nospace lg">
              <path fill="currentColor" d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 384 80 375.4 80 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"></path>
            </svg>
            Clients</label></li>
        <li class="sidebar-item"><label for="btn-3" class="sidebar-button earnings">
            <svg viewBox="0 0 640 512" class="sidebar-icon nospace">
              <path fill="currentColor" d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
            </svg>
            Earnings</label></li>
        <li class="sidebar-item">
          <label for="btn-4" class="sidebar-button traffic">
            <svg viewBox="0 0 640 512" class="sidebar-icon">
              <path fill="currentColor" d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path>
            </svg>
            Traffic
          </label>
        </li>
        <li class="divider divider-sidebar"></li>
        <li class="sidebar-item">
          <label for="" class="sidebar-button plus-user">
            <svg viewBox="0 0 640 512" class="sidebar-icon">
              <path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
            Add User
          </label>
        </li>
      </ul>
      <div class="vertical-divider"></div>
      <ul class="sidebar-items hide-large">
        <li class="sidebar-item">
          <label for="page-1" class="sidebar-button traffic">
            <svg viewBox="0 0 544 512" class="navbar-side-icon">
              <defs>
                <linearGradient id="sideGeneralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#FF8573;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#F2482E;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path fill="url(#sideGeneralGrad)" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path>
            </svg>
          </label>
        </li>
        <li class="sidebar-item">
          <label for="page-2" class="sidebar-button earnings">
            <svg viewBox="0 0 640 512" class="navbar-side-icon">
              <defs>
                <linearGradient id="sideUsersGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#FF5473;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#D90028;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path fill="url(#sideUsersGrad)" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
            </svg>
          </label>
        </li>
        <li class="sidebar-item">
          <label for="page-3" class="sidebar-button clients">
            <svg viewBox="0 0 640 512" class="navbar-side-icon">
              <defs>
                <linearGradient id="sideAdsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#15D196;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#0B7352;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path fill="url(#sideAdsGrad)" d="M433.46 165.94l101.2-111.87C554.61 34.12 540.48 0 512.26 0H31.74C3.52 0-10.61 34.12 9.34 54.07L192 256v155.92c0 12.59 5.93 24.44 16 32l79.99 60c20.86 15.64 48.47 6.97 59.22-13.57C310.8 455.38 288 406.35 288 352c0-89.79 62.05-165.17 145.46-186.06zM480 192c-88.37 0-160 71.63-160 160s71.63 160 160 160 160-71.63 160-160-71.63-160-160-160zm16 239.88V448c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V256c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.04 44.44-42.67 45.07z"></path>
            </svg>
          </label>
        </li>
        <li class="sidebar-item">
          <label for="page-4" class="sidebar-button home">
            <svg viewBox="0 0 512 512" class="navbar-side-icon">
              <defs>
                <linearGradient id="sideStatsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#3ABEF2;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#277EA1;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path fill="url(#sideStatsGrad)" d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
            </svg>
          </label>
        </li>
      </ul>
    </div>
  </nav>
  <nav class="navbar">
    <ul class="navbar-menu">
      <li class="navbar-item hamburger-item"><label class="hamburger" for="sidebar-toggle"><svg viewBox="0 0 448 512" class="topbar-icon">
            <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg></label></li>
      <li class="navbar-item hide-small"><label for="page-1" class="navbar-text">
          <svg viewBox="0 0 544 512" class="topbar-icon">
            <defs>
              <linearGradient id="generalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FF8573;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#F2482E;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path fill="url(#generalGrad)" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path>
          </svg>
          <div class="topbar-text">General</div>
        </label></li>
      <li class="navbar-item hide-small"><label for="page-2" class="navbar-text">
          <svg viewBox="0 0 640 512" class="topbar-icon">
            <defs>
              <linearGradient id="usersGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FF5473;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#D90028;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path fill="url(#usersGrad)" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
          </svg>
          <div class="topbar-text">User Details</div>
        </label></li>
      <li class="navbar-item hide-small"><label for="page-3" class="navbar-text">
          <svg viewBox="0 0 640 512" class="topbar-icon">
            <defs>
              <linearGradient id="adsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#15D196;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#0B7352;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path fill="url(#adsGrad)" d="M433.46 165.94l101.2-111.87C554.61 34.12 540.48 0 512.26 0H31.74C3.52 0-10.61 34.12 9.34 54.07L192 256v155.92c0 12.59 5.93 24.44 16 32l79.99 60c20.86 15.64 48.47 6.97 59.22-13.57C310.8 455.38 288 406.35 288 352c0-89.79 62.05-165.17 145.46-186.06zM480 192c-88.37 0-160 71.63-160 160s71.63 160 160 160 160-71.63 160-160-71.63-160-160-160zm16 239.88V448c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V256c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.04 44.44-42.67 45.07z"></path>
          </svg>
          <div class="topbar-text">Advertisements</div>
        </label>
      </li>
      <li class="navbar-item hide-small"><label for="page-4" class="navbar-text">
          <svg viewBox="0 0 512 512" class="topbar-icon">
            <defs>
              <linearGradient id="statsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#3ABEF2;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#277EA1;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path fill="url(#statsGrad)" d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
          </svg>
          <div class="topbar-text">Stats</div>
        </label>
      </li>
    </ul>
    <div class="other-data">
      <button class="nav-button">
        <svg role="img" viewBox="0 0 640 512" class="add-user">
          <path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
        </svg>
        <div class="add-user-text"></div>
      </button>
      <input type="checkbox" name="profile-dropdown" id="profile-dropdown">
      <label for="profile-dropdown" class="profile-dropdown">
        <img src="https://randomuser.me/api/portraits/men/46.jpg">
        <div class="dropdown-name">John Doe</div>
        <div class="unread-dot"></div>
      </label>
      <div class="dropdown">
        <ul class="dropdown-content">
          <li class="dropdown-item">Notifications<span class="unread three"></span></li>
          <li class="dropdown-item">Profile</li>
          <li class="divider"></li>
          <li class="dropdown-item">Contacts</li>
          <li class="dropdown-item">Assets</li>
          <li class="dropdown-item">Settings</li>
          <li class="divider"></li>
          <li class="dropdown-item logout">Logout</li>
        </ul>
      </div>
      <svg viewBox="0 0 24 24" class="dropdown-svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  </nav>
  <div class="main">
    <div class="page" id="page-1">
      <div class="card-container">
        <div class="card graph-card card-6">
          <span class="title">Projected Expenses</span>
          <ul class="graph">
            <ul class="key">
              <li>100k</li>
              <li>75k</li>
              <li>50k</li>
              <li>25k</li>
              <li>0k</li>
            </ul>
            <li class="bar bar-12-5">
              <div class="desc">Jan</div>
            </li>
            <li class="bar bar-12-5">
              <div class="desc">Feb</div>
            </li>
            <li class="bar bar-25">
              <div class="desc">Mar</div>
            </li>
            <li class="bar bar-37-5">
              <div class="desc">Apr</div>
            </li>
            <li class="bar bar-37-5">
              <div class="desc">May</div>
            </li>
            <li class="bar bar-62-5">
              <div class="desc">Jun</div>
            </li>
            <li class="bar bar-75">
              <div class="desc">Jul</div>
            </li>
          </ul>
        </div>
        <div class="card graph-card card-6">
          <span class="title">Projected Income</span>
          <ul class="graph">
            <ul class="key">
              <li>100k</li>
              <li>75k</li>
              <li>50k</li>
              <li>25k</li>
              <li>0k</li>
            </ul>
            <li class="bar bar-25">
              <div class="desc">Jan</div>
            </li>
            <li class="bar bar-37-5">
              <div class="desc">Feb</div>
            </li>
            <li class="bar bar-37-5">
              <div class="desc">Mar</div>
            </li>
            <li class="bar bar-50">
              <div class="desc">Apr</div>
            </li>
            <li class="bar bar-37-5">
              <div class="desc">May</div>
            </li>
            <li class="bar bar-62-5">
              <div class="desc">Jun</div>
            </li>
            <li class="bar bar-90">
              <div class="desc">Jul</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-container">
        <div class="card graph-card graph-dual-colors card-fullscreen">
          <span class="title">Advertisement Income</span>
          <ul class="graph">
            <ul class="key">
              <li>20k</li>
              <li>17.5k</li>
              <li>15k</li>
              <li>12.5k</li>
              <li>10k</li>
              <li>7.5k</li>
              <li>5k</li>
              <li>2.5k</li>
              <li>0k</li>
            </ul>
            <li class="bar bar-12-5">
              <div class="desc">Apr</div>
            </li>
            <li class="bar bar-25">
              <div class="desc">Apr</div>
            </li>
            <li class="bar bar-12-5">
              <div class="desc">May</div>
            </li>
            <li class="bar bar-37-5">
              <div class="desc">May</div>
            </li>
            <li class="bar bar-25">
              <div class="desc">Jun</div>
            </li>
            <li class="bar bar-50">
              <div class="desc">Jun</div>
            </li>
            <li class="bar bar-62-5">
              <div class="desc">Jul</div>
            </li>
            <li class="bar bar-75">
              <div class="desc">Jul</div>
            </li>
          </ul>
          <ul class="graph-legend">
            <li class="legend-item">
              <div class="color-block orange"></div>Last year's income
            </li>
            <li class="legend-item">
              <div class="color-block green"></div>This year's income
            </li>
          </ul>
        </div>
      </div>
      <div class="card-container">
        <div class="card card-12 pie-card">
          <div class="pie-chart-container">
            <div class="pie-chart">
              <div class="desc desc-1">41%</div>
              <div class="desc desc-2">28%</div>
              <div class="desc desc-3">20%</div>
              <div class="desc desc-4">11%</div>
            </div>
            <ul class="pie-key">
              <li>
                <div class="color-block color-1"></div>Mobile Users
              </li>
              <li>
                <div class="color-block color-2"></div>Laptop Users
              </li>
              <li>
                <div class="color-block color-3"></div>TV Users
              </li>
              <li>
                <div class="color-block color-4"></div>Other Users
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="stat-card card card-4">
          <h3 class="card-number">5,439</h3>
          <div class="card-divider"></div>
          <h3 class="card-title">Users</h3>
        </div>
        <div class="stat-card card card-4">
          <h3 class="card-number">$634,524</h3>
          <div class="card-divider"></div>
          <h3 class="card-title">Total Revenue</h3>
        </div>
        <div class="stat-card card card-4">
          <h3 class="card-number">247,574</h3>
          <div class="card-divider"></div>
          <h3 class="card-title">Sales</h3>
        </div>
      </div>
    </div>
    <div class="page" id="page-2">
      <div class="user-management">
        <div class="table-header">
          <span>User:</span>
          <span class="type">Type:</span>
          <span class="purchased">Item:</span>
          <span>Price:</span>
          <span class="date">Date:</span>
        </div>
        <div class="table">
          <div class="column">
            <div class="item">John C.</div>
            <div class="item">Karl L.</div>
            <div class="item">Jacob T.</div>
            <div class="item">Caleb H.</div>
            <div class="item">John C.</div>
            <div class="item">John C.</div>
            <div class="item">Karl L.</div>
            <div class="item">Jacob T.</div>
            <div class="item">Caleb H.</div>
            <div class="item">John C.</div>
            <div class="item">John C.</div>
            <div class="item">Karl L.</div>
            <div class="item">Jacob T.</div>
            <div class="item">Caleb H.</div>
            <div class="item">John C.</div>
            <div class="item">John C.</div>
            <div class="item">Karl L.</div>
            <div class="item">Jacob T.</div>
            <div class="item">Caleb H.</div>
            <div class="item">John C.</div>
          </div>
          <div class="column type">
            <div class="item">Card</div>
            <div class="item">Income</div>
            <div class="item">Card</div>
            <div class="item">Card</div>
            <div class="item">Dividend</div>
            <div class="item">Card</div>
            <div class="item">Income</div>
            <div class="item">Card</div>
            <div class="item">Card</div>
            <div class="item">Dividend</div>
            <div class="item">Card</div>
            <div class="item">Income</div>
            <div class="item">Card</div>
            <div class="item">Card</div>
            <div class="item">Dividend</div>
            <div class="item">Card</div>
            <div class="item">Income</div>
            <div class="item">Card</div>
            <div class="item">Card</div>
            <div class="item">Dividend</div>
          </div>
          <div class="column purchased">
            <div class="item">15" Macbook Pro</div>
            <div class="item">Ad Revenue</div>
            <div class="item">Adobe Suite</div>
            <div class="item">Domain Fee</div>
            <div class="item">IBM Dividends</div>
            <div class="item">15" Macbook Pro</div>
            <div class="item">Ad Revenue</div>
            <div class="item">Adobe Suite</div>
            <div class="item">Domain Fee</div>
            <div class="item">IBM Dividends</div>
            <div class="item">15" Macbook Pro</div>
            <div class="item">Ad Revenue</div>
            <div class="item">Adobe Suite</div>
            <div class="item">Domain Fee</div>
            <div class="item">IBM Dividends</div>
            <div class="item">15" Macbook Pro</div>
            <div class="item">Ad Revenue</div>
            <div class="item">Adobe Suite</div>
            <div class="item">Domain Fee</div>
            <div class="item">IBM Dividends</div>
          </div>
          <div class="column price">
            <div class="item">- $3,000</div>
            <div class="item green">+ $1,350</div>
            <div class="item">- $50</div>
            <div class="item">- $16</div>
            <div class="item green">+ $347</div>
            <div class="item">- $3,000</div>
            <div class="item green">+ $1,350</div>
            <div class="item">- $50</div>
            <div class="item">- $16</div>
            <div class="item green">+ $347</div>
            <div class="item">- $3,000</div>
            <div class="item green">+ $1,350</div>
            <div class="item">- $50</div>
            <div class="item">- $16</div>
            <div class="item green">+ $347</div>
            <div class="item">- $3,000</div>
            <div class="item green">+ $1,350</div>
            <div class="item">- $50</div>
            <div class="item">- $16</div>
            <div class="item green">+ $347</div>
          </div>
          <div class="column date">
            <div class="item">3/8/2021</div>
            <div class="item">3/8/2021</div>
            <div class="item">3/8/2021</div>
            <div class="item">3/8/2021</div>
            <div class="item">3/7/2021</div>
            <div class="item">3/7/2021</div>
            <div class="item">3/7/2021</div>
            <div class="item">3/7/2021</div>
            <div class="item">3/7/2021</div>
            <div class="item">3/6/2021</div>
            <div class="item">3/6/2021</div>
            <div class="item">3/6/2021</div>
            <div class="item">3/6/2021</div>
            <div class="item">3/6/2021</div>
            <div class="item">3/5/2021</div>
            <div class="item">3/5/2021</div>
            <div class="item">3/5/2021</div>
            <div class="item">3/5/2021</div>
            <div class="item">3/5/2021</div>
            <div class="item">3/4/2021</div>
          </div>
        </div>
        <div class="after-table">
          <button class="load-more">Load More</button>
        </div>
      </div>
    </div>
    <div class="page" id="page-3">
      <div class="card-container">
        <div class="card graph-card graph-dual-colors card-fullscreen">
          <span class="title">Advertisement Income</span>
          <ul class="graph">
            <ul class="key">
              <li>20k</li>
              <li>17.5k</li>
              <li>15k</li>
              <li>12.5k</li>
              <li>10k</li>
              <li>7.5k</li>
              <li>5k</li>
              <li>2.5k</li>
              <li>0k</li>
            </ul>
            <li class="bar bar-12-5">
              <div class="desc">Apr</div>
            </li>
            <li class="bar bar-25">
              <div class="desc">Apr</div>
            </li>
            <li class="bar bar-12-5">
              <div class="desc">May</div>
            </li>
            <li class="bar bar-37-5">
              <div class="desc">May</div>
            </li>
            <li class="bar bar-25">
              <div class="desc">Jun</div>
            </li>
            <li class="bar bar-50">
              <div class="desc">Jun</div>
            </li>
            <li class="bar bar-62-5">
              <div class="desc">Jul</div>
            </li>
            <li class="bar bar-87-5">
              <div class="desc">Jul</div>
            </li>
          </ul>
          <ul class="graph-legend">
            <li class="legend-item">
              <div class="color-block blue"></div>Last year's income
            </li>
            <li class="legend-item">
              <div class="color-block green"></div>This year's income
            </li>
          </ul>
        </div>
      </div>
      <div class="card-container">
        <div class="stat-card card card-4">
          <h3 class="card-number">5,439</h3>
          <div class="card-divider"></div>
          <h3 class="card-title">Total Ads</h3>
        </div>
        <div class="stat-card card card-4">
          <h3 class="card-number">634,524</h3>
          <div class="card-divider"></div>
          <h3 class="card-title">Total Clicks</h3>
        </div>
        <div class="stat-card card card-4">
          <h3 class="card-number">247,574</h3>
          <div class="card-divider"></div>
          <h3 class="card-title">Sales</h3>
        </div>
      </div>
    </div>
    <div class="page" id="page-4">
      <div class="card-container">
        <div class="card card-12 pie-card">
          <div class="pie-chart-container">
            <div class="pie-chart">
              <div class="desc desc-1">41%</div>
              <div class="desc desc-2">28%</div>
              <div class="desc desc-3">20%</div>
              <div class="desc desc-4">11%</div>
            </div>
            <ul class="pie-key">
              <li>
                <div class="color-block color-1"></div>Mobile Users
              </li>
              <li>
                <div class="color-block color-2"></div>Laptop Users
              </li>
              <li>
                <div class="color-block color-3"></div>TV Users
              </li>
              <li>
                <div class="color-block color-4"></div>Other Users
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="stat-card card card-4">
          <h3 class="card-number">5,439</h3>
          <div class="card-divider"></div>
          <h3 class="card-title">Users</h3>
        </div>
        <div class="stat-card card card-4">
          <h3 class="card-number">$634,524</h3>
          <div class="card-divider"></div>
          <h3 class="card-title">Total Revenue</h3>
        </div>
        <div class="stat-card card card-4">
          <h3 class="card-number">247,574</h3>
          <div class="card-divider"></div>
          <h3 class="card-title">Sales</h3>
        </div>
      </div>
      <div class="card-container">
        <div class="card card-12 pie-card">
          <div class="pie-chart-container">
            <div class="pie-chart">
              <div class="desc desc-1">41%</div>
              <div class="desc desc-2">28%</div>
              <div class="desc desc-3">20%</div>
              <div class="desc desc-4">11%</div>
            </div>
            <ul class="pie-key">
              <li>
                <div class="color-block color-1"></div>Passive Income
              </li>
              <li>
                <div class="color-block color-2"></div>Advertisements
              </li>
              <li>
                <div class="color-block color-3"></div>Subscriptions
              </li>
              <li>
                <div class="color-block color-4"></div>Other Sources
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>