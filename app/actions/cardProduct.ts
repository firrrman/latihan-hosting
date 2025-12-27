"use server";
import { prisma } from "@/lib/prisma";

export async function bestSeller() {
  return await prisma.product.findMany({
    orderBy: {
      createdAt: "asc",
    },
    take: 10,
    include: {
      images: true,
      colors: true,
      sizes: {
        include: {
          size: true,
        },
      },
    },
  });
}

export async function newProducts() {
  return await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
    include: {
      images: true,
      colors: true,
      sizes: {
        include: {
          size: true,
        },
      },
    },
  });
}

export async function allProducts(
  page: number = 1,
  limit: number = 10,
  search?: string
) {
  const validPage = Math.max(1, page);
  const validLimit = Math.min(Math.max(1, limit), 100);
  const skip = (validPage - 1) * validLimit;

  // Buat where condition untuk search
  const whereCondition = search
    ? {
        OR: [
          { name: { contains: search, mode: "insensitive" as const } },
          { description: { contains: search, mode: "insensitive" as const } },
        ],
      }
    : {};

  try {
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where: whereCondition,
        skip,
        take: validLimit,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          images: true,
          colors: true,
          sizes: {
            include: {
              size: true,
            },
          },
        },
      }),
      prisma.product.count({
        where: whereCondition,
      }),
    ]);

    return {
      data: products,
      meta: {
        page: validPage,
        limit: validLimit,
        total,
        totalPage: Math.ceil(total / validLimit),
        search: search || null,
      },
    };
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
}

export async function getCategoryProducts(
  category: string,
  page: number = 1,
  limit: number = 10,
  search?: string
) {
  const validPage = Math.max(1, page);
  const validLimit = Math.min(Math.max(1, limit), 100);
  const skip = (validPage - 1) * validLimit;

  // Buat where condition untuk kategori dan search
  const whereCondition: any = {
    category: {
      slug: category,
    },
  };

  if (search) {
    whereCondition.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
  }

  try {
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where: whereCondition,
        skip,
        take: validLimit,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          images: true,
          colors: true,
          sizes: {
            include: {
              size: true,
            },
          },
        },
      }),
      prisma.product.count({
        where: whereCondition,
      }),
    ]);

    return {
      data: products,
      meta: {
        page: validPage,
        limit: validLimit,
        total,
        totalPage: Math.ceil(total / validLimit),
        category,
        search: search || null,
      },
    };
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    throw error;
  }
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findUnique({
    where: { slug: slug },
    include: {
      images: true,
      sizes: {
        include: { size: true },
      },
      colors: {
        include: { color: true },
      },
    },
  });
}
