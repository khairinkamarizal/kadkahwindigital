<template>
  <div
    class="relative overflow-hidden h-screen bg-[#F2EAE0] flex items-center justify-center font-outfit selection:bg-[#d4af37] selection:text-[#701c0a] sm:py-8 sm:px-4">
    <div
      class="hidden sm:block absolute inset-0 pointer-events-none bg-[url('/songket.png')] bg-repeat opacity-[0.15] blur-[2px] transform scale-110 grayscale mix-blend-multiply"
      style="background-size: 300px"></div>

    <div
      class="hidden sm:block absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.15)_100%)]"></div>

    <div
      class="relative z-10 w-full h-[100dvh] sm:h-[850px] max-w-[430px] bg-[#701c0a] sm:rounded-[3.5rem] sm:border-[12px] sm:border-black shadow-[0_30px_80px_rgba(0,0,0,0.5),0_15px_40px_rgba(0,0,0,0.3),0_0_100px_rgba(0,0,0,0.2)] overflow-hidden sm:ring-[2px] sm:ring-white/50 flex flex-col">
      <div>
        <div
          class="absolute inset-0 pointer-events-none bg-[url('/songket.png')] bg-repeat opacity-50"
          style="background-size: 250px"></div>
        <div
          class="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none z-[50]"
          style="
            background-image: url(&quot;/sidesongket.svg&quot;);
            background-repeat: repeat-y;
            background-size: contain;
            background-position: left top;
          "
          aria-hidden="true"></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none z-[50]"
          style="
            background-image: url(&quot;/sidesongket.svg&quot;);
            background-repeat: repeat-y;
            background-size: contain;
            background-position: left top;
            transform: scaleX(-1);
          "
          aria-hidden="true"></div>
      </div>

      <div
        v-if="!isFullyOpened"
        class="absolute inset-0 z-[200] flex overflow-hidden pointer-events-none sm:rounded-[2rem]">
        <div
          class="w-1/2 h-full bg-[#701c0a] transition-all duration-[1500ms] ease-in-out pointer-events-auto relative border-r border-[#d4af37]/40 shadow-[10px_0_40px_rgba(0,0,0,0.4)]"
          :class="{
            '-translate-x-full opacity-0': isOpening,
            'opacity-100': !isOpening,
          }"
          style="
            background-image: url(&quot;/songket.png&quot;);
            background-size: 250px;
          ">
          <div
            class="absolute left-0 top-0 bottom-0 w-full pointer-events-none"
            style="
              background-image: url(&quot;/sidesongket.svg&quot;);
              background-repeat: repeat-y;
              background-size: contain;
              background-position: left top;
            "
            aria-hidden="true"></div>
        </div>

        <div
          class="w-1/2 h-full bg-[#701c0a] transition-all duration-[1500ms] ease-in-out pointer-events-auto relative border-l border-[#d4af37]/40 shadow-[-10px_0_40px_rgba(0,0,0,0.4)]"
          :class="{
            'translate-x-full opacity-0': isOpening,
            'opacity-100': !isOpening,
          }"
          style="
            background-image: url(&quot;/songket.png&quot;);
            background-size: 250px;
          ">
          <div
            class="absolute right-0 top-0 bottom-0 w-full pointer-events-none"
            style="
              background-image: url(&quot;/sidesongket.svg&quot;);
              background-repeat: repeat-y;
              background-size: contain;
              background-position: left top;
              transform: scaleX(-1);
            "
            aria-hidden="true"></div>
        </div>

        <div
          class="absolute inset-0 flex flex-col items-center justify-center z-[210] pointer-events-none transition-all duration-[1500ms] ease-in-out"
          :class="{ 'opacity-0 scale-[1.5] blur-md': isOpening }">
          <button
            @click="openDoor"
            class="group w-40 h-40 bg-[#701c0a] rounded-full flex flex-col items-center justify-center pointer-events-auto text-center relative overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-500 hover:scale-105 active:scale-95 animate-pulse-scale cursor-pointer"
            style="
              background-image: url(&quot;/seal.png&quot;);
              background-size: cover;
              background-position: center;
            "></button>
        </div>
      </div>

      <main
        id="main-content"
        class="flex-1 overflow-y-auto custom-scrollbar relative flex flex-col">
        <header
          class="sticky top-0 z-[50] min-h-full flex-shrink-0 flex flex-col items-center justify-between text-center pt-16 pb-32 px-6">
          <div
            class="relative z-[50] flex flex-col items-center w-full justify-between h-full">
            <div
              class="space-y-4 animate-fade-in-up"
              style="animation-delay: 0.5s">
              <p
                class="text-[11px] tracking-[0.4em] uppercase text-[#d4af37] font-outfit font-medium drop-shadow-md">
                Walimatul Urus
              </p>
            </div>

            <div
              class="relative w-full animate-fade-in-up"
              style="animation-delay: 0.8s">
              <img
                src="/main.svg"
                class="w-full h-full" />
            </div>

            <div
              class="flex flex-col items-center gap-6 animate-fade-in-up"
              style="animation-delay: 1.1s">
              <div class="flex flex-col items-center gap-0">
                <p
                  class="text-[12px] tracking-[0.3em] text-[#fdf8f5] font-outfit font-light uppercase">
                  Sabtu, 30 Mei 2026
                </p>
                <p
                  class="text-[11px] tracking-[0.25em] text-[#d4af37] font-outfit font-normal uppercase">
                  13 Zulhijjah 1447H
                </p>
              </div>
            </div>
            <button
              @click="scrollToDetails"
              class="group flex flex-col items-center gap-3 py-2 px-4 rounded-xl active:bg-white/5 transition-colors animate-fade-in-up"
              style="animation-delay: 1.4s">
              <span
                class="text-xs tracking-[0.3em] uppercase text-[#d4af37]/80 group-hover:text-[#d4af37] font-outfit font-semibold transition-colors"
                >Buka Jemputan</span
              >
              <div
                class="w-6 h-10 border border-[#d4af37]/40 rounded-full flex justify-center p-1">
                <div
                  class="w-1 h-2 bg-[#d4af37] rounded-full animate-bounce"></div>
              </div>
            </button>
          </div>
        </header>

        <div
          class="rounded-t-3xl relative z-[150] bg-gradient-to-b from-transparent via-[#701c0a] to-[#701c0a] shadow-[0_-50px_100px_rgba(0,0,0,0.5)] flex flex-col">
          <div
            class="rounded-t-3xl absolute inset-0 pointer-events-none bg-[url('/songket.png')] bg-repeat "
            style="background-size: 250px"></div>
          <div
            class="rounded-t-3xl absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none z-[5]"
            style="
              background-image: url(&quot;/sidesongket.svg&quot;);
              background-repeat: repeat-y;
              background-size: contain;
              background-position: left top;
            "
            aria-hidden="true"></div>
          <div
            class="rounded-t-3xl absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none z-[5]"
            style="
              background-image: url(&quot;/sidesongket.svg&quot;);
              background-repeat: repeat-y;
              background-size: contain;
              background-position: left top;
              transform: scaleX(-1);
            "
            aria-hidden="true"></div>
          <section
            id="details-section"
            class="rounded-t-3xl relative z-10 w-full py-20 px-6 text-center space-y-10">
            <div class="flex flex-col items-center gap-0">
              <img
                src="/top.svg"
                class="w-full h-auto" />
              <div
                class="w-full px-7 space-y-10"
                style="
                  background-image: url(&quot;/body.svg&quot;);
                  background-repeat: no-repeat;
                  background-position: center top;
                  background-size: auto 100%;
                ">
                <div class="space-y-0 text-[#701c0a] pt-4">
                  <p
                    class="font-serif text-xl uppercase leading-none"
                    style="font-weight: 600">
                    Megat Badlishah Bin Othman
                  </p>
                  <p class="font-serif text-[#701c0a] text-xl">&</p>
                  <p
                    class="font-serif text-xl uppercase leading-none"
                    style="font-weight: 600">
                    Roosliana Binti Md Desa
                  </p>
                </div>

                <p
                  class="text-[#701c0a]/70 text-sm leading-relaxed max-w-[350px] mx-auto font-light italic">
                  Dengan penuh kesyukuran dan lafaz Bismillah, kami menjemput
                  Dato' / Datin / Tuan / Puan / Encik / Cik sekeluarga hadir ke
                  majlis perkahwinan anakanda kami:
                </p>

                <div class="space-y-2 relative">
                  <div class="space-y-1">
                    <h3
                      class="font-serif text-2xl text-[#701c0a] leading-none font-normal uppercase"
                      style="font-weight: 600">
                      Puteri Nurul Syamimi
                    </h3>
                    <p
                      class="text-sm text-[#701c0a] font-light tracking-wide font-outfit uppercase">
                      Binti Badlishah @ Megat Badlishah
                    </p>
                  </div>

                  <div class="font-serif text-2xl text-[#701c0a]">&</div>

                  <div class="space-y-1">
                    <h3
                      class="font-serif text-2xl text-[#701c0a] font-normal leading-none uppercase"
                      style="font-weight: 600">
                      Muhamad Hafiz
                    </h3>
                    <p
                      class="text-sm text-[#701c0a] font-light tracking-wide font-outfit">
                      Bin Rojamil
                    </p>
                  </div>
                </div>
              </div>
              <img
                src="/bottom.svg"
                class="w-full h-auto" />
            </div>
          </section>

          <section class="relative z-10 w-full py-20 px-6 space-y-6">
            <div
              class="relative w-full p-8 from-[#d4af37] to-[#c7a32b] bg-gradient-to-b rounded-[1.5rem] border border-white/20 shadow-xl space-y-6 animate-fade-in-up"
              style="animation-delay: 0.3s">
              <div class="relative z-10 text-center space-y-4">
                <div
                  class="w-12 h-12 mx-auto rounded-full bg-[#701c0a]/10 flex items-center justify-center text-[#701c0a]">
                  <MapPin
                    :size="24"
                    :stroke-width="1.5" />
                </div>
                <div class="space-y-2">
                  <h4
                    class="text-[11px] tracking-[0.4em] uppercase text-[#701c0a]/70 font-outfit font-medium">
                    Lokasi
                  </h4>
                  <p
                    class="font-serif text-2xl text-[#701c0a] leading-none uppercase"
                    style="font-weight: 600">
                    Kediaman Pengantin
                  </p>
                  <p
                    class="text-[#701c0a]/80 leading-relaxed font-light font-outfit max-w-[260px] mx-auto pt-2">
                    No 373, Pekan Khamis Kupang,<br />
                    09200 Kupang, Kedah
                  </p>
                </div>
              </div>

              <div class="relative z-10 grid grid-cols-1 gap-2 pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=373,Kampung+Pekan+Khamis"
                  target="_blank"
                  class="flex items-center justify-between p-3 rounded-xl bg-[#701c0a] text-[#fdf8f5] text-sm font-medium uppercase transition-transform active:scale-95 group">
                  <div class="flex items-center gap-3">
                    <Navigation :size="16" />
                    Google Maps
                  </div>
                  <ArrowRight :size="14" />
                </a>
                <a
                  href="https://waze.com/ul?q=373,Kampung+Pekan+Khamis"
                  target="_blank"
                  class="flex items-center justify-between p-3 rounded-xl bg-[#701c0a] text-[#fdf8f5] text-sm font-medium uppercase transition-transform active:scale-95 group">
                  <div class="flex items-center gap-3">
                    <Navigation :size="16" />
                    Waze
                  </div>
                  <ArrowRight :size="14" />
                </a>
              </div>
            </div>
            <div
              class="relative w-full p-8 from-[#d4af37] to-[#c7a32b] bg-gradient-to-b rounded-[1.5rem] border border-white/20 shadow-xl space-y-6 animate-fade-in-up"
              style="animation-delay: 0.5s">
              <div class="relative z-10 text-center space-y-6">
                <div class="space-y-4">
                  <div
                    class="w-12 h-12 mx-auto rounded-full bg-[#701c0a]/10 flex items-center justify-center text-[#701c0a]">
                    <Calendar
                      :size="24"
                      :stroke-width="1.5" />
                  </div>
                  <div class="space-y-1">
                    <h4
                      class="text-[11px] tracking-[0.4em] uppercase text-[#701c0a]/70 font-outfit font-medium">
                      Tarikh
                    </h4>
                    <p
                      class="font-serif text-2xl text-[#701c0a] leading-none uppercase"
                      style="font-weight: 600">
                      30 Mei 2026
                    </p>
                    <p
                      class="text-[#701c0a]/80 text-sm font-light font-outfit pt-1">
                      Sabtu | 13 Zulhijjah 1447H
                    </p>
                  </div>
                </div>

                <div class="h-px w-20 bg-[#701c0a]/20 mx-auto"></div>

                <div class="space-y-4">
                  <div
                    class="w-12 h-12 mx-auto rounded-full bg-[#701c0a]/10 flex items-center justify-center text-[#701c0a]">
                    <Clock
                      :size="24"
                      :stroke-width="1.5" />
                  </div>
                  <div class="space-y-1">
                    <h4
                      class="text-[11px] tracking-[0.4em] uppercase text-[#701c0a]/70 font-outfit font-medium">
                      Waktu
                    </h4>
                    <p
                      class="font-serif text-2xl text-[#701c0a] leading-none uppercase"
                      style="font-weight: 600">
                      11:30 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div class="relative z-10 grid grid-cols-1 gap-2 pt-2">
                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Majlis+Perkahwinan+Syamimi+%26+Hafiz&dates=20260530T033000Z/20260530T090000Z&details=Majlis+Perkahwinan+Puteri+Nurul+Syamimi+%26+Muhamad+Hafiz+di+Kediaman+Pengantin,+No+373,+Pekan+Khamis+Kupang,+09200+Kupang,+Kedah&location=No+373,+Pekan+Khamis+Kupang,+09200+Kupang,+Kedah"
                  target="_blank"
                  class="flex items-center justify-between p-3 rounded-xl bg-[#701c0a] text-[#fdf8f5] text-sm font-medium uppercase transition-transform active:scale-95">
                  <div class="flex items-center gap-3">
                    <Calendar :size="16" />
                    Google Calendar
                  </div>
                  <ArrowRight :size="14" />
                </a>
                <a
                  href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20260530T033000Z%0ADTEND:20260530T090000Z%0ASUMMARY:Majlis%20Perkahwinan%20Syamimi%20%26%20Hafiz%0ADESCRIPTION:Majlis%20Perkahwinan%20Puteri%20Nurul%20Syamimi%20%26%20Muhamad%20Hafiz%20di%20Kediaman%20Pengantin.%0ALOCATION:No%20373%2C%20Pekan%20Khamis%20Kupang%2C%2009200%20Kupang%2C%20Kedah%0AEND:VEVENT%0AEND:VCALENDAR"
                  download="majlis_syamimi_hafiz.ics"
                  class="flex items-center justify-between p-3 rounded-xl bg-[#701c0a] text-[#fdf8f5] text-sm font-medium uppercase transition-transform active:scale-95">
                  <div class="flex items-center gap-3">
                    <Calendar :size="16" />
                    Apple Calendar
                  </div>
                  <ArrowRight :size="14" />
                </a>
              </div>
            </div>
          </section>

          <section
            class="relative z-10 py-20 px-6 text-center bg-[#701c0a]/60 backdrop-blur-sm border-y border-[#d4af37]/20 shadow-inner">
            <div class="relative z-10 space-y-10">
              <div class="space-y-3">
                <div class="flex items-center justify-center gap-3">
                  <div
                    class="h-px w-8 bg-gradient-to-r from-transparent to-[#d4af37]/50"></div>
                  <Heart
                    class="w-3 h-3 text-[#d4af37]"
                    fill="currentColor" />
                  <div
                    class="h-px w-8 bg-gradient-to-l from-transparent to-[#d4af37]/50"></div>
                </div>
                <h2
                  class="font-script text-[2.5rem] text-[#d4af37] font-normal tracking-wide">
                  Menghitung Hari
                </h2>
              </div>

              <div
                class="flex justify-center items-center gap-1 sm:gap-4 max-w-[360px] mx-auto w-full">
                <template
                  v-for="(val, unit, index) in countdown"
                  :key="unit">
                  <div
                    class="flex flex-col items-center flex-1 bg-[#701c0a]/40 rounded-lg py-3 border border-[#d4af37]/10">
                    <span
                      class="text-[2rem] text-[#fdf8f5] font-serif tracking-tight mb-1"
                      style="font-weight: 600"
                      >{{ val }}</span
                    >
                    <span
                      class="text-[10px] tracking-[0.3em] text-[#d4af37] uppercase font-outfit font-medium"
                      >{{ unit }}</span
                    >
                  </div>
                  <div
                    v-if="index < 3"
                    class="text-[#d4af37]/30 text-2xl font-light pb-4">
                    :
                  </div>
                </template>
              </div>
            </div>
          </section>

