import React from "react"

interface ItemListProps {
  id: number | string
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
}

export const ItemList: React.FC<ItemListProps> = ({ id, title, description }) => (
  <div className="mb-4 flex flex-row gap-3">
    <div>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#228B22] via-[#4ac63fcf] to-[#FFDD4C]">
        <span className="text-xs leading-none text-white">{id}</span>
      </div>
    </div>
    <div className="pt-0">
      <span className="font-medium text-muted-foreground lg:text-lg">{title}</span>
      <span className="text-muted-foreground">{description}</span>
    </div>
  </div>
)
