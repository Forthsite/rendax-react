import Card from './Card'
import svg_truck from '../assets/truck.svg'
import tow from '../assets/tow.svg'
import metal from '../assets/metalsvg.svg'
import bumper from '../assets/bumper.svg'
import transport from '../assets/transport.svg'
import { GiCargoCrane } from "react-icons/gi";
import { TbCarCrane } from "react-icons/tb";
import { FaTruck } from "react-icons/fa";
import { TbBrandDatabricks } from "react-icons/tb";
import { PiHouseLineBold } from "react-icons/pi";

function CardGrid({ Card }) {

  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 w-5/6 mt-20 py-12 gap-16'>
            <Card text={<>Hydraulická ruka <br />&nbsp; </>} svg={<GiCargoCrane size={56} />}/>
            <Card text={<>Jeřábnické práce <br />&nbsp; </>} svg={<TbCarCrane size={60} />}/>
            <Card text='Doprava stavebního materiálu' svg={<FaTruck size={60} />}/>
            <Card text='Prodej materiálu pro Vaši stavbu' svg={<TbBrandDatabricks size={60} />} />
            <div className='col-span-1 sm:col-span-2 xl:col-span-1'>
              <Card text='Přeprava TINY HOUSŮ' svg={<PiHouseLineBold size={60} />}/>
            </div>
        </div>
    </>
  )
}

export default CardGrid
