import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MeshBlend",
  description: "MeshBlend Documentation - If it's a mesh, we can blend it",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Fab", link: "https://discord.gg/sX48CssHWM" },
      { text: "Discord", link: "https://discord.gg/sX48CssHWM" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/getting-started/introduction" },
          {
            text: "Setup",
            collapsed: false,
            items: [
              {
                text: "Default Setup",
                link: "/getting-started/setup/default-setup",
              },
              {
                text: "Custom Setup",
                link: "/getting-started/setup/custom-setup",
              },
            ],
          },
          {
            text: "Using MeshBlend",
            collapsed: false,
            items: [
              {
                text: "Scene Setup",
                link: "/getting-started/using-meshblend/scene-setup",
              },
              {
                text: "Authoring Meshes and Actors",
                link: "/getting-started/using-meshblend/authoring-meshes-and-actors",
              },
              {
                text: "Artist workflow",
                link: "/getting-started/using-meshblend/artist-workflow",
              },
              {
                text: "Settings",
                link: "/getting-started/using-meshblend/settings",
              },
              {
                text: "Tips & Tricks",
                link: "/getting-started/using-meshblend/tips-tricks",
              },
            ],
          },
        ],
      },
      {
        text: "Knowledgebase",
        collapsed: false,
        items: [
          { text: "Architecture", link: "/knowledgebase/architecture" },
          { text: "Performance", link: "/knowledgebase/performance" },
          {
            text: "Virtual Production",
            link: "/knowledgebase/virtual-production",
          },
          { text: "FAQ", link: "/knowledgebase/faq" },
          { text: "Custom license", link: "/knowledgebase/custom-license" },
        ],
      },
    ],

    search: {
      provider: "local",
    },
  },
});
