const ShoesChild = (props) => {
  return(
    <>
      <select name='ShoesCategory'
      style={{padding:'5px', borderRadius:'5px', display:props.display}}>
        <option value='all'>{'하위 카테고리 전체'}</option>
        <option value='shoes'>{'구두'}</option>
        <option value='boots'>{'부츠'}</option>
        <option value='sneakers'>{'운동화'}</option>
        <option value='loafer'>{'단화'}</option>
        <option value='etc'>{'기타'}</option>
    </select>
    </>
  );
}

export default ShoesChild;