import React from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-[1.62rem]">
      <ol className="flex list-none p-0 m-0">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="text-[#686868] font-[500] no-underline"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={
                    isLast ? "font-[500] text-[#FF9626]" : "text-gray-500"
                  }
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="mx-2 text-[#686868] font-[500]">{">"}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
