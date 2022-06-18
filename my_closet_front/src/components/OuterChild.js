const OuterChild = (props) => {
  return(
    <>
      <select name='OuterCategory'
      style={{padding:'5px', borderRadius:'5px', display:props.display}}>
        <option value='all'>{'하위 카테고리 전체'}</option>
        <option value='padding'>{'패딩'}</option>
        <option value='coat'>{'코트'}</option>
        <option value='blazer'>{'블레이저'}</option>
        <option value='cardigan'>{'가디건'}</option>
        <option value='hoodZipup'>{'후드집업'}</option>
        <option value='etc'>{'기타'}</option>
    </select>
    </>
  );
}

export default OuterChild;