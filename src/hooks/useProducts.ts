"use client";

import { useState, useEffect, useCallback } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { Product } from "@/types";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      if (!db) {
        setProducts([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      const q = query(
        collection(db, "products"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const items: Product[] = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as Product[];
      setProducts(items);
      setError(null);
    } catch (err) {
      setError("Failed to load products");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const getProduct = async (id: string): Promise<Product | null> => {
    if (!db) return null;
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Product;
      }
      return null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const addProduct = async (
    data: Omit<Product, "id" | "createdAt" | "updatedAt">,
    imageFiles: File[]
  ): Promise<string | null> => {
    if (!db) return null;
    try {
      const imageUrls = await uploadImages(imageFiles);
      const docRef = await addDoc(collection(db, "products"), {
        ...data,
        images: imageUrls,
        createdAt: Timestamp.now().toDate().toISOString(),
        updatedAt: Timestamp.now().toDate().toISOString(),
      });
      await fetchProducts();
      return docRef.id;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const updateProduct = async (
    id: string,
    data: Partial<Product>,
    newImages?: File[]
  ): Promise<boolean> => {
    if (!db) return false;
    try {
      let imageUrls = data.images || [];
      if (newImages && newImages.length > 0) {
        const urls = await uploadImages(newImages);
        imageUrls = [...imageUrls, ...urls];
      }
      await updateDoc(doc(db, "products", id), {
        ...data,
        images: imageUrls,
        updatedAt: Timestamp.now().toDate().toISOString(),
      });
      await fetchProducts();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const deleteProduct = async (id: string): Promise<boolean> => {
    if (!db) return false;
    try {
      await deleteDoc(doc(db, "products", id));
      await fetchProducts();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const uploadImages = async (files: File[]): Promise<string[]> => {
    const urls: string[] = [];
    for (const file of files) {
      const url = await uploadToCloudinary(file);
      if (url) urls.push(url);
    }
    return urls;
  };

  const toggleFeatured = async (id: string, featured: boolean) => {
    return updateProduct(id, { featured });
  };

  const toggleAvailability = async (
    id: string,
    availability: Product["availability"]
  ) => {
    return updateProduct(id, { availability });
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleFeatured,
    toggleAvailability,
  };
}
