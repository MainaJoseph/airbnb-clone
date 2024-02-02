import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

////////////////
interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

///////////

export default async function getFavoriteListings(params: IParams) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    const safeFavorites = favorites.map((favorite: any) => ({
      ...favorite,
      createdAt: favorite.createdAt.toString(),
    }));

    return safeFavorites;
  } catch (error: any) {
    throw new Error(error);
  }
}
