const BottomChild = (props) => {
  return (
    <>
      <select name='BottomCategory'
      style={{padding:'5px', borderRadius:'5px', display:props.display}}>
        <option value='all'>{'하위 카테고리 전체'}</option>
        <option value='jean'>{'청바지'}</option>
        <option value='contton'>{'코튼'}</option>
        <option value='slacks'>{'슬랙스'}</option>
        <option value='training'>{'트레이닝'}</option>
        <option value='shortPants'>{'숏팬츠'}</option>
        <option value='leggings'>{'레깅스'}</option>
        <option value='skirt'>{'치마'}</option>
        <option value='etc'>{'기타'}</option>
    </select>
    </>
  )
}

export default BottomChild;