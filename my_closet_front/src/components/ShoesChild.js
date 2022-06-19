const ShoesChild = (props) => {
  const handleValue = (e) => props.setSecondValue(e.target.value);
  return(
    <>
      <select name='ShoesCategory' onChange={handleValue}
      style={{padding:'5px', borderRadius:'5px', display:props.display}}>
        <option value='전체'>{'하위 카테고리 전체'}</option>
        <option value='구두'>{'구두'}</option>
        <option value='부츠'>{'부츠'}</option>
        <option value='운동화'>{'운동화'}</option>
        <option value='단화'>{'단화'}</option>
        <option value='기타'>{'기타'}</option>
    </select>
    </>
  );
}

export default ShoesChild;