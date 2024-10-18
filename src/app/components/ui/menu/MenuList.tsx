type foodType = {
  type: '양식' | '중식' | '한식'
}



const MenuList = ({ type }: foodType) => {

  const menu = {
    양식: ['파스타', '리조또', '스프'],
    한식: ['국밥', '제육볶음', '된장찌개'],
    중식: ['짜장면', '짬뽕', '탕수육']
  }
  return (
    <>
      <h2>{type} 메뉴판</h2>
      <ul>
        {menu[type].map((food, i) => <li key={i}>{food}</li>)}
      </ul>
    </>
  )
}

export default MenuList