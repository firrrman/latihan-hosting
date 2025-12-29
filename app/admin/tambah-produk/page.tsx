export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import {
  createCategory,
  createColor,
  createProduct,
  createSize,
} from "@/app/actions/product";
import LayoutAdmin from "@/app/component/layout-admin";

export default async function AdminProductPage() {
  const colors = await prisma.color.findMany({ orderBy: { name: "asc" } });
  const sizes = await prisma.size.findMany({ orderBy: { name: "asc" } });
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <LayoutAdmin activeMenuProp="products">
      <div className=" p-4 md:p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Tambah Produk</h1>
            <p className="text-gray-600 text-sm mt-1">
              Kelola kategori, warna, ukuran, dan produk Anda
            </p>
          </div>

          {/* Grid Layout untuk Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Form Kategori */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Tambah Kategori
                </h2>
              </div>
              <form action={createCategory} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Kategori
                  </label>
                  <input
                    name="name"
                    placeholder="Contoh: Ruang Tamu"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug
                  </label>
                  <input
                    name="slug"
                    placeholder="ruang-tamu"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <button className="w-full cursor-pointer bg-[#2645ff] hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-lg transition-colors">
                  Simpan Kategori
                </button>
              </form>
            </div>

            {/* Form Warna */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Tambah Warna
                </h2>
              </div>
              <form action={createColor} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Warna
                  </label>
                  <input
                    name="name"
                    placeholder="Contoh: Merah"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kode Hex
                  </label>
                  <input
                    name="hex"
                    placeholder="#FF0000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <button className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2.5 rounded-lg transition-colors">
                  Simpan Warna
                </button>
              </form>
            </div>

            {/* Form Ukuran */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Tambah Ukuran
                </h2>
              </div>
              <form action={createSize} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Ukuran
                  </label>
                  <input
                    name="name"
                    placeholder="Contoh: Medium"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <button className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2.5 rounded-lg transition-colors">
                  Simpan Ukuran
                </button>
              </form>
            </div>
          </div>

          {/* Form Produk - Full Width */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Tambah Produk Baru
              </h2>
            </div>

            <form action={createProduct} className="space-y-6">
              {/* Informasi Dasar */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Produk *
                  </label>
                  <input
                    name="name"
                    placeholder="Contoh: Baskom Plastik"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug *
                  </label>
                  <input
                    name="slug"
                    placeholder="baskom-plastik"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Harga Dasar *
                  </label>
                  <input
                    name="basePrice"
                    type="number"
                    placeholder="50000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kategori
                  </label>
                  <select
                    name="categoryId"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    defaultValue=""
                  >
                    <option value="">Pilih Kategori (opsional)</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Deskripsi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deskripsi Singkat
                  </label>
                  <textarea
                    name="description"
                    placeholder="Deskripsi singkat produk..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Detail Produk
                  </label>
                  <textarea
                    name="details"
                    placeholder="Detail produk (bahan, dimensi, dll)..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Highlights
                </label>
                <textarea
                  name="highlights"
                  placeholder="- Tahan lama&#10;- Mudah dibersihkan&#10;- Ramah lingkungan"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Pisahkan setiap highlight dengan enter
                </p>
              </div>

              {/* Ukuran & Harga */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Ukuran & Harga Varian
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {sizes.map((size) => (
                    <div
                      key={size.id}
                      className="flex items-center gap-2 bg-white p-3 rounded border border-gray-200"
                    >
                      <input
                        type="checkbox"
                        name="sizes"
                        value={size.id}
                        className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="font-medium text-gray-700 min-w-15">
                        {size.name}
                      </span>
                      <input
                        type="number"
                        name={`price-${size.id}`}
                        placeholder="Harga"
                        className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Warna */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Pilih Warna
                </label>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <label
                      key={color.id}
                      className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200 cursor-pointer hover:border-orange-300 transition-colors"
                    >
                      <input
                        type="checkbox"
                        name="colors"
                        value={color.id}
                        className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {color.name}
                      </span>
                      <div
                        className="w-6 h-6 rounded border-2 border-gray-300"
                        style={{ backgroundColor: color.hex }}
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Upload Gambar */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gambar Produk *
                </label>
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  multiple
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Bisa upload beberapa gambar sekaligus
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button className="w-full cursor-pointer bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-sm hover:shadow-md">
                  Simpan Produk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
