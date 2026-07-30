export type AlbumPhoto = {
  src: string;
  alt: string;
  caption: string;
  tag: string;
};

export type Album = {
  slug: string;
  title: string;
  blurb: string;
  cover: string;
  photos: AlbumPhoto[];
};

export const ALBUMS: Album[] = [
  {
    slug: "lbts-osheas",
    title: "O'Shea's — Second Set",
    blurb:
      "A late set at O'Shea's — sports bar by day, low-lit music room by night.",
    cover: "/images/albums/lbts-osheas/08.jpg",
    photos: [
      {
        src: "/images/albums/lbts-osheas/01.jpg",
        alt: "Singer and guitarist trading a look on stage at O'Shea's, full venue sign lit behind them",
        caption: "The room was theirs before the first song ended.",
        tag: "Live music",
      },
      {
        src: "/images/albums/lbts-osheas/02.jpg",
        alt: "Guitarist tuning his instrument between songs, warm stage light",
        caption: "The pause before the next one starts.",
        tag: "In between",
      },
      {
        src: "/images/albums/lbts-osheas/03.jpg",
        alt: "Guitarist's face lit entirely in red beneath a wide-brimmed hat",
        caption: "The light went red and nobody minded.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/lbts-osheas/04.jpg",
        alt: "Singer with eyes closed, fully inside the song",
        caption: "This one she meant.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/lbts-osheas/05.jpg",
        alt: "Singer pointing skyward mid-lyric, guitarist in red sunglasses beside her",
        caption: "She threw a line at the ceiling and the room caught it.",
        tag: "Live events · Nightlife",
      },
      {
        src: "/images/albums/lbts-osheas/06.jpg",
        alt: "Wide shot from the stage of the crowd with arms raised, green stage light, chandelier glowing red",
        caption: "The room answered back.",
        tag: "Live events · Nightlife",
      },
      {
        src: "/images/albums/lbts-osheas/07.jpg",
        alt: "Guitarist in a wide-brimmed hat and red-tinted glasses, chin raised, brick wall behind him",
        caption: "Somewhere between a song and a shrug.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/lbts-osheas/08.jpg",
        alt: "Extreme close profile of the guitarist bathed entirely in red stage light, mid-chord",
        caption: "The room went red and stayed there.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/lbts-osheas/09.jpg",
        alt: "Macro detail of a hand fretting chords on an Epiphone guitar neck, red light blurred behind",
        caption: "Where the song actually happens.",
        tag: "Detail",
      },
      {
        src: "/images/albums/lbts-osheas/10.jpg",
        alt: "Extreme close profile of a singer mid-shout under green light, microphone in hand",
        caption: "Every word thrown, not sung.",
        tag: "Portrait",
      },
    ],
  },
  {
    slug: "osheas-world-cup",
    title: "Kickoff at O'Shea's",
    blurb:
      "A World Cup screening turns a pub into a stadium — same tension, same collective exhale, just with a pint in hand. Shot from inside the crowd, not above it.",
    cover: "/images/albums/osheas-world-cup/06.jpg",
    photos: [
      {
        src: "/images/albums/osheas-world-cup/01.jpg",
        alt: "Packed pub under red bunting and a disco ball, the room turned toward the match",
        caption: "Kickoff, and the room fills in.",
        tag: "Sport",
      },
      {
        src: "/images/albums/osheas-world-cup/02.jpg",
        alt: "Fan mid-shout in a Mexico shirt, lit gold, eyes on the match",
        caption: "Every second stretched.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/osheas-world-cup/03.jpg",
        alt: "Close detail of a South Africa flag cap in the crowd",
        caption: "Colours from every corner.",
        tag: "Detail",
      },
      {
        src: "/images/albums/osheas-world-cup/04.jpg",
        alt: "O'Shea's bartender behind the taps, peace sign, mid-service",
        caption: "Behind the taps, same match.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/osheas-world-cup/05.jpg",
        alt: "Crowd packed round the tables, all eyes lifted to the screen",
        caption: "Nobody sat down for long.",
        tag: "Sport",
      },
      {
        src: "/images/albums/osheas-world-cup/06.jpg",
        alt: "Fan laughing and pumping a fist as the room reacts together",
        caption: "The whole room, at once.",
        tag: "Sport",
      },
      {
        src: "/images/albums/osheas-world-cup/07.jpg",
        alt: "Fan laughing with friends at a packed table, phone raised",
        caption: "Long after the final whistle.",
        tag: "Portrait",
      },
    ],
  },
  {
    slug: "osheas-zwoel",
    title: "Zwoel at O'Shea's",
    blurb:
      "Zwoel took the small stage at O'Shea's and treated it like a bigger room — a singer who committed to every note, a guitarist who leaned into his tone, and a crowd that never sat down.",
    cover: "/images/albums/osheas-zwoel/04.jpg",
    photos: [
      {
        src: "/images/albums/osheas-zwoel/01.jpg",
        alt: "Close detail of a Guinness tap, harp catching light against a blurred crowd in pink and violet",
        caption: "Before the first song — the room already warm",
        tag: "Atmosphere",
      },
      {
        src: "/images/albums/osheas-zwoel/02.jpg",
        alt: "Guitarist gripping the neck of an electric guitar, tattooed forearm lit green against a red brick wall",
        caption: "A chord held a beat longer than it needed to be",
        tag: "Live music",
      },
      {
        src: "/images/albums/osheas-zwoel/03.jpg",
        alt: "Vocalist grinning mid-song into a handheld microphone, blue stage light on brick behind him",
        caption: "The joke landed and the take kept rolling",
        tag: "Candid",
      },
      {
        src: "/images/albums/osheas-zwoel/04.jpg",
        alt: "Singer with chin raised and eyes closed, warm stage light catching her jaw and collarbone, microphone in hand",
        caption: "Not performing for anyone in particular — just performing",
        tag: "Portrait",
      },
      {
        src: "/images/albums/osheas-zwoel/05.jpg",
        alt: "Vocalist singing with eyes closed under magenta stage light, full voice, full commitment",
        caption: "The kind of note you feel behind the sternum",
        tag: "Live music",
      },
      {
        src: "/images/albums/osheas-zwoel/06.jpg",
        alt: "Long exposure blur of a singer's profile in motion, purple and blue stage light trailing",
        caption: "A quarter second, and the room kept singing",
        tag: "Long exposure",
      },
    ],
  },
  {
    slug: "kenny-and-bra-vs-mor",
    title: "Kenny Live ft. WC 2026",
    blurb:
      "A packed room at O'Shea's for Kenny and Bra vs Mor — a covers band that knows exactly when to hand the song to the crowd. Warm stage light, a Guinness never far from anyone's hand, and a room that sang every chorus back.",
    cover: "/images/albums/kenny-and-bra-vs-mor/01.jpg",
    photos: [
      {
        src: "/images/albums/kenny-and-bra-vs-mor/01.jpg",
        alt: "Singer raising a glass to a packed, arms-raised crowd beneath a disco ball",
        caption: "Last round, first chorus.",
        tag: "Live events · Nightlife",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/02.jpg",
        alt: "Bassist singing into a mic, second vocalist blurred in the background under green and red stage light",
        caption: "Trading the verse.",
        tag: "Live music",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/03.jpg",
        alt: "Drummer in profile, sticks crossed mid-strike, lit in pink and blue",
        caption: "Keeping time.",
        tag: "Live music",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/04.jpg",
        alt: "Singer with eyes closed, glasses catching the light, close at the microphone",
        caption: "Gone somewhere else.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/05.jpg",
        alt: "Singer in green stage light, close profile at the microphone",
        caption: "Every word felt.",
        tag: "Live music",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/06.jpg",
        alt: "Long exposure of the singer mid-note, features trailing with motion",
        caption: "The note that wouldn't sit still.",
        tag: "Long exposure",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/07.jpg",
        alt: "Extreme close profile of the singer at the microphone, sweat and stage light",
        caption: "Nothing left out.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/08.jpg",
        alt: "Bartender pulling a pint under green neon Guinness light, O'Shea's shirt visible",
        caption: "The room behind the room.",
        tag: "Live events · Nightlife",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/09.jpg",
        alt: "Black and white long exposure of a crowd dancing near the bar, motion-blurred",
        caption: "Feckin' eejits, the lot of us.",
        tag: "Long exposure",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/10.jpg",
        alt: "Close portrait of a man smirking under pink and blue stage light",
        caption: "Between songs.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/11.jpg",
        alt: "Singer toasting a drink to a crowd with hands raised, red stage light and bunting overhead",
        caption: "One more for the room.",
        tag: "Live events · Nightlife",
      },
    ],
  },
];
