"use client";

import {Combobox, Transition} from '@headlessui/react';

import { SearchManufacturerProps } from '@/types';


const SearchManufacturer = ({
    manufacturer, setManufacturer
} : SearchManufacturerProps) => {
  return (
    <div className="SearchManufacturer">
        <Combobox>
            <div className="relative w-full">
                <Combobox.Button className="">

                </Combobox.Button>

            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer