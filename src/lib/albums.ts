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
    cover: "/images/albums/lbts-osheas/01.jpg",
    photos: [
      {
        src: "/images/albums/lbts-osheas/01.jpg",
        alt: "Wide shot of the stage at O'Shea's, singer and guitarist under the sign, chandelier and disco ball above the room",
        caption: "Sports bar by day. This, by night.",
        tag: "Atmosphere",
      },
      {
        src: "/images/albums/lbts-osheas/02.jpg",
        alt: "View from the stage over raised hands and a packed room at O'Shea's, singer mid-song in the foreground",
        caption: "From up here, you could see who was actually listening.",
        tag: "Live events · Nightlife",
      },
      {
        src: "/images/albums/lbts-osheas/03.jpg",
        alt: "Singer and guitarist mid-song at O'Shea's, green stage light across the whole room",
        caption: "Green light, red walls, one microphone doing all the work.",
        tag: "Live music",
      },
      {
        src: "/images/albums/lbts-osheas/04.jpg",
        alt: "Extreme close-up of the singer mid-note, green light, microphone inches from her mouth",
        caption: "That note wasn't going to be quiet.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/lbts-osheas/05.jpg",
        alt: "Close-up of the singer under an embroidered wide-brimmed hat, microphone raised to her mouth",
        caption: "Between lyrics, still mid-thought.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/lbts-osheas/06.jpg",
        alt: "Motion-blurred black-and-white portrait of the singer, hair caught mid-turn",
        caption: "The camera couldn't keep up with her either.",
        tag: "Long exposure",
      },
      {
        src: "/images/albums/lbts-osheas/07.jpg",
        alt: "Guitarist in sunglasses and wide-brimmed hat, red stage light across his face",
        caption: "Behind the glasses, he wasn't watching the crowd.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/lbts-osheas/08.jpg",
        alt: "Guitarist's profile lit entirely red beneath the brim of his hat",
        caption: "Red light, sharp jaw, not a word wasted.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/lbts-osheas/09.jpg",
        alt: "Close-up of the guitarist in sunglasses and leather jacket, guitar headstock and pendant catching the red light",
        caption: "More silver on him than on the guitar.",
        tag: "Detail",
      },
      {
        src: "/images/albums/lbts-osheas/10.jpg",
        alt: "Macro detail of a hand fretting chords on an Epiphone guitar neck, red light glowing behind",
        caption: "Four fingers, one chord, whole room quiet.",
        tag: "Detail",
      },
    ],
  },
  {
    slug: "osheas-world-cup",
    title: "O'Shea's: Portugal v Spain",
    blurb:
      "Portugal v Spain turned O'Shea's into a second stadium — flags from every table, one screen, and a room that stopped breathing at the same time.",
    cover: "/images/albums/osheas-world-cup/04.jpg",
    photos: [
      {
        src: "/images/albums/osheas-world-cup/01.jpg",
        alt: "Guinness sign glowing under a string of international flags, pub crowd below",
        caption: "Flags from every table, one screen.",
        tag: "Atmosphere",
      },
      {
        src: "/images/albums/osheas-world-cup/02.jpg",
        alt: "Crowd watching intently under strung flags and warm bar lamps, one fan clapping",
        caption: "Every eye on the same square foot of grass.",
        tag: "Candid",
      },
      {
        src: "/images/albums/osheas-world-cup/03.jpg",
        alt: "Two fans in Spain shirts grinning and fist-clenched under a chandelier, Portugal flag bunting overhead",
        caption: "Nerves dressed up as smiles.",
        tag: "Sport",
      },
      {
        src: "/images/albums/osheas-world-cup/04.jpg",
        alt: "Black-and-white crowd surge, arms raised and mouths open under a chandelier and disco ball",
        caption: "The room came apart.",
        tag: "Live events · Nightlife",
      },
      {
        src: "/images/albums/osheas-world-cup/05.jpg",
        alt: "Two fans watching through a doorframe, one in a Spain shirt, caught mid-thought at the bar",
        caption: "Every second stretched.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/osheas-world-cup/06.jpg",
        alt: "Red-lit hallway toward the match on screen, a Portugal shirt in the foreground",
        caption: "Even the corridor picked a side.",
        tag: "In between",
      },
      {
        src: "/images/albums/osheas-world-cup/07.jpg",
        alt: "Bartender pouring a Guinness at the taps, Brazil flag behind him",
        caption: "Behind the taps, same match.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/osheas-world-cup/08.jpg",
        alt: "Close detail of a Spain shirt reading Olmo, a dark pint glowing under a lamp",
        caption: "Colours from every corner.",
        tag: "Detail",
      },
    ],
  },
  {
    slug: "osheas-france-vs-spain",
    title: "O'Shea's: France v Spain",
    blurb:
      "Same pub, same taps, an entirely different kind of night — France v Spain packed O'Shea's with shirts from both sides and a screen nobody could look away from.",
    cover: "/images/albums/osheas-france-vs-spain/08.jpg",
    photos: [
      {
        src: "/images/albums/osheas-france-vs-spain/01.jpg",
        alt: "Bartender pulling a pint under green Guinness light, flags strung along the ceiling",
        caption: "Same taps, bigger crowd.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/osheas-france-vs-spain/02.jpg",
        alt: "Spain flag hanging low over the pub floor, France flag caught beside it, crowd packed below",
        caption: "Colours picked a side early.",
        tag: "Atmosphere",
      },
      {
        src: "/images/albums/osheas-france-vs-spain/03.jpg",
        alt: "Screen glow catching the crowd's silhouette, scoreboard reading France nil, Spain nil",
        caption: "Nobody's blinking yet.",
        tag: "Atmosphere",
      },
      {
        src: "/images/albums/osheas-france-vs-spain/04.jpg",
        alt: "Fans behind paper fans and pint glasses, one in a España shirt grinning up at the screen",
        caption: "Held breath, dressed in red.",
        tag: "Candid",
      },
      {
        src: "/images/albums/osheas-france-vs-spain/05.jpg",
        alt: "Tattooed forearms and stacked glasses at the bar, caught mid-reach in the rush",
        caption: "Behind the bar, no time to watch.",
        tag: "Detail",
      },
      {
        src: "/images/albums/osheas-france-vs-spain/06.jpg",
        alt: "Three fans locked on the screen, one mid-shout in a Spain shirt",
        caption: "The whole table stopped breathing.",
        tag: "Sport",
      },
      {
        src: "/images/albums/osheas-france-vs-spain/07.jpg",
        alt: "A fan leaps under the disco ball as the room erupts behind him",
        caption: "Gravity took the night off.",
        tag: "Sport",
      },
      {
        src: "/images/albums/osheas-france-vs-spain/08.jpg",
        alt: "Arms thrown up in a red España shirt, French flags strung overhead",
        caption: "Both sides in one photo.",
        tag: "Live events · Nightlife",
      },
      {
        src: "/images/albums/osheas-france-vs-spain/09.jpg",
        alt: "Black-and-white portrait of a fan in a vintage France shirt, a friend beside her hand over his mouth",
        caption: "Some reactions don't need colour.",
        tag: "Candid",
      },
      {
        src: "/images/albums/osheas-france-vs-spain/10.jpg",
        alt: "Fan in a vintage navy Lotto shirt looking up at the screen, pub shelves glowing behind him",
        caption: "Waiting for the whistle.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/osheas-france-vs-spain/11.jpg",
        alt: "Fan mid-sip in an Adidas shirt, pint raised, eyes on the match",
        caption: "Never missed a sip or a save.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/osheas-france-vs-spain/12.jpg",
        alt: "Close portrait of a fan smiling up at the screen, lit warm and red",
        caption: "Something good just happened.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/osheas-france-vs-spain/13.jpg",
        alt: "Profile of an older fan in a red Spain shirt, glasses catching the light",
        caption: "She's seen a few of these.",
        tag: "Portrait",
      },
    ],
  },
  {
    slug: "osheas-zwoel",
    title: "Zwoel at O'Shea's",
    blurb:
      "Zwoel took the small stage at O'Shea's and treated it like a bigger room — a singer who committed to every note, a guitarist who leaned into his tone, and a crowd that never sat down.",
    cover: "/images/albums/osheas-zwoel/05.jpg",
    photos: [
      {
        src: "/images/albums/osheas-zwoel/01.jpg",
        alt: "Torn paper tour banner glowing red and white in the dark, a microphone stand crossing the frame",
        caption: "The banner went up before the crowd did.",
        tag: "Atmosphere",
      },
      {
        src: "/images/albums/osheas-zwoel/02.jpg",
        alt: "Band and friends clinking shot glasses backstage, pink and violet light, a tattooed arm mid-toast",
        caption: "One for the road, then the room again.",
        tag: "Candid",
      },
      {
        src: "/images/albums/osheas-zwoel/03.jpg",
        alt: "Singer in profile with eyes shut and mouth wide open on a held note, damp hair falling loose, purple light on a striped shirt",
        caption: "Committed to the note past the point of looking good doing it.",
        tag: "Live music",
      },
      {
        src: "/images/albums/osheas-zwoel/04.jpg",
        alt: "Drummer caught between cymbal hits, the red Zwoel Coverband banner lit up on the brick wall behind him",
        caption: "Somewhere under the noise, someone's keeping perfect time.",
        tag: "Live music",
      },
      {
        src: "/images/albums/osheas-zwoel/05.jpg",
        alt: "Guitarist's fist closed hard around the fretboard, a tattooed forearm lit green, red brick wall behind him",
        caption: "He wasn't playing a note so much as wringing it out.",
        tag: "Live music",
      },
      {
        src: "/images/albums/osheas-zwoel/06.jpg",
        alt: "Close detail of a hand gripping a guitar's fretboard, deep blue stage light, motion blur in the hair above it",
        caption: "The chord you don't see coming until it lands.",
        tag: "Detail",
      },
      {
        src: "/images/albums/osheas-zwoel/07.jpg",
        alt: "Long exposure blur of a woman's face and hair thrown back mid-dance, blue stage light streaking across the motion",
        caption: "Nobody in this room was standing still.",
        tag: "Long exposure",
      },
      {
        src: "/images/albums/osheas-zwoel/08.jpg",
        alt: "Bassist grinning into the mic between lines, in-ear monitor catching the light, blue brick wall behind him",
        caption: "Something offstage was funnier than the setlist.",
        tag: "Candid",
      },
      {
        src: "/images/albums/osheas-zwoel/09.jpg",
        alt: "Close portrait under blue light, eyes lowered toward the mic, curls damp with the set's heat",
        caption: "A breath before the next verse, not for the camera.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/osheas-zwoel/10.jpg",
        alt: "Close detail of a Guinness tap, harp catching light against a blurred crowd in pink and violet",
        caption: "The harp lit up before anyone did.",
        tag: "Atmosphere",
      },
    ],
  },
  {
    slug: "kenny-and-bra-vs-mor",
    title: "Kenny and Bra vs Mor",
    blurb:
      "A packed room at O'Shea's for Kenny and Bra vs Mor — a covers band that knows exactly when to hand the song to the crowd. Warm stage light, a Guinness never far from anyone's hand, and a room that sang every chorus back.",
    cover: "/images/albums/kenny-and-bra-vs-mor/02.jpg",
    photos: [
      {
        src: "/images/albums/kenny-and-bra-vs-mor/01.jpg",
        alt: "Long exposure of the packed bar in black and white, bodies blurring past the taps",
        caption: "Nobody stood still long enough to be counted.",
        tag: "Long exposure",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/02.jpg",
        alt: "Singer toasting a glass of beer to a sea of raised arms under a spinning disco ball",
        caption: "He toasted them; they sang it back.",
        tag: "Live events · Nightlife",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/03.jpg",
        alt: "Singer belting into a mic beside a guitarist's turned back, purple stage light picking out the crowd below",
        caption: "Every hook, sung twice — once by her, once by the room.",
        tag: "Live music",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/04.jpg",
        alt: "Guitarist locked on the beat, cymbals glinting pink and blue in the foreground",
        caption: "Watching the drummer's hands, not the crowd's.",
        tag: "Live music",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/05.jpg",
        alt: "Friends laughing mid-song under red light, drinks in hand and a panama hat bobbing past",
        caption: "Nobody here came for a quiet one.",
        tag: "Candid",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/06.jpg",
        alt: "Long exposure of a singer's face dissolving into motion trails mid-note",
        caption: "Try to hold that note still. You can't.",
        tag: "Long exposure",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/07.jpg",
        alt: "Drummer in profile, sticks crossed and ready, stage light catching stubble and sweat",
        caption: "A half-second before the fill.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/08.jpg",
        alt: "Extreme close profile of a singer mid-lyric, sweat and stage light on his jaw",
        caption: "This close, you can hear the strain in it.",
        tag: "Portrait",
      },
      {
        src: "/images/albums/kenny-and-bra-vs-mor/09.jpg",
        alt: "Bartender topping a pint at the tap, string bunting and full optics behind him",
        caption: "Last pour before the next chorus.",
        tag: "Live events · Nightlife",
      },
    ],
  },
];
