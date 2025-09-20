"use client"

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types"
import { Dialog, DialogPanel } from "@headlessui/react";
import { close } from "fs";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFilterProps {
    sizes:Size[];
    colors: Color[];
};

const MobileFilters: React.FC<MobileFilterProps> = ({
        sizes,
        colors,
}) => {
    const [open, setOpen] = useState(false);

    const onOpen= () =>setOpen(true);
    const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden text-white"
      >
        Filters
        <Plus size={20} />
      </Button>

      <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        <div className="fixed inset-0 bg-black/25" />  

        <div className="fixed inset-0 flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
                <IconButton icon={<X size={15}/>} onClick={onClose}/>
            </div>

            <div className="p-4">
            <Filter 
                valueKey="sizeID"
                name="Sizes"
                data={sizes}
                />
                <Filter 
                valueKey="sizeID"
                name="Colors"
                data={colors}
                />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default MobileFilters