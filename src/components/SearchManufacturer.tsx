"use client";
import { SearchManuFacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import { useState,Fragment } from 'react';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({manufacturer, setManuFacturer}:SearchManuFacturerProps ) => {
    const [query, setQuery] = useState('')
    const filteredManufacturers = query === ""
    ?manufacturers
    :manufacturers.filter((item)=>{
            return item.toLowerCase()
            .replace(/\s+/g,"")
            .includes(query.toLowerCase().replace(/\s+/g,"")
     ) })
  return (
    <div className= "search-manufacturer">
        <Combobox value={manufacturer} onChange={setManuFacturer}>
            <div className="relative w-full">
                    <Combobox.Button className='absolute top-[14px]'>
                      <Image
                      src="/car-logo.svg"
                      width={20}
                      height={20}
                      className="ml-4"
                      alt="Car Logo"
                      />
                    </Combobox.Button>
                    <Combobox.Input
                    className="search-manufacturer__input"
                    displayValue={(item: string) => item}
                    placeholder="Volkswagen"
                    onChange={(event) => setQuery(event.target.value)} 
                    />
                    <Transition 
                    as = {Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom ="opdacity-100"
                    leaveTo = "opacity-0"
                    afterLeave = {()=>setQuery('')}
                    >
                        <Combobox.Options className="search-manufacturer__options">
                            {  filteredManufacturers.map((item)=>(
                                        <Combobox.Option
                                        key={item}
                                        value={item}
                                        className={({active})=>
                                        ` relative search-manufacturer__option
                                        ${active ? 'bg-primary-blue text-white':'text-gray-900'}
                                        `}
                                        >
                                                                 {({selected,active})=>(
                                                                    <>
                                                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                                            {item}
                                                                        </span>
                                                                                               {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}

                                        </Combobox.Option>
                                    )  
                                       
                                    )
                                
                                }
                        </Combobox.Options>
                        
                    </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer