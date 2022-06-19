const BottomChild = (props) => {
  const handleValue = (e) => props.setSecondValue(e.target.value);
  return (
    <>
      <select name='BottomCategory' onChange={handleValue}
      style={{padding:'5px', borderRadius:'5px', display:props.display}}>
        <option value='전체'>{'하위 카테고리 전체'}</option>
        <option value='청바지'>{'청바지'}</option>
        <option value='면바지'>{'코튼'}</option>
        <option value='슬랙스'>{'슬랙스'}</option>
        <option value='트레이닝'>{'트레이닝'}</option>
        <option value='숏팬츠'>{'숏팬츠'}</option>
        <option value='레깅스'>{'레깅스'}</option>
        <option value='치마'>{'치마'}</option>
        <option value='기타'>{'기타'}</option>
    </select>
    </>
  )
}

export default BottomChild;