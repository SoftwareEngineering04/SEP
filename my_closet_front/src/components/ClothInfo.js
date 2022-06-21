const ClothInfo = (props) => {
    const url = props.photo.toString();
    return(
        <div style={{border : '1px solid black'}}>
            <img alt={'이미지'} src={url}
                 style={{width:'100px', height:'100px'}} />
            <p>이름 : {props.name}</p>
            <p>카테고리 : {props.category} - {props.subcategory}</p>
            <p>계절 : {props.filter}</p>
        </div>
    );
}

export default ClothInfo;