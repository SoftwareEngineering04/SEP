const TopChild = (props) => {
  const handleValue = (e) => props.setSecondValue(e.target.value);
  return (
    <>
      <select name='TopCategory' onChange={handleValue}
      style={{padding:'5px', borderRadius:'5px', display:props.display}}>
        <option value='전체'>{'하위 카테고리 전체'}</option>
        <option value='후드티'>{'후드티'}</option>
        <option value='맨투맨'>{'맨투맨'}</option>
        <option value='셔츠'>{'셔츠'}</option>
        <option value='니트'>{'니트'}</option>
        <option value='롱슬리브'>{'롱슬리브'}</option>
        <option value='반팔'>{'반팔'}</option>
        <option value='기타'>{'기타'}</option>
    </select>
    </>
  )
}

export default TopChild