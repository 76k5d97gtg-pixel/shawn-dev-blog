import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://shawn-dev-blog.pages.dev/",
    title: "Shawn's Dev Notes",
    description:
      "Practical guides and tools for Java, Go, SQL, and backend development.",
    author: "Shawn",
    profile: "https://github.com/76k5d97gtg-pixel",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Taipei",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/76k5d97gtg-pixel/shawn-dev-blog/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/76k5d97gtg-pixel",
    },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
