import { prisma } from "@/lib/prisma";
import Layout from "../../component/layout";
import DetailProdukComponen from "@/app/component/product-detail";

type Props = {
  params: {
    slug: string;
  };
};

export default async function DetailProduk({ params }: Props) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
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

  console.log(product);

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <Layout>
      <DetailProdukComponen product={product} />
    </Layout>
  );
}
