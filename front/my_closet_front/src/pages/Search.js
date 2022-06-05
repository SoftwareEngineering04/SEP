import BottomMenu from "../components/BottomMenu";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

const Search = () => {
  return(
    <>
    <Header />
    <Input type="text"
    placeholder={'검색어를 입력해주세요'}/>
    <Button value={'검색'} />
    <p>{'의류 출력해야함...'}</p>
    {/*입력값으로 의류 출력...*/}
    <BottomMenu />
    </>
  );
}

export default Search;