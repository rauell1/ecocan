import { useState, useEffect } from 'react';

interface PreloadResult {
  imagesLoaded: boolean;
  preloadedImages: HTMLImageElement[];
  error: Error | null;
}

/**
 * Custom hook for preloading an array of images
 * @param imageUrls Array of image URLs to preload
 * @param options Configuration options
 * @returns Object containing loading state, preloaded images, and any error
 */
export const useImagePreloader = (
  imageUrls: string[],
  options: {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
  } = {}
): PreloadResult => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const loadPromises = imageUrls.map((src) => {
          return new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new window.Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = (e) => reject(new Error(`Failed to load image: ${src}`));
          });
        });

        const loadedImages = await Promise.all(loadPromises);
        setPreloadedImages(loadedImages);
        setImagesLoaded(true);
        options.onSuccess?.();
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to preload images');
        console.error('Error preloading images:', error);
        setError(error);
        setImagesLoaded(true); // Set to true even on error to show fallback
        options.onError?.(error);
      }
    };

    preloadImages();
  }, [imageUrls, options.onSuccess, options.onError, options]);

  return { imagesLoaded, preloadedImages, error };
};