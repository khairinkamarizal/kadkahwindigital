<template>
  <div
    class="relative overflow-hidden h-screen bg-[#F2EAE0] flex items-center justify-center font-outfit selection:bg-[#d4af37] selection:text-[#660B05] sm:py-8 sm:px-4">
    <div
      class="hidden sm:block absolute inset-0 pointer-events-none bg-[url('/songket.png')] bg-repeat opacity-[0.15] blur-[2px] transform scale-110 grayscale mix-blend-multiply"
      style="background-size: 300px"></div>

    <div
      class="hidden sm:block absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.15)_100%)]"></div>

    <div
      class="relative z-10 w-full h-[100dvh] sm:h-[850px] max-w-[430px] bg-[#660B05] sm:rounded-[3.5rem] sm:border-[12px] sm:border-black shadow-[0_30px_80px_rgba(0,0,0,0.5),0_15px_40px_rgba(0,0,0,0.3),0_0_100px_rgba(0,0,0,0.2)] overflow-hidden sm:ring-[2px] sm:ring-white/50 flex flex-col">
      <div
        class="absolute inset-0 pointer-events-none bg-[url('/songket.png')] bg-repeat opacity-80"
        style="background-size: 180px"></div>

      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none"></div>

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
          :class="{ 'opacity-0 scale-[1.5] blur-md': isOpening }">
          <button
            @click="openDoor"
            class="group w-40 h-40 bg-[#660B05] rounded-full flex flex-col items-center justify-center pointer-events-auto text-center relative overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-500 hover:scale-105 active:scale-95 animate-pulse-scale cursor-pointer"
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
          class="relative min-h-full flex-shrink-0 flex items-center justify-center text-center pt-16 pb-32 px-6">
          <div class="relative z-10 flex flex-col items-center w-full gap-8">
            <div
              class="space-y-4 animate-fade-in-up"
              style="animation-delay: 0.5s">
              <p
                class="text-[11px] tracking-[0.4em] uppercase text-[#d4af37] font-medium drop-shadow-md">
                Walimatul Urus
              </p>
              <div
                class="w-16 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
            </div>

            <div
              class="relative w-full animate-fade-in-up"
              style="animation-delay: 0.8s">
              <h1
                class="relative w-full max-w-[400px] flex items-center flex-col mx-auto drop-shadow-2xl overflow-visible text-[#fdf8f5]">
                <span
                  class="font-script text-[5rem] sm:text-[8rem] font-normal leading-none"
                  >Mimi</span
                >
                <span
                  class="font-script text-6xl text-[#d4af37] my-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  >&</span
                >
                <span
                  class="font-script text-[5rem] sm:text-[8rem] font-normal leading-none"
                  >Hafiz</span
                >
              </h1>
            </div>

            <div
              class="flex flex-col items-center gap-6 animate-fade-in-up"
              style="animation-delay: 1.1s">
              <div
                class="h-16 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"></div>
              <div class="flex flex-col items-center gap-1.5">
                <p
                  class="text-[12px] tracking-[0.3em] text-[#fdf8f5] font-light uppercase">
                  Sabtu, 30 Mei 2026
                </p>
                <p
                  class="text-[11px] tracking-[0.25em] text-[#d4af37] font-normal uppercase">
                  13 Zulhijjah 1447H
                </p>
              </div>
              <button
                @click="scrollToDetails"
                class="mt-8 group flex flex-col items-center gap-3 py-2 px-4 rounded-xl active:bg-white/5 transition-colors">
                <span
                  class="text-[10px] tracking-[0.3em] uppercase text-[#d4af37]/80 group-hover:text-[#d4af37] font-medium transition-colors"
                  >Buka Jemputan</span
                >
                <div
                  class="w-6 h-10 border border-[#d4af37]/40 rounded-full flex justify-center p-1">
                  <div
                    class="w-1 h-2 bg-[#d4af37] rounded-full animate-bounce"></div>
                </div>
              </button>
            </div>
          </div>
        </header>

        <section
          id="details-section"
          class="w-full py-20 px-6 text-center space-y-10 relative z-10 bg-gradient-to-b from-transparent via-[#4A0804] to-[#660B05]">
          <div class="flex items-center justify-center gap-4 py-2">
            <div
              class="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]/50"></div>
            <div class="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
            <div
              class="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]/50"></div>
          </div>

          <div class="space-y-3 text-[#fdf8f5] font-light tracking-wide">
            <p class="font-serif text-2xl drop-shadow-md">
              Megat Badlishah Bin Othman
            </p>
            <p class="font-script text-[#d4af37] text-4xl">&</p>
            <p class="font-serif text-2xl drop-shadow-md">
              Roosliana Binti Md Desa
            </p>
          </div>

          <p
            class="text-[#fdf8f5]/90 text-[14px] leading-relaxed max-w-[300px] mx-auto font-light italic">
            Dengan penuh kesyukuran dan lafaz Bismillah, kami menjemput Dato' /
            Datin / Tuan / Puan / Encik / Cik sekeluarga hadir ke majlis
            perkahwinan anakanda kami:
          </p>

          <div class="space-y-6 relative pt-4">
            <div class="space-y-1">
              <h3
                class="font-script text-[3rem] md:text-[3.5rem] text-[#fdf8f5] font-normal leading-snug">
                Puteri Nurul Syamimi
              </h3>
              <p class="text-[13px] text-[#d4af37] font-light tracking-wide">
                Binti Badlishah @ Megat Badlishah
              </p>
            </div>

            <div
              class="font-script text-5xl text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              &
            </div>

            <div class="space-y-1">
              <h3
                class="font-script text-[3rem] md:text-[3.5rem] text-[#fdf8f5] font-normal leading-snug">
                Muhamad Hafiz
              </h3>
              <p class="text-[13px] text-[#d4af37] font-light tracking-wide">
                Bin Rojamil
              </p>
            </div>
          </div>

          <div class="grid gap-10 pt-10">
            <div class="text-center space-y-4">
              <div
                class="w-12 h-12 mx-auto rounded-full border border-[#d4af37]/50 bg-[#d4af37]/5 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <MapPin
                  :size="20"
                  class="text-[#d4af37]"
                  :stroke-width="1.5" />
              </div>
              <div class="space-y-2">
                <h4
                  class="text-[11px] tracking-[0.4em] uppercase text-[#d4af37] font-outfit font-medium">
                  Venue
                </h4>
                <p
                  class="font-serif text-[2rem] text-[#fdf8f5] font-light leading-none">
                  Kediaman Pengantin
                </p>
              </div>
              <p
                class="text-[14px] text-[#fdf8f5]/80 leading-relaxed font-light font-outfit max-w-[260px] mx-auto italic">
                No 373, Pekan Khamis Kupang,<br />
                09200 Kupang, Kedah
              </p>
            </div>

            <div
              class="h-px w-32 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto"></div>

            <div class="text-center space-y-4">
              <div
                class="w-12 h-12 mx-auto rounded-full border border-[#d4af37]/50 bg-[#d4af37]/5 flex items-center justify-center mb-3">
                <Calendar
                  :size="20"
                  class="text-[#d4af37]"
                  :stroke-width="1.5" />
              </div>
              <div class="space-y-2">
                <h4
                  class="text-[11px] tracking-[0.4em] uppercase text-[#d4af37] font-outfit font-medium">
                  Tarikh
                </h4>
                <p
                  class="font-serif text-[2rem] text-[#fdf8f5] font-light leading-none">
                  30 Mei 2026
                </p>
                <p
                  class="text-[12px] text-[#fdf8f5]/70 uppercase tracking-[0.2em] font-outfit pt-1">
                  Sabtu | 13 Zulhijjah 1447H
                </p>
              </div>
            </div>

            <div
              class="h-px w-32 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto"></div>

            <div class="text-center space-y-4">
              <div
                class="w-12 h-12 mx-auto rounded-full border border-[#d4af37]/50 bg-[#d4af37]/5 flex items-center justify-center mb-3">
                <Clock
                  :size="20"
                  class="text-[#d4af37]"
                  :stroke-width="1.5" />
              </div>
              <div class="space-y-2">
                <h4
                  class="text-[11px] tracking-[0.4em] uppercase text-[#d4af37] font-outfit font-medium">
                  Waktu
                </h4>
                <p
                  class="font-serif text-[2rem] text-[#fdf8f5] font-light leading-none">
                  11:30 AM
                </p>
                <p
                  class="text-[12px] text-[#d4af37]/90 uppercase tracking-[0.2em] font-outfit pt-1">
                  Hingga 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          class="py-20 px-6 text-center relative bg-[#2A0402]/60 backdrop-blur-sm border-y border-[#d4af37]/20 shadow-inner">
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
                class="font-script text-[3rem] text-[#d4af37] font-normal tracking-wide">
                Menghitung Hari
              </h2>
            </div>

            <div
              class="flex justify-center items-center gap-1 sm:gap-4 max-w-[360px] mx-auto w-full">
              <template
                v-for="(val, unit, index) in countdown"
                :key="unit">
                <div
                  class="flex flex-col items-center flex-1 bg-[#660B05]/40 rounded-lg py-3 border border-[#d4af37]/10">
                  <span
                    class="text-[2.5rem] font-light text-[#fdf8f5] font-serif tracking-tight mb-1"
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

        <footer class="pt-16 pb-48 text-center relative z-10">
          <Heart
            class="mx-auto w-8 h-8 text-[#d4af37]/60 mb-6"
            :stroke-width="1.5" />
          <p
            class="text-[11px] tracking-[0.4em] text-[#fdf8f5]/70 font-medium uppercase mb-3">
            Mimi & Hafiz • 2026
          </p>
          <p
            class="text-[10px] text-[#d4af37]/80 uppercase tracking-widest font-light">
            #MimiUntukHafiz
          </p>
        </footer>
      </main>

      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-[360px] bg-[#1a0301]/80 backdrop-blur-xl border border-[#d4af37]/20 rounded-full z-[260] px-4 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-[1200ms] ease-out delay-[800ms]"
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
          class="absolute inset-x-0 bottom-0 z-[250] bg-gradient-to-b from-[#660B05] to-[#3a0502] rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.8)] border-t border-[#d4af37]/40 max-h-[85dvh] flex flex-col pointer-events-auto pb-safe">
          <div
            class="flex-shrink-0 pt-5 pb-3 flex justify-center cursor-pointer w-full"
            @click="activePanel = null">
            <div class="w-12 h-1.5 bg-[#d4af37]/30 rounded-full"></div>
          </div>

          <div class="flex-1 overflow-y-auto custom-scrollbar px-6 pb-32 pt-4">
            <div
              v-if="activePanel === 'contact'"
              class="space-y-6 animate-fade-in text-center max-w-[340px] mx-auto">
              <div>
                <h3
                  class="font-serif text-[2.5rem] text-[#d4af37] font-light mb-2">
                  Hubungi Kami
                </h3>
                <div class="h-px w-16 bg-[#d4af37]/30 mx-auto"></div>
              </div>
              <div
                class="space-y-0 text-left bg-black/10 rounded-2xl p-4 border border-white/5">
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
                      <h4 class="font-serif text-[#fdf8f5] text-2xl font-light">
                        {{ person.name }}
                      </h4>
                    </div>
                    <div class="flex gap-3">
                      <a
                        :href="'tel:' + person.phone"
                        class="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#660B05] transition-all"
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
                <h3
                  class="font-serif text-[2.5rem] text-[#d4af37] font-light mb-2">
                  Lokasi
                </h3>
                <div class="h-px w-16 bg-[#d4af37]/30 mx-auto"></div>
              </div>
              <div
                class="aspect-square sm:aspect-video w-full rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=Kupang,Kedah&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  class="w-full h-full border-0"
                  allowfullscreen
                  loading="lazy"></iframe>
              </div>
              <div class="flex justify-center gap-6 pt-2">
                <a
                  href="https://waze.com/ul?q=Kupang+Kedah"
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
                  href="https://maps.google.com/?q=Kupang,Kedah"
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

            <div
              v-if="activePanel === 'gift'"
              class="space-y-6 animate-fade-in text-center max-w-[340px] mx-auto">
              <div>
                <h3
                  class="font-serif text-[2.5rem] text-[#d4af37] font-light mb-2">
                  Salam Kaut
                </h3>
                <div class="h-px w-16 bg-[#d4af37]/30 mx-auto mb-4"></div>
                <p
                  class="text-[13px] text-[#fdf8f5]/80 leading-relaxed font-light font-outfit italic tracking-wide px-2">
                  Kehadiran anda adalah hadiah terindah. Namun jika ingin
                  memberi sumbangan, boleh rujuk maklumat di bawah.
                </p>
              </div>

              <div class="pt-2">
                <div
                  class="w-48 h-48 bg-white rounded-2xl mx-auto flex items-center justify-center p-4 mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=MAYBANK-SYAMIMI"
                    alt="QR Code"
                    class="w-full h-full rounded-lg" />
                </div>
                <div
                  class="bg-black/20 rounded-xl p-4 border border-[#d4af37]/20 space-y-2">
                  <p
                    class="text-[11px] text-[#d4af37] uppercase tracking-[0.3em] font-outfit font-medium">
                    Maybank
                  </p>
                  <p
                    class="font-serif text-4xl text-[#fdf8f5] font-light tracking-widest">
                    1234 5678
                  </p>
                  <p
                    class="text-[#fdf8f5]/70 text-[12px] uppercase tracking-[0.2em] font-outfit pt-1">
                    Puteri Nurul Syamimi
                  </p>
                </div>
              </div>
            </div>

            <div
              v-if="activePanel === 'rsvp'"
              class="space-y-6 animate-fade-in text-center max-w-[340px] mx-auto">
              <div>
                <h3
                  class="font-serif text-[2.5rem] text-[#d4af37] font-light mb-2">
                  RSVP
                </h3>
                <div class="h-px w-16 bg-[#d4af37]/30 mx-auto mb-4"></div>
                <p
                  class="text-[13px] text-[#fdf8f5]/80 leading-relaxed font-light font-outfit italic tracking-wide px-2">
                  Sila sahkan kehadiran anda sebelum 15 Mei 2026.
                </p>
              </div>

              <div class="pt-2 space-y-3 text-left">
                <a
                  href="https://wa.me/60103357100?text=Saya%20ingin%20mengesahkan%20kehadiran%20ke%20majlis%20Syamimi%20%26%20Hafiz"
                  target="_blank"
                  class="flex items-center justify-between p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 group hover:bg-[#d4af37]/20 transition-all">
                  <div>
                    <h4
                      class="font-serif text-[#fdf8f5] text-2xl font-light group-hover:text-[#d4af37] transition-colors">
                      RSVP Roosliana
                    </h4>
                    <p
                      class="text-[11px] text-[#d4af37]/80 uppercase tracking-[0.2em] font-outfit mt-1">
                      Ibu Pengantin
                    </p>
                  </div>
                  <div
                    class="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <MessageCircle
                      :size="18"
                      :stroke-width="1.5" />
                  </div>
                </a>

                <a
                  href="https://wa.me/60103347676?text=Saya%20ingin%20mengesahkan%20kehadiran%20ke%20majlis%20Syamimi%20%26%20Hafiz"
                  target="_blank"
                  class="flex items-center justify-between p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 group hover:bg-[#d4af37]/20 transition-all">
                  <div>
                    <h4
                      class="font-serif text-[#fdf8f5] text-2xl font-light group-hover:text-[#d4af37] transition-colors">
                      RSVP Megat
                    </h4>
                    <p
                      class="text-[11px] text-[#d4af37]/80 uppercase tracking-[0.2em] font-outfit mt-1">
                      Bapa Pengantin
                    </p>
                  </div>
                  <div
                    class="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <MessageCircle
                      :size="18"
                      :stroke-width="1.5" />
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
          class="absolute inset-0 z-[240] bg-black/60 backdrop-blur-sm"></div>
      </transition>

      <button
        @click="isPlaying = !isPlaying"
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
  const detailsEl = document.getElementById("details-section");
  const scrollContainer = document.getElementById("main-content");

  if (!detailsEl || !scrollContainer) return;

  // 1. Initial smooth scroll to the details section
  scrollContainer.scrollTo({
    top: detailsEl.offsetTop,
    behavior: "smooth",
  });

  let scrollAnimation: ReturnType<typeof requestAnimationFrame>;

  // 2. Function to stop the automatic tour if the user wants to take over
  const stopAutoScroll = () => {
    cancelAnimationFrame(scrollAnimation);
    scrollContainer.removeEventListener("touchstart", stopAutoScroll);
    scrollContainer.removeEventListener("wheel", stopAutoScroll);
  };

  // Wait for the native smooth scroll to finish, then begin the slow pan
  setTimeout(() => {
    const startY = scrollContainer.scrollTop;
    const targetY = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const distance = targetY - startY;

    if (distance <= 0) return;

    // Slow cinematic pan over 20 seconds
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

    // Allow user to break out of the animation instantly
    scrollContainer.addEventListener("touchstart", stopAutoScroll, {
      passive: true,
    });
    scrollContainer.addEventListener("wheel", stopAutoScroll, {
      passive: true,
    });

    scrollAnimation = requestAnimationFrame(animateScroll);
  }, 1000);
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
@import url("https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Outfit:wght@200;300;400;500;600&display=swap");

:root {
  --font-serif: "Playfair Display", serif;
  --font-script: "Pinyon Script", cursive;
  --font-outfit: "Outfit", sans-serif;
}

.font-serif {
  font-family: var(--font-serif);
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
