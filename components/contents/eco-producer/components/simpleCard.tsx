import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import clsx from "clsx";

export default function SimpleCard({
 image,
  title,
  content,
  className,
  cardHeight,
}: {
  image?: React.ReactNode;
  title?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
  cardHeight?: string;
}) {
  return (
    <Card
      className={clsx(
        "border-2 border-primary rounded-3xl overflow-hidden lg:hadow-lg",
        className
      )}
    >
        {image}
      <div className={`${cardHeight} flex flex-col`}>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {content}
        </CardContent>
      </div>
    </Card>
  );
}
