import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loader2, LucideX } from "lucide-react";

type MediaViewerProps = {
  type: "video" | "pdf";
  title: string;
  source: string;
  start?: number; // Start time in seconds
  end?: number; // End time in seconds (optional)
  trigger?: React.ReactNode; // Optional trigger element
};

const MediaViewer: React.FC<MediaViewerProps> = ({
  type,
  title,
  source,
  start,
  end,
  trigger,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const getVideoUrl = (url: string, start?: number, end?: number) => {
    const hasQueryParams = url.includes("?");
    let videoUrl = `${url}${hasQueryParams ? "&" : "?"}start=${start ?? 0}`;
    if (end) videoUrl += `&end=${end}`;
    return videoUrl;
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {trigger ?? (
          <span className="text-primary underline underline-offset-4 cursor-pointer">
            {title}
          </span>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent className="z-[9999]">
        <div className="flex items-center">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">{title}</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogCancel className="bg-transparent hover:bg-transparent text-white/60 hover:text-white w-fit border-none ms-auto">
            <LucideX />
          </AlertDialogCancel>
        </div>
        <div className="relative flex-1 w-full h-full min-h-[60vh] z-[99999]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-secondary/20">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          )}
          {type === "video" ? (
            <iframe
              src={getVideoUrl(source, start, end)} // Use dynamic start and end times
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleIframeLoad}
            />
          ) : (
            <object
              data={source}
              type="application/pdf"
              className="w-full h-full"
              onLoad={handleIframeLoad}
            >
              <p>
                Unable to display PDF.{" "}
                <a href={source} target="_blank" rel="noopener noreferrer">
                  Download
                </a>{" "}
                instead.
              </p>
            </object>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MediaViewer;
