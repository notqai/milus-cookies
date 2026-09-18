// ---------------------------------------------------------------------------
// SITE COPY & FACTS. Edit here, not in components.
// Anything unknown is a searchable "TODO:" string. Nothing here is invented:
// no address, phone, hours, reviews, awards or halal/ingredient claims.
// ---------------------------------------------------------------------------

export const brand = {
  name: 'Milus Cookies',
  wordmark: 'MiLUs',
  endorsement: 'by KopHjSarkawi', // copy exactly; do not expand
  tagline: 'Soft cookies. Gooey middles.',
  location: 'Miri, Sarawak',
}

export const contact = {
  // TODO: WhatsApp number in international format, digits only (e.g. 60123456789).
  // Leave empty and wa.me opens the contact picker instead of a chat.
  whatsappNumber: '',
  whatsappMessage:
    "Hi Milus! I'd like to order some cookies 🍪\n\n" +
    'Flavours + quantity:\n- \n\n' +
    'Pickup / delivery:\n- \n\n' +
    'Name:\n- ',
  instagramHandle: 'miluscookies.myy',
  address: '2367, Jalan Datuk Edward Jeli, 98000 Miri, Sarawak',
  mapsUrl: 'https://share.google/UySrNnzArh1YedGq5', // Google Maps share link (opens the listing / directions)
  mapEmbedUrl: 'https://www.google.com/maps?q=2367%2C+Jalan+Datuk+Edward+Jeli%2C+98000+Miri%2C+Sarawak&output=embed', // keyless Google Maps embed; swap for the Share → Embed src if preferred
  hours: [
    // TODO: real opening hours
    { days: 'Mon – Fri', time: 'TODO' },
    { days: 'Sat – Sun', time: 'TODO' },
  ],
}

export const links = {
  whatsapp: (message = contact.whatsappMessage) =>
    `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`,
  instagram: () => `https://instagram.com/${contact.instagramHandle}`,
}

export const nav = [
  { label: 'Flavours', href: '#flavours' },
  { label: 'Crookie', href: '#crookie' },
  { label: 'Find us', href: '#find-us' },
]

export const copy = {
  hero: {
    headlineA: 'Soft cookies.',
    headlineB: 'Seriously gooey.',
    sub: 'Chunky chocolate, toasted marshmallow, a pinch of sea salt. Gone in three bites. Confirm sedap.',
    primary: 'Order on WhatsApp',
    secondary: 'See the flavours',
    badge: 'BUY 4 · RM30 · MIX ANY FLAVOURS · ', // spins around the hero cookie
    // TODO(assets): hero-cookie-stack.jpg not received. smores-checkered.jpg
    // (720px) is standing in. Swap `image` back once it lands.
    image: 'smores-checkered',
    imageAlt: "Milus Campfire S'mores cookies stacked on red-and-white checkered paper",
  },
  flavours: {
    eyebrow: 'The tray',
    heading: 'Pick your flavour.',
    highlight: 'flavour',
    sub: 'Four soft cookies. RM8 each, any four for RM30. Zero self-control required.',
    featuredLabel: 'Fan fav',
  },
  bundle: {
    kicker: 'Grab any four',
    mid: 'for',
    sub: 'Mix and match. For the office, the family, or just you. No judgement.',
    // TODO: confirm with Milus that the bundle allows any mix of flavours.
    note: 'TODO: confirm any-mix rule',
    cta: 'Build my box',
    image: 'four-flavours-clean',
    imageAlt: 'All four Milus cookie flavours cooling on a wire rack',
  },
  madeFresh: {
    eyebrow: 'Made fresh',
    heading: 'Scooped. Baked. Pulled apart.',
    highlight: 'Pulled apart.',
    sub: 'Straight from the tray, while the chocolate is still melty.',
    steps: [
      { image: 'oven-raw-minis', label: 'Scooped', caption: 'Tray in.', alt: 'A tray of raw mini cookie dough scoops going into the oven' },
      { image: 'oven-baked-minis', label: 'Baked', caption: 'Tray out.', alt: 'The same tray of mini cookies, baked and golden, lit by the oven' },
      { image: 'cookie-pull-kitchen', label: 'Pulled apart', caption: 'Still gooey.', alt: 'A soft cookie pulled apart in the kitchen, filling stretching between the halves' },
    ],
  },
  crookie: {
    eyebrow: 'Also in store',
    words: ['croissant', 'cookie', 'Crookie'], // the equation
    sub: 'A butter croissant wearing a chocolate chip cookie. Yes, both. Yes, really.',
    price: 'RM10', // from the display-case chalkboard sign
    priceNote: 'TODO: confirm Crookie price (RM10 read from the display sign)',
    cta: 'Ask on WhatsApp',
    image: 'crookie',
    imageAlt: 'Crookies: croissants topped with a chocolate chip cookie, on parchment in the display case',
  },
  video: {
    eyebrow: 'Peek inside',
    heading: 'Thirteen seconds of temptation.',
    sub: 'A slow pan across the display case.',
    // TODO(assets): display-case-pan.mp4 not received; run `npm run video` after dropping it in assets-source/.
  },
  findUs: {
    sticker: 'Come get some',
    heading: 'Order & find us.',
    highlight: 'find us.',
    sub: 'Order ahead on WhatsApp so your box is ready when you are.',
    image: 'display-case',
    imageAlt: 'The Milus acrylic display case with baskets of cookies, crookies and chalkboard price signs',
    ctaWhatsapp: 'Order on WhatsApp',
    ctaInstagram: 'Follow on Instagram',
    ctaMaps: 'Open in Google Maps',
  },
  footer: {
    signoff: 'Confirm sedap.',
    blurb: 'Soft cookies with gooey middles, baked by Milus.',
    // TODO: halal status. Do not display a halal claim until confirmed.
    halalNote: 'TODO: halal status',
    credit: `© ${new Date().getFullYear()} Milus Cookies · ${brand.endorsement}`,
  },
  dock: {
    label: 'Order',
  },
}
