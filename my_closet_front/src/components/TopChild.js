const TopChild = (props) => {
  return (
    <>
      <select name='TopCategory'
      style={{padding:'5px', borderRadius:'5px', display:props.display}}>
        <option value='all'>{'하위 카테고리 전체'}</option>
        <option value='hoodie'>{'후드티'}</option>
        <option value='mtm'>{'맨투맨'}</option>
        <option value='shirt'>{'셔츠'}</option>
        <option value='knit'>{'니트'}</option>
        <option value='longSleeve'>{'롱슬리브'}</option>
        <option value='shortSleeve'>{'반팔'}</option>
        <option value='etc'>{'기타'}</option>
    </select>
    </>
  )
}

export default TopChild