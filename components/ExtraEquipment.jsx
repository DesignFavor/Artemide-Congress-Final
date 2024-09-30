import Image from "next/image";
import React, { useEffect } from "react";
import { Bebas_Neue } from "next/font/google";
import { useEvent } from "@/context/EventContext";
import useEventDataStore from "@/stores/event-data";

// Define paths to images in the public directory
export const equipmentImages = {
  "TAVOLI RETTANGOLARI": "/TavoloRettangolare.png",
  "Tavoli Tondi": "/TavoloTondo.png",
  TOVAGLIE: "/Tovaglie.png",
  LAPTOP: "/laptop.png",
  "PC STATION": "/ComputerCpu.png",
  "SPAZIO ESTERNO": "/SpaziEsterni.png",
  "MONITOR PC": "/lcd.png",
  "ADDOBBI FLOREALI": "/AddobbiFloreali.png",
  "TENSO STRUTTURA": "/TensileStructure.png",
  "REGISTRAZIONE/VIDEO": "/VideoRegister.png",
};

const font_Bebas_Neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const ExtraEquipment = () => {
  const { selectedEquipment, toggleEquipmentSelection } = useEventDataStore();
  const { state, updateEquipment } = useEvent();

  // Log selected equipment data to verify
  useEffect(() => {
    console.log("Selected Equipment:", selectedEquipment);
  }, [selectedEquipment]);

  const equipments = [
    "TAVOLI RETTANGOLARI",
    "Tavoli Tondi",
    "TOVAGLIE",
    "LAPTOP",
    "PC STATION",
    "SPAZIO ESTERNO",
    "MONITOR PC",
    "ADDOBBI FLOREALI",
    "TENSO STRUTTURA",
    "REGISTRAZIONE/VIDEO",
  ];

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ${font_Bebas_Neue.className} text-[26px] leading-8 my-16`}
    >
      {equipments.map((item, index) => (
        <div
          onClick={() => {
            toggleEquipmentSelection(item);
            updateEquipment(item);
          }}
          key={"equipment" + index}
          className={`cursor-pointer flex flex-col items-center justify-center gap-2 transition-all`}
        >
          <div
            className={`w-[232px] h-[232px] bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-2xl ${
              state.equipment.includes(item)
                ? "border-[2px] border-bgorange" // Only image has stroke when selected
                : "border-[2px] border-white border-opacity-10"
            }`}
          >
            <div className={`w-full h-full p-[2px] rounded-md`}>
              <Image
                src={equipmentImages[item] || "/placeholder.png"}
                alt={item}
                width={400}
                height={400}
                className="object-cover rounded-md"
              />
            </div>
          </div>
          <div
            className={`${
              state.equipment.includes(item) ? "text-bgorange" : "text-white"
            }`} // Text turns orange when selected
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtraEquipment;
