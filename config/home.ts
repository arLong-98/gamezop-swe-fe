export const homeNavData = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export type gameObjectType = {
  code: string,
    nameEn: string,
    battleSupported: boolean,
    rating: number,
    totalRating: number,
    name: string,
    categories: Array<string>,
    created_at: string,
    gamePlays: number
}


export type homeNavData = Array<{ name: string; href: "string" }>;

export const devURL = "https://dev-meteor.gamezop.com/v1/games/list?id=cfuucl7YgA&lang=en"