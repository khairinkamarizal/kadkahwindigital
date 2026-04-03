<template>
  <div
    class="min-h-screen bg-[#efefef] flex items-center justify-center font-outfit selection:bg-[#d4af37] selection:text-[#660B05] sm:py-8 sm:px-4">
    <div
      class="relative z-10 w-full h-[100dvh] sm:h-[850px] max-w-[430px] bg-[#660B05] sm:rounded-[3.5rem] sm:border-[12px] sm:border-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2),0_10px_40px_rgba(0,0,0,0.1),0_0_80px_rgba(212,175,55,0.05)] overflow-hidden sm:ring-[2px] sm:ring-white flex flex-col">
      <div
        class="absolute inset-0 pointer-events-none bg-[url('/songket.png')] bg-repeat"
        style="background-size: 180px"></div>

      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none"></div>

      <div
        v-if="!isFullyOpened"
        class="absolute inset-0 z-[200] flex overflow-hidden pointer-events-none sm:rounded-[2rem]">
        <div
          class="w-1/2 h-full bg-[#660B05] transition-all duration-[1500ms] ease-in-out pointer-events-auto relative border-r border-[#d4af37]/40 shadow-[10px_0_40px_rgba(0,0,0,0.4)]"
          :class="{
            '-translate-x-full opacity-0': isOpening,
            'opacity-100': !isOpening,
          }"
          style="
            background-image: url(&quot;/songket.png&quot;);
            background-size: 250px;
          ">
          <div
            class="absolute inset-3 border-l border-y border-[#d4af37]/30 rounded-l-2xl"></div>
        </div>

        <div
          class="w-1/2 h-full bg-[#660B05] transition-all duration-[1500ms] ease-in-out pointer-events-auto relative border-l border-[#d4af37]/40 shadow-[-10px_0_40px_rgba(0,0,0,0.4)]"
          :class="{
            'translate-x-full opacity-0': isOpening,
            'opacity-100': !isOpening,
          }"
          style="
            background-image: url(&quot;/songket.png&quot;);
            background-size: 250px;
          ">
          <div
            class="absolute inset-3 border-r border-y border-[#d4af37]/30 rounded-r-2xl"></div>
        </div>

        <div
          class="absolute inset-0 flex flex-col items-center justify-center z-[210] pointer-events-none transition-all duration-[1500ms] ease-in-out"
          :class="{ 'opacity-0 scale-[2.5] blur-xl': isOpening }">
          <button
            @click="openDoor"
            class="group w-40 h-40 bg-transparent rounded-full flex flex-col items-center justify-center pointer-events-auto text-center relative overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.4)] transition-all duration-500 hover:scale-110 active:scale-95 animate-pulse-scale cursor-pointer border-none outline-none"
            style="
              background-image: url(&quot;/seal.png&quot;);
              background-size: cover;
              background-position: center;
              box-shadow:
                0 0 50px rgba(0, 0, 0, 0.5),
                inset 0 0 20px rgba(212, 175, 55, 0.2);
            "></button>
        </div>
      </div>

      <main
        id="main-content"
        class="flex-1 overflow-y-auto custom-scrollbar relative flex flex-col">
        <header
          class="relative min-h-full flex-shrink-0 flex items-center justify-center text-center pt-20 pb-32 px-6">
          <div class="relative z-10 flex flex-col items-center w-full gap-8">
            <div
              class="space-y-4 animate-fade-in-up"
              style="animation-delay: 0.5s">
              <p
                class="text-xs tracking-[0.4em] uppercase text-[#d4af37] font-normal drop-shadow-md">
                Walimatul Urus
              </p>
              <div
                class="w-12 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
            </div>

            <div
              class="relative w-full animate-fade-in-up"
              style="animation-delay: 0.8s">
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] opacity-[0.15] text-[#d4af37] pointer-events-none z-50">
                <svg
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 1080 1007.2"
                  fill="currentColor">
                  <g>
                    <path
                      d="M1078.4,503.6c-10.8,0-23.4.4-37.9,1.2-14.5.8-29.3,1.2-44.3,1.2s-29.7-.4-43.9-1.2c-14.2-.8-26.5-1.2-36.7-1.2s-2.4,1.6-2.4,4.8.8,4.8,2.4,4.8c25.2,0,40.6,3.8,45.9,11.3,5.4,7.5,5.9,22.8,1.6,45.9l-29.2,166h-259l29.5-166c1.9-9.4,4-17.4,6.3-24.1-7-1.6-14.1-3.9-21.4-6.9-6.6,38.6-17.6,72.5-32.8,100.8-4.7,8.7-9.8,16.9-15.1,24.8l-49,276.9c-2.7,15.6-6.2,27.4-10.5,35.5-4.3,8.1-11,13.4-20.1,16.1-9.1,2.7-22,4-38.7,4s-2.4,1.6-2.4,4.8.8,4.8,2.4,4.8c10.7,0,23-.3,36.7-.8,13.7-.5,28.3-.8,43.9-.8s31.3.3,45.5.8c14.2.5,26.7.8,37.5.8s2.4-1.6,2.4-4.8-.8-4.8-2.4-4.8c-25.3,0-40.6-3.5-45.9-10.5-5.4-7-6.2-22-2.4-45.1l33.5-188.5h259l-33.1,188.5c-2.7,15.6-6.2,27.4-10.5,35.5-4.3,8.1-10.8,13.4-19.3,16.1-8.6,2.7-21.5,4-38.7,4s-1.6,1.6-1.6,4.8.5,4.8,1.6,4.8c10.7,0,23.4-.3,37.9-.8,14.5-.5,29.5-.8,45.1-.8s30.3.3,44.3.8c14,.5,26.1.8,36.3.8s2.4-1.6,2.4-4.8-.8-4.8-2.4-4.8c-24.2,0-39.4-3.5-45.5-10.5-6.2-7-7.4-22-3.6-45.1l66.1-373.1c2.7-15.6,6.2-27.3,10.5-35,4.3-7.8,11-13.2,20.1-16.1,9.1-2.9,21.8-4.4,37.9-4.4s1.6-1.6,1.6-4.8-.5-4.8-1.6-4.8Z" />
                    <path
                      d="M488.7,54.5l-43.6,290.6c.8,0,1.6,0,2.4,0,14.8,0,29,2.4,42.3,7.1l42.8-288.4c3.2-22.6,10.7-37.2,22.6-43.9,11.8-6.7,28.2-10.1,49.2-10.1s1.6-1.6,1.6-4.8-.5-4.8-1.6-4.8c-8.1,0-16,.3-23.8.8-7.8.5-17.6.8-29.4.8s-12.4-.3-19.3-.8c-7-.5-11.8-.8-14.5-.8-9.7,0-18.5,6.7-26.6,20.1l-214.5,405.9L193.4,41.9c-3.8-17.2-7.2-28.5-10.5-33.8-3.2-5.4-7.8-8.1-13.7-8.1s-7.9.3-14.1.8c-6.2.5-13.3.8-21.4.8s-13.7-.3-21.8-.8c-8.1-.5-15.6-.8-22.6-.8s-1.6,1.6-1.6,4.8.5,4.8,1.6,4.8c7,0,14.6,1.2,23,3.6,8.3,2.4,16.1,7.7,23.4,15.7,1.9,2.1,3.6,4.5,5.2,7.2l-70.1,379.6c-5.4,27.9-13.4,47.9-24.2,60-10.7,12.1-25.5,18.1-44.3,18.1s-2.4,1.6-2.4,4.8.8,4.8,2.4,4.8c9.1,0,18.9-.3,29.4-.8,10.5-.5,21.4-.8,32.6-.8s24.2.3,33.8.8c9.7.5,18.8.8,27.4.8s2.4-1.6,2.4-4.8-.8-4.8-2.4-4.8c-18.8,0-31-6-36.7-18.1-5.6-12.1-6.3-32.1-2-60L150.8,63.8c.2,1,.5,2,.7,3.1l91.1,430.3c.5,2.2,2.3,3.4,5.2,3.6,2.9.3,5-.7,6-2.8L488.7,54.5Z" />
                  </g>
                  <path
                    d="M455.6,744.9c-31.7,0-60-6.4-85-19.3-25-12.9-45.8-30.5-62.4-52.8-16.7-22.3-28.1-47.4-34.2-75.3-6.2-27.9-6.3-56.7-.4-86.2,6.4-29.5,18.9-55.6,37.5-78.2,18.5-22.6,40-40.3,64.5-53.2,24.4-12.9,48.5-19.3,72.1-19.3s26.1,2.2,37.9,6.4c11.8,4.3,22.3,11.8,31.4,22.6l-37.9,34.6c-9.1-17.2-20.5-28.6-34.2-34.2-13.7-5.6-26.2-8.5-37.5-8.5s-28.3,4.7-41.5,14.1c-13.2,9.4-24.5,21.9-33.8,37.5-9.4,15.6-16.5,33-21.4,52.4-6.4,33.3-5.9,64.1,1.6,92.3,7.5,28.2,19.7,52.8,36.7,73.7,16.9,21,36.9,37.2,60,48.7,23.1,11.6,47.3,17.3,72.5,17.3s65.8-8.6,92.7-25.8c26.9-17.2,48.5-42.8,64.9-76.9,16.4-34.1,25.6-76.9,27.8-128.5l12.9,4.8c-4.3,56.9-16.5,104.2-36.7,141.8-20.1,37.6-46.3,65.7-78.6,84.2-32.2,18.5-68.5,27.8-108.8,27.8ZM301.6,577.3l-7.3-7.2c19.3-16.1,40.8-33.3,64.5-51.6,23.6-18.3,47.5-37.1,71.7-56.4,24.2-19.3,46.3-38.9,66.5-58.8,20.1-19.9,36.4-39.6,48.7-59.2,12.4-19.6,18.5-38.8,18.5-57.6s-1.3-18.1-4-23.8c-2.7-5.6-5.9-10.2-9.7-13.7-3.8-3.5-7-6.8-9.7-10.1-2.7-3.2-4-7.8-4-13.7s2-12.5,6-16.5c4-4,9.3-6,15.7-6,10.7,0,19.9,5,27.4,14.9,7.5,9.9,11.3,23.8,11.3,41.5s-6.9,45.4-20.5,68.5c-13.7,23.1-31.7,45.9-54,68.5-22.3,22.6-46.6,44.6-72.9,66.1-26.3,21.5-52.5,41.9-78.6,61.2-26.1,19.3-49.3,37.3-69.7,54ZM526.5,546.7c-5.4,0-9.9-1.7-13.7-5.2-3.8-3.5-5.6-9.8-5.6-18.9,0-14,4.2-26.9,12.5-38.7,8.3-11.8,19.2-21.4,32.6-28.6,13.4-7.2,27.4-10.9,41.9-10.9s28.5,3.1,43.5,9.3c15,6.2,30.1,13.3,45.1,21.4,15,8.1,29.7,15.2,43.9,21.4,14.2,6.2,27.3,9.3,39.1,9.3s13.3-1.5,17.3-4.4c4-2.9,6-6.3,6-10.1,0-5.4-1.2-10.1-3.6-14.1-2.4-4-5-8.2-7.7-12.5-2.7-4.3-4-9.1-4-14.5s1.6-10.2,4.8-12.9c3.2-2.7,7.8-4,13.7-4s9.8,1.5,13.3,4.4c3.5,3,5.2,9.3,5.2,18.9s-3.4,25.3-10.1,37.1c-6.7,11.8-15.7,21.5-27,29-11.3,7.5-23.9,11.3-37.9,11.3s-27.7-3.2-42.7-9.7c-15-6.4-30.5-14-46.3-22.6-15.9-8.6-31.3-16.1-46.3-22.6-15-6.4-29.3-9.7-42.7-9.7s-14.2,1.8-18.5,5.2c-4.3,3.5-6.4,7.4-6.4,11.7s.9,10.3,2.8,14.9c1.9,4.6,3.7,9.1,5.6,13.7,1.9,4.6,2.8,9.3,2.8,14.1s-1.2,7.7-3.6,11.7-7.1,6-14.1,6Z" />
                </svg>
              </div>
              <h1
                class="relative w-full max-w-[400px] flex items-center flex-col mx-auto drop-shadow-2xl overflow-visible">
                <img
                  src="/name.svg"
                  class="w-[60%] h-auto"
                  alt="Mimi & Hafiz Monogram" />
              </h1>
            </div>

            <div
              class="flex flex-col items-center gap-6 animate-fade-in-up"
              style="animation-delay: 1.1s">
              <div
                class="h-16 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"></div>
              <div class="flex flex-col items-center gap-0">
                <p
                  class="text-xs tracking-[0.35em] text-[#fdf8f5] font-light uppercase">
                  Sabtu, 30 Mei 2026
                </p>
                <p
                  class="text-[10px] tracking-[0.3em] text-[#d4af37]/80 font-normal uppercase mt-1">
                  13 Zulhijjah 1447H
                </p>
              </div>
              <button
                @click="scrollToDetails"
                class="mt-8 group flex flex-col items-center gap-2">
                <span
                  class="text-[9px] tracking-[0.3em] uppercase text-[#d4af37]/70 group-hover:text-[#d4af37] transition-colors"
                  >Buka Jemputan</span
                >
                <div
                  class="w-6 h-10 border border-[#d4af37]/30 rounded-full flex justify-center p-1">
                  <div
                    class="w-1 h-2 bg-[#d4af37] rounded-full animate-bounce"></div>
                </div>
              </button>
            </div>
          </div>
        </header>

        <section
          id="details-section"
          class="w-full py-24 px-6 text-center space-y-10 relative z-10 bg-gradient-to-b from-transparent via-[#660B05] to-[#660B05]">
          <div class="flex items-center justify-center gap-4 py-4">
            <div
              class="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]/40"></div>
            <div class="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/60"></div>
            <div
              class="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]/40"></div>
          </div>
          <div class="space-y-2 text-[#fdf8f5] font-light tracking-wide">
            <p class="font-serif text-[1.35rem]">Megat Badlishah Bin Othman</p>
            <p class="font-serif italic text-[#d4af37] text-4xl">&</p>
            <p class="font-serif text-[1.35rem]">Roosliana Binti Md Desa</p>
          </div>
          <div class="flex items-center justify-center gap-4 py-4">
            <div
              class="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]/40"></div>
            <div class="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/60"></div>
            <div
              class="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]/40"></div>
          </div>
          <p
            class="text-[#fdf8f5]/80 text-[13px] leading-relaxed max-w-[280px] mx-auto font-light italic">
            Dengan penuh kesyukuran dan lafaz Bismillah, kami menjemput Dato' /
            Datin / Tuan / Puan / Encik / Cik sekeluarga hadir ke majlis
            perkahwinan anakanda kami:
          </p>
          <div class="flex items-center justify-center gap-4 py-4">
            <div
              class="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]/40"></div>
            <div class="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/60"></div>
            <div
              class="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]/40"></div>
          </div>
          <div class="space-y-4 relative">
            <div class="space-y-0">
              <h3
                class="font-serif text-2xl md:text-[1.75rem] text-[#fdf8f5] font-light leading-snug">
                Puteri Nurul Syamimi
              </h3>
              <span class="text-lg text-[#d4af37] font-light"
                >Binti Badlishah @ Megat Badlishah</span
              >
            </div>

            <div
              class="font-serif italic text-5xl text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              &
            </div>

            <div class="space-y-0">
              <h3
                class="font-serif text-2xl md:text-[1.75rem] text-[#fdf8f5] font-light leading-snug">
                Muhamad Hafiz
              </h3>
              <span class="text-lg text-[#d4af37] font-light">Bin Rojamil</span>
            </div>
          </div>
          <div class="flex items-center justify-center gap-4 py-4">
            <div
              class="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]/40"></div>
            <div class="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/60"></div>
            <div
              class="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]/40"></div>
          </div>

          <div class="grid gap-8 pt-12">
            <!-- Venue Info -->
            <div class="text-center space-y-4">
              <div
                class="w-10 h-10 mx-auto rounded-full border border-[#d4af37]/40 flex items-center justify-center mb-2">
                <MapPin
                  :size="18"
                  class="text-[#d4af37]/80"
                  :stroke-width="1" />
              </div>
              <div class="space-y-1">
                <h4
                  class="text-[9px] tracking-[0.4em] uppercase text-[#d4af37]/60 font-outfit">
                  Venue
                </h4>
                <p class="font-serif text-3xl text-[#fdf8f5] font-light">
                  Kediaman Pengantin
                </p>
              </div>
              <p
                class="text-[12px] text-[#fdf8f5]/50 leading-relaxed font-light font-outfit max-w-[240px] mx-auto italic tracking-wide">
                No 373, Pekan Khamis Kupang,<br />
                09200 Kupang, Kedah
              </p>
            </div>

            <div
              class="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent mx-auto"></div>

            <!-- Date & Time Grid -->
            <div class="space-y-12 max-w-[320px] mx-auto w-full">
              <!-- Date Row -->
              <div class="text-center space-y-4">
                <div
                  class="w-10 h-10 mx-auto rounded-full border border-[#d4af37]/40 flex items-center justify-center">
                  <Calendar
                    :size="16"
                    class="text-[#d4af37]/80"
                    :stroke-width="1" />
                </div>
                <div class="space-y-1">
                  <h4
                    class="text-[8px] tracking-[0.4em] uppercase text-[#d4af37]/60 font-outfit">
                    Tarikh
                  </h4>
                  <p
                    class="font-serif text-3xl text-[#fdf8f5] font-light tracking-wide">
                    30 Mei 2026
                  </p>
                  <p
                    class="text-[10px] text-[#fdf8f5]/40 uppercase tracking-[0.3em] font-outfit pt-1">
                    Sabtu | 13 Zulhijjah 1447H
                  </p>
                </div>
              </div>

              <div
                class="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent mx-auto"></div>

              <!-- Time Row -->
              <div class="text-center space-y-4">
                <div
                  class="w-10 h-10 mx-auto rounded-full border border-[#d4af37]/40 flex items-center justify-center">
                  <Clock
                    :size="16"
                    class="text-[#d4af37]/80"
                    :stroke-width="1" />
                </div>
                <div class="space-y-1">
                  <h4
                    class="text-[8px] tracking-[0.4em] uppercase text-[#d4af37]/60 font-outfit">
                    Waktu
                  </h4>
                  <p
                    class="font-serif text-3xl text-[#fdf8f5] font-light tracking-wide">
                    11:30 AM
                  </p>
                  <p
                    class="text-[10px] text-[#d4af37]/70 uppercase tracking-[0.3em] font-outfit pt-1">
                    Hingga 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="py-24 px-6 text-center relative bg-black/40 border-y border-[#d4af37]/10">
          <div class="relative z-10 space-y-12">
            <!-- Header Decorative -->
            <div class="space-y-4">
              <div class="flex items-center justify-center gap-3">
                <div
                  class="h-px w-6 bg-gradient-to-r from-transparent to-[#d4af37]/30"></div>
                <Heart
                  class="w-2.5 h-2.5 text-[#d4af37]/40"
                  fill="currentColor" />
                <div
                  class="h-px w-6 bg-gradient-to-l from-transparent to-[#d4af37]/30"></div>
              </div>
              <h2
                class="font-serif italic text-3xl text-[#d4af37]/80 font-light tracking-wide">
                Menghitung Hari
              </h2>
            </div>

            <!-- Timer Content -->
            <div
              class="flex justify-center items-center gap-2 sm:gap-4 max-w-[340px] mx-auto w-full">
              <template
                v-for="(val, unit, index) in countdown"
                :key="unit">
                <!-- Unit Block -->
                <div class="flex flex-col items-center flex-1">
                  <span
                    class="text-4xl sm:text-5xl font-light text-[#fdf8f5] font-serif tracking-tight mb-2">
                    {{ val }}
                  </span>
                  <span
                    class="text-[7px] sm:text-[8px] tracking-[0.4em] text-[#d4af37]/60 uppercase font-outfit">
                    {{ unit }}
                  </span>
                </div>

                <!-- Vertical Divider -->
                <div
                  v-if="index < 3"
                  class="h-8 w-px bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent mx-1.5"></div>
              </template>
            </div>
          </div>
        </section>

        <footer class="pt-16 pb-40 text-center relative z-10">
          <Heart
            class="mx-auto w-8 h-8 text-[#d4af37]/40 mb-6"
            :stroke-width="1" />
          <p
            class="text-[9px] tracking-[0.4em] text-[#fdf8f5]/50 font-bold uppercase mb-2">
            Mimi & Hafiz • 2026
          </p>
          <p class="text-[8px] text-[#d4af37]/60 uppercase tracking-widest">
            #MimiUntukHafiz
          </p>
        </footer>
      </main>

      <div
        class="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[340px] bg-black/70 backdrop-blur-2xl border border-white/5 rounded-full z-[260] px-6 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-[1200ms] ease-out delay-[800ms]"
        :class="
          isOpening ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        ">
        <div class="flex justify-between items-center relative">
          <button
            v-for="(item, index) in navItems"
            :key="item.id"
            @click="togglePanel(item.id, index)"
            class="relative z-10 flex flex-col items-center justify-center w-12 h-10 transition-colors group"
            :class="
              activePanel === item.id
                ? 'text-[#d4af37]'
                : 'text-white/40 hover:text-white'
            ">
            <component
              :is="item.icon"
              :size="activePanel === item.id ? 22 : 18"
              :stroke-width="activePanel === item.id ? 1.5 : 1"
              class="transition-all duration-300 transform" />
            <div 
              class="absolute -bottom-1 w-1 h-1 rounded-full bg-[#d4af37] transition-all duration-300"
              :class="activePanel === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
            ></div>
          </button>
        </div>
      </div>

      <transition name="slide-up">
        <div
          v-if="activePanel"
          class="absolute inset-x-0 bottom-0 z-[250] bg-gradient-to-b from-[#660B05] to-[#4A0804] rounded-t-[2rem] shadow-[0_-20px_60px_rgba(0,0,0,0.6)] border-t border-[#d4af37]/30 max-h-[85%] flex flex-col pointer-events-auto">
          <div
            class="flex-shrink-0 pt-4 pb-2 flex justify-center cursor-pointer"
            @click="activePanel = null">
            <div class="w-10 h-1 bg-[#d4af37]/20 rounded-full"></div>
          </div>

          <div class="flex-1 overflow-y-auto custom-scrollbar px-6 pb-28 pt-4">
            <!-- Contact Panel -->
            <div
              v-if="activePanel === 'contact'"
              class="space-y-8 animate-fade-in text-center max-w-[320px] mx-auto">
              <div>
                <h3 class="font-serif text-3xl text-[#d4af37] font-light mb-2">Hubungi Kami</h3>
                <div class="h-px w-12 bg-[#d4af37]/20 mx-auto"></div>
              </div>
              <div class="space-y-0 text-left">
                <div
                  v-for="(person, index) in contacts"
                  :key="person.name"
                  class="py-5"
                  :class="index !== contacts.length - 1 ? 'border-b border-white/5' : ''">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-[9px] text-[#d4af37]/70 uppercase tracking-[0.3em] font-outfit mb-1">
                        {{ person.role }}
                      </p>
                      <h4 class="font-serif text-[#fdf8f5] text-xl font-light">
                        {{ person.name }}
                      </h4>
                    </div>
                    <div class="flex gap-4">
                      <a
                        :href="'tel:' + person.phone"
                        class="text-white/40 hover:text-[#d4af37] transition-colors"
                        ><Phone :size="18" :stroke-width="1" /></a>
                      <a
                        :href="'https://wa.me/' + person.phone"
                        class="text-white/40 hover:text-[#25D366] transition-colors"
                        ><MessageCircle :size="18" :stroke-width="1" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Location Panel -->
            <div
              v-if="activePanel === 'location'"
              class="space-y-8 animate-fade-in text-center max-w-[320px] mx-auto">
              <div>
                <h3 class="font-serif text-3xl text-[#d4af37] font-light mb-2">Lokasi</h3>
                <div class="h-px w-12 bg-[#d4af37]/20 mx-auto"></div>
              </div>
              <div class="aspect-square sm:aspect-video w-full rounded-2xl overflow-hidden border border-[#d4af37]/10 opacity-80 filter grayscale contrast-125">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.242968393521!2d100.825!3d5.625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzcnMzAuMCJOIDEwMMKwNDknMzAuMCJF!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy"
                  class="w-full h-full border-0"
                  allowfullscreen
                  loading="lazy"></iframe>
              </div>
              <div class="flex justify-center gap-8">
                <a
                  href="https://waze.com/ul?q=Kupang+Kedah"
                  target="_blank"
                  class="flex flex-col items-center gap-3 group">
                  <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#d4af37]/50 transition-colors">
                    <Navigation :size="18" class="text-white/60 group-hover:text-[#d4af37]" :stroke-width="1" />
                  </div>
                  <span class="text-[9px] uppercase tracking-[0.2em] text-white/50 font-outfit">Waze</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Pekan+Khamis+Kupang+Kedah"
                  target="_blank"
                  class="flex flex-col items-center gap-3 group">
                  <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#d4af37]/50 transition-colors">
                    <MapPin :size="18" class="text-white/60 group-hover:text-[#d4af37]" :stroke-width="1" />
                  </div>
                  <span class="text-[9px] uppercase tracking-[0.2em] text-white/50 font-outfit">Google Maps</span>
                </a>
              </div>
            </div>

            <!-- Gift Panel -->
            <div
              v-if="activePanel === 'gift'"
              class="space-y-8 animate-fade-in text-center max-w-[320px] mx-auto">
              <div>
                <h3 class="font-serif text-3xl text-[#d4af37] font-light mb-2">Salam Kaut</h3>
                <div class="h-px w-12 bg-[#d4af37]/20 mx-auto mb-4"></div>
                <p class="text-[11px] text-white/50 leading-relaxed font-light font-outfit italic tracking-wide px-4">
                  Kehadiran anda adalah hadiah terindah. Namun jika ingin memberi sumbangan, boleh rujuk maklumat di bawah.
                </p>
              </div>

              <div class="pt-4">
                <div class="w-40 h-40 bg-white/5 rounded-2xl mx-auto flex items-center justify-center p-3 mb-8 border border-white/10">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MAYBANK-SYAMIMI"
                    alt="QR"
                    class="w-full h-full rounded-xl opacity-90 mix-blend-screen" />
                </div>
                <div class="space-y-2">
                  <p class="text-[10px] text-[#d4af37]/80 uppercase tracking-[0.3em] font-outfit">Maybank</p>
                  <p class="font-serif text-3xl text-[#fdf8f5] font-light tracking-widest">
                    1234 5678
                  </p>
                  <p class="text-[#fdf8f5]/50 text-[11px] uppercase tracking-[0.2em] font-outfit pt-1">
                    Puteri Nurul Syamimi
                  </p>
                </div>
              </div>
            </div>

            <!-- RSVP Panel -->
            <div
              v-if="activePanel === 'rsvp'"
              class="space-y-8 animate-fade-in text-center max-w-[320px] mx-auto">
              <div>
                <h3 class="font-serif text-3xl text-[#d4af37] font-light mb-2">RSVP</h3>
                <div class="h-px w-12 bg-[#d4af37]/20 mx-auto mb-4"></div>
                <p class="text-[11px] text-white/50 leading-relaxed font-light font-outfit italic tracking-wide px-4">
                  Sila sahkan kehadiran anda sebelum 15 Mei 2026.
                </p>
              </div>

              <div class="pt-4 space-y-0 text-left">
                <a
                  href="https://wa.me/60103357100?text=Saya%20ingin%20mengesahkan%20kehadiran%20ke%20majlis%20Syamimi%20%26%20Hafiz"
                  target="_blank"
                  class="flex items-center justify-between py-5 border-b border-white/5 group">
                  <div>
                    <h4 class="font-serif text-[#fdf8f5] text-xl font-light group-hover:text-[#d4af37] transition-colors">RSVP Roosliana</h4>
                    <p class="text-[9px] text-[#d4af37]/60 uppercase tracking-[0.3em] font-outfit mt-1">Ibu Pengantin</p>
                  </div>
                  <MessageCircle :size="18" class="text-white/40 group-hover:text-[#25D366] transition-colors" :stroke-width="1" />
                </a>

                <a
                  href="https://wa.me/60103347676?text=Saya%20ingin%20mengesahkan%20kehadiran%20ke%20majlis%20Syamimi%20%26%20Hafiz"
                  target="_blank"
                  class="flex items-center justify-between py-5 group">
                  <div>
                    <h4 class="font-serif text-[#fdf8f5] text-xl font-light group-hover:text-[#d4af37] transition-colors">RSVP Megat</h4>
                    <p class="text-[9px] text-[#d4af37]/60 uppercase tracking-[0.3em] font-outfit mt-1">Bapa Pengantin</p>
                  </div>
                  <MessageCircle :size="18" class="text-white/40 group-hover:text-[#25D366] transition-colors" :stroke-width="1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div
          v-if="activePanel"
          @click="activePanel = null"
          class="absolute inset-0 z-[240] bg-black/70 backdrop-blur-sm"></div>
      </transition>

      <button
        @click="isPlaying = !isPlaying"
        class="absolute top-6 right-6 z-[100] w-10 h-10 bg-black/40 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-[#d4af37] hover:bg-white/10 hover:scale-105 transition-all">
        <VolumeX
          v-if="!isPlaying"
          :size="16"
          stroke-width="2" />
        <Volume2
          v-else
          :size="16"
          stroke-width="2" />
      </button>

      <!-- Background Music -->
      <iframe
        v-if="isPlaying"
        width="0"
        height="0"
        src="https://www.youtube.com/embed/d8UzgqKY_tg?autoplay=1&mute=0&loop=1&playlist=d8UzgqKY_tg"
        frameborder="0"
        allow="autoplay; encrypted-media"
        class="hidden"></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineComponent, h } from "vue";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  Heart,
  X,
  Phone,
  MessageCircle,
  Navigation,
  Gift,
  Users,
  Volume2,
  VolumeX,
} from "lucide-vue-next";