<footer class="relative z-10 space-y-10 pb-36 pt-16 text-center">
  <div class="flex items-center justify-center space-x-4">
    <div class="h-[1px] w-8 bg-[#d4af37]/30"></div>
    <Heart class="h-6 w-6 text-[#d4af37]/60" :stroke-width="1.5" />
    <div class="h-[1px] w-8 bg-[#d4af37]/30"></div>
  </div>
  <div class="space-y-3">
    <h2
      class="font-outfit text-sm font-medium uppercase tracking-[0.5em] text-[#fdf8f5]/80"
    >
      Mimi & Hafiz
    </h2>
    <div
      class="mx-auto w-fit border-y border-[#d4af37]/20 py-2 font-outfit text-[10px] font-light uppercase tracking-[0.3em] text-[#d4af37]/80"
    >
      20 &bull; 02 &bull; 2026
    </div>
    <p
      class="font-outfit text-xs font-light uppercase tracking-widest text-[#d4af37]/60"
    >
      #MimiUntukHafiz
    </p>
  </div>
  <div class="flex items-center justify-center space-x-4">
    <div class="h-[1px] w-8 bg-[#d4af37]/30"></div>
    <Sparkles class="h-6 w-6 text-[#d4af37]/60" :stroke-width="1.5" />
    <div class="h-[1px] w-8 bg-[#d4af37]/30"></div>
  </div>
  <div class="space-y-4">
    <p
      class="font-outfit text-[10px] font-normal uppercase tracking-[0.2em] text-[#d4af37]/50"
    >
      Created with love by
    </p>
    <div
      class="flex flex-col items-center justify-center space-y-2 font-outfit text-xs tracking-wide"
    >
      <a
        href="https://khair.ink"
        class="text-[#fdf8f5]/70 transition-colors active:text-[#d4af37] uppercase"
      >
        Khairin Kamarizal
      </a>
      <span class="text-[#d4af37]/60 text-sm">&</span>
      <a
        href="https://puterisyarafana.xyz"
        class="text-[#fdf8f5]/70 transition-colors active:text-[#d4af37] uppercase"
      >
        Puteri Syarafana
      </a>
    </div>
  </div>
