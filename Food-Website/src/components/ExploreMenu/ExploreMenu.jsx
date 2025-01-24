import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
// eslint-disable-next-line react/prop-types
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='Explore-Menu' id='Explore-Menu'>
      <h1>Explore our menu</h1>
      <p className='Explore-Menu-Text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className='Explore-Menu-List'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className='Explore-Menu-List-Item'>
              <img className={category===item.menu_name?'active':''} src={item.menu_image} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr></hr>
    </div>
  )
}

export default ExploreMenu
