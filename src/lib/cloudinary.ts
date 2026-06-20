const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function getCloudinaryUrl(publicId: string, options?: {
  width?: number;
  height?: number;
  quality?: number;
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  crop?: "fill" | "fit" | "scale" | "thumb";
}): string | null {
  if (!CLOUD_NAME || !publicId) return null;

  const {
    width = 800,
    height = 600,
    quality = 80,
    format = "auto",
    crop = "fill",
  } = options || {};

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_${format},q_${quality},w_${width},h_${height},c_${crop}/${publicId}`;
}

export function getFirebaseCloudinaryUrl(firebaseUrl: string, options?: {
  width?: number;
  height?: number;
  quality?: number;
}): string {
  const { width = 800, height = 600, quality = 80 } = options || {};
  const encodedUrl = encodeURIComponent(firebaseUrl);
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) return firebaseUrl;

  return `https://res.cloudinary.com/${cloudName}/image/fetch/f_auto,q_${quality},w_${width},h_${height},c_fill/${encodedUrl}`;
}