</footer>        </div>
      </main>

      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-[360px] bg-[#1a0301]/80 backdrop-blur-xl border border-[#d4af37]/20 rounded-full z-[260] px-4 py-2 transition-all duration-[1200ms] ease-out delay-[800ms]"
        :class="
          isOpening ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        ">
        <div class="flex justify-around items-center relative">
          <button
            v-for="(item, index) in navItems"
            :key="item.id"
            @click="togglePanel(item.id, index)"
            class="relative z-10 flex flex-col items-center justify-center w-14 h-14 transition-colors group rounded-full active:bg-white/10"
            :class="
              activePanel === item.id
                ? 'text-[#d4af37]'
                : 'text-[#fdf8f5]/60 hover:text-[#fdf8f5]'
            ">
            <component
              :is="item.icon"
              :size="activePanel === item.id ? 24 : 20"
              :stroke-width="activePanel === item.id ? 1.8 : 1.5"
              class="transition-all duration-300 transform" />
            <div
              class="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-[#d4af37] transition-all duration-300"
              :class="
                activePanel === item.id
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0'
              "></div>
          </button>
        </div>
      </div>

      <transition name="slide-up">
        <div
          v-if="activePanel"
          class="absolute inset-x-0 bottom-0 z-[250] overflow-hidden bg-gradient-to-b from-[#701c0a] to-[#3a0502] rounded-t-[2.5rem] border-t border-[#d4af37]/40 max-h-[85dvh] flex flex-col pointer-events-auto pb-safe">
          <div
            class="absolute inset-0 pointer-events-none bg-[url('/songket.png')] bg-repeat opacity-50"
            style="background-size: 250px"></div>
          <div
            class="flex-shrink-0 pt-5 pb-3 flex justify-center cursor-pointer w-full"
            @click="activePanel = null">
            <div class="w-12 h-1 bg-[#d4af37] rounded-full"></div>
          </div>

          <div class="flex-1 overflow-y-auto custom-scrollbar px-6 pb-32 pt-4">
            <div
              v-if="activePanel === 'contact'"
              class="space-y-6 animate-fade-in text-center max-w-[340px] mx-auto">
              <div>
                <h3 class="font-script text-[2.2rem] text-[#d4af37] mb-2">
                  Hubungi Kami
                </h3>
              </div>
              <div
                class="space-y-0 text-left bg-black/10 backdrop-blur-xl rounded-2xl p-4 border border-white/5">
                <div
                  v-for="(person, index) in contacts"
                  :key="person.name"
                  class="py-4"
                  :class="
                    index !== contacts.length - 1
                      ? 'border-b border-white/10'
                      : ''
                  ">
                  <div class="flex items-center justify-between">
                    <div>
                      <p
                        class="text-[10px] text-[#d4af37] uppercase tracking-[0.2em] font-outfit mb-1 font-medium">
                        {{ person.role }}
                      </p>
                      <h4 class="font-serif text-[#fdf8f5] text-xl">
                        {{ person.name }}
                      </h4>
                    </div>
                    <div class="flex gap-3">
                      <a
                        :href="'tel:' + person.phone"
                        class="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#701c0a] transition-all"
                        ><Phone
                          :size="18"
                          :stroke-width="1.5"
                      /></a>
                      <a
                        :href="'https://wa.me/' + person.phone"
                        class="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
                        ><MessageCircle
                          :size="18"
                          :stroke-width="1.5"
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="activePanel === 'location'"
              class="space-y-6 animate-fade-in text-center max-w-[340px] mx-auto">
              <div>
                <h3 class="font-script text-[2.2rem] text-[#d4af37] mb-2">
                  Lokasi
                </h3>
                <div class="h-px w-16 bg-[#d4af37]/30 mx-auto"></div>
              </div>
              <div
                class="aspect-square sm:aspect-video w-full rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1985.2511640265698!2d100.8448759!3d5.6402058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b4d90035e10a8b%3A0x7f07b094bb21e2b1!2s373%2C%20Kampung%20Pekan%20Khamis!5e0!3m2!1sen!2smy!4v1775465909563!5m2!1sen!2smy"
                  class="w-full h-full border-0"
                  allowfullscreen="false"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div class="flex justify-center gap-6 pt-2">
                <a
                  href="https://waze.com/ul?q=373,Kampung+Pekan+Khamis"
                  target="_blank"
                  class="flex flex-col items-center gap-3 group w-24">
                  <div
                    class="w-14 h-14 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all">
                    <Navigation
                      :size="22"
                      class="text-[#fdf8f5] group-hover:text-[#d4af37]"
                      :stroke-width="1.5" />
                  </div>
                  <span
                    class="text-[11px] uppercase tracking-[0.1em] text-[#fdf8f5]/80 font-medium font-outfit"
                    >Waze</span
                  >
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=373,Kampung+Pekan+Khamis"
                  target="_blank"
                  class="flex flex-col items-center gap-3 group w-24">
                  <div
                    class="w-14 h-14 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all">
                    <MapPin
                      :size="22"
                      class="text-[#fdf8f5] group-hover:text-[#d4af37]"
                      :stroke-width="1.5" />
                  </div>
                  <span
                    class="text-[11px] uppercase tracking-[0.1em] text-[#fdf8f5]/80 font-medium font-outfit"
                    >Maps</span
                  >
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
          class="absolute inset-0 z-[240] bg-black/40 backdrop-blur-sm"></div>
      </transition>

      <button
        @click="togglePlayback"
        class="absolute top-6 right-6 z-[100] w-12 h-12 bg-black/40 backdrop-blur-md rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-white/10 hover:scale-105 active:scale-95 transition-all shadow-lg">
        <VolumeX
          v-if="!isPlaying"
          :size="20"
          stroke-width="1.5" />
        <Volume2
          v-else
          :size="20"
          stroke-width="1.5" />
      </button>

      <audio
        ref="audioEl"
        loop
        src="/music.mp3"
        preload="auto"></audio>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
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
  Volume2,
  VolumeX,
} from "lucide-vue-next";

