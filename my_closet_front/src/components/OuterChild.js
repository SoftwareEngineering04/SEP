const OuterChild = (props) => {
  const handleValue = (e) => props.setSecondValue(e.target.value);

  return(
    <>
      <select name='OuterCategory' onChange={handleValue}
      style={{padding:'5px', borderRadius:'5px', display:props.display}}>
        <option value='전체'>{'하위 카테고리 전체'}</option>
        <option value='패딩'>{'패딩'}</option>
        <option value='코트'>{'코트'}</option>
        <option value='블레이저'>{'블레이저'}</option>
        <option value='가디건'>{'가디건'}</option>
        <option value='후드집업'>{'후드집업'}</option>
        <option value='기타'>{'기타'}</option>
    </select>
    </>
  );
}

export default OuterChild;