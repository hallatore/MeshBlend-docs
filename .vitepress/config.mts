import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";
import { imageComparerPlugin } from "./plugins/image-comparer.js";

const sidebarOptions = {
  /*
   * For detailed instructions, see the links below:
   * https://vitepress-sidebar.cdget.com/guide/options
   */
  //
  // ============ [ RESOLVING PATHS ] ============
  // documentRootPath: '/',
  // scanStartPath: null,
  // resolvePath: null,
  // basePath: null,
  //
  // ============ [ GROUPING ] ============
  // collapsed: true,
  // collapseDepth: 2,
  // rootGroupText: 'Contents',
  // rootGroupLink: 'https://github.com/jooy2',
  // rootGroupCollapsed: false,
  //
  // ============ [ GETTING MENU TITLE ] ============
  // useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  // useFolderLinkFromIndexFile: false,
  // useFolderTitleFromIndexFile: false,
  // frontmatterTitleFieldName: 'title',
  //
  // ============ [ GETTING MENU LINK ] ============
  // useFolderLinkFromSameNameSubFile: false,
  useFolderLinkFromIndexFile: true,
  // folderLinkNotIncludesFileName: false,
  //
  // ============ [ INCLUDE / EXCLUDE ] ============
  excludePattern: ["README.md"],
  // excludeFilesByFrontmatterFieldName: 'exclude',
  // includeDotFiles: false,
  // includeEmptyFolder: false,
  // includeRootIndexFile: false,
  // includeFolderIndexFile: false,
  //
  // ============ [ STYLING MENU TITLE ] ============
  // hyphenToSpace: true,
  // underscoreToSpace: true,
  // capitalizeFirst: false,
  // capitalizeEachWords: false,
  // keepMarkdownSyntaxFromTitle: false,
  // removePrefixAfterOrdering: false,
  // prefixSeparator: '.',
  //
  // ============ [ SORTING ] ============
  // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
  // sortFolderTo: null,
  // sortMenusByName: false,
  // sortMenusByFileDatePrefix: false,
  sortMenusByFrontmatterOrder: true,
  frontmatterOrderDefaultValue: 9999,
  // sortMenusByFrontmatterDate: false,
  // sortMenusOrderByDescending: false,
  // sortMenusOrderNumericallyFromTitle: false,
  // sortMenusOrderNumericallyFromLink: false,
  //
  // ============ [ MISC ] ============
  // debugPrint: false,
};

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withSidebar(
    {
      title: "MeshBlend",
      description: "MeshBlend Documentation - If it's a mesh, we can blend it",
      head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        [
          "script",
          {
            defer: "",
            src: "https://static.cloudflareinsights.com/beacon.min.js",
            "data-cf-beacon": '{"token": "4d0e440a9d8144fca348b79832e6aeef"}',
          },
        ],
      ],
      apperance: "dark",
      markdown: {
        config: (md) => {
          md.use(imageComparerPlugin);
        },
      },
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "Home", link: "/" },
          {
            text: "Fab",
            link: "https://www.fab.com/listings/1f4abe73-4cda-42db-995a-c9f8ca4790e5",
          },
          { text: "Discord", link: "https://discord.gg/sX48CssHWM" },
        ],
        search: {
          provider: "local",
        },
        outline: {
          level: [2, 3],
        },
        cleanUrls: true,
      },
    },
    sidebarOptions
  )
);
