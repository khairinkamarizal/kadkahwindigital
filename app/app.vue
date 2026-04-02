<template>
  <div
    class="min-h-screen font-outfit text-[#2d0a0a] bg-[#2d0a0a] selection:bg-[#5d1010] selection:text-[#d4af37] flex justify-center">
    <!-- Desktop Background -->
    <div
      class="fixed inset-0 z-0 hidden md:block"
      :style="{
        backgroundImage: 'url(/songket_maroon_gold_pattern_1775116047702.png)',
        backgroundSize: '400px',
        backgroundPosition: 'center',
        filter: 'blur(20px) brightness(0.4)',
      }"></div>

    <!-- Side Gradients (Desktop) -->
    <div
      class="fixed inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#2d0a0a] to-transparent z-[5] pointer-events-none hidden md:block"></div>
    <div
      class="fixed inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#2d0a0a] to-transparent z-[5] pointer-events-none hidden md:block"></div>

    <div
      class="relative z-10 w-full max-w-[480px] bg-[#fdf8f5] shadow-[0_0_80px_rgba(0,0,0,0.5)] min-h-screen">
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
            class="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#2d0a0a] via-transparent to-transparent pointer-events-none"></div>
          <div
            class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#2d0a0a]/50 to-transparent pointer-events-none"></div>

          <!-- Ornate Border -->
          <div
            class="absolute inset-4 border border-[#d4af37]/50 pointer-events-none"></div>
          <div
            class="absolute inset-6 border border-[#d4af37]/25 pointer-events-none"></div>

          <!-- Central Seal (Left Half) -->
          <div
            class="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-32 bg-[#2d0a0a] border-y border-l border-[#d4af37]/50 rounded-l-full flex items-center justify-end pr-2 shadow-2xl z-20">
            <div
              class="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center">
              <div
                class="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
            </div>
          </div>
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
            class="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-[#2d0a0a] via-transparent to-transparent pointer-events-none"></div>
          <div
            class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#2d0a0a]/50 to-transparent pointer-events-none"></div>

          <!-- Ornate Border -->
          <div
            class="absolute inset-4 border border-[#d4af37]/50 pointer-events-none"></div>
          <div
            class="absolute inset-6 border border-[#d4af37]/25 pointer-events-none"></div>

          <!-- Central Seal (Right Half) -->
          <div
            class="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-32 bg-[#2d0a0a] border-y border-r border-[#d4af37]/50 rounded-r-full flex items-center justify-start pl-2 shadow-2xl z-20">
            <div
              class="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center">
              <div
                class="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <!-- Center Content -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center z-[210] pointer-events-none transition-all duration-500"
          :class="{ 'opacity-0 scale-75 blur-lg': isOpening }">
          <div
            class="p-10 bg-[#2d0a0a] backdrop-blur-xl rounded-[3rem] shadow-[0_20px_100px_rgba(45,10,10,0.5)] border border-[#d4af37]/50 flex flex-col items-center space-y-8 pointer-events-auto text-center relative overflow-hidden">
            <!-- Pattern inside card -->

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
              <h2 class="font-playfair text-5xl text-white">
                Mimi <br /><span class="italic font-normal text-[#d4af37]"
                  >&</span
                ><br />
                Hafiz
              </h2>
            </div>

            <p class="text-sm text-white/60">"Save the Date"<br />30.05.2026</p>

            <button
              @click="openDoor"
              class="group relative px-10 py-4 bg-[#5d1010] text-[#d4af37] border border-[#d4af37]/50 rounded-full text-xs font-bold tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-xl overflow-hidden shadow-[#5d1010]/20">
              <span class="relative z-10">BUKA</span>
              <div
                class="absolute inset-0 bg-[#d4af37] opacity-0 group-hover:opacity-10 transition-opacity"></div>
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
            filter: 'brightness(0.3) contrast(1.2)',
          }"></div>

        <!-- Overlay Gradient -->
        <div
          class="absolute inset-0 z-[1] bg-gradient-to-b from-[#5d1010]/80 via-[#5d1010]/95 to-[#5d1010]"></div>

        <div class="relative z-10 space-y-6 px-4">
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
            <h1 class="font-playfair text-5xl text-[#fdf8f5] leading-tight">
              Mimi
              <span class="italic font-normal block text-[#d4af37]">&</span>
              Hafiz
            </h1>
          </transition-fade>

          <transition-fade
            appear
            :duration="1500"
            :delay="800">
            <div class="flex flex-col items-center gap-4">
              <div class="h-10 w-[2px] bg-[#d4af37]/30"></div>
              <p class="text-sm tracking-[0.3em] text-[#d4af37] font-bold">
                SABTU, 30 MEI 2026
              </p>
              <div class="h-10 w-[2px] bg-[#d4af37]/30"></div>
            </div>
          </transition-fade>

          <transition-fade
            appear
            :duration="1500"
            :delay="1100">
            <button
              @click="scrollToContent"
              class="group mt-12 flex flex-col items-center animate-bounce-slow">
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
        <!-- Couple Introduction Section -->
        <section class="w-full py-24 px-6 text-center space-y-16">
          <div class="space-y-4">
            <h2
              class="text-sm tracking-[0.25em] uppercase text-[#800000] font-bold mb-6">
              Mewakili Ayah & Ibu
            </h2>
            <p
              class="font-playfair italic text-2xl text-stone-800 mx-auto leading-relaxed italic">
              "Dan di antara tanda-tanda yang membuktikan kekuasaan-Nya dan
              rahmat-Nya, bahawa Ia menciptakan untuk kamu, isteri-isteri dari
              jenis kamu sendiri..."
            </p>
            <p class="text-xs text-[#800000]/60 font-medium tracking-wide">
              Surah Ar-Rum: 21
            </p>
          </div>

          <div class="grid grid-cols-1 gap-12 items-center">
            <div class="relative group">
              <div
                class="absolute -inset-4 bg-stone-100 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <img
                src="/wedding_couple_mimi_hafiz_1775110777773.png"
                alt="Mimi & Hafiz"
                class="relative z-10 w-64 h-64 object-cover rounded-full mx-auto ring-8 ring-white shadow-2xl transition-transform duration-700 hover:scale-105" />
            </div>

            <div class="text-left space-y-8">
              <div class="space-y-2">
                <h3
                  class="font-playfair text-3xl text-[#2d0a0a] border-b border-stone-200 pb-2">
                  Nur Amira (Mimi)
                </h3>
                <p class="text-[#800000]/80 text-sm italic">
                  Puteri sulung kepada Tn. Hj. Rahman & Pn. Hjh. Maznah
                </p>
              </div>

              <div class="font-playfair italic text-4xl text-[#800000]">
                dengan
              </div>

              <div class="space-y-2 text-right">
                <h3
                  class="font-playfair text-3xl text-[#2d0a0a] border-b border-stone-200 pb-2">
                  Hafizuddin (Hafiz)
                </h3>
                <p class="text-[#800000]/80 text-sm italic">
                  Putera bongsu kepada En. Ibrahim & Pn. Rosnah
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Countdown -->
        <section
          class="bg-[#2d0a0a] text-[#fdf8f5] py-24 relative overflow-hidden">
          <!-- Songket Background Overlay -->
          <div
            class="absolute inset-0 opacity-10 pointer-events-none bg-[url('/songket_maroon_gold_pattern_1775116047702.png')] bg-repeat"
            style="background-size: 200px"></div>

          <div class="w-full px-6 text-center space-y-12 relative z-10">
            <h2 class="font-playfair italic text-3xl">
              Menghitung Hari Bahagia
            </h2>

            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="(val, unit) in countdown"
                :key="unit"
                class="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-xl transition-all hover:bg-white/10">
                <div
                  class="text-4xl font-light text-rose-200 mb-2 font-outfit tabular-nums">
                  {{ val }}
                </div>
                <div
                  class="text-[10px] tracking-[0.2em] font-bold text-[#800000]/60 uppercase">
                  {{ unit }}
                </div>
              </div>
            </div>

            <div
              class="inline-block p-4 border border-[#d4af37]/30 rounded-xl bg-[#d4af37]/5 backdrop-blur-sm">
              <p
                class="text-sm italic font-playfair tracking-wide text-[#d4af37]">
                Kehadiran Tuan/Puan amat kami hargai
              </p>
            </div>
          </div>
        </section>

        <!-- Details & Schedule -->
        <section class="w-full py-32 px-6 grid grid-cols-1 gap-16">
          <!-- Event Details -->
          <div class="space-y-10">
            <div class="space-y-4 text-center">
              <h2 class="font-playfair text-4xl text-[#2d0a0a]">
                Majlis Kesyukuran
              </h2>
              <p class="text-[#800000]/70 leading-relaxed font-medium">
                Kami mempersilakan Tuan/Puan ke majlis meraikan perkahwinan
                anakanda kami pada:
              </p>
            </div>

            <div class="space-y-8">
              <div class="flex items-start gap-4">
                <div
                  class="p-3 bg-[#fdf8f5] border border-[#d4af37]/20 rounded-full text-[#800000]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round">
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
                <div>
                  <h4 class="font-bold text-[#2d0a0a] mb-1">Tarikh</h4>
                  <p class="text-[#800000]/70 font-medium">
                    Sabtu, 30 Mei 2026
                  </p>
                  <p class="text-xs text-[#800000] italic font-bold mt-1">
                    13 Zulhijjah 1447H
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4 px-0">
                <div
                  class="p-3 bg-[#fdf8f5] border border-[#d4af37]/20 rounded-full text-[#800000]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle
                      cx="12"
                      cy="10"
                      r="3" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-[#2d0a0a] mb-1">Lokasi</h4>
                  <p class="text-[#800000]/70 font-medium">
                    Dewan Melati, Putrajaya
                  </p>
                  <p class="text-[#800000]/80 text-sm mt-1 leading-snug">
                    Presint 5, 62100 Putrajaya, Wilayah Persekutuan Putrajaya
                  </p>
                </div>
              </div>
            </div>

            <div class="flex gap-4 pt-4">
              <a
                href="https://waze.com/ul?ll=2.9137,101.6565"
                target="_blank"
                class="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-[#d4af37]/30 rounded-xl hover:bg-[#fdf8f5] transition-colors group shadow-sm">
                <span
                  class="text-xs font-bold tracking-widest uppercase text-[#800000] group-hover:text-[#2d0a0a] transition-colors"
                  >Waze</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line
                    x1="10"
                    x2="21"
                    y1="14"
                    y2="3" />
                </svg>
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                class="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#5d1010] rounded-xl hover:bg-[#800000] transition-all group shadow-lg shadow-[#5d1010]/20">
                <span
                  class="text-xs font-bold tracking-widest uppercase text-[#d4af37]"
                  >Google Maps</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d4af37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line
                    x1="10"
                    x2="21"
                    y1="14"
                    y2="3" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Timeline -->
          <div
            class="bg-[#5d1010]/5 border border-[#d4af37]/20 rounded-3xl p-10 space-y-12 shadow-inner">
            <h2
              class="font-playfair text-3xl text-center text-[#2d0a0a] italic">
              Susunan Aturcara
            </h2>

            <div class="relative space-y-12">
              <div
                class="absolute left-[17px] top-2 bottom-2 w-px bg-[#d4af37]/30"></div>

              <div class="relative flex gap-8">
                <div
                  class="mt-1 w-9 h-9 flex-shrink-0 bg-[#fdf8f5] border-2 border-[#5d1010] rounded-full z-10 flex items-center justify-center">
                  <div class="w-1.5 h-1.5 bg-[#5d1010] rounded-full"></div>
                </div>
                <div class="space-y-1">
                  <p
                    class="text-[10px] tracking-widest font-bold text-[#800000]/60 uppercase">
                    11:00 AM
                  </p>
                  <h4
                    class="font-playfair text-xl font-semibold text-[#2d0a0a]">
                    Kehadiran Tetamu
                  </h4>
                  <p class="text-sm text-[#800000]/60 italic font-medium">
                    Selamat datang para tetamu
                  </p>
                </div>
              </div>

              <div class="relative flex gap-8">
                <div
                  class="mt-1 w-9 h-9 flex-shrink-0 bg-[#fdf8f5] border-2 border-[#d4af37] rounded-full z-10 flex items-center justify-center animate-pulse">
                  <div class="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></div>
                </div>
                <div class="space-y-1">
                  <p
                    class="text-[10px] tracking-widest font-bold text-[#800000]/60 uppercase font-outfit">
                    12:30 PM
                  </p>
                  <h4
                    class="font-playfair text-xl font-semibold text-[#2d0a0a] italic underline decoration-[#d4af37]/30 underline-offset-8">
                    Ketibaan Pengantin
                  </h4>
                  <p class="text-sm text-[#800000]/60 italic font-playfair">
                    Acara bersanding & Makan Beradap
                  </p>
                </div>
              </div>

              <div class="relative flex gap-8">
                <div
                  class="mt-1 w-9 h-9 flex-shrink-0 bg-[#fdf8f5] border-2 border-[#5d1010] rounded-full z-10 flex items-center justify-center">
                  <div class="w-1.5 h-1.5 bg-[#5d1010] rounded-full"></div>
                </div>
                <div class="space-y-1">
                  <p
                    class="text-[10px] tracking-widest font-bold text-[#800000]/60 uppercase">
                    4:00 PM
                  </p>
                  <h4
                    class="font-playfair text-xl font-semibold text-[#2d0a0a]">
                    Majlis Bersurai
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- RSVP Footer -->
        <section class="w-full py-24 px-6 text-center space-y-12">
          <div
            class="p-12 bg-[#5d1010]/5 border border-[#d4af37]/20 rounded-[3rem] space-y-10 relative overflow-hidden backdrop-blur-sm">
            <div
              class="absolute top-0 right-0 p-8 opacity-10 rotate-12 -z-10 text-[#5d1010]">
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
              <h2 class="font-playfair text-4xl text-[#2d0a0a] italic">
                Kehadiran & RSVP
              </h2>
              <p
                class="text-[#800000]/70 font-medium max-w-sm mx-auto tracking-wide italic">
                "Sila sahkan kehadiran anda untuk memudahkan urusan penyediaan
                majlis."
              </p>
            </div>

            <div class="grid grid-cols-1 gap-4">
              <a
                href="https://wa.me/60123456789"
                class="group flex flex-col items-center p-8 bg-[#fdf8f5] border border-[#d4af37]/10 rounded-3xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <div class="p-3 bg-green-50 text-green-600 rounded-full mb-4">
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
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h4
                  class="font-bold text-[#2d0a0a] text-sm tracking-widest uppercase">
                  Pihak Lelaki
                </h4>
                <p class="text-xs text-[#800000]/60 mt-1">Hafizuddin</p>
                <div
                  class="mt-6 py-2 px-6 bg-[#5d1010] group-hover:bg-[#800000] text-[#d4af37] text-[10px] uppercase font-bold tracking-[0.2em] rounded-lg transition-colors">
                  WhatsApp RSVP
                </div>
              </a>

              <a
                href="https://wa.me/60123456789"
                class="group flex flex-col items-center p-8 bg-[#fdf8f5] border border-[#d4af37]/10 rounded-3xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <div class="p-3 bg-green-50 text-green-600 rounded-full mb-4">
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
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h4
                  class="font-bold text-[#2d0a0a] text-sm tracking-widest uppercase">
                  Pihak Perempuan
                </h4>
                <p class="text-xs text-[#800000]/60 mt-1">Nur Amira</p>
                <div
                  class="mt-6 py-2 px-6 bg-[#5d1010] group-hover:bg-[#800000] text-[#d4af37] text-[10px] uppercase font-bold tracking-[0.2em] rounded-lg transition-colors">
                  WhatsApp RSVP
                </div>
              </a>
            </div>

            <p class="text-xs text-[#800000]/40 font-bold pt-8">
              #MimiHafizWedding #TillJannah
            </p>
          </div>
        </section>

        <!-- Signature -->
        <footer class="pb-24 text-center">
          <div
            class="p-4 inline-block bg-[#fdf8f5] border border-[#d4af37]/20 rounded-full shadow-sm mb-4">
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
            class="text-[10px] tracking-[0.4em] text-[#800000]/40 font-bold uppercase">
            Mimi & Hafiz • 2026
          </p>
        </footer>
      </main>

      <!-- Floating Audio Control -->
      <div class="fixed bottom-8 left-8 z-[100]">
        <button
          @click="toggleAudio"
          class="p-4 bg-[#fdf8f5]/80 backdrop-blur-md rounded-full shadow-2xl-soft border border-[#d4af37]/20 group transition-all active:scale-95 flex items-center gap-3">
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
        class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-[#fdf8f5]/95 backdrop-blur-2xl border-t border-[#d4af37]/20 z-[199] px-6 py-3 pb-8 shadow-[0_-10px_50px_rgba(93,16,16,0.1)]">
        <div class="flex justify-between items-center">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="activePanel = activePanel === item.id ? null : item.id"
            class="flex flex-col items-center gap-1 group">
            <div
              class="p-2 rounded-xl transition-all group-hover:bg-[#5d1010]/5 group-active:scale-90"
              :class="
                activePanel === item.id
                  ? 'bg-[#5d1010] text-[#d4af37]'
                  : 'text-[#800000]/40 group-hover:text-[#5d1010]'
              ">
              <div
                v-html="item.icon"
                class="w-5 h-5"></div>
            </div>
            <span
              class="text-[9px] font-bold tracking-[0.1em] uppercase transition-colors"
              :class="
                activePanel === item.id
                  ? 'text-[#2d0a0a]'
                  : 'text-[#800000]/40 group-hover:text-[#5d1010]'
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
            class="relative w-full max-w-[480px] bg-[#fdf8f5] rounded-t-[3rem] shadow-2xl pointer-events-auto max-h-[85vh] overflow-y-auto custom-scrollbar pb-32 z-[250] border-t border-[#d4af37]/20">
            <!-- Handle -->
            <div class="sticky top-0 bg-[#fdf8f5] z-10 pt-4 pb-2">
              <div
                class="w-12 h-1.5 bg-[#d4af37]/40 rounded-full mx-auto mb-4"></div>
              <button
                @click="activePanel = null"
                class="absolute top-4 right-8 p-2 text-[#800000]/40 hover:text-[#5d1010] transition-colors">
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
              class="px-8 space-y-8 animate-in slide-in-from-bottom-8 duration-500">
              <div
                v-if="activePanel === 'contact'"
                class="space-y-6">
                <div class="text-center space-y-2">
                  <h3 class="font-playfair text-2xl text-[#2d0a0a] italic">
                    Hubungi Keluarga
                  </h3>
                  <p class="text-xs text-[#800000]/60 font-medium">
                    Hubungi kami melalui WhatsApp atau Telefon
                  </p>
                </div>
                <div class="grid grid-cols-1 gap-3">
                  <div
                    v-for="person in contacts"
                    :key="person.name"
                    class="flex items-center justify-between p-5 bg-[#5d1010]/5 rounded-2xl border border-[#d4af37]/10 hover:bg-[#5d1010]/10 transition-colors">
                    <div>
                      <h4
                        class="font-bold text-[#2d0a0a] text-sm tracking-wide">
                        {{ person.name }}
                      </h4>
                      <p
                        class="text-[10px] text-[#800000] uppercase tracking-widest font-bold">
                        {{ person.role }}
                      </p>
                    </div>
                    <div class="flex gap-2">
                      <a
                        :href="'tel:' + person.phone"
                        class="p-3 bg-[#fdf8f5] text-[#5d1010] rounded-xl shadow-sm border border-[#d4af37]/20 hover:text-[#2d0a0a] transition-all"
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
                        class="p-3 bg-[#25D366] text-white rounded-xl shadow-sm hover:opacity-90 transition-all"
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
                <div class="text-center space-y-2">
                  <h3 class="font-playfair text-2xl text-[#2d0a0a] italic">
                    Lokasi Majlis
                  </h3>
                  <p class="text-xs text-[#800000]/60 font-medium">
                    Dewan Melati, Putrajaya
                  </p>
                </div>
                <div
                  class="aspect-video w-full rounded-[2rem] bg-[#5d1010]/5 relative overflow-hidden group border border-[#d4af37]/20">
                  <div
                    class="absolute inset-0 bg-[#5d1010]/10 animate-pulse"
                    v-if="!mapLoaded"></div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15938.835496464536!2d101.666992!3d2.919293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb66bd0000001%3A0x6e246797a7e4e1a!2sDewan%20Melati%20Presint%203!5e0!3m2!1sen!2smy!4v1712030000000!5m2!1sen!2smy"
                    class="w-full h-full border-0"
                    allowfullscreen
                    loading="lazy"
                    @load="mapLoaded = true"></iframe>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <a
                    href="https://waze.com/ul?ll=2.9137,101.6565"
                    target="_blank"
                    class="flex flex-col items-center gap-3 p-6 bg-[#fdf8f5] border border-[#d4af37]/10 rounded-2xl hover:bg-[#5d1010]/5 transition-all text-center group">
                    <div
                      class="w-10 h-10 bg-[#5d1010] rounded-full flex items-center justify-center shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d4af37"
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
                      class="text-[10px] font-bold tracking-widest uppercase text-[#5d1010]"
                      >Waze</span
                    >
                  </a>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    class="flex flex-col items-center gap-3 p-6 bg-[#5d1010] rounded-2xl hover:bg-[#800000] transition-all text-center shadow-lg shadow-[#5d1010]/20">
                    <div
                      class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                <div class="text-center space-y-2">
                  <h3 class="font-playfair text-2xl text-[#2d0a0a] italic">
                    Duit Salam / Hadiah
                  </h3>
                  <p class="text-xs text-[#800000]/60">
                    Kehadiran anda adalah hadiah terindah, namun jika ingin
                    memberi salam kaut berikut adalah maklumatnya.
                  </p>
                </div>
                <div class="grid grid-cols-1 gap-6">
                  <div
                    class="p-6 bg-[#5d1010]/5 border border-[#d4af37]/10 rounded-[2rem] space-y-6 text-center">
                    <div
                      class="w-32 h-32 bg-white rounded-2xl mx-auto flex items-center justify-center border border-[#d4af37]/20 shadow-sm overflow-hidden">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MAYBANK-MIMI-1234567890"
                        alt="QR Code Duit Raya"
                        class="w-full h-full p-2" />
                    </div>
                    <div class="space-y-1">
                      <p
                        class="text-[10px] text-[#800000] font-bold uppercase tracking-widest">
                        Maybank
                      </p>
                      <p class="text-sm font-bold text-[#2d0a0a]">
                        1234 5678 9012
                      </p>
                      <p
                        class="text-xs text-[#800000]/80 uppercase tracking-wide">
                        NUR AMIRA BINTI RAHMAN
                      </p>
                    </div>
                    <button
                      class="w-full py-3 bg-[#5d1010] text-[#d4af37] rounded-xl text-xs font-bold tracking-widest uppercase shadow-lg shadow-[#5d1010]/20">
                      Salin No. Akaun
                    </button>
                  </div>
                </div>
              </div>

              <div
                v-if="activePanel === 'rsvp'"
                class="space-y-8">
                <div class="text-center space-y-2">
                  <h3 class="font-playfair text-2xl text-[#2d0a0a] italic">
                    Sahkan Kehadiran
                  </h3>
                  <p class="text-xs text-[#800000]/60 italic">
                    Sila maklumkan bilangan tetamu sebelum 15 Mei 2026
                  </p>
                </div>
                <div class="grid grid-cols-1 gap-4">
                  <a
                    href="https://wa.me/60123456789?text=Saya%20ingin%20mengesahkan%20kehadiran%20ke%20Majlis%20Mimi%20%26%20Hafiz"
                    target="_blank"
                    class="flex items-center gap-6 p-6 bg-[#5d1010] text-[#d4af37] rounded-3xl hover:bg-[#800000] transition-all group shadow-xl shadow-[#5d1010]/20">
                    <div class="p-4 bg-white/10 rounded-2xl">
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
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-bold text-sm tracking-wide">
                        RSVP melalui WhatsApp
                      </h4>
                      <p
                        class="text-[10px] text-[#d4af37]/70 uppercase tracking-[0.2em] mt-1 font-bold">
                        Respon Segera
                      </p>
                    </div>
                  </a>
                  <div
                    class="p-8 bg-[#5d1010]/5 border border-[#d4af37]/10 rounded-3xl text-center">
                    <p class="text-xs text-[#800000] leading-relaxed italic">
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
  title: "Mimi & Hafiz | Wedding Invitation",
  meta: [
    {
      name: "description",
      content: "Jemputan Walimatulurus Mimi & Hafiz - 30 Mei 2026",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { property: "og:title", content: "Walimatulurus Mimi & Hafiz" },
    {
      property: "og:description",
      content: "Kami menjemput Tuan/Puan ke majlis perkahwinan kami.",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Mimi & Hafiz Wedding" },
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
  { name: "Haji Rahman", role: "Ayah Pengantin (P)", phone: "60123456789" },
  { name: "Hajjah Maznah", role: "Ibu Pengantin (P)", phone: "60123456780" },
  { name: "En Ibrahim", role: "Ayah Pengantin (L)", phone: "60123456781" },
  { name: "Pn Rosnah", role: "Ibu Pengantin (L)", phone: "60123456782" },
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

const targetDate = new Date("2026-05-30T11:00:00").getTime();

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
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Outfit:wght@100..900&display=swap");

:root {
  --font-playfair: "Playfair Display", serif;
  --font-outfit: "Outfit", sans-serif;
}

.font-playfair {
  font-family: var(--font-playfair);
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
</style>
