import Card from './Card'
import svg_truck from '../assets/truck.svg'
import tow from '../assets/tow.svg'
import metal from '../assets/metalsvg.svg'
import bumper from '../assets/bumper.svg'
import transport from '../assets/transport.svg'

function CardGrid({ Card }) {

  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 w-5/6 mt-20 py-12 gap-16'>
            {/* spray paint gun by Rolas Design from Noun Project (CC BY 3.0) */}
            <Card text='Jeřábnické práce' svg={tow}/>
            <Card text='Autodoprava' svg={svg_truck}/>
            {/* bumper by Ibrahim Nuruz from Noun Project (CC BY 3.0) */}
            <Card text='Lakování plastů' svg={bumper} svgSize={9}/>
            {/* Metal icon by Chintuza from Noun Project (CC BY 3.0) */}
            <Card text='Lakování kovů' svg={metal} />
            <div className='col-span-1 sm:col-span-2 xl:col-span-1'>
              <Card text='Vlastní autodoprava' svg={transport}/>
            </div>
        </div>
    </>
  )
}

export default CardGrid
