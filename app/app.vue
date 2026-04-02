<template>
  <div
    class="min-h-screen bg-[#efefef] flex items-center justify-center font-outfit selection:bg-[#d4af37] selection:text-[#660B05] sm:py-8 sm:px-4">
    <div
      class="relative z-10 w-full h-[100dvh] sm:h-[850px] max-w-[430px] bg-[#660B05] sm:rounded-[2.5rem] sm:border-[8px] sm:border-[#660B05] shadow-[0_0_80px_rgba(212,175,55,0.08)] overflow-hidden sm:ring-1 sm:ring-[#d4af37]/20 flex flex-col">
      <div
        class="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/songket_maroon_gold_pattern_1775116047702.png')] bg-repeat"
        style="background-size: 180px; mix-blend-mode: color-dodge"></div>

      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none"></div>

      <div
        v-if="!isFullyOpened"
        class="absolute inset-0 z-[200] flex overflow-hidden pointer-events-none sm:rounded-[2rem]">
        <div
          class="w-1/2 h-full bg-[#660B05] transition-transform duration-[2000ms] ease-in-out pointer-events-auto relative border-r border-[#d4af37]/40 shadow-[10px_0_40px_rgba(0,0,0,0.6)]"
          :class="{ '-translate-x-full': isOpening }"
          style="
            background-image: url(&quot;/songket_maroon_gold_pattern_1775116047702.png&quot;);
            background-size: 250px;
          ">
          <div
            class="absolute inset-0 bg-gradient-to-r from-black/25 via-black/15 to-transparent"></div>
          <div
            class="absolute inset-3 border-l border-y border-[#d4af37]/30 rounded-l-2xl"></div>
        </div>

        <div
          class="w-1/2 h-full bg-[#660B05] transition-transform duration-[2000ms] ease-in-out pointer-events-auto relative border-l border-[#d4af37]/40 shadow-[-10px_0_40px_rgba(0,0,0,0.6)]"
          :class="{ 'translate-x-full': isOpening }"
          style="
            background-image: url(&quot;/songket_maroon_gold_pattern_1775116047702.png&quot;);
            background-size: 250px;
          ">
          <div
            class="absolute inset-0 bg-gradient-to-l from-black/25 via-black/15 to-transparent"></div>
          <div
            class="absolute inset-3 border-r border-y border-[#d4af37]/30 rounded-r-2xl"></div>
        </div>

        <div
          class="absolute inset-0 flex flex-col items-center justify-center z-[210] pointer-events-none transition-all duration-[1500ms] ease-in-out"
          :class="{ 'opacity-0 scale-150 blur-xl': isOpening }">
          <div
            class="p-8 bg-[#660B05]/90 backdrop-blur-2xl rounded-full aspect-square border border-[#d4af37]/50 flex flex-col items-center justify-center pointer-events-auto text-center relative overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.25)]">
            <div
              class="absolute inset-0 border-[2px] border-[#d4af37] border-dashed rounded-full opacity-40 animate-[spin_40s_linear_infinite]"></div>

            <p
              class="text-[8px] tracking-[0.5em] text-[#d4af37] font-bold uppercase mb-2">
              Walimatulurus
            </p>
            <h2 class="font-light font-serif text-3xl text-white leading-tight">
              S <span class="text-[#d4af37] italic font-normal">&</span> H
            </h2>
            <p class="text-[9px] text-white/60 tracking-[0.3em] mt-3">
              30.05.2026
            </p>

            <button
              @click="openDoor"
              class="absolute bottom-6 group w-11 h-11 bg-gradient-to-tr from-[#d4af37] via-[#f3e5ab] to-[#d4af37] rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-[0_0_25px_rgba(212,175,55,0.5)] pointer-events-auto">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#660B05"
                stroke-width="2.5"
                class="ml-0.5 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div
                class="absolute inset-0 rounded-full animate-ping opacity-30 bg-[#d4af37]"></div>
            </button>
          </div>
        </div>
      </div>

      <main
        id="main-content"
        class="flex-1 overflow-y-auto custom-scrollbar relative">
        <header
          class="relative min-h-screen flex items-center justify-center text-center py-20 px-6">
          <div class="relative z-10 flex flex-col items-center w-full gap-8">
            <div
              class="space-y-4 animate-fade-in-up"
              style="animation-delay: 0.5s">
              <p
                class="text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold drop-shadow-md">
                Walimatul Urus
              </p>
              <div
                class="w-12 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
            </div>

            <div
              class="relative w-full py-8 animate-fade-in-up"
              style="animation-delay: 0.8s">
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#d4af37] opacity-[0.06] font-serif italic text-[16rem] leading-none pointer-events-none">
                &
              </div>
              <h1
                class="relative font-serif font-light text-[3.25rem] text-[#fdf8f5] leading-[1.2] drop-shadow-2xl">
                Syamimi
                <span
                  class="block text-4xl my-3 text-[#d4af37] italic drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  >&</span
                >
                Hafiz
              </h1>
            </div>

            <div
              class="flex flex-col items-center gap-6 animate-fade-in-up"
              style="animation-delay: 1.1s">
              <div
                class="h-16 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"></div>
              <p class="text-xs tracking-[0.35em] text-[#fdf8f5] font-light">
                SABTU, 30 MEI 2026
              </p>
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
          class="w-full py-24 px-6 text-center space-y-16 relative z-10 bg-gradient-to-b from-transparent via-[#660B05] to-[#660B05]">
          <div class="space-y-6">
            <svg
              class="mx-auto w-12 h-12 text-[#d4af37]/60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1">
              <path d="M12 2L15 9l7 3-7 3-3 7-3-7-7-3 7-3z" />
            </svg>
            <div class="space-y-3 text-[#fdf8f5] font-light tracking-wide">
              <p class="font-serif text-[1.35rem]">
                Megat Badlishah Bin Othman
              </p>
              <p class="font-serif italic text-[#d4af37] text-2xl">&</p>
              <p class="font-serif text-[1.35rem]">Roosliana Binti Md Desa</p>
            </div>
            <div class="flex items-center justify-center gap-4 py-4">
              <div
                class="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]/40"></div>
              <div class="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/60"></div>
              <div
                class="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]/40"></div>
            </div>
          </div>

          <p
            class="text-[#fdf8f5]/80 text-[13px] leading-relaxed max-w-[280px] mx-auto font-light italic">
            Dengan penuh kesyukuran dan lafaz Bismillah, kami menjemput Dato' /
            Datin / Tuan / Puan / Encik / Cik sekeluarga hadir ke majlis
            perkahwinan anakanda kami:
          </p>

          <div class="py-6 space-y-8 relative">
            <div class="space-y-2">
              <h3
                class="font-serif text-2xl md:text-[1.75rem] text-[#fdf8f5] font-light leading-snug">
                Puteri Nurul Syamimi<br />
                <span class="text-lg text-[#d4af37]"
                  >Binti Badlishah @ Megat Badlishah</span
                >
              </h3>
            </div>

            <div
              class="font-serif italic text-4xl text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              &
            </div>

            <div class="space-y-2">
              <h3
                class="font-serif text-2xl md:text-[1.75rem] text-[#fdf8f5] font-light leading-snug">
                Muhamad Hafiz<br />
                <span class="text-lg text-[#d4af37]">Bin Rojamil</span>
              </h3>
            </div>
          </div>

          <div class="grid gap-6 pt-8">
            <div
              class="relative p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <div
                class="w-12 h-12 mx-auto bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-full flex items-center justify-center mb-5 border border-[#d4af37]/30">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d4af37"
                  stroke-width="1.5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle
                    cx="12"
                    cy="10"
                    r="3" />
                </svg>
              </div>
              <h4
                class="text-[10px] font-bold tracking-[0.25em] uppercase text-[#d4af37] mb-3">
                Tempat
              </h4>
              <p class="font-serif text-2xl text-[#fdf8f5] mb-3">
                Kediaman Pengantin
              </p>
              <p class="text-xs text-[#fdf8f5]/60 leading-relaxed font-light">
                No 373, Pekan Khamis Kupang,<br />
                09200 Kupang, Kedah
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div
                class="p-6 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <div
                  class="w-10 h-10 mx-auto bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-full flex items-center justify-center mb-4 border border-[#d4af37]/30">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d4af37"
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
                      y1="2"
                      x2="16"
                      y2="6" />
                    <line
                      x1="8"
                      y1="2"
                      x2="8"
                      y2="6" />
                    <line
                      x1="3"
                      y1="10"
                      x2="21"
                      y2="10" />
                  </svg>
                </div>
                <h4
                  class="text-[9px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-2">
                  Tarikh
                </h4>
                <p class="font-serif text-xl text-[#fdf8f5]">30 May 2026</p>
                <div class="space-y-0.5 mt-2">
                  <p
                    class="text-[10px] text-[#fdf8f5]/60 uppercase tracking-widest">
                    Sabtu
                  </p>
                  <p
                    class="text-[9px] text-[#d4af37]/80 uppercase tracking-wider">
                    13 Zulhijjah 1447H
                  </p>
                </div>
              </div>
              <div
                class="p-6 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <div
                  class="w-10 h-10 mx-auto bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-full flex items-center justify-center mb-4 border border-[#d4af37]/30">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d4af37"
                    stroke-width="1.5">
                    <circle
                      cx="12"
                      cy="12"
                      r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h4
                  class="text-[9px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-2">
                  Waktu
                </h4>
                <p class="font-serif text-xl text-[#fdf8f5]">11:30 AM</p>
                <div class="space-y-0.5 mt-2">
                  <p
                    class="text-[10px] text-[#fdf8f5]/60 uppercase tracking-widest">
                    Hingga
                  </p>
                  <p
                    class="text-[11px] text-[#d4af37]/80 uppercase tracking-wider font-medium">
                    5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="py-24 px-6 text-center relative overflow-hidden bg-black/60 border-y border-[#d4af37]/10">
          <div
            class="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div
              class="w-[300px] h-[300px] bg-[#d4af37] rounded-full blur-[100px]"></div>
          </div>
          <h2
            class="font-serif italic text-3xl text-[#d4af37] mb-10 relative z-10">
            Menghitung Hari
          </h2>
          <div class="flex justify-center gap-3 relative z-10">
            <div
              v-for="(val, unit) in countdown"
              :key="unit"
              class="flex flex-col items-center w-16">
              <div
                class="w-16 h-[72px] rounded-2xl border border-[#d4af37]/30 flex items-center justify-center bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.3)] mb-3 relative overflow-hidden">
                <div
                  class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"></div>
                <span class="text-3xl font-light text-[#fdf8f5] font-serif">{{
                  val
                }}</span>
              </div>
              <span
                class="text-[9px] tracking-[0.2em] text-[#d4af37] uppercase font-bold"
                >{{ unit }}</span
              >
            </div>
          </div>
        </section>

        <footer class="pt-16 pb-40 text-center relative z-10">
          <svg
            class="mx-auto w-8 h-8 text-[#d4af37]/40 mb-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <p
            class="text-[9px] tracking-[0.4em] text-[#fdf8f5]/50 font-bold uppercase mb-2">
            Syamimi & Hafiz • 2026
          </p>
          <p class="text-[8px] text-[#d4af37]/60 uppercase tracking-widest">
            #SyamimiHafizTiesTheKnot
          </p>
        </footer>
      </main>

      <div
        class="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full z-[199] px-6 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
        <div class="flex justify-between items-center relative">
          <div
            class="absolute h-10 w-10 bg-gradient-to-br from-[#d4af37]/30 to-[#d4af37]/10 border border-[#d4af37]/40 rounded-full transition-all duration-300 pointer-events-none -translate-y-1/2 top-1/2 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            :style="{
              left:
                activeIndex !== -1
                  ? `calc(${activeIndex * (100 / 3)}%)`
                  : '-100%',
              opacity: activePanel ? 1 : 0,
              transform: `translate(calc(${activeIndex === 0 ? 0 : activeIndex === 3 ? '-100%' : '-50%'}), -50%)`,
            }"></div>

          <button
            v-for="(item, index) in navItems"
            :key="item.id"
            @click="togglePanel(item.id, index)"
            class="relative z-10 flex flex-col items-center justify-center w-10 h-10 transition-colors group"
            :class="
              activePanel === item.id
                ? 'text-[#d4af37]'
                : 'text-white/40 hover:text-white'
            ">
            <div
              v-html="item.icon"
              class="w-[18px] h-[18px] transition-transform group-active:scale-90"></div>
          </button>
        </div>
      </div>

      <transition name="slide-up">
        <div
          v-if="activePanel"
          class="absolute inset-x-0 bottom-0 z-[250] bg-gradient-to-b from-[#660B05] to-[#660B05] rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.9)] border-t border-[#d4af37]/30 max-h-[85%] flex flex-col pointer-events-auto">
          <div
            class="flex-shrink-0 pt-5 pb-3 flex justify-center cursor-pointer"
            @click="activePanel = null">
            <div class="w-12 h-1.5 bg-white/20 rounded-full"></div>
          </div>

          <button
            @click="activePanel = null"
            class="absolute top-5 right-6 text-white/40 hover:text-[#d4af37] transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div class="flex-1 overflow-y-auto custom-scrollbar px-6 pb-24 pt-4">
            <div
              v-if="activePanel === 'contact'"
              class="space-y-6 animate-fade-in">
              <h3 class="font-serif text-3xl text-[#d4af37] text-center mb-8">
                Hubungi Kami
              </h3>
              <div class="space-y-4">
                <div
                  v-for="person in contacts"
                  :key="person.name"
                  class="flex items-center justify-between p-5 bg-white/[0.03] border border-white/10 rounded-3xl shadow-lg">
                  <div>
                    <h4
                      class="font-medium text-[#fdf8f5] text-sm tracking-wide">
                      {{ person.name }}
                    </h4>
                    <p
                      class="text-[9px] text-[#d4af37] uppercase tracking-[0.2em] mt-1">
                      {{ person.role }}
                    </p>
                  </div>
                  <div class="flex gap-3">
                    <a
                      :href="'tel:' + person.phone"
                      class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#660B05] transition-all"
                      ><svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg
                    ></a>
                    <a
                      :href="'https://wa.me/' + person.phone"
                      class="w-10 h-10 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center hover:scale-105 shadow-[0_5px_15px_rgba(37,211,102,0.3)] transition-all"
                      ><svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.8 11.8 0 0 0-3.48-8.413Z" /></svg
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="activePanel === 'location'"
              class="space-y-6 animate-fade-in text-center">
              <h3 class="font-serif text-3xl text-[#d4af37] mb-6">Lokasi</h3>
              <div
                class="aspect-square sm:aspect-video w-full rounded-3xl overflow-hidden border border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative bg-[#660B05]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.242968393521!2d100.825!3d5.625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzcnMzAuMCJOIDEwMMKwNDknMzAuMCJF!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy"
                  class="w-full h-full border-0 opacity-80 mix-blend-luminosity filter grayscale contrast-125"
                  allowfullscreen
                  loading="lazy"></iframe>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <a
                  href="https://waze.com/ul?q=Kupang+Kedah"
                  target="_blank"
                  class="py-4 px-2 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-[#d4af37] transition-all group shadow-lg">
                  <div
                    class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3399FF"
                      stroke-width="2">
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
                    class="text-[10px] font-bold uppercase tracking-widest text-[#fdf8f5]"
                    >Waze</span
                  >
                </a>
                <a
                  href="https://maps.google.com/?q=Pekan+Khamis+Kupang+Kedah"
                  target="_blank"
                  class="py-4 px-2 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-[#d4af37] transition-all group shadow-lg">
                  <div
                    class="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d4af37"
                      stroke-width="2">
                      <path
                        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle
                        cx="12"
                        cy="10"
                        r="3" />
                    </svg>
                  </div>
                  <span
                    class="text-[10px] font-bold uppercase tracking-widest text-[#fdf8f5]"
                    >Google Maps</span
                  >
                </a>
              </div>
            </div>

            <div
              v-if="activePanel === 'gift'"
              class="space-y-6 animate-fade-in text-center">
              <h3 class="font-serif text-3xl text-[#d4af37] mb-4">
                Salam Kaut
              </h3>
              <p class="text-xs text-white/60 leading-relaxed mx-6 font-light">
                Kehadiran anda adalah hadiah terindah. Namun jika ingin memberi
                sumbangan, boleh rujuk maklumat di bawah.
              </p>

              <div
                class="mt-8 p-8 bg-gradient-to-b from-[#660B05] to-[#660B05] border border-[#d4af37]/30 rounded-[2.5rem] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div
                  class="absolute inset-0 opacity-10 bg-[url('/songket_maroon_gold_pattern_1775116047702.png')] bg-repeat"
                  style="background-size: 150px"></div>
                <div
                  class="w-36 h-36 bg-white rounded-2xl mx-auto flex items-center justify-center p-3 mb-6 relative z-10 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MAYBANK-SYAMIMI"
                    alt="QR"
                    class="w-full h-full rounded-xl" />
                </div>
                <div class="space-y-1 relative z-10">
                  <div
                    class="inline-block px-3 py-1 bg-[#ffcc00]/20 text-[#ffcc00] border border-[#ffcc00]/30 rounded-full text-[9px] font-bold uppercase tracking-widest mb-2">
                    Maybank
                  </div>
                  <p class="text-2xl text-[#fdf8f5] font-light tracking-wider">
                    1234 5678 9012
                  </p>
                  <p
                    class="text-[#d4af37] text-[10px] uppercase tracking-widest font-bold mt-1">
                    Puteri Nurul Syamimi
                  </p>
                </div>
              </div>
            </div>

            <div
              v-if="activePanel === 'rsvp'"
              class="space-y-6 animate-fade-in text-center">
              <h3 class="font-serif text-3xl text-[#d4af37] mb-4">
                Sahkan Kehadiran
              </h3>
              <p class="text-xs text-white/60 leading-relaxed font-light">
                Sila sahkan kehadiran anda sebelum 15 Mei 2026 bagi memudahkan
                urusan penyediaan majlis.
              </p>

              <div class="grid gap-4 mt-8">
                <a
                  href="https://wa.me/60103357100?text=Saya%20ingin%20mengesahkan%20kehadiran%20ke%20majlis%20Syamimi%20%26%20Hafiz"
                  target="_blank"
                  class="flex items-center p-5 bg-gradient-to-r from-white/[0.05] to-transparent border border-[#d4af37]/30 rounded-3xl group hover:border-[#d4af37] transition-all relative overflow-hidden">
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div
                    class="w-12 h-12 bg-gradient-to-tr from-[#128C7E] to-[#25D366] rounded-2xl flex items-center justify-center text-white mr-4 shadow-lg group-hover:scale-110 transition-transform relative z-10">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.8 11.8 0 0 0-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div class="text-left relative z-10">
                    <span
                      class="block text-sm text-[#fdf8f5] font-medium tracking-wide"
                      >RSVP Roosliana</span
                    >
                    <span
                      class="block text-[9px] text-[#d4af37] uppercase tracking-widest mt-1"
                      >Ibu Pengantin</span
                    >
                  </div>
                </a>

                <a
                  href="https://wa.me/60103347676?text=Saya%20ingin%20mengesahkan%20kehadiran%20ke%20majlis%20Syamimi%20%26%20Hafiz"
                  target="_blank"
                  class="flex items-center p-5 bg-gradient-to-r from-white/[0.05] to-transparent border border-[#d4af37]/30 rounded-3xl group hover:border-[#d4af37] transition-all relative overflow-hidden">
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div
                    class="w-12 h-12 bg-gradient-to-tr from-[#128C7E] to-[#25D366] rounded-2xl flex items-center justify-center text-white mr-4 shadow-lg group-hover:scale-110 transition-transform relative z-10">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.8 11.8 0 0 0-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div class="text-left relative z-10">
                    <span
                      class="block text-sm text-[#fdf8f5] font-medium tracking-wide"
                      >RSVP Megat</span
                    >
                    <span
                      class="block text-[9px] text-[#d4af37] uppercase tracking-widest mt-1"
                      >Bapa Pengantin</span
                    >
                  </div>
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
          class="absolute inset-0 z-[240] bg-black/70 backdrop-blur-[2px]"></div>
      </transition>

      <button
        @click="isPlaying = !isPlaying"
        class="absolute top-6 right-6 z-[100] w-10 h-10 bg-black/40 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-[#d4af37] hover:bg-white/10 hover:scale-105 transition-all">
        <svg
          v-if="!isPlaying"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line
            x1="23"
            y1="9"
            x2="17"
            y2="15" />
          <line
            x1="17"
            y1="9"
            x2="23"
            y2="15" />
        </svg>
        <svg
          v-else
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isOpening = ref(false);
const isFullyOpened = ref(false);
const isPlaying = ref(false);
const activePanel = ref<string | null>(null);
const activeIndex = ref<number>(-1);

const navItems = [
  {
    id: "contact",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  },
  {
    id: "location",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  },
  {
    id: "gift",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>',
  },
  {
    id: "rsvp",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>',
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