const isOpening = ref(false);
const isFullyOpened = ref(false);
const isPlaying = ref(false);
const activePanel = ref<string | null>(null);
const activeIndex = ref<number>(-1);

const navItems = [
  {
    id: "contact",
    icon: Phone,
  },
  {
    id: "location",
    icon: MapPin,
  },
  {
    id: "gift",
    icon: Gift,
  },
  {
    id: "rsvp",
    icon: Users,
  },
];

const contacts = [
  { name: "Megat Badlishah", role: "Bapa Pengantin", phone: "60103347676" },
  { name: "Roosliana", role: "Ibu Pengantin", phone: "60103357100" },
];

const togglePanel = (id: string, index: number) => {
  if (activePanel.value === id) {
    activePanel.value = null;
    activeIndex.value = -1;
  } else {
    activePanel.value = id;
    activeIndex.value = index;
  }
};

const openDoor = () => {
  isOpening.value = true;
  isPlaying.value = true;
  setTimeout(() => {
    isFullyOpened.value = true;
  }, 2000);
};

const scrollToDetails = () => {
  document
    .getElementById("details-section")
    ?.scrollIntoView({ behavior: "smooth" });
};

// Target Date: 30 May 2026, 11:30 AM
const targetDate = new Date("2026-05-30T11:30:00").getTime();
const countdown = ref({ Hari: 0, Jam: 0, Minit: 0, Saat: 0 });

const updateCountdown = () => {
  const diff = targetDate - new Date().getTime();
  if (diff > 0) {
    countdown.value = {
      Hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
      Jam: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      Minit: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      Saat: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }
};

let timer: any;
onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});
onUnmounted(() => clearInterval(timer));
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Outfit:wght@200;300;400;500;600&display=swap");

:root {
  --font-serif: "Cormorant Garamond", serif;
  --font-outfit: "Outfit", sans-serif;
}

.font-serif {
  font-family: var(--font-serif);
}
.font-outfit {
  font-family: var(--font-outfit);
}

.st0 {
  fill: #fdf8f5;
}
.st1 {
  fill: #d4af37;
}

/* Hide scrollbar but keep functionality */
.custom-scrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
  opacity: 0;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

@keyframes pulse-scale {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.animate-pulse-scale {
  animation: pulse-scale 3s ease-in-out infinite;
}

/* Vue Slide-up Transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

/* Vue Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
