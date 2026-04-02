<template>
  <div
    class="min-h-screen font-outfit text-[#2d0a0a] bg-[#efefef] selection:bg-[#5d1010] selection:text-[#d4af37] flex justify-center">
    <div class="relative z-10 w-full max-w-[480px] bg-[#2d0a0a] min-h-screen">
      <!-- Global Texture for Luxury Depth -->
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/songket_maroon_gold_pattern_1775116047702.png')] bg-repeat"
        style="background-size: 200px"></div>
      <!-- Door Opening Effect -->
      <div
        v-if="!isFullyOpened"
        class="absolute inset-0 z-[200] flex overflow-hidden pointer-events-none"
        style="
          position: fixed;
          max-width: 480px;
          width: 100%;
          margin: 0 auto;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
        ">
        <!-- Left Panel -->
        <div
          class="w-1/2 h-full bg-[#5d1010] transition-transform duration-[1800ms] ease-in-out pointer-events-auto flex items-center justify-end overflow-hidden relative"
          :class="{ '-translate-x-full': isOpening }"
          style="
            background-image: url(&quot;/songket_maroon_gold_pattern_1775116047702.png&quot;);
            background-size: 300px;
          ">
          <!-- Door Gradients -->
          <div
            class="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#2d0a0a]/25 via-transparent to-transparent pointer-events-none"></div>
          <div
            class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#2d0a0a]/25 to-transparent pointer-events-none"></div>

          <!-- Ornate Border -->
          <div
            class="absolute inset-4 border border-[#d4af37]/50 pointer-events-none"></div>
          <div
            class="absolute inset-6 border border-[#d4af37]/25 pointer-events-none"></div>
        </div>
        <!-- Right Panel -->
        <div
          class="w-1/2 h-full bg-[#5d1010] transition-transform duration-[1800ms] ease-in-out pointer-events-auto flex items-center justify-start overflow-hidden relative"
          :class="{ 'translate-x-full': isOpening }"
          style="
            background-image: url(&quot;/songket_maroon_gold_pattern_1775116047702.png&quot;);
            background-size: 300px;
          ">
          <!-- Door Gradients -->
          <div
            class="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-[#2d0a0a]/25 via-transparent to-transparent pointer-events-none"></div>
          <div
            class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#2d0a0a]/25 to-transparent pointer-events-none"></div>

          <!-- Ornate Border -->
          <div
            class="absolute inset-4 border border-[#d4af37]/50 pointer-events-none"></div>
          <div
            class="absolute inset-6 border border-[#d4af37]/25 pointer-events-none"></div>
        </div>

        <!-- Center Content -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center z-[210] pointer-events-none transition-all duration-500"
          :class="{ 'opacity-0 scale-75 blur-lg': isOpening }">
          <div
            class="p-10 bg-[#2d0a0a] backdrop-blur-xl rounded-[3rem] shadow-[0_20px_100px_rgba(45,10,10,0.5)] border border-[#d4af37]/50 flex flex-col items-center space-y-8 pointer-events-auto text-center relative overflow-hidden">
            <div class="flex flex-col gap-4">
              <p
                class="text-[10px] tracking-[0.4em] text-[#d4af37] font-medium uppercase">
                WALIMATULURUS
              </p>
              <div
                class="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat scale-150"
                style="
                  background-image: url(&quot;/songket_maroon_gold_pattern_1775116047702.png&quot;);
                  background-size: 100px;
                "></div>
              <h2 class="font-light font-serif text-white">
                Adam <br /><span class="italic font-normal text-[#d4af37]"
                  >&</span
                ><br />
                Hawa
              </h2>
            </div>

            <p class="text-sm text-white/60">"Save the Date"<br />02.05.2026</p>

            <button
              @click="openDoor"
              class="group relative px-12 py-5 bg-gradient-to-b from-[#5d1010] to-[#3a0808] text-[#d4af37] border border-[#d4af37]/40 rounded-full text-xs font-bold tracking-[0.25em] transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] overflow-hidden">
              <span
                class="relative z-10 flex items-center justify-center gap-3">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="animate-pulse">
                  <path d="M12 2L15 9l7 3-7 3-3 7-3-7-7-3 7-3z" />
                </svg>
                BUKA
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="animate-pulse">
                  <path d="M12 2L15 9l7 3-7 3-3 7-3-7-7-3 7-3z" />
                </svg>
              </span>
              <div
                class="absolute inset-0 bg-[#d4af37] opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div
                class="absolute inset-0 ring-1 ring-inset ring-[#d4af37]/30 rounded-full scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </div>
      <!-- Hero Section -->
      <header
        class="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <!-- Background Image -->
        <div
          class="absolute inset-0 z-0 scale-110"
          :style="{
            backgroundImage:
              'url(/songket_maroon_gold_pattern_1775116047702.png)',
            backgroundSize: '300px',
            backgroundPosition: 'center',
          }"></div>

        <!-- Overlay Gradient -->
        <div
          class="absolute inset-0 z-[1] bg-gradient-to-b from-[#2f0a0a]/0 via-[#2f0a0a]/55 to-[#2f0a0a]"></div>

        <div class="relative z-10 flex flex-col items-center gap-6 px-4">
          <transition-fade
            appear
            :duration="1500"
            :delay="200">
            <p
              class="text-xs tracking-[0.3em] uppercase text-[#d4af37] font-bold">
              JEMPUTAN WALIMATULURUS
            </p>
          </transition-fade>

          <transition-fade
            appear
            :duration="1500"
            :delay="500">
            <div class="relative py-6">
              <div
                class="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <span
                  class="font-serif italic text-[14rem] text-[#d4af37] leading-none"
                  >&</span
                >
              </div>
              <h1
                class="relative font-light font-serif text-5xl text-[#fdf8f5] leading-snug tracking-wide drop-shadow-md z-10">
                Noradam
                <span
                  class="block text-3xl my-3 text-[#d4af37] font-medium italic drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                  >&</span
                >
                Nur Hawa
              </h1>
            </div>
          </transition-fade>

          <transition-fade
            appear
            :duration="1500"
            :delay="800">
            <div class="flex flex-col items-center gap-5">
              <div
                class="h-12 w-[1px] bg-gradient-to-b from-transparent to-[#d4af37]/50"></div>
              <p
                class="text-sm tracking-[0.35em] text-[#fdf8f5]/90 font-medium drop-shadow-sm">
                SABTU, 02 MEI 2026
              </p>
              <div
                class="h-12 w-[1px] bg-gradient-to-t from-transparent to-[#d4af37]/50"></div>
            </div>
          </transition-fade>

          <transition-fade
            appear
            :duration="1500"
            :delay="1100">
            <button
              @click="scrollToContent"
              class="group flex flex-col items-center animate-bounce-slow">
              <span
                class="text-[10px] tracking-[0.2em] font-bold text-[#d4af37] group-hover:text-white transition-colors"
                >BUKA JEMPUTAN</span
              >
              <div
                class="mt-2 text-[#d4af37]/60 transition-colors group-hover:text-[#d4af37]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </button>
          </transition-fade>
        </div>
      </header>

      <main id="main-content">
        <!-- Main Invitation Details -->
        <section
          class="w-full py-32 px-6 text-center space-y-12 relative overflow-hidden">
          <!-- Subtle Decorative Flourishes -->
          <svg
            class="absolute top-10 left-10 w-24 h-24 text-[#d4af37]/10"
            viewBox="0 0 100 100"
            fill="none">
            <path
              d="M0,0 Q50,0 50,50 Q50,0 100,0 Q50,0 50,-50 Q50,0 0,0"
              transform="translate(0, 50)"
              fill="currentColor" />
          </svg>
          <svg
            class="absolute bottom-10 right-10 w-24 h-24 text-[#d4af37]/10 rotate-180"
            viewBox="0 0 100 100"
            fill="none">
            <path
              d="M0,0 Q50,0 50,50 Q50,0 100,0 Q50,0 50,-50 Q50,0 0,0"
              transform="translate(0, 50)"
              fill="currentColor" />
          </svg>

          <div class="space-y-6 relative z-10">
            <h2
              class="font-serif text-[2.5rem] text-[#d4af37] tracking-widest uppercase drop-shadow-sm">
              Walimatul Urus
            </h2>
            <div class="flex items-center justify-center gap-4 py-2">
              <div
                class="h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4af37"
                stroke-width="1"
                class="opacity-80">
                <path d="M12 2L15 9l7 3-7 3-3 7-3-7-7-3 7-3z" />
              </svg>
              <div
                class="h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
            </div>
          </div>

          <!-- Parents Names -->
          <div class="space-y-3 relative z-10">
            <p class="font-serif text-2xl text-[#fdf8f5] font-light">
              Ahmad Bin Abdullah
            </p>
            <div class="font-serif italic text-3xl text-[#d4af37]">&</div>
            <p class="font-serif text-2xl text-[#fdf8f5] font-light">
              Fatimah Binti Abu
            </p>
          </div>

          <!-- Invitation Text -->
          <div class="max-w-xs mx-auto space-y-6 relative z-10">
            <p class="text-[#fdf8f5]/80 leading-relaxed font-medium italic">
              Dengan penuh kesyukuran, kami mempersilakan
            </p>
            <div
              class="flex flex-wrap justify-center gap-1 text-[10px] uppercase tracking-widest font-bold text-[#d4af37]">
              <span>Dato'</span> | <span>Datin</span> | <span>Tuan</span> |
              <span>Puan</span> | <span>Encik</span> | <span>Cik</span>
            </div>
            <p class="text-[#fdf8f5]/80 leading-relaxed font-semibold">
              seisi keluarga hadir ke majlis perkahwinan anakanda kami
            </p>
          </div>

          <!-- Couple Names -->
          <div class="py-12 space-y-6 relative z-10">
            <div
              class="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
              <div
                class="w-4/5 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent"></div>
            </div>
            <h3
              class="font-serif text-3xl md:text-4xl font-light text-[#fdf8f5] bg-[#2d0a0a] relative z-10 px-6 inline-block">
              Noradam Bin Ahmad
            </h3>
            <div
              class="font-serif italic text-6xl text-[#d4af37] py-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              &
            </div>
            <h3
              class="font-serif text-3xl md:text-4xl font-light text-[#fdf8f5] bg-[#2d0a0a] relative z-10 px-6 inline-block">
              Nur Hawa Binti Ali
            </h3>
          </div>

          <!-- Event Details -->
          <div class="grid grid-cols-1 gap-12 pt-16 relative z-10">
            <!-- Venue -->
            <div
              class="group relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-[#d4af37]/20 shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:bg-white/[0.05] hover:shadow-[0_10px_50px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden">
              <div
                class="absolute top-0 right-0 p-4 opacity-[0.03] translate-x-4 -translate-y-4 text-white group-hover:scale-110 transition-transform duration-700">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M12 2L15 9l7 3-7 3-3 7-3-7-7-3 7-3z" />
                </svg>
              </div>
              <div class="space-y-5 relative z-10">
                <div
                  class="inline-flex items-center justify-center p-3 rounded-full bg-[#d4af37]/10 text-[#d4af37] mb-2 shadow-inner border border-[#d4af37]/20">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle
                      cx="12"
                      cy="10"
                      r="3" />
                  </svg>
                </div>
                <h4
                  class="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37]">
                  TEMPAT
                </h4>
                <div class="space-y-2">
                  <p
                    class="font-serif text-[1.35rem] text-[#fdf8f5] font-light">
                    Glass House Glenmarie
                  </p>
                  <p
                    class="text-sm text-[#fdf8f5]/60 leading-relaxed max-w-xs mx-auto">
                    LOT 16859, 3 Stone Park, Jalan Penyair U1/44,<br />
                    Hicom-Glenmarie Industrial Park,<br />
                    40150 Shah Alam, Selangor
                  </p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Date -->
              <div
                class="group relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-[#d4af37]/20 shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:bg-white/[0.05] hover:shadow-[0_10px_50px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden">
                <div class="space-y-4 relative z-10">
                  <div
                    class="inline-flex items-center justify-center p-3 rounded-full bg-[#d4af37]/10 text-[#d4af37] shadow-inner border border-[#d4af37]/20">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5">
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="4"
                        rx="2"
                        ry="2" />
                      <line
                        x1="16"
                        x2="16"
                        y1="2"
                        y2="6" />
                      <line
                        x1="8"
                        x2="8"
                        y1="2"
                        y2="6" />
                      <line
                        x1="3"
                        x2="21"
                        y1="10"
                        y2="10" />
                    </svg>
                  </div>
                  <h4
                    class="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37]">
                    TARIKH
                  </h4>
                  <div class="space-y-1">
                    <p
                      class="font-serif text-[1.35rem] text-[#fdf8f5] font-light">
                      Sabtu, 02 Mei 2026
                    </p>
                    <p
                      class="text-xs text-[#d4af37]/80 font-bold tracking-widest">
                      16 REJAB 1440H
                    </p>
                  </div>
                </div>
              </div>

              <!-- Time -->
              <div
                class="group relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-[#d4af37]/20 shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:bg-white/[0.05] hover:shadow-[0_10px_50px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden">
                <div class="space-y-4 relative z-10">
                  <div
                    class="inline-flex items-center justify-center p-3 rounded-full bg-[#d4af37]/10 text-[#d4af37] shadow-inner border border-[#d4af37]/20">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5">
                      <circle
                        cx="12"
                        cy="12"
                        r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h4
                    class="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37]">
                    WAKTU
                  </h4>
                  <p
                    class="font-serif text-[1.35rem] text-[#fdf8f5] font-light italic mt-2">
                    11:00 pagi - 5:00 petang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Countdown -->
        <section
          class="bg-[#2d0a0a] text-[#fdf8f5] py-28 relative overflow-hidden">
          <!-- Songket Background Overlay -->
          <div
            class="absolute inset-0 opacity-[0.07] pointer-events-none bg-[url('/songket_maroon_gold_pattern_1775116047702.png')] bg-repeat"
            style="background-size: 250px"></div>
          <!-- Ambient Glow -->
          <div
            class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              class="w-96 h-96 bg-[#d4af37] filter blur-[150px] opacity-10 rounded-full"></div>
          </div>

          <div class="w-full px-6 text-center space-y-14 relative z-10">
            <div class="space-y-3">
              <h2 class="font-serif italic text-4xl drop-shadow-md">
                Menghitung Hari Bahagia
              </h2>
              <div
                class="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mx-auto"></div>
            </div>

            <div class="grid grid-cols-4 gap-3 max-w-sm mx-auto">
              <div
                v-for="(val, unit) in countdown"
                :key="unit"
                class="flex flex-col items-center justify-center bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-[1.5rem] p-4 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all hover:bg-white/10 hover:-translate-y-1 hover:border-[#d4af37]/30">
                <div
                  class="text-3xl md:text-4xl font-light mb-1 font-outfit tabular-nums bg-clip-text text-transparent bg-gradient-to-b from-[#fdf8f5] to-[#d4af37]">
                  {{ val }}
                </div>
                <div
                  class="text-[8px] tracking-[0.25em] font-bold text-[#d4af37]/70 uppercase">
                  {{ unit }}
                </div>
              </div>
            </div>

            <div
              class="inline-block p-4 px-8 border border-[#d4af37]/30 rounded-2xl bg-gradient-to-b from-[#d4af37]/10 to-transparent backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <p class="text-sm italic font-serif tracking-wide text-[#d4af37]">
                Kehadiran Tuan/Puan amat kami hargai
              </p>
            </div>
          </div>
        </section>

        <!-- RSVP Footer -->
        <section class="w-full py-32 px-6 text-center space-y-16 relative z-10">
          <div
            class="p-12 bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-[#d4af37]/20 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] space-y-12 relative overflow-hidden">
            <div
              class="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12 -z-10 text-white scale-150 transform translate-x-8 -translate-y-8">
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.41,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.59,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
              </svg>
            </div>

            <div class="space-y-4">
              <h2
                class="font-serif text-4xl md:text-5xl text-[#d4af37] italic drop-shadow-sm">
                Kehadiran & RSVP
              </h2>
              <div class="flex items-center justify-center gap-3 py-1">
                <div
                  class="h-px w-10 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
                <div class="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                <div
                  class="h-px w-10 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
              </div>
              <p
                class="text-[#fdf8f5]/60 font-medium max-w-sm mx-auto tracking-wide italic leading-relaxed pt-2">
                "Sila sahkan kehadiran anda untuk memudahkan urusan penyediaan
                majlis."
              </p>
            </div>

            <div class="grid grid-cols-1 gap-5 relative z-10">
              <a
                href="https://wa.me/60123456789"
                class="group flex flex-col items-center p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:bg-white/[0.08] hover:border-[#d4af37]/30 hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)] transition-all duration-300 hover:-translate-y-1">
                <div
                  class="p-4 bg-[#25D366]/10 text-[#25D366] rounded-2xl mb-5 shadow-inner border border-[#25D366]/20 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h4
                  class="font-bold text-[#fdf8f5] text-sm tracking-widest uppercase">
                  Pihak Lelaki
                </h4>
                <p class="text-xs text-[#d4af37]/80 mt-1.5 font-medium">
                  Noradam
                </p>
                <div
                  class="mt-6 py-2.5 px-8 bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white text-[10px] uppercase font-bold tracking-[0.25em] rounded-xl transition-all shadow-[0_5px_15px_rgba(37,211,102,0.2)] group-hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)]">
                  WhatsApp RSVP
                </div>
              </a>

              <a
                href="https://wa.me/60123456789"
                class="group flex flex-col items-center p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:bg-white/[0.08] hover:border-[#d4af37]/30 hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)] transition-all duration-300 hover:-translate-y-1">
                <div
                  class="p-4 bg-[#25D366]/10 text-[#25D366] rounded-2xl mb-5 shadow-inner border border-[#25D366]/20 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h4
                  class="font-bold text-[#fdf8f5] text-sm tracking-widest uppercase">
                  Pihak Perempuan
                </h4>
                <p class="text-xs text-[#d4af37]/80 mt-1.5 font-medium">
                  Nur Hawa
                </p>
                <div
                  class="mt-6 py-2.5 px-8 bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white text-[10px] uppercase font-bold tracking-[0.25em] rounded-xl transition-all shadow-[0_5px_15px_rgba(37,211,102,0.2)] group-hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)]">
                  WhatsApp RSVP
                </div>
              </a>
            </div>

            <p
              class="text-[10px] tracking-[0.2em] text-[#d4af37]/40 font-bold uppercase pt-10 border-t border-[#d4af37]/10 w-2/3 mx-auto mt-4">
              #AdamHawaWedding
            </p>
          </div>
        </section>

        <!-- Signature -->
        <footer class="pb-24 text-center relative z-10">
          <div
            class="p-4 inline-block bg-white/5 border border-[#d4af37]/20 rounded-full shadow-sm mb-4 backdrop-blur-sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d4af37"
              stroke-width="2">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <p
            class="text-[10px] tracking-[0.4em] text-[#fdf8f5]/40 font-bold uppercase">
            Adam & Hawa • 2026
          </p>
        </footer>
      </main>

      <!-- Floating Audio Control -->
      <div class="fixed bottom-8 left-8 z-[100]">
        <button
          @click="toggleAudio"
          class="p-4 bg-[#2d0a0a]/90 backdrop-blur-md rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.5)] border border-[#d4af37]/30 group transition-all active:scale-95 flex items-center gap-3">
          <div class="relative flex items-center justify-center p-1">
            <div
              v-show="isPlaying"
              class="flex gap-0.5 items-end h-3 translate-y-[-1px]">
              <div class="w-[2px] bg-[#800000] animate-bar-1 h-3"></div>
              <div class="w-[2px] bg-[#800000] animate-bar-2 h-2"></div>
              <div class="w-[2px] bg-[#800000] animate-bar-3 h-4"></div>
              <div class="w-[2px] bg-[#800000] animate-bar-1 h-2"></div>
            </div>
            <svg
              v-show="!isPlaying"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-[#d4af37]">
              <rect
                width="4"
                height="16"
                x="6"
                y="4"
                rx="1" />
              <rect
                width="4"
                height="16"
                x="14"
                y="4"
                rx="1" />
            </svg>
          </div>
          <span
            class="text-[10px] font-bold tracking-widest text-[#800000] group-hover:text-[#5d1010] transition-colors"
            >MUSIC</span
          >
        </button>
      </div>
      <!-- Bottom Navigation Bar -->
      <div
        class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-[#2d0a0a]/95 backdrop-blur-2xl border-t border-[#d4af37]/20 z-[199] px-6 py-3 pb-8 shadow-[0_-10px_50px_rgba(0,0,0,0.3)]">
        <div class="flex justify-between items-center">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="activePanel = activePanel === item.id ? null : item.id"
            class="flex flex-col items-center gap-1 group">
            <div
              class="p-2 rounded-xl transition-all group-hover:bg-white/5 group-active:scale-90"
              :class="
                activePanel === item.id
                  ? 'bg-[#d4af37] text-[#2d0a0a] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'text-[#fdf8f5]/40 group-hover:text-[#d4af37]'
              ">
              <div
                v-html="item.icon"
                class="w-5 h-5"></div>
            </div>
            <span
              class="text-[9px] font-bold tracking-[0.1em] uppercase transition-colors"
              :class="
                activePanel === item.id
                  ? 'text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]'
                  : 'text-[#fdf8f5]/40 group-hover:text-[#d4af37]'
              ">
              {{ item.label }}
            </span>
          </button>
        </div>
      </div>

      <!-- Slide-up Panels Overlay Container -->
      <div
        class="fixed inset-0 z-[198] flex items-end justify-center pointer-events-none overflow-hidden">
        <!-- Dimming Backdrop -->
        <transition-fade>
          <div
            v-if="activePanel"
            class="absolute inset-0 bg-[#2d0a0a]/60 backdrop-blur-[2px] pointer-events-auto z-[180]"
            @click="activePanel = null"></div>
        </transition-fade>

        <!-- Slide-up Content -->
        <transition-slide
          mode="out-in"
          :offset="[0, '100%']"
          :duration="500">
          <div
            v-if="activePanel"
            :key="activePanel"
            class="relative w-full max-w-[480px] bg-[#2d0a0a] rounded-t-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.5)] pointer-events-auto max-h-[85vh] overflow-y-auto custom-scrollbar pb-32 z-[250] border-t border-[#d4af37]/20">
            <!-- Global Texture for Drawer -->
            <div
              class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/songket_maroon_gold_pattern_1775116047702.png')] bg-repeat"
              style="background-size: 200px"></div>

            <!-- Handle -->
            <div
              class="sticky top-0 bg-[#2d0a0a]/90 backdrop-blur-md z-10 pt-4 pb-2">
              <div
                class="w-12 h-1.5 bg-[#d4af37] rounded-full mx-auto mb-4 opacity-50"></div>
              <button
                @click="activePanel = null"
                class="absolute top-4 right-8 p-2 text-[#fdf8f5]/40 hover:text-[#d4af37] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <!-- Content -->
            <div
              class="px-8 space-y-10 animate-in slide-in-from-bottom-8 duration-500 relative z-10">
              <div
                v-if="activePanel === 'contact'"
                class="space-y-6">
                <div class="text-center space-y-2 relative">
                  <div
                    class="absolute inset-x-0 top-1/2 flex items-center justify-center -z-10 opacity-30">
                    <div
                      class="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                  </div>
                  <h3
                    class="font-serif text-[1.75rem] text-[#d4af37] italic bg-[#2d0a0a] inline-block px-4">
                    Hubungi Keluarga
                  </h3>
                  <p class="text-xs text-[#fdf8f5]/60 font-medium pt-2">
                    Hubungi kami melalui WhatsApp atau Telefon
                  </p>
                </div>
                <div class="grid grid-cols-1 gap-4">
                  <div
                    v-for="person in contacts"
                    :key="person.name"
                    class="flex items-center justify-between p-5 bg-white/[0.03] backdrop-blur-md rounded-[1.5rem] border border-[#d4af37]/20 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition-all group hover:bg-white/[0.05]">
                    <div class="space-y-1 pl-2">
                      <h4
                        class="font-bold text-[#fdf8f5] text-[15px] tracking-wide group-hover:text-[#d4af37] transition-colors">
                        {{ person.name }}
                      </h4>
                      <p
                        class="text-[10px] text-[#d4af37]/80 uppercase tracking-widest font-bold">
                        {{ person.role }}
                      </p>
                    </div>
                    <div class="flex gap-3 pr-1">
                      <a
                        :href="'tel:' + person.phone"
                        class="p-3 bg-white/5 text-[#d4af37] rounded-2xl shadow-sm border border-[#d4af37]/20 hover:bg-[#d4af37] hover:text-[#2d0a0a] hover:scale-105 transition-all"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round">
                          <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg
                      ></a>
                      <a
                        :href="'https://wa.me/' + person.phone"
                        target="_blank"
                        class="p-3 bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white rounded-2xl shadow-[0_5px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:scale-105 transition-all"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round">
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9h.5a3 3 0 0 1 3 3Z" /></svg
                      ></a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-if="activePanel === 'location'"
                class="space-y-6">
                <div class="text-center space-y-2 relative">
                  <div
                    class="absolute inset-x-0 top-1/2 flex items-center justify-center -z-10 opacity-30">
                    <div
                      class="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                  </div>
                  <h3
                    class="font-serif text-[1.75rem] text-[#d4af37] italic bg-[#2d0a0a] inline-block px-4">
                    Lokasi Majlis
                  </h3>
                  <p class="text-xs text-[#fdf8f5]/60 font-medium pt-2">
                    Glass House Glenmarie
                  </p>
                </div>
                <div
                  class="aspect-video w-full rounded-[2rem] bg-white/5 backdrop-blur-md relative overflow-hidden group border-2 border-[#d4af37]/20 shadow-[0_10px_35px_rgba(212,175,55,0.05)]">
                  <div
                    class="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-white/[0.01] animate-pulse"
                    v-if="!mapLoaded"></div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15938.835496464536!2d101.666992!3d2.919293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb66bd0000001%3A0x6e246797a7e4e1a!2sDewan%20Melati%20Presint%203!5e0!3m2!1sen!2smy!4v1712030000000!5m2!1sen!2smy"
                    class="w-full h-full border-0 filter opacity-90 brightness-90 contrast-125 saturate-150 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-500"
                    allowfullscreen
                    loading="lazy"
                    @load="mapLoaded = true"></iframe>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <a
                    href="https://waze.com/ul?ll=2.9137,101.6565"
                    target="_blank"
                    class="flex flex-col items-center gap-3 p-6 bg-white/[0.03] backdrop-blur-md border border-[#d4af37]/20 rounded-[1.5rem] hover:bg-white/[0.05] hover:shadow-[0_8px_25px_rgba(212,175,55,0.15)] transition-all hover:-translate-y-1 text-center group">
                    <div
                      class="w-12 h-12 bg-[#3399FF]/10 border border-[#3399FF]/30 rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(51,159,255,0.1)] group-hover:scale-110 transition-transform">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3399FF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle
                          cx="12"
                          cy="12"
                          r="10" />
                        <path
                          d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    </div>
                    <span
                      class="text-[10px] font-bold tracking-widest uppercase text-[#fdf8f5]"
                      >Waze</span
                    >
                  </a>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    class="flex flex-col items-center gap-3 p-6 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-md rounded-[1.5rem] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition-all hover:-translate-y-1 text-center group border border-[#d4af37]/20">
                    <div
                      class="w-12 h-12 bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d4af37"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path
                          d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle
                          cx="12"
                          cy="10"
                          r="3" />
                      </svg>
                    </div>
                    <span
                      class="text-[10px] font-bold tracking-widest uppercase text-[#d4af37]"
                      >Google Maps</span
                    >
                  </a>
                </div>
              </div>

              <div
                v-if="activePanel === 'gift'"
                class="space-y-8">
                <div class="text-center space-y-2 relative">
                  <div
                    class="absolute inset-x-0 top-1/2 flex items-center justify-center -z-10 opacity-30">
                    <div
                      class="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                  </div>
                  <h3
                    class="font-serif text-[1.75rem] text-[#d4af37] italic bg-[#2d0a0a] inline-block px-4">
                    Duit Salam / Hadiah
                  </h3>
                  <p
                    class="text-xs text-[#fdf8f5]/60 leading-relaxed pt-2 items-center text-balance px-4">
                    Kehadiran anda adalah hadiah terindah, namun jika ingin
                    memberi salam kaut berikut adalah maklumatnya.
                  </p>
                </div>
                <div class="grid grid-cols-1 gap-6">
                  <div
                    class="p-8 bg-white/[0.03] backdrop-blur-md border border-[#d4af37]/20 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.15)] space-y-8 text-center relative overflow-hidden group hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all">
                    <div
                      class="w-40 h-40 bg-white rounded-3xl mx-auto flex items-center justify-center border-4 border-[#2d0a0a] shadow-[0_10px_30px_rgba(212,175,55,0.2)] overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MAYBANK-HAWA-1234567890"
                        alt="QR Code Duit Raya"
                        class="w-full h-full p-2" />
                    </div>
                    <div class="space-y-2 relative z-10">
                      <div
                        class="inline-block px-3 py-1 bg-[#ffcc00]/10 text-[#ffcc00] rounded-full text-[10px] font-bold uppercase tracking-widest mb-1 shadow-sm border border-[#ffcc00]/20">
                        Maybank
                      </div>
                      <p
                        class="text-xl font-bold text-[#fdf8f5] tracking-wider">
                        1234 5678 9012
                      </p>
                      <p
                        class="text-xs text-[#d4af37] font-bold uppercase tracking-widest">
                        NUR HAWA BINTI ALI
                      </p>
                    </div>
                    <button
                      class="relative z-10 w-full py-4 bg-gradient-to-b from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/30 text-[#d4af37] rounded-2xl text-[11px] font-bold tracking-widest uppercase shadow-[0_8px_25px_rgba(212,175,55,0.1)] hover:bg-[#d4af37]/20 hover:scale-[1.02] active:scale-95 transition-all outline-none backdrop-blur-md">
                      Salin No. Akaun
                    </button>
                  </div>
                </div>
              </div>

              <div
                v-if="activePanel === 'rsvp'"
                class="space-y-8">
                <div class="text-center space-y-2 relative">
                  <div
                    class="absolute inset-x-0 top-1/2 flex items-center justify-center -z-10 opacity-30">
                    <div
                      class="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                  </div>
                  <h3
                    class="font-serif text-[1.75rem] text-[#d4af37] italic bg-[#2d0a0a] inline-block px-4">
                    Sahkan Kehadiran
                  </h3>
                  <p class="text-xs text-[#fdf8f5]/60 italic mt-2">
                    Sila maklumkan bilangan tetamu sebelum 15 Mei 2026
                  </p>
                </div>
                <div class="grid grid-cols-1 gap-5">
                  <a
                    href="https://wa.me/60123456789?text=Saya%20ingin%20mengesahkan%20kehadiran%20ke%20Majlis%20Adam%20%26%20Hawa"
                    target="_blank"
                    class="flex items-center gap-6 p-6 py-8 bg-gradient-to-r from-[#128C7E]/20 to-[#25D366]/20 backdrop-blur-md text-white rounded-[2rem] hover:shadow-[0_15px_40px_rgba(37,211,102,0.15)] transition-all group border border-[#25D366]/30 hover:-translate-y-1 relative overflow-hidden">
                    <!-- Subtle gleam -->
                    <div
                      class="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-[0.03] group-hover:animate-shine"></div>

                    <div
                      class="p-4 bg-[#25D366]/20 text-[#25D366] rounded-2xl shadow-inner backdrop-blur-sm border border-[#25D366]/20 relative z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div class="relative z-10">
                      <h4
                        class="font-bold text-[15px] tracking-wide text-[#fdf8f5]">
                        RSVP melalui WhatsApp
                      </h4>
                      <p
                        class="text-[10px] text-[#25D366] uppercase tracking-[0.25em] mt-1.5 font-bold">
                        Respon Segera
                      </p>
                    </div>
                  </a>
                  <div
                    class="p-8 bg-white/[0.02] border border-[#d4af37]/20 shadow-inner rounded-[2rem] text-center mt-2">
                    <p class="text-xs text-[#fdf8f5]/50 leading-relaxed italic">
                      "Semoga kehadiran para hadirin sekalian akan menambah lagi
                      keberkatan buat kedua-dua mempelai."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition-slide>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useHead } from "#imports";

useHead({
  title: "Noradam & Nur Hawa | Wedding Invitation",
  meta: [
    {
      name: "description",
      content: "Jemputan Walimatulurus Noradam & Nur Hawa - 02 Mei 2026",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { property: "og:title", content: "Walimatulurus Noradam & Nur Hawa" },
    {
      property: "og:description",
      content: "Kami menjemput Tuan/Puan ke majlis perkahwinan kami.",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Noradam & Nur Hawa Wedding" },
  ],
});

const isOpening = ref(false);
const isFullyOpened = ref(false);
const isPlaying = ref(false);
const activePanel = ref<string | null>(null);
const mapLoaded = ref(false);

const navItems = [
  {
    id: "contact",
    label: "Contact",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  },
  {
    id: "location",
    label: "Location",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  },
  {
    id: "gift",
    label: "Gift",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12V8H4v4"/><path d="M2 12h20"/><path d="M7 12V8"/><path d="M17 12V8"/><rect width="20" height="8" x="2" y="12" rx="2"/></svg>',
  },
  {
    id: "rsvp",
    label: "RSVP",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>',
  },
];

const contacts = [
  { name: "Ahmad Abdullah", role: "Bapa Pengantin", phone: "60123456789" },
  { name: "Fatimah Abu", role: "Ibu Pengantin", phone: "60123456780" },
];

const openDoor = () => {
  isOpening.value = true;
  // Start music if intended
  isPlaying.value = true;

  // Remove overlay after animation finishes
  setTimeout(() => {
    isFullyOpened.value = true;
  }, 1800);
};

const targetDate = new Date("2026-05-02T11:00:00").getTime();

const countdown = ref({
  hari: 0,
  jam: 0,
  minit: 0,
  saat: 0,
});

const updateCountdown = () => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff > 0) {
    countdown.value = {
      hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
      jam: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minit: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      saat: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }
};

let timer: any;
onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});

const scrollToContent = () => {
  document
    .getElementById("main-content")
    ?.scrollIntoView({ behavior: "smooth" });
};

const toggleAudio = () => {
  isPlaying.value = !isPlaying.value;
  // Implementation of audio would go here if file is provided
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Outfit:wght@100..900&display=swap");

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

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s infinite ease-in-out;
}

@keyframes bar {
  0%,
  100% {
    height: 10%;
  }
  50% {
    height: 100%;
  }
}

.animate-bar-1 {
  animation: bar 0.6s infinite ease-in-out;
}
.animate-bar-2 {
  animation: bar 0.8s infinite ease-in-out 0.2s;
}
.animate-bar-3 {
  animation: bar 0.5s infinite ease-in-out 0.1s;
}

.shadow-2xl-soft {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05);
}

/* Custom transitions and scroll behaviors */
html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: #5d1010;
  color: #d4af37;
}

@keyframes shine {
  0% {
    transform: translateX(-150%) skewX(-12deg);
  }
  100% {
    transform: translateX(250%) skewX(-12deg);
  }
}

.animate-shine {
  animation: shine 2s ease-in-out infinite;
}
</style>
