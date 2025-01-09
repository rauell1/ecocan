import clsx from "clsx";
import Link from "next/link";

const HyperLink = ({
  link,
  href,
  className,
}: {
  link: string;
  href: string;
  className?: string;
}) => {
  const isExternal = href.startsWith("mailto:") || href.startsWith("http");

  return isExternal ? (
    <a
      href={href}
      className={clsx(
        "text-primary relative underline underline-offset-4",
        className
      )}
    >
      {link}
    </a>
  ) : (
    <Link
      href={href}
      className={clsx(
        "text-primary relative underline underline-offset-4",
        className
      )}
    >
      {link}
    </Link>
  );
};

export default HyperLink;