const isOpening = ref(false);
const isFullyOpened = ref(false);
const isPlaying = ref(false);
const activePanel = ref<string | null>(null);
const activeIndex = ref<number>(-1);
const audioEl = ref<HTMLAudioElement | null>(null);

const togglePlayback = () => {
  if (isPlaying.value) {
    audioEl.value?.pause();
  } else {
    audioEl.value?.play();
  }
  isPlaying.value = !isPlaying.value;
};

const navItems = [
  {
    id: "contact",
    icon: Phone,
  },
  {
    id: "location",
    icon: MapPin,
  },
];

const contacts = [
  { name: "Roosliana", role: "Ibu Pengantin", phone: "60103357100" },
  { name: "Wardina", role: "Ibu Saudara Pengantin", phone: "60103344660" },
  { name: "Kakchik", role: "Ibu Saudara Pengantin", phone: "60103344677" },
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
  // Call play() synchronously inside the gesture handler for iOS
  audioEl.value?.play().catch((err) => {
    console.log("Audio play failed:", err);
  });

  setTimeout(() => {
    isFullyOpened.value = true;
  }, 2000);
};

const scrollToDetails = () => {
  const detailsEl = document.getElementById("details-section");
  const scrollContainer = document.getElementById("main-content");

  if (!detailsEl || !scrollContainer) return;

  const containerTop = scrollContainer.getBoundingClientRect().top;
  const elementTop = detailsEl.getBoundingClientRect().top;
  const scrollTarget = elementTop - containerTop + scrollContainer.scrollTop;

  scrollContainer.scrollTo({
    top: scrollTarget,
    behavior: "smooth",
  });

  let scrollAnimation: ReturnType<typeof requestAnimationFrame>;

  const stopAutoScroll = () => {
    cancelAnimationFrame(scrollAnimation);
    scrollContainer.removeEventListener("touchstart", stopAutoScroll);
    scrollContainer.removeEventListener("wheel", stopAutoScroll);
  };

  setTimeout(() => {
    const startY = scrollContainer.scrollTop;
    const targetY = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const distance = targetY - startY;

    if (distance <= 0) return;

    const duration = 20000;
    let startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      scrollContainer.scrollTop = startY + distance * progress;

      if (progress < 1) {
        scrollAnimation = requestAnimationFrame(animateScroll);
      } else {
        stopAutoScroll();
      }
    };

    scrollContainer.addEventListener("touchstart", stopAutoScroll, {
      passive: true,
    });
    scrollContainer.addEventListener("wheel", stopAutoScroll, {
      passive: true,
    });

    scrollAnimation = requestAnimationFrame(animateScroll);
  }, 1000);
};

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
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&display=swap");

@font-face {
  font-family: "Bookmania";
  src: url("/font/BookmaniaW02-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Bookmania";
  src: url("/font/Bookmania-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Bookmania";
  src: url("/font/Bookmania W02 Smbd.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "AstonScript";
  src: url("/font/AstonScriptBold-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

:root {
  --font-main: "Bookmania", serif;
  --font-script: "AstonScript", cursive;
  --font-outfit: "Outfit", sans-serif;
}

body {
  font-family: var(--font-main);
  font-weight: 300;
}

.font-serif {
  font-family: var(--font-main);
  font-weight: 400;
}
.font-script {
  font-family: var(--font-script);
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
